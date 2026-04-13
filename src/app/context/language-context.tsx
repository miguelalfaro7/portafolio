'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Language = 'es' | 'en';

type TranslationSchema = {
  nav: {
    home: string;
    about: string;
    skills: string;
    projects: string;
    testimonials: string;
    education: string;
    contact: string;
    language: string;
    theme: string;
  };
  hero: {
    location: string;
    role: string;
    description: string;
    downloadCv: string;
    contact: string;
    photoAlt: string;
  };
  about: {
    title: string;
    highlight: string;
    paragraphs: string[];
    cards: Array<{ title: string; description: string }>;
  };
  skills: {
    title: string;
    highlight: string;
    technologies: string;
    strengths: string;
    learningTitle: string;
    learningText: string;
    technologiesList: string[];
    strengthsList: Array<{ name: string; description: string }>;
  };
  projects: {
    title: string;
    highlight: string;
    description: string;
    viewProject: string;
    items: Array<{
      title: string;
      description: string;
      technologies: string[];
      liveLink?: string;
      githubLink?: string;
      image: string;
    }>;
  };
  testimonials: {
    title: string;
    highlight: string;
    description: string;
    items: Array<{ name: string; role: string; text: string }>;
  };
  education: {
    title: string;
    highlight: string;
    badge: string;
    degree: string;
    location: string;
    cardTitle: string;
    cardText: string;
    items: Array<{ title: string; description: string }>;
  };
  contact: {
    title: string;
    highlight: string;
    description: string;
    infoTitle: string;
    infoText: string;
    email: string;
    github: string;
    linkedin: string;
    linkedinValue: string;
    name: string;
    emailLabel: string;
    message: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    submit: string;
    success: string;
  };
  footer: {
    role: string;
    quickLinks: string;
    socials: string;
    copyright: string;
  };
};

const translations: Record<Language, TranslationSchema> = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
      testimonials: 'Testimonios',
      education: 'Educación',
      contact: 'Contacto',
      language: 'Idioma',
      theme: 'Tema',
    },
    hero: {
      location: 'Pasto, Colombia',
      role: 'Estudiante de Ingeniería de Software',
      description:
        'Persona apasionada por la tecnología, el aprendizaje constante, el desarrollo de software y el deporte.',
      downloadCv: 'Descargar CV',
      contact: 'Contactar',
      photoAlt: 'Foto de perfil de Miguel Felipe Alfaro Caicedo',
    },
    about: {
      title: 'Sobre',
      highlight: 'Mí',
      paragraphs: [
        'Soy estudiante de Ingeniería de Software con una profunda pasión por crear soluciones tecnológicas innovadoras. Mi enfoque está en el aprendizaje constante y la mejora continua.',
        'Me apasiona explorar nuevas tecnologías, resolver problemas complejos y construir aplicaciones que generen impacto. Creo firmemente en el poder de la programación como herramienta para transformar ideas en realidad.',
        'Además de la tecnología, el deporte es parte fundamental de mi vida, enseñándome disciplina, perseverancia y trabajo en equipo.',
      ],
      cards: [
        { title: 'Enfocado', description: 'En crecimiento profesional y personal' },
        { title: 'Innovador', description: 'Buscando soluciones creativas' },
        { title: 'Mejora Continua', description: 'Aprendiendo cada día' },
        { title: 'Colaborativo', description: 'Trabajo en equipo efectivo' },
      ],
    },
    skills: {
      title: 'Habilidades',
      highlight: 'Competencias',
      technologies: 'Tecnologías',
      strengths: 'Fortalezas Personales',
      learningTitle: 'Siempre aprendiendo:',
      learningText: 'Cada proyecto me ayuda a practicar, mejorar y descubrir nuevas herramientas.',
      technologiesList: ['Python', 'JavaScript', 'HTML', 'CSS', 'Django', 'Bases de datos'],
      strengthsList: [
        { name: 'Trabajo en equipo', description: 'Colaboración efectiva' },
        { name: 'Comunicación', description: 'Ideas claras y concisas' },
        { name: 'Aprendizaje autónomo', description: 'Autogestión del conocimiento' },
      ],
    },
    projects: {
      title: 'Mis',
      highlight: 'Proyectos',
      description:
        'Una selección de proyectos en los que he trabajado, demostrando mis habilidades técnicas y creatividad.',
      viewProject: 'Ver proyecto',
      items: [
        {
          title: 'Portafolio Web Personal',
          description:
            'Sitio web personal moderno y responsive para mostrar proyectos y habilidades. Diseñado con enfoque en la experiencia del usuario.',
          image:
            'https://images.unsplash.com/photo-1762340275085-31075ff58039?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb2RpbmclMjBsYXB0b3AlMjBkYXJrfGVufDF8fHx8MTc3NTQ4ODg0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
          technologies: ['React', 'Tailwind CSS', 'TypeScript'],
          githubLink: 'https://github.com/miguelalfaro7/portafolio',
          liveLink: '#',
        },
        {
          title: 'Sistema de Gestión CRUD',
          description:
            'Aplicación web completa para gestión de datos con operaciones CRUD. Incluye autenticación de usuarios y panel administrativo.',
          image:
            'https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHNjcmVlbiUyMGNvZGV8ZW58MXx8fHwxNzc1NDg4ODQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
          technologies: ['JavaScript', 'HTML', 'CSS', 'Node.js'],
          githubLink: 'https://github.com/miguelalfaro7',
          liveLink: '#',
        },
        {
          title: 'Proyecto con Django',
          description:
            'Aplicación web desarrollada con Django y Python. Sistema robusto con base de datos PostgreSQL y API REST.',
          image:
            'https://images.unsplash.com/photo-1580121441575-41bcb5c6b47c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkamFuZ28lMjBweXRob24lMjBwcm9ncmFtbWluZ3xlbnwxfHx8fDE3NzU0ODg4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
          technologies: ['Django', 'Python', 'PostgreSQL', 'REST API'],
          githubLink: 'https://github.com/miguelalfaro7',
          liveLink: '#',
        },
      ],
    },
    testimonials: {
      title: 'Testi',
      highlight: 'monios',
      description:
        'Comentarios de personas con las que he compartido procesos de aprendizaje y trabajo en equipo.',
      items: [
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
      ],
    },
    education: {
      title: 'Educación',
      highlight: 'Formación',
      badge: 'En curso',
      degree: 'Ingeniería de Software',
      location: 'Pasto, Colombia',
      cardTitle: 'Formación actual',
      cardText:
        'Proceso de aprendizaje enfocado en fundamentos de programación, lógica, buenas prácticas y construcción de proyectos paso a paso.',
      items: [
        { title: 'Fundamentos de Programación', description: 'Lógica, sintaxis y resolución de problemas' },
        { title: 'Primeros Proyectos Web', description: 'Práctica con interfaces, formularios y estructuras básicas' },
        { title: 'Aprendizaje Constante', description: 'Mejorando cada día con práctica y nuevos retos' },
      ],
    },
    contact: {
      title: '¡Hablemos!',
      highlight: 'Contacto',
      description: '¿Tienes un proyecto en mente o quieres colaborar? No dudes en contactarme.',
      infoTitle: 'Información de Contacto',
      infoText: 'Estoy disponible para nuevas oportunidades y colaboraciones. No dudes en escribirme.',
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      linkedinValue: 'Próximamente',
      name: 'Nombre',
      emailLabel: 'Correo Electrónico',
      message: 'Mensaje',
      namePlaceholder: 'Tu nombre completo',
      emailPlaceholder: 'tu@email.com',
      messagePlaceholder: 'Escribe tu mensaje aquí...',
      submit: 'Enviar Mensaje',
      success: '¡Gracias por tu mensaje! Me pondré en contacto contigo pronto.',
    },
    footer: {
      role: 'Estudiante de Ingeniería de Software apasionado por la tecnología y el desarrollo.',
      quickLinks: 'Enlaces Rápidos',
      socials: 'Redes Sociales',
      copyright: '© {year} Miguel Felipe Alfaro Caicedo.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      testimonials: 'Testimonials',
      education: 'Education',
      contact: 'Contact',
      language: 'Language',
      theme: 'Theme',
    },
    hero: {
      location: 'Pasto, Colombia',
      role: 'Software Engineering Student',
      description:
        'A person passionate about technology, continuous learning, software development, and sports.',
      downloadCv: 'Download CV',
      contact: 'Contact me',
      photoAlt: 'Profile photo of Miguel Felipe Alfaro Caicedo',
    },
    about: {
      title: 'About',
      highlight: 'Me',
      paragraphs: [
        'I am a Software Engineering student with a strong passion for building innovative technology solutions. My focus is on continuous learning and constant improvement.',
        'I enjoy exploring new technologies, solving complex problems, and building applications that create impact. I strongly believe in programming as a tool to turn ideas into reality.',
        'Beyond technology, sports are an important part of my life, teaching me discipline, perseverance, and teamwork.',
      ],
      cards: [
        { title: 'Focused', description: 'On personal and professional growth' },
        { title: 'Innovative', description: 'Looking for creative solutions' },
        { title: 'Continuous Improvement', description: 'Learning every day' },
        { title: 'Collaborative', description: 'Effective teamwork' },
      ],
    },
    skills: {
      title: 'Skills',
      highlight: 'Competencies',
      technologies: 'Technologies',
      strengths: 'Personal Strengths',
      learningTitle: 'Always learning:',
      learningText: 'Each project helps me practice, improve, and discover new tools.',
      technologiesList: ['Python', 'JavaScript', 'HTML', 'CSS', 'Django', 'Databases'],
      strengthsList: [
        { name: 'Teamwork', description: 'Effective collaboration' },
        { name: 'Communication', description: 'Clear and concise ideas' },
        { name: 'Self-learning', description: 'Self-managed knowledge growth' },
      ],
    },
    projects: {
      title: 'My',
      highlight: 'Projects',
      description:
        'A selection of projects I have worked on, showcasing my technical skills and creativity.',
      viewProject: 'View project',
      items: [
        {
          title: 'Personal Portfolio Website',
          description:
            'A modern and responsive personal website to showcase projects and skills, designed with user experience in mind.',
          image:
            'https://images.unsplash.com/photo-1762340275085-31075ff58039?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb2RpbmclMjBsYXB0b3AlMjBkYXJrfGVufDF8fHx8MTc3NTQ4ODg0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
          technologies: ['React', 'Tailwind CSS', 'TypeScript'],
          githubLink: 'https://github.com/miguelalfaro7/portafolio',
          liveLink: '#',
        },
        {
          title: 'CRUD Management System',
          description:
            'A complete web application for data management with CRUD operations, including user authentication and an admin panel.',
          image:
            'https://images.unsplash.com/photo-1637937459053-c788742455be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHNjcmVlbiUyMGNvZGV8ZW58MXx8fHwxNzc1NDg4ODQyfDA&ixlib=rb-4.1.0&q=80&w=1080',
          technologies: ['JavaScript', 'HTML', 'CSS', 'Node.js'],
          githubLink: 'https://github.com/miguelalfaro7',
          liveLink: '#',
        },
        {
          title: 'Django Project',
          description:
            'A web application built with Django and Python, featuring a robust system with PostgreSQL and a REST API.',
          image:
            'https://images.unsplash.com/photo-1580121441575-41bcb5c6b47c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkamFuZ28lMjBweXRob24lMjBwcm9ncmFtbWluZ3xlbnwxfHx8fDE3NzU0ODg4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
          technologies: ['Django', 'Python', 'PostgreSQL', 'REST API'],
          githubLink: 'https://github.com/miguelalfaro7',
          liveLink: '#',
        },
      ],
    },
    testimonials: {
      title: 'Testi',
      highlight: 'monials',
      description:
        'Comments from people with whom I have shared learning processes and teamwork experiences.',
      items: [
        {
          name: 'David Esteban Ordoñez',
          role: 'Project teammate',
          text: 'Miguel has worked with me on several academic activities and always brings clear ideas, commitment, and a strong willingness to learn.',
        },
        {
          name: 'Alejandro Jojoa Molina',
          role: 'Team colleague',
          text: 'Working with Miguel shows his responsibility and consistency. He listens, collaborates, and aims for high-quality final results.',
        },
        {
          name: 'Dario David',
          role: 'Learning partner',
          text: 'I have shared projects with Miguel and he stands out for his positive attitude, his desire to improve, and the way he supports the team during development.',
        },
      ],
    },
    education: {
      title: 'Education',
      highlight: 'Training',
      badge: 'Ongoing',
      degree: 'Software Engineering',
      location: 'Pasto, Colombia',
      cardTitle: 'Current training',
      cardText:
        'A learning process focused on programming fundamentals, logic, best practices, and building projects step by step.',
      items: [
        { title: 'Programming Fundamentals', description: 'Logic, syntax, and problem solving' },
        { title: 'First Web Projects', description: 'Practice with interfaces, forms, and basic structures' },
        { title: 'Continuous Learning', description: 'Improving every day through practice and new challenges' },
      ],
    },
    contact: {
      title: "Let's Talk!",
      highlight: 'Contact',
      description: 'Do you have a project in mind or want to collaborate? Feel free to contact me.',
      infoTitle: 'Contact Information',
      infoText: 'I am available for new opportunities and collaborations. Feel free to write to me.',
      email: 'Email',
      github: 'GitHub',
      linkedin: 'LinkedIn',
      linkedinValue: 'Coming soon',
      name: 'Name',
      emailLabel: 'Email Address',
      message: 'Message',
      namePlaceholder: 'Your full name',
      emailPlaceholder: 'your@email.com',
      messagePlaceholder: 'Write your message here...',
      submit: 'Send Message',
      success: 'Thanks for your message! I will get back to you soon.',
    },
    footer: {
      role: 'Software Engineering student passionate about technology and development.',
      quickLinks: 'Quick Links',
      socials: 'Social Media',
      copyright: '© {year} Miguel Felipe Alfaro Caicedo.',
    },
  },
};

type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  t: TranslationSchema;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('es');

  useEffect(() => {
    const storedLanguage = window.localStorage.getItem('portfolio-language') as Language | null;
    if (storedLanguage === 'es' || storedLanguage === 'en') {
      setLanguage(storedLanguage);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem('portfolio-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((current) => (current === 'es' ? 'en' : 'es'));
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        toggleLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }

  return context;
}
