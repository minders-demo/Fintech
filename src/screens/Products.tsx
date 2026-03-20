import React from 'react';
import { Screen } from '../types';

export function ProductsScreen({ navigate }: { navigate: (s: Screen) => void }) {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-[32px] font-bold text-white tracking-[-1px] leading-tight">Productos y Servicios</h1>
          <p className="text-brand-gray mt-1">Explora todo lo que Minders Pay tiene para ofrecerte.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Tarjetas */}
        <div className="bg-brand-sidebar border border-brand-border rounded-[20px] p-6 shadow-lg flex flex-col">
          <div className="w-12 h-12 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange mb-6">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Tarjetas</h3>
          <p className="text-sm text-brand-gray mb-6 flex-1">Gestiona tus tarjetas físicas y virtuales. Bloquea, desbloquea y revisa tus límites al instante.</p>
          <button onClick={() => navigate('cards')} className="w-full h-11 bg-brand-card hover:bg-brand-border border border-brand-border rounded-xl text-sm font-semibold text-white transition-colors">Ver mis tarjetas</button>
        </div>

        {/* Créditos */}
        <div className="bg-brand-sidebar border border-brand-border rounded-[20px] p-6 shadow-lg flex flex-col relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-2xl"></div>
          <div className="w-12 h-12 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange mb-6 relative z-10">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2 relative z-10">Créditos</h3>
          <p className="text-sm text-brand-gray mb-6 flex-1 relative z-10">Accede a préstamos personales con tasas preferenciales. Acreditación inmediata en tu cuenta.</p>
          <div className="bg-brand-orange/10 border border-brand-orange/20 rounded-xl p-3 mb-6 relative z-10">
            <p className="text-xs text-brand-orange font-semibold">¡Tienes $500.000 preaprobados!</p>
          </div>
          <button onClick={() => navigate('credit_offer')} className="w-full h-11 bg-brand-orange hover:bg-orange-600 text-white rounded-xl text-sm font-semibold transition-colors relative z-10">Solicitar crédito</button>
        </div>

        {/* Inversiones */}
        <div className="bg-brand-sidebar border border-brand-border rounded-[20px] p-6 shadow-lg flex flex-col">
          <div className="w-12 h-12 bg-green-400/10 rounded-2xl flex items-center justify-center text-green-400 mb-6">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Inversiones</h3>
          <p className="text-sm text-brand-gray mb-6 flex-1">Haz crecer tu dinero con nuestros fondos comunes de inversión. Rendimientos diarios y rescate en el acto.</p>
          <button onClick={() => navigate('finance')} className="w-full h-11 bg-brand-card hover:bg-brand-border border border-brand-border rounded-xl text-sm font-semibold text-white transition-colors">Ir a Inversiones</button>
        </div>

        {/* Seguros */}
        <div className="bg-brand-sidebar border border-brand-border rounded-[20px] p-6 shadow-lg flex flex-col">
          <div className="w-12 h-12 bg-blue-400/10 rounded-2xl flex items-center justify-center text-blue-400 mb-6">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Seguros</h3>
          <p className="text-sm text-brand-gray mb-6 flex-1">Protege lo que más te importa. Seguros de vida, hogar, tecnología y movilidad a tu medida.</p>
          <button onClick={() => navigate('insurance_hub')} className="w-full h-11 bg-brand-card hover:bg-brand-border border border-brand-border rounded-xl text-sm font-semibold text-white transition-colors">Cotizar seguro</button>
        </div>

        {/* Pago de Servicios */}
        <div className="bg-brand-sidebar border border-brand-border rounded-[20px] p-6 shadow-lg flex flex-col">
          <div className="w-12 h-12 bg-purple-400/10 rounded-2xl flex items-center justify-center text-purple-400 mb-6">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Pago de Servicios</h3>
          <p className="text-sm text-brand-gray mb-6 flex-1">Paga más de 5.000 servicios desde la app. Escanea el código de barras o busca por empresa.</p>
          <button onClick={() => navigate('pay_services')} className="w-full h-11 bg-brand-card hover:bg-brand-border border border-brand-border rounded-xl text-sm font-semibold text-white transition-colors">Pagar un servicio</button>
        </div>

        {/* Recargas */}
        <div className="bg-brand-sidebar border border-brand-border rounded-[20px] p-6 shadow-lg flex flex-col">
          <div className="w-12 h-12 bg-yellow-400/10 rounded-2xl flex items-center justify-center text-yellow-400 mb-6">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">Recargas</h3>
          <p className="text-sm text-brand-gray mb-6 flex-1">Recarga saldo en tu celular, tarjeta de transporte o servicios prepagos al instante.</p>
          <button onClick={() => navigate('mobile_topup')} className="w-full h-11 bg-brand-card hover:bg-brand-border border border-brand-border rounded-xl text-sm font-semibold text-white transition-colors">Hacer una recarga</button>
        </div>
      </div>
    </div>
  );
}
