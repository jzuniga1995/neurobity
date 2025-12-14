import React from 'react';
import { Cookie, Mail, Settings, Info, Shield, ToggleLeft, Trash2 } from 'lucide-react';

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Cookie className="w-8 h-8 text-blue-600" />
            <h1 className="text-4xl font-bold text-slate-900">Política de Cookies</h1>
          </div>
          <p className="text-slate-600">Última actualización: 9 de noviembre de 2025</p>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-10">
          
          {/* Introducción */}
          <section>
            <p className="text-lg text-slate-700 leading-relaxed">
              En <strong className="text-blue-600">Neurobity</strong>, utilizamos cookies y tecnologías similares para 
              mejorar tu experiencia, analizar el uso de nuestra plataforma y personalizar el contenido. 
              Esta política explica qué son las cookies, cómo las usamos y cómo puedes controlarlas.
            </p>
          </section>

          {/* Qué son las cookies */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Info className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">1. ¿Qué son las Cookies?</h2>
            </div>
            <div className="bg-blue-50 border-l-4 border-blue-600 rounded-lg p-4">
              <p className="text-slate-700 leading-relaxed mb-3">
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (computadora, tablet o móvil) 
                cuando visitas un sitio web. Permiten que el sitio web recuerde tus acciones y preferencias durante un 
                período de tiempo.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Las cookies no dañan tu dispositivo y no contienen virus. Son fundamentales para el funcionamiento de 
                muchos sitios web modernos.
              </p>
            </div>
          </section>

          {/* Tipos de cookies */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Cookie className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">2. Tipos de Cookies que Utilizamos</h2>
            </div>
            
            <div className="space-y-4">
              {/* Cookies esenciales */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-5">
                <div className="flex items-start gap-3 mb-3">
                  <Shield className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-green-900 text-lg">Cookies Esenciales (Necesarias)</h3>
                    <p className="text-sm text-green-700 mt-1">Estas cookies son imprescindibles para el funcionamiento del sitio</p>
                  </div>
                </div>
                <ul className="space-y-2 text-slate-700 ml-8">
                  <li className="flex gap-2">
                    <span className="text-green-600">•</span>
                    <span><strong>Autenticación:</strong> Mantienen tu sesión activa mientras navegas</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600">•</span>
                    <span><strong>Seguridad:</strong> Protegen contra ataques y fraudes</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-green-600">•</span>
                    <span><strong>Preferencias:</strong> Recuerdan tus ajustes básicos</span>
                  </li>
                </ul>
                <p className="text-xs text-green-800 mt-3 italic">
                  ⚠️ Estas cookies no pueden desactivarse ya que el sitio no funcionaría correctamente sin ellas.
                </p>
              </div>

              {/* Cookies funcionales */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
                <div className="flex items-start gap-3 mb-3">
                  <Settings className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-blue-900 text-lg">Cookies Funcionales</h3>
                    <p className="text-sm text-blue-700 mt-1">Mejoran tu experiencia recordando tus preferencias</p>
                  </div>
                </div>
                <ul className="space-y-2 text-slate-700 ml-8">
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span><strong>Idioma y región:</strong> Recuerdan tu idioma preferido</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span><strong>Tema:</strong> Guardan si prefieres modo claro u oscuro</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-blue-600">•</span>
                    <span><strong>Progreso:</strong> Recuerdan dónde dejaste tus lecciones</span>
                  </li>
                </ul>
                <p className="text-xs text-blue-800 mt-3">
                  Duración típica: Hasta 1 año
                </p>
              </div>

              {/* Cookies analíticas */}
              <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
                <div className="flex items-start gap-3 mb-3">
                  <Info className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-purple-900 text-lg">Cookies Analíticas</h3>
                    <p className="text-sm text-purple-700 mt-1">Nos ayudan a entender cómo usas la plataforma</p>
                  </div>
                </div>
                <ul className="space-y-2 text-slate-700 ml-8">
                  <li className="flex gap-2">
                    <span className="text-purple-600">•</span>
                    <span><strong>Uso:</strong> Páginas visitadas, tiempo de navegación</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple-600">•</span>
                    <span><strong>Rendimiento:</strong> Errores y velocidad de carga</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-purple-600">•</span>
                    <span><strong>Mejoras:</strong> Identificar áreas de mejora</span>
                  </li>
                </ul>
                <p className="text-xs text-purple-800 mt-3">
                  Los datos se analizan de forma agregada y anónima
                </p>
              </div>

              {/* Cookies de marketing */}
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-5">
                <div className="flex items-start gap-3 mb-3">
                  <ToggleLeft className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-orange-900 text-lg">Cookies de Marketing (Opcional)</h3>
                    <p className="text-sm text-orange-700 mt-1">Personalizan el contenido y publicidad</p>
                  </div>
                </div>
                <ul className="space-y-2 text-slate-700 ml-8">
                  <li className="flex gap-2">
                    <span className="text-orange-600">•</span>
                    <span><strong>Personalización:</strong> Contenido relevante según tus intereses</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-600">•</span>
                    <span><strong>Publicidad:</strong> Anuncios más relevantes para ti</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-600">•</span>
                    <span><strong>Redes sociales:</strong> Permiten compartir contenido fácilmente</span>
                  </li>
                </ul>
                <p className="text-xs text-orange-800 mt-3">
                  Puedes desactivar estas cookies en cualquier momento
                </p>
              </div>
            </div>
          </section>

          {/* Cookies de terceros */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Cookies de Terceros</h2>
            <p className="text-slate-700 leading-relaxed mb-4">
              Algunos servicios externos que utilizamos pueden establecer sus propias cookies. Estos incluyen:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">Google Analytics</h3>
                <p className="text-sm text-slate-600">Para analizar el tráfico y comportamiento de usuarios</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">Servicios de Pago</h3>
                <p className="text-sm text-slate-600">Para procesar pagos de forma segura</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">Redes Sociales</h3>
                <p className="text-sm text-slate-600">Para compartir contenido e integración social</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-4">
                <h3 className="font-semibold text-slate-900 mb-2">Soporte en Línea</h3>
                <p className="text-sm text-slate-600">Para chat de ayuda y soporte técnico</p>
              </div>
            </div>
          </section>

          {/* Cómo gestionar cookies */}
          <section>
            <div className="flex items-center gap-3 mb-4">
              <Settings className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">4. Cómo Gestionar las Cookies</h2>
            </div>
            
            <div className="space-y-4">
              <div className="bg-blue-50 rounded-lg p-5">
                <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                  <Cookie className="w-5 h-5" />
                  Gestión en Neurobity
                </h3>
                <p className="text-slate-700 mb-3">
                  Puedes gestionar tus preferencias de cookies directamente en nuestra plataforma:
                </p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                  Configurar Cookies
                </button>
              </div>

              <div className="bg-slate-50 rounded-lg p-5">
                <h3 className="font-semibold text-slate-900 mb-3 flex items-center gap-2">
                  <Trash2 className="w-5 h-5" />
                  Gestión en tu Navegador
                </h3>
                <p className="text-slate-700 mb-3">
                  También puedes controlar las cookies desde la configuración de tu navegador:
                </p>
                <div className="space-y-2 text-sm text-slate-700">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">→</span>
                    <div>
                      <strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">→</span>
                    <div>
                      <strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">→</span>
                    <div>
                      <strong>Safari:</strong> Preferencias → Privacidad → Cookies y datos
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">→</span>
                    <div>
                      <strong>Edge:</strong> Configuración → Privacidad, búsqueda y servicios
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-500 rounded-lg p-4">
                <p className="text-amber-900">
                  <strong>⚠️ Importante:</strong> Bloquear todas las cookies puede afectar la funcionalidad del sitio 
                  y limitar tu experiencia en Neurobity.
                </p>
              </div>
            </div>
          </section>

          {/* Duración de las cookies */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Duración de las Cookies</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-300 px-4 py-3 font-semibold text-slate-900">Tipo</th>
                    <th className="border border-slate-300 px-4 py-3 font-semibold text-slate-900">Duración</th>
                    <th className="border border-slate-300 px-4 py-3 font-semibold text-slate-900">Descripción</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700">
                  <tr>
                    <td className="border border-slate-300 px-4 py-3">Sesión</td>
                    <td className="border border-slate-300 px-4 py-3">Al cerrar navegador</td>
                    <td className="border border-slate-300 px-4 py-3">Se eliminan cuando cierras el navegador</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 px-4 py-3">Persistentes</td>
                    <td className="border border-slate-300 px-4 py-3">Hasta 1 año</td>
                    <td className="border border-slate-300 px-4 py-3">Permanecen hasta su fecha de expiración</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Tus derechos */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Tus Derechos</h2>
            <div className="bg-blue-50 rounded-lg p-5">
              <p className="text-slate-700 leading-relaxed mb-3">
                Tienes derecho a:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                  <span>Aceptar o rechazar cookies no esenciales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                  <span>Cambiar tus preferencias de cookies en cualquier momento</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                  <span>Eliminar las cookies almacenadas en tu dispositivo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold text-xl">✓</span>
                  <span>Solicitar información sobre las cookies que utilizamos</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Actualizaciones */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Actualizaciones de esta Política</h2>
            <p className="text-slate-700 leading-relaxed">
              Podemos actualizar esta política de cookies periódicamente para reflejar cambios en las tecnologías que 
              utilizamos o en las regulaciones aplicables. Te recomendamos revisar esta página regularmente para mantenerte 
              informado. La fecha de la última actualización siempre estará visible al inicio del documento.
            </p>
          </section>

          {/* Contacto */}
          <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
            <div className="flex items-center gap-3 mb-4">
              <Mail className="w-6 h-6 text-blue-600" />
              <h2 className="text-2xl font-bold text-slate-900">Contacto</h2>
            </div>
            <p className="text-slate-700 leading-relaxed mb-3">
              Si tienes preguntas sobre nuestra política de cookies o necesitas más información, contáctanos:
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