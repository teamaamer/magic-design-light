import Hero from '@/components/sections/Hero';
import StatementPanel from '@/components/sections/StatementPanel';
import ScrollMetrics from '@/components/sections/ScrollMetrics';
import About from '@/components/sections/About';
import Services from '@/components/sections/Services';
import FeaturedProjects from '@/components/sections/FeaturedProjects';
import Process from '@/components/sections/Process';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <StatementPanel />
      <ScrollMetrics />
      <About />
      <Services />
      <FeaturedProjects />
      <Process />
      <Testimonials />
      <Contact />
    </main>
  );
}
