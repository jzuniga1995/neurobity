// ==========================================
// TIPOS GENERALES
// ==========================================

export interface Pregunta {
  id: number;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number; // índice de la opción correcta
  categoria?: string;
  dificultad?: 'facil' | 'medio' | 'dificil';
}

export interface RespuestaUsuario {
  preguntaId: number;
  respuestaSeleccionada: number;
  esCorrecta: boolean;
  tiempoRespuesta?: number; // en segundos
}

// ==========================================
// TEST DE IQ
// ==========================================

export interface ResultadoIQ {
  puntaje: number;
  iq: number;
  categoria: string; // "Superior", "Promedio", etc.
  respuestasCorrectas: number;
  totalPreguntas: number;
  tiempoTotal: number; // en segundos
  percentil: number; // comparado con población general
}

export interface ConfiguracionTestIQ {
  tiempoLimite: number; // en minutos
  numeroPreguntas: number;
  mostrarTemporizador: boolean;
}

// ==========================================
// TEST DE EDAD MENTAL
// ==========================================

export interface ResultadoEdadMental {
  edadMental: number;
  edadCronologica: number;
  diferencia: number; // edad mental - edad cronológica
  categoria: string; // "Más joven", "Acorde a tu edad", "Más maduro"
  descripcion: string;
  respuestasCorrectas: number;
  totalPreguntas: number;
}

export interface PreguntaEdadMental extends Pregunta {
  rangoEdad: string; // "18-25", "26-35", etc.
  puntosPorEdad: { [key: string]: number }; // diferentes edades tienen diferentes puntos
}

// ==========================================
// TEST DE VELOCIDAD DE LECTURA
// ==========================================

export interface TextoLectura {
  id: number;
  titulo: string;
  contenido: string;
  numeroPalabras: number;
  dificultad: 'facil' | 'medio' | 'dificil';
  preguntas: PreguntaComprension[];
}

export interface PreguntaComprension {
  id: number;
  pregunta: string;
  opciones: string[];
  respuestaCorrecta: number;
}

export interface ResultadoVelocidadLectura {
  palabrasPorMinuto: number;
  tiempoLectura: number; // en segundos
  comprension: number; // porcentaje de respuestas correctas
  categoria: string; // "Lento", "Promedio", "Rápido", "Muy rápido"
  descripcion: string;
  respuestasCorrectas: number;
  totalPreguntas: number;
}

// ==========================================
// ESTADO DEL TEST (para gestionar progreso)
// ==========================================

export interface EstadoTest {
  testId: string;
  preguntaActual: number;
  respuestas: RespuestaUsuario[];
  iniciado: boolean;
  finalizado: boolean;
  tiempoInicio: number; // timestamp
  tiempoFin?: number; // timestamp
}

// ==========================================
// TIPOS PARA UI
// ==========================================

export type EstadoPregunta = 'no-respondida' | 'respondida' | 'actual';

export interface OpcionesNavegacion {
  puedeRetroceder: boolean;
  puedeAvanzar: boolean;
  puedeEnviar: boolean;
}