import React from 'react';
import { FileText, Mail, CheckCircle, XCircle, AlertTriangle, Scale, User } from 'lucide-react';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <FileText className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-slate-900">Términos y Condiciones</h1>
          </div>
          <p className="text-slate-600">Última actualización: 9 de noviembre de 2025</p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-10">
          
          {/* Introducción */}
          <section>
            <p className="text-lg text-slate-700 leading-relaxed">
              Bienvenido a <strong className="text-blue-600">Neurobity</strong>. Al acceder y utilizar nuestra plataforma educativa, 
              aceptas cumplir con estos términos y condiciones. Por favor, léelos cuidadosamente antes de usar nuestros servicios.
            </p>
          </section>

          {/* Aceptación de términos */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">1. Aceptación de los Términos</h2>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-4">
              <p className="text-slate-700 leading-relaxed">
                Al crear una cuenta o utilizar cualquier función de Neurobity, confirmas que:
              </p>
              <ul className="mt-3 space-y-2 text-slate-700">
                <li className="flex gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Has leído y comprendido estos términos</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Aceptas estar legalmente vinculado por ellos</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600">•</span>
                  <span>Tienes la capacidad legal para aceptar estos términos</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Uso del servicio */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <User className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">2. Uso del Servicio</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-slate-900 mb-2">Cuenta de Usuario</h3>
                <p className="text-slate-700 leading-relaxed">
                  Para acceder a ciertas funciones, debes crear una cuenta. Eres responsable de:
                </p>
                <ul className="mt-2 space-y-1 text-slate-700 ml-4">
                  <li className="flex gap-2">
                    <span className="text-blue-600">→</span>
                    <span>Mantener la confidencialidad de tu contraseña</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">→</span>
                    <span>Todas las actividades que ocurran bajo tu cuenta</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">→</span>
                    <span>Notificarnos inmediatamente sobre cualquier uso no autorizado</span>
                  </li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <h3 className="font-semibold text-green-900 mb-2">Usos Permitidos</h3>
                <ul className="text-sm text-green-800 space-y-1">
                  <li>✓ Acceder al contenido educativo para tu aprendizaje personal</li>
                  <li>✓ Realizar pruebas y ejercicios de evaluación</li>
                  <li>✓ Compartir tu progreso con educadores autorizados</li>
                  <li>✓ Interactuar de forma respetuosa con otros usuarios</li>
                </ul>
              </div>

              <div className="bg-red-50 rounded-lg p-4">
                <h3 className="font-semibold text-red-900 mb-2">Usos Prohibidos</h3>
                <ul className="text-sm text-red-800 space-y-1">
                  <li>✗ Compartir o revender el acceso a la plataforma</li>
                  <li>✗ Copiar, modificar o distribuir nuestro contenido sin autorización</li>
                  <li>✗ Intentar hackear o comprometer la seguridad del sistema</li>
                  <li>✗ Usar la plataforma para actividades ilegales o fraudulentas</li>
                  <li>✗ Hacer trampa en las evaluaciones o pruebas</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Propiedad intelectual */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Scale className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">3. Propiedad Intelectual</h2>
            </div>
            <p className="text-slate-700 leading-relaxed mb-4">
              Todo el contenido de Neurobity, incluyendo textos, gráficos, logos, software y materiales educativos, 
              está protegido por derechos de autor y otras leyes de propiedad intelectual.
            </p>
            <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-4">
              <p className="text-slate-700">
                <strong className="text-amber-900">Importante:</strong> No puedes reproducir, distribuir, modificar o 
                crear obras derivadas de nuestro contenido sin autorización expresa por escrito.
              </p>
            </div>
          </section>

          {/* Privacidad y datos */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Privacidad y Protección de Datos</h2>
            <p className="text-slate-700 leading-relaxed">
              El uso de tu información personal está regido por nuestra{' '}
              <a href="/privacidad" className="text-blue-600 hover:underline font-semibold">Política de Privacidad</a>.
              Al usar Neurobity, también aceptas cómo recopilamos, usamos y protegemos tus datos según esa política.
            </p>
          </section>

          {/* Pagos y suscripciones */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Pagos y Suscripciones</h2>
            <div className="space-y-4 text-slate-700">
              <p className="leading-relaxed">
                Algunos servicios de Neurobity pueden requerir el pago de tarifas de suscripción:
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Las tarifas se cobran por adelantado según el plan seleccionado</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Las suscripciones se renuevan automáticamente a menos que las canceles</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Los reembolsos están sujetos a nuestra política de reembolsos</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span>Nos reservamos el derecho de modificar los precios con aviso previo</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Limitación de responsabilidad */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">6. Limitación de Responsabilidad</h2>
            </div>
            <div className="bg-slate-50 rounded-lg p-4 space-y-3 text-slate-700">
              <p className="leading-relaxed">
                Neurobity proporciona el servicio tal cual y según disponibilidad. No garantizamos que:
              </p>
              <ul className="space-y-1 ml-4">
                <li>• El servicio será ininterrumpido o libre de errores</li>
                <li>• Los resultados obtenidos serán precisos o confiables</li>
                <li>• Los defectos serán corregidos inmediatamente</li>
              </ul>
              <p className="leading-relaxed mt-4">
                <strong>No seremos responsables</strong> por daños indirectos, incidentales o consecuentes derivados 
                del uso o imposibilidad de uso de nuestros servicios.
              </p>
            </div>
          </section>

          {/* Terminación */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <XCircle className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">7. Terminación del Servicio</h2>
            </div>
            <p className="text-slate-700 leading-relaxed mb-3">
              Podemos suspender o cancelar tu acceso a Neurobity en cualquier momento, sin previo aviso, por:
            </p>
            <ul className="space-y-2 text-slate-700">
              <li className="flex gap-2">
                <span className="text-red-600">✗</span>
                <span>Violación de estos términos y condiciones</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600">✗</span>
                <span>Comportamiento fraudulento o abusivo</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600">✗</span>
                <span>Falta de pago de las tarifas aplicables</span>
              </li>
              <li className="flex gap-2">
                <span className="text-red-600">✗</span>
                <span>Cualquier otra razón que consideremos apropiada</span>
              </li>
            </ul>
            <p className="text-slate-700 leading-relaxed mt-3">
              Tú también puedes cancelar tu cuenta en cualquier momento desde la configuración de tu perfil.
            </p>
          </section>

          {/* Modificaciones */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Modificaciones a los Términos</h2>
            <p className="text-slate-700 leading-relaxed">
              Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios significativos 
              serán notificados mediante un aviso en la plataforma o por correo electrónico. El uso continuado 
              del servicio después de las modificaciones constituye tu aceptación de los nuevos términos.
            </p>
          </section>

          {/* Ley aplicable */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Ley Aplicable y Jurisdicción</h2>
            <p className="text-slate-700 leading-relaxed">
              Estos términos se regirán e interpretarán de acuerdo con las leyes aplicables en tu jurisdicción. 
              Cualquier disputa relacionada con estos términos se resolverá en los tribunales competentes.
            </p>
          </section>

          {/* Contacto */}
          <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">10. Contacto</h2>
            </div>
            <p className="text-slate-700 leading-relaxed mb-3">
              Si tienes preguntas sobre estos términos y condiciones, puedes contactarnos en:
            </p>
            <div className="flex items-center gap-2 text-blue-600 font-semibold">
              <Mail className="w-5 h-5" />
              <a href="mailto:codezun@gmail.com" className="hover:underline">
                codezun@gmail.com
              </a>
            </div>
          </section>

          {/* Divisibilidad */}
          <section className="pt-6 border-t border-slate-200">
            <p className="text-sm text-slate-600 leading-relaxed">
              <strong>Divisibilidad:</strong> Si alguna disposición de estos términos se considera inválida o inaplicable, 
              las disposiciones restantes continuarán en pleno vigor y efecto. Al usar Neurobity, reconoces que has leído, 
              comprendido y aceptado estar sujeto a estos términos y condiciones.
            </p>
          </section>

        </div>
      </div>
    </div>
  );
}