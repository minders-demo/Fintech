import React from 'react';
import { Screen } from '../types';
import { Sparkles, TrendingUp, ShieldCheck, PlusCircle, Activity, Clock, CreditCard } from 'lucide-react';
import { formatUSD } from '../utils/format';

export function DailyYieldScreen({ navigate }: { navigate: (s: Screen) => void }) {
  return (
    <div className="flex flex-col max-w-[1200px] flex-1 gap-8 mx-auto">
      {/* Breadcrumbs & Header */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 text-brand-gray text-sm">
          <button onClick={() => navigate('dashboard')} className="hover:text-brand-orange">Home</button>
          <span className="text-xs">&gt;</span>
          <span className="text-white font-medium">Fondo Rendimiento Diario</span>
        </div>
        <div className="flex flex-wrap justify-between items-end gap-4 mt-4">
          <div className="flex flex-col gap-2">
            <h1 className="text-white text-4xl font-black leading-tight tracking-tight">Fondo Rendimiento Diario</h1>
            <p className="text-brand-gray text-lg">Tus saldos generan rendimientos automáticamente cada 24 horas.</p>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => navigate('transfer')}
              className="flex items-center justify-center rounded-xl h-12 px-6 bg-brand-orange/20 text-brand-orange font-bold hover:opacity-80 transition-opacity"
            >
              Retirar
            </button>
            <button 
              onClick={() => navigate('transfer')}
              className="flex items-center justify-center rounded-xl h-12 px-6 bg-brand-orange text-white font-bold hover:opacity-90 transition-opacity shadow-lg shadow-brand-orange/20"
            >
              Invertir ahora
            </button>
          </div>
        </div>
      </div>

      {/* Badge Section */}
      <div className="flex">
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-bold text-xs tracking-wider uppercase">
          <Sparkles className="w-4 h-4" />
          Rinde automáticamente
        </div>
      </div>

      {/* Key Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col gap-3 rounded-2xl p-6 bg-brand-card border border-brand-border shadow-sm">
          <p className="text-brand-gray text-sm font-medium">TNA (Tasa Nominal Anual)</p>
          <div className="flex items-baseline gap-2">
            <p className="text-white text-3xl font-black leading-tight">82.5%</p>
            <span className="text-emerald-500 text-sm font-bold flex items-center">
              <TrendingUp className="w-3 h-3 mr-1" /> 2.1%
            </span>
          </div>
          <p className="text-brand-gray text-xs mt-1">Actualizado hace 12 min</p>
        </div>

        <div className="flex flex-col gap-3 rounded-2xl p-6 bg-brand-card border border-brand-border shadow-sm">
          <p className="text-brand-gray text-sm font-medium">Ganancia Total Acumulada</p>
          <div className="flex items-baseline gap-2">
            <p className="text-white text-3xl font-black leading-tight">{formatUSD(12450.32)}</p>
            <span className="text-emerald-500 text-sm font-bold flex items-center">
              <TrendingUp className="w-3 h-3 mr-1" /> 15.4%
            </span>
          </div>
          <p className="text-brand-gray text-xs mt-1">Interés compuesto aplicado</p>
        </div>

        <div className="flex flex-col gap-3 rounded-2xl p-6 bg-brand-orange border border-brand-orange shadow-lg shadow-brand-orange/20">
          <p className="text-white/80 text-sm font-medium">Saldo en Inversión</p>
          <div className="flex items-baseline gap-2">
            <p className="text-white text-3xl font-black leading-tight">{formatUSD(450000)}</p>
          </div>
          <div className="flex items-center gap-1 text-white/90 text-xs font-medium mt-1">
            <ShieldCheck className="w-3 h-3" />
            Fondos disponibles 24/7
          </div>
        </div>
      </div>

      {/* Performance Chart & How it works */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart Area */}
        <div className="lg:col-span-2 flex flex-col gap-6 rounded-2xl p-6 bg-brand-card border border-brand-border">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-white">Rendimiento (Últimos 30 días)</h3>
            <div className="flex bg-brand-bg p-1 rounded-lg">
              <button className="px-3 py-1 text-xs font-bold rounded-md bg-brand-orange text-white shadow-sm">30D</button>
              <button className="px-3 py-1 text-xs font-medium text-brand-gray">90D</button>
              <button className="px-3 py-1 text-xs font-medium text-brand-gray">1Y</button>
            </div>
          </div>

          {/* Mock Chart */}
          <div className="h-64 flex items-end justify-between gap-1 w-full pt-4 relative group">
            {[40, 45, 42, 50, 55, 52, 60, 65, 62, 70, 75, 72, 80, 85, 90, 88, 92, 95].map((height, i) => (
              <div 
                key={i} 
                className={`w-full rounded-t-sm transition-all cursor-pointer ${i === 17 ? 'bg-brand-orange shadow-lg shadow-brand-orange/20' : 'bg-brand-orange/20 hover:bg-brand-orange'}`}
                style={{ height: `${height}%` }}
              ></div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-brand-gray pt-2 border-t border-brand-border">
            <span>1 Nov</span>
            <span>15 Nov</span>
            <span>Hoy</span>
          </div>
        </div>

        {/* How it works */}
        <div className="flex flex-col gap-6 rounded-2xl p-6 bg-brand-card border border-brand-border">
          <h3 className="text-lg font-bold text-white">Cómo funciona</h3>
          <div className="flex flex-col gap-5">
            <div className="flex gap-4">
              <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                <PlusCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm text-white">Depósito</p>
                <p className="text-brand-gray text-xs">Transfiere dinero a tu cuenta Minders Pay.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                <Activity className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm text-white">Inversión Automática</p>
                <p className="text-brand-gray text-xs">Tu saldo empieza a rendir desde el primer día.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm text-white">Pagos Diarios</p>
                <p className="text-brand-gray text-xs">Cada mañana verás tus ganancias acreditadas.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 shrink-0 flex items-center justify-center rounded-full bg-brand-orange/10 text-brand-orange">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-sm text-white">Disponibilidad</p>
                <p className="text-brand-gray text-xs">Usa tu dinero cuando quieras, sin plazos fijos.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent History */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between px-2">
          <h3 className="text-xl font-bold text-white">Historial de Rendimientos</h3>
          <button className="text-brand-orange text-sm font-bold hover:underline">Ver todo</button>
        </div>
        
        <div className="flex flex-col rounded-2xl overflow-hidden border border-brand-border bg-brand-card">
          {[
            { title: 'Rendimiento Diario', date: 'Hoy, 08:32 AM', amount: `+${formatUSD(1245.20)}`, rate: 'TNA 82.5%', icon: <TrendingUp className="w-5 h-5" />, color: 'emerald' },
            { title: 'Rendimiento Diario', date: 'Ayer, 08:30 AM', amount: `+${formatUSD(1238.15)}`, rate: 'TNA 82.3%', icon: <TrendingUp className="w-5 h-5" />, color: 'emerald' },
            { title: 'Depósito Realizado', date: '28 Nov, 14:15 PM', amount: `+${formatUSD(50000)}`, rate: 'Desde CBU bancario', icon: <PlusCircle className="w-5 h-5" />, color: 'brand-orange' },
            { title: 'Rendimiento Diario', date: '28 Nov, 08:30 AM', amount: `+${formatUSD(1120.45)}`, rate: 'TNA 81.9%', icon: <TrendingUp className="w-5 h-5" />, color: 'emerald' },
          ].map((item, i) => (
            <div key={i} className={`flex items-center justify-between p-4 ${i !== 3 ? 'border-b border-brand-border' : ''}`}>
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 flex items-center justify-center rounded-full bg-${item.color === 'emerald' ? 'emerald-500/10 text-emerald-500' : 'brand-orange/10 text-brand-orange'}`}>
                  {item.icon}
                </div>
                <div>
                  <p className="font-bold text-sm text-white">{item.title}</p>
                  <p className="text-brand-gray text-xs">{item.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`font-black text-sm ${item.color === 'emerald' ? 'text-emerald-500' : 'text-white'}`}>{item.amount}</p>
                <p className="text-brand-gray text-xs">{item.rate}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
