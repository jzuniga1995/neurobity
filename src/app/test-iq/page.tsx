import { Metadata } from 'next';
import TestIQClient from './TestIQClient';

export const metadata: Metadata = {
  title: 'Test de IQ Gratis - Mide tu Coeficiente Intelectual Online | NeuroBity',
  description: 'Test de IQ científico gratuito con 30 preguntas de lógica, matemáticas y razonamiento. Descubre tu coeficiente intelectual y percentil. Resultados inmediatos y precisos.',
  keywords: 'test de iq, test de coeficiente intelectual, medir iq gratis, test inteligencia online, iq test español',
  openGraph: {
    title: 'Test de IQ Gratis - Mide tu Coeficiente Intelectual',
    description: 'Evalúa tu inteligencia con nuestro test de IQ científico. 30 preguntas, resultados inmediatos.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://neurobity.com/test-iq',
  },
};

export default function TestIQPage() {
  return (
    <>
      <TestIQClient />
      
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Test de IQ",
            "description": "Test de coeficiente intelectual con 30 preguntas de lógica, matemáticas y razonamiento",
            "url": "https://neurobity.com/test-iq",
            "applicationCategory": "EducationalApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "ratingCount": "3482"
            }
          })
        }}
      />
    </>
  );
}