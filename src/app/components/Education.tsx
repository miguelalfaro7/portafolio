'use client';

import { Award, Calendar, GraduationCap, MapPin } from 'lucide-react';
import { useLanguage } from '../context/language-context';

export function Education() {
  const { t } = useLanguage();

  const cardStyles = [
    'border-blue-200 from-blue-50 shadow-blue-100/50 dark:border-slate-700 dark:from-slate-900 dark:to-slate-800 dark:shadow-slate-950/40',
    'border-sky-200 from-sky-50 shadow-sky-100/50 dark:border-slate-700 dark:from-slate-900 dark:to-slate-800 dark:shadow-slate-950/40',
    'border-teal-200 from-teal-50 shadow-teal-100/50 dark:border-slate-700 dark:from-slate-900 dark:to-slate-800 dark:shadow-slate-950/40',
  ];

  const iconStyles = [
    'bg-blue-100 text-blue-600 dark:bg-slate-800 dark:text-sky-300',
    'bg-sky-100 text-sky-600 dark:bg-slate-800 dark:text-cyan-300',
    'bg-teal-100 text-teal-600 dark:bg-slate-800 dark:text-teal-300',
  ];

  return (
    <section id="education" className="flex min-h-screen items-center justify-center bg-white/40 px-6 py-20 dark:bg-slate-950/10">
      <div className="w-full max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-slate-100 md:text-5xl">
            {t.education.title} <span className="text-blue-600 dark:text-sky-300">&</span> {t.education.highlight}
          </h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-blue-500 via-sky-500 to-teal-400"></div>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative">
            <div className="absolute bottom-0 left-0 top-0 w-0.5 bg-gradient-to-b from-blue-400 via-sky-400 to-teal-400 md:left-1/2"></div>

            <div className="relative mb-12 flex flex-col items-start gap-8 md:flex-row md:items-center">
              <div className="absolute left-0 h-4 w-4 -translate-x-1.5 rounded-full bg-blue-500 ring-4 ring-white shadow-lg shadow-blue-200 dark:ring-slate-950 dark:shadow-slate-950/50 md:left-1/2 md:-translate-x-2"></div>

              <div className="ml-12 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                <div className="mb-3 inline-block rounded-full border border-blue-200 bg-white px-4 py-1 shadow-sm dark:border-slate-700 dark:bg-slate-900">
                  <span className="flex items-center gap-2 text-sm font-semibold text-blue-700 dark:text-sky-300">
                    <Calendar className="h-4 w-4" />
                    {t.education.badge}
                  </span>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-slate-900 dark:text-slate-100">{t.education.degree}</h3>
                <div className="mb-2 flex items-center gap-2 text-slate-500 dark:text-slate-400 md:justify-end">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{t.education.location}</span>
                </div>
              </div>

              <div className="ml-12 md:ml-0 md:w-1/2 md:pl-12">
                <div className="rounded-2xl border border-blue-200 bg-white/90 p-6 shadow-lg shadow-blue-100/50 transition-all duration-300 hover:scale-105 dark:border-slate-700 dark:bg-slate-900/80 dark:shadow-slate-950/40">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100 dark:bg-slate-800">
                      <GraduationCap className="h-6 w-6 text-blue-600 dark:text-sky-300" />
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold text-slate-900 dark:text-slate-100">{t.education.cardTitle}</h4>
                      <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{t.education.cardText}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {t.education.items.map((item, index) => (
              <div
                key={item.title}
                className={`rounded-2xl border bg-gradient-to-br to-white p-6 text-center shadow-lg transition-transform hover:scale-105 dark:to-slate-800 ${cardStyles[index]}`}
              >
                <div className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full ${iconStyles[index]}`}>
                  <Award className="h-6 w-6" />
                </div>
                <h4 className="mb-2 font-semibold text-slate-900 dark:text-slate-100">{item.title}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
