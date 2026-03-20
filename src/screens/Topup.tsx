import React from 'react';
import { Screen, TransferData } from '../types';
import { formatUSD } from '../utils/format';
import { useMovements } from '../context/MovementsContext';

export function TopupChannelScreen({ navigate }: { navigate: (s: Screen) => void }) {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center p-4">
      <div className="w-full max-w-[480px]">
        <nav className="mb-8">
          <button onClick={() => navigate('dashboard')} className="inline-flex items-center text-brand-gray hover:text-white transition-colors gap-2 text-sm font-medium">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Volver al inicio
          </button>
        </nav>

        <header className="mb-10 text-center">
          <h1 className="text-3xl font-bold text-white tracking-tight mb-2">Ingresar dinero</h1>
          <p className="text-brand-gray text-sm">Elige cómo quieres cargar saldo en tu cuenta Minders Pay.</p>
        </header>

        <div className="space-y-4">
          <button onClick={() => navigate('topup_instructions')} className="w-full bg-brand-sidebar border border-brand-border hover:border-brand-orange rounded-2xl p-6 text-left transition-all group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/0 to-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex items-start gap-5 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-brand-card border border-brand-border flex items-center justify-center shrink-0 text-brand-orange group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path></svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-1">Transferencia bancaria</h3>
                <p className="text-sm text-brand-gray leading-relaxed">Usa tu CVU o Alias para transferir desde cualquier banco o billetera virtual. Acreditación inmediata.</p>
              </div>
              <div className="text-brand-gray group-hover:text-brand-orange transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </div>
            </div>
          </button>

          <button onClick={() => navigate('topup_cash')} className="w-full bg-brand-sidebar border border-brand-border hover:border-brand-orange rounded-2xl p-6 text-left transition-all group relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-orange/0 to-brand-orange/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex items-start gap-5 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-brand-card border border-brand-border flex items-center justify-center shrink-0 text-green-400 group-hover:scale-110 transition-transform">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-1">Efectivo en sucursales</h3>
                <p className="text-sm text-brand-gray leading-relaxed">Acércate a un Rapipago o Pago Fácil con tu código de recarga. Acreditación en el acto.</p>
              </div>
              <div className="text-brand-gray group-hover:text-brand-orange transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export function TopupInstructionsScreen({ navigate }: { navigate: (s: Screen, d?: TransferData) => void }) {
  const { addTransaction, updateBalance } = useMovements();

  const handleSimulateTopup = () => {
    const amount = 15000;
    updateBalance(amount, 'add');
    addTransaction({
      id: Math.random().toString(36).substr(2, 9),
      type: 'transfer_in',
      status: 'completed',
      amount: amount,
      formattedAmount: `+ ${formatUSD(amount)}`,
      recipientName: 'Transferencia recibida',
      concept: 'Recarga de saldo',
      category: 'Ingresos',
      createdAtISO: new Date().toISOString(),
      dateLabel: 'Hoy',
      timeLabel: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      operationNumber: `#REC-${Math.floor(Math.random() * 1000000000)}`
    });
    navigate('topup_success', { amount: amount.toString(), recipient: 'Transferencia', successType: 'topup' });
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center p-4">
      <div className="w-full max-w-[480px]">
        <nav className="mb-8">
          <button onClick={() => navigate('topup_channel')} className="inline-flex items-center text-brand-gray hover:text-white transition-colors gap-2 text-sm font-medium">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Volver a métodos
          </button>
        </nav>

        <header className="mb-8 text-center">
          <div className="w-16 h-16 bg-brand-sidebar border border-brand-border rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <svg className="w-8 h-8 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path></svg>
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight mb-2">Datos de tu cuenta</h1>
          <p className="text-brand-gray text-sm">Transfiere desde tu banco o billetera virtual usando estos datos. El dinero se acreditará al instante.</p>
        </header>

        <div className="bg-brand-sidebar border border-brand-border rounded-[20px] p-6 mb-8 shadow-xl">
          <div className="space-y-6">
            <div>
              <label className="text-[11px] font-bold text-brand-gray uppercase tracking-widest mb-2 block">CVU</label>
              <div className="flex items-center justify-between bg-brand-card border border-brand-border rounded-xl p-4">
                <span className="text-lg font-mono text-white tracking-wider">0000003100012345678901</span>
                <button className="text-brand-orange hover:text-orange-400 transition-colors p-2 bg-brand-orange/10 rounded-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                </button>
              </div>
            </div>
            <div>
              <label className="text-[11px] font-bold text-brand-gray uppercase tracking-widest mb-2 block">Alias</label>
              <div className="flex items-center justify-between bg-brand-card border border-brand-border rounded-xl p-4">
                <span className="text-lg font-mono text-white tracking-wider">MARIA.MINDERS.PAY</span>
                <button className="text-brand-orange hover:text-orange-400 transition-colors p-2 bg-brand-orange/10 rounded-lg">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path></svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <button onClick={handleSimulateTopup} className="w-full h-12 bg-brand-orange hover:bg-orange-600 text-white rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-orange/20">
          Simular transferencia recibida
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
        </button>
      </div>
    </div>
  );
}

export function TopupCashScreen({ navigate }: { navigate: (s: Screen, d?: TransferData) => void }) {
  const { addTransaction, updateBalance } = useMovements();

  const handleSimulateTopup = () => {
    const amount = 15000;
    updateBalance(amount, 'add');
    addTransaction({
      id: Math.random().toString(36).substr(2, 9),
      type: 'transfer_in',
      status: 'completed',
      amount: amount,
      formattedAmount: `+ ${formatUSD(amount)}`,
      recipientName: 'Recarga en efectivo',
      concept: 'Recarga de saldo',
      category: 'Ingresos',
      createdAtISO: new Date().toISOString(),
      dateLabel: 'Hoy',
      timeLabel: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      operationNumber: `#REC-${Math.floor(Math.random() * 1000000000)}`
    });
    navigate('topup_success', { amount: amount.toString(), recipient: 'Recarga', successType: 'topup' });
  };

  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col p-4">
      <nav className="mb-6 max-w-[1200px] mx-auto w-full">
        <button onClick={() => navigate('topup_channel')} className="inline-flex items-center text-brand-gray hover:text-white transition-colors gap-2 text-sm font-medium">
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          Volver a métodos
        </button>
      </nav>

      <div className="flex-1 flex flex-col md:flex-row gap-6 max-w-[1200px] mx-auto w-full">
        <div className="w-full md:w-[400px] flex flex-col gap-6">
          <div className="bg-brand-sidebar border border-brand-border rounded-[20px] p-6 shadow-xl">
            <h2 className="text-xl font-bold text-white mb-2">Tu código de recarga</h2>
            <p className="text-sm text-brand-gray mb-6">Muéstrale este código al cajero en cualquier sucursal adherida.</p>
            <div className="bg-white p-4 rounded-xl flex items-center justify-center mb-4">
              <div className="w-full h-24 bg-gray-200 flex items-center justify-center text-gray-500 font-mono text-sm border-2 border-dashed border-gray-400">
                [CÓDIGO DE BARRAS]
              </div>
            </div>
            <div className="text-center">
              <span className="text-2xl font-mono font-bold text-white tracking-widest">8492 1034 5592</span>
            </div>
          </div>
          
          <div className="bg-brand-sidebar border border-brand-border rounded-[20px] p-6 shadow-xl flex-1">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Sucursales cercanas</h3>
            <div className="space-y-4 overflow-y-auto custom-scrollbar pr-2" style={{ maxHeight: '300px' }}>
              {[
                { name: 'Rapipago - Kiosco El Sol', dist: 'A 200m', addr: 'Av. Corrientes 3450', open: true },
                { name: 'Pago Fácil - Farmacia', dist: 'A 450m', addr: 'Av. Córdoba 4100', open: true },
                { name: 'Rapipago - Locutorio', dist: 'A 600m', addr: 'Sarmiento 2800', open: false },
              ].map((loc, i) => (
                <div key={i} className="p-4 bg-brand-card border border-brand-border rounded-xl cursor-pointer hover:border-brand-orange transition-colors">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="text-sm font-semibold text-white">{loc.name}</h4>
                    <span className="text-[10px] font-bold text-brand-gray bg-brand-sidebar px-2 py-1 rounded-md">{loc.dist}</span>
                  </div>
                  <p className="text-xs text-brand-gray mb-2">{loc.addr}</p>
                  <div className="flex items-center gap-1.5">
                    <div className={`w-2 h-2 rounded-full ${loc.open ? 'bg-green-400' : 'bg-red-400'}`}></div>
                    <span className={`text-[11px] font-medium ${loc.open ? 'text-green-400' : 'text-red-400'}`}>{loc.open ? 'Abierto ahora' : 'Cerrado'}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex-1 bg-brand-sidebar border border-brand-border rounded-[20px] overflow-hidden relative min-h-[400px]">
          <div className="absolute inset-0 bg-[#1A1D24] flex items-center justify-center">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-brand-card rounded-full flex items-center justify-center mx-auto mb-4 border border-brand-border">
                <svg className="w-8 h-8 text-brand-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path></svg>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Mapa de sucursales</h3>
              <p className="text-sm text-brand-gray max-w-sm mx-auto">Aquí se mostraría un mapa interactivo con la ubicación de los puntos de recarga en efectivo más cercanos a tu ubicación actual.</p>
              <button onClick={handleSimulateTopup} className="mt-6 px-6 py-2 bg-brand-orange text-white text-sm font-semibold rounded-xl hover:bg-orange-600 transition-colors">Simular depósito exitoso</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TopupSuccessScreen({ navigate, data }: { navigate: (s: Screen) => void, data?: TransferData }) {
  const { balance } = useMovements();
  const amount = data ? parseFloat(data.amount) : 15000;

  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center p-4">
      <div className="w-full max-w-[420px] bg-brand-sidebar border border-brand-border rounded-[24px] p-8 text-center shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-green-400"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-green-400/10 rounded-full blur-3xl"></div>
        
        <div className="w-24 h-24 bg-green-400/10 rounded-full flex items-center justify-center mx-auto mb-6 relative z-10">
          <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center text-brand-bg shadow-lg shadow-green-400/30">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-2 relative z-10">¡Depósito Acreditado!</h2>
        <p className="text-brand-gray text-sm mb-8 relative z-10">El dinero ya está disponible en tu cuenta.</p>
        
        <div className="bg-brand-card border border-brand-border rounded-xl p-6 mb-8 relative z-10">
          <p className="text-[11px] font-bold text-brand-gray uppercase tracking-widest mb-1">Monto ingresado</p>
          <p className="text-4xl font-bold text-green-400 font-mono tracking-tighter">+{formatUSD(amount)}</p>
          <div className="mt-4 pt-4 border-t border-brand-border/50 flex justify-between items-center">
            <span className="text-xs text-brand-gray">Nuevo saldo total</span>
            <span className="text-sm font-bold text-white">{formatUSD(balance)}</span>
          </div>
        </div>
        
        <button onClick={() => navigate('dashboard')} className="w-full h-12 bg-brand-orange hover:bg-orange-600 text-white rounded-xl font-semibold text-sm transition-all relative z-10 shadow-lg shadow-brand-orange/20">
          Ir al inicio
        </button>
      </div>
    </div>
  );
}
