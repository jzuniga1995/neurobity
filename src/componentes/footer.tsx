import Link from 'next/link';
import { Brain, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const anioActual = new Date().getFullYear();

  const REDES_SOCIALES = [
    { 
      nombre: 'Facebook', 
      href: 'https://facebook.com/neurobity', 
      icon: Facebook,
      color: 'hover:text-[#1877F2]'
    },
    { 
      nombre: 'X', 
      href: 'https://x.com/neurobity',
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      color: 'hover:text-white'
    },
    { 
      nombre: 'Instagram', 
      href: 'https://instagram.com/neurobity', 
      icon: Instagram,
      color: 'hover:text-[#E4405F]'
    },
    { 
      nombre: 'TikTok', 
      href: 'https://tiktok.com/@neurobity',
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
        </svg>
      ),
      color: 'hover:text-white'
    },
    { 
      nombre: 'Reddit', 
      href: 'https://reddit.com/r/neurobity',
      icon: () => (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
        </svg>
      ),
      color: 'hover:text-[#FF4500]'
    }
  ];

  const TESTS_LINKS = [
    { href: '/test-iq', label: 'Test de IQ' },
    { href: '/test-edad-mental', label: 'Edad Mental' },
    { href: '/test-velocidad-lectura', label: 'Velocidad de Lectura' }
  ];

  const RECURSOS_LINKS = [
    { href: '/tests', label: 'Sobre los tests' },
    { href: '/preguntas', label: 'Preguntas frecuentes' },
    { href: '/blog', label: 'Blog' },
    { href: '/contacto', label: 'Contacto' }
  ];

  const LEGALES_LINKS = [
    { href: '/privacidad', label: 'Privacidad' },
    { href: '/terminos', label: 'Términos' },
    { href: '/cookies', label: 'Cookies' }
  ];

  return (
   <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Grid principal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          
          {/* Columna 1: Marca */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-4 hover:opacity-90 transition-opacity">
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2.5 rounded-xl shadow-lg">
                <Brain className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                NeuroBity
              </h3>
            </Link>
            <p className="text-gray-400 max-w-md leading-relaxed mb-6">
              Tu gimnasio cerebral. Tests psicométricos científicos para descubrir 
              y potenciar tus habilidades cognitivas.
            </p>
            
            {/* Redes sociales */}
            <div className="flex flex-wrap gap-3">
              
              {REDES_SOCIALES.map((red) => {
                const IconComponent = red.icon;
                return (
                  <a
                    key={red.nombre}
                    href={red.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`
                      p-2.5 bg-gray-700/50 rounded-lg text-gray-400 
                      ${red.color} transition-all duration-200
                      hover:bg-gray-700 hover:scale-110
                    `}
                    aria-label={red.nombre}
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Columna 2: Tests */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Tests</h4>
            <ul className="space-y-3">
              {TESTS_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Recursos */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Recursos</h4>
            <ul className="space-y-3">
              {RECURSOS_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-gray-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
            {/* Copyright */}
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {anioActual} NeuroBity. Todos los derechos reservados.
            </p>

            {/* Links legales */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {LEGALES_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-gray-700/30 rounded-lg p-4 border border-gray-700/50">
            <p className="text-gray-400 text-xs text-center leading-relaxed">
              ⚠️ Los tests son de carácter informativo y educativo. No sustituyen 
              evaluaciones psicológicas profesionales realizadas por especialistas certificados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}