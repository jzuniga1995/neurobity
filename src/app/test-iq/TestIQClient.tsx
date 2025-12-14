'use client';

import { useState, useEffect,useRef  } from 'react';
import PreguntaTest from '@/componentes/PreguntaTest';
import ResultadosTest from '@/componentes/ResultadosTest';
import { obtenerPreguntasAleatorias } from '@/datos/preguntas-iq';
import { calcularIQ, formatearTiempo } from '@/lib/calculadoras';
import { Pregunta, RespuestaUsuario, ResultadoIQ } from '@/tipos';
import { Clock, ChevronLeft, ChevronRight, Flag, Brain, Target, Zap, CheckCircle, TrendingUp } from 'lucide-react';

type EstadoTest = 'inicio' | 'en-progreso' | 'finalizado';

const RANGOS_IQ = [
  { rango: '< 70', nivel: 'Muy Bajo', color: 'red', descripcion: 'Requiere apoyo' },
  { rango: '70-84', nivel: 'Bajo', color: 'orange', descripcion: 'Por debajo del promedio' },
  { rango: '85-114', nivel: 'Promedio', color: 'green', descripcion: '68% de la población' },
  { rango: '115-129', nivel: 'Alto', color: 'blue', descripcion: 'Por encima del promedio' },
  { rango: '130+', nivel: 'Muy Alto', color: 'purple', descripcion: 'Superdotado (2% superior)' }
];

const COLORES_RANGO = {
  red: 'bg-red-100 text-red-800 border-red-200',
  orange: 'bg-orange-100 text-orange-800 border-orange-200',
  green: 'bg-green-100 text-green-800 border-green-200',
  blue: 'bg-blue-100 text-blue-800 border-blue-200',
  purple: 'bg-purple-100 text-purple-800 border-purple-200'
};

export default function TestIQClient() {
  const preguntaRef = useRef<HTMLDivElement>(null);
  const [estado, setEstado] = useState<EstadoTest>('inicio');
  const [preguntas, setPreguntas] = useState<Pregunta[]>([]);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestas, setRespuestas] = useState<RespuestaUsuario[]>([]);
  const [tiempoInicio, setTiempoInicio] = useState<number>(0);
  const [tiempoTranscurrido, setTiempoTranscurrido] = useState<number>(0);
  const [resultado, setResultado] = useState<ResultadoIQ | null>(null);

  useEffect(() => {
    if (estado === 'en-progreso') {
      const interval = setInterval(() => {
        setTiempoTranscurrido(Math.floor((Date.now() - tiempoInicio) / 1000));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [estado, tiempoInicio]);

    useEffect(() => {
    if (preguntaRef.current && estado === 'en-progreso') {
      const yOffset = -120;
      const element = preguntaRef.current;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [preguntaActual, estado]);


  const iniciarTest = () => {
    const preguntasSeleccionadas = obtenerPreguntasAleatorias(30);
    setPreguntas(preguntasSeleccionadas);
    setRespuestas(preguntasSeleccionadas.map(p => ({
      preguntaId: p.id,
      respuestaSeleccionada: -1,
      esCorrecta: false
    })));
    setTiempoInicio(Date.now());
    setEstado('en-progreso');
  };

  

  const seleccionarRespuesta = (indice: number) => {
    const nuevasRespuestas = [...respuestas];
    const pregunta = preguntas[preguntaActual];
    
    nuevasRespuestas[preguntaActual] = {
      preguntaId: pregunta.id,
      respuestaSeleccionada: indice,
      esCorrecta: indice === pregunta.respuestaCorrecta,
      tiempoRespuesta: tiempoTranscurrido
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
    const tiempoTotal = Math.floor((Date.now() - tiempoInicio) / 1000);
    const resultadoCalculado = calcularIQ(respuestas, tiempoTotal);
    setResultado(resultadoCalculado);
    setEstado('finalizado');
  };

  const reintentar = () => {
    setEstado('inicio');
    setPreguntaActual(0);
    setRespuestas([]);
    setTiempoTranscurrido(0);
    setResultado(null);
  };

  const puedeAvanzar = respuestas[preguntaActual]?.respuestaSeleccionada !== -1;
  const todasRespondidas = respuestas.every(r => r.respuestaSeleccionada !== -1);
  const respondidas = respuestas.filter(r => r.respuestaSeleccionada !== -1).length;

  // ============ PANTALLA DE INICIO ============
  if (estado === 'inicio') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-xl mb-6">
              <Brain className="w-10 h-10 text-white" strokeWidth={2.5} />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Test de Coeficiente Intelectual
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Evalúa tu IQ con 30 preguntas de lógica, matemáticas y razonamiento espacial
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Estadísticas */}
            <div className="grid grid-cols-3 gap-px bg-gray-200">
              <div className="bg-white p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">30</div>
                <div className="text-sm text-gray-600">Preguntas</div>
              </div>
              <div className="bg-white p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">~20</div>
                <div className="text-sm text-gray-600">Minutos</div>
              </div>
              <div className="bg-white p-6 text-center">
                <div className="text-3xl font-bold text-blue-600 mb-1">100</div>
                <div className="text-sm text-gray-600">IQ Promedio</div>
              </div>
            </div>

            <div className="p-8 space-y-6">
              {/* Instrucciones */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">Cómo funciona</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Responde 30 preguntas sobre lógica, matemáticas y razonamiento',
                    'No hay límite de tiempo, pero la velocidad influye en tu puntaje',
                    'Cada pregunta tiene solo una respuesta correcta',
                    'Puedes navegar entre preguntas antes de finalizar'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Rangos de IQ */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-gray-600" />
                  <h3 className="font-bold text-gray-900">Escala de IQ</h3>
                </div>
                <div className="space-y-2">
                  {RANGOS_IQ.map((rango, index) => (
                    <div key={index} className={`border-2 rounded-lg p-4 ${COLORES_RANGO[rango.color as keyof typeof COLORES_RANGO]}`}>
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-bold">{rango.nivel}</div>
                          <div className="text-sm opacity-90">{rango.descripcion}</div>
                        </div>
                        <div className="text-2xl font-bold">{rango.rango}</div>
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
                      <li>• Tómate tu tiempo para pensar cada respuesta con calma</li>
                      <li>• La precisión es más importante que la velocidad</li>
                      <li>• Si no sabes una respuesta, marca tu mejor opción y continúa</li>
                      <li>• Busca un lugar tranquilo sin distracciones</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Botón inicio */}
              <button
                onClick={iniciarTest}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                <Brain className="w-6 h-6" />
                Comenzar Test de IQ
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
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header sticky */}
          <div className="sticky top-20 z-40 mb-6">
            <div className="bg-white rounded-xl shadow-lg border-2 border-blue-200 p-4">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Tiempo</div>
                    <div className="text-lg font-bold text-gray-900">{formatearTiempo(tiempoTranscurrido)}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500">Progreso</div>
                  <div className="text-lg font-bold text-gray-900">{respondidas} / {preguntas.length}</div>
                </div>
              </div>
              <div className="relative w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-500 shadow-sm"
                  style={{ width: `${progreso}%` }}
                />
              </div>
            </div>
          </div>

          {/* Pregunta */}
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
                  : 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 shadow-sm hover:shadow-md'
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
                {todasRespondidas ? 'Finalizar Test' : `Faltan ${preguntas.length - respondidas} preguntas`}
              </button>
            ) : (
              <button
                onClick={irSiguiente}
                disabled={!puedeAvanzar}
                className={`
                  py-3 px-6 rounded-xl font-bold transition-all shadow-lg inline-flex items-center gap-2
                  ${puedeAvanzar
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800 hover:shadow-xl'
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
              <Target className="w-5 h-5 text-blue-600" />
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
                      ? 'bg-gradient-to-br from-blue-600 to-blue-700 text-white ring-4 ring-blue-200 shadow-lg scale-110' 
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
                <div className="w-4 h-4 bg-gradient-to-br from-blue-600 to-blue-700 rounded"></div>
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
        </div>
      </div>
    );
  }

  // ============ PANTALLA DE RESULTADOS ============
  if (estado === 'finalizado' && resultado) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12">
        <ResultadosTest
          tipo="iq"
          resultado={resultado}
          onReintentar={reintentar}
        />
      </div>
    );
  }

  return null;
}