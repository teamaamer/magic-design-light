"use client";

import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const GlowingStarsBackgroundCard = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  const [mouseEnter, setMouseEnter] = useState(false);

  return (
    <div
      onMouseEnter={() => {
        setMouseEnter(true);
      }}
      onMouseLeave={() => {
        setMouseEnter(false);
      }}
      className={cn(
        "bg-[linear-gradient(110deg,#333_0.6%,#222)] p-4 max-w-md max-h-[20rem] h-full w-full rounded-xl border border-[#eaeaea] dark:border-neutral-600",
        className
      )}
    >
      <div className="flex justify-center items-center">
        <Illustration mouseEnter={mouseEnter} />
      </div>
      <div className="px-2 pb-6">{children}</div>
    </div>
  );
};

export const GlowingStarsDescription = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <p className={cn("text-base text-white max-w-[16rem]", className)}>
      {children}
    </p>
  );
};

export const GlowingStarsTitle = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <h2 className={cn("font-bold text-2xl text-[#eaeaea]", className)}>
      {children}
    </h2>
  );
};

export const Illustration = ({ mouseEnter }: { mouseEnter: boolean }) => {
  const stars = 800;
  const columns = 40;

  const [glowingStars, setGlowingStars] = useState<number[]>([]);
  const [waveOffset, setWaveOffset] = useState(0);

  const highlightedStars = useRef<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      // Random twinkling - select random stars to glow
      const twinklingStars: number[] = [];
      const numberOfTwinkles = 15; // Fewer stars for peaceful effect
      
      for (let i = 0; i < numberOfTwinkles; i++) {
        const randomStar = Math.floor(Math.random() * stars);
        if (!twinklingStars.includes(randomStar)) {
          twinklingStars.push(randomStar);
        }
      }
      
      highlightedStars.current = twinklingStars;
      setGlowingStars([...highlightedStars.current]);
    }, 1500); // Slower interval for peaceful effect

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-full p-1 w-full"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: `1px`,
      }}
    >
      {[...Array(stars)].map((_, starIdx) => {
        const isGlowing = glowingStars.includes(starIdx);
        const delay = (starIdx % 10) * 0.1;
        const staticDelay = starIdx * 0.01;
        return (
          <div
            key={`matrix-col-${starIdx}}`}
            className="relative flex items-center justify-center"
          >
            <Star
              isGlowing={mouseEnter ? true : isGlowing}
              delay={mouseEnter ? staticDelay : delay}
            />
            {mouseEnter && <Glow delay={staticDelay} />}
            <AnimatePresence mode="wait">
              {isGlowing && <Glow delay={delay} />}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

const Star = ({ isGlowing, delay }: { isGlowing: boolean; delay: number }) => {
  return (
    <motion.div
      key={delay}
      initial={{
        scale: 1,
      }}
      animate={{
        scale: isGlowing ? [1, 1.2, 1.4, 1.3, 1.1, 1] : 1,
        background: isGlowing ? "#ffffff" : "#000000",
        boxShadow: isGlowing 
          ? [
              "0 0 1px #ffffff",
              "0 0 3px #ffffff, 0 0 5px #ffffff",
              "0 0 5px #ffffff, 0 0 8px #ffffff",
              "0 0 6px #ffffff, 0 0 10px #ffffff",
              "0 0 4px #ffffff, 0 0 6px #ffffff",
              "0 0 2px #ffffff"
            ]
          : "0 0 0px rgba(0, 0, 0, 0)",
      }}
      transition={{
        duration: 4,
        ease: [0.25, 0.1, 0.25, 1],
        delay: delay,
      }}
      className={cn("bg-black h-[3px] w-[3px] rounded-full relative z-20")}
    ></motion.div>
  );
};

const Glow = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        delay: delay,
      }}
      exit={{
        opacity: 0,
      }}
      className="absolute left-1/2 -translate-x-1/2 z-10 h-[6px] w-[6px] rounded-full bg-white shadow-lg shadow-white/60"
    />
  );
};
