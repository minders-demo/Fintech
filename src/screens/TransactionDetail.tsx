import React from 'react';
import { Screen, TransferData } from '../types';
import { formatUSD } from '../utils/format';

export function TransactionDetailScreen({ navigate, data }: { navigate: (s: Screen) => void, data?: TransferData }) {
  return (
    <div className="min-h-[calc(100vh-64px)] flex items-center justify-center p-4">
      <div className="w-full max-w-[520px] relative z-10">
        <nav className="mb-6">
          <button onClick={() => navigate('movements')} className="inline-flex items-center text-brand-gray hover:text-white transition-colors gap-2 text-sm font-medium">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
            Volver al historial
          </button>
        </nav>

        <section className="text-center mb-8 flex flex-col items-center">
          <div className="w-20 h-20 bg-brand-card border border-brand-border rounded-full flex items-center justify-center mb-4 shadow-xl">
            <svg className="h-10 w-10 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
          </div>
          <h2 className="text-xl font-semibold mb-2 text-white">Transferencia enviada</h2>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-medium bg-green-400/10 text-green-400 mb-6">
            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
            Completado
          </span>
          <div className="mb-1">
            <span className="text-[38px] font-bold tracking-[-1.5px] text-red-400">−{formatUSD(Number(data?.amount || 0))}</span>
          </div>
          <p className="text-[11px] text-brand-gray">14 de Octubre 2026, 15:42 hs</p>
        </section>

        <section className="bg-brand-sidebar border border-brand-border rounded-[20px] p-6 mb-6 shadow-2xl">
          <div className="space-y-5">
            <div className="flex justify-between items-center pb-5 border-b border-brand-border/40">
              <span className="text-sm text-brand-gray">Destinatario</span>
              <span className="text-sm font-semibold text-white">{data?.recipient || 'Destinatario'}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-brand-gray">N° de Operación</span>
              <span className="text-sm font-mono text-brand-gray">#TRX-982374982</span>
            </div>
          </div>
        </section>

        <section className="flex gap-3">
          <button className="flex-1 h-12 bg-brand-card border border-brand-border text-white rounded-xl font-semibold text-sm hover:bg-brand-border transition-colors flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path></svg>
            Compartir
          </button>
          <button className="flex-1 h-12 bg-brand-orange hover:bg-orange-600 text-white rounded-xl font-semibold text-sm transition-colors flex items-center justify-center gap-2">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
            Descargar
          </button>
        </section>
      </div>
    </div>
  );
}
