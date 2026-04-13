'use client';

import { About } from './components/About';
import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Testimonials } from './components/Testimonials';

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,#f4f9ff_0%,#ebf5ff_35%,#eefcf9_68%,#ffffff_100%)] text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
