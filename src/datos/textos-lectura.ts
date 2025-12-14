import { TextoLectura } from '@/tipos';

export const textosLectura: TextoLectura[] = [
  // ===== TEXTOS FÁCILES =====
  {
    id: 1,
    titulo: "El café: una bebida universal",
    contenido: `El café es una de las bebidas más populares del mundo. Millones de personas comienzan su día con una taza de café caliente. Esta bebida se prepara a partir de los granos tostados del cafeto, una planta originaria de Etiopía.

Existen dos tipos principales de café: arábica y robusta. El café arábica es más suave y aromático, mientras que el robusta tiene un sabor más fuerte y contiene más cafeína. La cafeína es el componente que nos ayuda a mantenernos despiertos y alertas.

El proceso de preparación del café ha evolucionado mucho a lo largo de los años. Desde el método tradicional de filtrado hasta las modernas máquinas de espresso, cada técnica ofrece un sabor único. Muchas personas disfrutan visitar cafeterías para probar diferentes preparaciones.

Los estudios científicos han demostrado que el café, consumido con moderación, puede tener beneficios para la salud. Puede mejorar la concentración, aumentar el metabolismo y contiene antioxidantes. Sin embargo, un consumo excesivo puede causar nerviosismo e insomnio.`,
    numeroPalabras: 156,
    dificultad: "facil",
    preguntas: [
      {
        id: 1,
        pregunta: "¿De dónde es originario el café?",
        opciones: ["Brasil", "Colombia", "Etiopía", "Italia"],
        respuestaCorrecta: 2
      },
      {
        id: 2,
        pregunta: "¿Cuáles son los dos tipos principales de café mencionados?",
        opciones: [
          "Espresso y cappuccino",
          "Arábica y robusta",
          "Negro y con leche",
          "Caliente y frío"
        ],
        respuestaCorrecta: 1
      },
      {
        id: 3,
        pregunta: "¿Qué componente del café nos ayuda a mantenernos despiertos?",
        opciones: ["Azúcar", "Agua", "Cafeína", "Leche"],
        respuestaCorrecta: 2
      },
      {
        id: 4,
        pregunta: "Según el texto, ¿qué puede causar el consumo excesivo de café?",
        opciones: [
          "Sueño profundo",
          "Nerviosismo e insomnio",
          "Mejor concentración",
          "Aumento de energía"
        ],
        respuestaCorrecta: 1
      }
    ]
  },

  {
    id: 2,
    titulo: "Los beneficios de caminar",
    contenido: `Caminar es uno de los ejercicios más simples y accesibles que existen. No requiere equipo especial, se puede hacer en casi cualquier lugar y ofrece numerosos beneficios para la salud física y mental.

Desde el punto de vista físico, caminar regularmente ayuda a fortalecer el corazón, mejorar la circulación sanguínea y mantener un peso saludable. Solo 30 minutos de caminata diaria pueden reducir significativamente el riesgo de enfermedades cardiovasculares. Además, fortalece los huesos y músculos, especialmente en las piernas y la zona lumbar.

Los beneficios mentales son igualmente importantes. Caminar al aire libre reduce el estrés, mejora el estado de ánimo y puede ayudar a combatir la depresión y la ansiedad. Muchas personas encuentran que caminar les ayuda a pensar con mayor claridad y a resolver problemas de manera más creativa.

La clave está en la constancia. No es necesario caminar largas distancias o a gran velocidad para obtener beneficios. Lo importante es hacerlo regularmente, preferiblemente todos los días. Comenzar con caminatas cortas e ir aumentando gradualmente la duración es una estrategia efectiva para crear un hábito duradero.`,
    numeroPalabras: 187,
    dificultad: "facil",
    preguntas: [
      {
        id: 1,
        pregunta: "¿Cuántos minutos de caminata diaria recomienda el texto?",
        opciones: ["15 minutos", "30 minutos", "45 minutos", "1 hora"],
        respuestaCorrecta: 1
      },
      {
        id: 2,
        pregunta: "¿Qué beneficio mental menciona el texto sobre caminar?",
        opciones: [
          "Mejora la memoria fotográfica",
          "Aumenta la velocidad de lectura",
          "Reduce el estrés y mejora el estado de ánimo",
          "Desarrolla habilidades matemáticas"
        ],
        respuestaCorrecta: 2
      },
      {
        id: 3,
        pregunta: "Según el texto, ¿qué es más importante al caminar?",
        opciones: [
          "La velocidad",
          "La distancia",
          "La constancia",
          "El lugar"
        ],
        respuestaCorrecta: 2
      },
      {
        id: 4,
        pregunta: "¿Qué partes del cuerpo fortalece especialmente caminar?",
        opciones: [
          "Brazos y hombros",
          "Piernas y zona lumbar",
          "Cuello y espalda alta",
          "Manos y muñecas"
        ],
        respuestaCorrecta: 1
      }
    ]
  },

  {
    id: 3,
    titulo: "El ciclo del agua",
    contenido: `El ciclo del agua, también conocido como ciclo hidrológico, es el proceso continuo de circulación del agua en la Tierra. Este ciclo es fundamental para la vida en nuestro planeta y ha estado ocurriendo durante millones de años.

El proceso comienza con la evaporación. El sol calienta el agua de océanos, ríos y lagos, convirtiéndola en vapor de agua que sube a la atmósfera. Las plantas también contribuyen mediante la transpiración, liberando agua a través de sus hojas.

Una vez en la atmósfera, el vapor de agua se enfría y se condensa formando nubes. Cuando las gotas de agua en las nubes se vuelven demasiado pesadas, caen en forma de precipitación: lluvia, nieve o granizo. Esta agua puede seguir varios caminos: infiltrarse en el suelo, fluir hacia ríos y océanos, o ser absorbida por las plantas.

El agua subterránea puede permanecer bajo tierra durante años, alimentando pozos y manantiales. El agua superficial fluye hacia los océanos, donde el ciclo comienza nuevamente. Este proceso interminable asegura que tengamos agua dulce disponible y mantiene equilibrados los ecosistemas terrestres.`,
    numeroPalabras: 178,
    dificultad: "facil",
    preguntas: [
      {
        id: 1,
        pregunta: "¿Qué otro nombre recibe el ciclo del agua?",
        opciones: [
          "Ciclo atmosférico",
          "Ciclo hidrológico",
          "Ciclo natural",
          "Ciclo terrestre"
        ],
        respuestaCorrecta: 1
      },
      {
        id: 2,
        pregunta: "¿Qué causa la evaporación del agua?",
        opciones: [
          "El viento",
          "La lluvia",
          "El sol que calienta el agua",
          "Las plantas"
        ],
        respuestaCorrecta: 2
      },
      {
        id: 3,
        pregunta: "¿Qué sucede cuando el vapor de agua se enfría en la atmósfera?",
        opciones: [
          "Se evapora más rápido",
          "Se condensa y forma nubes",
          "Cae inmediatamente",
          "Desaparece"
        ],
        respuestaCorrecta: 1
      },
      {
        id: 4,
        pregunta: "¿Qué formas de precipitación menciona el texto?",
        opciones: [
          "Solo lluvia",
          "Lluvia y nieve",
          "Lluvia, nieve y granizo",
          "Rocío y escarcha"
        ],
        respuestaCorrecta: 2
      }
    ]
  },

  // ===== TEXTOS MEDIOS =====
  {
    id: 4,
    titulo: "La inteligencia artificial y el futuro del trabajo",
    contenido: `La inteligencia artificial (IA) está transformando rápidamente el panorama laboral global. Esta tecnología, que permite a las máquinas aprender y tomar decisiones, está automatizando tareas que antes solo podían realizar los humanos. Desde asistentes virtuales hasta sistemas de diagnóstico médico, la IA está presente en múltiples industrias.

Muchos expertos debaten sobre el impacto de la IA en el empleo. Algunos argumentan que la automatización eliminará millones de puestos de trabajo, especialmente en sectores como manufactura, transporte y atención al cliente. Otros sostienen que la IA creará nuevas oportunidades laborales que aún no podemos imaginar, tal como sucedió con revoluciones tecnológicas anteriores.

Lo que parece claro es que las habilidades demandadas en el mercado laboral están cambiando. La creatividad, el pensamiento crítico y la inteligencia emocional se vuelven cada vez más valiosas, ya que son capacidades difíciles de replicar por las máquinas. La educación continua y la adaptabilidad serán cruciales para prosperar en esta nueva era.

Las empresas también enfrentan el desafío de implementar la IA de manera ética y responsable. Cuestiones como la privacidad de datos, los sesgos algorítmicos y la transparencia en la toma de decisiones automatizadas son temas de creciente preocupación. Es fundamental establecer regulaciones que equilibren la innovación con la protección de los derechos humanos.

En última instancia, el futuro del trabajo dependerá de cómo la sociedad decida integrar la inteligencia artificial. La colaboración entre humanos y máquinas, más que la competencia, podría ser la clave para maximizar los beneficios de esta tecnología mientras se minimizan sus riesgos.`,
    numeroPalabras: 267,
    dificultad: "medio",
    preguntas: [
      {
        id: 1,
        pregunta: "Según el texto, ¿qué habilidades se vuelven más valiosas con la IA?",
        opciones: [
          "Programación y matemáticas",
          "Creatividad y pensamiento crítico",
          "Manufactura y transporte",
          "Automatización y robótica"
        ],
        respuestaCorrecta: 1
      },
      {
        id: 2,
        pregunta: "¿Cuál es el principal debate entre expertos sobre la IA?",
        opciones: [
          "Si la IA es más inteligente que los humanos",
          "El costo de implementar IA",
          "Si eliminará empleos o creará nuevas oportunidades",
          "Qué industria debería usar IA primero"
        ],
        respuestaCorrecta: 2
      },
      {
        id: 3,
        pregunta: "¿Qué desafío enfrentan las empresas al implementar IA?",
        opciones: [
          "El alto costo de la tecnología",
          "La falta de profesionales capacitados",
          "Implementarla de manera ética y responsable",
          "La resistencia de los empleados"
        ],
        respuestaCorrecta: 2
      },
      {
        id: 4,
        pregunta: "¿Qué sugiere el texto como clave para el futuro del trabajo?",
        opciones: [
          "Reemplazar completamente a los humanos",
          "Prohibir el uso de IA",
          "La colaboración entre humanos y máquinas",
          "Volver a métodos tradicionales"
        ],
        respuestaCorrecta: 2
      },
      {
        id: 5,
        pregunta: "¿Qué menciona el texto sobre las revoluciones tecnológicas anteriores?",
        opciones: [
          "Fueron más importantes que la IA",
          "También crearon nuevas oportunidades laborales",
          "Causaron menos problemas que la IA",
          "No tuvieron impacto en el empleo"
        ],
        respuestaCorrecta: 1
      }
    ]
  },

  {
    id: 5,
    titulo: "El fenómeno del cambio climático",
    contenido: `El cambio climático representa uno de los desafíos más urgentes que enfrenta la humanidad en el siglo XXI. A diferencia de las variaciones climáticas naturales que han ocurrido a lo largo de la historia de la Tierra, el calentamiento actual se caracteriza por su velocidad sin precedentes y su clara vinculación con las actividades humanas.

La principal causa del cambio climático es la emisión de gases de efecto invernadero, especialmente dióxido de carbono y metano. Estos gases se acumulan en la atmósfera y atrapan el calor del sol, generando un efecto similar al de un invernadero. La quema de combustibles fósiles para generar energía, el transporte y la industria son los principales responsables de estas emisiones.

Las consecuencias del cambio climático ya son visibles en todo el mundo. El aumento de la temperatura global ha provocado el derretimiento acelerado de los glaciares y las capas de hielo polar, elevando el nivel del mar. Los fenómenos meteorológicos extremos, como huracanes, sequías e inundaciones, son cada vez más frecuentes e intensos. Estos cambios amenazan la biodiversidad, la seguridad alimentaria y los medios de subsistencia de millones de personas.

La comunidad científica internacional ha llegado a un consenso: la acción es urgente. Los acuerdos internacionales como el Acuerdo de París buscan limitar el aumento de la temperatura global a menos de 2 grados Celsius respecto a los niveles preindustriales. Para lograrlo, se requiere una transición rápida hacia energías renovables, mejoras en la eficiencia energética y cambios en nuestros patrones de consumo.

A nivel individual, también podemos contribuir. Reducir nuestro consumo de energía, optar por el transporte sostenible, disminuir el desperdicio de alimentos y apoyar políticas ambientales son acciones que, multiplicadas por millones de personas, pueden generar un impacto significativo. El cambio climático es un problema global que requiere soluciones colectivas y compromiso de todos los sectores de la sociedad.`,
    numeroPalabras: 315,
    dificultad: "medio",
    preguntas: [
      {
        id: 1,
        pregunta: "¿Qué distingue al cambio climático actual de las variaciones climáticas naturales?",
        opciones: [
          "Su duración",
          "Su velocidad sin precedentes y vinculación con actividades humanas",
          "Que solo afecta a ciertos países",
          "Que es reversible"
        ],
        respuestaCorrecta: 1
      },
      {
        id: 2,
        pregunta: "¿Cuáles son los principales gases de efecto invernadero mencionados?",
        opciones: [
          "Oxígeno y nitrógeno",
          "Dióxido de carbono y metano",
          "Hidrógeno y helio",
          "Ozono y argón"
        ],
        respuestaCorrecta: 1
      },
      {
        id: 3,
        pregunta: "¿Qué busca limitar el Acuerdo de París?",
        opciones: [
          "Las emisiones de metano exclusivamente",
          "El uso de combustibles fósiles",
          "El aumento de temperatura a menos de 2°C",
          "La producción industrial"
        ],
        respuestaCorrecta: 2
      },
      {
        id: 4,
        pregunta: "¿Qué consecuencias del cambio climático menciona el texto?",
        opciones: [
          "Solo el derretimiento de glaciares",
          "Únicamente el aumento del nivel del mar",
          "Fenómenos extremos, derretimiento de hielo y amenazas a la biodiversidad",
          "Cambios en las estaciones del año"
        ],
        respuestaCorrecta: 2
      },
      {
        id: 5,
        pregunta: "¿Qué tipo de soluciones requiere el cambio climático según el texto?",
        opciones: [
          "Solo soluciones tecnológicas",
          "Únicamente cambios gubernamentales",
          "Soluciones colectivas y compromiso de todos los sectores",
          "Esperar a que la naturaleza se recupere"
        ],
        respuestaCorrecta: 2
      }
    ]
  },

  {
    id: 6,
    titulo: "La revolución de la medicina personalizada",
    contenido: `La medicina personalizada, también conocida como medicina de precisión, está transformando la forma en que diagnosticamos y tratamos las enfermedades. A diferencia del enfoque tradicional que aplica el mismo tratamiento a todos los pacientes con una condición similar, la medicina personalizada adapta las intervenciones según las características genéticas, ambientales y de estilo de vida de cada individuo.

El avance de la secuenciación del genoma humano ha sido fundamental para esta revolución. Hoy es posible analizar el ADN de un paciente de manera relativamente rápida y económica, identificando variaciones genéticas que pueden influir en su riesgo de desarrollar ciertas enfermedades o en su respuesta a medicamentos específicos. Esta información permite a los médicos tomar decisiones más informadas sobre prevención, diagnóstico y tratamiento.

En el campo de la oncología, la medicina personalizada ha mostrado resultados particularmente prometedores. Los tumores de diferentes pacientes, aunque parezcan similares, pueden tener perfiles moleculares distintos. Identificar estas diferencias permite seleccionar terapias dirigidas que atacan específicamente las mutaciones presentes en cada tumor, mejorando la efectividad del tratamiento y reduciendo efectos secundarios.

Sin embargo, la implementación de la medicina personalizada enfrenta varios desafíos. El costo de las tecnologías de secuenciación y los tratamientos especializados puede ser elevado, planteando cuestiones de equidad en el acceso a la atención médica. Además, la interpretación de datos genómicos complejos requiere profesionales altamente capacitados. También surgen preocupaciones éticas sobre la privacidad de la información genética y el potencial uso discriminatorio de estos datos.

A pesar de estos desafíos, el futuro de la medicina personalizada es prometedor. Se espera que la integración de inteligencia artificial y big data acelere el análisis de información clínica y genómica, identificando patrones que podrían pasar desapercibidos para los humanos. La medicina personalizada no solo tiene el potencial de mejorar los resultados de salud individuales, sino también de optimizar el uso de recursos del sistema de salud al enfocarse en intervenciones que realmente funcionan para cada paciente.`,
    numeroPalabras: 345,
    dificultad: "medio",
    preguntas: [
      {
        id: 1,
        pregunta: "¿Qué otro nombre recibe la medicina personalizada?",
        opciones: [
          "Medicina genética",
          "Medicina de precisión",
          "Medicina molecular",
          "Medicina avanzada"
        ],
        respuestaCorrecta: 1
      },
      {
        id: 2,
        pregunta: "¿Qué ha sido fundamental para la revolución de la medicina personalizada?",
        opciones: [
          "El desarrollo de nuevos hospitales",
          "La secuenciación del genoma humano",
          "El aumento de médicos",
          "La creación de nuevos medicamentos"
        ],
        respuestaCorrecta: 1
      },
      {
        id: 3,
        pregunta: "¿En qué campo ha mostrado resultados especialmente prometedores?",
        opciones: [
          "Traumatología",
          "Pediatría",
          "Oncología",
          "Oftalmología"
        ],
        respuestaCorrecta: 2
      },
      {
        id: 4,
        pregunta: "¿Qué desafío menciona el texto sobre la medicina personalizada?",
        opciones: [
          "La falta de interés de los pacientes",
          "El costo elevado y cuestiones de equidad en el acceso",
          "La resistencia de los médicos tradicionales",
          "La falta de enfermedades para tratar"
        ],
        respuestaCorrecta: 1
      },
      {
        id: 5,
        pregunta: "¿Qué tecnologías se espera que aceleren el análisis de información genómica?",
        opciones: [
          "Microscopios más potentes",
          "Robots quirúrgicos",
          "Inteligencia artificial y big data",
          "Nuevos medicamentos"
        ],
        respuestaCorrecta: 2
      }
    ]
  },

  // ===== TEXTOS DIFÍCILES =====
  {
    id: 7,
    titulo: "Neuroplasticidad: la capacidad del cerebro para reinventarse",
    contenido: `Durante décadas, la comunidad científica sostuvo que el cerebro humano adulto era una estructura estática e inmutable. Se creía que, una vez concluido el desarrollo durante la juventud, las conexiones neuronales permanecían inalterables. Sin embargo, investigaciones recientes han revolucionado esta concepción, demostrando que el cerebro posee una extraordinaria capacidad de reorganización conocida como neuroplasticidad.

La neuroplasticidad se refiere a la habilidad del sistema nervioso para modificar su estructura y función en respuesta a la experiencia, el aprendizaje y el daño cerebral. Este fenómeno ocurre a múltiples niveles: desde cambios en las conexiones sinápticas individuales hasta la reorganización completa de regiones cerebrales. Los mecanismos subyacentes incluyen la potenciación a largo plazo, la neurogénesis adulta y la plasticidad sináptica.

Las implicaciones de este descubrimiento son profundas. En el ámbito clínico, la neuroplasticidad ofrece esperanza para pacientes con lesiones cerebrales o enfermedades neurodegenerativas. La terapia de rehabilitación puede aprovechar esta capacidad para restaurar funciones perdidas mediante el entrenamiento repetitivo y dirigido. Casos documentados demuestran cómo individuos que sufrieron accidentes cerebrovasculares han recuperado habilidades motoras y cognitivas previamente consideradas irrecuperables.

En el contexto educativo, comprender la neuroplasticidad transforma nuestra aproximación al aprendizaje. El cerebro no solo puede adquirir nuevos conocimientos a cualquier edad, sino que las experiencias de aprendizaje activamente remodelan su arquitectura. La práctica deliberada, la exposición a entornos enriquecidos y el desafío cognitivo constante promueven el desarrollo de nuevas conexiones neuronales y fortalecen las existentes.

No obstante, la neuroplasticidad no es exclusivamente beneficiosa. Los circuitos neuronales también pueden reorganizarse de maneras contraproducentes, como ocurre en el dolor crónico o las adicciones. En estos casos, patrones de actividad repetitivos refuerzan conexiones inadaptativas. Comprender los mecanismos de la plasticidad maladaptativa es crucial para desarrollar intervenciones terapéuticas efectivas.

La investigación contemporánea explora factores que modulan la neuroplasticidad. El ejercicio físico, la meditación, el sueño adecuado y la nutrición emergen como variables significativas que influyen en la capacidad plástica del cerebro. La epigenética revela cómo las experiencias ambientales pueden modificar la expresión génica sin alterar la secuencia de ADN, proporcionando un mecanismo molecular para la plasticidad a largo plazo.

En conclusión, la neuroplasticidad representa un cambio paradigmático en nuestra comprensión del cerebro humano. Lejos de ser una máquina rígida, el cerebro es un órgano dinámico que se adapta continuamente. Este conocimiento no solo transforma la neurociencia y la medicina, sino que también redefine nuestra concepción sobre el potencial humano y las posibilidades de cambio a lo largo de toda la vida.`,
    numeroPalabras: 445,
    dificultad: "dificil",
    preguntas: [
      {
        id: 1,
        pregunta: "¿Qué creía la comunidad científica sobre el cerebro adulto anteriormente?",
        opciones: [
          "Que podía regenerarse completamente",
          "Que era una estructura estática e inmutable",
          "Que solo cambiaba durante el sueño",
          "Que dependía únicamente de la genética"
        ],
        respuestaCorrecta: 1
      },
      {
        id: 2,
        pregunta: "¿A qué se refiere el término 'neuroplasticidad'?",
        opciones: [
          "La capacidad de crear nuevas neuronas",
          "La rigidez del cerebro adulto",
          "La habilidad del cerebro para modificar su estructura y función",
          "El proceso de envejecimiento cerebral"
        ],
        respuestaCorrecta: 2
      },
      {
        id: 3,
        pregunta: "Según el texto, ¿qué factores modulan la neuroplasticidad?",
        opciones: [
          "Solo la genética",
          "Únicamente la edad",
          "Ejercicio físico, meditación, sueño y nutrición",
          "La medicación exclusivamente"
        ],
        respuestaCorrecta: 2
      },
      {
        id: 4,
        pregunta: "¿Qué ejemplos de neuroplasticidad 'maladaptativa' menciona el texto?",
        opciones: [
          "El aprendizaje de idiomas",
          "El dolor crónico y las adicciones",
          "La mejora en habilidades motoras",
          "El desarrollo cognitivo"
        ],
        respuestaCorrecta: 1
      },
      {
        id: 5,
        pregunta: "¿Qué implica el descubrimiento de la neuroplasticidad para la educación?",
        opciones: [
          "Que solo los niños pueden aprender efectivamente",
          "Que el cerebro puede aprender a cualquier edad",
          "Que la educación no afecta al cerebro",
          "Que solo importa la inteligencia innata"
        ],
        respuestaCorrecta: 1
      },
      {
        id: 6,
        pregunta: "¿Qué es la epigenética según el texto?",
        opciones: [
          "El estudio de las neuronas",
          "La modificación de la expresión génica sin alterar el ADN",
          "Una técnica de rehabilitación",
          "Un tipo de enfermedad cerebral"
        ],
        respuestaCorrecta: 1
      }
    ]
  },

  {
    id: 8,
    titulo: "La teoría cuántica y sus implicaciones filosóficas",
    contenido: `La mecánica cuántica, desarrollada a principios del siglo XX, no solo revolucionó la física sino que también planteó profundas cuestiones filosóficas sobre la naturaleza de la realidad. Esta teoría describe el comportamiento de la materia y la energía a escalas atómicas y subatómicas, revelando fenómenos que desafían nuestra intuición cotidiana y nuestras nociones clásicas de causalidad y determinismo.

Uno de los aspectos más desconcertantes de la mecánica cuántica es el principio de superposición. Según este principio, las partículas cuánticas pueden existir simultáneamente en múltiples estados hasta que son observadas o medidas. El famoso experimento mental del gato de Schrödinger ilustra esta paradoja: un gato encerrado en una caja con un dispositivo cuántico estaría simultáneamente vivo y muerto hasta que se abre la caja y se realiza una observación.

Esta característica conduce al problema de la medición en mecánica cuántica. El acto de medir un sistema cuántico parece colapsar las múltiples posibilidades en un único resultado definido. Pero ¿qué constituye exactamente una "medición"? ¿Requiere la presencia de un observador consciente? Estas preguntas han dado lugar a diversas interpretaciones de la mecánica cuántica, cada una con implicaciones filosóficas distintas.

La interpretación de Copenhague, propuesta por Niels Bohr y Werner Heisenberg, sostiene que las propiedades cuánticas no tienen existencia independiente de la medición. Según esta visión, no tiene sentido hablar del estado de una partícula antes de ser observada. Esta postura desafía el realismo científico tradicional, que asume que el mundo existe independientemente de nuestras observaciones.

En contraste, la interpretación de los muchos mundos, propuesta por Hugh Everett, sugiere que todas las posibilidades cuánticas se realizan en universos paralelos. Cuando se realiza una medición, el universo se ramifica en múltiples realidades, cada una correspondiente a un resultado posible. Esta interpretación preserva el determinismo pero a costa de postular una infinidad de universos inobservables.

El entrelazamiento cuántico añade otra capa de misterio. Cuando dos partículas se entrelazan, sus estados quedan correlacionados de manera que una medición en una partícula instantáneamente afecta el estado de la otra, sin importar la distancia que las separe. Einstein famosamente llamó a esto "acción fantasmal a distancia" y lo consideró una evidencia de que la mecánica cuántica estaba incompleta. Sin embargo, experimentos posteriores han confirmado la realidad del entrelazamiento, desafiando nuestras nociones de localidad y causalidad.

Las implicaciones filosóficas de la mecánica cuántica se extienden más allá de la física. Cuestionan conceptos fundamentales como la objetividad, la causalidad y la naturaleza de la realidad misma. Algunos filósofos argumentan que la mecánica cuántica apoya una visión más holística del universo, donde las partes están intrínsecamente conectadas. Otros sostienen que simplemente revela los límites de nuestro conocimiento y nuestras capacidades de medición, sin necesariamente implicar algo fundamental sobre la naturaleza de la realidad.

En última instancia, la mecánica cuántica nos recuerda que el universo es más extraño y más complejo de lo que nuestras intuiciones cotidianas sugieren. Continúa siendo un campo fértil para la investigación científica y la reflexión filosófica, desafiándonos a reconsiderar nuestras suposiciones más básicas sobre la naturaleza del mundo físico.`,
    numeroPalabras: 545,
    dificultad: "dificil",
    preguntas: [
      {
        id: 1,
        pregunta: "¿Qué describe el principio de superposición?",
        opciones: [
          "Que las partículas tienen masa definida",
          "Que las partículas pueden existir en múltiples estados simultáneamente",
          "Que las partículas son siempre predecibles",
          "Que las partículas no tienen propiedades físicas"
        ],
        respuestaCorrecta: 1
      },
      {
        id: 2,
        pregunta: "¿Qué ilustra el experimento mental del gato de Schrödinger?",
        opciones: [
          "La teoría de la evolución",
          "El comportamiento de los gatos",
          "La paradoja de la superposición cuántica",
          "Las leyes de la termodinámica"
        ],
        respuestaCorrecta: 2
      },
      {
        id: 3,
        pregunta: "Según la interpretación de Copenhague, ¿cuándo tienen existencia las propiedades cuánticas?",
        opciones: [
          "Siempre han existido",
          "Solo cuando son medidas u observadas",
          "Únicamente en el pasado",
          "Cuando las partículas están en movimiento"
        ],
        respuestaCorrecta: 1
      },
      {
        id: 4,
        pregunta: "¿Qué propone la interpretación de los muchos mundos?",
        opciones: [
          "Que solo existe un universo",
          "Que las mediciones son imposibles",
          "Que todas las posibilidades cuánticas se realizan en universos paralelos",
          "Que la física cuántica es incorrecta"
        ],
        respuestaCorrecta: 2
      },
      {
        id: 5,
        pregunta: "¿Qué es el entrelazamiento cuántico?",
        opciones: [
          "Una forma de energía",
          "Un tipo de partícula",
          "Una correlación instantánea entre partículas a cualquier distancia",
          "Un método de medición"
        ],
        respuestaCorrecta: 2
      },
      {
        id: 6,
        pregunta: "¿Cómo llamó Einstein al entrelazamiento cuántico?",
        opciones: [
          "Magia cuántica",
          "Acción fantasmal a distancia",
          "Conexión universal",
          "Fenómeno imposible"
        ],
        respuestaCorrecta: 1
      }
    ]
  },

  {
    id: 9,
    titulo: "El origen y evolución del lenguaje humano",
    contenido: `El lenguaje representa una de las capacidades más distintivas y complejas de nuestra especie. Mientras que muchos animales poseen sistemas de comunicación sofisticados, ninguno se aproxima a la riqueza, flexibilidad y complejidad del lenguaje humano. Comprender cómo y por qué evolucionó esta capacidad extraordinaria constituye uno de los grandes desafíos de las ciencias cognitivas y evolutivas.

El debate sobre el origen del lenguaje ha generado numerosas teorías, cada una enfatizando diferentes aspectos de la evolución humana. Algunos investigadores argumentan que el lenguaje surgió como una adaptación específica seleccionada por la evolución debido a sus ventajas para la cooperación social y la transmisión de conocimiento. Esta perspectiva, defendida por lingüistas como Noam Chomsky, sugiere la existencia de una "gramática universal" codificada genéticamente en el cerebro humano.

Una hipótesis alternativa propone que el lenguaje emergió como un subproducto o exaptación de otras capacidades cognitivas que evolucionaron por razones independientes. Según esta visión, habilidades como la planificación motora compleja, la memoria de trabajo expandida y la cognición social avanzada proporcionaron los fundamentos neurales sobre los cuales el lenguaje posteriormente se construyó. Esta perspectiva enfatiza la continuidad evolutiva entre humanos y otros primates.

La cuestión del momento en que apareció el lenguaje también genera controversia. Algunos proponen que capacidades lingüísticas básicas podrían haber estado presentes en especies ancestrales como el Homo erectus hace más de un millón de años. Otros argumentan que el lenguaje moderno, con su sintaxis compleja y capacidad simbólica, surgió mucho más recientemente, quizás hace solo 50,000 a 100,000 años, coincidiendo con la emergencia del comportamiento cultural complejo en el Homo sapiens.

La evidencia anatómica proporciona algunas pistas intrigantes. El tracto vocal humano, con su laringe baja, permite producir una gama mucho más amplia de sonidos que la de otros primates. El canal hipogloso, que aloja el nervio que controla la lengua, es significativamente más grande en humanos que en chimpancés, sugiriendo mayor control motor para el habla. El gen FOXP2, asociado con habilidades lingüísticas y del habla, muestra modificaciones específicas en la línea humana.

Sin embargo, la anatomía vocal y la genética cuentan solo parte de la historia. El lenguaje requiere también capacidades cognitivas complejas que trascienden la mera producción de sonidos. La capacidad de usar símbolos arbitrarios para representar objetos y conceptos, combinarlos mediante reglas gramaticales para generar un número infinito de expresiones, y comprender intenciones comunicativas son características distintivas del lenguaje humano que plantean sus propios misterios evolutivos.

La teoría de la coevolución gen-cultura ofrece un marco integrador. Según esta perspectiva, la evolución biológica y cultural se influyeron mutuamente en un proceso de retroalimentación positiva. Las presiones culturales favorecieron individuos con mejor capacidad lingüística, mientras que las innovaciones lingüísticas facilitaron desarrollos culturales más complejos, creando un ciclo que aceleró la evolución tanto del lenguaje como de la cognición humana.

El estudio de lenguas de señas y de niños que aprenden lenguaje proporciona información valiosa sobre la naturaleza innata del lenguaje. Los niños expuestos a input lingüístico limitado o degradado a menudo crean sistemas gramaticales más complejos espontáneamente, sugiriendo predisposiciones cognitivas específicas para el lenguaje. Las lenguas de señas naturales exhiben complejidad gramatical comparable a las lenguas habladas, demostrando que el lenguaje trasciende la modalidad auditivo-vocal.

Comprender el origen del lenguaje requiere integrar evidencia de múltiples disciplinas: lingüística, psicología, neurociencia, antropología, genética y paleontología. Aunque muchas preguntas permanecen sin respuesta, el progreso en estas áreas continúa iluminando cómo nuestra especie adquirió esta capacidad extraordinaria que ha sido fundamental para el desarrollo de la civilización humana.`,
    numeroPalabras: 595,
    dificultad: "dificil",
    preguntas: [
      {
        id: 1,
        pregunta: "¿Qué propone la teoría de la gramática universal de Chomsky?",
        opciones: [
          "Que todos los idiomas son idénticos",
          "Que existe una estructura lingüística codificada genéticamente",
          "Que el lenguaje se aprende completamente del ambiente",
          "Que los animales pueden hablar como humanos"
        ],
        respuestaCorrecta: 1
      },
      {
        id: 2,
        pregunta: "¿Qué sugiere la hipótesis de exaptación sobre el lenguaje?",
        opciones: [
          "Que el lenguaje fue diseñado artificialmente",
          "Que emergió como subproducto de otras capacidades cognitivas",
          "Que apareció súbitamente sin evolución previa",
          "Que solo los humanos modernos tienen lenguaje"
        ],
        respuestaCorrecta: 1
      },
      {
        id: 3,
        pregunta: "¿Qué característica anatómica humana permite mayor rango de sonidos?",
        opciones: [
          "El cerebro grande",
          "Las manos opuestas",
          "La laringe baja",
          "Los ojos frontales"
        ],
        respuestaCorrecta: 2
      },
      {
        id: 4,
        pregunta: "¿Qué es el gen FOXP2?",
        opciones: [
          "Un gen que determina el color de ojos",
          "Un gen asociado con habilidades lingüísticas",
          "Un gen que controla la altura",
          "Un gen relacionado con la memoria visual"
        ],
        respuestaCorrecta: 1
      },
      {
        id: 5,
        pregunta: "¿Qué demuestra el estudio de lenguas de señas naturales?",
        opciones: [
          "Que son menos complejas que las habladas",
          "Que solo funcionan con personas sordas",
          "Que tienen complejidad gramatical comparable a lenguas habladas",
          "Que no son verdaderos lenguajes"
        ],
        respuestaCorrecta: 2
      },
      {
        id: 6,
        pregunta: "¿Qué propone la teoría de coevolución gen-cultura?",
        opciones: [
          "Que la cultura no afecta la evolución biológica",
          "Que evolución biológica y cultural se influyeron mutuamente",
          "Que solo la genética importa para el lenguaje",
          "Que la cultura apareció antes que los genes"
        ],
        respuestaCorrecta: 1
      }
    ]
  }
];

// Configuración del test
export const configuracionTestLectura = {
  mostrarInstrucciones: true,
  permitirReleer: false,
  tiempoMinimoLectura: 30, // segundos
  palabrasPorMinutoPromedio: 225
};

// Función para obtener un texto aleatorio
export function obtenerTextoAleatorio(): TextoLectura {
  const indice = Math.floor(Math.random() * textosLectura.length);
  return textosLectura[indice];
}

// Función para obtener texto por dificultad
export function obtenerTextoPorDificultad(dificultad: 'facil' | 'medio' | 'dificil'): TextoLectura {
  const textosFiltrados = textosLectura.filter(t => t.dificultad === dificultad);
  if (textosFiltrados.length === 0) {
    return obtenerTextoAleatorio();
  }
  const indice = Math.floor(Math.random() * textosFiltrados.length);
  return textosFiltrados[indice];
}

// Función para obtener múltiples textos variados
export function obtenerTextosVariados(cantidad: number = 3): TextoLectura[] {
  const textosSeleccionados: TextoLectura[] = [];
  const textosPorDificultad = {
    facil: textosLectura.filter(t => t.dificultad === 'facil'),
    medio: textosLectura.filter(t => t.dificultad === 'medio'),
    dificil: textosLectura.filter(t => t.dificultad === 'dificil')
  };

  // Intentar obtener al menos uno de cada dificultad
  if (cantidad >= 3) {
    ['facil', 'medio', 'dificil'].forEach((dif) => {
      const textos = textosPorDificultad[dif as keyof typeof textosPorDificultad];
      if (textos.length > 0) {
        const indice = Math.floor(Math.random() * textos.length);
        textosSeleccionados.push(textos[indice]);
      }
    });
  }

  // Completar con textos aleatorios si es necesario
  while (textosSeleccionados.length < cantidad && textosSeleccionados.length < textosLectura.length) {
    const textoAleatorio = obtenerTextoAleatorio();
    if (!textosSeleccionados.find(t => t.id === textoAleatorio.id)) {
      textosSeleccionados.push(textoAleatorio);
    }
  }

  return textosSeleccionados.slice(0, cantidad);
}

// Calcular tiempo estimado de lectura
export function calcularTiempoEstimado(numeroPalabras: number): number {
  return Math.ceil((numeroPalabras / configuracionTestLectura.palabrasPorMinutoPromedio) * 60);
}

// Obtener estadísticas de la colección de textos
export function obtenerEstadisticasTextos() {
  return {
    total: textosLectura.length,
    porDificultad: {
      facil: textosLectura.filter(t => t.dificultad === 'facil').length,
      medio: textosLectura.filter(t => t.dificultad === 'medio').length,
      dificil: textosLectura.filter(t => t.dificultad === 'dificil').length
    },
    promedioPreguntas: Math.round(
      textosLectura.reduce((acc, t) => acc + t.preguntas.length, 0) / textosLectura.length
    ),
    promedioPalabras: Math.round(
      textosLectura.reduce((acc, t) => acc + t.numeroPalabras, 0) / textosLectura.length
    )
  };
}