import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Experience } from '@/components/sections/Experience';
import { Projects } from '@/components/sections/Projects';
import { OpenSource } from '@/components/sections/OpenSource';
import { Blogs } from '@/components/sections/Blogs';
import { SocialBanner } from '@/components/sections/SocialBanner';
import { Contact } from '@/components/sections/Contact';
import { TechMarquee } from '@/components/ui/TechMarquee';
import { Preloader } from '@/components/ui/Preloader';
import { CustomCursor } from '@/components/ui/CustomCursor';

export default function Home() {
  return (
    <main className="min-h-screen space-y-0 relative">
      <Preloader />
      <CustomCursor />
      <Header />
      <Hero />
      <TechMarquee />
      <About />
      <Projects />
      <OpenSource />
      <Blogs />
      <Experience />
      <SocialBanner />
      <Contact />
      <Footer />
    </main>
  );
}
