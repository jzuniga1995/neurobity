'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: '/es', label: 'Inicio' },
    { href: '/es/articulos', label: 'Artículos' },
    { href: '/es#sobrenosotros', label: 'Sobre Nosotros' },
    { href: '/es#contacto', label: 'Contacto' },
  ];

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-3 md:px-12 md:py-4
                 backdrop-blur-xl bg-white/5
                 border-b border-white/10
                 shadow-[0_4px_30px_rgba(0,255,255,0.1)]
                 hover:shadow-[0_8px_40px_rgba(0,255,255,0.15)]
                 hover:ring-1 hover:ring-cyan-500/30
                 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/es" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Neurobity Logo"
            width={32}
            height={32}
            priority
            className="object-contain"
          />
          <span className="text-lg md:text-xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent tracking-tight hover:opacity-90 transition">
            Neurobity
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm md:text-base font-medium text-white">
          {links.map(({ href, label }) => (
            <Link key={href} href={href} className="hover:text-cyan-400 transition-colors">
              {label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white hover:text-cyan-400 transition"
          aria-label="Abrir menú"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mt-4 px-4 flex flex-col gap-4 text-white text-sm font-medium"
          >
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setOpen(false)}
                className="hover:text-cyan-400 transition-colors"
              >
                {label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
