'use client';

import Link from 'next/link';
import { Brain, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  mostrarNavegacion?: boolean;
}

const LINKS_NAVEGACION = [
  { href: '/test-iq', label: 'Test IQ', color: 'hover:text-blue-600' },
  { href: '/test-edad-mental', label: 'Edad Mental', color: 'hover:text-green-600' },
  { href: '/test-velocidad-lectura', label: 'Velocidad Lectura', color: 'hover:text-purple-600' }
] as const;

export default function Header({ mostrarNavegacion = true }: HeaderProps) {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const cerrarMenu = () => setMenuAbierto(false);

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-3 hover:opacity-90 transition-opacity"
              onClick={cerrarMenu}
            >
              <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-2.5 rounded-xl shadow-md">
                <Brain className="w-7 h-7 text-white" strokeWidth={2.5} />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  NeuroBity
                </h1>
                <p className="text-[10px] sm:text-xs text-gray-500 hidden sm:block font-medium">
                  Tu gimnasio cerebral
                </p>
              </div>
            </Link>

            {/* Navegación Desktop */}
            {mostrarNavegacion && (
              <nav className="hidden md:flex items-center gap-1">
                {LINKS_NAVEGACION.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`
                      px-4 py-2 rounded-lg font-medium text-gray-600 
                      ${link.color} transition-all duration-200
                      hover:bg-gray-50
                    `}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            )}

            {/* Botón menú móvil */}
            {mostrarNavegacion && (
              <button
                onClick={() => setMenuAbierto(!menuAbierto)}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Menú"
                aria-expanded={menuAbierto}
              >
                {menuAbierto ? (
                  <X className="w-6 h-6 text-gray-600" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-600" />
                )}
              </button>
            )}
          </div>
        </div>

        {/* Menú móvil desplegable */}
        {mostrarNavegacion && (
          <div
            className={`
              md:hidden overflow-hidden transition-all duration-300 ease-in-out
              ${menuAbierto ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}
            `}
          >
            <nav className="px-4 py-3 space-y-1 bg-gray-50 border-t border-gray-100">
              {LINKS_NAVEGACION.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={cerrarMenu}
                  className={`
                    block px-4 py-3 rounded-lg font-medium text-gray-700
                    ${link.color} transition-all duration-200
                    hover:bg-white hover:shadow-sm
                  `}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Overlay para cerrar menú */}
      {menuAbierto && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={cerrarMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}