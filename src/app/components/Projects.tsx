'use client';

import { ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '../context/language-context';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="flex min-h-screen items-center justify-center px-6 py-20">
      <div className="w-full max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-slate-100 md:text-5xl">
            {t.projects.title} <span className="text-blue-700 dark:text-sky-300">{t.projects.highlight}</span>
          </h2>
          <div className="mx-auto mb-4 h-1 w-20 bg-gradient-to-r from-blue-500 via-sky-500 to-teal-400"></div>
          <p className="mx-auto max-w-2xl text-slate-500 dark:text-slate-400">{t.projects.description}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {t.projects.items.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-blue-200 bg-white/90 shadow-lg shadow-blue-100/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-200/60 dark:border-slate-700 dark:bg-slate-900/80 dark:shadow-slate-950/40"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-800/20 to-transparent opacity-50"></div>
              </div>

              <div className="space-y-4 p-6">
                <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-blue-700 dark:text-slate-100 dark:group-hover:text-sky-300">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 dark:border-slate-700 dark:bg-slate-800 dark:text-sky-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-sky-600 to-teal-500 px-4 py-2 font-medium text-white transition-all duration-300 hover:scale-[1.02]"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {t.projects.viewProject}
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 via-sky-600 to-teal-500 px-4 py-2 text-white transition-all duration-300 hover:scale-[1.02]"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
