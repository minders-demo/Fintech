import React, { useState } from 'react';
import { Screen, TransferData } from '../types';
import { ArrowLeft, ArrowRight, CheckCircle, FileText, ShieldCheck, PenTool } from 'lucide-react';
import { formatUSD } from '../utils/format';

export function CreditSignScreen({ navigate }: { navigate: (s: Screen, data?: TransferData) => void }) {
  const [agreed, setAgreed] = useState(false);
  const [signed, setSigned] = useState(false);

  return (
    <div className="flex justify-center relative w-full">
      <div className="w-full max-w-[800px] space-y-8">
        {/* Page Header */}
        <div className="flex flex-col gap-1">
          <div 
            onClick={() => navigate('credit_offer')}
            className="flex items-center gap-2 mb-2 cursor-pointer text-brand-gray hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Volver a la oferta</span>
          </div>
          <h2 className="text-2xl font-semibold text-white">Firma de Pagaré</h2>
          <p className="text-brand-gray text-sm">Revisa las condiciones finales y firma digitalmente para recibir tu crédito.</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Summary & Terms */}
          <div className="space-y-6">
            <section className="bg-brand-surface border border-brand-border rounded-[20px] p-6 shadow-xl">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Resumen del Crédito</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-brand-border/50">
                  <span className="text-sm text-brand-gray">Monto Aprobado</span>
                  <span className="text-lg font-bold font-mono text-white">{formatUSD(5000)}</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-brand-border/50">
                  <span className="text-sm text-brand-gray">Plazo</span>
                  <span className="text-sm font-semibold text-white">24 meses</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-brand-border/50">
                  <span className="text-sm text-brand-gray">Tasa Efectiva Anual (TEA)</span>
                  <span className="text-sm font-semibold text-white">28.5%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-brand-gray">Cuota Mensual Estimada</span>
                  <span className="text-lg font-bold font-mono text-brand-orange">{formatUSD(275.40)}</span>
                </div>
              </div>
            </section>

            <section className="bg-brand-elevated border border-brand-border rounded-[20px] p-6">
              <div className="flex items-start gap-4">
                <ShieldCheck className="w-6 h-6 text-emerald-500 shrink-0 mt-1" />
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Firma Digital Segura</h4>
                  <p className="text-xs text-brand-gray leading-relaxed">
                    Este proceso utiliza tecnología de firma electrónica certificada, con la misma validez legal que una firma manuscrita según la Ley 527 de 1999. Tu IP y datos de dispositivo serán registrados por seguridad.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Signature Box */}
          <div className="space-y-6">
            <section className="bg-brand-surface border border-brand-border rounded-[20px] p-6 shadow-xl flex flex-col h-full">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6 flex items-center gap-2">
                <PenTool className="w-4 h-4 text-brand-orange" />
                Área de Firma
              </h3>

              <div className="flex-1 flex flex-col justify-center space-y-6">
                {/* Document Link */}
                <div className="p-4 rounded-xl bg-brand-elevated border border-brand-border flex items-center justify-between group cursor-pointer hover:border-brand-orange/50 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-surface border border-brand-border flex items-center justify-center">
                      <FileText className="w-5 h-5 text-brand-orange" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white group-hover:text-brand-orange transition-colors">Pagaré y Carta de Instrucciones</p>
                      <p className="text-[11px] text-brand-gray mt-0.5">PDF • 4 páginas</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-brand-gray group-hover:text-brand-orange transition-colors" />
                </div>

                {/* Checkbox */}
                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative flex items-center justify-center mt-0.5">
                    <input 
                      type="checkbox" 
                      className="peer sr-only"
                      checked={agreed}
                      onChange={(e) => setAgreed(e.target.checked)}
                    />
                    <div className="w-5 h-5 rounded border-2 border-brand-border bg-brand-elevated peer-checked:bg-brand-orange peer-checked:border-brand-orange transition-all flex items-center justify-center">
                      <CheckCircle className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" />
                    </div>
                  </div>
                  <span className="text-xs text-brand-gray leading-relaxed group-hover:text-white transition-colors">
                    He leído y acepto el contenido del Pagaré, la Carta de Instrucciones y autorizo el reporte a centrales de riesgo.
                  </span>
                </label>

                {/* Signature Input (Simulated) */}
                <div className="space-y-3 pt-4 border-t border-brand-border/50">
                  <label className="block text-[11px] font-medium text-brand-gray uppercase tracking-wider">Para firmar, escribe tu nombre completo</label>
                  <input 
                    type="text"
                    placeholder="Ej. Sergio Gómez"
                    className="w-full h-12 bg-brand-elevated border border-brand-border rounded-[10px] px-4 text-white text-sm focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-all"
                    onChange={(e) => setSigned(e.target.value.length > 5)}
                  />
                </div>
              </div>

              <div className="mt-8">
                <button 
                  onClick={() => navigate('operation_success', { amount: '', recipient: '', successType: 'credit' })}
                  disabled={!agreed || !signed}
                  className="w-full h-12 bg-brand-orange hover:bg-brand-orange/90 disabled:bg-brand-elevated disabled:text-brand-gray disabled:cursor-not-allowed text-white font-semibold rounded-[10px] transition-all flex items-center justify-center gap-2"
                >
                  Firmar y Recibir Dinero
                  <CheckCircle className="w-4 h-4" />
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
