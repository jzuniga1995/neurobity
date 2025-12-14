'use client';

import { useState, useRef, useEffect } from 'react';
import PreguntaTest from '@/componentes/PreguntaTest';
import ResultadosTest from '@/componentes/ResultadosTest';
import { obtenerPreguntasEdad } from '@/datos/preguntas-edad';
import { calcularEdadMental } from '@/lib/calculadoras';
import { PreguntaEdadMental, RespuestaUsuario, ResultadoEdadMental } from '@/tipos';
import { Heart, ChevronLeft, ChevronRight, Flag, Target, Zap, CheckCircle, TrendingUp, Calendar, Minus, Plus } from 'lucide-react';

type EstadoTest = 'captura-edad' | 'en-progreso' | 'finalizado';

const INTERPRETACIONES_EDAD = [
  { diferencia: '< -10', nivel: 'Muy Joven', color: 'purple', descripcion: 'Espíritu muy juvenil' },
  { diferencia: '-5 a -10', nivel: 'Joven de Espíritu', color: 'blue', descripcion: 'Perspectiva juvenil' },
  { diferencia: '-5 a +5', nivel: 'Equilibrado', color: 'green', descripcion: 'Madurez acorde a tu edad' },
  { diferencia: '+5 a +10', nivel: 'Maduro', color: 'orange', descripcion: 'Mayor madurez' },
  { diferencia: '> +10', nivel: 'Muy Maduro', color: 'red', descripcion: 'Madurez excepcional' }
];

const COLORES_NIVEL = {
  purple: 'bg-purple-100 text-purple-800 border-purple-200',
  blue: 'bg-blue-100 text-blue-800 border-blue-200',
  green: 'bg-green-100 text-green-800 border-green-200',
  orange: 'bg-orange-100 text-orange-800 border-orange-200',
  red: 'bg-red-100 text-red-800 border-red-200'
};

export default function TestEdadMentalClient() {
  const preguntaRef = useRef<HTMLDivElement>(null);
  const [estado, setEstado] = useState<EstadoTest>('captura-edad');
  const [edadCronologica, setEdadCronologica] = useState<number>(25);
  const [preguntas, setPreguntas] = useState<PreguntaEdadMental[]>([]);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestas, setRespuestas] = useState<RespuestaUsuario[]>([]);
  const [resultado, setResultado] = useState<ResultadoEdadMental | null>(null);

    useEffect(() => {
    if (preguntaRef.current && estado === 'en-progreso') {
      const yOffset = -120;
      const element = preguntaRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [preguntaActual, estado]);

  const iniciarTest = () => {
    if (edadCronologica < 10 || edadCronologica > 100) {
      alert('Por favor ingresa una edad válida entre 10 y 100 años');
      return;
    }



    const preguntasSeleccionadas = obtenerPreguntasEdad(20);
    setPreguntas(preguntasSeleccionadas);
    setRespuestas(preguntasSeleccionadas.map(p => ({
      preguntaId: p.id,
      respuestaSeleccionada: -1,
      esCorrecta: false
    })));
    setEstado('en-progreso');
  };
  

  const seleccionarRespuesta = (indice: number) => {
    const nuevasRespuestas = [...respuestas];
    const pregunta = preguntas[preguntaActual];
    
    nuevasRespuestas[preguntaActual] = {
      preguntaId: pregunta.id,
      respuestaSeleccionada: indice,
      esCorrecta: indice === pregunta.respuestaCorrecta
    };
    
    setRespuestas(nuevasRespuestas);
  };

  const irSiguiente = () => {
    if (preguntaActual < preguntas.length - 1) {
      setPreguntaActual(preguntaActual + 1);
    }
  };

  const irAnterior = () => {
    if (preguntaActual > 0) {
      setPreguntaActual(preguntaActual - 1);
    }
  };

  const finalizarTest = () => {
    const resultadoCalculado = calcularEdadMental(respuestas, edadCronologica, preguntas);
    setResultado(resultadoCalculado);
    setEstado('finalizado');
  };

  const reintentar = () => {
    setEstado('captura-edad');
    setPreguntaActual(0);
    setRespuestas([]);
    setResultado(null);
  };

  const puedeAvanzar = respuestas[preguntaActual]?.respuestaSeleccionada !== -1;
  const todasRespondidas = respuestas.every(r => r.respuestaSeleccionada !== -1);
  const respondidas = respuestas.filter(r => r.respuestaSeleccionada !== -1).length;

  // ============ PANTALLA DE CAPTURA DE EDAD ============
  if (estado === 'captura-edad') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-xl mb-6">
              <Heart className="w-10 h-10 text-white" strokeWidth={2.5} />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Test de Edad Mental
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubre tu nivel de madurez emocional y social
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Estadísticas */}
            <div className="grid grid-cols-3 gap-px bg-gray-200">
              <div className="bg-white p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">20</div>
                <div className="text-sm text-gray-600">Preguntas</div>
              </div>
              <div className="bg-white p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">~10</div>
                <div className="text-sm text-gray-600">Minutos</div>
              </div>
              <div className="bg-white p-6 text-center">
                <div className="text-3xl font-bold text-green-600 mb-1">±5</div>
                <div className="text-sm text-gray-600">Años típicos</div>
              </div>
            </div>

            <div className="p-8 space-y-6">
              {/* Qué es la edad mental */}
              <div className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">¿Qué es la Edad Mental?</h3>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  La edad mental mide tu madurez emocional, social y cognitiva. Puede ser mayor, 
                  menor o igual a tu edad cronológica. Este test evalúa cómo pensás, reaccionás 
                  y tomás decisiones en diferentes situaciones de la vida.
                </p>
              </div>

              {/* Selector de edad */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-8">
                <div className="text-center mb-6">
                  <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    ¿Cuál es tu edad cronológica?
                  </h3>
                  <p className="text-sm text-gray-600">
                    Necesitamos tu edad real para calcular tu edad mental
                  </p>
                </div>
                
                <div className="flex justify-center items-center gap-4">
                  <button
                    onClick={() => setEdadCronologica(Math.max(10, edadCronologica - 1))}
                    className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl font-bold hover:from-green-600 hover:to-green-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center"
                  >
                    <Minus className="w-6 h-6" />
                  </button>
                  
                  <div className="relative">
                  <input
  type="number"
  min="10"
  max="100"
  value={edadCronologica}
  onChange={(e) => setEdadCronologica(parseInt(e.target.value) || 25)}
  className="w-40 text-center text-5xl font-bold border-4 border-green-300 rounded-2xl py-4 text-gray-900 focus:outline-none focus:ring-4 focus:ring-green-200 focus:border-green-500 transition-all"
/>
                    <div className="absolute -bottom-6 left-0 right-0 text-center text-sm font-medium text-gray-500">
                      años
                    </div>
                  </div>
                  
                  <button
                    onClick={() => setEdadCronologica(Math.min(100, edadCronologica + 1))}
                    className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl font-bold hover:from-green-600 hover:to-green-700 transition-all shadow-md hover:shadow-lg flex items-center justify-center"
                  >
                    <Plus className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Interpretaciones */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-gray-600" />
                  <h3 className="font-bold text-gray-900">Interpretación de Resultados</h3>
                </div>
                <div className="space-y-2">
                  {INTERPRETACIONES_EDAD.map((interp, index) => (
                    <div key={index} className={`border-2 rounded-lg p-4 ${COLORES_NIVEL[interp.color as keyof typeof COLORES_NIVEL]}`}>
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-bold">{interp.nivel}</div>
                          <div className="text-sm opacity-90">{interp.descripcion}</div>
                        </div>
                        <div className="text-lg font-bold">{interp.diferencia}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consejos */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Consejos para mejores resultados</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Responde con total honestidad según cómo realmente actuarías</li>
                      <li>• No pienses en cómo deberías responder, sé auténtico</li>
                      <li>• Imagina situaciones reales de tu vida cotidiana</li>
                      <li>• No hay respuestas correctas o incorrectas</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Botón inicio */}
              <button
                onClick={iniciarTest}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-green-700 hover:to-green-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                <Heart className="w-6 h-6" />
                Comenzar Test de Edad Mental
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ============ PANTALLA DE PROGRESO ============
  if (estado === 'en-progreso') {
    const progreso = (respondidas / preguntas.length) * 100;

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-white py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header sticky */}
          <div className="sticky top-20 z-40 mb-6">
            <div className="bg-white rounded-xl shadow-lg border-2 border-green-200 p-4">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Tu edad cronológica</div>
                    <div className="text-lg font-bold text-gray-900">{edadCronologica} años</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500">Progreso</div>
                  <div className="text-lg font-bold text-gray-900">{respondidas} / {preguntas.length}</div>
                </div>
              </div>
              <div className="relative w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full transition-all duration-500 shadow-sm"
                  style={{ width: `${progreso}%` }}
                />
              </div>
            </div>
          </div>

         <div ref={preguntaRef}>
            <PreguntaTest
              pregunta={preguntas[preguntaActual]}
              numeroPregunta={preguntaActual + 1}
              totalPreguntas={preguntas.length}
              respuestaSeleccionada={respuestas[preguntaActual]?.respuestaSeleccionada}
              onSeleccionarRespuesta={seleccionarRespuesta}
            />
          </div>

          {/* Navegación */}
          <div className="mt-6 flex items-center justify-between gap-4">
            <button
              onClick={irAnterior}
              disabled={preguntaActual === 0}
              className={`
                py-3 px-6 rounded-xl font-semibold transition-all inline-flex items-center gap-2
                ${preguntaActual === 0
                  ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-green-500 hover:text-green-600 shadow-sm hover:shadow-md'
                }
              `}
            >
              <ChevronLeft className="w-5 h-5" />
              Anterior
            </button>

            {preguntaActual === preguntas.length - 1 ? (
              <button
                onClick={finalizarTest}
                disabled={!todasRespondidas}
                className={`
                  py-3 px-6 rounded-xl font-bold transition-all shadow-lg inline-flex items-center gap-2
                  ${todasRespondidas
                    ? 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 hover:shadow-xl'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }
                `}
              >
                <Flag className="w-5 h-5" />
                {todasRespondidas ? 'Ver mi Edad Mental' : `Faltan ${preguntas.length - respondidas} preguntas`}
              </button>
            ) : (
              <button
                onClick={irSiguiente}
                disabled={!puedeAvanzar}
                className={`
                  py-3 px-6 rounded-xl font-bold transition-all shadow-lg inline-flex items-center gap-2
                  ${puedeAvanzar
                    ? 'bg-gradient-to-r from-green-600 to-green-700 text-white hover:from-green-700 hover:to-green-800 hover:shadow-xl'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }
                `}
              >
                Siguiente
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Mapa de navegación */}
          <div className="mt-8 bg-white rounded-xl shadow-lg border border-gray-100 p-6">
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Target className="w-5 h-5 text-green-600" />
              Navegación Rápida
            </h3>
            <div className="grid grid-cols-10 gap-2">
              {preguntas.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setPreguntaActual(index)}
                  className={`
                    w-full aspect-square rounded-lg font-bold transition-all text-sm
                    ${index === preguntaActual 
                      ? 'bg-gradient-to-br from-green-600 to-green-700 text-white ring-4 ring-green-200 shadow-lg scale-110' 
                      : respuestas[index]?.respuestaSeleccionada !== -1
                        ? 'bg-green-100 text-green-800 hover:bg-green-200 border-2 border-green-300'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200 border-2 border-gray-200'
                    }
                  `}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <div className="flex items-center justify-center gap-6 mt-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gradient-to-br from-green-600 to-green-700 rounded"></div>
                <span className="text-gray-600">Actual</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-100 border-2 border-green-300 rounded"></div>
                <span className="text-gray-600">Respondida</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-gray-100 border-2 border-gray-200 rounded"></div>
                <span className="text-gray-600">Pendiente</span>
              </div>
            </div>
          </div>

          {/* Categoría de pregunta */}
          {preguntas[preguntaActual].categoria && (
            <div className="mt-6 text-center">
              <span className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-sm border-2 border-green-200 shadow-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-gray-600">Categoría:</span>
                <strong className="text-green-700">{preguntas[preguntaActual].categoria}</strong>
              </span>
            </div>
          )}
        </div>
      </div>
    );
  }

  // ============ PANTALLA DE RESULTADOS ============
  if (estado === 'finalizado' && resultado) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-white py-12">
        <ResultadosTest
          tipo="edad"
          resultado={resultado}
          onReintentar={reintentar}
        />
      </div>
    );
  }

  return null;
}