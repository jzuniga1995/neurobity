import { Metadata } from 'next';
import { Brain, Heart, BookOpen, Zap, Target, Shield, CheckCircle, TrendingUp, Users, Award } from 'lucide-react';
import TarjetaTest from '@/componentes/TarjetaTest';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'NeuroBity - Tests Psicométricos de IQ, Edad Mental y Velocidad de Lectura',
  description: 'Descubre tu potencial con tests psicométricos validados: Test de IQ, Edad Mental y Velocidad de Lectura. Resultados inmediatos, gratuitos y 100% privados.',
  keywords: 'test de iq, test edad mental, velocidad de lectura, tests psicométricos, coeficiente intelectual, autoconocimiento',
  openGraph: {
    title: 'NeuroBity - Tu Gimnasio Cerebral',
    description: 'Tests psicométricos validados para medir tu IQ, edad mental y velocidad de lectura',
    type: 'website',
    locale: 'es_ES',
    siteName: 'NeuroBity',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NeuroBity - Tu Gimnasio Cerebral',
    description: 'Tests psicométricos validados y gratuitos',
  },
  alternates: {
    canonical: 'https://neurobity.com',
  },
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 to-purple-100/40 -z-10" />
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-bl from-indigo-200/30 to-transparent rounded-full blur-3xl -z-10" />
        
        <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm mb-6">
              <Zap className="w-4 h-4 text-yellow-500" />
              <span className="text-sm font-medium text-gray-700">Tests validados científicamente</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 mb-6 leading-tight">
              ¿Listo para conocerte{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                mejor?
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Descubre tu potencial con tests psicométricos validados. 
              Mide tu <strong>inteligencia</strong>, <strong>madurez emocional</strong> y <strong>habilidades cognitivas</strong>.
            </p>
          </div>

          {/* Grid de Tests */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
            <TarjetaTest
              titulo="Test de IQ"
              descripcion="Mide tu coeficiente intelectual con preguntas de lógica, matemáticas y razonamiento espacial."
              duracion="20 min"
              icono={Brain}
              href="/test-iq"
              color="azul"
              numeroPreguntas={30}
            />

            <TarjetaTest
              titulo="Test de Edad Mental"
              descripcion="Descubre tu nivel de madurez emocional y social comparado con tu edad cronológica."
              duracion="10 min"
              icono={Heart}
              href="/test-edad-mental"
              color="verde"
              numeroPreguntas={20}
            />

            <TarjetaTest
              titulo="Test de Velocidad de Lectura"
              descripcion="Evalúa tu rapidez de lectura y comprensión de textos con ejercicios prácticos."
              duracion="15 min"
              icono={BookOpen}
              href="/test-velocidad-lectura"
              color="morado"
              numeroPreguntas={6}
            />
          </div>

          {/* CTA Principal */}
          <div className="text-center mb-20">
            <p className="text-lg text-gray-600 mb-4">
              Más de <strong className="text-gray-900">10,000 personas</strong> han descubierto su potencial
            </p>
            <div className="flex items-center justify-center gap-2 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                  <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                </svg>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir NeuroBity?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              La forma más precisa y confiable de evaluar tus capacidades cognitivas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Autoconocimiento</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprende mejor tus fortalezas cognitivas y áreas de mejora con análisis detallados.
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">Resultados Instantáneos</h3>
              <p className="text-gray-600 leading-relaxed">
                Obtén tu puntaje y análisis personalizado inmediatamente al finalizar cada test.
              </p>
            </div>

            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">100% Privado</h3>
              <p className="text-gray-600 leading-relaxed">
                Tus datos y resultados son completamente privados, anónimos y seguros.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cómo Funciona */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Cómo funciona NeuroBity
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tres simples pasos para descubrir tu potencial cognitivo
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-6 shadow-lg">
                  1
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Elige tu test</h3>
                <p className="text-gray-600 leading-relaxed">
                  Selecciona entre Test de IQ, Edad Mental o Velocidad de Lectura según lo que quieras evaluar.
                </p>
              </div>
              <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-blue-500 to-green-500 -translate-x-1/2" />
            </div>

            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-6 shadow-lg">
                  2
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Completa las preguntas</h3>
                <p className="text-gray-600 leading-relaxed">
                  Responde con honestidad. No hay respuestas correctas o incorrectas en tests de personalidad.
                </p>
              </div>
              <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-green-500 to-purple-500 -translate-x-1/2" />
            </div>

            <div className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-3xl font-bold mb-6 shadow-lg">
                  3
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">Recibe tus resultados</h3>
                <p className="text-gray-600 leading-relaxed">
                  Obtén un análisis detallado de tu perfil cognitivo con recomendaciones personalizadas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            Datos Científicos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="text-5xl lg:text-6xl font-bold mb-3 text-white">100</div>
              <p className="text-blue-100 text-lg">IQ Promedio Mundial</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="text-5xl lg:text-6xl font-bold mb-3 text-white">200-250</div>
              <p className="text-blue-100 text-lg">Palabras por minuto (promedio)</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="text-5xl lg:text-6xl font-bold mb-3 text-white">15</div>
              <p className="text-blue-100 text-lg">Puntos de desviación estándar</p>
            </div>
          </div>
        </div>
      </section>

      {/* Qué miden los tests - SEO Content */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Qué miden nuestros tests psicométricos?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Cada test está diseñado para evaluar aspectos específicos de tu cognición con precisión científica
            </p>
          </div>

          <div className="space-y-12">
            {/* Test de IQ */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-8 lg:p-12 border border-blue-200">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Brain className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Test de Coeficiente Intelectual (IQ)</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    El test de IQ es una evaluación psicométrica diseñada para medir la inteligencia general de una persona. 
                    Nuestro test evalúa múltiples dimensiones cognitivas incluyendo razonamiento lógico, capacidad matemática, 
                    comprensión verbal y razonamiento espacial.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-gray-900">Razonamiento lógico:</strong>
                        <span className="text-gray-600"> Patrones, secuencias y deducciones</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-gray-900">Habilidad matemática:</strong>
                        <span className="text-gray-600"> Resolución de problemas numéricos</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-gray-900">Razonamiento espacial:</strong>
                        <span className="text-gray-600"> Visualización y rotación mental</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-gray-900">Comprensión verbal:</strong>
                        <span className="text-gray-600"> Vocabulario y analogías</span>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/test-iq"
                    className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    Comenzar Test de IQ
                    <TrendingUp className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Test de Edad Mental */}
            <div className="bg-gradient-to-br from-green-50 to-green-100/50 rounded-2xl p-8 lg:p-12 border border-green-200">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <Heart className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Test de Edad Mental</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    La edad mental refleja tu nivel de madurez psicológica, emocional y social en comparación con tu edad cronológica. 
                    Este test evalúa cómo procesas emociones, tomas decisiones y te relacionas con tu entorno, proporcionando 
                    información valiosa sobre tu desarrollo personal.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-gray-900">Madurez emocional:</strong>
                        <span className="text-gray-600"> Gestión de emociones y estrés</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-gray-900">Toma de decisiones:</strong>
                        <span className="text-gray-600"> Juicio y responsabilidad</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-gray-900">Habilidades sociales:</strong>
                        <span className="text-gray-600"> Empatía y comunicación</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-gray-900">Perspectiva vital:</strong>
                        <span className="text-gray-600"> Valores y prioridades</span>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/test-edad-mental"
                    className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    Comenzar Test de Edad Mental
                    <TrendingUp className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Test de Velocidad de Lectura */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-2xl p-8 lg:p-12 border border-purple-200">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                    <BookOpen className="w-8 h-8 text-white" strokeWidth={2.5} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Test de Velocidad de Lectura</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    La velocidad de lectura mide cuántas palabras puedes leer y comprender por minuto. Este test evalúa tanto 
                    tu rapidez lectora como tu nivel de comprensión, dos habilidades fundamentales para el aprendizaje y el 
                    desarrollo profesional en la era de la información.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-gray-900">Palabras por minuto:</strong>
                        <span className="text-gray-600"> Velocidad de procesamiento visual</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-gray-900">Comprensión lectora:</strong>
                        <span className="text-gray-600"> Retención de información clave</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-gray-900">Concentración:</strong>
                        <span className="text-gray-600"> Enfoque sostenido en el texto</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-gray-900">Eficiencia cognitiva:</strong>
                        <span className="text-gray-600"> Procesamiento de información</span>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/test-velocidad-lectura"
                    className="inline-flex items-center gap-2 bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                  >
                    Comenzar Test de Velocidad
                    <TrendingUp className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes - SEO */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg text-gray-600">
              Todo lo que necesitas saber sobre nuestros tests psicométricos
            </p>
          </div>

          <div className="space-y-6">
            <details className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                ¿Qué es un test psicométrico y para qué sirve?
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Un test psicométrico es una herramienta estandarizada que mide características psicológicas como inteligencia, 
                personalidad o habilidades cognitivas. Sirven para el autoconocimiento, orientación vocacional, desarrollo 
                personal y procesos de selección laboral. Nuestros tests están diseñados con fundamentos científicos para 
                proporcionar resultados confiables y útiles.
              </p>
            </details>

            <details className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                ¿Los tests son realmente gratuitos?
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Sí, todos nuestros tests psicométricos son completamente gratuitos. No requieren registro, no hay costos 
                ocultos y puedes realizarlos cuantas veces quieras. Nuestro objetivo es hacer accesible la evaluación 
                psicológica de calidad para todas las personas de habla hispana.
              </p>
            </details>

            <details className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                ¿Qué tan precisos son los resultados del test de IQ?
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Nuestro test de IQ utiliza preguntas basadas en pruebas psicométricas reconocidas y evalúa múltiples 
                dimensiones cognitivas. Si bien proporciona una estimación confiable de tu coeficiente intelectual, para 
                una evaluación clínica oficial te recomendamos consultar a un psicólogo certificado que pueda administrar 
                tests estandarizados como el WAIS o las Matrices de Raven.
              </p>
            </details>

            <details className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                ¿Puedo mejorar mi IQ o velocidad de lectura?
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                ¡Absolutamente! Aunque el IQ tiene un componente genético, puede mejorarse mediante estimulación cognitiva, 
                aprendizaje continuo y ejercicios mentales. La velocidad de lectura es especialmente entrenable: con práctica 
                regular y técnicas adecuadas, la mayoría de personas pueden duplicar su velocidad manteniendo buena comprensión. 
                La clave está en la práctica constante y el uso de estrategias efectivas.
              </p>
            </details>

            <details className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                ¿Mis datos están seguros y privados?
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Sí, tu privacidad es nuestra prioridad. No almacenamos información personal identificable, no requerimos 
                registro y tus resultados son completamente anónimos. Los tests se procesan localmente en tu navegador 
                siempre que sea posible, y no compartimos ningún dato con terceros.
              </p>
            </details>

            <details className="group bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <summary className="font-bold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between">
                ¿Con qué frecuencia puedo hacer los tests?
                <span className="text-blue-600 group-open:rotate-180 transition-transform">▼</span>
              </summary>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Puedes realizar los tests tantas veces como desees. Sin embargo, para obtener resultados más representativos, 
                te recomendamos esperar al menos 2-3 meses entre repeticiones del mismo test. Esto permite que se reduzca el 
                efecto de la práctica y obtengas una medición más precisa de tu desarrollo cognitivo real.
              </p>
            </details>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/preguntas"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
              Ver todas las preguntas frecuentes
              <TrendingUp className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Award className="w-16 h-16 text-white/80 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para descubrir tu potencial?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Únete a miles de personas que ya conocen mejor sus capacidades cognitivas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/test-iq"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-blue-50 transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center gap-2"
            >
              <Brain className="w-5 h-5" />
              Comenzar ahora gratis
            </Link>
            <Link
              href="/tests"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all inline-flex items-center justify-center gap-2"
            >
              Conocer más
              <TrendingUp className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Schema Markup mejorado */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "NeuroBity",
            "url": "https://neurobity.com",
            "description": "Plataforma de tests psicométricos para medir IQ, edad mental y velocidad de lectura",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://neurobity.com/buscar?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }}
      />
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Qué es un test psicométrico y para qué sirve?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Un test psicométrico es una herramienta estandarizada que mide características psicológicas como inteligencia, personalidad o habilidades cognitivas. Sirven para el autoconocimiento, orientación vocacional, desarrollo personal y procesos de selección laboral."
                }
              },
              {
                "@type": "Question",
                "name": "¿Los tests son realmente gratuitos?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, todos nuestros tests psicométricos son completamente gratuitos. No requieren registro, no hay costos ocultos y puedes realizarlos cuantas veces quieras."
                }
              },
              {
                "@type": "Question",
                "name": "¿Qué tan precisos son los resultados del test de IQ?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Nuestro test de IQ utiliza preguntas basadas en pruebas psicométricas reconocidas y evalúa múltiples dimensiones cognitivas. Proporciona una estimación confiable de tu coeficiente intelectual."
                }
              },
              {
                "@type": "Question",
                "name": "¿Puedo mejorar mi IQ o velocidad de lectura?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, el IQ puede mejorarse mediante estimulación cognitiva y aprendizaje continuo. La velocidad de lectura es especialmente entrenable con práctica regular y técnicas adecuadas."
                }
              },
              {
                "@type": "Question",
                "name": "¿Mis datos están seguros y privados?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí, no almacenamos información personal identificable, no requerimos registro y tus resultados son completamente anónimos."
                }
              },
              {
                "@type": "Question",
                "name": "¿Con qué frecuencia puedo hacer los tests?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Puedes realizar los tests tantas veces como desees. Recomendamos esperar 2-3 meses entre repeticiones para resultados más representativos."
                }
              }
            ]
          })
        }}
      />
    </div>
  );
}