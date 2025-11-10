import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import MissionVision from '@/components/MissionVision';
import Market from '@/components/Market';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <MissionVision />
      <Market />
      <CTA />
      <Footer />
    </main>
  );
}

