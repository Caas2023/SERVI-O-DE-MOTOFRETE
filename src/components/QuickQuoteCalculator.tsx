import React, { useState } from 'react';
import { 
  Calculator, 
  MapPin, 
  Clock, 
  Zap, 
  RotateCcw, 
  Send, 
  HelpCircle, 
  CheckCircle2, 
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { ServiceCategory } from '../types';
import { 
  calculateFreightQuote, 
  formatCurrencyBRL, 
  generateWhatsAppLink, 
  getAllNeighborhoods 
} from '../utils/pricing';

export const QuickQuoteCalculator: React.FC = () => {
  const neighborhoods = getAllNeighborhoods();

  const [origin, setOrigin] = useState("Internacional Shopping Guarulhos");
  const [destination, setDestination] = useState("Brás (Polo de Confecções)");
  const [category, setCategory] = useState<ServiceCategory>("bras-moda");
  const [isUrgent, setIsUrgent] = useState(false);
  const [needsReturn, setNeedsReturn] = useState(false);

  const quote = calculateFreightQuote({
    origin,
    destination,
    serviceCategory: category,
    isUrgent,
    needsReturn
  });

  return (
    <section id="simulador" className="py-16 bg-slate-900 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-bold text-amber-400 mb-3">
            <Calculator className="w-3.5 h-3.5" /> Simulador de Frete Expresso
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-white tracking-tight">
            Calcule o Frete do seu Motoboy em Segundos
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Transparência total sem surpresas. Preços justos partindo da nossa base na Dutra 225 ou entre qualquer bairro da Grande SP.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Form */}
          <div className="lg:col-span-7 bg-slate-950/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Origin Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" /> Ponto de Retirada (Origem):
                </label>
                <select
                  value={origin}
                  onChange={(e) => setOrigin(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
                >
                  {neighborhoods.map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
                <span className="text-[11px] text-slate-500 mt-1 block">
                  Nossa base fica na Vila Itapegica / Dutra 225
                </span>
              </div>

              {/* Destination Selector */}
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" /> Ponto de Entrega (Destino):
                </label>
                <select
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-3 text-sm text-white focus:outline-none focus:border-amber-400"
                >
                  {neighborhoods.map((n) => (
                    <option key={n} value={n}>{n}</option>
                  ))}
                </select>
                <span className="text-[11px] text-slate-500 mt-1 block">
                  Atendemos toda a Zona Leste, Norte e Centro
                </span>
              </div>
            </div>

            {/* Service Category */}
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">
                Tipo de Serviço / Mercadoria:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: 'bras-moda', label: 'Brás & Moda', sub: 'Roupas e fardos' },
                  { id: 'shopping', label: 'Shopping', sub: 'Retirada de pacotes' },
                  { id: 'documentos', label: 'Documentos', sub: 'Cartórios e contratos' },
                  { id: 'ecommerce', label: 'E-commerce', sub: 'Same Day flex' },
                  { id: 'saude', label: 'Saúde', sub: 'Exames e remédios' },
                  { id: 'autopecas', label: 'Autopeças', sub: 'Oficinas e peças' },
                  { id: 'bancario', label: 'Bancário', sub: 'Malotes e depósitos' },
                  { id: 'aeroporto', label: 'Aeroporto GRU', sub: 'Carga TECA / Voo' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCategory(item.id as ServiceCategory)}
                    className={`p-2.5 rounded-xl text-left border text-xs transition cursor-pointer ${
                      category === item.id
                        ? 'bg-amber-500/10 border-amber-500/60 text-amber-300 font-bold'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    <div className="font-semibold text-white">{item.label}</div>
                    <div className="text-[10px] text-slate-500 truncate">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Addon Toggles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <label className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition ${
                isUrgent ? 'bg-amber-500/10 border-amber-500/50' : 'bg-slate-900/40 border-slate-800'
              }`}>
                <input
                  type="checkbox"
                  checked={isUrgent}
                  onChange={(e) => setIsUrgent(e.target.checked)}
                  className="rounded border-slate-700 text-amber-500 focus:ring-amber-400 h-4 w-4 bg-slate-800"
                />
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1">
                    <Zap className="w-3.5 h-3.5 text-amber-400" /> Corrida Imediata (Urgente)
                  </div>
                  <div className="text-[11px] text-slate-400">Prioridade zero na fila de saída</div>
                </div>
              </label>

              <label className={`flex items-center gap-3 p-3 rounded-xl border cursor-pointer transition ${
                needsReturn ? 'bg-sky-500/10 border-sky-500/50' : 'bg-slate-900/40 border-slate-800'
              }`}>
                <input
                  type="checkbox"
                  checked={needsReturn}
                  onChange={(e) => setNeedsReturn(e.target.checked)}
                  className="rounded border-slate-700 text-sky-500 focus:ring-sky-400 h-4 w-4 bg-slate-800"
                />
                <div>
                  <div className="text-xs font-bold text-white flex items-center gap-1">
                    <RotateCcw className="w-3.5 h-3.5 text-sky-400" /> Retorno (Ida e Volta)
                  </div>
                  <div className="text-[11px] text-slate-400">Para assinaturas e trocas de peças</div>
                </div>
              </label>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-950 via-slate-900 to-amber-950/20 border border-amber-500/30 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Estimativa de Valor
                </span>
                <div className="font-heading text-3xl sm:text-4xl font-black text-white mt-1">
                  {formatCurrencyBRL(quote.estimatedPriceMin)} - {formatCurrencyBRL(quote.estimatedPriceMax)}
                </div>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-slate-400 block">Distância Calculada</span>
                <span className="text-sm font-bold text-slate-200">
                  ~{quote.distanceKmEstimate} km
                </span>
              </div>
            </div>

            {/* SLA Time and Route Box */}
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-900/80 border border-slate-800">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-emerald-400" /> Tempo Estimado de Entrega:
                </span>
                <span className="font-bold text-emerald-400 text-sm">
                  {quote.estimatedTimeMinMinutes} a {quote.estimatedTimeMaxMinutes} minutos
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/50 border border-slate-800/80 space-y-1">
                <span className="text-slate-500 font-semibold block">Corredor Principal:</span>
                <span className="text-slate-300 font-medium">{quote.suggestedRoute}</span>
              </div>

              <div className="space-y-1.5 pt-1 text-[11px] text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Sem cobrança extra por chuva ou horário de pico normal</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Protocolo digital com foto e assinatura pelo WhatsApp</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Pagamento via Pix, dinheiro, cartão ou boleto faturado PJ</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action Button */}
            <a
              href={generateWhatsAppLink(quote.whatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white font-black py-4 px-6 rounded-xl shadow-xl shadow-emerald-950/60 hover:shadow-emerald-600/30 transition-all text-sm hover:-translate-y-0.5"
            >
              <Send className="w-4 h-4" />
              Solicitar este Motoboy no WhatsApp
            </a>

            <p className="text-center text-[11px] text-slate-500">
              * Valores aproximados de frete avulso. Empresas contam com tabela faturada especial.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
