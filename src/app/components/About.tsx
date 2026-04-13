'use client';

import { Lightbulb, Target, TrendingUp, User } from 'lucide-react';
import { useLanguage } from '../context/language-context';

export function About() {
  const { t } = useLanguage();

  const icons = [
    <Target key="focused" className="h-6 w-6 text-blue-600 dark:text-sky-300" />,
    <Lightbulb key="innovative" className="h-6 w-6 text-sky-600 dark:text-cyan-300" />,
    <TrendingUp key="growth" className="h-6 w-6 text-teal-600 dark:text-teal-300" />,
    <User key="team" className="h-6 w-6 text-blue-600 dark:text-sky-300" />,
  ];

  const cardStyles = [
    'border-blue-200 bg-white/80 shadow-blue-100/60 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-slate-950/40',
    'border-sky-200 bg-white/80 shadow-sky-100/60 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-slate-950/40',
    'border-teal-200 bg-white/80 shadow-teal-100/60 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-slate-950/40',
    'border-blue-200 bg-white/80 shadow-blue-100/60 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-slate-950/40',
  ];

  const iconBgStyles = [
    'bg-blue-100 dark:bg-slate-800',
    'bg-sky-100 dark:bg-slate-800',
    'bg-teal-100 dark:bg-slate-800',
    'bg-blue-100 dark:bg-slate-800',
  ];

  return (
    <section id="about" className="flex min-h-screen items-center justify-center px-6 py-20">
      <div className="w-full max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-slate-100 md:text-5xl">
            {t.about.title} <span className="text-blue-600 dark:text-sky-300">{t.about.highlight}</span>
          </h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-blue-500 via-sky-500 to-teal-400"></div>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {t.about.cards.map((card, index) => (
              <div
                key={card.title}
                className={`rounded-2xl border p-6 shadow-lg transition-all duration-300 hover:scale-105 ${cardStyles[index]}`}
              >
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${iconBgStyles[index]}`}>
                  {icons[index]}
                </div>
                <h3 className="mb-2 font-semibold text-slate-900 dark:text-slate-100">{card.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
