import React, { useState } from 'react';
import { Screen } from '../types';
import { ArrowLeft, ArrowRight, CheckCircle, PiggyBank, Plus, Settings, Target, TrendingUp, X } from 'lucide-react';
import { formatUSD } from '../utils/format';
import { useMovements } from '../context/MovementsContext';

export function PocketDetailScreen({ navigate }: { navigate: (s: Screen) => void }) {
  const { addTransaction, updateBalance, balance } = useMovements();
  const [savedAmount, setSavedAmount] = useState(2500);
  const [goalAmount, setGoalAmount] = useState(5000);
  const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
  const [isWithdrawModalOpen, setIsWithdrawModalOpen] = useState(false);
  const [amountInput, setAmountInput] = useState('');

  const progressPercentage = Math.min((savedAmount / goalAmount) * 100, 100);

  const handleDeposit = () => {
    const amount = parseFloat(amountInput);
    if (isNaN(amount) || amount <= 0 || amount > balance) return;

    updateBalance(amount, 'subtract');
    setSavedAmount(prev => prev + amount);
    
    addTransaction({
      id: Math.random().toString(36).substr(2, 9),
      type: 'purchase',
      status: 'completed',
      amount: amount,
      formattedAmount: `- ${formatUSD(amount)}`,
      recipientName: 'Viaje a Europa',
      concept: 'Abono a bolsillo',
      category: 'Bolsillos',
      createdAtISO: new Date().toISOString(),
      dateLabel: 'Hoy',
      timeLabel: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      operationNumber: `#PKT-${Math.floor(Math.random() * 1000000000)}`
    });

    setIsDepositModalOpen(false);
    setAmountInput('');
  };

  const handleWithdraw = () => {
    const amount = parseFloat(amountInput);
    if (isNaN(amount) || amount <= 0 || amount > savedAmount) return;

    updateBalance(amount, 'add');
    setSavedAmount(prev => prev - amount);
    
    addTransaction({
      id: Math.random().toString(36).substr(2, 9),
      type: 'transfer_in',
      status: 'completed',
      amount: amount,
      formattedAmount: `+ ${formatUSD(amount)}`,
      recipientName: 'Viaje a Europa',
      concept: 'Retiro de bolsillo',
      category: 'Bolsillos',
      createdAtISO: new Date().toISOString(),
      dateLabel: 'Hoy',
      timeLabel: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      operationNumber: `#PKT-${Math.floor(Math.random() * 1000000000)}`
    });

    setIsWithdrawModalOpen(false);
    setAmountInput('');
  };
  return (
    <div className="flex justify-center relative w-full">
      <div className="w-full max-w-[800px] space-y-8">
        {/* Page Header */}
        <div className="flex flex-col gap-1">
          <div 
            onClick={() => navigate('savings_hub')}
            className="flex items-center gap-2 mb-2 cursor-pointer text-brand-gray hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Mis Bolsillos</span>
          </div>
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white">Viaje a Europa</h2>
              <p className="text-brand-gray text-sm mt-1">Ahorro programado para vacaciones.</p>
            </div>
            <button className="h-10 px-4 bg-brand-elevated border border-brand-border rounded-xl text-brand-gray text-sm font-semibold hover:text-white transition-colors flex items-center gap-2">
              <Settings className="w-4 h-4" />
              Configuración
            </button>
          </div>
        </div>

        {/* Main Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Column: Progress & Actions */}
          <div className="md:col-span-2 space-y-6">
            {/* Progress Card */}
            <section className="bg-brand-surface border border-brand-border rounded-[20px] p-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-5">
                <Target className="w-32 h-32 text-brand-orange" />
              </div>
              <div className="relative z-10 space-y-6">
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-[11px] font-medium text-brand-gray uppercase tracking-wider mb-1">Ahorrado hasta ahora</p>
                    <h3 className="text-4xl font-bold font-mono text-white">{formatUSD(savedAmount)}</h3>
                  </div>
                  <div className="text-right">
                    <p className="text-[11px] font-medium text-brand-gray uppercase tracking-wider mb-1">Meta final</p>
                    <h3 className="text-xl font-bold font-mono text-brand-gray">{formatUSD(goalAmount)}</h3>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-semibold">
                    <span className="text-emerald-500">{progressPercentage.toFixed(0)}% completado</span>
                    <span className="text-brand-gray">Faltan {formatUSD(goalAmount - savedAmount)}</span>
                  </div>
                  <div className="w-full bg-brand-elevated h-3 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 transition-all duration-1000" 
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-brand-border/50">
                  <div>
                    <p className="text-[11px] font-medium text-brand-gray uppercase tracking-wider mb-1">Ahorro Mensual</p>
                    <p className="text-sm font-semibold text-white">{formatUSD(250)}</p>
                  </div>
                  <div>
                    <p className="text-[11px] font-medium text-brand-gray uppercase tracking-wider mb-1">Fecha Estimada</p>
                    <p className="text-sm font-semibold text-white">15 Dic 2024</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Recent Activity */}
            <section className="bg-brand-surface border border-brand-border rounded-[20px] p-6 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Últimos Movimientos</h3>
                <button className="text-xs font-semibold text-brand-orange hover:text-brand-orange/80 transition-colors">Ver todos</button>
              </div>
              <div className="divide-y divide-brand-border/30">
                <div className="flex items-center justify-between py-4 first:pt-0">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#4ADE8015] flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-emerald-500 rotate-45" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Ahorro Automático</p>
                      <p className="text-xs text-brand-gray mt-0.5">Hoy, 08:00</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold font-mono text-emerald-500">+{formatUSD(250)}</p>
                    <p className="text-[10px] text-emerald-500/70 uppercase tracking-wider mt-0.5">Completado</p>
                  </div>
                </div>
                <div className="flex items-center justify-between py-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-elevated border border-brand-border flex items-center justify-center">
                      <Plus className="w-4 h-4 text-brand-orange" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Aporte Manual</p>
                      <p className="text-xs text-brand-gray mt-0.5">12 Oct 2023, 14:30</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold font-mono text-emerald-500">+{formatUSD(100)}</p>
                    <p className="text-[10px] text-emerald-500/70 uppercase tracking-wider mt-0.5">Completado</p>
                  </div>
                </div>
                <div className="flex items-center justify-between py-4 last:pb-0">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#4ADE8015] flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-emerald-500 rotate-45" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Ahorro Automático</p>
                      <p className="text-xs text-brand-gray mt-0.5">15 Sep 2023, 08:00</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold font-mono text-emerald-500">+{formatUSD(250)}</p>
                    <p className="text-[10px] text-emerald-500/70 uppercase tracking-wider mt-0.5">Completado</p>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Quick Actions & Yield */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <section className="bg-brand-surface border border-brand-border rounded-[20px] p-6 shadow-xl">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Acciones</h3>
              <div className="space-y-3">
                <button 
                  onClick={() => setIsDepositModalOpen(true)}
                  className="w-full h-12 bg-brand-orange hover:bg-brand-orange/90 text-white font-semibold rounded-xl transition-all flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Abonar Dinero
                </button>
                <button 
                  onClick={() => setIsWithdrawModalOpen(true)}
                  className="w-full h-12 bg-brand-elevated border border-brand-border rounded-xl text-sm font-semibold text-white hover:bg-brand-surface hover:border-brand-orange transition-all flex items-center justify-center gap-2"
                >
                  <ArrowRight className="w-4 h-4 -rotate-45" />
                  Retirar Fondos
                </button>
              </div>
            </section>

            {/* Yield Info */}
            <section className="bg-brand-surface border border-brand-border rounded-[20px] p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Rendimientos</h3>
                <TrendingUp className="w-4 h-4 text-emerald-500" />
              </div>
              <div className="p-4 rounded-xl bg-brand-elevated border border-brand-border/50 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-brand-gray">Tasa Efectiva Anual</span>
                  <span className="text-sm font-bold text-emerald-500">10.5%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-brand-gray">Ganancia Acumulada</span>
                  <span className="text-sm font-bold font-mono text-emerald-500">+{formatUSD(45.20)}</span>
                </div>
                <div className="pt-3 border-t border-brand-border/50">
                  <p className="text-[10px] text-brand-gray leading-relaxed">
                    Tu dinero en este bolsillo genera rendimientos diarios automáticamente. Los intereses se abonan al final de cada mes.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Deposit Modal */}
      {isDepositModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-brand-surface border border-brand-border rounded-[20px] p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white">Abonar Dinero</h3>
              <button onClick={() => setIsDepositModalOpen(false)} className="text-brand-gray hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-brand-gray mb-2 block">Monto a abonar (USD)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray">$</span>
                  <input
                    type="number"
                    value={amountInput}
                    onChange={(e) => setAmountInput(e.target.value)}
                    placeholder="0.00"
                    className="w-full bg-brand-elevated border border-brand-border rounded-xl p-4 pl-8 text-white placeholder:text-brand-gray focus:outline-none focus:border-brand-orange"
                  />
                </div>
                <p className="text-xs text-brand-gray mt-2">Saldo disponible: {formatUSD(balance)}</p>
              </div>
              <button
                onClick={handleDeposit}
                disabled={!amountInput || parseFloat(amountInput) <= 0 || parseFloat(amountInput) > balance}
                className="w-full bg-brand-orange text-white py-4 rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirmar Abono
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Withdraw Modal */}
      {isWithdrawModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-brand-surface border border-brand-border rounded-[20px] p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-white">Retirar Fondos</h3>
              <button onClick={() => setIsWithdrawModalOpen(false)} className="text-brand-gray hover:text-white">
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-brand-gray mb-2 block">Monto a retirar (USD)</label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-gray">$</span>
                  <input
                    type="number"
                    value={amountInput}
                    onChange={(e) => setAmountInput(e.target.value)}
                    placeholder="0.00"
                    className="w-full bg-brand-elevated border border-brand-border rounded-xl p-4 pl-8 text-white placeholder:text-brand-gray focus:outline-none focus:border-brand-orange"
                  />
                </div>
                <p className="text-xs text-brand-gray mt-2">Disponible en bolsillo: {formatUSD(savedAmount)}</p>
              </div>
              <button
                onClick={handleWithdraw}
                disabled={!amountInput || parseFloat(amountInput) <= 0 || parseFloat(amountInput) > savedAmount}
                className="w-full bg-brand-orange text-white py-4 rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirmar Retiro
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
