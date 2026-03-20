import React, { useState } from 'react';
import { Screen } from '../types';
import { Plus, Edit3, Share2, MoreVertical, Search, Filter, Package, ArrowRight, X, Upload, Check } from 'lucide-react';
import { formatUSD } from '../utils/format';

export function CatalogScreen({ navigate }: { navigate: (s: Screen) => void }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-8 max-w-[1200px] mx-auto relative space-y-10">
      {/* Decorative Shapes */}
      <div className="absolute top-[-50px] right-[-50px] w-[300px] h-[300px] bg-brand-primary opacity-[0.06] blur-[100px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-[10%] left-[-50px] w-[200px] h-[200px] bg-brand-primary opacity-[0.04] blur-[80px] -z-10 pointer-events-none"></div>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-[32px] font-bold text-white tracking-tight leading-none mb-2">Tu Catálogo</h1>
          <p className="text-brand-gray text-sm">Crea enlaces de pago directos y gestiona tu inventario digital.</p>
        </div>
        <button 
          onClick={() => setShowModal(true)}
          className="bg-brand-primary hover:bg-brand-hover text-white h-[44px] px-6 rounded-[10px] font-semibold text-sm transition-all active:scale-95 flex items-center gap-2 shadow-lg shadow-brand-primary/20"
        >
          <Plus className="w-5 h-5" />
          Nuevo Producto
        </button>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Product Card 1 */}
        <article className="bg-brand-surface border border-brand-border rounded-[14px] overflow-hidden shadow-xl group hover:border-brand-primary/30 transition-all">
          <div className="aspect-video w-full bg-brand-elevated relative overflow-hidden">
            <img 
              alt="Laptop Pro" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              src="https://picsum.photos/seed/laptop/800/450"
              referrerPolicy="no-referrer"
            />
            <span className="absolute top-3 left-3 bg-[#4ADE8020] text-emerald-500 text-[11px] px-[10px] py-[3px] rounded-full font-bold uppercase tracking-wider border border-emerald-500/20">Disponible</span>
          </div>
          <div className="p-5">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-base font-semibold text-white">Laptop Minders Pro X1</h3>
              <span className="font-mono text-brand-primary text-sm font-bold">{formatUSD(1250)}</span>
            </div>
            <p className="text-brand-gray text-[13px] line-clamp-2 mb-6 leading-relaxed">Potente estación de trabajo para desarrolladores y creativos latinos.</p>
            <div className="flex items-center gap-2">
              <button className="flex-1 bg-brand-elevated border border-brand-border text-brand-gray h-10 rounded-lg text-[13px] font-medium hover:text-white transition-colors">
                Editar
              </button>
              <button className="flex-1 bg-transparent border-[1.5px] border-brand-primary text-brand-primary h-10 rounded-lg text-[13px] font-semibold hover:bg-brand-primary/10 transition-all flex items-center justify-center gap-2">
                <Share2 className="w-4 h-4" />
                Compartir
              </button>
            </div>
          </div>
        </article>

        {/* Product Card 2 */}
        <article className="bg-brand-surface border border-brand-border rounded-[14px] overflow-hidden shadow-xl group hover:border-brand-primary/30 transition-all">
          <div className="aspect-video w-full bg-brand-elevated relative overflow-hidden">
            <img 
              alt="Audifonos" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
              src="https://picsum.photos/seed/headphones/800/450"
              referrerPolicy="no-referrer"
            />
            <span className="absolute top-3 left-3 bg-[#FBBF2420] text-brand-warning text-[11px] px-[10px] py-[3px] rounded-full font-bold uppercase tracking-wider border border-brand-warning/20">Bajo Stock</span>
          </div>
          <div className="p-5">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-base font-semibold text-white">Audífonos Studio ANC</h3>
              <span className="font-mono text-brand-primary text-sm font-bold">{formatUSD(450)}</span>
            </div>
            <p className="text-brand-gray text-[13px] line-clamp-2 mb-6 leading-relaxed">Cancelación de ruido activa y batería de 40 horas.</p>
            <div className="flex items-center gap-2">
              <button className="flex-1 bg-brand-elevated border border-brand-border text-brand-gray h-10 rounded-lg text-[13px] font-medium hover:text-white transition-colors">
                Editar
              </button>
              <button className="flex-1 bg-transparent border-[1.5px] border-brand-primary text-brand-primary h-10 rounded-lg text-[13px] font-semibold hover:bg-brand-primary/10 transition-all flex items-center justify-center gap-2">
                <Share2 className="w-4 h-4" />
                Compartir
              </button>
            </div>
          </div>
        </article>

        {/* Empty State Mockup for Grid */}
        <div className="border-2 border-dashed border-brand-border rounded-[14px] flex flex-col items-center justify-center p-8 text-center bg-brand-surface/30 hover:bg-brand-surface/50 transition-all cursor-pointer group" onClick={() => setShowModal(true)}>
          <div className="w-12 h-12 bg-brand-elevated rounded-full flex items-center justify-center mb-4 text-brand-textTer group-hover:text-brand-primary transition-colors border border-brand-border">
            <Plus className="w-6 h-6" />
          </div>
          <p className="text-brand-gray text-sm mb-4">¿Tienes más que ofrecer?</p>
          <button className="text-brand-primary text-xs font-bold uppercase tracking-wider hover:underline">Agregar Item</button>
        </div>
      </div>

      {/* Modal Create/Edit Product */}
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-brand-elevated border border-brand-border w-full max-w-xl rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="px-8 py-6 border-b border-brand-border flex justify-between items-center bg-brand-surface/50">
              <div>
                <h2 className="text-xl font-semibold text-white">Nuevo Producto</h2>
                <p className="text-brand-textTer text-xs mt-1">Completa los datos para publicar en tu catálogo.</p>
              </div>
              <button 
                onClick={() => setShowModal(false)}
                className="p-2 text-brand-textTer hover:text-white transition-colors rounded-lg hover:bg-brand-border"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            {/* Modal Body (Form) */}
            <form className="p-8 space-y-6" onSubmit={(e) => { e.preventDefault(); setShowModal(false); }}>
              {/* Photo Upload Section */}
              <div>
                <label className="block text-[12px] font-medium text-brand-gray uppercase tracking-widest mb-2">Foto del Producto</label>
                <div className="border-2 border-dashed border-brand-border rounded-xl p-8 flex flex-col items-center justify-center bg-brand-background/50 hover:border-brand-primary transition-all cursor-pointer group">
                  <div className="w-12 h-12 bg-brand-elevated rounded-full flex items-center justify-center mb-3 group-hover:bg-brand-primary/10 border border-brand-border">
                    <Upload className="w-6 h-6 text-brand-textTer group-hover:text-brand-primary transition-colors" />
                  </div>
                  <p className="text-sm text-brand-gray font-medium">Haga clic para subir o arrastre imagen</p>
                  <p className="text-[11px] text-brand-textTer mt-1">PNG, JPG (Máx. 5MB)</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {/* Name */}
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-[12px] font-medium text-brand-gray uppercase tracking-widest mb-2">Nombre</label>
                  <input className="w-full bg-brand-background border border-brand-border rounded-[10px] h-[48px] px-4 text-white text-sm focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all outline-none" placeholder="Ej: iPhone 15 Pro" type="text" />
                </div>
                {/* Price */}
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-[12px] font-medium text-brand-gray uppercase tracking-widest mb-2">Precio (USD)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-textTer font-mono text-sm">$</span>
                    <input className="w-full bg-brand-background border border-brand-border rounded-[10px] h-[48px] pl-8 pr-4 text-white font-mono text-sm focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all outline-none" placeholder="0" type="number" />
                  </div>
                </div>
              </div>
              {/* Description */}
              <div>
                <label className="block text-[12px] font-medium text-brand-gray uppercase tracking-widest mb-2">Descripción</label>
                <textarea className="w-full bg-brand-background border border-brand-border rounded-[10px] p-4 text-white text-sm resize-none focus:border-brand-primary focus:ring-1 focus:ring-brand-primary transition-all outline-none" placeholder="Detalles del producto..." rows={3}></textarea>
              </div>
              {/* Availability Toggle */}
              <div className="flex items-center justify-between p-4 bg-brand-surface border border-brand-border rounded-[10px]">
                <div>
                  <p className="text-sm font-semibold text-white">Disponible para la venta</p>
                  <p className="text-xs text-brand-textTer">Si se desactiva, el link de pago no será visible.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input type="checkbox" className="sr-only peer" defaultChecked />
                  <div className="w-11 h-6 bg-brand-border rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-brand-primary"></div>
                </label>
              </div>
              {/* Action Buttons */}
              <div className="flex gap-4 pt-2">
                <button 
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-brand-elevated border border-brand-border text-brand-gray h-[44px] rounded-[10px] font-semibold text-sm hover:text-white transition-all"
                >
                  Cancelar
                </button>
                <button 
                  type="submit"
                  className="flex-[2] bg-brand-primary hover:bg-brand-hover text-white h-[44px] rounded-[10px] font-semibold text-sm transition-all active:scale-95 shadow-lg shadow-brand-primary/10 flex items-center justify-center gap-2"
                >
                  <Check className="w-4 h-4" />
                  Guardar Producto
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
