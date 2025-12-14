import { Pregunta } from '@/tipos';

export const preguntasIQ: Pregunta[] = [
  // ===== SERIES NUMÉRICAS (Fácil) =====
  {
    id: 1,
    pregunta: "¿Qué número sigue en la secuencia? 2, 4, 6, 8, ?",
    opciones: ["9", "10", "11", "12"],
    respuestaCorrecta: 1,
    categoria: "series",
    dificultad: "facil"
  },
  {
    id: 2,
    pregunta: "¿Qué número sigue en la secuencia? 5, 10, 15, 20, ?",
    opciones: ["22", "24", "25", "30"],
    respuestaCorrecta: 2,
    categoria: "series",
    dificultad: "facil"
  },
  {
    id: 3,
    pregunta: "¿Qué número sigue en la secuencia? 100, 50, 25, ?",
    opciones: ["12.5", "15", "20", "10"],
    respuestaCorrecta: 0,
    categoria: "series",
    dificultad: "facil"
  },
  {
    id: 4,
    pregunta: "¿Qué número sigue en la secuencia? 3, 6, 9, 12, ?",
    opciones: ["13", "14", "15", "16"],
    respuestaCorrecta: 2,
    categoria: "series",
    dificultad: "facil"
  },
  {
    id: 5,
    pregunta: "¿Qué número sigue en la secuencia? 1, 3, 5, 7, ?",
    opciones: ["8", "9", "10", "11"],
    respuestaCorrecta: 1,
    categoria: "series",
    dificultad: "facil"
  },

  // ===== SERIES NUMÉRICAS (Medio) =====
  {
    id: 6,
    pregunta: "¿Qué número sigue en la secuencia? 1, 1, 2, 3, 5, 8, ?",
    opciones: ["11", "13", "15", "17"],
    respuestaCorrecta: 1,
    categoria: "series",
    dificultad: "medio"
  },
  {
    id: 7,
    pregunta: "¿Qué número sigue en la secuencia? 3, 9, 27, 81, ?",
    opciones: ["162", "243", "324", "405"],
    respuestaCorrecta: 1,
    categoria: "series",
    dificultad: "medio"
  },
  {
    id: 8,
    pregunta: "¿Qué número sigue en la secuencia? 1, 4, 9, 16, 25, ?",
    opciones: ["30", "32", "36", "40"],
    respuestaCorrecta: 2,
    categoria: "series",
    dificultad: "medio"
  },
  {
    id: 9,
    pregunta: "¿Qué número sigue en la secuencia? 2, 4, 8, 16, 32, ?",
    opciones: ["48", "56", "60", "64"],
    respuestaCorrecta: 3,
    categoria: "series",
    dificultad: "medio"
  },
  {
    id: 10,
    pregunta: "¿Qué número sigue en la secuencia? 64, 32, 16, 8, ?",
    opciones: ["2", "4", "6", "7"],
    respuestaCorrecta: 1,
    categoria: "series",
    dificultad: "medio"
  },

  // ===== SERIES NUMÉRICAS (Difícil) =====
  {
    id: 11,
    pregunta: "¿Qué número sigue en la secuencia? 2, 6, 12, 20, 30, ?",
    opciones: ["40", "42", "44", "46"],
    respuestaCorrecta: 1,
    categoria: "series",
    dificultad: "dificil"
  },
  {
    id: 12,
    pregunta: "¿Qué número sigue en la secuencia? 1, 2, 4, 7, 11, 16, ?",
    opciones: ["20", "21", "22", "23"],
    respuestaCorrecta: 2,
    categoria: "series",
    dificultad: "dificil"
  },
  {
    id: 13,
    pregunta: "¿Qué número sigue en la secuencia? 2, 3, 5, 7, 11, 13, ?",
    opciones: ["15", "16", "17", "19"],
    respuestaCorrecta: 2,
    categoria: "series",
    dificultad: "dificil"
  },

  // ===== ANALOGÍAS VERBALES (Fácil) =====
  {
    id: 14,
    pregunta: "Perro es a cachorro como gato es a:",
    opciones: ["gatito", "minino", "felino", "mascota"],
    respuestaCorrecta: 0,
    categoria: "analogias",
    dificultad: "facil"
  },
  {
    id: 15,
    pregunta: "Libro es a biblioteca como cuadro es a:",
    opciones: ["marco", "pintura", "museo", "arte"],
    respuestaCorrecta: 2,
    categoria: "analogias",
    dificultad: "facil"
  },
  {
    id: 16,
    pregunta: "Médico es a hospital como profesor es a:",
    opciones: ["escuela", "universidad", "aula", "clase"],
    respuestaCorrecta: 0,
    categoria: "analogias",
    dificultad: "facil"
  },
  {
    id: 17,
    pregunta: "Zapato es a pie como guante es a:",
    opciones: ["dedo", "mano", "brazo", "ropa"],
    respuestaCorrecta: 1,
    categoria: "analogias",
    dificultad: "facil"
  },
  {
    id: 18,
    pregunta: "Noche es a día como luna es a:",
    opciones: ["estrella", "sol", "planeta", "cielo"],
    respuestaCorrecta: 1,
    categoria: "analogias",
    dificultad: "facil"
  },

  // ===== ANALOGÍAS VERBALES (Medio) =====
  {
    id: 19,
    pregunta: "Termómetro es a temperatura como barómetro es a:",
    opciones: ["altura", "presión", "humedad", "velocidad"],
    respuestaCorrecta: 1,
    categoria: "analogias",
    dificultad: "medio"
  },
  {
    id: 20,
    pregunta: "Arquitecto es a edificio como escultor es a:",
    opciones: ["pintura", "estatua", "museo", "arte"],
    respuestaCorrecta: 1,
    categoria: "analogias",
    dificultad: "medio"
  },
  {
    id: 21,
    pregunta: "Semilla es a planta como huevo es a:",
    opciones: ["nido", "pájaro", "gallina", "cáscara"],
    respuestaCorrecta: 1,
    categoria: "analogias",
    dificultad: "medio"
  },

  // ===== RAZONAMIENTO LÓGICO (Fácil) =====
  {
    id: 22,
    pregunta: "María es más alta que Juan. Pedro es más bajo que Juan. ¿Quién es el más alto?",
    opciones: ["María", "Juan", "Pedro", "No se puede determinar"],
    respuestaCorrecta: 0,
    categoria: "logica",
    dificultad: "facil"
  },
  {
    id: 23,
    pregunta: "Todos los perros son animales. Rex es un perro. Por lo tanto:",
    opciones: [
      "Rex no es un animal",
      "Rex es un animal",
      "Rex es un gato",
      "Los animales son perros"
    ],
    respuestaCorrecta: 1,
    categoria: "logica",
    dificultad: "facil"
  },
  {
    id: 24,
    pregunta: "Ana llegó antes que Luis. Carlos llegó después que Luis. ¿Quién llegó primero?",
    opciones: ["Ana", "Luis", "Carlos", "No se puede saber"],
    respuestaCorrecta: 0,
    categoria: "logica",
    dificultad: "facil"
  },

  // ===== RAZONAMIENTO LÓGICO (Medio) =====
  {
    id: 25,
    pregunta: "Si todos los gatos tienen cola y Firulais tiene cola, entonces:",
    opciones: [
      "Firulais es un gato",
      "Firulais podría no ser un gato",
      "Firulais definitivamente no es un gato",
      "Los gatos y Firulais son lo mismo"
    ],
    respuestaCorrecta: 1,
    categoria: "logica",
    dificultad: "medio"
  },
  {
    id: 26,
    pregunta: "Si llueve, llevo paraguas. No llevo paraguas. Por lo tanto:",
    opciones: [
      "Está lloviendo",
      "No está lloviendo",
      "Olvidé mi paraguas",
      "El clima está nublado"
    ],
    respuestaCorrecta: 1,
    categoria: "logica",
    dificultad: "medio"
  },
  {
    id: 27,
    pregunta: "En una carrera, adelantaste al segundo lugar. ¿En qué posición estás ahora?",
    opciones: ["Primero", "Segundo", "Tercero", "Cuarto"],
    respuestaCorrecta: 1,
    categoria: "logica",
    dificultad: "medio"
  },
  {
    id: 28,
    pregunta: "Tres hermanos tardan 3 horas en pintar una casa. ¿Cuánto tardarán 6 hermanos?",
    opciones: ["1 hora", "1.5 horas", "2 horas", "6 horas"],
    respuestaCorrecta: 1,
    categoria: "logica",
    dificultad: "medio"
  },

  // ===== RAZONAMIENTO LÓGICO (Difícil) =====
  {
    id: 29,
    pregunta: "¿Cuál de estas afirmaciones es lógicamente correcta?",
    opciones: [
      "Todos los pájaros vuelan, los pingüinos no vuelan, por lo tanto los pingüinos no son pájaros",
      "Algunos pájaros no vuelan, los pingüinos son pájaros que no vuelan",
      "Si vuela es un pájaro, las mariposas vuelan, entonces las mariposas son pájaros",
      "Ningún pájaro vuela"
    ],
    respuestaCorrecta: 1,
    categoria: "logica",
    dificultad: "dificil"
  },
  {
    id: 30,
    pregunta: "Si A=B y B=C, entonces necesariamente:",
    opciones: [
      "A es diferente de C",
      "A=C",
      "B es mayor que A",
      "C es menor que B"
    ],
    respuestaCorrecta: 1,
    categoria: "logica",
    dificultad: "dificil"
  },

  // ===== CLASIFICACIÓN (Fácil) =====
  {
    id: 31,
    pregunta: "¿Cuál palabra NO pertenece al grupo?",
    opciones: ["Perro", "Gato", "Ratón", "Mesa"],
    respuestaCorrecta: 3,
    categoria: "clasificacion",
    dificultad: "facil"
  },
  {
    id: 32,
    pregunta: "¿Cuál palabra NO pertenece al grupo?",
    opciones: ["Azul", "Verde", "Rojo", "Cuadrado"],
    respuestaCorrecta: 3,
    categoria: "clasificacion",
    dificultad: "facil"
  },
  {
    id: 33,
    pregunta: "¿Cuál palabra NO pertenece al grupo?",
    opciones: ["Manzana", "Banana", "Naranja", "Zanahoria"],
    respuestaCorrecta: 3,
    categoria: "clasificacion",
    dificultad: "facil"
  },
  {
    id: 34,
    pregunta: "¿Cuál palabra NO pertenece al grupo?",
    opciones: ["Coche", "Avión", "Barco", "Carretera"],
    respuestaCorrecta: 3,
    categoria: "clasificacion",
    dificultad: "facil"
  },
  {
    id: 35,
    pregunta: "¿Cuál palabra NO pertenece al grupo?",
    opciones: ["Enero", "Martes", "Marzo", "Julio"],
    respuestaCorrecta: 1,
    categoria: "clasificacion",
    dificultad: "facil"
  },

  // ===== CLASIFICACIÓN (Medio) =====
  {
    id: 36,
    pregunta: "¿Cuál palabra NO pertenece al grupo?",
    opciones: ["Violín", "Piano", "Guitarra", "Trompeta"],
    respuestaCorrecta: 1,
    categoria: "clasificacion",
    dificultad: "medio"
  },
  {
    id: 37,
    pregunta: "¿Cuál palabra NO pertenece al grupo?",
    opciones: ["Mercurio", "Venus", "Júpiter", "Luna"],
    respuestaCorrecta: 3,
    categoria: "clasificacion",
    dificultad: "medio"
  },

  // ===== MATEMÁTICAS (Fácil) =====
  {
    id: 38,
    pregunta: "Si 5 manzanas cuestan $10, ¿cuánto cuestan 8 manzanas?",
    opciones: ["$14", "$15", "$16", "$18"],
    respuestaCorrecta: 2,
    categoria: "matematicas",
    dificultad: "facil"
  },
  {
    id: 39,
    pregunta: "¿Cuál es el 25% de 80?",
    opciones: ["15", "20", "25", "30"],
    respuestaCorrecta: 1,
    categoria: "matematicas",
    dificultad: "facil"
  },
  {
    id: 40,
    pregunta: "¿Cuánto es 12 × 8?",
    opciones: ["84", "88", "92", "96"],
    respuestaCorrecta: 3,
    categoria: "matematicas",
    dificultad: "facil"
  },
  {
    id: 41,
    pregunta: "Si un libro cuesta $25 y tiene 20% de descuento, ¿cuánto pagas?",
    opciones: ["$18", "$20", "$22", "$23"],
    respuestaCorrecta: 1,
    categoria: "matematicas",
    dificultad: "facil"
  },
  {
    id: 42,
    pregunta: "¿Cuánto es 144 ÷ 12?",
    opciones: ["10", "11", "12", "13"],
    respuestaCorrecta: 2,
    categoria: "matematicas",
    dificultad: "facil"
  },

  // ===== MATEMÁTICAS (Medio) =====
  {
    id: 43,
    pregunta: "Un tren viaja a 60 km/h. ¿Cuántos kilómetros recorre en 30 minutos?",
    opciones: ["20 km", "25 km", "30 km", "35 km"],
    respuestaCorrecta: 2,
    categoria: "matematicas",
    dificultad: "medio"
  },
  {
    id: 44,
    pregunta: "Si x + 5 = 12, ¿cuánto vale x?",
    opciones: ["5", "6", "7", "8"],
    respuestaCorrecta: 2,
    categoria: "matematicas",
    dificultad: "medio"
  },
  {
    id: 45,
    pregunta: "¿Cuál es el área de un cuadrado con lado de 8 cm?",
    opciones: ["32 cm²", "48 cm²", "56 cm²", "64 cm²"],
    respuestaCorrecta: 3,
    categoria: "matematicas",
    dificultad: "medio"
  },
  {
    id: 46,
    pregunta: "Si 3 personas comen 3 pizzas en 3 horas, ¿cuántas pizzas comen 6 personas en 6 horas?",
    opciones: ["6", "9", "12", "18"],
    respuestaCorrecta: 2,
    categoria: "matematicas",
    dificultad: "medio"
  },

  // ===== MATEMÁTICAS (Difícil) =====
  {
    id: 47,
    pregunta: "Un padre tiene 35 años y su hijo 5. ¿En cuántos años el padre tendrá el triple de la edad del hijo?",
    opciones: ["5 años", "10 años", "15 años", "20 años"],
    respuestaCorrecta: 0,
    categoria: "matematicas",
    dificultad: "dificil"
  },
  {
    id: 48,
    pregunta: "¿Cuál es el siguiente número primo después de 23?",
    opciones: ["25", "27", "29", "31"],
    respuestaCorrecta: 2,
    categoria: "matematicas",
    dificultad: "dificil"
  },
  {
    id: 49,
    pregunta: "Si 2^x = 32, ¿cuánto vale x?",
    opciones: ["4", "5", "6", "7"],
    respuestaCorrecta: 1,
    categoria: "matematicas",
    dificultad: "dificil"
  },

  // ===== PATRONES (Fácil) =====
  {
    id: 50,
    pregunta: "Completa el patrón: ○ ● ○ ● ○ ?",
    opciones: ["○", "●", "◐", "◑"],
    respuestaCorrecta: 1,
    categoria: "patrones",
    dificultad: "facil"
  },
  {
    id: 51,
    pregunta: "Completa el patrón: △ ▽ △ ▽ ?",
    opciones: ["△", "▽", "□", "○"],
    respuestaCorrecta: 0,
    categoria: "patrones",
    dificultad: "facil"
  },
  {
    id: 52,
    pregunta: "Completa el patrón: □ □ ○ □ □ ○ □ □ ?",
    opciones: ["□", "○", "△", "●"],
    respuestaCorrecta: 1,
    categoria: "patrones",
    dificultad: "facil"
  },
  {
    id: 53,
    pregunta: "Completa el patrón: ★ ☆ ★ ☆ ★ ?",
    opciones: ["★", "☆", "●", "○"],
    respuestaCorrecta: 1,
    categoria: "patrones",
    dificultad: "facil"
  },

  // ===== PATRONES (Medio) =====
  {
    id: 54,
    pregunta: "Completa el patrón: A1 B2 C3 D4 ?",
    opciones: ["E4", "E5", "F5", "D5"],
    respuestaCorrecta: 1,
    categoria: "patrones",
    dificultad: "medio"
  },
  {
    id: 55,
    pregunta: "Completa el patrón: ○ ○ ● ○ ○ ○ ● ○ ○ ○ ○ ?",
    opciones: ["○", "●", "◐", "◑"],
    respuestaCorrecta: 1,
    categoria: "patrones",
    dificultad: "medio"
  },

  // ===== VOCABULARIO (Fácil) =====
  {
    id: 56,
    pregunta: "¿Cuál es el antónimo de 'generoso'?",
    opciones: ["Amable", "Tacaño", "Rico", "Pobre"],
    respuestaCorrecta: 1,
    categoria: "vocabulario",
    dificultad: "facil"
  },
  {
    id: 57,
    pregunta: "¿Cuál es el sinónimo de 'feliz'?",
    opciones: ["Triste", "Contento", "Enojado", "Cansado"],
    respuestaCorrecta: 1,
    categoria: "vocabulario",
    dificultad: "facil"
  },
  {
    id: 58,
    pregunta: "¿Cuál es el antónimo de 'rápido'?",
    opciones: ["Veloz", "Lento", "Ágil", "Ligero"],
    respuestaCorrecta: 1,
    categoria: "vocabulario",
    dificultad: "facil"
  },

  // ===== VOCABULARIO (Medio) =====
  {
    id: 59,
    pregunta: "¿Qué significa 'efímero'?",
    opciones: ["Duradero", "Pasajero", "Eterno", "Frecuente"],
    respuestaCorrecta: 1,
    categoria: "vocabulario",
    dificultad: "medio"
  },
  {
    id: 60,
    pregunta: "¿Qué significa 'prolijo'?",
    opciones: ["Descuidado", "Cuidadoso", "Rápido", "Lento"],
    respuestaCorrecta: 1,
    categoria: "vocabulario",
    dificultad: "medio"
  },
  {
    id: 61,
    pregunta: "¿Qué significa 'exhaustivo'?",
    opciones: ["Superficial", "Completo", "Rápido", "Simple"],
    respuestaCorrecta: 1,
    categoria: "vocabulario",
    dificultad: "medio"
  },

  // ===== VOCABULARIO (Difícil) =====
  {
    id: 62,
    pregunta: "¿Qué significa 'ubérrimo'?",
    opciones: ["Estéril", "Muy fértil", "Seco", "Árido"],
    respuestaCorrecta: 1,
    categoria: "vocabulario",
    dificultad: "dificil"
  },
  {
    id: 63,
    pregunta: "¿Qué significa 'diletante'?",
    opciones: [
      "Profesional experto",
      "Aficionado superficial",
      "Persona dedicada",
      "Especialista"
    ],
    respuestaCorrecta: 1,
    categoria: "vocabulario",
    dificultad: "dificil"
  },

  // ===== RAZONAMIENTO ESPACIAL (Fácil) =====
  {
    id: 64,
    pregunta: "Estás mirando al Norte. Das media vuelta. ¿Hacia dónde miras?",
    opciones: ["Este", "Oeste", "Sur", "Norte"],
    respuestaCorrecta: 2,
    categoria: "espacial",
    dificultad: "facil"
  },
  {
    id: 65,
    pregunta: "¿Cuántos lados tiene un hexágono?",
    opciones: ["4", "5", "6", "7"],
    respuestaCorrecta: 2,
    categoria: "espacial",
    dificultad: "facil"
  },
  {
    id: 66,
    pregunta: "¿Cuántas esquinas tiene un cubo?",
    opciones: ["6", "8", "10", "12"],
    respuestaCorrecta: 1,
    categoria: "espacial",
    dificultad: "facil"
  },

  // ===== RAZONAMIENTO ESPACIAL (Medio) =====
  {
    id: 67,
    pregunta: "Si un cubo tiene 6 caras, ¿cuántas aristas tiene?",
    opciones: ["8", "10", "12", "14"],
    respuestaCorrecta: 2,
    categoria: "espacial",
    dificultad: "medio"
  },
  {
    id: 68,
    pregunta: "¿Cuántos triángulos puedes ver en una estrella de 5 puntas?",
    opciones: ["5", "10", "15", "20"],
    respuestaCorrecta: 1,
    categoria: "espacial",
    dificultad: "medio"
  },

  // ===== SERIES ALFABÉTICAS (Fácil) =====
  {
    id: 69,
    pregunta: "¿Qué letra sigue? A, C, E, G, ?",
    opciones: ["H", "I", "J", "K"],
    respuestaCorrecta: 1,
    categoria: "series",
    dificultad: "facil"
  },
  {
    id: 70,
    pregunta: "¿Qué letra sigue? Z, Y, X, W, ?",
    opciones: ["U", "V", "T", "S"],
    respuestaCorrecta: 1,
    categoria: "series",
    dificultad: "facil"
  },
  {
    id: 71,
    pregunta: "¿Qué letra sigue? B, D, F, H, ?",
    opciones: ["I", "J", "K", "L"],
    respuestaCorrecta: 1,
    categoria: "series",
    dificultad: "facil"
  },

  // ===== SERIES ALFABÉTICAS (Medio) =====
  {
    id: 72,
    pregunta: "¿Qué letra sigue? A, D, G, J, ?",
    opciones: ["K", "L", "M", "N"],
    respuestaCorrecta: 2,
    categoria: "series",
    dificultad: "medio"
  },
  {
    id: 73,
    pregunta: "¿Qué letra sigue? Z, X, V, T, ?",
    opciones: ["P", "Q", "R", "S"],
    respuestaCorrecta: 2,
    categoria: "series",
    dificultad: "medio"
  },

  // ===== PENSAMIENTO CRÍTICO (Medio) =====
  {
    id: 74,
    pregunta: "¿Cuál opción completa mejor la frase? El sol es a día como la luna es a:",
    opciones: ["cielo", "noche", "estrella", "oscuridad"],
    respuestaCorrecta: 1,
    categoria: "analogias",
    dificultad: "medio"
  },
  {
    id: 75,
    pregunta: "Si todos los Z son Y, y algunos Y son X, entonces:",
    opciones: [
      "Todos los Z son X",
      "Algunos Z podrían ser X",
      "Ningún Z es X",
      "Todos los X son Z"
    ],
    respuestaCorrecta: 1,
    categoria: "logica",
    dificultad: "dificil"
  },

  // ===== PROBLEMAS DE LÓGICA PRÁCTICA (Difícil) =====
  {
    id: 76,
    pregunta: "Tres interruptores controlan tres bombillas en otra habitación. Solo puedes ir una vez a verificar. ¿Cómo identificas cuál controla cada bombilla?",
    opciones: [
      "Es imposible",
      "Enciendo uno, espero y enciendo otro antes de ir",
      "Los pruebo al azar",
      "Necesito ir dos veces"
    ],
    respuestaCorrecta: 1,
    categoria: "logica",
    dificultad: "dificil"
  },
  {
    id: 77,
    pregunta: "Un caracol sube 3 metros por día y resbala 2 metros por noche. ¿Cuántos días tarda en subir un poste de 10 metros?",
    opciones: ["8 días", "9 días", "10 días", "11 días"],
    respuestaCorrecta: 0,
    categoria: "logica",
    dificultad: "dificil"
  },

  // ===== RAZONAMIENTO NUMÉRICO COMPLEJO (Difícil) =====
  {
    id: 78,
    pregunta: "¿Cuál es el valor de X? 5 + 5 × 5 - 5 = X",
    opciones: ["20", "25", "30", "50"],
    respuestaCorrecta: 1,
    categoria: "matematicas",
    dificultad: "dificil"
  },
  {
    id: 79,
    pregunta: "Si un reloj marca las 3:15, ¿qué ángulo forman las manecillas?",
    opciones: ["0°", "7.5°", "15°", "22.5°"],
    respuestaCorrecta: 1,
    categoria: "matematicas",
    dificultad: "dificil"
  },
  {
    id: 80,
    pregunta: "¿Cuántos cuadrados hay en total en un tablero de ajedrez 8×8?",
    opciones: ["64", "128", "204", "256"],
    respuestaCorrecta: 2,
    categoria: "espacial",
    dificultad: "dificil"
  }
];

// Configuración del test
export const configuracionTestIQ = {
  tiempoLimite: 20, // minutos
  numeroPreguntas: 30,
  mostrarTemporizador: true,
  distribucionDificultad: {
    facil: 40, // 40% fáciles
    medio: 40, // 40% medias
    dificil: 20 // 20% difíciles
  }
};

// Función para obtener preguntas aleatorias
export function obtenerPreguntasAleatorias(cantidad: number = 30): Pregunta[] {
  const preguntasMezcladas = [...preguntasIQ].sort(() => Math.random() - 0.5);
  return preguntasMezcladas.slice(0, Math.min(cantidad, preguntasIQ.length));
}

// Función para obtener preguntas balanceadas por dificultad
export function obtenerPreguntasPorDificultad(
  faciles: number = 12,
  medias: number = 12,
  dificiles: number = 6
): Pregunta[] {
  const facilesFiltradas = preguntasIQ.filter(p => p.dificultad === 'facil');
  const mediasFiltradas = preguntasIQ.filter(p => p.dificultad === 'medio');
  const dificilesFiltradas = preguntasIQ.filter(p => p.dificultad === 'dificil');

  const seleccionFaciles = facilesFiltradas
    .sort(() => Math.random() - 0.5)
    .slice(0, Math.min(faciles, facilesFiltradas.length));
  
  const seleccionMedias = mediasFiltradas
    .sort(() => Math.random() - 0.5)
    .slice(0, Math.min(medias, mediasFiltradas.length));
  
  const seleccionDificiles = dificilesFiltradas
    .sort(() => Math.random() - 0.5)
    .slice(0, Math.min(dificiles, dificilesFiltradas.length));

  return [...seleccionFaciles, ...seleccionMedias, ...seleccionDificiles]
    .sort(() => Math.random() - 0.5);
}

// Función para obtener preguntas por categoría
export function obtenerPreguntasPorCategoria(categoria: string, cantidad: number = 10): Pregunta[] {
  const preguntasFiltradas = preguntasIQ.filter(p => p.categoria === categoria);
  return preguntasFiltradas
    .sort(() => Math.random() - 0.5)
    .slice(0, Math.min(cantidad, preguntasFiltradas.length));
}

// Obtener estadísticas de las preguntas
export function obtenerEstadisticasPreguntas() {
  return {
    total: preguntasIQ.length,
    porDificultad: {
      facil: preguntasIQ.filter(p => p.dificultad === 'facil').length,
      medio: preguntasIQ.filter(p => p.dificultad === 'medio').length,
      dificil: preguntasIQ.filter(p => p.dificultad === 'dificil').length
    },
    porCategoria: {
      series: preguntasIQ.filter(p => p.categoria === 'series').length,
      analogias: preguntasIQ.filter(p => p.categoria === 'analogias').length,
      logica: preguntasIQ.filter(p => p.categoria === 'logica').length,
      matematicas: preguntasIQ.filter(p => p.categoria === 'matematicas').length,
      vocabulario: preguntasIQ.filter(p => p.categoria === 'vocabulario').length,
      espacial: preguntasIQ.filter(p => p.categoria === 'espacial').length,
      patrones: preguntasIQ.filter(p => p.categoria === 'patrones').length,
      clasificacion: preguntasIQ.filter(p => p.categoria === 'clasificacion').length
    }
  };
}