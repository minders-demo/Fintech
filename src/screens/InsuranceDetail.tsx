import React from 'react';
import { Screen } from '../types';
import { ArrowLeft, CheckCircle2, Download, FileText, HeartPulse, ShieldAlert, ShieldCheck } from 'lucide-react';
import { formatUSD } from '../utils/format';

export function InsuranceDetailScreen({ navigate }: { navigate: (s: Screen) => void }) {
  return (
    <div className="flex justify-center relative w-full">
      <div className="w-full max-w-[800px] space-y-8">
        {/* Page Header */}
        <div className="flex flex-col gap-1">
          <div 
            onClick={() => navigate('insurance_hub')}
            className="flex items-center gap-2 mb-2 cursor-pointer text-brand-gray hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Mis Seguros</span>
          </div>
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white">Seguro de Vida Integral</h2>
              <p className="text-brand-gray text-sm mt-1">Póliza #VID-2024-98765432</p>
            </div>
            <div className="flex items-center gap-2 bg-[#4ADE8015] border border-emerald-500/30 px-3 py-1.5 rounded-full">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span className="text-xs font-semibold text-emerald-500 uppercase tracking-wider">Activo</span>
            </div>
          </div>
        </div>

        {/* Main Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column: Summary & Coverage */}
          <div className="md:col-span-2 space-y-6">
            {/* Summary Card */}
            <section className="bg-brand-surface border border-brand-border rounded-[20px] p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <HeartPulse className="w-32 h-32 text-brand-orange" />
              </div>
              <div className="relative z-10 grid grid-cols-2 gap-6">
                <div>
                  <p className="text-[11px] font-medium text-brand-gray uppercase tracking-wider mb-1">Suma Asegurada</p>
                  <h3 className="text-3xl font-bold font-mono text-white">{formatUSD(150000000)}</h3>
                </div>
                <div>
                  <p className="text-[11px] font-medium text-brand-gray uppercase tracking-wider mb-1">Prima Mensual</p>
                  <h3 className="text-3xl font-bold font-mono text-brand-orange">{formatUSD(45000)}</h3>
                </div>
                <div>
                  <p className="text-[11px] font-medium text-brand-gray uppercase tracking-wider mb-1">Fecha de Inicio</p>
                  <p className="text-sm font-semibold text-white">15 Oct 2023</p>
                </div>
                <div>
                  <p className="text-[11px] font-medium text-brand-gray uppercase tracking-wider mb-1">Próximo Pago</p>
                  <p className="text-sm font-semibold text-white">15 Nov 2023</p>
                </div>
              </div>
            </section>

            {/* Coverage Details */}
            <section className="bg-brand-surface border border-brand-border rounded-[20px] p-6 shadow-xl">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Coberturas Incluidas</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-brand-elevated border border-brand-border/50">
                  <div className="w-8 h-8 rounded-full bg-[#4ADE8015] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Fallecimiento por cualquier causa</h4>
                    <p className="text-xs text-brand-gray mt-1">Cobertura principal por {formatUSD(150000000)} pagadera a los beneficiarios designados.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-brand-elevated border border-brand-border/50">
                  <div className="w-8 h-8 rounded-full bg-[#4ADE8015] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Incapacidad total y permanente</h4>
                    <p className="text-xs text-brand-gray mt-1">Anticipo del 100% de la suma asegurada en caso de invalidez por enfermedad o accidente.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 rounded-xl bg-brand-elevated border border-brand-border/50">
                  <div className="w-8 h-8 rounded-full bg-[#4ADE8015] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Enfermedades graves</h4>
                    <p className="text-xs text-brand-gray mt-1">Anticipo del 50% ({formatUSD(75000000)}) ante el diagnóstico de enfermedades cubiertas en la póliza.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Actions & Beneficiaries */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <section className="bg-brand-surface border border-brand-border rounded-[20px] p-6 shadow-xl">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Acciones</h3>
              <div className="space-y-3">
                <button className="w-full h-12 bg-brand-elevated border border-brand-border rounded-xl text-sm font-semibold text-white hover:bg-brand-orange hover:border-brand-orange transition-all flex items-center justify-center gap-2 group">
                  <FileText className="w-4 h-4 text-brand-gray group-hover:text-white transition-colors" />
                  Ver Póliza Completa
                </button>
                <button className="w-full h-12 bg-brand-elevated border border-brand-border rounded-xl text-sm font-semibold text-white hover:bg-brand-orange hover:border-brand-orange transition-all flex items-center justify-center gap-2 group">
                  <Download className="w-4 h-4 text-brand-gray group-hover:text-white transition-colors" />
                  Descargar Certificado
                </button>
                <button className="w-full h-12 bg-[#FF5C1A15] border border-brand-orange/30 rounded-xl text-sm font-semibold text-brand-orange hover:bg-brand-orange hover:text-white transition-all flex items-center justify-center gap-2">
                  <ShieldAlert className="w-4 h-4" />
                  Reportar Siniestro
                </button>
              </div>
            </section>

            {/* Beneficiaries */}
            <section className="bg-brand-surface border border-brand-border rounded-[20px] p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Beneficiarios</h3>
                <button className="text-xs font-semibold text-brand-orange hover:text-brand-orange/80 transition-colors">Editar</button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 rounded-lg bg-brand-elevated border border-brand-border/50">
                  <div>
                    <p className="text-sm font-semibold text-white">María Gómez</p>
                    <p className="text-[11px] text-brand-gray uppercase tracking-wider mt-0.5">Cónyuge</p>
                  </div>
                  <span className="text-lg font-bold font-mono text-emerald-500">50%</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-brand-elevated border border-brand-border/50">
                  <div>
                    <p className="text-sm font-semibold text-white">Carlos Pérez</p>
                    <p className="text-[11px] text-brand-gray uppercase tracking-wider mt-0.5">Hijo</p>
                  </div>
                  <span className="text-lg font-bold font-mono text-emerald-500">25%</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-brand-elevated border border-brand-border/50">
                  <div>
                    <p className="text-sm font-semibold text-white">Ana Pérez</p>
                    <p className="text-[11px] text-brand-gray uppercase tracking-wider mt-0.5">Hija</p>
                  </div>
                  <span className="text-lg font-bold font-mono text-emerald-500">25%</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
