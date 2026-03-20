import React, { useState } from 'react';
import { Screen } from '../types';
import { QrCode, ArrowLeft, Copy, Share2, CheckCircle } from 'lucide-react';
import { formatUSD } from '../utils/format';

export function ChargeQrScreen({ navigate }: { navigate: (s: Screen) => void }) {
  const [copied, setCopied] = useState(false);
  const amount = 50000;
  const link = "https://minders.pay/q/8f9a2b";

  const handleCopy = () => {
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col gap-8 max-w-[600px] mx-auto w-full min-h-[80vh] justify-center items-center relative">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 flex items-center gap-4 border-b border-brand-border pb-6">
        <button 
          onClick={() => navigate('transfer')}
          className="w-10 h-10 rounded-full bg-brand-bg border border-brand-border flex items-center justify-center text-brand-gray hover:text-white hover:border-brand-orange transition-all group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        </button>
        <div>
          <h1 className="text-white text-2xl font-black tracking-tight">Cobrar con QR</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center gap-8 mt-20 w-full">
        
        {/* QR Card */}
        <div className="bg-white rounded-3xl p-8 shadow-2xl flex flex-col items-center gap-6 w-full max-w-[400px] relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 to-transparent opacity-50"></div>
          
          <div className="relative z-10 text-center">
            <p className="text-brand-gray text-sm font-bold uppercase tracking-widest mb-1">Monto a cobrar</p>
            <p className="text-4xl font-black text-black">{formatUSD(amount)}</p>
          </div>

          {/* Simulated QR Code */}
          <div className="relative z-10 w-64 h-64 bg-black rounded-2xl p-4 flex items-center justify-center shadow-inner">
            <div className="w-full h-full border-4 border-white border-dashed rounded-xl flex items-center justify-center relative">
              <QrCode className="w-32 h-32 text-white" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-orange/20 to-transparent animate-scan"></div>
            </div>
          </div>

          <div className="relative z-10 text-center">
            <p className="text-black font-bold text-lg">María Rodríguez</p>
            <p className="text-brand-gray text-sm">Minders Pay</p>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-4 w-full max-w-[400px]">
          <p className="text-center text-brand-gray text-sm font-medium">O comparte el link de pago</p>
          
          <div className="flex items-center bg-brand-card border border-brand-border rounded-xl p-2">
            <input 
              type="text" 
              readOnly 
              value={link}
              className="flex-1 bg-transparent text-white font-mono text-sm px-4 outline-none"
            />
            <button 
              onClick={handleCopy}
              className={`p-3 rounded-lg flex items-center justify-center transition-all ${
                copied ? 'bg-emerald-500/20 text-emerald-500' : 'bg-brand-bg text-brand-gray hover:text-white hover:bg-brand-orange/20'
              }`}
            >
              {copied ? <CheckCircle className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
            </button>
          </div>

          <button className="w-full bg-brand-orange hover:bg-brand-orange/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-orange/20 transition-all flex items-center justify-center gap-2 mt-2">
            <Share2 className="w-5 h-5" />
            Compartir Link
          </button>
        </div>

      </div>
    </div>
  );
}
