import { ExternalLink, Github } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
}

export function Projects() {
  const projects: Project[] = [
    {
      title: 'Portafolio Web Personal',
      description:
        'Sitio web personal moderno y responsive para mostrar proyectos y habilidades. Diseñado con enfoque en la experiencia del usuario.',
      image:
        'https://images.unsplash.com/photo-1762340275085-31075ff58039?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb2RpbmclMjBsYXB0b3AlMjBkYXJrfGVufDF8fHx8MTc3NTQ4ODg0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['React', 'Tailwind CSS', 'TypeScript'],
    },
    {
      title: 'Sistema de Gestión CRUD',
      description:
        'Aplicación web completa para gestión de datos con operaciones CRUD. Incluye autenticación de usuarios y panel administrativo.',
      image:
        'https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHNjcmVlbiUyMGNvZGV8ZW58MXx8fHwxNzc1NDg4ODQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Node.js'],
    },
    {
      title: 'Proyecto con Django',
      description:
        'Aplicación web desarrollada con Django y Python. Sistema robusto con base de datos PostgreSQL y API REST.',
      image:
        'https://images.unsplash.com/photo-1580121441575-41bcb5c6b47c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkamFuZ28lMjBweXRob24lMjBwcm9ncmFtbWluZ3xlbnwxfHx8fDE3NzU0ODg4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      technologies: ['Django', 'Python', 'PostgreSQL', 'REST API'],
    },
  ];

  return (
    <section id="projects" className="flex min-h-screen items-center justify-center px-6 py-20">
      <div className="w-full max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Mis <span className="text-blue-700">Proyectos</span>
          </h2>
          <div className="mx-auto mb-4 h-1 w-20 bg-gradient-to-r from-violet-500 via-blue-500 to-amber-400"></div>
          <p className="mx-auto max-w-2xl text-slate-500">
            Una selección de proyectos en los que he trabajado, demostrando mis habilidades
            técnicas y creatividad.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-violet-200 bg-white/90 shadow-lg shadow-violet-100/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-violet-200/60"
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
                <h3 className="text-xl font-bold text-slate-900 transition-colors group-hover:text-violet-700">
                  {project.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-xs font-medium text-violet-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 via-blue-600 to-amber-500 px-4 py-2 font-medium text-white transition-colors">
                    <ExternalLink className="h-4 w-4" />
                    Ver proyecto
                  </button>
                  <button className="flex items-center justify-center rounded-xl bg-slate-100 px-4 py-2 text-slate-700 transition-colors hover:bg-slate-200">
                    <Github className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
