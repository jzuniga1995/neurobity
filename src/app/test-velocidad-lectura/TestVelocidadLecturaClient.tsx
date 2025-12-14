'use client';

import { useState, useEffect,useRef } from 'react';
import { useRouter } from 'next/navigation';
import ResultadosTest from '@/componentes/ResultadosTest';
import { obtenerTextoAleatorio } from '@/datos/textos-lectura';
import { calcularVelocidadLectura, formatearTiempo } from '@/lib/calculadoras';
import { TextoLectura, RespuestaUsuario, ResultadoVelocidadLectura } from '@/tipos';
import { BookOpen, Clock, ChevronRight, Eye, Zap, Target, TrendingUp, CheckCircle, AlertCircle } from 'lucide-react';

type EstadoTest = 'inicio' | 'leyendo' | 'preguntas' | 'finalizado';

const REFERENCIAS_VELOCIDAD = [
  { rango: '150-200', nivel: 'Lector Lento', color: 'red', descripcion: 'Por debajo del promedio' },
  { rango: '200-250', nivel: 'Lector Promedio', color: 'yellow', descripcion: 'Velocidad típica de adultos' },
  { rango: '250-300', nivel: 'Lector Bueno', color: 'green', descripcion: 'Por encima del promedio' },
  { rango: '300+', nivel: 'Lector Rápido', color: 'blue', descripcion: 'Excelente velocidad' }
];

const COLORES_NIVEL = {
  red: 'bg-red-100 text-red-800 border-red-200',
  yellow: 'bg-yellow-100 text-yellow-800 border-yellow-200',
  green: 'bg-green-100 text-green-800 border-green-200',
  blue: 'bg-blue-100 text-blue-800 border-blue-200'
};

export default function TestVelocidadLecturaClient() {
  const router = useRouter();
  const preguntaRef = useRef<HTMLDivElement>(null);
  const [estado, setEstado] = useState<EstadoTest>('inicio');
  const [texto, setTexto] = useState<TextoLectura | null>(null);
  const [tiempoInicio, setTiempoInicio] = useState<number>(0);
  const [tiempoLectura, setTiempoLectura] = useState<number>(0);
  const [tiempoTranscurrido, setTiempoTranscurrido] = useState<number>(0);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestas, setRespuestas] = useState<RespuestaUsuario[]>([]);
  const [resultado, setResultado] = useState<ResultadoVelocidadLectura | null>(null);

  useEffect(() => {
    if (estado === 'leyendo') {
      const interval = setInterval(() => {
        setTiempoTranscurrido(Math.floor((Date.now() - tiempoInicio) / 1000));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [estado, tiempoInicio]);

  useEffect(() => {
     if (preguntaRef.current && estado === 'preguntas') {
       const yOffset = -120;
       const element = preguntaRef.current;
       const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
       window.scrollTo({ top: y, behavior: 'smooth' });
     }
   }, [preguntaActual, estado]);

  const iniciarTest = () => {
    const textoSeleccionado = obtenerTextoAleatorio();
    setTexto(textoSeleccionado);
    setRespuestas(textoSeleccionado.preguntas.map(p => ({
      preguntaId: p.id,
      respuestaSeleccionada: -1,
      esCorrecta: false
    })));
    setTiempoInicio(Date.now());
    setEstado('leyendo');
  };

  const terminarLectura = () => {
    const tiempo = Math.floor((Date.now() - tiempoInicio) / 1000);
    setTiempoLectura(tiempo);
    setEstado('preguntas');
  };

  const seleccionarRespuesta = (indice: number) => {
    if (!texto) return;
    
    const nuevasRespuestas = [...respuestas];
    const pregunta = texto.preguntas[preguntaActual];
    
    nuevasRespuestas[preguntaActual] = {
      preguntaId: pregunta.id,
      respuestaSeleccionada: indice,
      esCorrecta: indice === pregunta.respuestaCorrecta
    };
    
    setRespuestas(nuevasRespuestas);
  };

  const siguientePregunta = () => {
    if (!texto) return;
    
    if (preguntaActual < texto.preguntas.length - 1) {
      setPreguntaActual(preguntaActual + 1);
    } else {
      finalizarTest();
    }
  };

  const finalizarTest = () => {
    if (!texto) return;
    
    const respuestasCorrectas = respuestas.filter(r => r.esCorrecta).length;
    const totalPreguntas = texto.preguntas.length;
    
    const resultadoCalculado = calcularVelocidadLectura(
      texto.numeroPalabras,
      tiempoLectura,
      respuestasCorrectas,
      totalPreguntas
    );
    
    setResultado(resultadoCalculado);
    setEstado('finalizado');
  };

  const reintentar = () => {
    setEstado('inicio');
    setTexto(null);
    setPreguntaActual(0);
    setRespuestas([]);
    setTiempoTranscurrido(0);
    setTiempoLectura(0);
    setResultado(null);
  };

  const respuestaSeleccionada = respuestas[preguntaActual]?.respuestaSeleccionada !== -1;

  // ============ PANTALLA DE INICIO ============
  if (estado === 'inicio') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          {/* Hero */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-xl mb-6">
              <BookOpen className="w-10 h-10 text-white" strokeWidth={2.5} />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Test de Velocidad de Lectura
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Descubre cuántas palabras por minuto lees y tu nivel de comprensión lectora
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {/* Estadísticas */}
            <div className="grid grid-cols-3 gap-px bg-gray-200">
              <div className="bg-white p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">1</div>
                <div className="text-sm text-gray-600">Texto</div>
              </div>
              <div className="bg-white p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">~15</div>
                <div className="text-sm text-gray-600">Minutos</div>
              </div>
              <div className="bg-white p-6 text-center">
                <div className="text-3xl font-bold text-purple-600 mb-1">4-6</div>
                <div className="text-sm text-gray-600">Preguntas</div>
              </div>
            </div>

            <div className="p-8 space-y-6">
              {/* Cómo funciona */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                    <Target className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg">Cómo funciona</h3>
                </div>
                <ul className="space-y-3">
                  {[
                    'Lee un texto completo a tu ritmo natural sin presión',
                    'El cronómetro medirá automáticamente tu tiempo de lectura',
                    'Responde preguntas de comprensión sobre el contenido',
                    'Recibe tu velocidad en PPM y nivel de comprensión'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Referencias de velocidad */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-gray-600" />
                  <h3 className="font-bold text-gray-900">Referencias de Velocidad</h3>
                </div>
                <div className="space-y-2">
                  {REFERENCIAS_VELOCIDAD.map((ref, index) => (
                    <div key={index} className={`border-2 rounded-lg p-4 ${COLORES_NIVEL[ref.color as keyof typeof COLORES_NIVEL]}`}>
                      <div className="flex justify-between items-center">
                        <div>
                          <div className="font-bold">{ref.nivel}</div>
                          <div className="text-sm opacity-90">{ref.descripcion}</div>
                        </div>
                        <div className="text-2xl font-bold">{ref.rango}</div>
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
                      <li>• Lee a tu velocidad natural, sin apresurarte ni ir más lento</li>
                      <li>• La comprensión es tan importante como la velocidad</li>
                      <li>• Busca un lugar tranquilo sin distracciones</li>
                      <li>• No podrás volver al texto después de continuar</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Botón inicio */}
              <button
                onClick={iniciarTest}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3"
              >
                <BookOpen className="w-6 h-6" />
                Comenzar Test de Lectura
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ============ PANTALLA DE LECTURA ============
  if (estado === 'leyendo' && texto) {
    const COLORES_DIFICULTAD = {
      facil: { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-200' },
      medio: { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-200' },
      dificil: { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-200' }
    };

    const colores = COLORES_DIFICULTAD[texto.dificultad];

    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Timer sticky */}
          <div className="sticky top-20 z-40 mb-6">
            <div className="bg-white rounded-xl shadow-lg border-2 border-purple-200 p-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-purple-600 animate-pulse" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Tiempo de lectura</div>
                    <div className="text-xl font-bold text-gray-900">{formatearTiempo(tiempoTranscurrido)}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Eye className="w-5 h-5" />
                  <span className="font-semibold">{texto.numeroPalabras} palabras</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contenido del texto */}
          <article className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 mb-6 border border-gray-100">
            <div className="mb-8">
              <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-4 border-2 ${colores.bg} ${colores.text} ${colores.border}`}>
                Dificultad: {texto.dificultad.charAt(0).toUpperCase() + texto.dificultad.slice(1)}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                {texto.titulo}
              </h1>
            </div>
            
            <div className="prose prose-lg max-w-none">
              {texto.contenido.split('\n\n').map((parrafo, index) => (
                <p key={index} className="text-gray-800 leading-relaxed mb-6 text-justify">
                  {parrafo.trim()}
                </p>
              ))}
            </div>
          </article>

          {/* Botón continuar */}
          <div className="text-center space-y-4">
            <button
              onClick={terminarLectura}
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-4 px-8 rounded-xl font-bold text-lg hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg hover:shadow-xl inline-flex items-center gap-3"
            >
              Terminé de Leer - Continuar a Preguntas
              <ChevronRight className="w-6 h-6" />
            </button>
            <div className="flex items-center justify-center gap-2 text-amber-700">
              <AlertCircle className="w-5 h-5" />
              <p className="text-sm font-medium">
                No podrás volver al texto después de continuar
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ============ PANTALLA DE PREGUNTAS ============
  if (estado === 'preguntas' && texto) {
    const pregunta = texto.preguntas[preguntaActual];
    const progreso = ((preguntaActual + 1) / texto.preguntas.length) * 100;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header con progreso */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 mb-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-purple-600" />
                <span className="text-sm text-gray-600">
                  Tiempo de lectura: <strong>{formatearTiempo(tiempoLectura)}</strong>
                </span>
              </div>
              <span className="text-sm font-semibold text-gray-900">
                Pregunta {preguntaActual + 1} de {texto.preguntas.length}
              </span>
            </div>
            <div className="relative w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-purple-500 to-purple-600 rounded-full transition-all duration-500 shadow-sm"
                style={{ width: `${progreso}%` }}
              />
            </div>
          </div>

          {/* Pregunta */}
          <div ref={preguntaRef}  className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 leading-relaxed">
              {pregunta.pregunta}
            </h2>

            <div className="space-y-3">
              {pregunta.opciones.map((opcion, indice) => {
                const estaSeleccionada = respuestas[preguntaActual]?.respuestaSeleccionada === indice;
                
                return (
                  <button
                    key={indice}
                    onClick={() => seleccionarRespuesta(indice)}
                    className={`
                      group w-full text-left p-5 rounded-xl border-2 
                      transition-all duration-200
                      ${estaSeleccionada
                        ? 'bg-purple-50 border-purple-500 shadow-md scale-[1.02]'
                        : 'bg-white border-gray-300 hover:bg-gray-50 hover:border-purple-400 hover:shadow-sm'
                      }
                    `}
                  >
                    <div className="flex items-center gap-4">
                      <span className={`
                        flex-shrink-0 w-10 h-10 rounded-lg
                        flex items-center justify-center font-bold text-sm
                        transition-all duration-200
                        ${estaSeleccionada
                          ? 'bg-purple-500 text-white shadow-sm'
                          : 'bg-gray-100 text-gray-600 group-hover:bg-purple-100 group-hover:text-purple-600'
                        }
                      `}>
                        {String.fromCharCode(65 + indice)}
                      </span>
                      <span className={`flex-1 font-medium ${estaSeleccionada ? 'text-purple-900' : 'text-gray-800'}`}>
                        {opcion}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Botón siguiente */}
          <div className="text-center">
            <button
              onClick={siguientePregunta}
              disabled={!respuestaSeleccionada}
              className={`
                py-4 px-8 rounded-xl font-bold text-lg transition-all shadow-lg
                inline-flex items-center gap-3
                ${respuestaSeleccionada
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 hover:shadow-xl'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }
              `}
            >
              {preguntaActual === texto.preguntas.length - 1 ? 'Ver Resultados' : 'Siguiente Pregunta'}
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ============ PANTALLA DE RESULTADOS ============
  if (estado === 'finalizado' && resultado) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-12">
        <ResultadosTest
          tipo="lectura"
          resultado={resultado}
          onReintentar={reintentar}
        />
      </div>
    );
  }

  return null;
}