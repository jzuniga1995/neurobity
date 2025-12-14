import { ButtonHTMLAttributes, ReactNode } from 'react';

interface BotonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variante?: 'primario' | 'secundario' | 'outline' | 'peligro' | 'exito';
  tamano?: 'sm' | 'md' | 'lg';
  ancho?: 'auto' | 'completo';
  icono?: ReactNode;
  posicionIcono?: 'izquierda' | 'derecha';
  cargando?: boolean;
}

export default function Boton({
  children,
  variante = 'primario',
  tamano = 'md',
  ancho = 'auto',
  icono,
  posicionIcono = 'izquierda',
  cargando = false,
  disabled,
  className = '',
  ...props
}: BotonProps) {

  // Estilos base según variante
  const estilosVariante = {
    primario: 'bg-blue-600 hover:bg-blue-700 text-white shadow-md hover:shadow-lg',
    secundario: 'bg-gray-600 hover:bg-gray-700 text-white shadow-md hover:shadow-lg',
    outline: 'bg-transparent border-2 border-blue-600 text-blue-600 hover:bg-blue-50',
    peligro: 'bg-red-600 hover:bg-red-700 text-white shadow-md hover:shadow-lg',
    exito: 'bg-green-600 hover:bg-green-700 text-white shadow-md hover:shadow-lg'
  };

  // Estilos según tamaño
  const estilosTamano = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  // Ancho del botón
  const estilosAncho = {
    auto: 'w-auto',
    completo: 'w-full'
  };

  // Estado deshabilitado
  const estilosDeshabilitado = 'opacity-50 cursor-not-allowed hover:shadow-md';

  // Clases finales
  const clasesFinales = `
    ${estilosVariante[variante]}
    ${estilosTamano[tamano]}
    ${estilosAncho[ancho]}
    ${disabled || cargando ? estilosDeshabilitado : ''}
    font-semibold rounded-lg
    transition-all duration-200
    flex items-center justify-center gap-2
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
    ${className}
  `;

  // Spinner de carga (JSX directo, no componente)
  const spinnerCarga = (
    <svg 
      className="animate-spin h-5 w-5" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle 
        className="opacity-25" 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="4"
      />
      <path 
        className="opacity-75" 
        fill="currentColor" 
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  return (
    <button
      className={clasesFinales}
      disabled={disabled || cargando}
      {...props}
    >
      {/* Icono o spinner a la izquierda */}
      {cargando ? (
        spinnerCarga
      ) : (
        icono && posicionIcono === 'izquierda' && (
          <span className="flex-shrink-0">{icono}</span>
        )
      )}

      {/* Contenido del botón */}
      <span>{children}</span>

      {/* Icono a la derecha */}
      {!cargando && icono && posicionIcono === 'derecha' && (
        <span className="flex-shrink-0">{icono}</span>
      )}
    </button>
  );
}

// Componente auxiliar para grupos de botones
export function GrupoBotones({ 
  children, 
  alineacion = 'center',
  espaciado = 'normal'
}: { 
  children: ReactNode;
  alineacion?: 'left' | 'center' | 'right' | 'between';
  espaciado?: 'compacto' | 'normal' | 'amplio';
}) {
  
  const estilosAlineacion = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
    between: 'justify-between'
  };

  const estilosEspaciado = {
    compacto: 'gap-2',
    normal: 'gap-4',
    amplio: 'gap-6'
  };

  return (
    <div className={`
      flex flex-wrap items-center
      ${estilosAlineacion[alineacion]}
      ${estilosEspaciado[espaciado]}
    `}>
      {children}
    </div>
  );
}