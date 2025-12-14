import Link from 'next/link';
import { LucideIcon, Clock, FileText } from 'lucide-react';

interface TarjetaTestProps {
  titulo: string;
  descripcion: string;
  duracion: string;
  icono: LucideIcon;
  href: string;
  color: 'azul' | 'verde' | 'morado';
  numeroPreguntas?: number;
}

const COLORES = {
  azul: {
    fondo: 'bg-blue-50 hover:bg-blue-100',
    borde: 'border-blue-200',
    icono: 'bg-gradient-to-br from-blue-500 to-blue-600',
    boton: 'bg-blue-600 hover:bg-blue-700 active:bg-blue-800'
  },
  verde: {
    fondo: 'bg-green-50 hover:bg-green-100',
    borde: 'border-green-200',
    icono: 'bg-gradient-to-br from-green-500 to-green-600',
    boton: 'bg-green-600 hover:bg-green-700 active:bg-green-800'
  },
  morado: {
    fondo: 'bg-purple-50 hover:bg-purple-100',
    borde: 'border-purple-200',
    icono: 'bg-gradient-to-br from-purple-500 to-purple-600',
    boton: 'bg-purple-600 hover:bg-purple-700 active:bg-purple-800'
  }
} as const;

export default function TarjetaTest({
  titulo,
  descripcion,
  duracion,
  icono: Icono,
  href,
  color,
  numeroPreguntas
}: TarjetaTestProps) {
  const estilos = COLORES[color];

  return (
    <Link 
      href={href}
      className={`
        group block h-full
        ${estilos.fondo} ${estilos.borde}
        border-2 rounded-2xl p-6 
        transition-all duration-300 ease-out
        hover:shadow-xl hover:-translate-y-1
      `}
    >
      {/* Icono con gradiente */}
      <div className={`
        ${estilos.icono} 
        w-16 h-16 rounded-2xl 
        flex items-center justify-center 
        mb-4 shadow-md
        group-hover:scale-110 transition-transform duration-300
      `}>
        <Icono className="w-8 h-8 text-white" strokeWidth={2.5} />
      </div>

      {/* Contenido */}
      <div className="flex flex-col h-[calc(100%-5rem)]">
        <h3 className="text-2xl font-bold text-gray-800 mb-2 line-clamp-2">
          {titulo}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3 flex-grow">
          {descripcion}
        </p>

        {/* Metadatos */}
        <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4" />
            <span>{duracion}</span>
          </div>

          {numeroPreguntas && (
            <div className="flex items-center gap-1.5">
              <FileText className="w-4 h-4" />
              <span>{numeroPreguntas} preguntas</span>
            </div>
          )}
        </div>

        {/* Botón CTA */}
        <button 
          className={`
            ${estilos.boton}
            w-full text-white font-semibold 
            py-3 px-6 rounded-xl 
            transition-all duration-200
            shadow-sm hover:shadow-md
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500
          `}
        >
          Comenzar Test
        </button>
      </div>
    </Link>
  );
}