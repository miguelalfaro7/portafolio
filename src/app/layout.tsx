import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Portafolio | Miguel Felipe Alfaro Caicedo',
  description: 'Portafolio personal construido con Next.js, TypeScript y Tailwind CSS.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
