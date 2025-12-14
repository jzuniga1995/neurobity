import { Metadata } from 'next';
import Link from 'next/link';
import { Brain, Heart, BookOpen, HelpCircle, ChevronRight, Lightbulb, Shield, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes - Tests Psicométricos | NeuroBity',
  description: 'Respuestas a las preguntas más comunes sobre tests de IQ, edad mental y velocidad de lectura. Información científica y confiable sobre evaluaciones psicométricas.',
  keywords: 'preguntas test iq, faq tests psicométricos, cómo mejorar iq, qué es edad mental, velocidad lectura promedio',
  openGraph: {
    title: 'Preguntas Frecuentes sobre Tests Psicométricos',
    description: 'Todo lo que necesitas saber sobre tests de IQ, edad mental y velocidad de lectura',
    type: 'website',
  },
  alternates: {
    canonical: 'https://neurobity.com/preguntas',
  },
};

const CATEGORIAS_FAQ = [
  {
    id: 'general',
    titulo: 'Preguntas Generales',
    icon: HelpCircle,
    color: 'blue',
    preguntas: [
      {
        pregunta: '¿Qué es un test psicométrico?',
        respuesta: 'Un test psicométrico es una herramienta científica estandarizada diseñada para medir características psicológicas específicas como inteligencia, personalidad, habilidades cognitivas o rasgos emocionales. Estos tests utilizan preguntas, tareas o ejercicios validados estadísticamente para proporcionar resultados objetivos y comparables. En NeuroBity ofrecemos tests de IQ, edad mental y velocidad de lectura, todos basados en principios psicométricos reconocidos.'
      },
      {
        pregunta: '¿Los tests son realmente gratuitos?',
        respuesta: 'Sí, todos nuestros tests son 100% gratuitos y siempre lo serán. No hay costos ocultos, suscripciones ni pagos para ver resultados completos. No es necesario registrarse o proporcionar información personal. Nuestro objetivo es democratizar el acceso a evaluaciones psicológicas de calidad para toda la comunidad de habla hispana.'
      },
      {
        pregunta: '¿Necesito registrarme para hacer los tests?',
        respuesta: 'No, no es necesario crear una cuenta ni proporcionar ningún dato personal. Puedes realizar cualquier test de forma completamente anónima. Simplemente selecciona el test que deseas hacer, completa las preguntas y recibe tus resultados inmediatamente. Si quieres guardar tus resultados, te recomendamos tomar una captura de pantalla o copiar el enlace para compartir.'
      },
      {
        pregunta: '¿Cuánto tiempo tardan los tests?',
        respuesta: 'Cada test tiene una duración diferente: el Test de IQ toma aproximadamente 20 minutos con 30 preguntas, el Test de Edad Mental dura unos 10 minutos con 20 preguntas, y el Test de Velocidad de Lectura requiere alrededor de 15 minutos con ejercicios de lectura y comprensión. Puedes pausar y continuar cuando quieras, aunque para mejores resultados recomendamos completarlos en una sola sesión.'
      },
      {
        pregunta: '¿Con qué frecuencia puedo repetir los tests?',
        respuesta: 'Puedes realizar los tests tantas veces como desees sin restricciones. Sin embargo, para obtener resultados más precisos y representativos de tu verdadero nivel cognitivo, te recomendamos esperar al menos 2-3 meses entre repeticiones del mismo test. Este tiempo permite que se reduzca el "efecto de práctica" y puedas medir tu desarrollo real en lugar de simplemente recordar las respuestas.'
      }
    ]
  },
  {
    id: 'iq',
    titulo: 'Test de IQ',
    icon: Brain,
    color: 'blue',
    preguntas: [
      {
        pregunta: '¿Qué es el coeficiente intelectual (IQ)?',
        respuesta: 'El coeficiente intelectual o IQ (Intelligence Quotient) es una medida estandarizada de la inteligencia general de una persona. Se calcula comparando tu desempeño en un test con el promedio de la población, que se establece en 100 puntos. El IQ evalúa diferentes capacidades cognitivas como razonamiento lógico, habilidad matemática, comprensión verbal y razonamiento espacial. Un IQ entre 90-110 se considera promedio, mientras que puntuaciones superiores a 130 indican inteligencia superior.'
      },
      {
        pregunta: '¿Qué tan preciso es el test de IQ de NeuroBity?',
        respuesta: 'Nuestro test de IQ utiliza preguntas basadas en pruebas psicométricas reconocidas y evalúa múltiples dimensiones cognitivas (lógica, matemáticas, verbal y espacial). Proporciona una estimación confiable de tu coeficiente intelectual con un margen de error de ±5 puntos. Sin embargo, para una evaluación clínica oficial o diagnóstico formal, te recomendamos consultar a un psicólogo certificado que pueda administrar tests estandarizados como el WAIS-IV (Wechsler Adult Intelligence Scale) o las Matrices Progresivas de Raven.'
      },
      {
        pregunta: '¿Se puede mejorar el IQ?',
        respuesta: 'Sí, aunque el IQ tiene un componente genético (aproximadamente 50-80%), definitivamente puede mejorarse mediante estimulación cognitiva. Estudios demuestran que el aprendizaje continuo, ejercicios mentales regulares, lectura diversa, aprendizaje de nuevos idiomas, práctica de instrumentos musicales y mantener un estilo de vida saludable (ejercicio, sueño adecuado, nutrición) pueden incrementar tu IQ entre 5-15 puntos. La clave está en la práctica constante y desafiarte con actividades que salgan de tu zona de confort.'
      },
      {
        pregunta: '¿Qué factores afectan los resultados del test de IQ?',
        respuesta: 'Varios factores pueden influir en tu desempeño: estado emocional (ansiedad o estrés reducen el rendimiento), nivel de cansancio, concentración y ambiente de la prueba (distracciones), familiaridad con el tipo de preguntas, nivel educativo, tiempo de sueño previo, y hasta la hora del día (muchas personas rinden mejor por la mañana). Para obtener resultados óptimos, realiza el test cuando estés descansado, en un lugar tranquilo, sin presión de tiempo y con actitud positiva.'
      },
      {
        pregunta: '¿Qué significa mi puntuación de IQ?',
        respuesta: 'La escala de IQ se interpreta así: Menos de 70 (discapacidad intelectual), 70-84 (bajo promedio), 85-114 (promedio - 68% de la población), 115-129 (sobre el promedio), 130-144 (superdotado - 2.1% superior), 145-159 (genio - 0.1% superior), 160+ (genio excepcional - extremadamente raro). Es importante recordar que el IQ es solo una medida de ciertas habilidades cognitivas y no define tu valor como persona ni garantiza el éxito en la vida.'
      }
    ]
  },
  {
    id: 'edad-mental',
    titulo: 'Test de Edad Mental',
    icon: Heart,
    color: 'green',
    preguntas: [
      {
        pregunta: '¿Qué es la edad mental?',
        respuesta: 'La edad mental es una medida de tu madurez psicológica, emocional y social en comparación con tu edad cronológica (años vividos). Refleja cómo procesas emociones, tomas decisiones, manejas responsabilidades y te relacionas con otros. Una edad mental mayor que tu edad cronológica sugiere mayor madurez, mientras que una edad mental menor puede indicar una perspectiva más juvenil o despreocupada. Es importante entender que no hay una edad mental "correcta" - cada etapa tiene sus ventajas.'
      },
      {
        pregunta: '¿Es malo tener una edad mental diferente a mi edad real?',
        respuesta: 'No, no es malo en absoluto. Tener una edad mental diferente a tu edad cronológica es completamente normal y común. Una edad mental mayor puede indicar madurez, responsabilidad y experiencia emocional desarrollada temprano. Una edad mental menor puede reflejar optimismo, espontaneidad y capacidad de disfrutar el momento presente. Lo importante es que te sientas cómodo contigo mismo y puedas funcionar bien en tus relaciones y responsabilidades. La diversidad en edades mentales enriquece la sociedad.'
      },
      {
        pregunta: '¿La edad mental puede cambiar con el tiempo?',
        respuesta: 'Absolutamente. La edad mental no es estática y puede evolucionar significativamente a lo largo de tu vida. Las experiencias importantes (relaciones, pérdidas, logros, desafíos), cambios de vida (matrimonio, paternidad, nuevos trabajos), desarrollo personal consciente, terapia o coaching, y hasta cambios en tu entorno pueden hacer que tu edad mental aumente o disminuya. Algunas personas "maduran tarde" y otras pueden "rejuvenecer" mentalmente al cambiar su perspectiva de vida.'
      },
      {
        pregunta: '¿Qué evalúa el test de edad mental?',
        respuesta: 'Nuestro test evalúa múltiples dimensiones de madurez: gestión emocional (cómo manejas estrés, frustración y conflictos), toma de decisiones (impulsividad vs planificación), responsabilidad y autonomía, perspectiva ante la vida y prioridades, habilidades sociales y empatía, flexibilidad mental y adaptabilidad. Las preguntas están diseñadas para revelar patrones de comportamiento y actitudes que típicamente se asocian con diferentes etapas de desarrollo psicológico.'
      }
    ]
  },
  {
    id: 'velocidad-lectura',
    titulo: 'Velocidad de Lectura',
    icon: BookOpen,
    color: 'purple',
    preguntas: [
      {
        pregunta: '¿Cuál es la velocidad de lectura promedio?',
        respuesta: 'La velocidad de lectura promedio en adultos hispanohablantes es de 200-250 palabras por minuto (PPM) con buena comprensión. Los lectores lentos leen 150-200 PPM, los rápidos 300-400 PPM, y lectores expertos o con entrenamiento pueden alcanzar 500-700 PPM. Lectores profesionales con técnicas avanzadas pueden superar las 1000 PPM. Es importante notar que la velocidad varía según el tipo de texto: textos técnicos o complejos se leen más lento que narrativa o contenido familiar.'
      },
      {
        pregunta: '¿Cómo puedo mejorar mi velocidad de lectura?',
        respuesta: 'Para aumentar tu velocidad: 1) Elimina la subvocalización (pronunciar mentalmente cada palabra), 2) Amplía tu campo visual para captar más palabras por fijación, 3) Reduce regresiones (volver atrás a releer), 4) Practica con un marcador o dedo para guiar tu vista, 5) Lee 30 minutos diarios de material variado, 6) Usa apps o herramientas de lectura rápida, 7) Mejora tu vocabulario para reducir pausas en palabras desconocidas. Con práctica constante, puedes duplicar tu velocidad en 2-3 meses.'
      },
      {
        pregunta: '¿Una mayor velocidad significa menor comprensión?',
        respuesta: 'No necesariamente. Es un mito común que velocidad y comprensión son inversamente proporcionales. Con entrenamiento adecuado, puedes aumentar ambas simultáneamente. El secreto está en desarrollar técnicas eficientes (como lectura por bloques de palabras) en lugar de solo forzarte a leer más rápido. De hecho, lectores muy lentos a veces tienen peor comprensión porque pierden el hilo del texto. El objetivo ideal es encontrar tu "velocidad óptima" donde maximizas tanto rapidez como entendimiento.'
      },
      {
        pregunta: '¿Qué factores afectan la velocidad de lectura?',
        respuesta: 'Múltiples factores influyen: vocabulario (palabras desconocidas te frenan), familiaridad con el tema, complejidad del texto, fatiga visual o mental, distracciones ambientales, iluminación y calidad tipográfica, dispositivo de lectura (papel vs pantalla), motivación e interés en el contenido, y técnica de lectura (movimientos oculares, subvocalización). Optimizar estos factores puede mejorar significativamente tu rendimiento sin necesidad de entrenamiento formal.'
      },
      {
        pregunta: '¿Los niños y adultos leen a la misma velocidad?',
        respuesta: 'No, la velocidad de lectura se desarrolla con la edad y práctica. Niños de primaria leen 80-150 PPM, adolescentes 200-250 PPM, y adultos 250-300 PPM en promedio. Esta progresión refleja desarrollo neurológico, automatización de la decodificación fonética, ampliación del vocabulario y acumulación de conocimiento previo. La velocidad máxima suele alcanzarse entre los 20-30 años. Sin embargo, con entrenamiento específico, adultos de cualquier edad pueden mejorar significativamente.'
      }
    ]
  },
  {
    id: 'privacidad-seguridad',
    titulo: 'Privacidad y Seguridad',
    icon: Shield,
    color: 'indigo',
    preguntas: [
      {
        pregunta: '¿Mis datos están seguros?',
        respuesta: 'Sí, tu privacidad es nuestra máxima prioridad. No almacenamos información personal identificable, no requerimos registro con email o datos personales, tus resultados se procesan localmente en tu navegador siempre que sea posible, no compartimos ningún dato con terceros, no usamos cookies de seguimiento invasivas, y no vendemos información a empresas de publicidad. Puedes realizar todos los tests de forma completamente anónima sin ningún riesgo para tu privacidad.'
      },
      {
        pregunta: '¿Quién puede ver mis resultados?',
        respuesta: 'Solo tú puedes ver tus resultados. No compartimos resultados con nadie, no tenemos cuentas de usuario donde se almacenen datos, no enviamos resultados por email (a menos que tú decidas hacerlo), y no hay rankings públicos ni bases de datos de usuarios. Cuando finalizas un test, los resultados se muestran en tu pantalla y tú decides si quieres guardarlos (captura de pantalla) o compartirlos voluntariamente.'
      },
      {
        pregunta: '¿Qué información recopilan?',
        respuesta: 'Recopilamos únicamente datos anónimos y agregados para mejorar nuestros tests: estadísticas generales de uso (cantidad de tests realizados, tiempo promedio), datos técnicos básicos (tipo de navegador, dispositivo) para optimizar la experiencia, y respuestas anónimas para validación estadística de preguntas. NO recopilamos: nombres, emails, direcciones IP identificables, ubicación geográfica precisa, ni ningún dato que pueda identificarte personalmente.'
      },
      {
        pregunta: '¿Puedo confiar en la validez científica de los tests?',
        respuesta: 'Nuestros tests están basados en principios psicométricos establecidos y preguntas inspiradas en evaluaciones reconocidas. Sin embargo, es importante aclarar que: son herramientas de autoconocimiento y orientación, no sustituyen evaluaciones clínicas profesionales, no deben usarse para diagnósticos médicos o psicológicos, y para decisiones importantes (contratación, diagnóstico, tratamiento) debes consultar a profesionales certificados. Los tests son valiosos para exploración personal, pero no reemplazan la evaluación de un psicólogo.'
      }
    ]
  },
  {
    id: 'uso-resultados',
    titulo: 'Uso de Resultados',
    icon: TrendingUp,
    color: 'orange',
    preguntas: [
      {
        pregunta: '¿Puedo usar estos resultados para aplicaciones laborales?',
        respuesta: 'Nuestros tests son principalmente para autoconocimiento personal. Para procesos de selección laboral, las empresas generalmente requieren evaluaciones administradas por psicólogos certificados o plataformas especializadas en psicometría laboral. Sin embargo, conocer tus resultados en nuestros tests puede ayudarte a prepararte mejor para evaluaciones formales, entender tus fortalezas y áreas de mejora, y presentarte con mayor confianza en entrevistas.'
      },
      {
        pregunta: '¿Los resultados son válidos para admisiones académicas?',
        respuesta: 'No. Las instituciones educativas que requieren tests psicométricos solicitan específicamente exámenes estandarizados reconocidos (como SAT, GRE, EXANI) administrados en condiciones controladas. Nuestros tests son herramientas de autoconocimiento que pueden ayudarte a: identificar áreas de estudio que necesitas reforzar, practicar tipos de preguntas similares, y prepararte mentalmente para las evaluaciones oficiales. Úsalos como entrenamiento, no como sustituto.'
      },
      {
        pregunta: '¿Puedo compartir mis resultados en redes sociales?',
        respuesta: 'Sí, puedes compartir tus resultados libremente. Cada test incluye botones para compartir en Facebook, X (Twitter), WhatsApp y otras plataformas, o copiar el enlace. Ten en cuenta que al compartir públicamente, cualquiera podrá ver tu puntuación. Si prefieres privacidad, puedes tomar una captura de pantalla y compartirla solo con personas de confianza, o simplemente guardar los resultados para ti sin publicarlos.'
      },
      {
        pregunta: '¿Qué hago si no estoy satisfecho con mis resultados?',
        respuesta: 'Primero, recuerda que los tests miden habilidades específicas en un momento particular, no definen tu valor. Si quieres mejorar: identifica áreas específicas de debilidad según el análisis detallado, busca recursos de aprendizaje (libros, cursos, apps) enfocados en esas áreas, practica regularmente con ejercicios similares, considera tomar el test nuevamente en 2-3 meses para medir progreso, y si sientes que necesitas apoyo profesional, consulta a un psicólogo o coach cognitivo.'
      }
    ]
  }
];

const COLORES_CATEGORIA = {
  blue: {
    bg: 'from-blue-500 to-blue-600',
    text: 'text-blue-600',
    light: 'bg-blue-50',
    border: 'border-blue-200'
  },
  green: {
    bg: 'from-green-500 to-green-600',
    text: 'text-green-600',
    light: 'bg-green-50',
    border: 'border-green-200'
  },
  purple: {
    bg: 'from-purple-500 to-purple-600',
    text: 'text-purple-600',
    light: 'bg-purple-50',
    border: 'border-purple-200'
  },
  indigo: {
    bg: 'from-indigo-500 to-indigo-600',
    text: 'text-indigo-600',
    light: 'bg-indigo-50',
    border: 'border-indigo-200'
  },
  orange: {
    bg: 'from-orange-500 to-orange-600',
    text: 'text-orange-600',
    light: 'bg-orange-50',
    border: 'border-orange-200'
  }
};

export default function PreguntasFrecuentesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 py-16 lg:py-24">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Lightbulb className="w-4 h-4 text-white" />
            <span className="text-sm font-medium text-white">Centro de Ayuda</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Preguntas Frecuentes
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Todo lo que necesitas saber sobre tests psicométricos, IQ, edad mental y velocidad de lectura
          </p>
        </div>
      </section>

      {/* Navegación rápida */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100">
          <h2 className="text-lg font-bold text-gray-900 mb-4">Categorías</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {CATEGORIAS_FAQ.map((categoria) => {
              const IconComponent = categoria.icon;
              const colores = COLORES_CATEGORIA[categoria.color as keyof typeof COLORES_CATEGORIA];
              
              return (
                <a
                  key={categoria.id}
                  href={`#${categoria.id}`}
                  className={`${colores.light} ${colores.border} border-2 rounded-xl p-4 text-center hover:shadow-md transition-all group`}
                >
                  <div className={`inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br ${colores.bg} rounded-lg mb-2 group-hover:scale-110 transition-transform`}>
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <div className={`text-sm font-semibold ${colores.text}`}>
                    {categoria.titulo}
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs por categoría */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {CATEGORIAS_FAQ.map((categoria) => {
            const IconComponent = categoria.icon;
            const colores = COLORES_CATEGORIA[categoria.color as keyof typeof COLORES_CATEGORIA];
            
            return (
              <div key={categoria.id} id={categoria.id} className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-8">
                  <div className={`w-12 h-12 bg-gradient-to-br ${colores.bg} rounded-xl flex items-center justify-center shadow-lg`}>
                    <IconComponent className="w-6 h-6 text-white" strokeWidth={2.5} />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{categoria.titulo}</h2>
                </div>

                <div className="space-y-4">
                  {categoria.preguntas.map((item, index) => (
                    <details
                      key={index}
                      className={`group bg-white rounded-xl p-6 shadow-sm border-2 ${colores.border} hover:shadow-md transition-all`}
                    >
                      <summary className={`font-bold text-lg text-gray-900 cursor-pointer list-none flex items-center justify-between ${colores.text}`}>
                        <span className="flex-1 pr-4">{item.pregunta}</span>
                        <ChevronRight className="w-5 h-5 flex-shrink-0 group-open:rotate-90 transition-transform" />
                      </summary>
                      <p className="mt-4 text-gray-700 leading-relaxed">
                        {item.respuesta}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            ¿Listo para comenzar?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Descubre tu potencial con nuestros tests psicométricos gratuitos
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
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": CATEGORIAS_FAQ.flatMap(categoria =>
              categoria.preguntas.map(pregunta => ({
                "@type": "Question",
                "name": pregunta.pregunta,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": pregunta.respuesta
                }
              }))
            )
          })
        }}
      />
    </div>
  );
}