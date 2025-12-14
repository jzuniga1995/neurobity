import {
  RespuestaUsuario,
  ResultadoIQ,
  ResultadoEdadMental,
  ResultadoVelocidadLectura,
  PreguntaEdadMental
} from '@/tipos';

// ==========================================
// CONSTANTES
// ==========================================

const IQ_BASE = 100;
const TIEMPO_RAPIDO_THRESHOLD = 30; // segundos
const BONUS_VELOCIDAD = 3;
const COMPRENSION_MINIMA = 60;

// Tablas de mapeo para reducir condicionales
const RANGOS_IQ = [
  { min: 95, iq: 145 },
  { min: 90, iq: 135 },
  { min: 85, iq: 125 },
  { min: 80, iq: 120 },
  { min: 75, iq: 115 },
  { min: 70, iq: 110 },
  { min: 60, iq: 105 },
  { min: 50, iq: 100 },
  { min: 40, iq: 95 },
  { min: 30, iq: 90 },
  { min: 20, iq: 85 },
  { min: 0, iq: 80 }
] as const;

const CATEGORIAS_IQ = [
  { min: 140, categoria: 'Genio o casi genio' },
  { min: 130, categoria: 'Muy superior' },
  { min: 120, categoria: 'Superior' },
  { min: 110, categoria: 'Inteligencia por encima del promedio' },
  { min: 90, categoria: 'Inteligencia promedio' },
  { min: 80, categoria: 'Inteligencia por debajo del promedio' },
  { min: 0, categoria: 'Límite bajo' }
] as const;

const PERCENTILES_IQ = [
  { min: 145, percentil: 99.9 },
  { min: 130, percentil: 98 },
  { min: 120, percentil: 91 },
  { min: 110, percentil: 75 },
  { min: 100, percentil: 50 },
  { min: 90, percentil: 25 },
  { min: 80, percentil: 9 },
  { min: 0, percentil: 2 }
] as const;

const FACTORES_EDAD = [
  { min: 0.9, factor: 1.3 },
  { min: 0.8, factor: 1.2 },
  { min: 0.7, factor: 1.1 },
  { min: 0.6, factor: 1.0 },
  { min: 0.5, factor: 0.9 },
  { min: 0.4, factor: 0.8 },
  { min: 0, factor: 0.7 }
] as const;

const CATEGORIAS_VELOCIDAD = [
  { min: 400, categoria: 'Lector excepcional' },
  { min: 300, categoria: 'Lector muy rápido' },
  { min: 250, categoria: 'Lector rápido' },
  { min: 200, categoria: 'Lector promedio' },
  { min: 150, categoria: 'Lector lento' },
  { min: 0, categoria: 'Lector muy lento' }
] as const;

// ==========================================
// UTILIDADES GENÉRICAS
// ==========================================

const encontrarEnRango = <T extends { min: number }>(
  valor: number,
  rangos: readonly T[]
): T => rangos.find(r => valor >= r.min)!;

const calcularPorcentaje = (parte: number, total: number): number =>
  (parte / total) * 100;

const contarCorrectas = (respuestas: RespuestaUsuario[]): number =>
  respuestas.filter(r => r.esCorrecta).length;

// ==========================================
// CALCULADORA DE IQ
// ==========================================

export function calcularIQ(
  respuestas: RespuestaUsuario[],
  tiempoTotal: number
): ResultadoIQ {
  const totalPreguntas = respuestas.length;
  const respuestasCorrectas = contarCorrectas(respuestas);
  const porcentajeAciertos = calcularPorcentaje(respuestasCorrectas, totalPreguntas);

  // Calcular IQ base
  let iq = encontrarEnRango(porcentajeAciertos, RANGOS_IQ).iq;

  // Aplicar bonus por velocidad
  const tiempoPromedio = tiempoTotal / totalPreguntas;
  if (tiempoPromedio < TIEMPO_RAPIDO_THRESHOLD && porcentajeAciertos > 70) {
    iq += BONUS_VELOCIDAD;
  }

  const iqRedondeado = Math.round(iq);

  return {
    puntaje: respuestasCorrectas,
    iq: iqRedondeado,
    categoria: encontrarEnRango(iqRedondeado, CATEGORIAS_IQ).categoria,
    respuestasCorrectas,
    totalPreguntas,
    tiempoTotal,
    percentil: encontrarEnRango(iqRedondeado, PERCENTILES_IQ).percentil
  };
}

// ==========================================
// CALCULADORA DE EDAD MENTAL
// ==========================================

export function calcularEdadMental(
  respuestas: RespuestaUsuario[],
  edadCronologica: number,
  preguntas: PreguntaEdadMental[]
): ResultadoEdadMental {
  const totalPreguntas = respuestas.length;
  const respuestasCorrectas = contarCorrectas(respuestas);
  const factorAciertos = respuestasCorrectas / totalPreguntas;

  const factor = encontrarEnRango(factorAciertos, FACTORES_EDAD).factor;
  const edadMental = edadCronologica * factor;
  const diferencia = edadMental - edadCronologica;

  return {
    edadMental: Math.round(edadMental),
    edadCronologica,
    diferencia: Math.round(diferencia),
    categoria: obtenerCategoriaEdad(diferencia),
    descripcion: obtenerDescripcionEdad(diferencia, edadMental),
    respuestasCorrectas,
    totalPreguntas
  };
}

function obtenerCategoriaEdad(diferencia: number): string {
  if (diferencia >= 10) return 'Mucho más maduro';
  if (diferencia >= 5) return 'Más maduro';
  if (diferencia >= -5) return 'Acorde a tu edad';
  if (diferencia >= -10) return 'Más joven';
  return 'Mucho más joven';
}

function obtenerDescripcionEdad(diferencia: number, edadMental: number): string {
  const edadRedondeada = Math.round(edadMental);
  
  if (diferencia >= 10) {
    return `¡Wow! Tu madurez mental es excepcional. Piensas como alguien de ${edadRedondeada} años.`;
  }
  if (diferencia >= 5) {
    return `Tu forma de pensar es más madura que tu edad. Actúas como alguien de ${edadRedondeada} años.`;
  }
  if (diferencia >= -5) {
    return 'Tu edad mental coincide perfectamente con tu edad cronológica. ¡Estás en balance!';
  }
  if (diferencia >= -10) {
    return `Mantenés un espíritu joven. Tu mente es como la de alguien de ${edadRedondeada} años.`;
  }
  return `¡Sos eternamente joven! Tu mente tiene la frescura de alguien de ${edadRedondeada} años.`;
}

// ==========================================
// CALCULADORA DE VELOCIDAD DE LECTURA
// ==========================================

export function calcularVelocidadLectura(
  numeroPalabras: number,
  tiempoLectura: number,
  respuestasCorrectas: number,
  totalPreguntas: number
): ResultadoVelocidadLectura {
  const palabrasPorMinuto = Math.round(numeroPalabras / (tiempoLectura / 60));
  const comprension = Math.round(calcularPorcentaje(respuestasCorrectas, totalPreguntas));

  return {
    palabrasPorMinuto,
    tiempoLectura,
    comprension,
    categoria: obtenerCategoriaVelocidad(palabrasPorMinuto, comprension),
    descripcion: obtenerDescripcionVelocidad(palabrasPorMinuto, comprension),
    respuestasCorrectas,
    totalPreguntas
  };
}

function obtenerCategoriaVelocidad(ppm: number, comprension: number): string {
  if (comprension < COMPRENSION_MINIMA) {
    return 'Necesita mejorar comprensión';
  }
  return encontrarEnRango(ppm, CATEGORIAS_VELOCIDAD).categoria;
}

function obtenerDescripcionVelocidad(ppm: number, comprension: number): string {
  if (comprension < COMPRENSION_MINIMA) {
    return `Leés a ${ppm} palabras por minuto, pero tu comprensión es baja (${comprension}%). Te recomendamos practicar la lectura consciente.`;
  }

  const descripciones: Record<string, string> = {
    'Lector excepcional': `¡Increíble! Leés a ${ppm} palabras por minuto con ${comprension}% de comprensión. Estás en el top 1% de lectores.`,
    'Lector muy rápido': `Excelente velocidad de ${ppm} palabras por minuto y ${comprension}% de comprensión. ¡Sos un lector avanzado!`,
    'Lector rápido': `Muy bien! Leés ${ppm} palabras por minuto con ${comprension}% de comprensión. Estás por encima del promedio.`,
    'Lector promedio': `Tu velocidad de ${ppm} palabras por minuto es promedio, con ${comprension}% de comprensión. ¡Buen trabajo!`,
    'Lector lento': `Leés a ${ppm} palabras por minuto. Hay espacio para mejorar tu velocidad sin sacrificar comprensión.`,
    'Lector muy lento': `Con ${ppm} palabras por minuto, te recomendamos practicar más la lectura para aumentar tu velocidad.`
  };

  const categoria = obtenerCategoriaVelocidad(ppm, comprension);
  return descripciones[categoria];
}

// ==========================================
// UTILIDADES GENERALES
// ==========================================

export const calcularTiempoTranscurrido = (inicio: number, fin: number): number =>
  Math.round((fin - inicio) / 1000);

export const formatearTiempo = (segundos: number): string => {
  const mins = Math.floor(segundos / 60);
  const secs = segundos % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export const calcularProgreso = (actual: number, total: number): number =>
  Math.round(calcularPorcentaje(actual, total));