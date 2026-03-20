import React from 'react';
import { Screen } from '../types';
import { Shield, Lock, Smartphone, Globe, ShoppingCart, Banknote, Ban, AlertTriangle, HelpCircle, Key, Fingerprint, LogOut, FileText, Download, ExternalLink, Trash2, ChevronRight } from 'lucide-react';
import { formatUSD } from '../utils/format';

export function SecurityScreen({ navigate }: { navigate: (s: Screen) => void }) {
  return (
    <div className="max-w-[1200px] mx-auto p-8 relative space-y-10">
      {/* Decorative Shapes */}
      <div className="fixed top-0 right-0 w-[300px] h-[300px] bg-brand-primary opacity-[0.06] blur-[80px] -z-10 pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-[200px] h-[200px] bg-brand-primary opacity-[0.04] blur-[100px] -z-10 pointer-events-none"></div>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h2 className="text-[28px] font-bold text-white tracking-tight">Seguridad y Privacidad</h2>
          <p className="text-brand-gray mt-1">Gestiona el acceso a tu cuenta y protege tu información.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-6 py-2.5 bg-brand-elevated border border-brand-border rounded-[10px] text-brand-gray text-sm font-semibold hover:text-white transition-all shadow-lg">
            Descargar reporte
          </button>
        </div>
      </div>

      {/* Security Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* SECTION: Acceso */}
        <section className="space-y-6">
          <div className="bg-brand-surface border border-brand-border rounded-[14px] p-6 shadow-xl">
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <Key className="w-5 h-5 text-brand-primary" />
              Métodos de Acceso
            </h3>
            <div className="space-y-4">
              {/* Item: Contraseña */}
              <div className="flex items-center justify-between p-4 bg-brand-elevated border border-brand-border rounded-[10px] hover:border-brand-primary/30 transition-all cursor-pointer group">
                <div>
                  <p className="text-sm font-semibold text-white">Contraseña</p>
                  <p className="text-xs text-brand-gray">Último cambio: hace 3 meses</p>
                </div>
                <button className="text-brand-primary text-xs font-semibold hover:underline">Actualizar</button>
              </div>
              {/* Item: PIN de Transacción */}
              <div className="flex items-center justify-between p-4 bg-brand-elevated border border-brand-border rounded-[10px] hover:border-brand-primary/30 transition-all cursor-pointer group">
                <div>
                  <p className="text-sm font-semibold text-white">PIN de 6 dígitos</p>
                  <p className="text-xs text-brand-gray">Requerido para transferencias y pagos</p>
                </div>
                <button className="text-brand-primary text-xs font-semibold hover:underline">Cambiar PIN</button>
              </div>
              {/* Item: Biometría */}
              <div className="flex items-center justify-between p-4 bg-brand-elevated border border-brand-border rounded-[10px] hover:border-brand-primary/30 transition-all cursor-pointer group">
                <div>
                  <p className="text-sm font-semibold text-white">Biometría (FaceID/TouchID)</p>
                  <p className="text-xs text-brand-gray">Acceso rápido en dispositivos móviles</p>
                </div>
                <div className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-brand-border rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
                </div>
              </div>
              {/* Item: 2FA */}
              <div className="flex items-center justify-between p-4 bg-brand-elevated border border-brand-border rounded-[10px] hover:border-brand-primary/30 transition-all cursor-pointer group">
                <div>
                  <p className="text-sm font-semibold text-white">Doble Factor (2FA)</p>
                  <p className="text-xs text-brand-gray">Autenticador de Google o SMS</p>
                </div>
                <span className="bg-[#4ADE8020] text-emerald-500 text-[11px] font-medium px-2.5 py-1 rounded-full uppercase tracking-wider">Activo</span>
              </div>
            </div>
          </div>

          {/* SECTION: Límites */}
          <div className="bg-brand-surface border border-brand-border rounded-[14px] p-6 shadow-xl">
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <Shield className="w-5 h-5 text-brand-primary" />
              Límites Operativos
            </h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between py-3 border-b border-brand-border/50">
                <div>
                  <p className="text-[12px] font-medium text-brand-gray uppercase tracking-widest">Transferencias Diarias</p>
                  <p className="font-mono text-brand-primary text-sm">{formatUSD(5000000)}</p>
                </div>
                <button className="p-2 hover:bg-brand-elevated rounded-lg text-brand-gray transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-brand-border/50">
                <div>
                  <p className="text-[12px] font-medium text-brand-gray uppercase tracking-widest">Retiro en Cajeros (ATM)</p>
                  <p className="font-mono text-brand-primary text-sm">{formatUSD(800000)}</p>
                </div>
                <button className="p-2 hover:bg-brand-elevated rounded-lg text-brand-gray transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: Sesiones y Privacidad */}
        <section className="space-y-6">
          {/* Sesiones Activas */}
          <div className="bg-brand-surface border border-brand-border rounded-[14px] p-6 shadow-xl">
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-brand-primary" />
              Sesiones Activas
            </h3>
            <div className="space-y-2">
              {/* Session 1: Current */}
              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-brand-elevated transition-colors group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-elevated border border-brand-border rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">MacBook Pro M2 <span className="text-[10px] text-emerald-500 font-bold ml-2 uppercase">Esta sesión</span></p>
                    <p className="text-xs text-brand-gray">Chrome • Bogotá, CO • Activo ahora</p>
                  </div>
                </div>
              </div>
              {/* Session 2 */}
              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-brand-elevated transition-colors border-t border-brand-border/30 group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-elevated border border-brand-border rounded-lg flex items-center justify-center">
                    <Smartphone className="w-5 h-5 text-brand-gray" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">iPhone 14 Pro</p>
                    <p className="text-xs text-brand-gray">Minders Pay App • Hace 2 horas</p>
                  </div>
                </div>
                <button className="text-brand-danger text-xs font-semibold hover:bg-brand-danger/10 px-3 py-1.5 rounded-md transition-all">Cerrar sesión</button>
              </div>
              {/* Session 3 */}
              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-brand-elevated transition-colors border-t border-brand-border/30 group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-brand-elevated border border-brand-border rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-brand-gray" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Windows Desktop</p>
                    <p className="text-xs text-brand-gray">Firefox • Medellín, CO • Hace 3 días</p>
                  </div>
                </div>
                <button className="text-brand-danger text-xs font-semibold hover:bg-brand-danger/10 px-3 py-1.5 rounded-md transition-all">Cerrar sesión</button>
              </div>
            </div>
            <button className="w-full mt-6 py-2.5 text-xs font-semibold text-brand-gray hover:text-white transition-colors border border-dashed border-brand-border rounded-lg">
              Cerrar todas las demás sesiones
            </button>
          </div>

          {/* Privacidad y Datos */}
          <div className="bg-brand-surface border border-brand-border rounded-[14px] p-6 shadow-xl">
            <h3 className="text-lg font-semibold text-white mb-6 flex items-center gap-2">
              <FileText className="w-5 h-5 text-brand-primary" />
              Privacidad y Datos
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center justify-between">
                <span className="text-sm text-brand-gray">Consentimiento de marketing</span>
                <div className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" />
                  <div className="w-11 h-6 bg-brand-border rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-primary"></div>
                </div>
              </li>
              <li>
                <button className="w-full flex items-center justify-between group">
                  <span className="text-sm text-brand-gray group-hover:text-white transition-colors">Política de tratamiento de datos</span>
                  <ExternalLink className="w-4 h-4 text-brand-textTer" />
                </button>
              </li>
              <li>
                <button className="w-full flex items-center justify-between group">
                  <span className="text-sm text-brand-gray group-hover:text-white transition-colors">Exportar mi información (.json)</span>
                  <Download className="w-4 h-4 text-brand-textTer" />
                </button>
              </li>
            </ul>
            <div className="mt-8 pt-6 border-t border-brand-border">
              <button className="text-brand-danger text-sm font-semibold flex items-center gap-2 hover:opacity-80 transition-opacity">
                <Trash2 className="w-5 h-5" />
                Eliminar mi cuenta definitivamente
              </button>
              <p className="text-[11px] text-brand-textTer mt-2 leading-relaxed">
                Esta acción es irreversible. Se eliminarán todos tus datos y saldo remanente debe ser retirado previamente.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
