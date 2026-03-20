import React from 'react';
import { Screen } from '../types';
import { Search, Wallet, TrendingUp, TrendingDown, Minus, ChevronRight, Lightbulb, Globe, Users, Mail } from 'lucide-react';

export function MarketHubScreen({ navigate }: { navigate: (s: Screen) => void }) {
  return (
    <div className="flex flex-col gap-8">
      {/* Risk Disclaimer */}
      <div className="bg-brand-orange/10 border border-brand-orange/30 rounded-xl p-4 flex items-center gap-4">
        <span className="text-brand-orange font-bold text-xl">!</span>
        <p className="text-xs md:text-sm text-brand-gray">
          <span className="font-bold text-brand-orange">Risk Warning:</span> Trading digital assets involves significant risk and can result in the loss of your invested capital. High volatility is expected. Never invest more than you can afford to lose.
        </p>
      </div>

      {/* Portfolio Hero Section */}
      <section className="@container">
        <div className="flex flex-col gap-6 p-8 rounded-2xl bg-gradient-to-br from-brand-orange/10 to-brand-bg border border-brand-border @[864px]:flex-row shadow-sm">
          <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl @[480px]:h-64 @[864px]:w-1/2 flex items-center justify-center relative overflow-hidden group bg-brand-card">
            <div className="absolute inset-0 bg-brand-orange/20 group-hover:bg-brand-orange/10 transition-colors"></div>
            <Wallet className="w-16 h-16 text-white opacity-50" />
          </div>
          <div className="flex flex-col gap-6 @[864px]:w-1/2 @[864px]:justify-center">
            <div className="flex flex-col gap-2">
              <h1 className="text-white text-3xl font-black leading-tight tracking-tight @[480px]:text-4xl">
                Seu Portfolio Cripto
              </h1>
              <div className="flex flex-col gap-1">
                <h2 className="text-brand-orange text-2xl font-bold @[480px]:text-3xl">
                  $45,230.00 <span className="text-sm font-medium text-brand-gray">USD</span>
                </h2>
                <h3 className="text-brand-gray text-lg font-semibold">
                  $235,196,450.00 <span className="text-xs font-normal">COP</span>
                </h3>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <button 
                onClick={() => navigate('transfer')}
                className="flex-1 min-w-[120px] cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-brand-orange text-white text-base font-bold transition-all hover:scale-[1.02]"
              >
                <span className="truncate">Depositar</span>
              </button>
              <button 
                onClick={() => navigate('transfer')}
                className="flex-1 min-w-[120px] cursor-pointer items-center justify-center rounded-xl h-12 px-6 bg-brand-orange/20 text-white text-base font-bold transition-all hover:bg-brand-orange/30"
              >
                <span className="truncate">Sacar</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Assets */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white text-xl font-bold leading-tight">Meus Ativos Principais</h2>
          <button className="text-brand-orange text-sm font-semibold hover:underline">Ver todos</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* BTC Card */}
          <div 
            onClick={() => navigate('market')}
            className="flex flex-col gap-4 rounded-xl border border-brand-border bg-brand-card p-5 hover:border-brand-orange/40 transition-colors cursor-pointer"
          >
            <div className="flex justify-between items-start">
              <div className="p-2 rounded-lg bg-[#f7931a]/10 text-[#f7931a] font-bold text-xl">
                ₿
              </div>
              <div className="flex items-center gap-1 text-green-500 text-sm font-bold">
                <TrendingUp className="w-4 h-4" />
                +2.4%
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <h3 className="text-white text-base font-bold">Bitcoin</h3>
                <span className="text-xs text-brand-gray font-medium">BTC</span>
              </div>
              <p className="text-brand-gray text-sm">$64,230.10</p>
            </div>
          </div>

          {/* ETH Card */}
          <div 
            onClick={() => navigate('market')}
            className="flex flex-col gap-4 rounded-xl border border-brand-border bg-brand-card p-5 hover:border-brand-orange/40 transition-colors cursor-pointer"
          >
            <div className="flex justify-between items-start">
              <div className="p-2 rounded-lg bg-[#627eea]/10 text-[#627eea] font-bold text-xl">
                Ξ
              </div>
              <div className="flex items-center gap-1 text-red-500 text-sm font-bold">
                <TrendingDown className="w-4 h-4" />
                -1.1%
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <h3 className="text-white text-base font-bold">Ethereum</h3>
                <span className="text-xs text-brand-gray font-medium">ETH</span>
              </div>
              <p className="text-brand-gray text-sm">$3,450.25</p>
            </div>
          </div>

          {/* USDT Card */}
          <div 
            onClick={() => navigate('market')}
            className="flex flex-col gap-4 rounded-xl border border-brand-border bg-brand-card p-5 hover:border-brand-orange/40 transition-colors cursor-pointer"
          >
            <div className="flex justify-between items-start">
              <div className="p-2 rounded-lg bg-[#26a17b]/10 text-[#26a17b] font-bold text-xl">
                ₮
              </div>
              <div className="flex items-center gap-1 text-brand-gray text-sm font-bold">
                <Minus className="w-4 h-4" />
                0.0%
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <h3 className="text-white text-base font-bold">Tether</h3>
                <span className="text-xs text-brand-gray font-medium">USDT</span>
              </div>
              <p className="text-brand-gray text-sm">$1.00</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Table Top 10 */}
      <section className="flex flex-col gap-4">
        <h2 className="text-white text-xl font-bold leading-tight">Top 10 Mercado</h2>
        <div className="overflow-x-auto rounded-xl border border-brand-border bg-brand-card">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-brand-orange/10 text-brand-gray text-xs font-bold uppercase tracking-wider">
                <th className="px-6 py-4">Ativo</th>
                <th className="px-6 py-4 text-right">Preço</th>
                <th className="px-6 py-4 text-right">Variação 24h</th>
                <th className="px-6 py-4 text-right hidden md:table-cell">Market Cap</th>
                <th className="px-6 py-4 text-right">Ação</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-border">
              {[
                { rank: 1, name: 'Bitcoin', symbol: 'BTC', price: '$64,230.10', change: '+2.45%', cap: '$1.2T', up: true, icon: '₿' },
                { rank: 2, name: 'Ethereum', symbol: 'ETH', price: '$3,450.25', change: '-1.12%', cap: '$412B', up: false, icon: 'Ξ' },
                { rank: 3, name: 'Tether', symbol: 'USDT', price: '$1.00', change: '0.00%', cap: '$108B', up: null, icon: '₮' },
                { rank: 4, name: 'BNB', symbol: 'BNB', price: '$580.45', change: '+1.89%', cap: '$88B', up: true, icon: 'B' },
                { rank: 5, name: 'Solana', symbol: 'SOL', price: '$145.20', change: '-2.34%', cap: '$64B', up: false, icon: 'S' },
              ].map((coin) => (
                <tr key={coin.symbol} className="hover:bg-brand-orange/5 transition-colors cursor-pointer" onClick={() => navigate('market')}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="text-brand-gray text-xs font-bold w-4">{coin.rank}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-brand-orange font-bold text-xl w-6 text-center">{coin.icon}</span>
                        <span className="font-bold text-white">{coin.name}</span>
                        <span className="text-xs text-brand-gray">{coin.symbol}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right font-medium text-white">{coin.price}</td>
                  <td className={`px-6 py-4 text-right font-bold ${coin.up === true ? 'text-green-500' : coin.up === false ? 'text-red-500' : 'text-brand-gray'}`}>
                    {coin.change}
                  </td>
                  <td className="px-6 py-4 text-right text-brand-gray hidden md:table-cell">{coin.cap}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-brand-orange hover:text-brand-orange/80 font-bold text-sm">Comprar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
