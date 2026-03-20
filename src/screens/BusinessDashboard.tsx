import React from 'react';
import { Screen } from '../types';
import { 
  ArrowRight, 
  BarChart3, 
  CreditCard, 
  Link as LinkIcon, 
  Plus, 
  Settings, 
  Store, 
  Users, 
  Wallet 
} from 'lucide-react';

export function BusinessDashboardScreen({ navigate }: { navigate: (s: Screen) => void }) {
  return (
    <div className="p-8 max-w-[1200px] mx-auto relative space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-brand-elevated border border-brand-border flex items-center justify-center shadow-lg">
            <Store className="w-7 h-7 text-brand-orange" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white tracking-tight">Mi Negocio</h1>
            <p className="text-sm text-brand-gray mt-1">Gestiona tus ventas, links de cobro y clientes.</p>
          </div>
        </div>
        <button className="h-10 px-4 bg-brand-elevated border border-brand-border rounded-xl text-brand-gray text-sm font-semibold hover:text-white transition-colors flex items-center gap-2">
          <Settings className="w-4 h-4" />
          Configuración
        </button>
      </div>

      {/* Main Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-brand-surface border border-brand-border rounded-[20px] p-6 shadow-xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
            <Wallet className="w-24 h-24 text-brand-orange" />
          </div>
          <p className="text-xs font-medium text-brand-gray uppercase tracking-wider mb-2 relative z-10">Saldo Disponible</p>
          <h2 className="text-4xl font-bold font-mono text-white mb-4 relative z-10">$12.450.000</h2>
          <div className="flex gap-3 relative z-10">
            <button className="flex-1 h-10 bg-brand-orange text-white text-sm font-semibold rounded-xl hover:bg-brand-orange/90 transition-colors">
              Retirar
            </button>
            <button className="flex-1 h-10 bg-brand-elevated border border-brand-border text-brand-gray text-sm font-semibold rounded-xl hover:text-white transition-colors">
              Historial
            </button>
          </div>
        </div>

        <div className="bg-brand-surface border border-brand-border rounded-[20px] p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-medium text-brand-gray uppercase tracking-wider">Ventas del mes</p>
              <span className="text-[10px] font-bold px-2 py-1 rounded-full bg-[#4ADE8020] text-emerald-500">+15%</span>
            </div>
            <h3 className="text-2xl font-bold font-mono text-white">$4.285.900</h3>
          </div>
          <button 
            onClick={() => navigate('sales_stats')}
            className="w-full h-10 bg-brand-elevated border border-brand-border text-brand-gray text-sm font-semibold rounded-xl hover:text-white transition-colors flex items-center justify-center gap-2 mt-4"
          >
            <BarChart3 className="w-4 h-4" />
            Ver Estadísticas
          </button>
        </div>

        <div className="bg-brand-surface border border-brand-border rounded-[20px] p-6 shadow-xl flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs font-medium text-brand-gray uppercase tracking-wider">Links Activos</p>
              <div className="w-6 h-6 rounded-full bg-brand-elevated flex items-center justify-center">
                <LinkIcon className="w-3 h-3 text-brand-orange" />
              </div>
            </div>
            <h3 className="text-2xl font-bold font-mono text-white">12</h3>
          </div>
          <button 
            onClick={() => navigate('create_payment_link')}
            className="w-full h-10 bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-sm font-semibold rounded-xl hover:bg-brand-orange/20 transition-colors flex items-center justify-center gap-2 mt-4"
          >
            <Plus className="w-4 h-4" />
            Crear Link de Cobro
          </button>
        </div>
      </section>

      {/* Quick Actions & Recent Activity */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Actions */}
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-brand-gray uppercase tracking-wider px-2">Herramientas</h3>
          
          <div 
            onClick={() => navigate('charge_qr')}
            className="bg-brand-surface border border-brand-border rounded-[16px] p-4 flex items-center gap-4 cursor-pointer hover:bg-brand-elevated transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-elevated border border-brand-border flex items-center justify-center group-hover:border-brand-orange/50 transition-colors">
              <CreditCard className="w-5 h-5 text-brand-orange" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-white">Cobrar con QR</h4>
              <p className="text-xs text-brand-gray mt-0.5">Muestra tu QR para recibir pagos</p>
            </div>
            <ArrowRight className="w-4 h-4 text-brand-gray group-hover:text-brand-orange transition-colors" />
          </div>

          <div 
            onClick={() => navigate('create_payment_link')}
            className="bg-brand-surface border border-brand-border rounded-[16px] p-4 flex items-center gap-4 cursor-pointer hover:bg-brand-elevated transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-brand-elevated border border-brand-border flex items-center justify-center group-hover:border-brand-orange/50 transition-colors">
              <LinkIcon className="w-5 h-5 text-brand-orange" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-white">Links de Cobro</h4>
              <p className="text-xs text-brand-gray mt-0.5">Comparte links por WhatsApp o redes</p>
            </div>
            <ArrowRight className="w-4 h-4 text-brand-gray group-hover:text-brand-orange transition-colors" />
          </div>

          <div className="bg-brand-surface border border-brand-border rounded-[16px] p-4 flex items-center gap-4 cursor-pointer hover:bg-brand-elevated transition-all group">
            <div className="w-12 h-12 rounded-xl bg-brand-elevated border border-brand-border flex items-center justify-center group-hover:border-brand-orange/50 transition-colors">
              <Users className="w-5 h-5 text-brand-orange" />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-semibold text-white">Directorio de Clientes</h4>
              <p className="text-xs text-brand-gray mt-0.5">Gestiona la información de tus compradores</p>
            </div>
            <ArrowRight className="w-4 h-4 text-brand-gray group-hover:text-brand-orange transition-colors" />
          </div>
        </div>

        {/* Recent Activity */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between px-2">
            <h3 className="text-sm font-semibold text-brand-gray uppercase tracking-wider">Últimas Ventas</h3>
            <button className="text-xs font-semibold text-brand-orange hover:text-brand-orange/80 transition-colors">Ver todas</button>
          </div>
          
          <div className="bg-brand-surface border border-brand-border rounded-[20px] overflow-hidden shadow-xl">
            <div className="divide-y divide-brand-border/30">
              {/* Transaction Item */}
              <div className="p-4 flex items-center justify-between hover:bg-brand-elevated/50 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#4ADE8015] flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-emerald-500 rotate-45" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Pago de Link - Consultoría</p>
                    <p className="text-xs text-brand-gray mt-0.5">Hoy, 14:30 • Carlos Mendoza</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold font-mono text-emerald-500">+$150.000</p>
                  <p className="text-[10px] text-emerald-500/70 uppercase tracking-wider mt-0.5">Aprobado</p>
                </div>
              </div>

              {/* Transaction Item */}
              <div className="p-4 flex items-center justify-between hover:bg-brand-elevated/50 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#4ADE8015] flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-emerald-500 rotate-45" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Cobro con QR</p>
                    <p className="text-xs text-brand-gray mt-0.5">Hoy, 11:15 • Cliente Local</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold font-mono text-emerald-500">+$45.500</p>
                  <p className="text-[10px] text-emerald-500/70 uppercase tracking-wider mt-0.5">Aprobado</p>
                </div>
              </div>

              {/* Transaction Item */}
              <div className="p-4 flex items-center justify-between hover:bg-brand-elevated/50 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#FF5C1A15] flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-brand-orange -rotate-45" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Retiro a Cuenta Bancaria</p>
                    <p className="text-xs text-brand-gray mt-0.5">Ayer, 18:00 • Bancolombia ****1234</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold font-mono text-white">-$500.000</p>
                  <p className="text-[10px] text-brand-gray uppercase tracking-wider mt-0.5">Completado</p>
                </div>
              </div>

              {/* Transaction Item */}
              <div className="p-4 flex items-center justify-between hover:bg-brand-elevated/50 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#4ADE8015] flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-emerald-500 rotate-45" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">Pago de Link - Producto A</p>
                    <p className="text-xs text-brand-gray mt-0.5">Ayer, 09:45 • Laura Gómez</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold font-mono text-emerald-500">+$89.900</p>
                  <p className="text-[10px] text-emerald-500/70 uppercase tracking-wider mt-0.5">Aprobado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
