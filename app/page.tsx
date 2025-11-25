import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import QuickBlocks from '@/components/QuickBlocks';
import Promise from '@/components/Promise';
import About from '@/components/About';
import Services from '@/components/Services';
import JVAdvantage from '@/components/JVAdvantage';
import Leadership from '@/components/Leadership';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <QuickBlocks />
      <Promise />
      <About />
      <Services />
      <JVAdvantage />
      <Leadership />
      <Contact />
      <Footer />
    </main>
  );
}
