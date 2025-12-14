import React from 'react';
import { Shield, Mail, Lock, Eye, Database, UserCheck, AlertCircle } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Shield className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-slate-900">Política de Privacidad</h1>
          </div>
          <p className="text-slate-600">Última actualización: 9 de noviembre de 2025</p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-10">
          
          {/* Introducción */}
          <section>
            <p className="text-lg text-slate-700 leading-relaxed">
              En <strong className="text-blue-600">Neurobity</strong>, respetamos tu privacidad y nos comprometemos a proteger tus datos personales. 
              Esta política describe cómo recopilamos, usamos y protegemos tu información cuando utilizas nuestros servicios educativos.
            </p>
          </section>

          {/* Información que recopilamos */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">1. Información que Recopilamos</h2>
            </div>
            <div className="space-y-4 text-slate-700">
              <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">Información que proporcionas directamente:</h3>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Nombre y apellidos</li>
                  <li>Correo electrónico</li>
                  <li>Información de perfil educativo (nivel académico, intereses)</li>
                  <li>Resultados de pruebas y ejercicios de aprendizaje</li>
                </ul>
              </div>
              <div className="bg-slate-50 border-l-4 border-slate-400 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">Información recopilada automáticamente:</h3>
                <ul className="list-disc list-inside space-y-1 ml-2">
                  <li>Datos de uso y navegación en la plataforma</li>
                  <li>Dirección IP y ubicación aproximada</li>
                  <li>Tipo de dispositivo, navegador y sistema operativo</li>
                  <li>Cookies y tecnologías similares</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cómo usamos tu información */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">2. Cómo Usamos tu Información</h2>
            </div>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold text-xl">•</span>
                <span>Proporcionar y mejorar nuestros servicios educativos</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold text-xl">•</span>
                <span>Personalizar tu experiencia de aprendizaje según tu progreso</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold text-xl">•</span>
                <span>Enviar notificaciones sobre tu progreso, logros y actualizaciones importantes</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold text-xl">•</span>
                <span>Analizar y mejorar la efectividad de nuestras herramientas educativas</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold text-xl">•</span>
                <span>Garantizar la seguridad de la plataforma y prevenir fraudes</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-600 font-bold text-xl">•</span>
                <span>Cumplir con obligaciones legales y regulatorias</span>
              </li>
            </ul>
          </section>

          {/* Protección de datos */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Lock className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">3. Protección de tus Datos</h2>
            </div>
            <p className="text-slate-700 leading-relaxed mb-4">
              Implementamos medidas de seguridad técnicas y organizativas para proteger tu información personal:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-semibold text-green-900 mb-2">Seguridad Técnica</h3>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Encriptación SSL/TLS</li>
                  <li>• Servidores seguros</li>
                  <li>• Copias de seguridad regulares</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-semibold text-green-900 mb-2">Seguridad Organizativa</h3>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>• Acceso limitado al personal</li>
                  <li>• Políticas de confidencialidad</li>
                  <li>• Auditorías periódicas</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Compartir información */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <UserCheck className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">4. Compartir tu Información</h2>
            </div>
            <p className="text-slate-700 leading-relaxed mb-4">
              <strong>No vendemos ni alquilamos</strong> tu información personal. Solo compartimos datos en estas situaciones:
            </p>
            <ul className="space-y-2 text-slate-700">
              <li className="flex gap-2">
                <span className="text-blue-600">→</span>
                <span>Con proveedores de servicios que nos ayudan a operar la plataforma</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600">→</span>
                <span>Cuando sea requerido por ley o autoridades competentes</span>
              </li>
              <li className="flex gap-2">
                <span className="text-blue-600">→</span>
                <span>Con tu consentimiento explícito para fines específicos</span>
              </li>
            </ul>
          </section>

          {/* Tus derechos */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <AlertCircle className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">5. Tus Derechos</h2>
            </div>
            <p className="text-slate-700 leading-relaxed mb-4">
              Tienes derecho a:
            </p>
            <div className="bg-blue-50 rounded-lg p-6 space-y-3">
              <div className="flex items-start gap-3">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">✓</span>
                <div>
                  <strong className="text-slate-900">Acceder</strong> a tu información personal
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">✓</span>
                <div>
                  <strong className="text-slate-900">Rectificar</strong> datos incorrectos o incompletos
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">✓</span>
                <div>
                  <strong className="text-slate-900">Eliminar</strong> tu cuenta y datos personales
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">✓</span>
                <div>
                  <strong className="text-slate-900">Oponerte</strong> al procesamiento de tus datos
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0">✓</span>
                <div>
                  <strong className="text-slate-900">Portabilidad</strong> de tus datos a otro servicio
                </div>
              </div>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Uso de Cookies</h2>
            <p className="text-slate-700 leading-relaxed mb-3">
              Utilizamos cookies y tecnologías similares para mejorar tu experiencia. Puedes gestionar tus preferencias de cookies en la configuración de tu navegador. 
              Para más información, consulta nuestra <a href="/cookies" className="text-blue-600 hover:underline font-semibold">Política de Cookies</a>.
            </p>
          </section>

          {/* Cambios */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Cambios a esta Política</h2>
            <p className="text-slate-700 leading-relaxed">
              Podemos actualizar esta política periódicamente. Te notificaremos sobre cambios significativos mediante un aviso en la plataforma 
              o por correo electrónico. La fecha de la última actualización siempre estará visible al inicio de este documento.
            </p>
          </section>

          {/* Contacto */}
          <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">Contacto</h2>
            </div>
            <p className="text-slate-700 leading-relaxed mb-3">
              Si tienes preguntas sobre esta política de privacidad o deseas ejercer tus derechos, contáctanos:
            </p>
            <div className="flex items-center gap-2 text-blue-600 font-semibold">
              <Mail className="w-5 h-5" />
              <a href="mailto:codezun@gmail.com" className="hover:underline">
                codezun@gmail.com
              </a>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}