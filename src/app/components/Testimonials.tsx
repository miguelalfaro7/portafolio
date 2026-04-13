'use client';

import { Quote } from 'lucide-react';
import { useLanguage } from '../context/language-context';

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="flex min-h-screen items-center justify-center bg-white/40 px-6 py-20 dark:bg-slate-950/10">
      <div className="w-full max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-slate-100 md:text-5xl">
            {t.testimonials.title}<span className="text-blue-700 dark:text-sky-300">{t.testimonials.highlight}</span>
          </h2>
          <div className="mx-auto mb-4 h-1 w-20 bg-gradient-to-r from-blue-500 via-sky-500 to-teal-400"></div>
          <p className="mx-auto max-w-2xl text-slate-500 dark:text-slate-400">{t.testimonials.description}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {t.testimonials.items.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-3xl border border-blue-200 bg-white/90 p-8 shadow-lg shadow-blue-100/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-200/60 dark:border-slate-700 dark:bg-slate-900/80 dark:shadow-slate-950/40"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 via-sky-600 to-teal-500 text-white">
                <Quote className="h-6 w-6" />
              </div>
              <p className="mb-6 text-sm leading-7 text-slate-600 dark:text-slate-300">{testimonial.text}</p>
              <div className="border-t border-blue-100 pt-4 dark:border-slate-700">
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">{testimonial.name}</h3>
                <p className="text-sm text-blue-700 dark:text-sky-300">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
