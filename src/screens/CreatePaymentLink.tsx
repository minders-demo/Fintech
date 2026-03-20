import React, { useState } from 'react';
import { Screen } from '../types';
import { ArrowLeft, CheckCircle, Copy, Download, Mail, MessageCircle } from 'lucide-react';
import { formatUSD } from '../utils/format';

export function CreatePaymentLinkScreen({ navigate }: { navigate: (s: Screen) => void }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <div className="flex justify-center relative w-full">
      <div className="w-full max-w-[600px] space-y-8">
        {/* Page Header */}
        <div className="flex flex-col gap-1">
          <div 
            onClick={() => navigate('business_dashboard')}
            className="flex items-center gap-2 mb-2 cursor-pointer text-brand-gray hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Mi Negocio</span>
          </div>
          <h2 className="text-2xl font-semibold text-white">Crear Link de Cobro</h2>
          <p className="text-brand-gray text-sm">Configura los detalles de tu cobro para compartirlo con tus clientes.</p>
        </div>

        {/* Creation Form & Preview */}
        <div className="grid grid-cols-1 gap-8">
          <section className="bg-brand-surface border border-brand-border rounded-[14px] p-6 shadow-2xl">
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setShowSuccess(true); }}>
              <div>
                <label className="block text-[12px] font-medium text-brand-gray uppercase tracking-[0.06em] mb-2">Nombre del producto o servicio</label>
                <input 
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full h-12 bg-brand-elevated border border-brand-border rounded-[10px] px-4 text-white text-sm focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all outline-none" 
                  placeholder="Ej. Consultoría Digital" 
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[12px] font-medium text-brand-gray uppercase tracking-[0.06em] mb-2">Monto</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray">$</span>
                    <input 
                      type="text"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full h-12 bg-brand-elevated border border-brand-border rounded-[10px] pl-8 pr-4 text-white font-mono text-sm focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-all" 
                      placeholder="0,00" 
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-[12px] font-medium text-brand-gray uppercase tracking-[0.06em] mb-2">Vencimiento</label>
                  <input 
                    type="date"
                    className="w-full h-12 bg-brand-elevated border border-brand-border rounded-[10px] px-4 text-white text-sm focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-all" 
                  />
                </div>
              </div>
              <div>
                <label className="block text-[12px] font-medium text-brand-gray uppercase tracking-[0.06em] mb-2">Descripción (opcional)</label>
                <textarea 
                  className="w-full h-24 bg-brand-elevated border border-brand-border rounded-[10px] p-4 text-white text-sm focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-all resize-none" 
                  placeholder="Detalla qué incluye este pago..."
                ></textarea>
              </div>
              <div>
                <label className="block text-[12px] font-medium text-brand-gray uppercase tracking-[0.06em] mb-2">Límite de usos</label>
                <select className="w-full h-12 bg-brand-elevated border border-brand-border rounded-[10px] px-4 text-white text-sm focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-all appearance-none cursor-pointer">
                  <option>Sin límite (Ilimitado)</option>
                  <option>1 solo uso</option>
                  <option>5 usos</option>
                  <option>10 usos</option>
                  <option>Personalizado</option>
                </select>
              </div>
              <button 
                type="submit"
                className="w-full h-11 bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold rounded-[10px] active:scale-[0.97] transition-all flex items-center justify-center gap-2"
              >
                Generar Link de Cobro
              </button>
            </form>
          </section>

          {/* Preview Section */}
          <section className="space-y-4">
            <div className="flex items-center justify-between px-2">
              <h3 className="text-sm font-semibold text-brand-gray uppercase tracking-wider">Preview de pago</h3>
              <span className="text-[11px] text-brand-gray/70">Vista del cliente</span>
            </div>
            <div className="bg-brand-surface border border-brand-border rounded-[20px] p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-orange to-brand-orange/80"></div>
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-brand-elevated border border-brand-border flex items-center justify-center">
                  <span className="text-brand-orange font-bold">M</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold">{name || 'Tu Servicio'}</h4>
                  <p className="text-brand-gray text-sm">Pago único a Minders Pay</p>
                </div>
                <div className="py-4 w-full border-y border-brand-border/50">
                  <span className="text-[11px] uppercase text-brand-gray/70 tracking-widest">Monto a pagar</span>
                  <div className="text-3xl font-bold mt-1 font-mono">{amount ? formatUSD(Number(amount)) : formatUSD(0)}</div>
                </div>
                <div className="w-full space-y-3 pt-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-brand-gray">Vencimiento</span>
                    <span className="text-white">Sin límite</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-brand-gray">Métodos aceptados</span>
                    <div className="flex gap-1">
                      <div className="w-4 h-4 bg-brand-gray/50 rounded-sm"></div>
                      <div className="w-4 h-4 bg-brand-gray/50 rounded-sm"></div>
                    </div>
                  </div>
                </div>
                <button className="w-full h-11 bg-brand-orange/40 text-white/50 font-semibold rounded-[10px] mt-4 cursor-not-allowed" disabled>
                  Pagar ahora
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Success Modal */}
        {showSuccess && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowSuccess(false)}></div>
            <div className="bg-brand-elevated border border-brand-border w-full max-w-[440px] rounded-[20px] p-8 relative shadow-2xl animate-fade-in-up">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-emerald-500" />
                </div>
                <h3 className="text-xl font-bold mb-1">¡Link creado con éxito!</h3>
                <p className="text-brand-gray text-sm mb-6">Comparte este link para empezar a recibir pagos.</p>
                
                <div className="w-full bg-brand-surface border border-brand-border rounded-lg p-3 flex items-center justify-between mb-8">
                  <span className="text-xs font-mono text-brand-orange truncate mr-2">pay.minderspay.com/j/a1b2c3</span>
                  <button className="text-brand-gray hover:text-white"><Copy className="w-4 h-4" /></button>
                </div>
                
                <div className="bg-white p-3 rounded-xl mb-8">
                  <img alt="Payment QR" className="w-[180px] h-[180px]" src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=pay.minderspay.com/j/a1b2c3" />
                </div>
                
                <div className="grid grid-cols-2 gap-3 w-full">
                  <button className="h-11 bg-brand-orange text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-brand-orange/90 transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    WhatsApp
                  </button>
                  <button className="h-11 bg-brand-surface border border-brand-border text-brand-gray text-sm font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-brand-elevated transition-colors">
                    <Mail className="w-4 h-4" />
                    Email
                  </button>
                  <button className="h-11 bg-brand-surface border border-brand-border text-brand-gray text-sm font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-brand-elevated transition-colors">
                    <Copy className="w-4 h-4" />
                    Copiar
                  </button>
                  <button className="h-11 bg-brand-surface border border-brand-border text-brand-gray text-sm font-semibold rounded-lg flex items-center justify-center gap-2 hover:bg-brand-elevated transition-colors">
                    <Download className="w-4 h-4" />
                    Descargar
                  </button>
                </div>
                <button 
                  className="mt-8 text-brand-gray/70 hover:text-white text-xs underline decoration-brand-gray/70 transition-all"
                  onClick={() => {
                    setShowSuccess(false);
                    setName('');
                    setAmount('');
                  }}
                >
                  Crear otro link
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
