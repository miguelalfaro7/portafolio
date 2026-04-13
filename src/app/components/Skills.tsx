'use client';

import {
  BookOpen,
  Braces,
  Code2,
  Database,
  FileCode2,
  Globe,
  Layers3,
  MessageSquare,
  Users,
} from 'lucide-react';
import { useLanguage } from '../context/language-context';

export function Skills() {
  const { t } = useLanguage();

  const technicalIcons = [
    <Code2 key="python" className="h-6 w-6" />,
    <Braces key="js" className="h-6 w-6" />,
    <Globe key="html" className="h-6 w-6" />,
    <Layers3 key="css" className="h-6 w-6" />,
    <FileCode2 key="django" className="h-6 w-6" />,
    <Database key="db" className="h-6 w-6" />,
  ];

  const technicalStyles = [
    { accent: 'text-blue-700 dark:text-sky-300', iconBg: 'bg-blue-100 dark:bg-slate-800' },
    { accent: 'text-sky-700 dark:text-cyan-300', iconBg: 'bg-sky-100 dark:bg-slate-800' },
    { accent: 'text-teal-700 dark:text-teal-300', iconBg: 'bg-teal-100 dark:bg-slate-800' },
    { accent: 'text-cyan-700 dark:text-cyan-300', iconBg: 'bg-cyan-100 dark:bg-slate-800' },
    { accent: 'text-blue-700 dark:text-sky-300', iconBg: 'bg-blue-100 dark:bg-slate-800' },
    { accent: 'text-sky-700 dark:text-cyan-300', iconBg: 'bg-sky-100 dark:bg-slate-800' },
  ];

  const strengthIcons = [
    <Users key="team" className="h-6 w-6" />,
    <MessageSquare key="comms" className="h-6 w-6" />,
    <BookOpen key="learning" className="h-6 w-6" />,
  ];

  const strengthStyles = [
    { accent: 'text-blue-600 dark:text-sky-300', iconBg: 'bg-blue-100 dark:bg-slate-800', border: 'border-blue-200 dark:border-slate-700', shadow: 'shadow-blue-100/50 dark:shadow-slate-950/40' },
    { accent: 'text-sky-600 dark:text-cyan-300', iconBg: 'bg-sky-100 dark:bg-slate-800', border: 'border-sky-200 dark:border-slate-700', shadow: 'shadow-sky-100/50 dark:shadow-slate-950/40' },
    { accent: 'text-teal-600 dark:text-teal-300', iconBg: 'bg-teal-100 dark:bg-slate-800', border: 'border-teal-200 dark:border-slate-700', shadow: 'shadow-teal-100/50 dark:shadow-slate-950/40' },
  ];

  return (
    <section id="skills" className="flex min-h-screen items-center justify-center bg-white/50 px-6 py-20 dark:bg-slate-950/20">
      <div className="w-full max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900 dark:text-slate-100 md:text-5xl">
            {t.skills.title} <span className="text-blue-600 dark:text-sky-300">&</span> {t.skills.highlight}
          </h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-blue-500 via-sky-500 to-teal-400"></div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="mb-6 flex items-center gap-3">
              <Code2 className="h-8 w-8 text-blue-600 dark:text-sky-300" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{t.skills.technologies}</h3>
            </div>

            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
              {t.skills.technologiesList.map((skill, index) => (
                <div
                  key={skill}
                  className="rounded-2xl border border-blue-100 bg-white/90 p-5 text-center shadow-lg shadow-blue-100/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-900/80 dark:shadow-slate-950/40"
                >
                  <div
                    className={`mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl ${technicalStyles[index].iconBg} ${technicalStyles[index].accent}`}
                  >
                    {technicalIcons[index]}
                  </div>
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-200">{skill}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-sky-200 bg-gradient-to-br from-blue-50 to-teal-50 p-6 dark:border-slate-700 dark:from-slate-900 dark:to-slate-800">
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                <span className="font-semibold text-blue-700 dark:text-sky-300">{t.skills.learningTitle}</span>{' '}
                {t.skills.learningText}
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="mb-6 flex items-center gap-3">
              <Users className="h-8 w-8 text-sky-600 dark:text-cyan-300" />
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{t.skills.strengths}</h3>
            </div>

            <div className="space-y-6">
              {t.skills.strengthsList.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`rounded-2xl border bg-white/85 p-6 shadow-lg transition-all duration-300 hover:scale-105 dark:bg-slate-900/80 ${strengthStyles[index].border} ${strengthStyles[index].shadow}`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-lg ${strengthStyles[index].iconBg} ${strengthStyles[index].accent}`}
                    >
                      {strengthIcons[index]}
                    </div>
                    <div>
                      <h4 className="mb-1 text-lg font-semibold text-slate-900 dark:text-slate-100">{skill.name}</h4>
                      <p className="text-sm text-slate-500 dark:text-slate-400">{skill.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
