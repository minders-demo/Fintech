import React from 'react';
import { Screen } from '../types';
import { ChevronRight, Bell, Download, FileText, TrendingUp, CreditCard } from 'lucide-react';

export function SalesStatsScreen({ navigate }: { navigate: (s: Screen) => void }) {
  return (
    <div className="p-8 max-w-[1200px] mx-auto relative">
      {/* Page Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <div 
            onClick={() => navigate('business_dashboard')}
            className="flex items-center gap-2 mb-2 cursor-pointer text-brand-gray hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            <span className="text-sm">Mi Negocio</span>
          </div>
          <h1 className="text-[20px] font-semibold text-white leading-tight">Estadísticas de Ventas</h1>
          <p className="text-sm text-brand-gray mt-1">Análisis detallado de tu rendimiento comercial.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-brand-elevated border border-brand-border h-[44px] px-6 rounded-[10px] text-brand-gray text-sm font-semibold hover:text-white transition-colors flex items-center gap-2">
            <Download className="w-4 h-4" />
            Exportar CSV
          </button>
          <button className="bg-brand-elevated border border-brand-border h-[44px] px-6 rounded-[10px] text-brand-gray text-sm font-semibold hover:text-white transition-colors flex items-center gap-2">
            <FileText className="w-4 h-4" />
            PDF Membrete
          </button>
        </div>
      </div>

      {/* Metrics Summary */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-brand-surface border border-brand-border rounded-[14px] p-5 shadow-[0_1px_20px_rgba(0,0,0,0.4)]">
          <p className="text-[12px] font-medium text-brand-gray uppercase tracking-wider mb-2">Ventas totales</p>
          <div className="flex items-end justify-between">
            <h3 className="text-2xl font-bold font-mono text-white">$4.285.900</h3>
            <span className="text-[11px] font-medium px-2 py-1 rounded-full bg-[#4ADE8020] text-emerald-500">+12.4%</span>
          </div>
        </div>
        <div className="bg-brand-surface border border-brand-border rounded-[14px] p-5 shadow-[0_1px_20px_rgba(0,0,0,0.4)]">
          <p className="text-[12px] font-medium text-brand-gray uppercase tracking-wider mb-2">Ticket promedio</p>
          <div className="flex items-end justify-between">
            <h3 className="text-2xl font-bold font-mono text-white">$84.500</h3>
            <span className="text-[11px] font-medium px-2 py-1 rounded-full bg-[#4ADE8020] text-emerald-500">+2.1%</span>
          </div>
        </div>
        <div className="bg-brand-surface border border-brand-border rounded-[14px] p-5 shadow-[0_1px_20px_rgba(0,0,0,0.4)]">
          <p className="text-[12px] font-medium text-brand-gray uppercase tracking-wider mb-2">Clientes únicos</p>
          <div className="flex items-end justify-between">
            <h3 className="text-2xl font-bold font-mono text-white">1.842</h3>
            <span className="text-[11px] font-medium px-2 py-1 rounded-full bg-[#FF5C1A20] text-brand-orange">Nuevo</span>
          </div>
        </div>
        <div className="bg-brand-surface border border-brand-border rounded-[14px] p-5 shadow-[0_1px_20px_rgba(0,0,0,0.4)]">
          <p className="text-[12px] font-medium text-brand-gray uppercase tracking-wider mb-2">Método más usado</p>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-brand-elevated flex items-center justify-center">
              <CreditCard className="w-4 h-4 text-brand-orange" />
            </div>
            <h3 className="text-lg font-semibold text-white">Minders Pay QR</h3>
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-brand-surface border border-brand-border rounded-[14px] p-6 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-[16px] font-semibold text-white">Ventas diarias</h3>
            <select className="bg-brand-elevated border-brand-border text-xs rounded-lg text-brand-gray focus:border-brand-orange focus:ring-0">
              <option>Últimos 30 días</option>
              <option>Últimos 7 días</option>
            </select>
          </div>
          <div className="relative w-full h-[200px] flex items-end justify-between px-2 gap-2">
            <div className="w-full bg-[#FF5C1A20] h-[40%] rounded-t-sm relative group cursor-pointer hover:bg-brand-orange/40 transition-all">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-brand-elevated text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100">$120k</div>
            </div>
            <div className="w-full bg-[#FF5C1A30] h-[65%] rounded-t-sm relative group cursor-pointer hover:bg-brand-orange/40 transition-all"></div>
            <div className="w-full bg-[#FF5C1A40] h-[55%] rounded-t-sm relative group cursor-pointer hover:bg-brand-orange/40 transition-all"></div>
            <div className="w-full bg-[#FF5C1A] h-[90%] rounded-t-sm relative group cursor-pointer hover:bg-brand-orange/80 transition-all"></div>
            <div className="w-full bg-[#FF5C1A50] h-[75%] rounded-t-sm relative group cursor-pointer hover:bg-brand-orange/40 transition-all"></div>
            <div className="w-full bg-[#FF5C1A30] h-[45%] rounded-t-sm relative group cursor-pointer hover:bg-brand-orange/40 transition-all"></div>
            <div className="w-full bg-[#FF5C1A40] h-[60%] rounded-t-sm relative group cursor-pointer hover:bg-brand-orange/40 transition-all"></div>
            <div className="w-full bg-[#FF5C1A] h-[100%] rounded-t-sm relative group cursor-pointer hover:bg-brand-orange/80 transition-all"></div>
          </div>
          <div className="flex justify-between mt-4 text-[10px] text-brand-gray uppercase tracking-wider font-medium">
            <span>01 Oct</span>
            <span>10 Oct</span>
            <span>20 Oct</span>
            <span>31 Oct</span>
          </div>
        </div>
        <div className="bg-brand-surface border border-brand-border rounded-[14px] p-6 shadow-xl">
          <h3 className="text-[16px] font-semibold text-white mb-6">Distribución por canal</h3>
          <div className="flex flex-col items-center">
            <div className="relative w-32 h-32 mb-6">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path className="text-brand-border" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="100, 100" strokeWidth="3"></path>
                <path className="text-brand-orange" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="65, 100" strokeWidth="3"></path>
                <path className="text-emerald-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="20, 100" strokeDashoffset="-65" strokeWidth="3"></path>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-xs text-brand-gray">Total</span>
                <span className="text-lg font-bold text-white leading-none">100%</span>
              </div>
            </div>
            <div className="w-full space-y-3">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
                  <span className="text-brand-gray">Minders Checkout</span>
                </div>
                <span className="text-white font-semibold">65%</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="text-brand-gray">Transferencia</span>
                </div>
                <span className="text-white font-semibold">20%</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-brand-border"></span>
                  <span className="text-brand-gray">Otros</span>
                </div>
                <span className="text-white font-semibold">15%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Products & Clients */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-brand-surface border border-brand-border rounded-[14px] p-6 shadow-xl">
          <h3 className="text-[16px] font-semibold text-white mb-6">Productos más vendidos</h3>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-white">Suscripción Premium Mensual</span>
                <span className="text-sm font-mono text-brand-orange">$1.420.000</span>
              </div>
              <div className="h-2 w-full bg-brand-border rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-brand-orange to-brand-orange/80" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-white">Pack de Créditos (500)</span>
                <span className="text-sm font-mono text-brand-orange">$980.000</span>
              </div>
              <div className="h-2 w-full bg-brand-border rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-brand-orange to-brand-orange/80" style={{ width: '60%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-white">Servicio Consultoría Jr.</span>
                <span className="text-sm font-mono text-brand-orange">$450.000</span>
              </div>
              <div className="h-2 w-full bg-brand-border rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-brand-orange to-brand-orange/80" style={{ width: '35%' }}></div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-brand-surface border border-brand-border rounded-[14px] p-6 shadow-xl">
          <h3 className="text-[16px] font-semibold text-white mb-6">Clientes más frecuentes</h3>
          <div className="divide-y divide-brand-border/30">
            <div className="flex items-center justify-between py-4 first:pt-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-elevated border border-brand-border flex items-center justify-center text-xs font-bold text-brand-gray">RC</div>
                <div>
                  <p className="text-sm font-semibold text-white">Ricardo Casares</p>
                  <p className="text-[11px] text-brand-gray">14 compras este mes</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-mono font-bold text-emerald-500">$245.000</p>
                <p className="text-[10px] text-brand-gray uppercase tracking-tighter">Total gastado</p>
              </div>
            </div>
            <div className="flex items-center justify-between py-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-elevated border border-brand-border flex items-center justify-center text-xs font-bold text-brand-gray">MA</div>
                <div>
                  <p className="text-sm font-semibold text-white">Mariana Arriaga</p>
                  <p className="text-[11px] text-brand-gray">9 compras este mes</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-mono font-bold text-emerald-500">$182.300</p>
                <p className="text-[10px] text-brand-gray uppercase tracking-tighter">Total gastado</p>
              </div>
            </div>
            <div className="flex items-center justify-between py-4 last:pb-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-elevated border border-brand-border flex items-center justify-center text-xs font-bold text-brand-gray">LT</div>
                <div>
                  <p className="text-sm font-semibold text-white">Lucio Torres</p>
                  <p className="text-[11px] text-brand-gray">7 compras este mes</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-mono font-bold text-emerald-500">$156.000</p>
                <p className="text-[10px] text-brand-gray uppercase tracking-tighter">Total gastado</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
