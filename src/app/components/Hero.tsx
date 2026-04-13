'use client';

import Image from 'next/image';
import { Download, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../context/language-context';

export function Hero() {
  const { t } = useLanguage();

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.16),transparent_28%),radial-gradient(circle_at_top_right,rgba(45,212,191,0.16),transparent_30%),radial-gradient(circle_at_bottom,rgba(14,165,233,0.10),transparent_32%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_top_right,rgba(45,212,191,0.12),transparent_30%),radial-gradient(circle_at_bottom,rgba(14,165,233,0.08),transparent_32%)]"></div>

      <div className="relative z-10 w-full max-w-6xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6 text-center lg:text-left">
            <div className="flex items-center justify-center gap-2 text-slate-500 dark:text-slate-400 lg:justify-start">
              <MapPin className="h-4 w-4 text-blue-600 dark:text-sky-300" />
              <span className="text-sm">{t.hero.location}</span>
            </div>

            <h1 className="animate-gradient bg-gradient-to-r from-blue-700 via-sky-600 to-teal-500 bg-clip-text text-5xl font-bold text-transparent md:text-7xl">
              Miguel Felipe Alfaro Caicedo
            </h1>

            <div className="inline-block rounded-full border border-blue-200 bg-white/70 px-6 py-2 shadow-sm shadow-blue-100 dark:border-slate-700 dark:bg-slate-900/70 dark:shadow-slate-950/40">
              <p className="text-xl font-medium text-blue-700 dark:text-sky-300 md:text-2xl">
                {t.hero.role}
              </p>
            </div>

            <p className="max-w-3xl text-lg leading-relaxed text-slate-600 dark:text-slate-300 md:text-xl lg:mx-0">
              {t.hero.description}
            </p>

            <div className="flex flex-col items-center justify-center gap-4 pt-8 sm:flex-row lg:justify-start">
              <a
                href="/HOJA-DE-VIDA-MIGUEL-ALFARO.pdf"
                download="HOJA-DE-VIDA-MIGUEL-ALFARO.pdf"
                className="group flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-sky-600 to-teal-500 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-200/70 transition-all duration-300 hover:scale-105"
              >
                <Download className="h-5 w-5 group-hover:animate-bounce" />
                {t.hero.downloadCv}
              </a>
              <button
                onClick={scrollToContact}
                className="flex items-center gap-2 rounded-xl border-2 border-blue-300 bg-white/80 px-8 py-4 font-semibold text-blue-700 transition-all duration-300 hover:scale-105 hover:bg-blue-600 hover:text-white dark:border-slate-700 dark:bg-slate-900/80 dark:text-sky-300 dark:hover:bg-sky-600 dark:hover:text-slate-950"
              >
                <Mail className="h-5 w-5" />
                {t.hero.contact}
              </button>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm">
            <div className="rounded-[2rem] border border-blue-200/80 bg-white/80 p-5 shadow-2xl shadow-blue-100/70 backdrop-blur dark:border-slate-700 dark:bg-slate-900/80 dark:shadow-slate-950/50">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.6rem] border-2 border-blue-200 bg-gradient-to-br from-blue-50 via-sky-50 to-teal-50 dark:border-slate-700 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
                <Image
                  src="/foto-perfil.png"
                  alt={t.hero.photoAlt}
                  fill
                  priority
                  className="object-cover object-[center_20%]"
                  sizes="(max-width: 1024px) 320px, 380px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-blue-400 p-2 dark:border-sky-400">
          <div className="h-3 w-1 rounded-full bg-gradient-to-b from-blue-500 to-teal-400"></div>
        </div>
      </div>
    </section>
  );
}
