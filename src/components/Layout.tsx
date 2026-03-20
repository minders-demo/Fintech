import React from 'react';
import { 
  Home, Send, Briefcase, PieChart, User, Settings, LogOut, Bell, Gift, Star, ShieldCheck, MessageSquare, ShoppingBag
} from 'lucide-react';
import { Screen } from '../types';
import { useUser } from '../context/UserContext';

export const Logo = () => (
  <div className="flex items-center gap-2">
    <span className="text-2xl font-bold tracking-tight text-white">Minders<span className="text-brand-orange">Pay</span></span>
  </div>
);

export function DashboardLayout({ children, current, navigate }: { children: React.ReactNode, current: string, navigate: (s: Screen) => void }) {
  const { getFullName, getInitials } = useUser();
  
  return (
    <div className="flex h-screen overflow-hidden bg-brand-bg">
      {/* Sidebar */}
      <aside className="w-64 bg-brand-sidebar border-r border-brand-border flex-col hidden md:flex z-50">
        <div className="p-6 mb-4">
          <Logo />
        </div>
        <nav className="flex-1 px-3 space-y-6 overflow-y-auto custom-scrollbar">
          <div>
            <p className="px-3 mb-2 text-[10px] font-bold text-brand-gray uppercase tracking-widest">Principal</p>
            <ul className="space-y-1">
              <li>
                <NavItem icon={<Home />} label="Inicio" active={current === 'dashboard'} onClick={() => navigate('dashboard')} />
              </li>
              <li>
                <NavItem icon={<Send />} label="Mover dinero" active={current === 'transfer' || current.startsWith('topup')} onClick={() => navigate('transfer')} />
              </li>
              <li>
                <NavItem icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>} label="Movimientos" active={current === 'movements'} onClick={() => navigate('movements')} />
              </li>
              <li>
                <NavItem icon={<Gift />} label="Referidos" active={current === 'referrals'} onClick={() => navigate('referrals')} />
              </li>
            </ul>
          </div>
          <div>
            <p className="px-3 mb-2 text-[10px] font-bold text-brand-gray uppercase tracking-widest">Productos</p>
            <ul className="space-y-1">
              <li>
                <NavItem icon={<Briefcase />} label="Productos" active={['products', 'pay_services', 'mobile_topup', 'insurance_hub', 'cards', 'credit_offer'].includes(current)} onClick={() => navigate('products')} />
              </li>
              <li>
                <NavItem icon={<PieChart />} label="Finanzas" active={current === 'finance'} onClick={() => navigate('finance')} />
              </li>
              <li>
                <NavItem icon={<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>} label="Mi Negocio" active={current === 'business_dashboard'} onClick={() => navigate('business_dashboard')} />
              </li>
              <li>
                <NavItem icon={<Star />} label="Beneficios" active={current === 'benefits'} onClick={() => navigate('benefits')} />
              </li>
              <li>
                <NavItem icon={<ShoppingBag />} label="Catálogo" active={current === 'catalog'} onClick={() => navigate('catalog')} />
              </li>
            </ul>
          </div>
          <div>
            <p className="px-3 mb-2 text-[10px] font-bold text-brand-gray uppercase tracking-widest">Cuenta</p>
            <ul className="space-y-1">
              <li>
                <NavItem icon={<Bell />} label="Notificaciones" active={current === 'notifications'} onClick={() => navigate('notifications')} />
              </li>
              <li>
                <NavItem icon={<User />} label="Perfil" active={current === 'profile'} onClick={() => navigate('profile')} />
              </li>
              <li>
                <NavItem icon={<ShieldCheck />} label="Seguridad" active={current === 'security'} onClick={() => navigate('security')} />
              </li>
              <li>
                <NavItem icon={<MessageSquare />} label="Soporte IA" active={current === 'ai_support'} onClick={() => navigate('ai_support')} />
              </li>
            </ul>
          </div>
        </nav>
        <div className="p-4 border-t border-brand-border">
          <div className="flex items-center gap-3 p-2 bg-brand-card rounded-xl cursor-pointer hover:bg-brand-border transition-colors" onClick={() => navigate('login')}>
            <div className="w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center text-xs font-bold text-white">{getInitials()}</div>
            <div className="flex-1 overflow-hidden">
              <p className="text-[13px] font-semibold text-white truncate">{getFullName()}</p>
              <p className="text-[11px] text-brand-gray truncate">Cerrar sesión</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full overflow-hidden relative">
        {/* Header */}
        <header className="h-16 border-b border-brand-border bg-brand-sidebar flex items-center justify-between px-8 sticky top-0 z-40">
          <div className="flex items-center gap-2">
            <h2 className="text-sm font-medium text-brand-gray">Hola, <span className="text-white">{getFullName()}</span> 👋</h2>
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => navigate('notifications')} className="relative p-2 text-brand-gray hover:text-white transition-colors">
              <Bell className="w-6 h-6" />
              <span className="absolute top-1.5 right-2 w-4 h-4 bg-red-500 text-[10px] text-white flex items-center justify-center rounded-full border-2 border-brand-sidebar">3</span>
            </button>
            <div className="w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center text-xs font-bold text-white cursor-pointer border border-brand-border">
              {getInitials()}
            </div>
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto relative">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-orange/5 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="p-4 md:p-8 relative z-10">
            <div className="max-w-[1200px] mx-auto">
              {children}
            </div>
          </div>
        </div>
      </main>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-brand-sidebar border-t border-brand-border flex justify-around p-3 z-50 pb-safe">
        <MobileNavItem icon={<Home />} label="Inicio" active={current === 'dashboard'} onClick={() => navigate('dashboard')} />
        <MobileNavItem icon={<Send />} label="Mover" active={current === 'transfer'} onClick={() => navigate('transfer')} />
        <MobileNavItem icon={<Briefcase />} label="Productos" active={['products', 'pay_services', 'mobile_topup', 'insurance_hub', 'cards', 'credit_offer'].includes(current)} onClick={() => navigate('products')} />
        <MobileNavItem icon={<PieChart />} label="Finanzas" active={current === 'finance'} onClick={() => navigate('finance')} />
      </div>
    </div>
  );
}

function NavItem({ icon, label, active, onClick }: any) {
  return (
    <button 
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all ${active ? 'bg-brand-orange/10 border-l-[3px] border-brand-orange text-brand-orange font-semibold' : 'text-brand-gray hover:bg-brand-card hover:text-white font-medium'}`}
    >
      {React.cloneElement(icon, { className: 'w-[18px] h-[18px]' })}
      <span>{label}</span>
    </button>
  );
}

function MobileNavItem({ icon, label, active, onClick }: any) {
  return (
    <button onClick={onClick} className={`flex flex-col items-center gap-1 p-2 ${active ? 'text-brand-orange' : 'text-brand-gray'}`}>
      {React.cloneElement(icon, { className: 'w-6 h-6' })}
      <span className="text-[10px] font-medium">{label}</span>
    </button>
  );
}
