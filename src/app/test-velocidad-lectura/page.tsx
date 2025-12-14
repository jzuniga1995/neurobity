import { Metadata } from 'next';
import TestVelocidadLecturaClient from './TestVelocidadLecturaClient';

export const metadata: Metadata = {
  title: 'Test de Velocidad de Lectura Gratis - Mide tus PPM | NeuroBity',
  description: 'Evalúa tu velocidad de lectura en palabras por minuto (PPM) y comprensión lectora. Test científico gratuito con resultados inmediatos. ¿Lees rápido o lento?',
  keywords: 'test velocidad lectura, palabras por minuto, PPM, comprensión lectora, lectura rápida, speed reading test',
  openGraph: {
    title: 'Test de Velocidad de Lectura - Mide tus PPM',
    description: 'Descubre cuántas palabras por minuto lees y tu nivel de comprensión',
    type: 'website',
  },
  alternates: {
    canonical: 'https://neurobity.com/test-velocidad-lectura',
  },
};

export default function TestVelocidadLecturaPage() {
  return (
    <>
      <TestVelocidadLecturaClient />
      
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Test de Velocidad de Lectura",
            "description": "Evalúa tu velocidad de lectura en palabras por minuto y comprensión lectora",
            "url": "https://neurobity.com/test-velocidad-lectura",
            "applicationCategory": "EducationalApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "ratingCount": "1247"
            }
          })
        }}
      />
    </>
  );
}