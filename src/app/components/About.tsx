import { Lightbulb, Target, TrendingUp, User } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="flex min-h-screen items-center justify-center px-6 py-20">
      <div className="w-full max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Sobre <span className="text-blue-600">Mí</span>
          </h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-blue-500 via-sky-500 to-teal-400"></div>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-slate-600">
              Soy estudiante de <span className="font-semibold text-blue-600">Ingeniería de Software</span> con
              una profunda pasión por crear soluciones tecnológicas innovadoras. Mi enfoque está en el{' '}
              <span className="font-semibold text-sky-700">aprendizaje constante</span> y la mejora continua.
            </p>
            <p className="text-lg leading-relaxed text-slate-600">
              Me apasiona explorar nuevas tecnologías, resolver problemas complejos y construir
              aplicaciones que generen impacto. Creo firmemente en el poder de la{' '}
              <span className="font-semibold text-teal-600">programación</span> como herramienta para
              transformar ideas en realidad.
            </p>
            <p className="text-lg leading-relaxed text-slate-600">
              Además de la tecnología, el <span className="font-semibold text-blue-600">deporte</span> es parte
              fundamental de mi vida, enseñándome disciplina, perseverancia y trabajo en equipo.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-blue-200 bg-white/80 p-6 shadow-lg shadow-blue-100/60 transition-all duration-300 hover:scale-105">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mb-2 font-semibold text-slate-900">Enfocado</h3>
              <p className="text-sm text-slate-500">En crecimiento profesional y personal</p>
            </div>

            <div className="rounded-2xl border border-sky-200 bg-white/80 p-6 shadow-lg shadow-sky-100/60 transition-all duration-300 hover:scale-105">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-sky-100">
                <Lightbulb className="h-6 w-6 text-sky-600" />
              </div>
              <h3 className="mb-2 font-semibold text-slate-900">Innovador</h3>
              <p className="text-sm text-slate-500">Buscando soluciones creativas</p>
            </div>

            <div className="rounded-2xl border border-teal-200 bg-white/80 p-6 shadow-lg shadow-teal-100/60 transition-all duration-300 hover:scale-105">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100">
                <TrendingUp className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="mb-2 font-semibold text-slate-900">Mejora Continua</h3>
              <p className="text-sm text-slate-500">Aprendiendo cada día</p>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-white/80 p-6 shadow-lg shadow-blue-100/60 transition-all duration-300 hover:scale-105">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                <User className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="mb-2 font-semibold text-slate-900">Colaborativo</h3>
              <p className="text-sm text-slate-500">Trabajo en equipo efectivo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
