import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { SocialBanner } from '@/components/sections/SocialBanner';
import { Contact } from '@/components/sections/Contact';

export default function Home() {
  return (
    <main className="min-h-screen space-y-0">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <SocialBanner />
      <Contact />
      <Footer />
    </main>
  );
}
