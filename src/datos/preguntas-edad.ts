import { PreguntaEdadMental } from '@/tipos';

export const preguntasEdad: PreguntaEdadMental[] = [
  // ===== SITUACIONES SOCIALES (Fácil) =====
  {
    id: 1,
    pregunta: "Tu amigo te cuenta un secreto personal. ¿Qué haces?",
    opciones: [
      "Lo comparto con otros amigos cercanos",
      "Lo guardo para mí mismo",
      "Se lo cuento solo a mi mejor amigo",
      "Lo publico en redes sociales de forma anónima"
    ],
    respuestaCorrecta: 1,
    categoria: "madurez-social",
    dificultad: "facil",
    rangoEdad: "18-60",
    puntosPorEdad: { "joven": 5, "adulto": 10, "maduro": 10 }
  },
  {
    id: 2,
    pregunta: "Estás en una reunión aburrida. ¿Qué haces?",
    opciones: [
      "Reviso mi teléfono constantemente",
      "Escucho atentamente y participo cuando es apropiado",
      "Me quejo abiertamente del aburrimiento",
      "Finjo estar enfermo para irme"
    ],
    respuestaCorrecta: 1,
    categoria: "madurez-social",
    dificultad: "facil",
    rangoEdad: "18-60",
    puntosPorEdad: { "joven": 5, "adulto": 10, "maduro": 10 }
  },
  {
    id: 3,
    pregunta: "Alguien te interrumpe mientras estás hablando. ¿Cómo reaccionas?",
    opciones: [
      "Me enojo y levanto la voz",
      "Espero a que termine y continúo educadamente",
      "Lo interrumpo de vuelta",
      "Dejo de hablar y no digo nada más"
    ],
    respuestaCorrecta: 1,
    categoria: "madurez-social",
    dificultad: "facil",
    rangoEdad: "18-60",
    puntosPorEdad: { "joven": 5, "adulto": 10, "maduro": 10 }
  },
  {
    id: 4,
    pregunta: "Te invitan a una fiesta donde no conoces a nadie. ¿Qué haces?",
    opciones: [
      "Me quedo pegado a mi teléfono toda la noche",
      "Me presento y trato de conocer gente nueva",
      "No voy, me da demasiada ansiedad",
      "Voy pero me voy temprano"
    ],
    respuestaCorrecta: 1,
    categoria: "madurez-social",
    dificultad: "facil",
    rangoEdad: "18-60",
    puntosPorEdad: { "joven": 5, "adulto": 10, "maduro": 10 }
  },

  // ===== SITUACIONES SOCIALES (Medio) =====
  {
    id: 5,
    pregunta: "Alguien te critica constructivamente en el trabajo. ¿Cómo reaccionas?",
    opciones: [
      "Me enojo y me pongo a la defensiva",
      "Agradezco y reflexiono sobre el comentario",
      "Ignoro completamente la crítica",
      "Critico de vuelta a esa persona"
    ],
    respuestaCorrecta: 1,
    categoria: "madurez-emocional",
    dificultad: "medio",
    rangoEdad: "25-60",
    puntosPorEdad: { "joven": 5, "adulto": 10, "maduro": 15 }
  },
  {
    id: 6,
    pregunta: "Un amigo te pide un favor que te incomoda. ¿Qué haces?",
    opciones: [
      "Acepto aunque no quiera para no quedar mal",
      "Le explico honestamente por qué no puedo",
      "Invento una excusa elaborada",
      "Lo ignoro y espero que se olvide"
    ],
    respuestaCorrecta: 1,
    categoria: "madurez-social",
    dificultad: "medio",
    rangoEdad: "20-60",
    puntosPorEdad: { "joven": 5, "adulto": 10, "maduro": 15 }
  },
  {
    id: 7,
    pregunta: "Ves que alguien está siendo injustamente tratado. ¿Qué haces?",
    opciones: [
      "No me meto, no es mi problema",
      "Intervengo de manera respetuosa",
      "Grabo la situación para redes sociales",
      "Me voy para evitar el conflicto"
    ],
    respuestaCorrecta: 1,
    categoria: "madurez-social",
    dificultad: "medio",
    rangoEdad: "20-60",
    puntosPorEdad: { "joven": 5, "adulto": 10, "maduro": 15 }
  },

  // ===== RESPONSABILIDAD (Fácil) =====
  {
    id: 8,
    pregunta: "Te das cuenta que cometiste un error importante. ¿Qué haces?",
    opciones: [
      "Lo oculto y espero que nadie lo note",
      "Lo admito inmediatamente y busco solucionarlo",
      "Culpo a otra persona",
      "Minimizo la importancia del error"
    ],
    respuestaCorrecta: 1,
    categoria: "responsabilidad",
    dificultad: "facil",
    rangoEdad: "18-60",
    puntosPorEdad: { "joven": 5, "adulto": 10, "maduro": 10 }
  },
  {
    id: 9,
    pregunta: "¿Cómo manejas tus tareas del hogar?",
    opciones: [
      "Las hago solo cuando ya no hay más remedio",
      "Tengo una rutina y las hago regularmente",
      "Espero que alguien más las haga",
      "Contrato a alguien para evitarlas"
    ],
    respuestaCorrecta: 1,
    categoria: "responsabilidad",
    dificultad: "facil",
    rangoEdad: "18-60",
    puntosPorEdad: { "joven": 5, "adulto": 10, "maduro": 10 }
  },
  {
    id: 10,
    pregunta: "Tienes una cita importante mañana temprano. ¿Qué haces?",
    opciones: [
      "Me acuesto tarde como siempre y uso alarmas",
      "Me acuesto temprano y preparo todo la noche anterior",
      "No me preocupo, ya veré mañana",
      "Cancelo porque no me gusta madrugar"
    ],
    respuestaCorrecta: 1,
    categoria: "responsabilidad",
    dificultad: "facil",
    rangoEdad: "18-60",
    puntosPorEdad: { "joven": 5, "adulto": 10, "maduro": 10 }
  },

  // ===== RESPONSABILIDAD (Medio) =====
  {
    id: 11,
    pregunta: "¿Con qué frecuencia planificas tus finanzas personales?",
    opciones: [
      "Nunca, gasto según lo que tengo",
      "Tengo un presupuesto mensual y lo sigo",
      "Solo cuando tengo problemas de dinero",
      "¿Qué es planificar finanzas?"
    ],
    respuestaCorrecta: 1,
    categoria: "responsabilidad",
    dificultad: "medio",
    rangoEdad: "25-60",
    puntosPorEdad: { "joven": 5, "adulto": 10, "maduro": 15 }
  },
  {
    id: 12,
    pregunta: "Tienes dinero extra este mes. ¿Qué haces?",
    opciones: [
      "Lo gasto en algo que quiero hace tiempo",
      "Lo ahorro para el futuro",
      "Lo invierto",
      "Mitad ahorro, mitad para disfrutar"
    ],
    respuestaCorrecta: 3,
    categoria: "responsabilidad",
    dificultad: "medio",
    rangoEdad: "25-60",
    puntosPorEdad: { "joven": 5, "adulto": 10, "maduro": 15 }
  },
  {
    id: 13,
    pregunta: "Cuando quieres comprar algo caro, ¿qué haces?",
    opciones: [
      "Lo compro si me gusta, sin pensarlo mucho",
      "Investigo, comparo precios y espero el momento adecuado",
      "Le pregunto a todos mis amigos su opinión",
      "Espero ofertas o promociones"
    ],
    respuestaCorrecta: 1,
    categoria: "responsabilidad",
    dificultad: "medio",
    rangoEdad: "25-60",
    puntosPorEdad: { "joven": 5, "adulto": 10, "maduro": 15 }
  },

  // ===== PRIORIDADES Y VALORES (Fácil) =====
  {
    id: 14,
    pregunta: "Es viernes por la noche. ¿Qué prefieres hacer?",
    opciones: [
      "Salir de fiesta hasta tarde",
      "Una cena tranquila con amigos cercanos",
      "Quedarme en casa viendo series",
      "Depende de cómo me sienta ese día"
    ],
    respuestaCorrecta: 3,
    categoria: "estilo-vida",
    dificultad: "facil",
    rangoEdad: "18-60",
    puntosPorEdad: { "joven": 5, "adulto": 10, "maduro": 10 }
  },
  {
    id: 15,
    pregunta: "¿Cuál es tu idea de un buen sábado?",
    opciones: [
      "Dormir hasta tarde y no hacer nada productivo",
      "Hacer actividades que disfruto y también cumplir pendientes",
      "Salir y socializar todo el día",
      "Trabajar en proyectos personales"
    ],
    respuestaCorrecta: 1,
    categoria: "estilo-vida",
    dificultad: "facil",
    rangoEdad: "18-60",
    puntosPorEdad: { "joven": 5, "adulto": 10, "maduro": 10 }
  },

  // ===== PRIORIDADES Y VALORES (Medio) =====
  {
    id: 16,
    pregunta: "¿Qué es más importante para ti en esta etapa de tu vida?",
    opciones: [
      "Divertirme y vivir el momento",
      "Construir una carrera sólida",
      "Formar una familia",
      "Encontrar balance entre todo"
    ],
    respuestaCorrecta: 3,
    categoria: "prioridades",
    dificultad: "medio",
    rangoEdad: "20-60",
    puntosPorEdad: { "joven": 5, "adulto": 10, "maduro": 15 }
  },
  {
    id: 17,
    pregunta: "¿Qué valoras más en una amistad?",
    opciones: [
      "Que sea divertida y hagamos cosas juntos",
      "Lealtad y apoyo incondicional",
      "Que tengamos intereses en común",
      "Honestidad y comunicación abierta"
    ],
    respuestaCorrecta: 3,
    categoria: "prioridades",
    dificultad: "medio",
    rangoEdad: "20-60",
    puntosPorEdad: { "joven": 5, "adulto": 10, "maduro": 15 }
  },

  // ===== RELACIONES Y EMOCIONES (Fácil) =====
  {
    id: 18,
    pregunta: "Alguien cercano te lastima emocionalmente. ¿Cómo reaccionas?",
    opciones: [
      "Le dejo de hablar inmediatamente",
      "Hablo con la persona sobre cómo me sentí",
      "Finjo que no pasó nada",
      "Busco venganza de alguna forma"
    ],
    respuestaCorrecta: 1,
    categoria: "madurez-emocional",
    dificultad: "facil",
    rangoEdad: "18-60",
    puntosPorEdad: { "joven": 5, "adulto": 10, "maduro": 10 }
  },
  {
    id: 19,
    pregunta: "¿Cómo expresas tus emociones?",
    opciones: [
      "Exploto emocionalmente sin control",
      "Las expreso de manera clara y calmada",
      "Las guardo para mí",
      "Solo las expreso en redes sociales"
    ],
    respuestaCorrecta: 1,
    categoria: "madurez-emocional",
    dificultad: "facil",
    rangoEdad: "18-60",
    puntosPorEdad: { "joven": 5, "adulto": 10, "maduro": 10 }
  },

  // ===== RELACIONES Y EMOCIONES (Medio) =====
  {
    id: 20,
    pregunta: "En una discusión con tu pareja/amigo, ¿cómo actúas?",
    opciones: [
      "Grito y digo lo que pienso sin filtro",
      "Espero a calmarme y luego hablamos",
      "Me voy y no quiero hablar del tema",
      "Le doy la razón para evitar conflicto"
    ],
    respuestaCorrecta: 1,
    categoria: "madurez-emocional",
    dificultad: "medio",
    rangoEdad: "18-60",
    puntosPorEdad: { "joven": 5, "adulto": 10, "maduro": 15 }
  },
  {
    id: 21,
    pregunta: "¿Cómo manejas el estrés?",
    opciones: [
      "Me desahogo con lo primero que encuentro",
      "Hago ejercicio o meditación",
      "Como o bebo en exceso",
      "Trato de identificar la causa y resolverla"
    ],
    respuestaCorrecta: 3,
    categoria: "madurez-emocional",
    dificultad: "medio",
    rangoEdad: "25-60",
    puntosPorEdad: { "joven": 5, "adulto": 10, "maduro": 15 }
  },
  {
    id: 22,
    pregunta: "Te sientes abrumado por tus responsabilidades. ¿Qué haces?",
    opciones: [
      "Me colapso y no hago nada",
      "Priorizo tareas y pido ayuda si es necesario",
      "Procrastino todo lo posible",
      "Me quejo con todos pero no hago nada"
    ],
    respuestaCorrecta: 1,
    categoria: "madurez-emocional",
    dificultad: "medio",
    rangoEdad: "25-60",
    puntosPorEdad: { "joven": 5, "adulto": 10, "maduro": 15 }
  },

  // ===== TECNOLOGÍA Y REDES SOCIALES (Fácil) =====
  {
    id: 23,
    pregunta: "¿Cuánto tiempo pasas diariamente en redes sociales?",
    opciones: [
      "Más de 4 horas",
      "Entre 2-4 horas",
      "Entre 1-2 horas",
      "Menos de 1 hora"
    ],
    respuestaCorrecta: 2,
    categoria: "habitos-tecnologia",
    dificultad: "facil",
    rangoEdad: "18-60",
    puntosPorEdad: { "joven": 10, "adulto": 5, "maduro": 5 }
  },
  {
    id: 24,
    pregunta: "¿Revisas tu teléfono apenas te despiertas?",
    opciones: [
      "Sí, es lo primero que hago",
      "No, prefiero arrancar el día sin pantallas",
      "A veces, depende del día",
      "Solo si tengo notificaciones importantes"
    ],
    respuestaCorrecta: 1,
    categoria: "habitos-tecnologia",
    dificultad: "facil",
    rangoEdad: "18-60",
    puntosPorEdad: { "joven": 10, "adulto": 5, "maduro": 5 }
  },

  // ===== TECNOLOGÍA Y REDES SOCIALES (Medio) =====
  {
    id: 25,
    pregunta: "Antes de compartir algo en redes sociales, ¿qué haces?",
    opciones: [
      "Lo publico inmediatamente",
      "Pienso en las consecuencias de publicarlo",
      "Le pregunto a mis amigos si debería",
      "Reviso cuántos likes podría tener"
    ],
    respuestaCorrecta: 1,
    categoria: "habitos-tecnologia",
    dificultad: "medio",
    rangoEdad: "18-60",
    puntosPorEdad: { "joven": 5, "adulto": 10, "maduro": 15 }
  },
  {
    id: 26,
    pregunta: "¿Cómo reaccionas ante comentarios negativos en redes sociales?",
    opciones: [
      "Respondo agresivamente",
      "Los ignoro o respondo educadamente",
      "Borro la publicación",
      "Bloqueo a la persona inmediatamente"
    ],
    respuestaCorrecta: 1,
    categoria: "habitos-tecnologia",
    dificultad: "medio",
    rangoEdad: "18-60",
    puntosPorEdad: { "joven": 5, "adulto": 10, "maduro": 15 }
  },

  // ===== SALUD Y AUTOCUIDADO (Fácil) =====
  {
    id: 27,
    pregunta: "¿Cómo es tu rutina de sueño?",
    opciones: [
      "Duermo cuando tengo sueño, sin horario fijo",
      "Trato de dormir 7-8 horas todas las noches",
      "Duermo poco en semana y mucho el fin de semana",
      "El sueño es para los débiles"
    ],
    respuestaCorrecta: 1,
    categoria: "autocuidado",
    dificultad: "facil",
    rangoEdad: "18-60",
    puntosPorEdad: { "joven": 5, "adulto": 10, "maduro": 10 }
  },
  {
    id: 28,
    pregunta: "¿Con qué frecuencia haces ejercicio?",
    opciones: [
      "Nunca o casi nunca",
      "Al menos 3 veces por semana",
      "Solo cuando me siento culpable",
      "¿Contar los pasos cuenta?"
    ],
    respuestaCorrecta: 1,
    categoria: "autocuidado",
    dificultad: "facil",
    rangoEdad: "18-60",
    puntosPorEdad: { "joven": 5, "adulto": 10, "maduro": 10 }
  },
  {
    id: 29,
    pregunta: "¿Cómo es tu alimentación?",
    opciones: [
      "Como lo que sea, cuando sea",
      "Trato de comer balanceado y saludable",
      "Solo comida rápida",
      "Sigo dietas extremas constantemente"
    ],
    respuestaCorrecta: 1,
    categoria: "autocuidado",
    dificultad: "facil",
    rangoEdad: "18-60",
    puntosPorEdad: { "joven": 5, "adulto": 10, "maduro": 10 }
  },

  // ===== SALUD Y AUTOCUIDADO (Medio) =====
  {
    id: 30,
    pregunta: "¿Con qué frecuencia vas a chequeos médicos?",
    opciones: [
      "Solo cuando me siento mal",
      "Una vez al año de forma preventiva",
      "Nunca, no me gusta ir al médico",
      "Cada vez que tengo una duda sobre mi salud"
    ],
    respuestaCorrecta: 1,
    categoria: "autocuidado",
    dificultad: "facil",
    rangoEdad: "25-60",
    puntosPorEdad: { "joven": 5, "adulto": 10, "maduro": 15 }
  },
  {
    id: 31,
    pregunta: "¿Cómo manejas tu salud mental?",
    opciones: [
      "No le presto atención",
      "Busco ayuda profesional cuando la necesito",
      "Solo hablo con amigos",
      "La ignoro hasta que es un problema grave"
    ],
    respuestaCorrecta: 1,
    categoria: "autocuidado",
    dificultad: "medio",
    rangoEdad: "20-60",
    puntosPorEdad: { "joven": 5, "adulto": 10, "maduro": 15 }
  },

  // ===== PERSPECTIVA Y FILOSOFÍA (Medio) =====
  {
    id: 32,
    pregunta: "¿Qué piensas sobre el futuro?",
    opciones: [
      "No me preocupo, ya veré qué pasa",
      "Tengo planes claros y trabajo hacia ellos",
      "Me da ansiedad pensar en el futuro",
      "Prefiero vivir el presente sin pensar mucho"
    ],
    respuestaCorrecta: 1,
    categoria: "perspectiva",
    dificultad: "medio",
    rangoEdad: "20-60",
    puntosPorEdad: { "joven": 5, "adulto": 10, "maduro": 15 }
  },
  {
    id: 33,
    pregunta: "¿Cómo reaccionas ante el cambio?",
    opciones: [
      "Me resisto, prefiero la estabilidad",
      "Me adapto y busco oportunidades",
      "Me da pánico cualquier cambio",
      "Depende del tipo de cambio"
    ],
    respuestaCorrecta: 1,
    categoria: "adaptabilidad",
    dificultad: "medio",
    rangoEdad: "25-60",
    puntosPorEdad: { "joven": 5, "adulto": 10, "maduro": 15 }
  },
  {
    id: 34,
    pregunta: "¿Qué haces cuando algo no sale como esperabas?",
    opciones: [
      "Me frustro y me rindo",
      "Aprendo de la experiencia y lo intento de nuevo",
      "Culpo a otros o a las circunstancias",
      "Me quejo sin hacer nada al respecto"
    ],
    respuestaCorrecta: 1,
    categoria: "perspectiva",
    dificultad: "medio",
    rangoEdad: "20-60",
    puntosPorEdad: { "joven": 5, "adulto": 10, "maduro": 15 }
  },

  // ===== ENTRETENIMIENTO Y OCIO (Fácil) =====
  {
    id: 35,
    pregunta: "¿Qué tipo de contenido consumes principalmente?",
    opciones: [
      "Videos cortos y memes",
      "Documentales y podcasts educativos",
      "Series y películas",
      "Un poco de todo"
    ],
    respuestaCorrecta: 3,
    categoria: "entretenimiento",
    dificultad: "facil",
    rangoEdad: "18-60",
    puntosPorEdad: { "joven": 10, "adulto": 10, "maduro": 5 }
  },
  {
    id: 36,
    pregunta: "¿Prefieres pasar tiempo solo o acompañado?",
    opciones: [
      "Siempre solo, no necesito a nadie",
      "Siempre acompañado, odio estar solo",
      "Disfruto de un balance entre ambos",
      "Depende de mi estado de ánimo"
    ],
    respuestaCorrecta: 2,
    categoria: "estilo-vida",
    dificultad: "facil",
    rangoEdad: "18-60",
    puntosPorEdad: { "joven": 5, "adulto": 10, "maduro": 10 }
  },

  // ===== TOMA DE DECISIONES (Medio) =====
  {
    id: 37,
    pregunta: "¿Cómo tomas decisiones importantes?",
    opciones: [
      "Sigo mi instinto inmediatamente",
      "Analizo pros y contras cuidadosamente",
      "Hago lo que otros me recomiendan",
      "Evito tomar decisiones hasta el último momento"
    ],
    respuestaCorrecta: 1,
    categoria: "madurez-mental",
    dificultad: "medio",
    rangoEdad: "25-60",
    puntosPorEdad: { "joven": 5, "adulto": 10, "maduro": 15 }
  },
  {
    id: 38,
    pregunta: "Te ofrecen un trabajo mejor pagado pero con más responsabilidad. ¿Qué haces?",
    opciones: [
      "Lo acepto sin pensarlo",
      "Evalúo si realmente vale la pena el cambio",
      "Lo rechazo porque me da miedo",
      "Pido consejo a todos antes de decidir"
    ],
    respuestaCorrecta: 1,
    categoria: "madurez-mental",
    dificultad: "medio",
    rangoEdad: "25-60",
    puntosPorEdad: { "joven": 5, "adulto": 10, "maduro": 15 }
  },

  // ===== TRABAJO Y PRODUCTIVIDAD (Medio) =====
  {
    id: 39,
    pregunta: "¿Cómo manejas tus tareas laborales/académicas?",
    opciones: [
      "Dejo todo para el último momento",
      "Planifico y organizo mis tiempos",
      "Hago solo lo mínimo necesario",
      "Me estreso pero no sé organizarme"
    ],
    respuestaCorrecta: 1,
    categoria: "responsabilidad",
    dificultad: "medio",
    rangoEdad: "18-60",
    puntosPorEdad: { "joven": 5, "adulto": 10, "maduro": 15 }
  },
  {
    id: 40,
    pregunta: "¿Cómo reaccionas ante la crítica en tu trabajo/estudios?",
    opciones: [
      "Me lo tomo personal y me molesto",
      "Escucho y busco mejorar",
      "Finjo que me importa pero la ignoro",
      "Justifico mis errores"
    ],
    respuestaCorrecta: 1,
    categoria: "madurez-mental",
    dificultad: "medio",
    rangoEdad: "18-60",
    puntosPorEdad: { "joven": 5, "adulto": 10, "maduro": 15 }
  }
];

// Configuración del test
export const configuracionTestEdad = {
  numeroPreguntas: 20,
  mostrarEdadCronologica: true,
  distribucionCategorias: {
    "madurez-social": 15,
    "madurez-emocional": 20,
    "responsabilidad": 20,
    "autocuidado": 15,
    "perspectiva": 10,
    "estilo-vida": 10,
    "madurez-mental": 10
  }
};

// Función para obtener preguntas del test de edad
export function obtenerPreguntasEdad(cantidad: number = 20): PreguntaEdadMental[] {
  const preguntasMezcladas = [...preguntasEdad].sort(() => Math.random() - 0.5);
  return preguntasMezcladas.slice(0, Math.min(cantidad, preguntasEdad.length));
}

// Función para obtener preguntas balanceadas por categoría
export function obtenerPreguntasBalanceadas(cantidad: number = 20): PreguntaEdadMental[] {
  const categorias = [
    'madurez-social',
    'madurez-emocional',
    'responsabilidad',
    'autocuidado',
    'perspectiva',
    'estilo-vida',
    'madurez-mental'
  ];

  const preguntasPorCategoria = Math.floor(cantidad / categorias.length);
  const preguntasSeleccionadas: PreguntaEdadMental[] = [];

  categorias.forEach(categoria => {
    const preguntasCategoria = preguntasEdad
      .filter(p => p.categoria === categoria)
      .sort(() => Math.random() - 0.5)
      .slice(0, preguntasPorCategoria);
    
    preguntasSeleccionadas.push(...preguntasCategoria);
  });

  // Completar con aleatorias si hace falta
  while (preguntasSeleccionadas.length < cantidad) {
    const preguntaAleatoria = preguntasEdad[Math.floor(Math.random() * preguntasEdad.length)];
    if (!preguntasSeleccionadas.find(p => p.id === preguntaAleatoria.id)) {
      preguntasSeleccionadas.push(preguntaAleatoria);
    }
  }

  return preguntasSeleccionadas.sort(() => Math.random() - 0.5);
}

// Función para obtener estadísticas de preguntas
export function obtenerEstadisticasPreguntas() {
  return {
    total: preguntasEdad.length,
    porCategoria: {
      "madurez-social": preguntasEdad.filter(p => p.categoria === "madurez-social").length,
      "madurez-emocional": preguntasEdad.filter(p => p.categoria === "madurez-emocional").length,
      "responsabilidad": preguntasEdad.filter(p => p.categoria === "responsabilidad").length,
      "autocuidado": preguntasEdad.filter(p => p.categoria === "autocuidado").length,
      "perspectiva": preguntasEdad.filter(p => p.categoria === "perspectiva").length,
      "estilo-vida": preguntasEdad.filter(p => p.categoria === "estilo-vida").length,
      "madurez-mental": preguntasEdad.filter(p => p.categoria === "madurez-mental").length,
      "habitos-tecnologia": preguntasEdad.filter(p => p.categoria === "habitos-tecnologia").length
    },
    porDificultad: {
      facil: preguntasEdad.filter(p => p.dificultad === "facil").length,
      medio: preguntasEdad.filter(p => p.dificultad === "medio").length
    }
  };
}

// Rangos de edad para interpretación
export const rangosEdad = {
  "muy-joven": { min: 15, max: 20, descripcion: "Adolescente", caracteristicas: "Explorando identidad y valores" },
  "joven": { min: 21, max: 30, descripcion: "Joven adulto", caracteristicas: "Estableciendo independencia" },
  "adulto": { min: 31, max: 45, descripcion: "Adulto", caracteristicas: "Consolidando carrera y relaciones" },
  "maduro": { min: 46, max: 60, descripcion: "Adulto maduro", caracteristicas: "Experiencia y perspectiva amplia" },
  "senior": { min: 61, max: 100, descripcion: "Senior", caracteristicas: "Sabiduría y reflexión" }
};

// Interpretaciones por diferencia de edad
export const interpretacionesDiferencia = {
  "muy-menor": {
    rango: "< -10",
    titulo: "Espíritu Muy Joven",
    descripcion: "Tienes una perspectiva juvenil y enérgica de la vida"
  },
  "menor": {
    rango: "-5 a -10",
    titulo: "Joven de Corazón",
    descripcion: "Mantienes frescura y espontaneidad en tu forma de ser"
  },
  "equilibrado": {
    rango: "-5 a +5",
    titulo: "Equilibrado",
    descripcion: "Tu madurez emocional está alineada con tu edad"
  },
  "mayor": {
    rango: "+5 a +10",
    titulo: "Madurez Avanzada",
    descripcion: "Muestras mayor madurez de la esperada para tu edad"
  },
  "muy-mayor": {
    rango: "> +10",
    titulo: "Sabiduría Temprana",
    descripcion: "Posees una madurez excepcional para tu edad"
  }
};