import React, { useState } from 'react';
import { Screen } from '../types';
import { ArrowLeft, ArrowRight, CheckCircle, PiggyBank, Target, Calendar, Info } from 'lucide-react';
import { formatUSD } from '../utils/format';

export function CreatePocketScreen({ navigate }: { navigate: (s: Screen) => void }) {
  const [name, setName] = useState('');
  const [goal, setGoal] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && goal && date) {
      navigate('pocket_detail');
    }
  };

  return (
    <div className="flex justify-center relative w-full">
      <div className="w-full max-w-[800px] space-y-8">
        {/* Page Header */}
        <div className="flex flex-col gap-1">
          <div 
            onClick={() => navigate('savings_hub')}
            className="flex items-center gap-2 mb-2 cursor-pointer text-brand-gray hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Volver</span>
          </div>
          <h2 className="text-2xl font-semibold text-white">Crear Nuevo Bolsillo</h2>
          <p className="text-brand-gray text-sm">Organiza tu dinero y alcanza tus metas financieras más rápido.</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: Form */}
          <div className="space-y-6">
            <section className="bg-brand-surface border border-brand-border rounded-[20px] p-6 shadow-xl">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-[12px] font-medium text-brand-gray uppercase tracking-[0.06em] mb-2">Nombre del Bolsillo</label>
                  <input 
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full h-12 bg-brand-elevated border border-brand-border rounded-[10px] px-4 text-white text-sm focus:border-brand-orange focus:ring-1 focus:ring-brand-orange transition-all outline-none" 
                    placeholder="Ej. Viaje a Europa, Nuevo Auto..." 
                  />
                </div>
                
                <div>
                  <label className="block text-[12px] font-medium text-brand-gray uppercase tracking-[0.06em] mb-2">Meta de Ahorro</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray">$</span>
                    <input 
                      type="number"
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      required
                      min="1"
                      className="w-full h-12 bg-brand-elevated border border-brand-border rounded-[10px] pl-8 pr-4 text-white font-mono text-sm focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-all" 
                      placeholder="0.00" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[12px] font-medium text-brand-gray uppercase tracking-[0.06em] mb-2">Fecha límite para tu meta</label>
                  <input 
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                    className="w-full h-12 bg-brand-elevated border border-brand-border rounded-[10px] px-4 text-white text-sm focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-all" 
                  />
                </div>

                <div className="pt-6">
                  <button 
                    type="submit"
                    disabled={!name || !goal || !date}
                    className="w-full h-14 bg-brand-orange hover:bg-brand-orange/90 disabled:bg-brand-elevated disabled:text-brand-gray disabled:cursor-not-allowed text-white font-semibold rounded-[10px] transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-orange/20"
                  >
                    Crear Bolsillo
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </section>
          </div>

          {/* Right Column: Preview & Info */}
          <div className="space-y-6">
            <section className="bg-brand-surface border border-brand-border rounded-[20px] p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <PiggyBank className="w-32 h-32 text-brand-orange" />
              </div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Vista Previa</h3>
              
              <div className="relative z-10 p-6 rounded-[20px] bg-brand-elevated border border-brand-border/50 shadow-inner">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#FF5C1A15] border border-brand-orange/30 flex items-center justify-center">
                    <Target className="w-6 h-6 text-brand-orange" />
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-medium text-brand-gray uppercase tracking-wider mb-1">Meta</p>
                    <p className="text-lg font-bold font-mono text-white">{goal ? formatUSD(Number(goal)) : formatUSD(0)}</p>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold text-white mb-1">{name || 'Nombre del Bolsillo'}</h4>
                <p className="text-sm text-brand-gray mb-6">Ahorro programado</p>
                
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-emerald-500">0% completado</span>
                    <span className="text-brand-gray">Faltan {goal ? formatUSD(Number(goal)) : formatUSD(0)}</span>
                  </div>
                  <div className="w-full bg-brand-surface h-2 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-orange" style={{ width: '0%' }}></div>
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-brand-elevated border border-brand-border/50">
                  <Info className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <p className="text-xs text-brand-gray leading-relaxed">
                    El dinero en tus bolsillos sigue siendo tuyo y puedes retirarlo en cualquier momento sin penalizaciones.
                  </p>
                </div>
                <div className="flex items-start gap-3 p-4 rounded-xl bg-brand-elevated border border-brand-border/50">
                  <PiggyBank className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <p className="text-xs text-brand-gray leading-relaxed">
                    Tus ahorros generan rendimientos diarios automáticamente con una tasa preferencial del 10.5% E.A.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
