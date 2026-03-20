import React from 'react';
import { Screen } from '../types';
import { ArrowLeft, Settings, Lock, CreditCard, Globe, ShoppingCart, Banknote, Ban, AlertTriangle, HelpCircle } from 'lucide-react';

export function CardManageScreen({ navigate }: { navigate: (s: Screen) => void }) {
  return (
    <div className="flex flex-col gap-8 max-w-[800px] mx-auto w-full">
      {/* Header */}
      <div className="flex items-center gap-4 border-b border-brand-border pb-6">
        <button 
          onClick={() => navigate('cards')}
          className="w-10 h-10 rounded-full bg-brand-bg border border-brand-border flex items-center justify-center text-brand-gray hover:text-white hover:border-brand-orange transition-all group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        </button>
        <div>
          <h1 className="text-white text-2xl font-black tracking-tight">Ajustes de Tarjeta</h1>
          <p className="text-brand-gray text-sm">Gestiona los límites y la seguridad de tu tarjeta terminada en 4281.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-8">
        
        {/* Security Settings */}
        <div className="bg-brand-card border border-brand-border rounded-2xl p-6 shadow-lg">
          <h2 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
            <Lock className="w-5 h-5 text-brand-orange" />
            Seguridad y Controles
          </h2>
          
          <div className="flex flex-col gap-6">
            {/* Toggle 1 */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-brand-bg border border-brand-border hover:border-brand-orange/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Compras Internacionales</p>
                  <p className="text-brand-gray text-xs">Permitir pagos fuera de tu país de residencia.</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-brand-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-brand-gray after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
              </label>
            </div>

            {/* Toggle 2 */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-brand-bg border border-brand-border hover:border-brand-orange/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                  <ShoppingCart className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Compras por Internet</p>
                  <p className="text-brand-gray text-xs">Permitir transacciones en e-commerce y suscripciones.</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-brand-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-brand-gray after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
              </label>
            </div>

            {/* Toggle 3 */}
            <div className="flex items-center justify-between p-4 rounded-xl bg-brand-bg border border-brand-border hover:border-brand-orange/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                  <Banknote className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">Retiros en Cajeros (ATM)</p>
                  <p className="text-brand-gray text-xs">Permitir retiros de efectivo en cajeros automáticos.</p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" />
                <div className="w-11 h-6 bg-brand-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-brand-gray after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
              </label>
            </div>
          </div>
        </div>

        {/* Limits Settings */}
        <div className="bg-brand-card border border-brand-border rounded-2xl p-6 shadow-lg">
          <h2 className="text-white font-bold text-lg mb-6 flex items-center gap-2">
            <Settings className="w-5 h-5 text-brand-orange" />
            Límites de Uso
          </h2>
          
          <div className="flex flex-col gap-8">
            {/* Limit 1 */}
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-white font-bold text-sm">Límite Diario de Compras</p>
                  <p className="text-brand-gray text-xs">Monto máximo permitido por día.</p>
                </div>
                <span className="text-xl font-black text-brand-orange">$ 2.000.000</span>
              </div>
              <div className="relative flex items-center group">
                <div className="h-2 w-full bg-brand-bg border border-brand-border rounded-full overflow-hidden">
                  <div className="h-full w-[60%] bg-brand-orange"></div>
                </div>
                <div className="absolute left-[60%] -ml-3 w-6 h-6 rounded-full bg-brand-orange border-4 border-brand-card shadow-lg cursor-pointer transform hover:scale-110 transition-transform"></div>
              </div>
              <div className="flex justify-between text-[10px] text-brand-gray font-bold uppercase tracking-widest">
                <span>$ 100.000</span>
                <span>$ 5.000.000</span>
              </div>
            </div>

            {/* Limit 2 */}
            <div className="space-y-4 pt-6 border-t border-brand-border">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-white font-bold text-sm">Límite por Transacción</p>
                  <p className="text-brand-gray text-xs">Monto máximo por cada compra individual.</p>
                </div>
                <span className="text-xl font-black text-brand-orange">$ 500.000</span>
              </div>
              <div className="relative flex items-center group">
                <div className="h-2 w-full bg-brand-bg border border-brand-border rounded-full overflow-hidden">
                  <div className="h-full w-[30%] bg-brand-orange"></div>
                </div>
                <div className="absolute left-[30%] -ml-3 w-6 h-6 rounded-full bg-brand-orange border-4 border-brand-card shadow-lg cursor-pointer transform hover:scale-110 transition-transform"></div>
              </div>
              <div className="flex justify-between text-[10px] text-brand-gray font-bold uppercase tracking-widest">
                <span>$ 50.000</span>
                <span>$ 2.000.000</span>
              </div>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6 shadow-lg">
          <h2 className="text-red-500 font-bold text-lg mb-6 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Zona de Peligro
          </h2>
          
          <div className="flex flex-col gap-4">
            <button className="flex items-center justify-between p-4 rounded-xl bg-brand-card border border-red-500/30 hover:bg-red-500/10 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                  <Ban className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-white font-bold text-sm">Bloquear Tarjeta Temporalmente</p>
                  <p className="text-brand-gray text-xs">Nadie podrá usarla hasta que la desbloquees.</p>
                </div>
              </div>
            </button>

            <button className="flex items-center justify-between p-4 rounded-xl bg-brand-card border border-red-500/30 hover:bg-red-500 hover:border-red-500 transition-colors group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 group-hover:text-white group-hover:bg-white/20 transition-colors">
                  <CreditCard className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <p className="text-red-500 font-bold text-sm group-hover:text-white transition-colors">Cancelar y Reponer Tarjeta</p>
                  <p className="text-brand-gray text-xs group-hover:text-white/80 transition-colors">Si la perdiste o te la robaron. Esta acción es irreversible.</p>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end gap-4 mt-4">
          <button 
            onClick={() => navigate('cards')}
            className="px-6 py-3 rounded-xl font-bold text-brand-gray hover:text-white hover:bg-brand-card transition-colors"
          >
            Cancelar
          </button>
          <button 
            onClick={() => navigate('operation_success')}
            className="px-8 py-3 rounded-xl font-bold bg-brand-orange text-white hover:bg-brand-orange/90 shadow-lg shadow-brand-orange/20 transition-all"
          >
            Guardar Cambios
          </button>
        </div>

      </div>
    </div>
  );
}
