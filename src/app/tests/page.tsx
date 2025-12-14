import { Metadata } from 'next';
import Link from 'next/link';
import { Brain, Target, BookOpen, Clock, CheckCircle, Lightbulb, TrendingUp, Award, Heart, Zap, Users, BarChart3 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sobre los Tests Psicométricos - Cómo Funcionan | NeuroBity',
  description: 'Descubre cómo funcionan los tests de IQ, edad mental y velocidad de lectura. Guía completa sobre evaluaciones psicométricas, sus beneficios y cómo interpretarlas.',
  keywords: 'cómo funcionan tests psicométricos, interpretación test iq, beneficios evaluaciones cognitivas, validez tests psicológicos',
  openGraph: {
    title: 'Cómo Funcionan los Tests Psicométricos | NeuroBity',
    description: 'Guía completa sobre tests de inteligencia, edad mental y velocidad de lectura',
    type: 'article',
  },
  alternates: {
    canonical: 'https://neurobity.com/tests',
  },
};

const TIPOS_TESTS = [
  {
    titulo: 'Test de IQ',
    icon: Brain,
    color: 'blue',
    descripcion: 'Evalúa tu coeficiente intelectual mediante problemas de lógica, matemáticas, razonamiento verbal y espacial.',
    caracteristicas: [
      'Razonamiento lógico-matemático',
      'Comprensión verbal y vocabulario',
      'Capacidad espacial y visual',
      'Memoria de trabajo y atención'
    ],
    duracion: '20 minutos',
    preguntas: 30,
    link: '/test-iq'
  },
  {
    titulo: 'Test de Edad Mental',
    icon: Heart,
    color: 'green',
    descripcion: 'Mide tu madurez psicológica, emocional y social en comparación con tu edad cronológica.',
    caracteristicas: [
      'Madurez emocional y autocontrol',
      'Toma de decisiones responsable',
      'Habilidades sociales y empatía',
      'Perspectiva vital y prioridades'
    ],
    duracion: '10 minutos',
    preguntas: 20,
    link: '/test-edad-mental'
  },
  {
    titulo: 'Test de Velocidad de Lectura',
    icon: BookOpen,
    color: 'purple',
    descripcion: 'Evalúa tu velocidad de lectura en palabras por minuto (PPM) y nivel de comprensión del contenido.',
    caracteristicas: [
      'Palabras por minuto (PPM)',
      'Comprensión lectora efectiva',
      'Retención de información clave',
      'Eficiencia de procesamiento visual'
    ],
    duracion: '15 minutos',
    preguntas: 6,
    link: '/test-velocidad-lectura'
  }
];

const BENEFICIOS = [
  {
    icon: TrendingUp,
    titulo: 'Autoconocimiento Profundo',
    descripcion: 'Descubre tus fortalezas cognitivas, estilo de aprendizaje y áreas con mayor potencial de desarrollo.',
    color: 'blue'
  },
  {
    icon: Target,
    titulo: 'Identificación de Áreas de Mejora',
    descripcion: 'Detecta habilidades que necesitan refuerzo y recibe recomendaciones específicas para desarrollarlas.',
    color: 'green'
  },
  {
    icon: BarChart3,
    titulo: 'Seguimiento de Progreso',
    descripcion: 'Monitorea tu evolución cognitiva a lo largo del tiempo con evaluaciones periódicas.',
    color: 'purple'
  },
  {
    icon: Lightbulb,
    titulo: 'Optimización del Aprendizaje',
    descripcion: 'Aprende estrategias personalizadas basadas en tu perfil cognitivo para estudiar más eficientemente.',
    color: 'orange'
  },
  {
    icon: Users,
    titulo: 'Orientación Vocacional',
    descripcion: 'Identifica carreras y profesiones que se alinean con tus habilidades cognitivas naturales.',
    color: 'indigo'
  },
  {
    icon: Award,
    titulo: 'Preparación para Evaluaciones',
    descripcion: 'Practica con tests similares a los usados en procesos de selección laboral y admisiones académicas.',
    color: 'pink'
  }
];

const COLORES = {
  blue: {
    gradient: 'from-blue-500 to-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    text: 'text-blue-600'
  },
  green: {
    gradient: 'from-green-500 to-green-600',
    bg: 'bg-green-50',
    border: 'border-green-200',
    text: 'text-green-600'
  },
  purple: {
    gradient: 'from-purple-500 to-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-200',
    text: 'text-purple-600'
  },
  orange: {
    gradient: 'from-orange-500 to-orange-600',
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    text: 'text-orange-600'
  },
  indigo: {
    gradient: 'from-indigo-500 to-indigo-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-200',
    text: 'text-indigo-600'
  },
  pink: {
    gradient: 'from-pink-500 to-pink-600',
    bg: 'bg-pink-50',
    border: 'border-pink-200',
    text: 'text-pink-600'
  }
};

export default function AboutTestsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 py-16 lg:py-20">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Zap className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Información Científica</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Todo Sobre los Tests Psicométricos
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed max-w-3xl">
            Descubre cómo funcionan nuestras evaluaciones cognitivas, qué miden exactamente 
            y cómo pueden ayudarte a conocerte mejor y desarrollar tu potencial.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* ¿Qué son los tests psicométricos? */}
        <section>
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                <Target className="w-6 h-6 text-white" strokeWidth={2.5} />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">¿Qué son los Tests Psicométricos?</h2>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Los <strong>tests psicométricos</strong> son herramientas científicas estandarizadas diseñadas para medir 
                características psicológicas específicas como inteligencia, personalidad, habilidades cognitivas o rasgos 
                emocionales. Psicométrico proviene del griego <em>psyche</em> (mente) y <em>metron</em> (medida), 
                literalmente medición de la mente.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Estos tests utilizan preguntas, tareas o ejercicios que han sido validados estadísticamente con miles de 
                personas para asegurar que proporcionen resultados objetivos, confiables y comparables. En NeuroBity 
                ofrecemos tres tipos principales de evaluaciones psicométricas:
              </p>

              <div className="grid md:grid-cols-3 gap-4 my-8">
                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-4 text-center">
                  <Brain className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-bold text-blue-900 mb-2">Test de IQ</h3>
                  <p className="text-sm text-blue-700">Inteligencia cognitiva</p>
                </div>
                <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 text-center">
                  <Heart className="w-10 h-10 text-green-600 mx-auto mb-3" />
                  <h3 className="font-bold text-green-900 mb-2">Edad Mental</h3>
                  <p className="text-sm text-green-700">Madurez psicológica</p>
                </div>
                <div className="bg-purple-50 border-2 border-purple-200 rounded-xl p-4 text-center">
                  <BookOpen className="w-10 h-10 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-bold text-purple-900 mb-2">Velocidad Lectura</h3>
                  <p className="text-sm text-purple-700">Procesamiento verbal</p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 rounded-lg p-6">
                <p className="text-gray-800 font-medium">
                  💡 <strong>Dato importante:</strong> Los tests psicométricos son herramientas de autoconocimiento 
                  y orientación. Para diagnósticos clínicos o decisiones importantes siempre debes consultar a un 
                  psicólogo certificado.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tipos de Tests Detallados */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Tests Psicométricos
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cada test está diseñado para evaluar aspectos específicos de tu cognición con precisión científica
            </p>
          </div>

          <div className="space-y-8">
            {TIPOS_TESTS.map((test, index) => {
              const IconComponent = test.icon;
              const colores = COLORES[test.color as keyof typeof COLORES];
              
              return (
                <div key={index} className={`bg-gradient-to-br ${colores.bg} rounded-2xl p-8 lg:p-12 border-2 ${colores.border} shadow-lg`}>
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-shrink-0">
                      <div className={`w-20 h-20 bg-gradient-to-br ${colores.gradient} rounded-2xl flex items-center justify-center shadow-xl`}>
                        <IconComponent className="w-10 h-10 text-white" strokeWidth={2.5} />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{test.titulo}</h3>
                      <p className="text-gray-700 text-lg mb-6 leading-relaxed">{test.descripcion}</p>
                      
                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3">¿Qué evalúa?</h4>
                          <ul className="space-y-2">
                            {test.caracteristicas.map((item, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <CheckCircle className={`w-5 h-5 ${colores.text} flex-shrink-0 mt-0.5`} />
                                <span className="text-gray-700">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-gray-900 mb-3">Detalles del Test</h4>
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <Clock className={`w-5 h-5 ${colores.text}`} />
                              <span className="text-gray-700"><strong>Duración:</strong> {test.duracion}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <BarChart3 className={`w-5 h-5 ${colores.text}`} />
                              <span className="text-gray-700"><strong>Preguntas:</strong> {test.preguntas}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Zap className={`w-5 h-5 ${colores.text}`} />
                              <span className="text-gray-700"><strong>Dificultad:</strong> Adaptativa</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <Link
                        href={test.link}
                        className={`inline-flex items-center gap-2 bg-gradient-to-br ${colores.gradient} text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-all shadow-md hover:shadow-lg`}
                      >
                        Comenzar {test.titulo}
                        <TrendingUp className="w-5 h-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Cómo funcionan */}
        <section className="bg-white rounded-2xl shadow-lg p-8 lg:p-12 border border-gray-100">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <CheckCircle className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">¿Cómo Funcionan los Tests?</h2>
          </div>
          
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            Todos nuestros tests siguen un proceso científico estandarizado de 4 pasos diseñado para 
            garantizar resultados precisos y útiles:
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                numero: 1,
                titulo: 'Selecciona tu Test',
                descripcion: 'Elige la evaluación según lo que quieras medir: inteligencia general (IQ), madurez emocional (edad mental) o eficiencia lectora (velocidad).'
              },
              {
                numero: 2,
                titulo: 'Responde las Preguntas',
                descripcion: 'Completa una serie de preguntas o ejercicios diseñados científicamente. Tómate tu tiempo y responde con honestidad para resultados precisos.'
              },
              {
                numero: 3,
                titulo: 'Análisis Automático',
                descripcion: 'Nuestro algoritmo evalúa tus respuestas comparándolas con bases de datos normativas de miles de personas para calcular tu puntuación.'
              },
              {
                numero: 4,
                titulo: 'Resultados Detallados',
                descripcion: 'Recibe un informe completo con tu puntuación, categoría, percentil, fortalezas, áreas de mejora y recomendaciones personalizadas.'
              }
            ].map((paso) => (
              <div key={paso.numero} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white text-xl font-bold shadow-lg">
                  {paso.numero}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{paso.titulo}</h3>
                  <p className="text-gray-600 leading-relaxed">{paso.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Beneficios */}
        <section>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
              <Award className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-800">Ventajas</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Beneficios de Realizar Tests Psicométricos
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Las evaluaciones psicométricas ofrecen múltiples ventajas para tu desarrollo personal y profesional
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BENEFICIOS.map((beneficio, index) => {
              const IconComponent = beneficio.icon;
              const colores = COLORES[beneficio.color as keyof typeof COLORES];
              
              return (
                <div key={index} className={`bg-white rounded-xl p-6 border-2 ${colores.border} hover:shadow-lg transition-all`}>
                  <div className={`w-12 h-12 bg-gradient-to-br ${colores.gradient} rounded-xl flex items-center justify-center mb-4 shadow-md`}>
                    <IconComponent className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{beneficio.titulo}</h3>
                  <p className="text-gray-600 leading-relaxed">{beneficio.descripcion}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Interpretación de Resultados */}
        <section className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl p-8 lg:p-12 border-2 border-purple-200">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <BarChart3 className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Interpretación de Resultados</h2>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="font-bold text-gray-900 text-xl mb-3">¿Qué significan tus puntuaciones?</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Los resultados de tests psicométricos se interpretan comparando tu desempeño con el de la población general. 
                Esto se expresa típicamente en:
              </p>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white rounded-xl p-4 border border-purple-200">
                  <h4 className="font-bold text-purple-900 mb-2">Puntuación Bruta</h4>
                  <p className="text-sm text-gray-700">Número total de respuestas correctas o puntos obtenidos</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-purple-200">
                  <h4 className="font-bold text-purple-900 mb-2">Puntuación Estándar</h4>
                  <p className="text-sm text-gray-700">Tu resultado normalizado (ej: IQ con media de 100)</p>
                </div>
                <div className="bg-white rounded-xl p-4 border border-purple-200">
                  <h4 className="font-bold text-purple-900 mb-2">Percentil</h4>
                  <p className="text-sm text-gray-700">Porcentaje de personas que puntuaron por debajo de ti</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-purple-200">
              <h4 className="font-bold text-gray-900 mb-3">Ejemplo de Interpretación</h4>
              <p className="text-gray-700 leading-relaxed">
                Si obtienes un <strong>IQ de 115</strong> (percentil 84), esto significa que tu inteligencia está 
                <strong> por encima del promedio</strong> y que puntuaste mejor que el <strong>84% de la población</strong>. 
                No significa que seas mejor que otras personas, sino que en estas habilidades cognitivas específicas 
                tienes un desempeño superior al típico.
              </p>
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 rounded-xl p-8">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
              <Lightbulb className="w-6 h-6 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <h3 className="font-bold text-gray-900 text-2xl mb-4">
                Consejos para Obtener Mejores Resultados
              </h3>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Realiza los tests en un lugar tranquilo, sin ruidos ni distracciones visuales',
                  'Descansa adecuadamente la noche anterior (7-8 horas de sueño)',
                  'Evita hacer tests cuando estés cansado, estresado o bajo presión emocional',
                  'Tómate el tiempo necesario para leer y comprender cada pregunta completamente',
                  'Responde con honestidad y no intentes "engañar" al test',
                  'No te desanimes si alguna pregunta es difícil - es normal y esperado',
                  'Practica regularmente para familiarizarte con el formato y tipo de preguntas',
                  'Usa los resultados como guía de mejora, no como definición de tu valor'
                ].map((tip, index) => (
                  <div key={index} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{tip}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-center shadow-xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            ¿Listo para Conocer tu Potencial?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Comienza ahora con cualquiera de nuestros tests gratuitos y descubre tus habilidades cognitivas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/test-iq"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg inline-flex items-center justify-center gap-2"
            >
              <Brain className="w-5 h-5" />
              Test de IQ
            </Link>
            <Link
              href="/test-edad-mental"
              className="bg-white text-green-600 px-8 py-4 rounded-xl font-bold hover:bg-green-50 transition-all shadow-lg inline-flex items-center justify-center gap-2"
            >
              <Heart className="w-5 h-5" />
              Edad Mental
            </Link>
            <Link
              href="/test-velocidad-lectura"
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold hover:bg-purple-50 transition-all shadow-lg inline-flex items-center justify-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              Velocidad Lectura
            </Link>
          </div>
        </section>
      </div>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Guía Completa sobre Tests Psicométricos",
            "description": "Todo lo que necesitas saber sobre tests de IQ, edad mental y velocidad de lectura",
            "author": {
              "@type": "Organization",
              "name": "NeuroBity"
            },
            "publisher": {
              "@type": "Organization",
              "name": "NeuroBity",
              "logo": {
                "@type": "ImageObject",
                "url": "https://neurobity.com/logo.png"
              }
            },
            "datePublished": "2025-01-01",
            "dateModified": new Date().toISOString()
          })
        }}
      />
    </div>
  );
}