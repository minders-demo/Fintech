import React from 'react';
import { Screen } from '../types';
import { ArrowRight, Car, HeartPulse, Home, Plus, Shield, ShieldCheck, Smartphone } from 'lucide-react';
import { formatUSD } from '../utils/format';

export function InsuranceHubScreen({ navigate }: { navigate: (s: Screen) => void }) {
  return (
    <div className="p-8 max-w-[1200px] mx-auto relative space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-brand-elevated border border-brand-border flex items-center justify-center shadow-lg">
            <Shield className="w-7 h-7 text-brand-orange" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">Centro de Seguros</h1>
            <p className="text-sm text-brand-gray mt-1">Protege lo que más importa con nuestras pólizas a medida.</p>
          </div>
        </div>
      </div>

      {/* Active Policies (If any) */}
      <section className="space-y-4">
        <div className="flex items-center justify-between px-2">
          <h3 className="text-sm font-semibold text-brand-gray uppercase tracking-wider">Mis Pólizas Activas</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Active Policy Card */}
          <div 
            onClick={() => navigate('insurance_detail')}
            className="bg-brand-surface border border-brand-border rounded-[20px] p-6 shadow-xl cursor-pointer hover:border-brand-orange/50 transition-all group relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <HeartPulse className="w-24 h-24 text-brand-orange" />
            </div>
            <div className="flex items-center justify-between mb-4 relative z-10">
              <div className="w-12 h-12 rounded-full bg-[#FF5C1A15] border border-brand-orange/30 flex items-center justify-center">
                <HeartPulse className="w-6 h-6 text-brand-orange" />
              </div>
              <div className="flex items-center gap-2 bg-[#4ADE8015] border border-emerald-500/30 px-3 py-1 rounded-full">
                <ShieldCheck className="w-3 h-3 text-emerald-500" />
                <span className="text-[10px] font-semibold text-emerald-500 uppercase tracking-wider">Activo</span>
              </div>
            </div>
            <div className="relative z-10">
              <h4 className="text-lg font-bold text-white mb-1">Seguro de Vida Integral</h4>
              <p className="text-xs text-brand-gray mb-4">Póliza #VID-98765432</p>
              <div className="flex items-end justify-between">
                <div>
                  <p className="text-[10px] font-medium text-brand-gray uppercase tracking-wider mb-1">Suma Asegurada</p>
                  <p className="text-xl font-bold font-mono text-white">{formatUSD(150000000)}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-brand-gray group-hover:text-brand-orange transition-colors" />
              </div>
            </div>
          </div>

          {/* Add New Policy CTA */}
          <div 
            onClick={() => navigate('insurance_wizard')}
            className="bg-brand-elevated border border-dashed border-brand-border rounded-[20px] p-6 flex flex-col items-center justify-center cursor-pointer hover:border-brand-orange hover:bg-brand-surface transition-all group min-h-[220px]"
          >
            <div className="w-12 h-12 rounded-full bg-brand-surface border border-brand-border flex items-center justify-center mb-4 group-hover:bg-brand-orange/10 group-hover:border-brand-orange/30 transition-colors">
              <Plus className="w-6 h-6 text-brand-gray group-hover:text-brand-orange transition-colors" />
            </div>
            <h4 className="text-sm font-semibold text-white mb-1">Contratar nuevo seguro</h4>
            <p className="text-xs text-brand-gray text-center max-w-[200px]">Explora nuestras opciones y encuentra la cobertura ideal.</p>
          </div>
        </div>
      </section>

      {/* Available Insurances Catalog */}
      <section className="space-y-6 pt-8 border-t border-brand-border/50">
        <div className="flex items-center justify-between px-2">
          <h3 className="text-sm font-semibold text-brand-gray uppercase tracking-wider">Catálogo de Seguros</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Auto Insurance */}
          <div 
            onClick={() => navigate('insurance_wizard')}
            className="bg-brand-surface border border-brand-border rounded-[20px] p-6 flex items-start gap-6 cursor-pointer hover:bg-brand-elevated transition-all group"
          >
            <div className="w-16 h-16 rounded-2xl bg-brand-elevated border border-brand-border flex items-center justify-center shrink-0 group-hover:border-brand-orange/50 transition-colors">
              <Car className="w-8 h-8 text-brand-orange" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-white mb-2">Seguro de Auto Todo Riesgo</h4>
              <p className="text-sm text-brand-gray mb-4 leading-relaxed">Cobertura completa contra daños, robo y responsabilidad civil. Asistencia en vía 24/7 y grúa ilimitada.</p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-brand-orange">Desde {formatUSD(85000)}/mes</span>
                <ArrowRight className="w-4 h-4 text-brand-gray group-hover:text-brand-orange transition-colors" />
              </div>
            </div>
          </div>

          {/* Home Insurance */}
          <div 
            onClick={() => navigate('insurance_wizard')}
            className="bg-brand-surface border border-brand-border rounded-[20px] p-6 flex items-start gap-6 cursor-pointer hover:bg-brand-elevated transition-all group"
          >
            <div className="w-16 h-16 rounded-2xl bg-brand-elevated border border-brand-border flex items-center justify-center shrink-0 group-hover:border-brand-orange/50 transition-colors">
              <Home className="w-8 h-8 text-brand-orange" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-white mb-2">Seguro de Hogar</h4>
              <p className="text-sm text-brand-gray mb-4 leading-relaxed">Protege tu vivienda y contenidos contra incendio, robo, daños por agua y desastres naturales. Incluye plomería y cerrajería.</p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-brand-orange">Desde {formatUSD(35000)}/mes</span>
                <ArrowRight className="w-4 h-4 text-brand-gray group-hover:text-brand-orange transition-colors" />
              </div>
            </div>
          </div>

          {/* Device Insurance */}
          <div 
            onClick={() => navigate('insurance_wizard')}
            className="bg-brand-surface border border-brand-border rounded-[20px] p-6 flex items-start gap-6 cursor-pointer hover:bg-brand-elevated transition-all group"
          >
            <div className="w-16 h-16 rounded-2xl bg-brand-elevated border border-brand-border flex items-center justify-center shrink-0 group-hover:border-brand-orange/50 transition-colors">
              <Smartphone className="w-8 h-8 text-brand-orange" />
            </div>
            <div className="flex-1">
              <h4 className="text-lg font-bold text-white mb-2">Protección de Dispositivos</h4>
              <p className="text-sm text-brand-gray mb-4 leading-relaxed">Asegura tu celular, tablet o laptop contra robo, daño accidental y falla eléctrica. Reposición rápida.</p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-brand-orange">Desde {formatUSD(15000)}/mes</span>
                <ArrowRight className="w-4 h-4 text-brand-gray group-hover:text-brand-orange transition-colors" />
              </div>
            </div>
          </div>

          {/* Life Insurance (Already active, but shown as option) */}
          <div 
            onClick={() => navigate('insurance_wizard')}
            className="bg-brand-surface border border-brand-border rounded-[20px] p-6 flex items-start gap-6 cursor-pointer hover:bg-brand-elevated transition-all group opacity-70"
          >
            <div className="w-16 h-16 rounded-2xl bg-brand-elevated border border-brand-border flex items-center justify-center shrink-0 group-hover:border-brand-orange/50 transition-colors">
              <HeartPulse className="w-8 h-8 text-brand-orange" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-lg font-bold text-white">Seguro de Vida</h4>
                <span className="text-[10px] font-semibold text-emerald-500 bg-[#4ADE8015] px-2 py-1 rounded-full uppercase tracking-wider">Ya tienes uno</span>
              </div>
              <p className="text-sm text-brand-gray mb-4 leading-relaxed">Garantiza el futuro financiero de tu familia en caso de fallecimiento o incapacidad total y permanente.</p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-brand-orange">Ver opciones adicionales</span>
                <ArrowRight className="w-4 h-4 text-brand-gray group-hover:text-brand-orange transition-colors" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
