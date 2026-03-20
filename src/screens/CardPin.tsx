import React, { useState } from 'react';
import { Screen, TransferData } from '../types';
import { ArrowLeft, Lock, Eye, EyeOff, CheckCircle } from 'lucide-react';

export function CardPinScreen({ navigate }: { navigate: (s: Screen, data?: TransferData) => void }) {
  const [step, setStep] = useState(1);
  const [pin1, setPin1] = useState<number[]>([]);
  const [pin2, setPin2] = useState<number[]>([]);
  const [showPin, setShowPin] = useState(false);
  const [error, setError] = useState('');

  const handleNumberClick = (num: number) => {
    setError('');
    if (step === 1) {
      if (pin1.length < 4) {
        const newPin1 = [...pin1, num];
        setPin1(newPin1);
        if (newPin1.length === 4) {
          setTimeout(() => setStep(2), 300);
        }
      }
    } else {
      if (pin2.length < 4) {
        const newPin2 = [...pin2, num];
        setPin2(newPin2);
        if (newPin2.length === 4) {
          if (pin1.join('') === newPin2.join('')) {
            navigate('operation_success', { amount: '', recipient: '', successType: 'pin' });
          } else {
            setError("Los PINs no coinciden. Inténtalo de nuevo.");
            setPin1([]);
            setPin2([]);
            setStep(1);
          }
        }
      }
    }
  };

  const handleDelete = () => {
    setError('');
    if (step === 1) {
      setPin1(prev => prev.slice(0, -1));
    } else {
      setPin2(prev => prev.slice(0, -1));
    }
  };

  const currentPin = step === 1 ? pin1 : pin2;

  return (
    <div className="flex flex-col gap-8 max-w-[500px] mx-auto w-full min-h-[80vh] justify-center relative bg-[#0D0D0D]">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 flex items-center gap-4 border-b border-brand-border pb-6">
        <button 
          onClick={() => navigate('cards')}
          className="w-10 h-10 rounded-full bg-brand-bg border border-brand-border flex items-center justify-center text-brand-gray hover:text-white hover:border-[#FF4500] transition-all group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        </button>
        <div>
          <h1 className="text-white text-2xl font-black tracking-tight">Cambiar PIN</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center gap-10 mt-20">
        
        {/* Icon & Title */}
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="w-16 h-16 rounded-full bg-[#FF4500]/10 flex items-center justify-center text-[#FF4500] shadow-[0_0_30px_rgba(255,69,0,0.2)]">
            <Lock className="w-8 h-8" />
          </div>
          <div>
            <h2 className="text-white text-xl font-bold mb-2">
              {step === 1 ? 'Ingresa tu nuevo PIN' : 'Confirma tu nuevo PIN'}
            </h2>
            <p className="text-brand-gray text-sm">
              {step === 1 ? 'Elige 4 números que no sean consecutivos ni repetidos.' : 'Vuelve a ingresar el PIN para confirmar.'}
            </p>
          </div>
        </div>

        {/* PIN Display */}
        <div className="flex items-center justify-center gap-6 my-8">
          {[0, 1, 2, 3].map((index) => (
            <div 
              key={index}
              className={`w-16 h-16 rounded-[12px] flex items-center justify-center text-3xl font-black transition-all ${
                currentPin.length > index 
                  ? 'bg-[#FF4500] text-white shadow-[0_0_15px_rgba(255,69,0,0.4)] border-2 border-[#FF4500]' 
                  : 'bg-[#1E1E1E] border-2 border-brand-border text-transparent'
              }`}
            >
              {currentPin.length > index ? (showPin ? currentPin[index] : '●') : ''}
            </div>
          ))}
        </div>

        {/* Error Message */}
        {error && <p className="text-red-500 text-sm font-bold">{error}</p>}

        {/* Toggle Visibility */}
        <button 
          onClick={() => setShowPin(!showPin)}
          className="flex items-center gap-2 text-brand-gray hover:text-white text-sm font-bold transition-colors"
        >
          {showPin ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          {showPin ? 'Ocultar PIN' : 'Mostrar PIN'}
        </button>

        {/* Keypad */}
        <div className="grid grid-cols-3 gap-4 w-full max-w-[320px] mx-auto mt-4">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <button
              key={num}
              onClick={() => handleNumberClick(num)}
              className="h-16 rounded-2xl bg-brand-card border border-brand-border text-white text-2xl font-bold hover:bg-[#FF4500] hover:border-[#FF4500] hover:shadow-[0_0_15px_rgba(255,69,0,0.3)] transition-all active:scale-95 flex items-center justify-center active:bg-[#FF4500] active:text-white"
            >
              {num}
            </button>
          ))}
          <div className="h-16"></div> {/* Empty space */}
          <button
            onClick={() => handleNumberClick(0)}
            className="h-16 rounded-2xl bg-brand-card border border-brand-border text-white text-2xl font-bold hover:bg-[#FF4500] hover:border-[#FF4500] hover:shadow-[0_0_15px_rgba(255,69,0,0.3)] transition-all active:scale-95 flex items-center justify-center active:bg-[#FF4500] active:text-white"
          >
            0
          </button>
          <button
            onClick={handleDelete}
            className="h-16 rounded-2xl bg-brand-bg border border-brand-border text-brand-gray hover:text-white hover:bg-brand-card transition-all active:scale-95 flex items-center justify-center"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
        </div>

      </div>
    </div>
  );
}
