import React from 'react';
import { Mail, MessageCircle, Send, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-16">
      <div className="max-w-3xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-100 p-4 rounded-full">
              <MessageCircle className="w-12 h-12 text-blue-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-slate-900 mb-3">Contáctanos</h1>
          <p className="text-lg text-slate-600">
            Estamos aquí para ayudarte. Envíanos un correo y te responderemos lo antes posible.
          </p>
        </div>

        {/* Main Contact Card */}
        <div className="bg-white rounded-2xl shadow-xl p-10 mb-8">
          <div className="text-center space-y-6">
            
            {/* Email Icon */}
            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-6 rounded-2xl shadow-lg">
                <Mail className="w-16 h-16 text-white" />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <h2 className="text-xl font-semibold text-slate-700 mb-3">
                Correo Electrónico
              </h2>
              <a 
                href="mailto:codezun@gmail.com"
                className="inline-flex items-center gap-3 text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors group"
              >
                <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
                codezun@gmail.com
              </a>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="mailto:codezun@gmail.com"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                <Send className="w-5 h-5" />
                Enviar Correo
              </a>
            </div>

          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Response Time */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-start gap-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Clock className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Tiempo de Respuesta</h3>
                <p className="text-slate-600 text-sm">
                  Normalmente respondemos en 24-48 horas durante días laborables.
                </p>
              </div>
            </div>
          </div>

          {/* Support */}
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="flex items-start gap-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <MessageCircle className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Soporte</h3>
                <p className="text-slate-600 text-sm">
                  Ayuda con cuentas, técnica, sugerencias o cualquier consulta general.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Additional Info */}
        <div className="mt-8 bg-blue-50 border-l-4 border-blue-600 rounded-lg p-6">
          <p className="text-slate-700 leading-relaxed">
            <strong className="text-blue-900">💡 Tip:</strong> Para una respuesta más rápida, 
            incluye en tu correo la mayor cantidad de detalles posible sobre tu consulta o problema.
          </p>
        </div>

      </div>
    </div>
  );
}