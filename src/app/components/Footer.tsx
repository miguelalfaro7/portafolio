'use client';

import { Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '../context/language-context';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const footerNavItems = [
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'projects', label: t.nav.projects },
    { id: 'testimonials', label: t.nav.testimonials },
    { id: 'contact', label: t.nav.contact },
  ];

  return (
    <footer className="border-t border-blue-200/70 bg-white/70 px-6 py-12 backdrop-blur dark:border-slate-800 dark:bg-slate-950/80">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 bg-gradient-to-r from-blue-600 via-sky-600 to-teal-500 bg-clip-text text-2xl font-bold text-transparent">
              Miguel Alfaro
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">{t.footer.role}</p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-slate-900 dark:text-slate-100">{t.footer.quickLinks}</h4>
            <div className="space-y-2">
              {footerNavItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block text-sm text-slate-500 transition-colors hover:text-blue-700 dark:text-slate-400 dark:hover:text-sky-300"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-slate-900 dark:text-slate-100">{t.footer.socials}</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/miguelalfaro7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700 transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white dark:bg-slate-800 dark:text-sky-300 dark:hover:bg-sky-600 dark:hover:text-slate-950"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-sky-700 transition-all duration-300 hover:scale-110 hover:bg-sky-600 hover:text-white dark:bg-slate-800 dark:text-cyan-300 dark:hover:bg-cyan-500 dark:hover:text-slate-950"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:pipealfa2007@gmail.com"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100 text-teal-700 transition-all duration-300 hover:scale-110 hover:bg-teal-500 hover:text-white dark:bg-slate-800 dark:text-teal-300 dark:hover:bg-teal-500 dark:hover:text-slate-950"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-100 pt-8 dark:border-slate-800">
          <p className="text-center text-sm text-slate-500 dark:text-slate-400">
            {t.footer.copyright.replace('{year}', String(currentYear))}
          </p>
        </div>
      </div>
    </footer>
  );
}
