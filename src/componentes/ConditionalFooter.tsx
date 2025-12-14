'use client';

import { usePathname } from 'next/navigation';
import Footer from '@/componentes/footer';

export default function ConditionalFooter() {
  const pathname = usePathname();
  
  // Ocultar footer en tests activos
  const ocultarFooter = [
    '/test-iq',
    '/test-edad-mental', 
    '/test-velocidad-lectura'
  ].includes(pathname);

  if (ocultarFooter) {
    return null;
  }

  return <Footer />;
}