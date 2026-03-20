import React, { useState } from 'react';
import { Screen } from '../types';
import { ArrowLeft, ArrowRight, CheckCircle, Shield, ShieldCheck, ShieldAlert, HeartPulse, Activity, Zap } from 'lucide-react';

export function InsuranceWizardScreen({ navigate }: { navigate: (s: Screen) => void }) {
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  return (
    <div className="flex justify-center relative w-full">
      <div className="w-full max-w-[800px] space-y-8">
        {/* Page Header */}
        <div className="flex flex-col gap-1">
          <div 
            onClick={() => {
              if (step > 1) setStep(step - 1);
              else navigate('insurance_hub');
            }}
            className="flex items-center gap-2 mb-2 cursor-pointer text-brand-gray hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Volver</span>
          </div>
          <h2 className="text-2xl font-semibold text-white">Contratar Seguro de Vida</h2>
          <p className="text-brand-gray text-sm">Protege a los que más quieres con un plan a tu medida.</p>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-brand-elevated h-2 rounded-full overflow-hidden">
          <div 
            className="h-full bg-brand-orange transition-all duration-500" 
            style={{ width: `${(step / 3) * 100}%` }}
          ></div>
        </div>

        {/* Step 1: Select Plan */}
        {step === 1 && (
          <div className="space-y-6 animate-fade-in-up">
            <h3 className="text-lg font-semibold text-white mb-4">Selecciona tu plan ideal</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Plan Básico */}
              <div 
                onClick={() => setSelectedPlan('basico')}
                className={`bg-brand-surface border rounded-[20px] p-6 shadow-xl cursor-pointer transition-all relative overflow-hidden group ${selectedPlan === 'basico' ? 'border-brand-orange ring-2 ring-brand-orange/20' : 'border-brand-border hover:border-brand-orange/50'}`}
              >
                {selectedPlan === 'basico' && (
                  <div className="absolute top-4 right-4">
                    <CheckCircle className="w-5 h-5 text-brand-orange" />
                  </div>
                )}
                <div className="w-12 h-12 rounded-full bg-brand-elevated border border-brand-border flex items-center justify-center mb-4 group-hover:bg-brand-orange/10 transition-colors">
                  <Shield className="w-6 h-6 text-brand-gray group-hover:text-brand-orange transition-colors" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">Plan Básico</h4>
                <p className="text-xs text-brand-gray mb-4 h-8">Cobertura esencial para tu tranquilidad.</p>
                <div className="mb-6">
                  <span className="text-2xl font-bold font-mono text-white">$15.000</span>
                  <span className="text-xs text-brand-gray">/mes</span>
                </div>
                <ul className="space-y-3 text-sm text-brand-gray">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Fallecimiento: $50.000.000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Incapacidad: $25.000.000</span>
                  </li>
                </ul>
              </div>

              {/* Plan Integral (Recomendado) */}
              <div 
                onClick={() => setSelectedPlan('integral')}
                className={`bg-brand-surface border rounded-[20px] p-6 shadow-xl cursor-pointer transition-all relative overflow-hidden group ${selectedPlan === 'integral' ? 'border-brand-orange ring-2 ring-brand-orange/20' : 'border-brand-orange/50 hover:border-brand-orange'}`}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-brand-orange text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-b-lg">
                  Recomendado
                </div>
                {selectedPlan === 'integral' && (
                  <div className="absolute top-4 right-4">
                    <CheckCircle className="w-5 h-5 text-brand-orange" />
                  </div>
                )}
                <div className="w-12 h-12 rounded-full bg-[#FF5C1A15] border border-brand-orange/30 flex items-center justify-center mb-4 mt-2">
                  <HeartPulse className="w-6 h-6 text-brand-orange" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">Plan Integral</h4>
                <p className="text-xs text-brand-gray mb-4 h-8">Protección completa para ti y tu familia.</p>
                <div className="mb-6">
                  <span className="text-2xl font-bold font-mono text-brand-orange">$45.000</span>
                  <span className="text-xs text-brand-gray">/mes</span>
                </div>
                <ul className="space-y-3 text-sm text-brand-gray">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-white font-medium">Fallecimiento: $150.000.000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-white font-medium">Incapacidad: $150.000.000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Enfermedades graves: $75.000.000</span>
                  </li>
                </ul>
              </div>

              {/* Plan Premium */}
              <div 
                onClick={() => setSelectedPlan('premium')}
                className={`bg-brand-surface border rounded-[20px] p-6 shadow-xl cursor-pointer transition-all relative overflow-hidden group ${selectedPlan === 'premium' ? 'border-brand-orange ring-2 ring-brand-orange/20' : 'border-brand-border hover:border-brand-orange/50'}`}
              >
                {selectedPlan === 'premium' && (
                  <div className="absolute top-4 right-4">
                    <CheckCircle className="w-5 h-5 text-brand-orange" />
                  </div>
                )}
                <div className="w-12 h-12 rounded-full bg-brand-elevated border border-brand-border flex items-center justify-center mb-4 group-hover:bg-brand-orange/10 transition-colors">
                  <ShieldCheck className="w-6 h-6 text-brand-gray group-hover:text-brand-orange transition-colors" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">Plan Premium</h4>
                <p className="text-xs text-brand-gray mb-4 h-8">Máxima cobertura y beneficios exclusivos.</p>
                <div className="mb-6">
                  <span className="text-2xl font-bold font-mono text-white">$85.000</span>
                  <span className="text-xs text-brand-gray">/mes</span>
                </div>
                <ul className="space-y-3 text-sm text-brand-gray">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Fallecimiento: $300.000.000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Incapacidad: $300.000.000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Enfermedades graves: $150.000.000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Renta diaria hospitalización</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex justify-end mt-8">
              <button 
                onClick={() => setStep(2)}
                disabled={!selectedPlan}
                className="h-12 px-8 bg-brand-orange hover:bg-brand-orange/90 disabled:bg-brand-elevated disabled:text-brand-gray disabled:cursor-not-allowed text-white font-semibold rounded-[10px] transition-all flex items-center gap-2"
              >
                Continuar
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Beneficiaries */}
        {step === 2 && (
          <div className="space-y-6 animate-fade-in-up">
            <h3 className="text-lg font-semibold text-white mb-4">Designa a tus beneficiarios</h3>
            <div className="bg-brand-surface border border-brand-border rounded-[20px] p-8 shadow-xl">
              <p className="text-sm text-brand-gray mb-6">¿Quiénes recibirán la suma asegurada en caso de fallecimiento? Puedes asignar hasta 4 personas.</p>
              
              <div className="space-y-6">
                {/* Beneficiary 1 */}
                <div className="p-6 rounded-xl border border-brand-border bg-brand-elevated relative">
                  <div className="absolute top-0 right-0 bg-brand-orange text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">50%</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-medium text-brand-gray uppercase tracking-wider mb-1">Nombre completo</label>
                      <input type="text" defaultValue="María Gómez" className="w-full h-10 bg-brand-surface border border-brand-border rounded-lg px-3 text-white text-sm focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-medium text-brand-gray uppercase tracking-wider mb-1">Parentesco</label>
                      <select className="w-full h-10 bg-brand-surface border border-brand-border rounded-lg px-3 text-white text-sm focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-all appearance-none">
                        <option>Cónyuge</option>
                        <option>Hijo/a</option>
                        <option>Padre/Madre</option>
                        <option>Hermano/a</option>
                        <option>Otro</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-medium text-brand-gray uppercase tracking-wider mb-1">Documento de identidad</label>
                      <input type="text" defaultValue="52.345.678" className="w-full h-10 bg-brand-surface border border-brand-border rounded-lg px-3 text-white text-sm focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-medium text-brand-gray uppercase tracking-wider mb-1">Porcentaje</label>
                      <input type="number" defaultValue="50" className="w-full h-10 bg-brand-surface border border-brand-border rounded-lg px-3 text-white text-sm focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-all" />
                    </div>
                  </div>
                </div>

                {/* Beneficiary 2 */}
                <div className="p-6 rounded-xl border border-brand-border bg-brand-elevated relative">
                  <div className="absolute top-0 right-0 bg-brand-orange text-white text-[10px] font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">50%</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-medium text-brand-gray uppercase tracking-wider mb-1">Nombre completo</label>
                      <input type="text" defaultValue="Carlos Pérez" className="w-full h-10 bg-brand-surface border border-brand-border rounded-lg px-3 text-white text-sm focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-medium text-brand-gray uppercase tracking-wider mb-1">Parentesco</label>
                      <select className="w-full h-10 bg-brand-surface border border-brand-border rounded-lg px-3 text-white text-sm focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-all appearance-none">
                        <option>Hijo/a</option>
                        <option>Cónyuge</option>
                        <option>Padre/Madre</option>
                        <option>Hermano/a</option>
                        <option>Otro</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-medium text-brand-gray uppercase tracking-wider mb-1">Documento de identidad</label>
                      <input type="text" defaultValue="1.023.456.789" className="w-full h-10 bg-brand-surface border border-brand-border rounded-lg px-3 text-white text-sm focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-all" />
                    </div>
                    <div>
                      <label className="block text-[10px] font-medium text-brand-gray uppercase tracking-wider mb-1">Porcentaje</label>
                      <input type="number" defaultValue="50" className="w-full h-10 bg-brand-surface border border-brand-border rounded-lg px-3 text-white text-sm focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-all" />
                    </div>
                  </div>
                </div>

                <button className="w-full h-12 border border-dashed border-brand-border rounded-xl text-brand-gray text-sm font-semibold hover:text-white hover:border-brand-orange transition-colors flex items-center justify-center gap-2">
                  + Agregar Beneficiario
                </button>
              </div>
            </div>
            <div className="flex justify-between mt-8">
              <button 
                onClick={() => setStep(1)}
                className="h-12 px-8 bg-brand-elevated border border-brand-border text-brand-gray hover:text-white font-semibold rounded-[10px] transition-all flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Atrás
              </button>
              <button 
                onClick={() => setStep(3)}
                className="h-12 px-8 bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold rounded-[10px] transition-all flex items-center gap-2"
              >
                Revisar y Confirmar
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Review & Confirm */}
        {step === 3 && (
          <div className="space-y-6 animate-fade-in-up">
            <h3 className="text-lg font-semibold text-white mb-4">Revisa tu póliza</h3>
            <div className="bg-brand-surface border border-brand-border rounded-[20px] p-8 shadow-xl">
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-brand-border/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FF5C1A15] border border-brand-orange/30 flex items-center justify-center">
                    <HeartPulse className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Seguro de Vida Integral</h4>
                    <p className="text-sm text-brand-gray">Pago mensual automático</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-[11px] font-medium text-brand-gray uppercase tracking-wider mb-1">Prima Mensual</p>
                  <h3 className="text-3xl font-bold font-mono text-brand-orange">$45.000</h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h5 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Resumen de Coberturas</h5>
                  <ul className="space-y-3 text-sm text-brand-gray">
                    <li className="flex items-center justify-between">
                      <span>Fallecimiento</span>
                      <span className="font-mono text-white">$150.000.000</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Incapacidad Total</span>
                      <span className="font-mono text-white">$150.000.000</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Enfermedades Graves</span>
                      <span className="font-mono text-white">$75.000.000</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Beneficiarios</h5>
                  <ul className="space-y-3 text-sm text-brand-gray">
                    <li className="flex items-center justify-between">
                      <span>María Gómez (Cónyuge)</span>
                      <span className="font-mono text-emerald-500 font-bold">50%</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span>Carlos Pérez (Hijo)</span>
                      <span className="font-mono text-emerald-500 font-bold">50%</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-brand-elevated border border-brand-border rounded-xl p-4 flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <p className="text-xs text-brand-gray leading-relaxed">
                  Al confirmar, autorizas el débito automático mensual de $45.000 de tu saldo disponible. La cobertura iniciará inmediatamente después de procesado el primer pago. Puedes cancelar en cualquier momento desde la configuración de tu póliza.
                </p>
              </div>
            </div>
            <div className="flex justify-between mt-8">
              <button 
                onClick={() => setStep(2)}
                className="h-12 px-8 bg-brand-elevated border border-brand-border text-brand-gray hover:text-white font-semibold rounded-[10px] transition-all flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Atrás
              </button>
              <button 
                onClick={() => navigate('operation_success')}
                className="h-12 px-8 bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold rounded-[10px] transition-all flex items-center gap-2"
              >
                Confirmar y Pagar
                <CheckCircle className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
