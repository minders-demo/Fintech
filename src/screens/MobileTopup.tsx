import React, { useState, useEffect, useRef } from 'react';
import { Screen } from '../types';
import { ArrowLeft, Smartphone, CheckCircle, Search, Wifi, CreditCard, Globe } from 'lucide-react';
import { formatUSD } from '../utils/format';
import { useMovements } from '../context/MovementsContext';
import { trackMobileTopupStarted } from '../utils/amplitude';

const operators = [
  // Colombia
  { id: 'claro_co', name: 'Claro', country: 'CO', color: 'bg-red-500' },
  { id: 'movistar_co', name: 'Movistar', country: 'CO', color: 'bg-blue-500' },
  { id: 'tigo_co', name: 'Tigo', country: 'CO', color: 'bg-blue-700' },
  { id: 'wom_co', name: 'WOM', country: 'CO', color: 'bg-purple-600' },
  { id: 'virgin_co', name: 'Virgin Mobile', country: 'CO', color: 'bg-red-700' },
  // México
  { id: 'telcel_mx', name: 'Telcel', country: 'MX', color: 'bg-blue-600' },
  { id: 'att_mx', name: 'AT&T México', country: 'MX', color: 'bg-blue-400' },
  { id: 'movistar_mx', name: 'Movistar MX', country: 'MX', color: 'bg-green-500' },
  // Argentina
  { id: 'personal_ar', name: 'Personal', country: 'AR', color: 'bg-indigo-600' },
  { id: 'claro_ar', name: 'Claro AR', country: 'AR', color: 'bg-red-500' },
  { id: 'movistar_ar', name: 'Movistar AR', country: 'AR', color: 'bg-blue-500' },
  // Chile
  { id: 'entel_cl', name: 'Entel', country: 'CL', color: 'bg-teal-600' },
  { id: 'claro_cl', name: 'Claro CL', country: 'CL', color: 'bg-red-500' },
  { id: 'movistar_cl', name: 'Movistar CL', country: 'CL', color: 'bg-blue-500' },
  // Perú
  { id: 'claro_pe', name: 'Claro PE', country: 'PE', color: 'bg-red-500' },
  { id: 'movistar_pe', name: 'Movistar PE', country: 'PE', color: 'bg-blue-500' },
  { id: 'entel_pe', name: 'Entel PE', country: 'PE', color: 'bg-teal-600' },
  { id: 'bitel_pe', name: 'Bitel', country: 'PE', color: 'bg-green-700' },
  // Ecuador
  { id: 'claro_ec', name: 'Claro EC', country: 'EC', color: 'bg-red-500' },
  { id: 'cnt_ec', name: 'CNT', country: 'EC', color: 'bg-yellow-600' },
  // Venezuela
  { id: 'movilnet_ve', name: 'Movilnet', country: 'VE', color: 'bg-red-800' },
  { id: 'movistar_ve', name: 'Movistar VE', country: 'VE', color: 'bg-blue-500' },
  { id: 'digitel_ve', name: 'Digitel', country: 'VE', color: 'bg-orange-500' },
  // Panamá / C. América
  { id: 'claro_pa', name: 'Claro PA', country: 'PA', color: 'bg-red-500' },
  { id: 'digicel', name: 'Digicel', country: 'PA', color: 'bg-yellow-500' },
];

const countries = [
  { code: 'CO', name: 'Colombia' },
  { code: 'MX', name: 'México' },
  { code: 'AR', name: 'Argentina' },
  { code: 'CL', name: 'Chile' },
  { code: 'PE', name: 'Perú' },
  { code: 'EC', name: 'Ecuador' },
  { code: 'VE', name: 'Venezuela' },
  { code: 'PA', name: 'Panamá' },
];

export function MobileTopupScreen({ navigate }: { navigate: (s: Screen, data?: any) => void }) {
  const { addTransaction, updateBalance } = useMovements();
  const [step, setStep] = useState(1);
  const [phone, setPhone] = useState('');
  const [operator, setOperator] = useState('');
  const [amount, setAmount] = useState('');
  const [country, setCountry] = useState('CO');
  const hasTrackedMount = useRef(false);

  // ── Activation: track mobile topup started ──
  useEffect(() => {
    if (!hasTrackedMount.current) {
      trackMobileTopupStarted();
      hasTrackedMount.current = true;
    }
  }, []);

  const amounts = ['5', '10', '15', '20', '25', '50'];

  const filteredOperators = operators.filter(op => op.country === country);

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(e.target.value);
    setOperator('');
  };

  const handleNext = () => {
    if (step === 1 && phone.length >= 10 && operator) {
      setStep(2);
    } else if (step === 2 && amount) {
      const amountUSD = parseFloat(amount);
      if (isNaN(amountUSD) || amountUSD < 1) return;

      updateBalance(amountUSD, 'subtract');
      
      const selectedOp = operators.find(o => o.id === operator);
      const formattedPhone = phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');

      addTransaction({
        id: Math.random().toString(36).substr(2, 9),
        type: 'purchase',
        status: 'completed',
        amount: amountUSD,
        formattedAmount: `- ${formatUSD(amountUSD)}`,
        recipientName: `${selectedOp?.name} — ${formattedPhone}`,
        concept: 'Recarga móvil',
        category: 'Recargas',
        createdAtISO: new Date().toISOString(),
        dateLabel: 'Hoy',
        timeLabel: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        operationNumber: `#REC-${Math.floor(Math.random() * 1000000000)}`
      });

      navigate('operation_success', { amount: amountUSD.toString(), recipient: `${selectedOp?.name} — ${phone}`, successType: 'mobile_topup' });
    }
  };

  return (
    <div className="flex flex-col gap-8 max-w-[600px] mx-auto w-full min-h-[80vh] relative">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 flex items-center gap-4 border-b border-brand-border pb-6">
        <button 
          onClick={() => step === 2 ? setStep(1) : navigate('transfer')}
          className="w-10 h-10 rounded-full bg-brand-bg border border-brand-border flex items-center justify-center text-brand-gray hover:text-white hover:border-brand-orange transition-all group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        </button>
        <div>
          <h1 className="text-white text-2xl font-black tracking-tight">Recarga Móvil</h1>
          <p className="text-brand-gray text-sm">Recarga saldo a cualquier operador en segundos.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-8 mt-24">
        
        {/* Step 1: Phone & Operator */}
        {step === 1 && (
          <div className="flex flex-col gap-8 animate-fade-in">
            {/* Country Selection */}
            <div className="space-y-4">
              <label className="text-white font-bold text-lg flex items-center gap-2">
                <Globe className="w-5 h-5 text-brand-orange" />
                País
              </label>
              <select
                value={country}
                onChange={handleCountryChange}
                className="w-full bg-brand-card border-2 border-brand-border rounded-2xl px-6 py-4 text-lg font-bold text-white focus:border-brand-orange focus:ring-0 outline-none transition-all appearance-none"
              >
                {countries.map(c => (
                  <option key={c.code} value={c.code}>{c.name}</option>
                ))}
              </select>
            </div>

            {/* Phone Input */}
            <div className="space-y-4">
              <label className="text-white font-bold text-lg flex items-center gap-2">
                <Smartphone className="w-5 h-5 text-brand-orange" />
                Número de Celular
              </label>
              <div className="relative">
                <input 
                  type="tel" 
                  placeholder="300 123 4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  className="w-full bg-brand-card border-2 border-brand-border rounded-2xl px-6 py-5 text-2xl font-black tracking-widest text-white focus:border-brand-orange focus:ring-0 outline-none transition-all placeholder:text-brand-gray/50"
                  maxLength={10}
                />
                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-brand-bg flex items-center justify-center text-brand-gray hover:text-brand-orange cursor-pointer transition-colors">
                  <Search className="w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Operator Selection */}
            <div className="space-y-4">
              <label className="text-white font-bold text-lg flex items-center gap-2">
                <Wifi className="w-5 h-5 text-brand-orange" />
                Operador
              </label>
              <div className="grid grid-cols-2 gap-4">
                {filteredOperators.map((op) => (
                  <button
                    key={op.id}
                    onClick={() => setOperator(op.id)}
                    className={`flex items-center gap-4 p-4 rounded-2xl border-2 transition-all ${
                      operator === op.id 
                        ? 'bg-brand-orange/10 border-brand-orange shadow-[0_0_15px_rgba(236,91,19,0.2)]' 
                        : 'bg-brand-card border-brand-border hover:border-brand-gray'
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-full ${op.color} flex items-center justify-center text-white font-bold shadow-inner`}>
                      {op.name.charAt(0)}
                    </div>
                    <span className={`font-bold ${operator === op.id ? 'text-brand-orange' : 'text-white'}`}>{op.name}</span>
                    {operator === op.id && <CheckCircle className="w-5 h-5 text-brand-orange ml-auto" />}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={handleNext}
              disabled={phone.length < 10 || !operator}
              className={`w-full py-5 rounded-2xl font-black text-lg transition-all mt-4 ${
                phone.length >= 10 && operator 
                  ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/20 hover:bg-brand-orange/90 active:scale-[0.98]' 
                  : 'bg-brand-card border border-brand-border text-brand-gray cursor-not-allowed'
              }`}
            >
              Continuar
            </button>
          </div>
        )}

        {/* Step 2: Amount Selection */}
        {step === 2 && (
          <div className="flex flex-col gap-8 animate-fade-in">
            {/* Summary Card */}
            <div className="bg-brand-card border border-brand-border rounded-2xl p-6 flex items-center justify-between shadow-lg">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full ${operators.find(o => o.id === operator)?.color} flex items-center justify-center text-white font-bold text-xl shadow-inner`}>
                  {operators.find(o => o.id === operator)?.name.charAt(0)}
                </div>
                <div>
                  <p className="text-brand-gray text-xs uppercase tracking-widest mb-1">{operators.find(o => o.id === operator)?.name}</p>
                  <p className="text-white font-black text-xl tracking-widest">{phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3')}</p>
                </div>
              </div>
              <button onClick={() => setStep(1)} className="text-brand-orange text-sm font-bold hover:underline">Editar</button>
            </div>

            {/* Amount Selection */}
            <div className="space-y-4">
              <label className="text-white font-bold text-lg flex items-center gap-2">
                <CreditCard className="w-5 h-5 text-brand-orange" />
                Monto a Recargar (USD)
              </label>
              <div className="grid grid-cols-2 gap-4">
                {amounts.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => setAmount(amt)}
                    className={`flex flex-col items-center justify-center p-6 rounded-2xl border-2 transition-all ${
                      amount === amt 
                        ? 'bg-brand-orange/10 border-brand-orange shadow-[0_0_15px_rgba(236,91,19,0.2)]' 
                        : 'bg-brand-card border-brand-border hover:border-brand-gray'
                    }`}
                  >
                    <span className={`text-2xl font-black ${amount === amt ? 'text-brand-orange' : 'text-white'}`}>
                      {formatUSD(parseInt(amt))}
                    </span>
                  </button>
                ))}
              </div>
              
              <div className="relative mt-4">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 text-brand-gray font-bold text-xl">$</span>
                <input 
                  type="number" 
                  placeholder="Otro monto en USD"
                  value={amount && !amounts.includes(amount) ? amount : ''}
                  onChange={(e) => setAmount(e.target.value)}
                  min="1"
                  className={`w-full bg-brand-bg border-2 rounded-2xl pl-12 pr-6 py-5 text-xl font-bold text-white focus:ring-0 outline-none transition-all placeholder:text-brand-gray/50 ${
                    amount && !amounts.includes(amount) ? 'border-brand-orange bg-brand-orange/5' : 'border-brand-border focus:border-brand-orange'
                  }`}
                />
              </div>
            </div>

            <button 
              onClick={handleNext}
              disabled={!amount || parseFloat(amount) < 1}
              className={`w-full py-5 rounded-2xl font-black text-lg transition-all mt-4 flex items-center justify-center gap-2 ${
                amount && parseFloat(amount) >= 1 
                  ? 'bg-brand-orange text-white shadow-lg shadow-brand-orange/20 hover:bg-brand-orange/90 active:scale-[0.98]' 
                  : 'bg-brand-card border border-brand-border text-brand-gray cursor-not-allowed'
              }`}
            >
              Confirmar Recarga
            </button>
            <p className="text-center text-brand-gray text-xs">El saldo se acreditará inmediatamente.</p>
          </div>
        )}

      </div>
    </div>
  );
}
