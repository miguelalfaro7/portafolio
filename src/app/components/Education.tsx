import { Award, Calendar, GraduationCap, MapPin } from 'lucide-react';

export function Education() {
  return (
    <section
      id="education"
      className="flex min-h-screen items-center justify-center bg-white/40 px-6 py-20"
    >
      <div className="w-full max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Educación <span className="text-violet-600">&</span> Formación
          </h2>
          <div className="mx-auto h-1 w-20 bg-gradient-to-r from-violet-500 via-blue-500 to-amber-400"></div>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="relative">
            <div className="absolute bottom-0 left-0 top-0 w-0.5 bg-gradient-to-b from-violet-400 via-blue-400 to-amber-400 md:left-1/2"></div>

            <div className="relative mb-12 flex flex-col items-start gap-8 md:flex-row md:items-center">
              <div className="absolute left-0 h-4 w-4 -translate-x-1.5 rounded-full bg-violet-500 ring-4 ring-white shadow-lg shadow-violet-200 md:left-1/2 md:-translate-x-2"></div>

              <div className="ml-12 md:ml-0 md:w-1/2 md:pr-12 md:text-right">
                <div className="mb-3 inline-block rounded-full border border-violet-200 bg-white px-4 py-1 shadow-sm">
                  <span className="flex items-center gap-2 text-sm font-semibold text-violet-700">
                    <Calendar className="h-4 w-4" />
                    En curso
                  </span>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-slate-900">Ingeniería de Software</h3>
                <div className="mb-2 flex items-center gap-2 text-slate-500 md:justify-end">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">Pasto, Colombia</span>
                </div>
              </div>

              <div className="ml-12 md:ml-0 md:w-1/2 md:pl-12">
                <div className="rounded-2xl border border-violet-200 bg-white/90 p-6 shadow-lg shadow-violet-100/50 transition-all duration-300 hover:scale-105">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-violet-100">
                      <GraduationCap className="h-6 w-6 text-violet-600" />
                    </div>
                    <div>
                      <h4 className="mb-2 font-semibold text-slate-900">Formación actual</h4>
                      <p className="text-sm leading-relaxed text-slate-500">
                        Proceso de aprendizaje enfocado en fundamentos de programación, lógica,
                        buenas prácticas y construcción de proyectos paso a paso.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 to-white p-6 text-center shadow-lg shadow-violet-100/50 transition-transform hover:scale-105">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-violet-100">
                <Award className="h-6 w-6 text-violet-600" />
              </div>
              <h4 className="mb-2 font-semibold text-slate-900">Fundamentos de Programación</h4>
              <p className="text-sm text-slate-500">Lógica, sintaxis y resolución de problemas</p>
            </div>

            <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-6 text-center shadow-lg shadow-blue-100/50 transition-transform hover:scale-105">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                <Award className="h-6 w-6 text-blue-600" />
              </div>
              <h4 className="mb-2 font-semibold text-slate-900">Primeros Proyectos Web</h4>
              <p className="text-sm text-slate-500">
                Práctica con interfaces, formularios y estructuras básicas
              </p>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-6 text-center shadow-lg shadow-amber-100/50 transition-transform hover:scale-105">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                <Award className="h-6 w-6 text-amber-600" />
              </div>
              <h4 className="mb-2 font-semibold text-slate-900">Aprendizaje Constante</h4>
              <p className="text-sm text-slate-500">
                Mejorando cada día con práctica y nuevos retos
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
