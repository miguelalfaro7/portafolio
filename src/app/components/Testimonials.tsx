import { Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  text: string;
}

export function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: 'David Esteban Ordoñez',
      role: 'Compañero de proyectos',
      text: 'Miguel ha trabajado conmigo en varias actividades académicas y siempre aporta ideas claras, compromiso y mucha disposición para aprender.',
    },
    {
      name: 'Alejandro Jojoa Molina',
      role: 'Compañero de equipo',
      text: 'Al trabajar con Miguel se nota su responsabilidad y constancia. Es una persona que escucha, colabora y busca que el resultado final quede bien hecho.',
    },
    {
      name: 'Dario David',
      role: 'Compañero de formación',
      text: 'He compartido proyectos con Miguel y destaca por su actitud positiva, su interés por mejorar y la forma en que apoya al equipo durante el desarrollo.',
    },
  ];

  return (
    <section id="testimonials" className="flex min-h-screen items-center justify-center bg-white/40 px-6 py-20">
      <div className="w-full max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Testi<span className="text-blue-700">monios</span>
          </h2>
          <div className="mx-auto mb-4 h-1 w-20 bg-gradient-to-r from-blue-500 via-sky-500 to-teal-400"></div>
          <p className="mx-auto max-w-2xl text-slate-500">
            Comentarios de personas con las que he compartido procesos de aprendizaje y trabajo en equipo.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-3xl border border-blue-200 bg-white/90 p-8 shadow-lg shadow-blue-100/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-200/60"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 via-sky-600 to-teal-500 text-white">
                <Quote className="h-6 w-6" />
              </div>
              <p className="mb-6 text-sm leading-7 text-slate-600">{testimonial.text}</p>
              <div className="border-t border-blue-100 pt-4">
                <h3 className="font-semibold text-slate-900">{testimonial.name}</h3>
                <p className="text-sm text-blue-700">{testimonial.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
