import React from 'react';
import { Screen } from '../types';
import { PiggyBank, PlusCircle, Wallet, Calculator, Rocket, Verified, Calendar, TrendingUp, CheckSquare } from 'lucide-react';
import { formatUSD } from '../utils/format';

export function CdtDigitalScreen({ navigate }: { navigate: (s: Screen) => void }) {
  return (
    <div className="flex flex-col gap-10">
      {/* Hero Section */}
      <div>
        <h1 className="text-white text-5xl font-black tracking-tight mb-2">CDT Digital</h1>
        <p className="text-brand-gray text-lg">Haz crecer tus ahorros con la mejor tasa del mercado garantizada.</p>
      </div>

      {/* Tabs Navigation */}
      <div className="border-b border-brand-border">
        <div className="flex gap-10">
          <button className="flex flex-col items-center justify-center border-b-2 border-brand-orange text-brand-orange pb-4 pt-2 group">
            <div className="flex items-center gap-2">
              <PlusCircle className="w-5 h-5" />
              <span className="text-sm font-bold tracking-wide uppercase">Abrir</span>
            </div>
          </button>
          <button className="flex flex-col items-center justify-center border-b-2 border-transparent text-brand-gray pb-4 pt-2 hover:text-brand-orange transition-all group">
            <div className="flex items-center gap-2">
              <Wallet className="w-5 h-5" />
              <span className="text-sm font-bold tracking-wide uppercase">Mis CDTs</span>
            </div>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Simulator */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="bg-brand-card rounded-2xl p-8 shadow-xl border border-brand-border overflow-hidden relative">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-brand-orange/10 rounded-lg">
                <Calculator className="text-brand-orange w-6 h-6" />
              </div>
              <h3 className="text-white text-2xl font-bold">Simulador de Inversión</h3>
            </div>

            {/* Input Amount */}
            <div className="space-y-6 mb-10">
              <div className="flex justify-between items-end">
                <label className="text-brand-gray text-sm font-semibold uppercase tracking-wider">Monto a Invertir</label>
                <span className="text-3xl font-black text-brand-orange">{formatUSD(15000)}</span>
              </div>
              <div className="relative flex items-center group">
                <div className="h-2 w-full bg-brand-border rounded-full overflow-hidden">
                  <div className="h-full w-[45%] bg-brand-orange"></div>
                </div>
                <div className="absolute left-[45%] -ml-3 w-6 h-6 rounded-full bg-brand-orange border-4 border-brand-orange shadow-lg cursor-pointer transform hover:scale-110 transition-transform"></div>
              </div>
              <div className="flex justify-between text-xs text-brand-gray font-medium">
                <span>{formatUSD(1000)}</span>
                <span>{formatUSD(100000)}</span>
              </div>
            </div>

            {/* Term Selector */}
            <div className="space-y-4 mb-10">
              <label className="text-brand-gray text-sm font-semibold uppercase tracking-wider block">Plazo de inversión (Días)</label>
              <div className="grid grid-cols-4 gap-3">
                <button className="py-3 px-2 rounded-xl border border-brand-border text-center hover:border-brand-orange transition-all">
                  <span className="block text-lg font-bold text-white">30</span>
                  <span className="text-[10px] text-brand-gray uppercase">Días</span>
                </button>
                <button className="py-3 px-2 rounded-xl border-2 border-brand-orange bg-brand-orange/5 text-center transition-all">
                  <span className="block text-lg font-bold text-brand-orange">90</span>
                  <span className="text-[10px] text-brand-orange uppercase">Días</span>
                </button>
                <button className="py-3 px-2 rounded-xl border border-brand-border text-center hover:border-brand-orange transition-all">
                  <span className="block text-lg font-bold text-white">180</span>
                  <span className="text-[10px] text-brand-gray uppercase">Días</span>
                </button>
                <button className="py-3 px-2 rounded-xl border border-brand-border text-center hover:border-brand-orange transition-all">
                  <span className="block text-lg font-bold text-white">360</span>
                  <span className="text-[10px] text-brand-gray uppercase">Días</span>
                </button>
              </div>
            </div>

            {/* Results Summary */}
            <div className="bg-brand-bg/50 rounded-2xl p-6 border border-brand-border flex flex-col md:flex-row justify-between gap-6">
              <div className="flex-1">
                <p className="text-brand-gray text-xs font-bold uppercase mb-1">Rendimiento Estimado (12.4% E.A.)</p>
                <p className="text-2xl font-bold text-emerald-500">+{formatUSD(465)}</p>
              </div>
              <div className="hidden md:block w-px bg-brand-border"></div>
              <div className="flex-1">
                <p className="text-brand-gray text-xs font-bold uppercase mb-1">Total al Finalizar</p>
                <p className="text-2xl font-bold text-white">{formatUSD(15465)}</p>
              </div>
            </div>

            <button 
              onClick={() => navigate('operation_success')}
              className="w-full mt-8 bg-brand-orange hover:bg-brand-orange/90 text-white py-5 rounded-2xl font-black text-lg shadow-xl shadow-brand-orange/20 transition-all flex items-center justify-center gap-3"
            >
              <Rocket className="w-6 h-6" />
              ABRIR MI CDT AHORA
            </button>
          </div>
        </div>

        {/* Right Column: Timeline & Info */}
        <div className="lg:col-span-5 space-y-8">
          {/* Premium Preview Card */}
          <div className="rounded-2xl overflow-hidden aspect-video relative group shadow-2xl bg-gradient-to-tr from-brand-bg to-brand-card border border-brand-border">
            <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-brand-bg/20 to-transparent p-8 flex flex-col justify-end">
              <span className="bg-brand-orange px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase w-fit mb-3 text-white">Tasa Premium</span>
              <h4 className="text-2xl font-bold text-white mb-2">Seguridad y Respaldo</h4>
              <p className="text-brand-gray text-sm">Tu inversión está protegida por FOGAFÍN. Comienza hoy mismo desde tu celular.</p>
            </div>
          </div>

          {/* Timeline View */}
          <div className="bg-brand-card rounded-2xl p-8 shadow-xl border border-brand-border/50">
            <h3 className="text-white text-lg font-bold mb-6">Línea de Tiempo</h3>
            <div className="relative flex flex-col gap-8">
              {/* Line */}
              <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-brand-border"></div>
              
              <div className="relative flex gap-6">
                <div className="w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center z-10 shadow-lg shadow-brand-orange/30 text-white">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-white font-bold">Hoy: Apertura Digital</p>
                  <p className="text-brand-gray text-sm">Depósito inicial de {formatUSD(15000)}</p>
                </div>
              </div>

              <div className="relative flex gap-6 opacity-60">
                <div className="w-8 h-8 rounded-full bg-brand-border flex items-center justify-center z-10 text-brand-gray">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-white font-bold">Día 45: Generando Intereses</p>
                  <p className="text-brand-gray text-sm">Ganancia estimada: {formatUSD(232.5)}</p>
                </div>
              </div>

              <div className="relative flex gap-6">
                <div className="w-8 h-8 rounded-full border-2 border-brand-orange bg-brand-card flex items-center justify-center z-10 text-brand-orange">
                  <CheckSquare className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-brand-orange font-bold">Día 90: Vencimiento</p>
                  <p className="text-brand-gray text-sm">Recibe {formatUSD(15465)} en tu cuenta</p>
                </div>
              </div>
            </div>
          </div>

          {/* Tip Card */}
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-2xl p-6 flex items-start gap-4">
            <Verified className="text-emerald-500 w-6 h-6 shrink-0" />
            <div>
              <h5 className="text-emerald-500 font-bold mb-1">Dato curioso</h5>
              <p className="text-emerald-200/80 text-sm">Si reinviertes tus ganancias al finalizar el periodo, podrías alcanzar una tasa compuesta superior al 13.1%.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
