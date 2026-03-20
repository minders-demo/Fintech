import React, { useState } from 'react';
import { Screen } from '../types';
import { ArrowLeft, ArrowRight, CheckCircle, Info, Percent, ShieldCheck, Wallet } from 'lucide-react';
import { formatUSD } from '../utils/format';

export function CreditOfferScreen({ navigate }: { navigate: (s: Screen) => void }) {
  const [amount, setAmount] = useState(5000);
  const [term, setTerm] = useState(24);

  const tea = 0.285;
  const monthlyRate = Math.pow(1 + tea, 1/12) - 1;
  const insurance = amount * 0.0009;
  const installment = (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -term)) + insurance;

  return (
    <div className="flex justify-center relative w-full">
      <div className="w-full max-w-[800px] space-y-8">
        {/* Page Header */}
        <div className="flex flex-col gap-1">
          <div 
            onClick={() => navigate('dashboard')}
            className="flex items-center gap-2 mb-2 cursor-pointer text-brand-gray hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Volver al inicio</span>
          </div>
          <h2 className="text-2xl font-semibold text-white">¡Tienes un crédito pre-aprobado!</h2>
          <p className="text-brand-gray text-sm">Personaliza tu préstamo y recíbelo en minutos, sin papeleos.</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Configuration */}
          <div className="space-y-6">
            <section className="bg-brand-surface border border-brand-border rounded-[20px] p-6 shadow-xl space-y-8">
              {/* Amount Slider */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider">¿Cuánto necesitas?</h3>
                  <div className="flex items-center gap-1 bg-brand-elevated px-4 py-2 rounded-xl border border-brand-border focus-within:border-brand-orange transition-all">
                    <span className="text-2xl font-bold font-mono text-brand-orange">$</span>
                    <input 
                      type="text"
                      value={amount.toLocaleString()}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '');
                        const num = parseInt(val) || 0;
                        if (num <= 15000) {
                          setAmount(num);
                        }
                      }}
                      className="bg-transparent text-2xl font-bold font-mono text-brand-orange outline-none w-40 text-right"
                    />
                  </div>
                </div>
                <input 
                  type="range" 
                  min="500" 
                  max="15000" 
                  step="100" 
                  value={amount > 15000 ? 15000 : amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full h-2 bg-brand-elevated rounded-lg appearance-none cursor-pointer accent-brand-orange"
                />
                <div className="flex justify-between mt-2 text-xs text-brand-gray font-mono">
                  <span>{formatUSD(500)}</span>
                  <span>{formatUSD(15000)}</span>
                </div>
              </div>

              {/* Term Selection */}
              <div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">¿En cuánto tiempo quieres pagarlo?</h3>
                <div className="grid grid-cols-3 gap-3">
                  {[12, 24, 36, 48, 60].map((t) => (
                    <button
                      key={t}
                      onClick={() => setTerm(t)}
                      className={`h-12 rounded-xl border text-sm font-semibold transition-all ${term === t ? 'bg-brand-orange border-brand-orange text-white' : 'bg-brand-elevated border-brand-border text-brand-gray hover:border-brand-orange/50 hover:text-white'}`}
                    >
                      {t} meses
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* Benefits */}
            <section className="bg-brand-elevated border border-brand-border rounded-[20px] p-6 space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#4ADE8015] flex items-center justify-center shrink-0">
                  <CheckCircle className="w-5 h-5 text-emerald-500" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Aprobación Inmediata</h4>
                  <p className="text-xs text-brand-gray mt-1">Sin codeudor, ni estudios de crédito adicionales.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#FF5C1A15] flex items-center justify-center shrink-0">
                  <Wallet className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Desembolso al Instante</h4>
                  <p className="text-xs text-brand-gray mt-1">El dinero se abona directamente a tu cuenta Minders.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center shrink-0">
                  <Percent className="w-5 h-5 text-brand-gray" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white">Tasa Fija Preferencial</h4>
                  <p className="text-xs text-brand-gray mt-1">Tu cuota no cambiará durante toda la vida del crédito.</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Summary & CTA */}
          <div className="space-y-6">
            <section className="bg-brand-surface border border-brand-border rounded-[20px] p-6 shadow-xl flex flex-col h-full">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Resumen de tu Crédito</h3>
              
              <div className="flex-1 space-y-6">
                <div className="p-6 rounded-xl bg-brand-elevated border border-brand-border text-center">
                  <p className="text-[11px] font-medium text-brand-gray uppercase tracking-wider mb-2">Cuota Mensual Estimada</p>
                  <h4 className="text-4xl font-bold font-mono text-brand-orange">{formatUSD(Math.round(installment))}</h4>
                  <p className="text-xs text-brand-gray mt-2">Incluye capital, intereses y seguro de vida.</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-brand-border/50">
                    <span className="text-sm text-brand-gray">Monto Solicitado</span>
                    <span className="text-sm font-bold font-mono text-white">{formatUSD(amount)}</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b border-brand-border/50">
                    <span className="text-sm text-brand-gray">Plazo</span>
                    <span className="text-sm font-semibold text-white">{term} meses</span>
                  </div>
                  <div className="flex items-center justify-between pb-4 border-b border-brand-border/50">
                    <span className="text-sm text-brand-gray">Tasa Efectiva Anual (TEA)</span>
                    <span className="text-sm font-semibold text-white">28.5%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-brand-gray">Seguro de Vida (Mensual)</span>
                    <span className="text-sm font-semibold text-white">{formatUSD(Math.round(insurance))}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#FF5C1A10] border border-brand-orange/20">
                  <Info className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <p className="text-xs text-brand-gray leading-relaxed">
                    Esta es una simulación. Los valores finales pueden variar ligeramente según la fecha de desembolso y facturación.
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <button 
                  onClick={() => navigate('credit_sign')}
                  className="w-full h-14 bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold rounded-[10px] transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-orange/20"
                >
                  Continuar a la Firma
                  <ArrowRight className="w-5 h-5" />
                </button>
                <div className="flex items-center justify-center gap-2 mt-4 text-xs text-brand-gray">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <span>Proceso 100% seguro y encriptado</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
