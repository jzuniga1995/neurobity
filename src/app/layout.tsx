import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/componentes/heder";
import CookieBanner from "@/componentes/bannercookies";
import ConditionalFooter from "@/componentes/ConditionalFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Neurobity - Tests de Inteligencia",
  description: "Descubre tu potencial cognitivo con tests de IQ, edad mental y velocidad de lectura. Evaluaciones científicas al alcance de todos.",
  keywords: ["test iq", "test inteligencia", "edad mental", "velocidad lectura", "coeficiente intelectual"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          {/* Header fijo en todas las páginas */}
          <Header />
          
          {/* Contenido principal */}
          <main className="flex-grow">
            {children}
          </main>
          
          {/* Footer condicional (oculto en tests) */}
          <ConditionalFooter />
          
          {/* Banner de cookies */}
          <CookieBanner />
        </div>
      </body>
    </html>
  );
}