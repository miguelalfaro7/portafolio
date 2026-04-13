'use client';

import { Languages, Menu, Moon, Sun, X } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { useLanguage } from '../context/language-context';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'projects', label: t.nav.projects },
    { id: 'testimonials', label: t.nav.testimonials },
    { id: 'education', label: t.nav.education },
    { id: 'contact', label: t.nav.contact },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [navItems]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  const ControlButtons = () => (
    <div className="flex items-center gap-2">
      <button
        onClick={toggleLanguage}
        className="flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-3 py-2 text-sm font-medium text-blue-700 transition-all duration-300 hover:scale-105 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-900/80 dark:text-sky-300 dark:hover:bg-slate-800"
        aria-label={t.nav.language}
      >
        <Languages className="h-4 w-4" />
        {language.toUpperCase()}
      </button>
      <button
        onClick={toggleTheme}
        className="rounded-full border border-blue-200 bg-white/80 p-2 text-blue-700 transition-all duration-300 hover:scale-105 hover:bg-blue-50 dark:border-slate-700 dark:bg-slate-900/80 dark:text-amber-300 dark:hover:bg-slate-800"
        aria-label={t.nav.theme}
      >
        {mounted && resolvedTheme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
      </button>
    </div>
  );

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-blue-200/60 bg-white/75 shadow-lg shadow-blue-200/40 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/80 dark:shadow-slate-950/40'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => scrollToSection('home')}
            className="bg-gradient-to-r from-blue-600 via-sky-600 to-teal-500 bg-clip-text text-2xl font-bold text-transparent transition-transform hover:scale-105"
          >
            MA
          </button>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'scale-110 text-blue-700 dark:text-sky-300'
                    : 'text-slate-600 hover:text-sky-700 dark:text-slate-300 dark:hover:text-sky-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex">
            <ControlButtons />
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-slate-700 transition-colors hover:bg-blue-100 dark:text-slate-200 dark:hover:bg-slate-800 md:hidden"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="mt-4 space-y-2 rounded-2xl border border-blue-200 bg-white/90 py-4 shadow-xl shadow-blue-100/60 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90 dark:shadow-slate-950/50 md:hidden">
            <div className="px-6 pb-2">
              <ControlButtons />
            </div>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full px-6 py-3 text-left font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-blue-100/80 text-blue-700 dark:bg-slate-800 dark:text-sky-300'
                    : 'text-slate-600 hover:bg-sky-50 hover:text-sky-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-sky-300'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
