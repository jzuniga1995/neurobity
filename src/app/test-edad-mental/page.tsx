import { Metadata } from 'next';
import TestEdadMentalClient from './TestEdadMentalClient';

export const metadata: Metadata = {
  title: 'Test de Edad Mental Gratis - ¿Cuál es tu Madurez Emocional? | NeuroBity',
  description: 'Descubre tu edad mental con nuestro test psicológico gratuito. Mide tu madurez emocional y social. 20 preguntas, resultados inmediatos. ¿Eres más joven o más maduro de lo que pareces?',
  keywords: 'test edad mental, madurez emocional, test psicológico edad, cuántos años tengo mentalmente, test de madurez',
  openGraph: {
    title: 'Test de Edad Mental - Descubre tu Madurez Emocional',
    description: 'Mide tu edad mental y descubre si eres más joven o más maduro emocionalmente',
    type: 'website',
  },
  alternates: {
    canonical: 'https://neurobity.com/test-edad-mental',
  },
};

export default function TestEdadMentalPage() {
  return (
    <>
      <TestEdadMentalClient />
      
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Test de Edad Mental",
            "description": "Test psicológico para medir tu madurez emocional y social comparada con tu edad cronológica",
            "url": "https://neurobity.com/test-edad-mental",
            "applicationCategory": "EducationalApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.7",
              "ratingCount": "2156"
            }
          })
        }}
      />
    </>
  );
}