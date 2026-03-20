import React from 'react';
import { Screen } from '../types';
import { ArrowRight, HeartPulse, ShieldCheck, Shield, Wallet, Star, DollarSign } from 'lucide-react';

export function BenefitsScreen({ navigate }: { navigate: (s: Screen) => void }) {
  return (
    <div className="p-8 max-w-[1240px] mx-auto relative space-y-8">
      {/* Decorative Shapes */}
      <div className="fixed top-[-100px] right-[-100px] w-[300px] h-[300px] bg-brand-primary opacity-[0.06] blur-[120px] -z-10 pointer-events-none"></div>
      <div className="fixed bottom-[-50px] left-[-50px] w-[200px] h-[200px] bg-brand-primary opacity-[0.04] blur-[100px] -z-10 pointer-events-none"></div>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-[38px] font-bold text-white tracking-tight leading-tight">Tus Beneficios</h1>
          <p className="text-brand-gray mt-1 text-sm">Gestiona tu nivel de lealtad y aprovecha tus reembolsos.</p>
        </div>
        <button className="h-[44px] px-6 bg-brand-primary text-white text-sm font-semibold rounded-[10px] hover:bg-brand-hover active:scale-95 transition-all flex items-center gap-2">
          <DollarSign className="w-4 h-4" />
          Canjear Cashback
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Hero Card - Loyalty Status */}
        <section className="lg:col-span-8">
          <div className="bg-gradient-to-br from-[#FF5C1A15] to-[#151820] border border-brand-border rounded-[20px] p-7 h-full flex flex-col justify-between shadow-xl relative overflow-hidden">
            <div className="flex justify-between items-start relative z-10">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-[#FBBF2420] text-brand-warning text-[11px] font-medium px-2.5 py-1 rounded-full uppercase tracking-wider">Nivel Oro ⭐</span>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Camino al Nivel Platinum</h2>
                <p className="text-brand-gray text-sm max-w-md leading-relaxed">Estás a solo <span className="text-white font-semibold">$152.500</span> de consumos para desbloquear 5% extra en todas tus compras.</p>
              </div>
              <div className="text-right">
                <p className="text-[12px] font-medium text-brand-gray uppercase tracking-wider mb-1">Cashback Acumulado</p>
                <p className="text-3xl font-bold text-brand-primary font-mono tracking-tight">$42.500</p>
              </div>
            </div>
            <div className="mt-8 relative z-10">
              <div className="flex justify-between items-center mb-2">
                <span className="text-[11px] font-medium text-brand-textTer uppercase tracking-widest">Progreso del mes</span>
                <span className="text-[11px] font-medium text-brand-gray">75%</span>
              </div>
              <div className="h-1.5 w-full bg-brand-border rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-brand-primary to-brand-hover h-full rounded-full w-[75%] transition-all duration-1000"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Rewards Stats */}
        <section className="lg:col-span-4 grid grid-cols-1 gap-4">
          <div className="bg-brand-surface border border-brand-border rounded-[14px] p-5 flex items-center gap-4 shadow-lg">
            <div className="w-12 h-12 rounded-[14px] bg-brand-elevated border border-brand-border flex items-center justify-center">
              <Shield className="w-6 h-6 text-brand-primary" />
            </div>
            <div>
              <p className="text-[11px] font-medium text-brand-gray uppercase tracking-wider">Próximo vencimiento</p>
              <p className="text-sm font-semibold text-white">12 de Octubre</p>
            </div>
          </div>
          <div className="bg-brand-surface border border-brand-border rounded-[14px] p-5 flex items-center gap-4 shadow-lg">
            <div className="w-12 h-12 rounded-[14px] bg-brand-elevated border border-brand-border flex items-center justify-center">
              <ShieldCheck className="w-6 h-6 text-brand-primary" />
            </div>
            <div>
              <p className="text-[11px] font-medium text-brand-gray uppercase tracking-wider">Ahorro total anual</p>
              <p className="text-sm font-semibold text-white">$248.900</p>
            </div>
          </div>
        </section>

        {/* Category Cashback Cards */}
        <section className="lg:col-span-12 mt-4 space-y-6">
          <h2 className="text-xl font-semibold text-white">Tus categorías activas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { emoji: '🍕', title: 'Alimentación', desc: 'Restaurantes, deliverys y supermercados.', cashback: '3% CASHBACK', amount: '+$12.450' },
              { emoji: '🏥', title: 'Salud', desc: 'Farmacias, clínicas y laboratorios.', cashback: '2% CASHBACK', amount: '+$4.200' },
              { emoji: '✈️', title: 'Viajes', desc: 'Aerolíneas, hoteles y transporte.', cashback: '5% CASHBACK', amount: '+$25.850' },
            ].map((cat, i) => (
              <div key={i} className="bg-brand-surface border border-brand-border rounded-[14px] p-6 hover:border-brand-primary/40 transition-all group cursor-pointer shadow-xl">
                <div className="flex justify-between items-start mb-4">
                  <span className="text-3xl">{cat.emoji}</span>
                  <span className="bg-brand-primary/20 text-brand-primary text-[11px] font-bold px-2 py-0.5 rounded-full">{cat.cashback}</span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{cat.title}</h3>
                <p className="text-sm text-brand-gray">{cat.desc}</p>
                <div className="mt-6 pt-4 border-t border-brand-border/50 flex justify-between items-center">
                  <span className="text-[11px] text-brand-textTer uppercase font-medium">Acumulado este mes</span>
                  <span className="text-sm font-bold text-emerald-500">{cat.amount}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Marketplace section */}
        <section className="lg:col-span-12 mt-4 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-white">Marketplace de Marcas</h2>
            <button className="text-sm font-medium text-brand-primary hover:underline">Ver todas</button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              { emoji: '☕', name: 'Starbucks', offer: '15% OFF' },
              { emoji: '🎬', name: 'Cinépolis', offer: '2x1 Tickets' },
              { emoji: '👟', name: 'Nike', offer: '10% Cashback' },
              { emoji: '🛒', name: 'Amazon', offer: '$5.000 Regalo' },
              { emoji: '📱', name: 'Apple Store', offer: '3 Cuotas 0%' },
            ].map((brand, i) => (
              <div key={i} className="bg-brand-elevated border border-brand-border rounded-[14px] p-4 text-center group cursor-pointer hover:bg-brand-surface transition-all shadow-lg">
                <div className="w-16 h-16 bg-brand-surface rounded-full mx-auto mb-3 flex items-center justify-center text-xl grayscale group-hover:grayscale-0 transition-all border border-brand-border">
                  {brand.emoji}
                </div>
                <p className="text-sm font-semibold text-white">{brand.name}</p>
                <p className="text-[11px] font-bold text-brand-primary mt-1">{brand.offer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Cashback History */}
        <section className="lg:col-span-12 mt-4 space-y-6">
          <h2 className="text-xl font-semibold text-white">Historial de Cashback ganado</h2>
          <div className="bg-brand-surface border border-brand-border rounded-[14px] overflow-hidden shadow-xl">
            <div className="hidden md:grid grid-cols-12 px-6 py-4 border-b border-brand-border text-[10px] font-medium text-brand-textTer uppercase tracking-widest">
              <div className="col-span-5">Establecimiento / Categoría</div>
              <div className="col-span-3">Fecha</div>
              <div className="col-span-2">Monto Compra</div>
              <div className="col-span-2 text-right">Cashback</div>
            </div>
            {[
              { emoji: '🍕', name: 'Pizza Hut Delivery', cat: 'Alimentación · 3%', date: '24 Sep, 2023 · 20:15', amount: '$45.900', cashback: '+$1.377' },
              { emoji: '🏥', name: 'Farmacias Ahumada', cat: 'Salud · 2%', date: '22 Sep, 2023 · 11:30', amount: '$12.500', cashback: '+$250' },
              { emoji: '✈️', name: 'LATAM Airlines', cat: 'Viajes · 5%', date: '20 Sep, 2023 · 09:45', amount: '$450.000', cashback: '+$22.500' },
            ].map((tx, i) => (
              <div key={i} className="flex flex-col md:grid md:grid-cols-12 px-6 py-4 border-b border-brand-border/50 items-center hover:bg-brand-elevated transition-colors">
                <div className="col-span-5 flex items-center gap-3 w-full mb-2 md:mb-0">
                  <div className="w-9 h-9 rounded-full bg-brand-elevated flex items-center justify-center text-lg border border-brand-border">{tx.emoji}</div>
                  <div>
                    <p className="text-sm font-semibold text-white">{tx.name}</p>
                    <p className="text-[11px] text-brand-gray uppercase tracking-tighter">{tx.cat}</p>
                  </div>
                </div>
                <div className="col-span-3 w-full md:w-auto mb-2 md:mb-0">
                  <p className="text-sm text-brand-gray">{tx.date}</p>
                </div>
                <div className="col-span-2 w-full md:w-auto mb-2 md:mb-0">
                  <p className="text-sm font-mono text-brand-gray">{tx.amount}</p>
                </div>
                <div className="col-span-2 text-right w-full md:w-auto">
                  <p className="text-sm font-bold text-emerald-500">{tx.cashback}</p>
                </div>
              </div>
            ))}
            {/* Shimmer Placeholder */}
            <div className="px-6 py-6 opacity-40">
              <div className="grid grid-cols-12 gap-4">
                <div className="col-span-5 flex gap-3">
                  <div className="w-9 h-9 rounded-full bg-brand-border animate-pulse"></div>
                  <div className="space-y-2">
                    <div className="w-32 h-3 rounded bg-brand-border animate-pulse"></div>
                    <div className="w-20 h-2 rounded bg-brand-border animate-pulse"></div>
                  </div>
                </div>
                <div className="col-span-3 h-4 w-24 bg-brand-border animate-pulse mt-2 rounded"></div>
                <div className="col-span-2 h-4 w-16 bg-brand-border animate-pulse mt-2 rounded"></div>
                <div className="col-span-2 h-4 w-16 bg-brand-border animate-pulse mt-2 rounded ml-auto"></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
