import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-blue-200/70 bg-white/70 px-6 py-12 backdrop-blur">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-3 bg-gradient-to-r from-blue-600 via-sky-600 to-teal-500 bg-clip-text text-2xl font-bold text-transparent">
              Miguel Alfaro
            </h3>
            <p className="text-sm text-slate-500">
              Estudiante de Ingeniería de Software apasionado por la tecnología y el desarrollo.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-slate-900">Enlaces Rápidos</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-sm text-slate-500 transition-colors hover:text-blue-700">
                Sobre mí
              </a>
              <a href="#skills" className="block text-sm text-slate-500 transition-colors hover:text-blue-700">
                Habilidades
              </a>
              <a href="#projects" className="block text-sm text-slate-500 transition-colors hover:text-blue-700">
                Proyectos
              </a>
              <a href="#contact" className="block text-sm text-slate-500 transition-colors hover:text-blue-700">
                Contacto
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold text-slate-900">Redes Sociales</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/miguelalfaro7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 text-blue-700 transition-all duration-300 hover:scale-110 hover:bg-blue-600 hover:text-white"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-100 text-sky-700 transition-all duration-300 hover:scale-110 hover:bg-sky-600 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:pipealfa2007@gmail.com"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal-100 text-teal-700 transition-all duration-300 hover:scale-110 hover:bg-teal-500 hover:text-white"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-100 pt-8">
          <p className="text-center text-sm text-slate-500">
            © {currentYear} Miguel Felipe Alfaro Caicedo.
          </p>
        </div>
      </div>
    </footer>
  );
}
