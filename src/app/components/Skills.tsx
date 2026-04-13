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

interface TechnicalSkill {
  name: string;
  icon: React.ReactNode;
  accent: string;
  iconBg: string;
}

export function Skills() {
  const technicalSkills: TechnicalSkill[] = [
    {
      name: 'Python',
      icon: <Code2 className="h-6 w-6" />,
      accent: 'text-blue-700',
      iconBg: 'bg-blue-100',
    },
    {
      name: 'JavaScript',
      icon: <Braces className="h-6 w-6" />,
      accent: 'text-sky-700',
      iconBg: 'bg-sky-100',
    },
    {
      name: 'HTML',
      icon: <Globe className="h-6 w-6" />,
      accent: 'text-teal-700',
      iconBg: 'bg-teal-100',
    },
    {
      name: 'CSS',
      icon: <Layers3 className="h-6 w-6" />,
      accent: 'text-cyan-700',
      iconBg: 'bg-cyan-100',
    },
    {
      name: 'Django',
      icon: <FileCode2 className="h-6 w-6" />,
      accent: 'text-blue-700',
      iconBg: 'bg-blue-100',
    },
    {
      name: 'Bases de datos',
      icon: <Database className="h-6 w-6" />,
      accent: 'text-sky-700',
      iconBg: 'bg-sky-100',
    },
  ];

  const softSkills = [
    {
      name: 'Trabajo en equipo',
      icon: <Users className="h-6 w-6" />,
      description: 'Colaboración efectiva',
      accent: 'text-blue-600',
      iconBg: 'bg-blue-100',
      border: 'border-blue-200',
      shadow: 'shadow-blue-100/50',
    },
    {
      name: 'Comunicación',
      icon: <MessageSquare className="h-6 w-6" />,
      description: 'Ideas claras y concisas',
      accent: 'text-sky-600',
      iconBg: 'bg-sky-100',
      border: 'border-sky-200',
      shadow: 'shadow-sky-100/50',
    },
    {
      name: 'Aprendizaje autónomo',
      icon: <BookOpen className="h-6 w-6" />,
      description: 'Autogestión del conocimiento',
      accent: 'text-teal-600',
      iconBg: 'bg-teal-100',
      border: 'border-teal-200',
      shadow: 'shadow-teal-100/50',
    },
  ];

  return (
    <section id="skills" className="flex min-h-screen items-center justify-center bg-white/50 px-6 py-20">
      <div className="w-full max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Habilidades <span className="text-blue-600">&</span> Competencias
          </h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-blue-500 via-sky-500 to-teal-400"></div>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="mb-6 flex items-center gap-3">
              <Code2 className="h-8 w-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-slate-900">Tecnologías</h3>
            </div>

            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-blue-100 bg-white/90 p-5 text-center shadow-lg shadow-blue-100/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div
                    className={`mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl ${skill.iconBg} ${skill.accent}`}
                  >
                    {skill.icon}
                  </div>
                  <p className="text-sm font-semibold text-slate-700">{skill.name}</p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-sky-200 bg-gradient-to-br from-blue-50 to-teal-50 p-6">
              <p className="text-sm leading-relaxed text-slate-600">
                <span className="font-semibold text-blue-700">Siempre aprendiendo:</span> Cada proyecto
                me ayuda a practicar, mejorar y descubrir nuevas herramientas.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="mb-6 flex items-center gap-3">
              <Users className="h-8 w-8 text-sky-600" />
              <h3 className="text-2xl font-bold text-slate-900">Fortalezas Personales</h3>
            </div>

            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  className={`rounded-2xl border ${skill.border} bg-white/85 p-6 shadow-lg ${skill.shadow} transition-all duration-300 hover:scale-105`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-lg ${skill.iconBg} ${skill.accent}`}
                    >
                      {skill.icon}
                    </div>
                    <div>
                      <h4 className="mb-1 text-lg font-semibold text-slate-900">{skill.name}</h4>
                      <p className="text-sm text-slate-500">{skill.description}</p>
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
