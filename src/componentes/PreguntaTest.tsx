import { Check, X } from 'lucide-react';
import { Pregunta } from '@/tipos';

interface PreguntaTestProps {
  pregunta: Pregunta;
  numeroPregunta: number;
  totalPreguntas: number;
  respuestaSeleccionada: number | null;
  onSeleccionarRespuesta: (indice: number) => void;
  mostrarResultado?: boolean;
  deshabilitado?: boolean;
}

const LETRAS_OPCIONES = ['A', 'B', 'C', 'D', 'E', 'F'] as const;

const ESTILOS_DIFICULTAD = {
  facil: 'bg-green-100 text-green-800',
  medio: 'bg-yellow-100 text-yellow-800',
  dificil: 'bg-red-100 text-red-800'
} as const;

const TEXTO_DIFICULTAD = {
  facil: 'Fácil',
  medio: 'Medio',
  dificil: 'Difícil'
} as const;

export default function PreguntaTest({
  pregunta,
  numeroPregunta,
  totalPreguntas,
  respuestaSeleccionada,
  onSeleccionarRespuesta,
  mostrarResultado = false,
  deshabilitado = false
}: PreguntaTestProps) {

  const obtenerEstiloOpcion = (indice: number) => {
    const estaSeleccionada = respuestaSeleccionada === indice;
    
    if (mostrarResultado) {
      const esCorrecta = indice === pregunta.respuestaCorrecta;
      
      if (esCorrecta) {
        return 'bg-green-50 border-green-500 text-green-900 shadow-sm';
      }
      
      if (estaSeleccionada && !esCorrecta) {
        return 'bg-red-50 border-red-500 text-red-900 shadow-sm';
      }
      
      return 'bg-gray-50 border-gray-200 text-gray-400 opacity-60';
    }
    
    if (estaSeleccionada) {
      return 'bg-blue-50 border-blue-500 text-blue-900 ring-2 ring-blue-200 shadow-md scale-[1.02]';
    }
    
    return 'bg-white border-gray-300 text-gray-800 hover:bg-gray-50 hover:border-blue-400 hover:shadow-sm';
  };

  const obtenerEstiloLetra = (indice: number) => {
    const estaSeleccionada = respuestaSeleccionada === indice;
    
    if (mostrarResultado) {
      const esCorrecta = indice === pregunta.respuestaCorrecta;
      
      if (esCorrecta) {
        return 'bg-green-500 text-white';
      }
      
      if (estaSeleccionada && !esCorrecta) {
        return 'bg-red-500 text-white';
      }
      
      return 'bg-gray-300 text-gray-500';
    }
    
    if (estaSeleccionada) {
      return 'bg-blue-500 text-white shadow-sm';
    }
    
    return 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600';
  };

  const renderizarIconoEstado = (indice: number) => {
    if (!mostrarResultado) return null;
    
    const esCorrecta = indice === pregunta.respuestaCorrecta;
    const estaSeleccionada = respuestaSeleccionada === indice;
    
    if (esCorrecta) {
      return <Check className="w-6 h-6 text-green-600 flex-shrink-0" strokeWidth={3} />;
    }
    
    if (estaSeleccionada && !esCorrecta) {
      return <X className="w-6 h-6 text-red-600 flex-shrink-0" strokeWidth={3} />;
    }
    
    return null;
  };

  const progreso = (numeroPregunta / totalPreguntas) * 100;

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-gray-600">
            Pregunta {numeroPregunta} de {totalPreguntas}
          </span>
          
          {pregunta.dificultad && (
            <span className={`
              px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide
              ${ESTILOS_DIFICULTAD[pregunta.dificultad]}
            `}>
              {TEXTO_DIFICULTAD[pregunta.dificultad]}
            </span>
          )}
        </div>
        
        {/* Barra de progreso mejorada */}
        <div className="relative w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
          <div 
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500 ease-out shadow-sm"
            style={{ width: `${progreso}%` }}
          />
        </div>
      </div>

      {/* Pregunta */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-6 border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 leading-relaxed">
          {pregunta.pregunta}
        </h2>

        {/* Opciones */}
        <div className="space-y-3">
          {pregunta.opciones.map((opcion, indice) => (
            <button
              key={indice}
              onClick={() => !deshabilitado && onSeleccionarRespuesta(indice)}
              disabled={deshabilitado}
              className={`
                group w-full text-left p-5 rounded-xl border-2 
                transition-all duration-200
                ${obtenerEstiloOpcion(indice)}
                ${deshabilitado ? 'cursor-not-allowed' : 'cursor-pointer active:scale-[0.99]'}
                flex items-center gap-4
              `}
            >
              {/* Letra de la opción */}
              <span className={`
                flex-shrink-0 w-10 h-10 rounded-lg
                flex items-center justify-center font-bold text-sm
                transition-all duration-200
                ${obtenerEstiloLetra(indice)}
              `}>
                {LETRAS_OPCIONES[indice]}
              </span>
              
              {/* Texto de la opción */}
              <span className="flex-1 font-medium leading-relaxed">
                {opcion}
              </span>
              
              {/* Icono de resultado */}
              {renderizarIconoEstado(indice)}
            </button>
          ))}
        </div>
      </div>

      {/* Categoría */}
      {pregunta.categoria && (
        <div className="text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full text-sm text-gray-600">
            <span className="w-2 h-2 bg-blue-500 rounded-full" />
            <span className="font-medium">{pregunta.categoria}</span>
          </span>
        </div>
      )}
    </div>
  );
}