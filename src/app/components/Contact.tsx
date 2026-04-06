import { Github, Linkedin, Mail, MessageSquare, Send, User } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="flex min-h-screen items-center justify-center px-6 py-20">
      <div className="w-full max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
            ¡Hablemos! <span className="text-blue-600">Contacto</span>
          </h2>
          <div className="mx-auto mb-4 h-1 w-20 bg-gradient-to-r from-blue-500 via-sky-500 to-teal-400"></div>
          <p className="mx-auto max-w-2xl text-slate-500">
            ¿Tienes un proyecto en mente o quieres colaborar? No dudes en contactarme.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-slate-900">Información de Contacto</h3>
              <p className="mb-8 text-slate-500">
                Estoy disponible para nuevas oportunidades y colaboraciones. No dudes en escribirme.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="mailto:pipealfa2007@gmail.com"
                className="group flex items-center gap-4 rounded-2xl border border-blue-200 bg-white/85 p-4 shadow-lg shadow-blue-100/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 transition-colors group-hover:bg-blue-200">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="font-medium text-slate-900">pipealfa2007@gmail.com</p>
                </div>
              </a>

              <a
                href="https://github.com/miguelalfaro7"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-sky-200 bg-white/85 p-4 shadow-lg shadow-sky-100/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-sky-100 transition-colors group-hover:bg-sky-200">
                  <Github className="h-6 w-6 text-sky-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">GitHub</p>
                  <p className="font-medium text-slate-900">github.com/miguelalfaro7</p>
                </div>
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-teal-200 bg-white/85 p-4 shadow-lg shadow-teal-100/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 transition-colors group-hover:bg-teal-200">
                  <Linkedin className="h-6 w-6 text-teal-600" />
                </div>
                <div>
                  <p className="text-sm text-slate-500">LinkedIn</p>
                  <p className="font-medium text-slate-900">Próximamente</p>
                </div>
              </a>
            </div>
          </div>

          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 rounded-[2rem] border border-blue-200 bg-white/85 p-8 shadow-xl shadow-blue-100/50"
            >
              <div>
                <label htmlFor="name" className="mb-2 block font-medium text-slate-700">
                  Nombre
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-blue-200 bg-white pl-12 pr-4 py-3 text-slate-900 placeholder-slate-400 transition-all focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="Tu nombre completo"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block font-medium text-slate-700">
                  Correo Electrónico
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-blue-200 bg-white pl-12 pr-4 py-3 text-slate-900 placeholder-slate-400 transition-all focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block font-medium text-slate-700">
                  Mensaje
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 h-5 w-5 text-slate-400" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full resize-none rounded-xl border border-blue-200 bg-white pl-12 pr-4 py-3 text-slate-900 placeholder-slate-400 transition-all focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200"
                    placeholder="Escribe tu mensaje aquí..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-sky-600 to-teal-500 px-8 py-4 font-semibold text-white shadow-lg shadow-blue-200/60 transition-all duration-300 hover:scale-105"
              >
                <Send className="h-5 w-5" />
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
