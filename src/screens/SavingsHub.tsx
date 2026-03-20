import React from 'react';
import { Screen } from '../types';
import { ArrowRight, PiggyBank, Plus, Target, TrendingUp, Wallet } from 'lucide-react';
import { formatUSD } from '../utils/format';

export function SavingsHubScreen({ navigate }: { navigate: (s: Screen) => void }) {
  return (
    <div className="p-8 max-w-[1200px] mx-auto relative space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-brand-elevated border border-brand-border flex items-center justify-center shadow-lg">
            <PiggyBank className="w-7 h-7 text-brand-orange" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">Centro de Ahorro</h1>
            <p className="text-sm text-brand-gray mt-1">Organiza tu dinero y alcanza tus metas financieras.</p>
          </div>
        </div>
      </div>

      {/* Main Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-brand-surface border border-brand-border rounded-[20px] p-6 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Wallet className="w-24 h-24 text-brand-orange" />
          </div>
          <p className="text-xs font-medium text-brand-gray uppercase tracking-wider mb-2 relative z-10">Total Ahorrado</p>
          <h2 className="text-4xl font-bold font-mono text-white mb-4 relative z-10">{formatUSD(8500)}</h2>
          <div className="flex gap-3 relative z-10">
            <button className="flex-1 h-10 bg-brand-orange text-white text-sm font-semibold rounded-xl hover:bg-brand-orange/90 transition-colors">
              Abonar
            </button>
            <button className="flex-1 h-10 bg-brand-elevated border border-brand-border text-brand-gray text-sm font-semibold rounded-xl hover:text-white transition-colors">
              Retirar
            </button>
          </div>
        </div>

        <div className="bg-brand-surface border border-brand-border rounded-[20px] p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-medium text-brand-gray uppercase tracking-wider">Rendimientos Acumulados</p>
              <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-[#4ADE8020] text-emerald-500">+10.5% EA</span>
            </div>
            <h3 className="text-2xl font-bold font-mono text-emerald-500">+{formatUSD(145.20)}</h3>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <TrendingUp className="w-4 h-4 text-brand-gray" />
            <span className="text-xs text-brand-gray">Generando intereses diarios automáticamente</span>
          </div>
        </div>

        <div className="bg-brand-surface border border-brand-border rounded-[20px] p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-medium text-brand-gray uppercase tracking-wider">Bolsillos Activos</p>
              <div className="w-6 h-6 rounded-full bg-brand-elevated flex items-center justify-center">
                <Target className="w-3 h-3 text-brand-orange" />
              </div>
            </div>
            <h3 className="text-2xl font-bold font-mono text-white">3</h3>
          </div>
          <button 
            onClick={() => navigate('create_pocket')}
            className="w-full h-10 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-sm font-semibold rounded-xl hover:bg-brand-orange/20 transition-colors flex items-center justify-center gap-2 mt-4"
          >
            <Plus className="w-4 h-4" />
            Crear Nuevo Bolsillo
          </button>
        </div>
      </section>

      {/* Pockets List */}
      <section className="space-y-4">
        <div className="flex items-center justify-between px-2">
          <h3 className="text-sm font-semibold text-brand-gray uppercase tracking-wider">Mis Bolsillos</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Pocket Card 1 */}
          <div 
            onClick={() => navigate('pocket_detail')}
            className="bg-brand-surface border border-brand-border rounded-[20px] p-6 shadow-xl cursor-pointer hover:border-brand-orange/50 transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Target className="w-24 h-24 text-brand-orange" />
            </div>
            <div className="flex items-center justify-between mb-6 relative z-10">
              <div className="w-12 h-12 rounded-full bg-[#FF5C1A15] border border-brand-orange/30 flex items-center justify-center">
                <Target className="w-6 h-6 text-brand-orange" />
              </div>
              <div className="text-right">
                <p className="text-[10px] font-medium text-brand-gray uppercase tracking-wider mb-1">Meta</p>
                <p className="text-lg font-bold font-mono text-white">{formatUSD(5000)}</p>
              </div>
            </div>
            <div className="relative z-10">
              <h4 className="text-xl font-bold text-white mb-1">Viaje a Europa</h4>
              <p className="text-sm text-brand-gray mb-6">Ahorro programado</p>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-emerald-500">50% completado</span>
                  <span className="text-brand-gray">Faltan {formatUSD(2500)}</span>
                </div>
                <div className="w-full bg-brand-elevated h-2 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-orange" style={{ width: '50%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Pocket Card 2 */}
          <div 
            onClick={() => navigate('pocket_detail')}
            className="bg-brand-surface border border-brand-border rounded-[20px] p-6 shadow-xl cursor-pointer hover:border-brand-orange/50 transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Target className="w-24 h-24 text-brand-orange" />
            </div>
            <div className="flex items-center justify-between mb-6 relative z-10">
              <div className="w-12 h-12 rounded-full bg-[#FF5C1A15] border border-brand-orange/30 flex items-center justify-center">
                <Target className="w-6 h-6 text-brand-orange" />
              </div>
              <div className="text-right">
                <p className="text-[10px] font-medium text-brand-gray uppercase tracking-wider mb-1">Meta</p>
                <p className="text-lg font-bold font-mono text-white">{formatUSD(2000)}</p>
              </div>
            </div>
            <div className="relative z-10">
              <h4 className="text-xl font-bold text-white mb-1">Fondo de Emergencia</h4>
              <p className="text-sm text-brand-gray mb-6">Ahorro libre</p>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className="text-emerald-500">80% completado</span>
                  <span className="text-brand-gray">Faltan {formatUSD(400)}</span>
                </div>
                <div className="w-full bg-brand-elevated h-2 rounded-full overflow-hidden">
                  <div className="h-full bg-brand-orange" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Add New Pocket CTA */}
          <div 
            onClick={() => navigate('create_pocket')}
            className="bg-brand-elevated border border-dashed border-brand-border rounded-[20px] p-6 flex flex-col items-center justify-center cursor-pointer hover:border-brand-orange hover:bg-brand-surface transition-all group min-h-[220px]"
          >
            <div className="w-12 h-12 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center mb-4 group-hover:bg-brand-orange/10 group-hover:border-brand-orange/30 transition-colors">
              <Plus className="w-6 h-6 text-brand-gray group-hover:text-brand-orange transition-colors" />
            </div>
            <h4 className="text-sm font-semibold text-white mb-1">Crear nuevo bolsillo</h4>
            <p className="text-xs text-brand-gray text-center max-w-[200px]">Define una meta y empieza a ahorrar hoy mismo.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
