import React from 'react';
import { Screen } from '../types';

export function NotificationsScreen({ navigate }: { navigate: (s: Screen) => void }) {
  return (
    <div className="max-w-[800px] mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-[32px] font-bold text-white tracking-[-1px] leading-tight">Notificaciones</h1>
          <p className="text-brand-gray mt-1">Mantente al tanto de toda la actividad de tu cuenta.</p>
        </div>
        <button className="text-brand-orange text-sm font-semibold hover:underline">Marcar todas como leídas</button>
      </div>

      <div className="bg-brand-sidebar border border-brand-border rounded-[20px] overflow-hidden shadow-lg">
        {[
          {
            title: 'Transferencia recibida',
            desc: 'Recibiste $125.000 de Martin Arzuaga.',
            time: 'Hace 10 min',
            unread: true,
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>,
            color: 'text-green-400',
            bg: 'bg-green-400/10'
          },
          {
            title: '¡Crédito preaprobado!',
            desc: 'Tienes un crédito de $500.000 listo para usar. Acredítalo ahora.',
            time: 'Hace 2 horas',
            unread: true,
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>,
            color: 'text-brand-orange',
            bg: 'bg-brand-orange/10'
          },
          {
            title: 'Pago de servicio exitoso',
            desc: 'Se debitaron $5.400 por el pago de Personal Pay.',
            time: 'Ayer',
            unread: false,
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>,
            color: 'text-brand-gray',
            bg: 'bg-brand-card'
          },
          {
            title: 'Nuevo ingreso a tu cuenta',
            desc: 'Detectamos un nuevo inicio de sesión desde un dispositivo iPhone 14.',
            time: '22 Oct',
            unread: false,
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>,
            color: 'text-brand-gray',
            bg: 'bg-brand-card'
          },
          {
            title: 'Resumen mensual disponible',
            desc: 'Ya puedes ver el análisis de tus gastos de Septiembre.',
            time: '01 Oct',
            unread: false,
            icon: <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>,
            color: 'text-brand-gray',
            bg: 'bg-brand-card'
          }
        ].map((notif, i) => (
          <div key={i} className={`p-5 flex items-start gap-4 border-b border-brand-border/50 last:border-0 transition-colors cursor-pointer ${notif.unread ? 'bg-brand-card/30 hover:bg-brand-card/50' : 'hover:bg-brand-card/30'}`}>
            <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${notif.bg} ${notif.color}`}>
              {notif.icon}
            </div>
            <div className="flex-1 pt-1">
              <div className="flex justify-between items-start mb-1">
                <h4 className={`text-sm font-semibold ${notif.unread ? 'text-white' : 'text-brand-gray'}`}>{notif.title}</h4>
                <span className="text-[11px] text-brand-gray whitespace-nowrap ml-2">{notif.time}</span>
              </div>
              <p className="text-sm text-brand-gray leading-relaxed">{notif.desc}</p>
            </div>
            {notif.unread && (
              <div className="w-2.5 h-2.5 rounded-full bg-brand-orange mt-2 shrink-0"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
