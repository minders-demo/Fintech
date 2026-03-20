import React from 'react';
import { Screen } from '../types';
import { CreditCard, PlusCircle, Lock, Settings, History, ArrowRight, Eye, EyeOff, Copy, Ban, LifeBuoy } from 'lucide-react';
import { formatUSD } from '../utils/format';

export function CardsScreen({ navigate }: { navigate: (s: Screen) => void }) {
  return (
    <div className="flex flex-col gap-8 max-w-[1200px] mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div>
          <h1 className="text-white text-4xl font-black tracking-tight mb-2">Mis Tarjetas</h1>
          <p className="text-brand-gray text-lg">Gestiona tus tarjetas físicas y virtuales en un solo lugar.</p>
        </div>
        <button 
          onClick={() => navigate('card_manage')}
          className="bg-brand-orange hover:bg-brand-orange/90 text-white font-bold py-3 px-6 rounded-xl shadow-lg shadow-brand-orange/20 transition-all flex items-center gap-2"
        >
          <PlusCircle className="w-5 h-5" />
          Nueva Tarjeta
        </button>
      </div>

      {/* Cards Display Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Active Card & Quick Actions */}
        <div className="lg:col-span-7 flex flex-col gap-8">
          
          {/* Card Carousel / Display */}
          <div className="relative w-full max-w-[400px] mx-auto lg:mx-0 aspect-[1.586/1] rounded-2xl p-6 shadow-2xl overflow-hidden group cursor-pointer" onClick={() => navigate('card_detail')}>
            <div className="absolute inset-0 bg-gradient-to-br from-brand-orange to-orange-600 opacity-90"></div>
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-between text-white">
              <div className="flex justify-between items-start">
                <span className="text-xl font-black tracking-widest">Minders<span className="text-black">Pay</span></span>
                <CreditCard className="w-8 h-8 opacity-80" />
              </div>
              
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-2xl tracking-[0.2em] font-mono">****</span>
                  <span className="text-2xl tracking-[0.2em] font-mono">****</span>
                  <span className="text-2xl tracking-[0.2em] font-mono">****</span>
                  <span className="text-2xl tracking-[0.2em] font-mono">4281</span>
                </div>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest opacity-70 mb-1">Titular</p>
                    <p className="font-bold tracking-widest uppercase">MARIA RODRIGUEZ</p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase tracking-widest opacity-70 mb-1">Vence</p>
                    <p className="font-bold tracking-widest font-mono">12/28</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white text-black font-bold py-2 px-6 rounded-full flex items-center gap-2">
                <Eye className="w-4 h-4" /> Ver Datos
              </button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-4 gap-4">
            <button onClick={() => navigate('card_detail')} className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-brand-card border border-brand-border hover:border-brand-orange hover:bg-brand-orange/5 transition-all group">
              <div className="w-12 h-12 rounded-full bg-brand-bg flex items-center justify-center text-brand-gray group-hover:text-brand-orange group-hover:bg-brand-orange/10 transition-colors">
                <Eye className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-white text-center">Ver<br/>Datos</span>
            </button>
            <button onClick={() => navigate('card_pin')} className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-brand-card border border-brand-border hover:border-brand-orange hover:bg-brand-orange/5 transition-all group">
              <div className="w-12 h-12 rounded-full bg-brand-bg flex items-center justify-center text-brand-gray group-hover:text-brand-orange group-hover:bg-brand-orange/10 transition-colors">
                <Lock className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-white text-center">Cambiar<br/>PIN</span>
            </button>
            <button onClick={() => navigate('card_manage')} className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-brand-card border border-brand-border hover:border-brand-orange hover:bg-brand-orange/5 transition-all group">
              <div className="w-12 h-12 rounded-full bg-brand-bg flex items-center justify-center text-brand-gray group-hover:text-brand-orange group-hover:bg-brand-orange/10 transition-colors">
                <Settings className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-white text-center">Ajustes<br/>Límites</span>
            </button>
            <button className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-brand-card border border-brand-border hover:border-red-500 hover:bg-red-500/5 transition-all group">
              <div className="w-12 h-12 rounded-full bg-brand-bg flex items-center justify-center text-brand-gray group-hover:text-red-500 group-hover:bg-red-500/10 transition-colors">
                <Ban className="w-5 h-5" />
              </div>
              <span className="text-xs font-bold text-white text-center">Bloquear<br/>Tarjeta</span>
            </button>
          </div>
        </div>

        {/* Right Column: Recent Activity & Settings */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Card Status */}
          <div className="bg-brand-card border border-brand-border rounded-2xl p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
              <div>
                <p className="text-white font-bold">Tarjeta Activa</p>
                <p className="text-brand-gray text-xs">Lista para usar en todo el mundo</p>
              </div>
            </div>
            <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
              <input type="checkbox" name="toggle" id="toggle" defaultChecked className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 border-emerald-500 appearance-none cursor-pointer translate-x-6 transition-transform" />
              <label htmlFor="toggle" className="toggle-label block overflow-hidden h-6 rounded-full bg-emerald-500 cursor-pointer"></label>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-brand-card border border-brand-border rounded-2xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-white font-bold flex items-center gap-2">
                <History className="w-5 h-5 text-brand-orange" />
                Últimos Movimientos
              </h3>
              <button onClick={() => navigate('movements')} className="text-brand-orange text-sm font-bold hover:underline">Ver todos</button>
            </div>
            
            <div className="flex flex-col gap-4">
              {[
                { name: 'Netflix', date: 'Hoy, 10:24 AM', amount: formatUSD(35), type: 'Suscripción' },
                { name: 'Uber', date: 'Ayer, 08:15 PM', amount: formatUSD(18.5), type: 'Transporte' },
                { name: 'Starbucks', date: '28 Nov, 09:30 AM', amount: formatUSD(12), type: 'Alimentos' },
              ].map((tx, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-brand-bg transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center text-brand-gray font-bold">
                      {tx.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm">{tx.name}</p>
                      <p className="text-brand-gray text-xs">{tx.date} • {tx.type}</p>
                    </div>
                  </div>
                  <span className="text-white font-bold">{tx.amount}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Support Link */}
          <button className="flex items-center justify-between p-4 rounded-2xl border border-brand-border bg-brand-bg hover:bg-brand-card transition-colors group">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                <LifeBuoy className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-white font-bold text-sm">¿Problemas con tu tarjeta?</p>
                <p className="text-brand-gray text-xs">Contacta a soporte 24/7</p>
              </div>
            </div>
            <ArrowRight className="w-5 h-5 text-brand-gray group-hover:text-brand-orange transition-colors" />
          </button>

        </div>
      </div>
    </div>
  );
}
