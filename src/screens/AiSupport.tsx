import React, { useState, useRef, useEffect } from 'react';
import { Screen } from '../types';
import { Send, AlertTriangle, Sparkles, MessageSquare, Info, Shield, CreditCard, ArrowRight } from 'lucide-react';

export function AiSupportScreen({ navigate }: { navigate: (s: Screen) => void }) {
  const [message, setMessage] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = '0';
      textareaRef.current.style.height = textareaRef.current.scrollHeight + 'px';
    }
  };

  return (
    <div className="flex flex-1 h-[calc(100vh-64px)] overflow-hidden">
      {/* Decorative Shapes */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-brand-primary opacity-[0.06] blur-[120px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-brand-primary opacity-[0.04] blur-[100px] -z-10 pointer-events-none"></div>

      {/* Left Col - FAQ */}
      <aside className="w-[320px] border-r border-brand-border p-6 overflow-y-auto bg-brand-black/50 hidden lg:block">
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-white mb-1">Preguntas frecuentes</h2>
          <p className="text-brand-gray text-xs">Encuentra soluciones rápidas</p>
        </div>
        <div className="space-y-3">
          {[
            { title: 'Límites de transferencia', desc: '¿Cuánto dinero puedo enviar por día?' },
            { title: 'Comisiones LATAM', desc: 'Tarifas por movimientos regionales' },
            { title: 'Seguridad de cuenta', desc: 'Cómo activar el 2FA biométrico' },
            { title: 'Problemas con mi tarjeta', desc: 'Reposición y bloqueo temporal' },
          ].map((faq, i) => (
            <button key={i} className="w-full text-left p-4 bg-brand-surface border border-brand-border rounded-[14px] hover:border-brand-primary/50 transition-all group shadow-lg">
              <h3 className="text-sm font-semibold text-white mb-1 group-hover:text-brand-primary transition-colors">{faq.title}</h3>
              <p className="text-[11px] text-brand-gray">{faq.desc}</p>
            </button>
          ))}
        </div>
        <div className="mt-8 pt-6 border-t border-brand-border">
          <div className="text-[12px] font-medium text-brand-gray uppercase tracking-widest mb-4">Ayuda Personalizada</div>
          <button className="w-full h-11 bg-brand-elevated border border-brand-border text-brand-gray rounded-xl text-xs font-semibold flex items-center justify-center gap-2 hover:text-white transition-all">
            <MessageSquare className="w-4 h-4" />
            Hablar con un humano
          </button>
        </div>
      </aside>

      {/* Right Col - Chat */}
      <section className="flex-1 flex flex-col relative bg-brand-background">
        {/* Banner Fraude */}
        <div className="bg-brand-danger/10 border-b border-brand-danger/30 px-6 py-3 flex items-center justify-between animate-pulse">
          <div className="flex items-center gap-3">
            <AlertTriangle className="text-brand-danger w-5 h-5" />
            <span className="text-sm font-medium text-brand-danger">¿Sospechas de un fraude o actividad inusual?</span>
          </div>
          <button className="text-xs font-bold text-brand-danger hover:underline">Bloquear cuenta ahora →</button>
        </div>

        {/* Chat Header IA */}
        <div className="px-8 py-4 flex items-center gap-4 bg-brand-surface/40 border-b border-brand-border backdrop-blur-md">
          <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-white shadow-[0_0_15px_rgba(255,92,26,0.3)]">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white leading-tight">Minders IA</h3>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
              <span className="text-[11px] text-brand-gray">Asistente virtual activo</span>
            </div>
          </div>
        </div>

        {/* Chat Messages Area */}
        <div className="flex-1 overflow-y-auto p-8 space-y-6">
          {/* IA Message */}
          <div className="flex items-start gap-4 max-w-[80%]">
            <div className="w-8 h-8 rounded-full bg-brand-elevated border border-brand-border flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-brand-primary" />
            </div>
            <div className="bg-brand-elevated p-4 rounded-2xl rounded-tl-none border border-brand-border shadow-lg">
              <p className="text-sm text-white leading-relaxed">¡Hola! Soy tu asistente de Minders Pay. Puedo ayudarte a rastrear transferencias, consultar tus límites o resolver dudas sobre seguridad. ¿Qué tienes en mente hoy?</p>
              <p className="text-[11px] text-brand-gray mt-2">Enviado a las 10:24 AM</p>
            </div>
          </div>

          {/* Quick Chips */}
          <div className="flex flex-wrap gap-2 ml-12">
            {[
              '¿Dónde está mi transferencia?',
              'Aumentar mis límites',
              'Solicitar tarjeta física'
            ].map((chip, i) => (
              <button key={i} className="px-3 py-1.5 rounded-full border border-brand-border bg-brand-surface text-brand-gray text-xs hover:border-brand-primary hover:text-white transition-all shadow-md">
                {chip}
              </button>
            ))}
          </div>
        </div>

        {/* Chat Input Area */}
        <div className="p-6 border-t border-brand-border bg-brand-surface/20">
          <div className="max-w-4xl mx-auto flex items-end gap-3 bg-brand-elevated border border-brand-border rounded-xl p-2 focus-within:border-brand-primary transition-all shadow-lg">
            <textarea 
              ref={textareaRef}
              value={message}
              onChange={(e) => {
                setMessage(e.target.value);
                handleInput();
              }}
              className="flex-1 bg-transparent border-none text-white text-sm focus:ring-0 placeholder:text-brand-textTer py-3 px-4 resize-none min-h-[48px] max-h-[150px]" 
              placeholder="Escribe tu pregunta..." 
              rows={1}
            />
            <button className="w-10 h-10 rounded-lg bg-brand-primary text-white flex items-center justify-center hover:bg-brand-hover active:scale-95 transition-all shadow-[0_0_10px_rgba(255,92,26,0.2)]">
              <Send className="w-5 h-5" />
            </button>
          </div>
          <div className="text-center mt-3">
            <p className="text-[10px] text-brand-gray">Minders IA puede cometer errores. Para operaciones sensibles, consulta siempre tus movimientos oficiales.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
