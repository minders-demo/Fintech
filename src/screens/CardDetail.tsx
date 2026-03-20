import React, { useState } from 'react';
import { Screen } from '../types';
import { ArrowLeft, Eye, EyeOff, Copy, CheckCircle, CreditCard, Info } from 'lucide-react';

export function CardDetailScreen({ navigate }: { navigate: (s: Screen) => void }) {
  const [showDetails, setShowDetails] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
          <h1 className="text-white text-2xl font-black tracking-tight">Datos de Tarjeta</h1>
          <p className="text-brand-gray text-sm">Información confidencial para compras online.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col gap-10 items-center mt-4">
        
        {/* Card Display */}
        <div className="relative w-full max-w-[450px] aspect-[1.586/1] rounded-3xl p-8 shadow-2xl overflow-hidden group transition-all duration-500 hover:shadow-brand-orange/20">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-orange to-orange-600 opacity-90"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay"></div>
          
          <div className="relative z-10 h-full flex flex-col justify-between text-white">
            <div className="flex justify-between items-start">
              <span className="text-2xl font-black tracking-widest">Minders<span className="text-black">Pay</span></span>
              <CreditCard className="w-10 h-10 opacity-80" />
            </div>
            
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between mb-4">
                <span className={`text-3xl tracking-[0.15em] font-mono transition-all duration-300 ${showDetails ? 'opacity-100' : 'opacity-80'}`}>
                  {showDetails ? '4281 5500 1234 5678' : '**** **** **** 4281'}
                </span>
              </div>
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-[10px] uppercase tracking-widest opacity-70 mb-1">Titular</p>
                  <p className="font-bold tracking-widest uppercase text-lg">MARIA RODRIGUEZ</p>
                </div>
                <div className="flex gap-6 text-right">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest opacity-70 mb-1">Vence</p>
                    <p className="font-bold tracking-widest font-mono text-lg">12/28</p>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest opacity-70 mb-1">CVV</p>
                    <p className={`font-bold tracking-widest font-mono text-lg transition-all duration-300 ${showDetails ? 'opacity-100' : 'opacity-80'}`}>
                      {showDetails ? '123' : '***'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col md:flex-row gap-4 w-full max-w-[450px]">
          <button 
            onClick={() => setShowDetails(!showDetails)}
            className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-all ${
              showDetails 
                ? 'bg-brand-card border border-brand-border text-brand-gray hover:text-white' 
                : 'bg-brand-orange text-white hover:bg-brand-orange/90 shadow-lg shadow-brand-orange/20'
            }`}
          >
            {showDetails ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            {showDetails ? 'Ocultar Datos' : 'Mostrar Datos'}
          </button>
          
          <button 
            onClick={() => handleCopy('4281550012345678')}
            disabled={!showDetails}
            className={`flex-1 flex items-center justify-center gap-2 py-4 rounded-xl font-bold transition-all ${
              showDetails 
                ? copied 
                  ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-500' 
                  : 'bg-brand-card border border-brand-border text-white hover:border-brand-orange/50'
                : 'bg-brand-bg border border-brand-border text-brand-gray opacity-50 cursor-not-allowed'
            }`}
          >
            {copied ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
            {copied ? 'Copiado!' : 'Copiar Número'}
          </button>
        </div>

        {/* Security Info */}
        <div className="bg-brand-orange/5 border border-brand-orange/20 rounded-2xl p-6 flex items-start gap-4 w-full max-w-[450px]">
          <Info className="w-6 h-6 text-brand-orange shrink-0" />
          <div>
            <h4 className="text-brand-orange font-bold text-sm mb-1">Mantén tus datos seguros</h4>
            <p className="text-brand-gray text-xs leading-relaxed">Nunca compartas el código CVV ni la fecha de vencimiento. Minders Pay nunca te pedirá estos datos por teléfono o correo electrónico.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
