import React from 'react';
import { Screen } from '../types';
import { ArrowUpRight, TrendingUp, TrendingDown, ChevronDown, ArrowUpDown, ShoppingCart } from 'lucide-react';

export function MarketScreen({ navigate }: { navigate: (s: Screen) => void }) {
  return (
    <div className="grid lg:grid-cols-12 gap-8 items-start">
      {/* Left Column: Market Info & Chart */}
      <div className="lg:col-span-7 space-y-6">
        {/* Asset Header */}
        <div className="bg-brand-card rounded-xl p-6 border border-brand-border">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center text-white">
                <span className="font-bold text-xl">₿</span>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Bitcoin <span className="text-brand-gray font-normal">BTC</span></h2>
                <p className="text-sm text-brand-gray">Bitcoin / Colombian Peso</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold tabular-nums text-white">$254,120,500</p>
              <p className="text-green-500 font-medium flex items-center justify-end gap-1">
                <TrendingUp className="w-4 h-4" />
                +1.24% (1h)
              </p>
            </div>
          </div>

          {/* Price Chart Area */}
          <div className="relative h-[300px] w-full mt-4 bg-brand-bg/40 rounded-lg p-4">
            <div className="absolute inset-0 flex flex-col justify-between p-4 opacity-50 pointer-events-none">
              <div className="border-t border-brand-border w-full"></div>
              <div className="border-t border-brand-border w-full"></div>
              <div className="border-t border-brand-border w-full"></div>
              <div className="border-t border-brand-border w-full"></div>
            </div>
            <svg className="w-full h-full relative z-10" preserveAspectRatio="none" viewBox="0 0 500 150">
              <defs>
                <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ec5b13" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#ec5b13" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,120 Q50,110 80,90 T150,100 T220,60 T300,80 T380,30 T450,50 T500,10 V150 H0 Z" fill="url(#chartFill)" />
              <path d="M0,120 Q50,110 80,90 T150,100 T220,60 T300,80 T380,30 T450,50 T500,10" fill="none" stroke="#ec5b13" strokeWidth="3" strokeLinecap="round" />
            </svg>
            <div className="flex justify-between mt-4 text-[10px] uppercase tracking-widest text-brand-gray font-bold">
              <span>10:00 AM</span>
              <span>10:15 AM</span>
              <span>10:30 AM</span>
              <span>10:45 AM</span>
              <span>11:00 AM</span>
            </div>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-brand-card p-4 rounded-xl border border-brand-border">
            <p className="text-xs text-brand-gray uppercase font-bold tracking-wider mb-1">Volumen 24h</p>
            <p className="font-semibold text-white">$12.4B</p>
          </div>
          <div className="bg-brand-card p-4 rounded-xl border border-brand-border">
            <p className="text-xs text-brand-gray uppercase font-bold tracking-wider mb-1">Máx 24h</p>
            <p className="font-semibold text-white">$262.1M</p>
          </div>
          <div className="bg-brand-card p-4 rounded-xl border border-brand-border">
            <p className="text-xs text-brand-gray uppercase font-bold tracking-wider mb-1">Mín 24h</p>
            <p className="font-semibold text-white">$248.5M</p>
          </div>
        </div>
      </div>

      {/* Right Column: Trading Form */}
      <div className="lg:col-span-5">
        <div className="bg-brand-card rounded-2xl border border-brand-border shadow-xl overflow-hidden">
          {/* Tabs */}
          <div className="flex border-b border-brand-border">
            <button className="flex-1 py-4 text-sm font-bold border-b-2 border-brand-orange text-brand-orange bg-brand-orange/5">COMPRAR</button>
            <button className="flex-1 py-4 text-sm font-bold border-b-2 border-transparent text-brand-gray hover:text-white hover:bg-brand-orange/5 transition-all">VENDER</button>
          </div>

          <div className="p-6 space-y-6">
            {/* Asset Selection */}
            <div>
              <label className="block text-sm font-medium text-brand-gray mb-2">Seleccionar Activo</label>
              <div className="relative">
                <select className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-3.5 appearance-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange outline-none text-white transition-all">
                  <option value="btc">Bitcoin (BTC)</option>
                  <option value="eth">Ethereum (ETH)</option>
                  <option value="usdt">Tether (USDT)</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-brand-gray w-5 h-5" />
              </div>
            </div>

            {/* Amount Input */}
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-brand-gray mb-2">Monto en COP</label>
                <div className="relative group">
                  <input 
                    type="number" 
                    defaultValue="5000000"
                    className="w-full bg-brand-bg border border-brand-border rounded-xl px-4 py-4 focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange outline-none text-xl font-bold tabular-nums transition-all text-white" 
                    placeholder="0.00" 
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-brand-gray">COP</span>
                </div>
              </div>

              <div className="flex justify-center -my-2 relative z-10">
                <button className="bg-brand-orange text-white w-10 h-10 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                  <ArrowUpDown className="w-5 h-5" />
                </button>
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-gray mb-2">Recibirás (estimado)</label>
                <div className="relative">
                  <input 
                    type="text" 
                    readOnly 
                    value="0.019675"
                    className="w-full bg-brand-bg/50 border border-brand-border rounded-xl px-4 py-4 text-xl font-bold tabular-nums text-brand-gray" 
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-brand-gray">BTC</span>
                </div>
              </div>
            </div>

            {/* Cost Breakdown */}
            <div className="bg-brand-bg/30 rounded-xl p-4 space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-brand-gray">Precio de BTC</span>
                <span className="font-medium text-white">$254,120,500</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-brand-gray">Comisión de red</span>
                <span className="font-medium text-brand-orange">$12,400</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-brand-gray">Comisión Minders (0.5%)</span>
                <span className="font-medium text-white">$25,000</span>
              </div>
              <div className="pt-2 border-t border-brand-border flex justify-between">
                <span className="font-bold text-white">Total a pagar</span>
                <span className="font-bold text-brand-orange">$5,037,400</span>
              </div>
            </div>

            {/* Submit Button */}
            <button 
              onClick={() => navigate('operation_success')}
              className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-orange/20 transition-all active:scale-[0.98] flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              COMPRAR BTC AHORA
            </button>
            <p className="text-[10px] text-center text-brand-gray px-4 uppercase tracking-tighter">
              Al hacer clic en el botón superior, aceptas nuestros términos de servicio y las tasas de mercado actuales. Las criptomonedas son activos de alto riesgo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
