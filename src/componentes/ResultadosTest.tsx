import Link from 'next/link';
import { Share2, Facebook, X, MessageCircle, Copy, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { ResultadoIQ, ResultadoEdadMental, ResultadoVelocidadLectura } from '@/tipos';
import { formatearTiempo } from '@/lib/calculadoras';

type TipoResultado = ResultadoIQ | ResultadoEdadMental | ResultadoVelocidadLectura;

interface ResultadosTestProps {
  tipo: 'iq' | 'edad' | 'lectura';
  resultado: TipoResultado;
  onReintentar: () => void;
}

const COLORES = {
  iq: {
    fondo: 'bg-blue-50',
    principal: 'bg-gradient-to-br from-blue-600 to-blue-700',
    texto: 'text-blue-600',
    borde: 'border-blue-200'
  },
  edad: {
    fondo: 'bg-green-50',
    principal: 'bg-gradient-to-br from-green-600 to-green-700',
    texto: 'text-green-600',
    borde: 'border-green-200'
  },
  lectura: {
    fondo: 'bg-purple-50',
    principal: 'bg-gradient-to-br from-purple-600 to-purple-700',
    texto: 'text-purple-600',
    borde: 'border-purple-200'
  }
} as const;

const MENSAJES_MOTIVACIONALES = {
  iq: 'El IQ es solo una medida de ciertas habilidades cognitivas. La inteligencia es multifacética y puede desarrollarse con práctica.',
  edad: 'La edad mental refleja tu madurez emocional y social. No hay una edad "correcta", solo diferentes etapas de desarrollo.',
  lectura: 'La velocidad de lectura puede mejorarse con práctica constante. Lo importante es mantener un buen nivel de comprensión.'
} as const;

export default function ResultadosTest({
  tipo,
  resultado,
  onReintentar
}: ResultadosTestProps) {
  const [copiado, setCopiado] = useState(false);
  const colores = COLORES[tipo];

  // Generar texto para compartir
  const generarTextoCompartir = () => {
    const url = typeof window !== 'undefined' ? window.location.origin : '';
    
    if ('iq' in resultado) {
      const res = resultado as ResultadoIQ;
      return {
        texto: `¡Hice el test de IQ en NeuroBity y obtuve ${res.iq} puntos! (${res.categoria})`,
        url: `${url}/test-iq`,
        hashtags: 'NeuroBity,TestIQ,Inteligencia'
      };
    }
    
    if ('edadMental' in resultado) {
      const res = resultado as ResultadoEdadMental;
      return {
        texto: `Mi edad mental es ${res.edadMental} años según NeuroBity. ¡Descubrí la tuya!`,
        url: `${url}/test-edad-mental`,
        hashtags: 'NeuroBity,EdadMental'
      };
    }
    
    const res = resultado as ResultadoVelocidadLectura;
    return {
      texto: `Leo a ${res.palabrasPorMinuto} palabras por minuto con ${res.comprension}% de comprensión. ¡Medí tu velocidad!`,
      url: `${url}/test-velocidad-lectura`,
      hashtags: 'NeuroBity,Lectura'
    };
  };

  // Handlers de compartir
  const compartirEn = {
    facebook: () => {
      const { url } = generarTextoCompartir();
      window.open(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        '_blank',
        'width=600,height=400'
      );
    },
    

twitter: () => {
  const { texto, url, hashtags } = generarTextoCompartir();
  window.open(
    `https://twitter.com/intent/tweet?text=${encodeURIComponent(texto + '\n' + url)}&hashtags=${hashtags}`,
    '_blank',
    'width=600,height=400'
  );
},
    whatsapp: () => {
      const { texto, url } = generarTextoCompartir();
      window.open(
        `https://wa.me/?text=${encodeURIComponent(texto + '\n\n' + url)}`,
        '_blank'
      );
    },
    
copiar: async () => {
  const { texto, url } = generarTextoCompartir();
  
  try {
    await navigator.clipboard.writeText(`${texto}\n\n${url}`);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  } catch (err) {
    console.error('Error al copiar:', err);
  }
},
    
    nativo: async () => {
      const { texto, url } = generarTextoCompartir();
      
      if (typeof window !== 'undefined' && typeof navigator.share !== 'undefined') {
        try {
          await navigator.share({
            title: 'Mi resultado en NeuroBity',
            text: `${texto}\n\n${url}`
          });
        } catch (err) {
          if ((err as Error).name !== 'AbortError') {
            console.error('Error al compartir:', err);
          }
        }
      }
    }
  };

  const renderizarResultadoPrincipal = () => {
    if ('iq' in resultado) {
      const res = resultado as ResultadoIQ;
      return (
        <div className="text-center mb-8">
          <div className={`${colores.principal} text-white rounded-full w-48 h-48 mx-auto flex flex-col items-center justify-center shadow-xl`}>
            <div className="text-6xl font-bold">{res.iq}</div>
            <div className="text-sm uppercase tracking-wide mt-2 opacity-90">Puntos IQ</div>
          </div>
          <h2 className={`text-3xl font-bold mt-6 ${colores.texto}`}>
            {res.categoria}
          </h2>
          <p className="text-gray-600 mt-2">
            Percentil: {res.percentil}%
          </p>
        </div>
      );
    }

    if ('edadMental' in resultado) {
      const res = resultado as ResultadoEdadMental;
      return (
        <div className="text-center mb-8">
          <div className={`${colores.principal} text-white rounded-full w-48 h-48 mx-auto flex flex-col items-center justify-center shadow-xl`}>
            <div className="text-6xl font-bold">{res.edadMental}</div>
            <div className="text-sm uppercase tracking-wide mt-2 opacity-90">Años</div>
          </div>
          <h2 className={`text-3xl font-bold mt-6 ${colores.texto}`}>
            {res.categoria}
          </h2>
          <p className="text-gray-600 mt-4 max-w-md mx-auto">
            {res.descripcion}
          </p>
          <div className="mt-4 text-gray-500">
            <span className="font-semibold">Tu edad cronológica:</span> {res.edadCronologica} años
          </div>
        </div>
      );
    }

    const res = resultado as ResultadoVelocidadLectura;
    return (
      <div className="text-center mb-8">
        <div className={`${colores.principal} text-white rounded-full w-48 h-48 mx-auto flex flex-col items-center justify-center shadow-xl`}>
          <div className="text-5xl font-bold">{res.palabrasPorMinuto}</div>
          <div className="text-sm uppercase tracking-wide mt-2 opacity-90">PPM</div>
        </div>
        <h2 className={`text-3xl font-bold mt-6 ${colores.texto}`}>
          {res.categoria}
        </h2>
        <p className="text-gray-600 mt-4 max-w-md mx-auto">
          {res.descripcion}
        </p>
      </div>
    );
  };

  const renderizarEstadisticas = () => {
    let estadisticas: { label: string; valor: string }[] = [];

    if ('iq' in resultado) {
      const res = resultado as ResultadoIQ;
      estadisticas = [
        { label: 'Respuestas correctas', valor: `${res.respuestasCorrectas}/${res.totalPreguntas}` },
        { label: 'Tiempo total', valor: formatearTiempo(res.tiempoTotal) },
        { label: 'Puntaje', valor: `${res.puntaje} puntos` }
      ];
    } else if ('edadMental' in resultado) {
      const res = resultado as ResultadoEdadMental;
      estadisticas = [
        { label: 'Respuestas correctas', valor: `${res.respuestasCorrectas}/${res.totalPreguntas}` },
        { label: 'Diferencia de edad', valor: `${res.diferencia > 0 ? '+' : ''}${res.diferencia} años` },
        { label: 'Precisión', valor: `${Math.round((res.respuestasCorrectas / res.totalPreguntas) * 100)}%` }
      ];
    } else {
      const res = resultado as ResultadoVelocidadLectura;
      estadisticas = [
        { label: 'Comprensión', valor: `${res.comprension}%` },
        { label: 'Tiempo de lectura', valor: formatearTiempo(res.tiempoLectura) },
        { label: 'Respuestas correctas', valor: `${res.respuestasCorrectas}/${res.totalPreguntas}` }
      ];
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {estadisticas.map((stat, index) => (
          <div
            key={index}
            className={`${colores.fondo} ${colores.borde} border-2 rounded-xl p-4 text-center transition-all hover:shadow-md`}
          >
            <div className="text-gray-600 text-sm mb-1">{stat.label}</div>
            <div className={`text-2xl font-bold ${colores.texto}`}>{stat.valor}</div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      {/* Confetti */}
      <div className="text-center mb-4">
        <span className="text-5xl animate-bounce">🎉</span>
      </div>

      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
        ¡Test Completado!
      </h1>

      {renderizarResultadoPrincipal()}
      {renderizarEstadisticas()}

      {/* Mensaje motivacional */}
      <div className={`${colores.fondo} ${colores.borde} border-2 rounded-xl p-6 mb-8`}>
        <h3 className="font-bold text-lg text-gray-800 mb-2 flex items-center gap-2">
          💡 Sobre tu resultado
        </h3>
        <p className="text-gray-700">
          {MENSAJES_MOTIVACIONALES[tipo]}
        </p>
      </div>

      {/* Botones de acción */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
        <button
          onClick={onReintentar}
          className={`${colores.principal} text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-all shadow-md hover:shadow-lg`}
        >
          Reintentar Test
        </button>
        
        <Link
          href="/"
          className="bg-gradient-to-br from-gray-600 to-gray-700 text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-all text-center shadow-md hover:shadow-lg"
        >
          Volver al Inicio
        </Link>
      </div>

      {/* Compartir resultados */}
      <div className={`${colores.fondo} border-2 ${colores.borde} rounded-xl p-6`}>
        <div className="flex items-center justify-center gap-2 mb-4">
          <Share2 className="w-5 h-5 text-gray-600" />
          <p className="text-gray-700 font-semibold">Compartí tus resultados</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3">
          {/* Botón nativo de compartir (móviles) */}
          {typeof window !== 'undefined' && typeof navigator.share !== 'undefined' && (
            <button
              onClick={compartirEn.nativo}
              className="bg-gray-600 text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-700 transition-all flex items-center gap-2 shadow-sm hover:shadow-md"
            >
              <Share2 className="w-4 h-4" />
              Compartir
            </button>
          )}
          
          <button
            onClick={compartirEn.facebook}
            className="bg-[#1877F2] text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-[#166FE5] transition-all flex items-center gap-2 shadow-sm hover:shadow-md"
          >
            <Facebook className="w-4 h-4" fill="currentColor" />
            Facebook
          </button>
          
  <button
  onClick={compartirEn.twitter}
  className="bg-black text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-800 transition-all flex items-center gap-2 shadow-sm hover:shadow-md"
>
  <X className="w-4 h-4" strokeWidth={2.5} />
  
</button>
          
          <button
            onClick={compartirEn.whatsapp}
            className="bg-[#25D366] text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-[#22C55E] transition-all flex items-center gap-2 shadow-sm hover:shadow-md"
          >
            <MessageCircle className="w-4 h-4" fill="currentColor" />
            WhatsApp
          </button>
          
    <button
  onClick={compartirEn.copiar}
  className={`${copiado ? 'bg-green-600' : 'bg-gray-600'} text-white px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-700 transition-all flex items-center gap-2 shadow-sm hover:shadow-md`}
>
  {copiado ? (
    <>
      <CheckCircle className="w-4 h-4" />
      ¡Copiado!
    </>
  ) : (
    <>
      <Copy className="w-4 h-4" />
      Copiar resultado
    </>
  )}
</button>
        </div>
      </div>
    </div>
  );
}