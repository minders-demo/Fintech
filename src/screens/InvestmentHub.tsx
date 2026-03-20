import React from 'react';
import { Screen } from '../types';
import { Landmark, LineChart, PiggyBank, ArrowRight, TrendingUp, Shield, HelpCircle } from 'lucide-react';

export function InvestmentHubScreen({ navigate }: { navigate: (s: Screen) => void }) {
  return (
    <div className="flex flex-col gap-8 max-w-[1200px] mx-auto w-full">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-white text-4xl font-black tracking-tight mb-2">Centro de Inversiones</h1>
          <p className="text-brand-gray text-lg">Haz que tu dinero trabaje para ti con nuestras opciones.</p>
        </div>
        
        {/* Total Investment Summary */}
        <div className="bg-brand-card border border-brand-border rounded-2xl p-6 shadow-lg flex items-center gap-6 min-w-[300px]">
          <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
            <PiggyBank className="w-6 h-6" />
          </div>
          <div>
            <p className="text-brand-gray text-sm font-bold uppercase tracking-wider mb-1">Total Invertido</p>
            <div className="flex items-baseline gap-2">
              <p className="text-white text-2xl font-black">$ 15.450.000</p>
              <span className="text-emerald-500 text-sm font-bold flex items-center">
                <TrendingUp className="w-3 h-3 mr-1" /> +12.4%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Investment Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* CDT Digital Card */}
        <div 
          onClick={() => navigate('cdt_digital')}
          className="bg-gradient-to-br from-brand-card to-brand-bg border border-brand-border rounded-3xl p-8 flex flex-col gap-6 cursor-pointer group hover:border-brand-orange/50 transition-all relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
          
          <div className="flex justify-between items-start relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-brand-orange flex items-center justify-center text-white shadow-lg shadow-brand-orange/20">
              <Landmark className="w-7 h-7" />
            </div>
            <span className="bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Bajo Riesgo</span>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-white text-2xl font-bold mb-2 group-hover:text-brand-orange transition-colors">CDT Digital</h3>
            <p className="text-brand-gray text-sm leading-relaxed">Inversión a plazo fijo con rentabilidad garantizada. Protegido por FOGAFÍN.</p>
          </div>

          <div className="mt-auto pt-6 border-t border-brand-border/50 relative z-10">
            <div className="flex justify-between items-end mb-4">
              <div>
                <p className="text-brand-gray text-xs font-bold uppercase tracking-wider mb-1">Tasa Efectiva Anual</p>
                <p className="text-white text-3xl font-black">Hasta 13.1%</p>
              </div>
            </div>
            <button className="w-full flex items-center justify-center gap-2 bg-brand-bg border border-brand-border text-white py-3 rounded-xl font-bold group-hover:bg-brand-orange group-hover:border-brand-orange transition-all">
              Simular Inversión <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Daily Yield Card */}
        <div 
          onClick={() => navigate('daily_yield')}
          className="bg-gradient-to-br from-brand-card to-brand-bg border border-brand-border rounded-3xl p-8 flex flex-col gap-6 cursor-pointer group hover:border-brand-orange/50 transition-all relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
          
          <div className="flex justify-between items-start relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
              <TrendingUp className="w-7 h-7" />
            </div>
            <span className="bg-emerald-500/10 text-emerald-500 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Liquidez Inmediata</span>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-white text-2xl font-bold mb-2 group-hover:text-emerald-500 transition-colors">Rendimiento Diario</h3>
            <p className="text-brand-gray text-sm leading-relaxed">Tu saldo disponible genera ganancias todos los días. Úsalo cuando quieras.</p>
          </div>

          <div className="mt-auto pt-6 border-t border-brand-border/50 relative z-10">
            <div className="flex justify-between items-end mb-4">
              <div>
                <p className="text-brand-gray text-xs font-bold uppercase tracking-wider mb-1">Tasa Nominal Anual</p>
                <p className="text-white text-3xl font-black">82.5%</p>
              </div>
            </div>
            <button className="w-full flex items-center justify-center gap-2 bg-brand-bg border border-brand-border text-white py-3 rounded-xl font-bold group-hover:bg-emerald-500 group-hover:border-emerald-500 transition-all">
              Activar Rendimiento <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Crypto Market Card */}
        <div 
          onClick={() => navigate('market_hub')}
          className="bg-gradient-to-br from-brand-card to-brand-bg border border-brand-border rounded-3xl p-8 flex flex-col gap-6 cursor-pointer group hover:border-brand-orange/50 transition-all relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
          
          <div className="flex justify-between items-start relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-blue-500 flex items-center justify-center text-white shadow-lg shadow-blue-500/20">
              <LineChart className="w-7 h-7" />
            </div>
            <span className="bg-brand-orange/10 text-brand-orange px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Alto Riesgo</span>
          </div>
          
          <div className="relative z-10">
            <h3 className="text-white text-2xl font-bold mb-2 group-hover:text-blue-500 transition-colors">Mercado Cripto</h3>
            <p className="text-brand-gray text-sm leading-relaxed">Compra, vende y guarda las principales criptomonedas del mercado 24/7.</p>
          </div>

          <div className="mt-auto pt-6 border-t border-brand-border/50 relative z-10">
            <div className="flex justify-between items-end mb-4">
              <div>
                <p className="text-brand-gray text-xs font-bold uppercase tracking-wider mb-1">Activos Disponibles</p>
                <p className="text-white text-3xl font-black">+50</p>
              </div>
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-[#f7931a] border-2 border-brand-card flex items-center justify-center text-white text-xs font-bold">₿</div>
                <div className="w-8 h-8 rounded-full bg-[#627eea] border-2 border-brand-card flex items-center justify-center text-white text-xs font-bold">Ξ</div>
                <div className="w-8 h-8 rounded-full bg-[#26a17b] border-2 border-brand-card flex items-center justify-center text-white text-xs font-bold">₮</div>
              </div>
            </div>
            <button className="w-full flex items-center justify-center gap-2 bg-brand-bg border border-brand-border text-white py-3 rounded-xl font-bold group-hover:bg-blue-500 group-hover:border-blue-500 transition-all">
              Explorar Mercado <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Educational / Info Banner */}
      <div className="bg-brand-card border border-brand-border rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 mt-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-brand-bg flex items-center justify-center text-brand-gray shrink-0">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-white font-bold mb-1">Invierte con Seguridad</h4>
            <p className="text-brand-gray text-sm">Conoce tu perfil de riesgo antes de invertir. Minders Pay está regulado por la SFC.</p>
          </div>
        </div>
        <button className="flex items-center gap-2 text-brand-orange font-bold text-sm hover:underline whitespace-nowrap">
          <HelpCircle className="w-4 h-4" />
          Centro de Ayuda
        </button>
      </div>
    </div>
  );
}
