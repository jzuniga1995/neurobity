'use client';

import React, { useState, useEffect } from 'react';
import { Cookie, X, Settings } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: true,
    analytics: true,
    marketing: false,
  });

useEffect(() => {
    // Usar un flag para evitar setState durante el montaje inicial
    let mounted = true;
    
    const checkConsent = () => {
      const cookieConsent = localStorage.getItem('cookieConsent');
      if (mounted) {
        setIsMounted(true);
        if (!cookieConsent) {
          setIsVisible(true);
        }
      }
    };
    
    checkConsent();
    
    return () => {
      mounted = false;
    };
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      functional: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const onlyNecessary = {
      necessary: true,
      functional: false,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(onlyNecessary));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    const savedPreferences = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('cookieConsent', JSON.stringify(savedPreferences));
    setIsVisible(false);
  };

  // No renderizar nada hasta que el componente esté montado en el cliente
  if (!isMounted || !isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fadeIn">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-2xl border border-slate-200">
        
        {!showSettings ? (
          // Vista simple
          <div className="p-6">
            <div className="flex items-start gap-4">
              
              {/* Icono */}
              <div className="flex-shrink-0">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <Cookie className="w-6 h-6 text-blue-600" />
                </div>
              </div>

              {/* Contenido */}
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  🍪 Usamos Cookies
                </h3>
                <p className="text-sm text-slate-600 mb-4">
                  Utilizamos cookies para mejorar tu experiencia. Puedes aceptar todas o personalizar tus preferencias.{' '}
                  <a href="/cookies" className="text-blue-600 hover:underline font-semibold">
                    Más información
                  </a>
                </p>

                {/* Botones */}
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={handleAcceptAll}
                    className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md"
                  >
                    Aceptar Todas
                  </button>
                  <button
                    onClick={handleRejectAll}
                    className="px-6 py-2 border-2 border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 transition-colors"
                  >
                    Solo Necesarias
                  </button>
                  <button
                    onClick={() => setShowSettings(true)}
                    className="px-6 py-2 text-slate-600 hover:text-slate-900 font-semibold transition-colors flex items-center gap-2"
                  >
                    <Settings className="w-4 h-4" />
                    Personalizar
                  </button>
                </div>
              </div>

              {/* Botón cerrar */}
              <button
                onClick={handleRejectAll}
                className="flex-shrink-0 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

            </div>
          </div>
        ) : (
          // Vista con configuración detallada
          <div className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Settings className="w-5 h-5 text-blue-600" />
                Personalizar Cookies
              </h3>
              <button
                onClick={() => setShowSettings(false)}
                className="text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 mb-4">
              
              {/* Cookies Necesarias */}
              <div className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-semibold text-slate-900 text-sm">Necesarias</h4>
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full font-semibold">
                      Siempre activas
                    </span>
                  </div>
                  <p className="text-xs text-slate-600">Esenciales para el funcionamiento del sitio</p>
                </div>
                <div className="w-10 h-5 bg-green-500 rounded-full flex items-center px-0.5">
                  <div className="w-4 h-4 bg-white rounded-full ml-auto"></div>
                </div>
              </div>

              {/* Cookies Funcionales */}
              <div className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900 text-sm mb-1">Funcionales</h4>
                  <p className="text-xs text-slate-600">Recuerdan tus preferencias</p>
                </div>
                <button
                  onClick={() => setPreferences(prev => ({ ...prev, functional: !prev.functional }))}
                  className={`w-10 h-5 rounded-full transition-colors ${
                    preferences.functional ? 'bg-blue-500' : 'bg-slate-300'
                  } flex items-center px-0.5`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    preferences.functional ? 'translate-x-5' : 'translate-x-0'
                  }`}></div>
                </button>
              </div>

              {/* Cookies Analíticas */}
              <div className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900 text-sm mb-1">Analíticas</h4>
                  <p className="text-xs text-slate-600">Nos ayudan a mejorar</p>
                </div>
                <button
                  onClick={() => setPreferences(prev => ({ ...prev, analytics: !prev.analytics }))}
                  className={`w-10 h-5 rounded-full transition-colors ${
                    preferences.analytics ? 'bg-blue-500' : 'bg-slate-300'
                  } flex items-center px-0.5`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    preferences.analytics ? 'translate-x-5' : 'translate-x-0'
                  }`}></div>
                </button>
              </div>

              {/* Cookies de Marketing */}
              <div className="flex items-center justify-between p-3 bg-white border border-slate-200 rounded-lg">
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900 text-sm mb-1">Marketing</h4>
                  <p className="text-xs text-slate-600">Personalizan anuncios</p>
                </div>
                <button
                  onClick={() => setPreferences(prev => ({ ...prev, marketing: !prev.marketing }))}
                  className={`w-10 h-5 rounded-full transition-colors ${
                    preferences.marketing ? 'bg-blue-500' : 'bg-slate-300'
                  } flex items-center px-0.5`}
                >
                  <div className={`w-4 h-4 bg-white rounded-full transition-transform ${
                    preferences.marketing ? 'translate-x-5' : 'translate-x-0'
                  }`}></div>
                </button>
              </div>

            </div>

            {/* Botones de acción */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleSavePreferences}
                className="flex-1 px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
              >
                Guardar Preferencias
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-6 py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors"
              >
                Aceptar Todas
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}