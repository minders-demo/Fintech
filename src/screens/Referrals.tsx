import React from 'react';
import { Screen } from '../types';
import { ArrowLeft, Copy, Link as LinkIcon, MessageCircle, Users, Gift, Bell } from 'lucide-react';

export function ReferralsScreen({ navigate }: { navigate: (s: Screen) => void }) {
  return (
    <div className="flex justify-center relative w-full">
      <div className="w-full max-w-[680px] space-y-8">
        {/* Decorative Shapes */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-primary opacity-[0.06] blur-[80px] -z-10 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-brand-primary opacity-[0.04] blur-[80px] -z-10 pointer-events-none"></div>

        {/* Hero Section */}
        <section className="bg-brand-surface border border-brand-border rounded-[20px] p-7 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="flex-1 text-center md:text-left relative z-10">
            <span className="inline-block bg-[#FF5C1A20] text-brand-primary px-3 py-1 rounded-full text-[11px] font-semibold mb-3 tracking-wider">PROMO ACTIVA</span>
            <h1 className="text-3xl font-bold text-white mb-3">Invita y gana $10.000 por amigo</h1>
            <p className="text-brand-gray text-sm leading-relaxed">Comparte tu código y cuando tus amigos realicen su primer pago, ambos reciben el premio en su cuenta al instante.</p>
          </div>
          <div className="hidden md:block relative z-10">
            <div className="w-32 h-32 bg-brand-elevated border border-brand-border rounded-2xl flex items-center justify-center">
              <Gift className="w-16 h-16 text-brand-primary" />
            </div>
          </div>
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#FF5C1A08] to-transparent pointer-events-none"></div>
        </section>

        {/* Referral Code Section */}
        <section className="bg-brand-surface border border-[#FF5C1A30] rounded-[14px] p-6 shadow-xl text-center">
          <p className="text-[12px] font-medium text-brand-gray uppercase tracking-widest mb-4">Tu código de invitación</p>
          <div className="flex flex-col items-center gap-6">
            <div className="font-mono text-3xl md:text-4xl text-brand-primary font-semibold tracking-widest bg-brand-elevated px-8 py-4 rounded-xl border border-brand-border select-all">
              MARIA2025
            </div>
            <div className="grid grid-cols-3 gap-3 w-full max-w-sm">
              <button className="flex flex-col items-center justify-center gap-1 h-auto py-3 bg-brand-elevated border border-brand-border text-brand-gray rounded-xl hover:text-white hover:bg-brand-border transition-all">
                <Copy className="w-5 h-5 text-brand-primary" />
                <span className="text-[10px] uppercase font-medium">Copiar</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-1 h-auto py-3 bg-brand-elevated border border-brand-border text-brand-gray rounded-xl hover:text-white hover:bg-brand-border transition-all">
                <LinkIcon className="w-5 h-5 text-brand-primary" />
                <span className="text-[10px] uppercase font-medium">Link</span>
              </button>
              <button className="flex flex-col items-center justify-center gap-1 h-auto py-3 bg-brand-elevated border border-brand-border text-brand-gray rounded-xl hover:text-white hover:bg-brand-border transition-all">
                <MessageCircle className="w-5 h-5 text-emerald-500" />
                <span className="text-[10px] uppercase font-medium">WhatsApp</span>
              </button>
            </div>
          </div>
        </section>

        {/* Metrics Grid */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-brand-surface border border-brand-border rounded-[14px] p-6 text-center shadow-xl">
            <p className="text-[12px] font-medium text-brand-gray uppercase tracking-widest mb-2">Enviados</p>
            <p className="text-3xl font-bold text-white">24</p>
          </div>
          <div className="bg-brand-surface border border-brand-primary/20 rounded-[14px] p-6 text-center shadow-xl">
            <p className="text-[12px] font-medium text-brand-gray uppercase tracking-widest mb-2">Activaron</p>
            <p className="text-3xl font-bold text-brand-primary">7</p>
          </div>
          <div className="bg-brand-surface border border-brand-border rounded-[14px] p-6 text-center shadow-xl">
            <p className="text-[12px] font-medium text-brand-gray uppercase tracking-widest mb-2">Gané</p>
            <p className="text-3xl font-bold text-emerald-500">$70.000</p>
          </div>
        </section>

        {/* History Section */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-white px-2">Historial de referidos</h2>
          <div className="bg-brand-surface border border-brand-border rounded-[14px] overflow-hidden shadow-xl">
            {[
              { name: 'Lucas Caseres', date: '12 Oct 2024', status: 'Completado', amount: '+$10.000', color: 'text-emerald-500', bg: 'bg-[#4ADE8020]', initials: 'LC' },
              { name: 'Marta Rodriguez', date: '15 Oct 2024', status: 'Pendiente', amount: '$0', color: 'text-brand-gray', bg: 'bg-[#FBBF2420]', initials: 'MR' },
              { name: 'Julian Villalba', date: '20 Oct 2024', status: 'Completado', amount: '+$10.000', color: 'text-emerald-500', bg: 'bg-[#4ADE8020]', initials: 'JV' },
            ].map((ref, i) => (
              <div key={i} className="flex items-center justify-between p-4 hover:bg-brand-elevated transition-colors border-b border-brand-border/50 last:border-0">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-elevated flex items-center justify-center text-brand-gray font-semibold border border-brand-border">
                    {ref.initials}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{ref.name}</h3>
                    <p className="text-[11px] text-brand-gray">Invitado el {ref.date}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`inline-block px-2 py-1 rounded-full ${ref.bg} ${ref.status === 'Pendiente' ? 'text-brand-warning' : 'text-emerald-500'} text-[11px] font-medium mb-1`}>
                    {ref.status}
                  </span>
                  <p className={`${ref.color} font-semibold text-sm`}>{ref.amount}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full h-11 bg-brand-elevated border border-brand-border text-brand-gray rounded-xl font-semibold text-sm hover:text-white transition-all">
            Ver todos los movimientos
          </button>
        </section>
      </div>
    </div>
  );
}
