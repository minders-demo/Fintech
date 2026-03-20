import React, { useState } from 'react';
import { ArrowLeft, Lightbulb, Droplets, Flame, Phone, Tv, Wifi, Search, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Screen } from '../types';
import { useMovements } from '../context/MovementsContext';
import { formatUSD } from '../utils/format';

interface PayServicesScreenProps {
  navigate: (screen: Screen, data?: any) => void;
}

interface Service {
  id: string;
  name: string;
  category: 'electricity' | 'water' | 'gas' | 'phone' | 'internet' | 'tv';
  color: string;
  bg: string;
}

const countries = [
  { id: 'colombia', name: 'Colombia', flag: '🇨🇴' },
  { id: 'mexico', name: 'México', flag: '🇲🇽' },
  { id: 'argentina', name: 'Argentina', flag: '🇦🇷' },
  { id: 'chile', name: 'Chile', flag: '🇨🇱' },
  { id: 'peru', name: 'Perú', flag: '🇵🇪' },
  { id: 'venezuela', name: 'Venezuela', flag: '🇻🇪' },
  { id: 'ecuador', name: 'Ecuador', flag: '🇪🇨' },
];

const servicesByCountry: Record<string, Service[]> = {
  colombia: [
    { id: 'epm', name: 'EPM (Agua y Luz)', category: 'electricity', color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
    { id: 'gases_occidente', name: 'Gases de Occidente', category: 'gas', color: 'text-orange-400', bg: 'bg-orange-400/10' },
    { id: 'claro_co', name: 'Claro Colombia', category: 'phone', color: 'text-red-400', bg: 'bg-red-400/10' },
    { id: 'movistar_co', name: 'Movistar Colombia', category: 'phone', color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { id: 'tigo', name: 'Tigo', category: 'internet', color: 'text-purple-400', bg: 'bg-purple-400/10' },
    { id: 'etb', name: 'ETB Internet', category: 'internet', color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
    { id: 'directv_co', name: 'DirecTV', category: 'tv', color: 'text-sky-400', bg: 'bg-sky-400/10' },
    { id: 'acueducto_bog', name: 'Acueducto Bogotá', category: 'water', color: 'text-blue-500', bg: 'bg-blue-500/10' },
  ],
  mexico: [
    { id: 'cfe', name: 'CFE (Electricidad)', category: 'electricity', color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
    { id: 'telmex', name: 'Telmex (Internet/Tel)', category: 'phone', color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { id: 'claro_mx', name: 'Claro México', category: 'phone', color: 'text-red-400', bg: 'bg-red-400/10' },
    { id: 'izzi', name: 'Izzi (TV + Internet)', category: 'tv', color: 'text-green-400', bg: 'bg-green-400/10' },
    { id: 'gas_natural_mx', name: 'Gas Natural Fenosa', category: 'gas', color: 'text-orange-400', bg: 'bg-orange-400/10' },
    { id: 'sacmex', name: 'SACMEX (Agua)', category: 'water', color: 'text-blue-500', bg: 'bg-blue-500/10' },
  ],
  argentina: [
    { id: 'edesur', name: 'Edesur (Luz)', category: 'electricity', color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
    { id: 'metrogas', name: 'Metrogas', category: 'gas', color: 'text-orange-400', bg: 'bg-orange-400/10' },
    { id: 'aysa', name: 'AySA (Agua)', category: 'water', color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { id: 'telecentro', name: 'Telecentro (Internet)', category: 'internet', color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
    { id: 'fibertel', name: 'Fibertel', category: 'internet', color: 'text-purple-400', bg: 'bg-purple-400/10' },
    { id: 'directv_ar', name: 'DirecTV Argentina', category: 'tv', color: 'text-sky-400', bg: 'bg-sky-400/10' },
  ],
  chile: [
    { id: 'enel_cl', name: 'Enel (Luz)', category: 'electricity', color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
    { id: 'aguas_andinas', name: 'Aguas Andinas', category: 'water', color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { id: 'metrogas_cl', name: 'Metrogas Chile', category: 'gas', color: 'text-orange-400', bg: 'bg-orange-400/10' },
    { id: 'movistar_cl', name: 'Movistar Chile', category: 'phone', color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { id: 'vtr', name: 'VTR (TV + Internet)', category: 'tv', color: 'text-green-400', bg: 'bg-green-400/10' },
  ],
  peru: [
    { id: 'luz_del_sur', name: 'Luz del Sur', category: 'electricity', color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
    { id: 'sedapal', name: 'Sedapal (Agua)', category: 'water', color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { id: 'movistar_pe', name: 'Movistar Perú', category: 'phone', color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { id: 'claro_pe', name: 'Claro Perú', category: 'phone', color: 'text-red-400', bg: 'bg-red-400/10' },
  ],
  venezuela: [
    { id: 'corpoelec', name: 'Corpoelec (Luz)', category: 'electricity', color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
    { id: 'cantv', name: 'CANTV (Tel + Internet)', category: 'phone', color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { id: 'movilnet', name: 'Movilnet', category: 'phone', color: 'text-green-400', bg: 'bg-green-400/10' },
    { id: 'hidrocapital', name: 'Hidrocapital (Agua)', category: 'water', color: 'text-blue-500', bg: 'bg-blue-500/10' },
  ],
  ecuador: [
    { id: 'eerssa', name: 'EERSSA (Luz)', category: 'electricity', color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
    { id: 'interagua', name: 'Interagua (Agua)', category: 'water', color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { id: 'cnt', name: 'CNT (Tel + Internet)', category: 'phone', color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { id: 'directv_ec', name: 'DirecTV Ecuador', category: 'tv', color: 'text-sky-400', bg: 'bg-sky-400/10' },
  ],
};

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'electricity': return Lightbulb;
    case 'water': return Droplets;
    case 'gas': return Flame;
    case 'phone': return Phone;
    case 'internet': return Wifi;
    case 'tv': return Tv;
    default: return Wifi;
  }
};

const getPlaceholder = (category: string) => {
  switch (category) {
    case 'electricity': return "Número de NIC / cuenta";
    case 'water': return "Número de contrato";
    case 'gas': return "Número de suministro";
    case 'phone':
    case 'internet':
    case 'tv': return "Número de línea o cuenta";
    default: return "Número de referencia";
  }
};

const getPreviousMonth = () => {
  const date = new Date();
  date.setMonth(date.getMonth() - 1);
  return date.toLocaleString('es-ES', { month: 'long', year: 'numeric' });
};

const getNextDueDate = () => {
  const date = new Date();
  date.setDate(date.getDate() + Math.floor(Math.random() * 10) + 1);
  return date;
};

export function PayServicesScreen({ navigate }: PayServicesScreenProps) {
  const { balance, addTransaction, updateBalance } = useMovements();
  const [step, setStep] = useState<0 | 1 | 2 | 3>(0);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [reference, setReference] = useState('');
  const [isConsulting, setIsConsulting] = useState(false);
  const [simulatedBill, setSimulatedBill] = useState<any>(null);

  const handleConsult = async () => {
    if (!selectedService || reference.length < 5) return;
    
    setIsConsulting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const amount = (Math.random() * 80 + 20).toFixed(2);
    const dueDate = getNextDueDate();
    
    setSimulatedBill({
      company: selectedService.name,
      reference: reference,
      period: getPreviousMonth(),
      dueDate: dueDate,
      amount: parseFloat(amount),
      status: 'Pendiente de pago',
    });
    
    setIsConsulting(false);
    setStep(3);
  };

  const handleConfirmPayment = () => {
    if (!simulatedBill || !selectedService) return;
    
    const amount = simulatedBill.amount;
    
    if (balance < amount) return;

    updateBalance(amount, 'subtract');
    
    addTransaction({
      id: Math.random().toString(36).substr(2, 9),
      type: 'purchase',
      status: 'completed',
      amount: amount,
      formattedAmount: `- ${formatUSD(amount)}`,
      recipientName: selectedService.name,
      concept: `Pago ${selectedService.name} - ${simulatedBill.period}`,
      category: 'Servicios',
      createdAtISO: new Date().toISOString(),
      dateLabel: 'Hoy',
      timeLabel: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      operationNumber: `#SRV-${Math.floor(Math.random() * 1000000000)}`
    });

    navigate('operation_success', { 
      amount: amount.toString(), 
      recipient: selectedService.name, 
      successType: 'pay_services' 
    });
  };

  const isLowBalance = simulatedBill && balance < simulatedBill.amount;
  const isUrgent = simulatedBill && (simulatedBill.dueDate.getTime() - new Date().getTime()) < (3 * 24 * 60 * 60 * 1000);

  return (
    <div className="max-w-[600px] mx-auto">
      <nav className="mb-8">
        <button 
          onClick={() => {
            if (step === 0) navigate('products');
            else if (step === 1) setStep(0);
            else if (step === 2) setStep(1);
            else if (step === 3) setStep(2);
          }} 
          className="inline-flex items-center text-brand-gray hover:text-white transition-colors gap-2 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          {step === 0 ? 'Volver a productos' : 
           step === 1 ? 'Cambiar país' : 
           step === 2 ? 'Cambiar empresa' :
           'Volver a consulta'}
        </button>
      </nav>

      <header className="mb-8">
        <h1 className="text-[32px] font-bold text-white tracking-[-1px] leading-tight mb-2">Pago de Servicios</h1>
        <p className="text-brand-gray">
          {step === 0 ? 'Selecciona tu país para comenzar.' : 
           step === 1 ? 'Busca y selecciona la empresa de servicio.' : 
           step === 2 ? 'Ingresa los datos de tu factura.' :
           'Revisa los detalles de tu factura.'}
        </p>
      </header>

      <div className="bg-brand-sidebar border border-brand-border rounded-[20px] p-6 md:p-8 shadow-xl">
        {step === 0 && (
          <div className="space-y-4 animate-fade-in">
            <label className="text-[11px] font-bold text-brand-gray uppercase tracking-widest block mb-4">País de residencia</label>
            <div className="grid grid-cols-1 gap-3">
              {countries.map((country) => (
                <button
                  key={country.id}
                  onClick={() => {
                    setSelectedCountry(country.id);
                    setStep(1);
                  }}
                  className="w-full h-16 bg-brand-card border border-brand-border hover:border-brand-orange hover:bg-brand-orange/5 rounded-xl px-6 flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-2xl">{country.flag}</span>
                    <span className="text-lg font-semibold text-white group-hover:text-brand-orange">{country.name}</span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-brand-border/30 flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors">
                    <ArrowLeft className="w-4 h-4 text-brand-gray group-hover:text-brand-orange rotate-180" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 1 && selectedCountry && (
          <div className="space-y-6 animate-fade-in">
            <label className="text-[11px] font-bold text-brand-gray uppercase tracking-widest block">Empresa de servicio</label>
            <div className="grid grid-cols-2 gap-4">
              {servicesByCountry[selectedCountry].map((service) => {
                const Icon = getCategoryIcon(service.category);
                return (
                  <button
                    key={service.id}
                    onClick={() => {
                      setSelectedService(service);
                      setStep(2);
                    }}
                    className="p-4 rounded-xl flex flex-col items-center justify-center text-center gap-3 transition-all h-32 bg-brand-card border border-brand-border hover:border-brand-orange hover:bg-brand-orange/5 text-brand-gray hover:text-white group"
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${service.bg} group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-5 h-5 ${service.color}`} />
                    </div>
                    <span className="text-xs font-bold leading-tight">{service.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {step === 2 && selectedService && (
          <div className="space-y-8 animate-fade-in">
            <div className="flex items-center gap-4 p-4 bg-brand-card border border-brand-border rounded-xl">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${selectedService.bg}`}>
                {React.createElement(getCategoryIcon(selectedService.category), { className: `w-6 h-6 ${selectedService.color}` })}
              </div>
              <div>
                <p className="text-xs font-bold text-brand-gray uppercase tracking-widest">Empresa seleccionada</p>
                <p className="text-lg font-bold text-white">{selectedService.name}</p>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[11px] font-bold text-brand-gray uppercase tracking-widest block">
                {getPlaceholder(selectedService.category).replace("Número de ", "")}
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={reference}
                  onChange={(e) => setReference(e.target.value)}
                  placeholder={getPlaceholder(selectedService.category)}
                  className="w-full h-14 bg-brand-card border border-brand-border rounded-xl px-4 text-white focus:border-brand-orange focus:ring-1 focus:ring-brand-orange outline-none transition-all text-lg font-medium"
                  autoFocus
                />
              </div>
              <p className="text-[10px] text-brand-gray italic">Ingresa el número tal como aparece en tu factura física o digital.</p>
            </div>

            <button
              onClick={handleConsult}
              disabled={reference.length < 5 || isConsulting}
              className="w-full h-14 bg-brand-orange hover:bg-orange-600 disabled:bg-brand-card disabled:text-brand-gray disabled:cursor-not-allowed text-white rounded-xl font-bold text-base transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-orange/20 disabled:shadow-none"
            >
              {isConsulting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Consultando factura...
                </>
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  Consultar factura
                </>
              )}
            </button>
          </div>
        )}

        {step === 3 && simulatedBill && selectedService && (
          <div className="space-y-8 animate-fade-in">
            <div className="bg-brand-card border border-brand-border rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-brand-orange/10 p-4 border-b border-brand-border flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${selectedService.bg}`}>
                    {React.createElement(getCategoryIcon(selectedService.category), { className: `w-4 h-4 ${selectedService.color}` })}
                  </div>
                  <span className="text-sm font-bold text-white">{selectedService.name}</span>
                </div>
                <span className="text-[10px] font-bold bg-brand-orange/20 text-brand-orange px-2 py-1 rounded-full uppercase tracking-wider">
                  {simulatedBill.status}
                </span>
              </div>
              
              <div className="p-6 space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-[10px] font-bold text-brand-gray uppercase tracking-widest mb-1">Referencia</p>
                    <p className="text-sm font-semibold text-white">{simulatedBill.reference}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-brand-gray uppercase tracking-widest mb-1">Período</p>
                    <p className="text-sm font-semibold text-white capitalize">{simulatedBill.period}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-brand-gray uppercase tracking-widest mb-1">Vencimiento</p>
                    <p className={`text-sm font-bold ${isUrgent ? 'text-red-400' : 'text-white'}`}>
                      {simulatedBill.dueDate.toLocaleDateString('es-ES', { day: '2-digit', month: 'short', year: 'numeric' })}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] font-bold text-brand-gray uppercase tracking-widest mb-1">Total a pagar</p>
                    <p className="text-2xl font-black text-white">{formatUSD(simulatedBill.amount)}</p>
                  </div>
                </div>

                {isUrgent && (
                  <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-xl border border-red-400/20">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <p className="text-xs font-medium">Esta factura vence pronto. Evita recargos pagando hoy.</p>
                  </div>
                )}
              </div>
            </div>

            {isLowBalance && (
              <div className="flex items-start gap-3 text-red-400 bg-red-400/10 p-4 rounded-xl border border-red-400/20">
                <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <p className="text-sm font-bold">Saldo insuficiente</p>
                  <p className="text-xs opacity-80 leading-relaxed">
                    Tu saldo actual es de {formatUSD(balance)}. Recarga tu cuenta para continuar con el pago.
                  </p>
                </div>
              </div>
            )}

            <button
              onClick={handleConfirmPayment}
              disabled={isLowBalance}
              className="w-full h-14 bg-brand-orange hover:bg-orange-600 disabled:bg-brand-card disabled:text-brand-gray disabled:cursor-not-allowed text-white rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-orange/20 disabled:shadow-none"
            >
              <CheckCircle2 className="w-5 h-5" />
              Pagar {formatUSD(simulatedBill.amount)}
            </button>
          </div>
        )}
      </div>

      <div className="mt-8 bg-brand-card/50 border border-brand-border rounded-2xl p-6 flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-white mb-1">Pagos Seguros</h4>
          <p className="text-xs text-brand-gray leading-relaxed">
            Minders Pay utiliza encriptación bancaria para proteger tus transacciones y datos personales.
          </p>
        </div>
      </div>
    </div>
  );
}

