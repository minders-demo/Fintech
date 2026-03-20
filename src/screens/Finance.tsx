import React, { useState, useMemo } from 'react';
import { Screen } from '../types';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Plus, X, Check } from 'lucide-react';
import { formatUSD } from '../utils/format';

export function FinanceScreen({ navigate }: { navigate: (s: Screen) => void }) {
  const [timePeriod, setTimePeriod] = useState<'Este mes' | 'Mes anterior' | 'Últimos 3 meses'>('Este mes');
  const [subscriptions, setSubscriptions] = useState([
    { name: 'Netflix Premium', price: 8500, date: 'Próx. cobro: 12 Nov', icon: 'N' },
    { name: 'Spotify Duo', price: 3200, date: 'Próx. cobro: 15 Nov', icon: 'S' },
    { name: 'Gimnasio Megatlon', price: 6800, date: 'Próx. cobro: 01 Nov', icon: 'M' },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [newSubName, setNewSubName] = useState('');
  const [newSubPrice, setNewSubPrice] = useState('');

  const totalSubscriptions = useMemo(() => subscriptions.reduce((acc, sub) => acc + sub.price, 0), [subscriptions]);

  const chartData = useMemo(() => {
    // Mock data based on time period
    const baseData = [
      { name: 'Lun', ingresos: 4000, egresos: 2400 },
      { name: 'Mar', ingresos: 3000, egresos: 1398 },
      { name: 'Mie', ingresos: 2000, egresos: 9800 },
      { name: 'Jue', ingresos: 2780, egresos: 3908 },
      { name: 'Vie', ingresos: 1890, egresos: 4800 },
      { name: 'Sab', ingresos: 2390, egresos: 3800 },
      { name: 'Dom', ingresos: 3490, egresos: 4300 },
    ];
    if (timePeriod === 'Mes anterior') return baseData.map(d => ({ ...d, ingresos: d.ingresos * 0.8, egresos: d.egresos * 0.9 }));
    if (timePeriod === 'Últimos 3 meses') return baseData.map(d => ({ ...d, ingresos: d.ingresos * 1.2, egresos: d.egresos * 1.1 }));
    return baseData;
  }, [timePeriod]);

  const handleAddSubscription = () => {
    if (newSubName && newSubPrice) {
      setSubscriptions([...subscriptions, { name: newSubName, price: parseInt(newSubPrice), date: 'Próx. cobro: 01 Dic', icon: newSubName[0].toUpperCase() }]);
      setNewSubName('');
      setNewSubPrice('');
      setShowModal(false);
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-[32px] font-bold text-white tracking-[-1px] leading-tight">Resumen Financiero IA</h1>
          <p className="text-brand-gray mt-1">Análisis inteligente de tus hábitos de consumo.</p>
        </div>
        <div className="hidden md:flex gap-2 bg-brand-sidebar border border-brand-border p-1 rounded-xl">
          {(['Este mes', 'Mes anterior', 'Últimos 3 meses'] as const).map(period => (
            <button 
              key={period}
              onClick={() => setTimePeriod(period)}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-colors ${timePeriod === period ? 'bg-brand-card text-white shadow-sm' : 'text-brand-gray hover:text-white'}`}
            >
              {period}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2 bg-brand-sidebar border border-brand-border rounded-[20px] p-6 shadow-lg">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-base font-semibold text-white">Evolución de Ingresos vs Egresos</h3>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="name" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
                <Legend />
                <Line type="monotone" dataKey="ingresos" stroke="#F97316" strokeWidth={2} />
                <Line type="monotone" dataKey="egresos" stroke="#F87171" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-gradient-to-br from-brand-orange/20 to-brand-sidebar border border-brand-orange/30 rounded-[20px] p-6 shadow-lg relative overflow-hidden flex flex-col">
          <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/10 rounded-full blur-2xl"></div>
          <div className="flex items-center gap-3 mb-6 relative z-10">
            <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center text-white shadow-lg shadow-brand-orange/20">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <h3 className="text-base font-bold text-white">Insights IA</h3>
          </div>
          <div className="flex-1 space-y-4 relative z-10">
            <div className="bg-brand-card/80 backdrop-blur-sm border border-brand-border/50 rounded-xl p-4">
              <p className="text-sm text-white leading-relaxed">
                Tus gastos en <span className="text-brand-orange font-bold">Delivery</span> aumentaron un 24% esta semana. Si reduces 2 pedidos, alcanzarás tu meta de ahorro mensual.
              </p>
            </div>
            <div className="bg-brand-card/80 backdrop-blur-sm border border-brand-border/50 rounded-xl p-4">
              <p className="text-sm text-white leading-relaxed">
                Tienes <span className="text-green-400 font-bold">{formatUSD(125000)}</span> inactivos. Inviértelos en el fondo común para generar ~{formatUSD(4500)} extra este mes.
              </p>
            </div>
          </div>
          <button className="w-full mt-4 h-10 bg-brand-card hover:bg-brand-border border border-brand-border rounded-xl text-xs font-semibold text-white transition-colors relative z-10">
            Ver más recomendaciones
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-brand-sidebar border border-brand-border rounded-[20px] p-6 shadow-lg">
          <h3 className="text-base font-semibold text-white mb-6">Gastos por Categoría</h3>
          <div className="space-y-5">
            {[
              { cat: 'Supermercado', amount: formatUSD(145200), pct: 45, color: 'bg-brand-orange' },
              { cat: 'Servicios', amount: formatUSD(85000), pct: 25, color: 'bg-blue-400' },
              { cat: 'Entretenimiento', amount: formatUSD(42500), pct: 15, color: 'bg-purple-400' },
              { cat: 'Transporte', amount: formatUSD(28400), pct: 10, color: 'bg-green-400' },
              { cat: 'Otros', amount: formatUSD(15000), pct: 5, color: 'bg-brand-gray' },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-white font-medium">{item.cat}</span>
                  <span className="text-brand-gray font-mono">{item.amount}</span>
                </div>
                <div className="w-full bg-brand-card h-2 rounded-full overflow-hidden">
                  <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.pct}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-brand-sidebar border border-brand-border rounded-[20px] p-6 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-base font-semibold text-white">Suscripciones Activas</h3>
            <span className="text-xs font-bold text-red-400 bg-red-400/10 px-2 py-1 rounded-lg">Total: {formatUSD(totalSubscriptions)}/mes</span>
          </div>
          <div className="space-y-3">
            {subscriptions.map((sub, i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-brand-card border border-brand-border/50 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-sidebar border border-brand-border flex items-center justify-center text-white font-bold">{sub.icon}</div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{sub.name}</h4>
                    <p className="text-[11px] text-brand-gray">{sub.date}</p>
                  </div>
                </div>
                <p className="text-sm font-bold text-white">{formatUSD(sub.price)}</p>
              </div>
            ))}
          </div>
          <button 
            onClick={() => setShowModal(true)}
            className="w-full mt-6 h-11 bg-brand-card hover:bg-brand-border border border-brand-border rounded-xl text-sm font-semibold text-brand-gray hover:text-white transition-colors"
          >
            Gestionar suscripciones
          </button>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <div className="bg-brand-sidebar border border-brand-border w-full max-w-md rounded-2xl p-6 shadow-2xl">
            <h2 className="text-xl font-semibold text-white mb-4">Agregar Suscripción</h2>
            <input className="w-full bg-brand-card border border-brand-border rounded-lg p-3 text-white mb-4" placeholder="Nombre (Ej: Disney+)" value={newSubName} onChange={e => setNewSubName(e.target.value)} />
            <input className="w-full bg-brand-card border border-brand-border rounded-lg p-3 text-white mb-6" placeholder="Monto mensual ($)" type="number" value={newSubPrice} onChange={e => setNewSubPrice(e.target.value)} />
            <div className="flex gap-4">
              <button onClick={() => setShowModal(false)} className="flex-1 bg-brand-card text-white p-3 rounded-lg">Cancelar</button>
              <button onClick={handleAddSubscription} className="flex-1 bg-brand-primary text-white p-3 rounded-lg">Agregar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
