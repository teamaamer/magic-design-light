"use client";

import React, { useEffect, useRef } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  animate,
} from "framer-motion";
import { Stars } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COLORS = ["#d4af37", "#e8c968", "#b8941f", "#d4af37"];

// Twinkling stars component
function TwinklingStars() {
  const pointsRef = useRef<THREE.Points>(null);
  const count = 2500;
  
  // Generate random star positions and twinkle speeds
  const [positions, twinkleSpeeds] = React.useMemo(() => {
    const pos = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    
    for (let i = 0; i < count; i++) {
      const radius = 50;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
      
      speeds[i] = 0.5 + Math.random() * 2; // Random twinkle speed
    }
    
    return [pos, speeds];
  }, []);
  
  useFrame((state) => {
    if (pointsRef.current) {
      const time = state.clock.elapsedTime;
      const colors = pointsRef.current.geometry.attributes.color;
      
      if (colors) {
        for (let i = 0; i < count; i++) {
          // Individual twinkling for each star
          const twinkle = Math.abs(Math.sin(time * twinkleSpeeds[i] + i));
          const brightness = 0.3 + twinkle * 0.7;
          
          colors.array[i * 3] = brightness; // R
          colors.array[i * 3 + 1] = brightness; // G
          colors.array[i * 3 + 2] = brightness; // B
        }
        colors.needsUpdate = true;
      }
    }
  });
  
  const geometry = React.useMemo(() => {
    const geom = new THREE.BufferGeometry();
    geom.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geom.setAttribute('color', new THREE.BufferAttribute(new Float32Array(count * 3).fill(1), 3));
    return geom;
  }, [positions, count]);

  return (
    <points ref={pointsRef} geometry={geometry}>
      <pointsMaterial
        size={0.8}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
      />
    </points>
  );
}

export const AuroraHero = () => {
  const color = useMotionValue(COLORS[0]);
  const x = useMotionValue(50);
  const y = useMotionValue(0);
  
  const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at ${x}% ${y}%, #000000 50%, ${color})`;

  useEffect(() => {
    // Animate color
    animate(color, COLORS, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
    
    // Animate gradient position for moving effect
    animate(x, [50, 60, 40, 50], {
      ease: "easeInOut",
      duration: 15,
      repeat: Infinity,
      repeatType: "mirror",
    });
    
    animate(y, [0, 10, -5, 0], {
      ease: "easeInOut",
      duration: 12,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, [color, x, y]);

  return (
    <motion.div
      style={{
        backgroundImage,
      }}
      className="absolute inset-0 overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Canvas>
          <TwinklingStars />
        </Canvas>
      </div>
    </motion.div>
  );
};
