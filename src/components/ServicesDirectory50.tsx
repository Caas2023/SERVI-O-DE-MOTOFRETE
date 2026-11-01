import React, { useState } from 'react';
import { Search, MapPin, Clock, ArrowRight, X, Layers, Filter } from 'lucide-react';
import { SERVICES_CATALOG } from '../data/servicesCatalog';

interface ServicesDirectory50Props {
  onSelectService: (serviceId: string) => void;
  isOpenModal?: boolean;
  onCloseModal?: () => void;
}

export const ServicesDirectory50: React.FC<ServicesDirectory50Props> = ({
  onSelectService,
  isOpenModal,
  onCloseModal
}) => {
  const [search, setSearch] = useState('');
  const [activeRegion, setActiveRegion] = useState('Todas');
  const [activeCategory, setActiveCategory] = useState('Todas');

  const regions = ['Todas', 'Guarulhos', 'Centro & Brás', 'Zona Norte SP', 'Zona Leste SP'];

  const categories = [
    { id: 'Todas', label: 'Todas as Categorias' },
    { id: 'shopping', label: 'Shoppings' },
    { id: 'bras-moda', label: 'Brás & Moda' },
    { id: 'documentos', label: 'Documentos' },
    { id: 'corporativo', label: 'Corporativo & Malotes' },
    { id: 'saude', label: 'Saúde' },
    { id: 'autopecas', label: 'Autopeças' },
  ];

  const filtered = SERVICES_CATALOG.filter(s => {
    const matchRegion = activeRegion === 'Todas' || s.region === activeRegion;
    const matchCat = activeCategory === 'Todas' || s.serviceCategory === activeCategory;
    const query = search.toLowerCase().trim();
    const matchSearch = query === '' || 
      s.neighborhood.toLowerCase().includes(query) ||
      s.title.toLowerCase().includes(query) ||
      s.keywords.some(k => k.toLowerCase().includes(query));

    return matchRegion && matchCat && matchSearch;
  });

  const content = (
    <div className="space-y-6">
      
      {/* Search and Filters */}
      <div className="bg-slate-950 p-4 sm:p-6 rounded-2xl border border-slate-800 space-y-4">
        
        {/* Search Input */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Pesquise por bairro (ex: Brás, Tatuapé, Santana, Internacional Shopping, Dutra)..."
            className="w-full bg-slate-900 border border-slate-700 rounded-xl pl-11 pr-4 py-3 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
          />
        </div>

        {/* Region Pills */}
        <div className="space-y-1.5">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
            Regiões:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {regions.map((reg) => (
              <button
                key={reg}
                onClick={() => setActiveRegion(reg)}
                className={`text-xs px-3 py-1.5 rounded-xl border transition cursor-pointer ${
                  activeRegion === reg
                    ? 'bg-amber-500 text-slate-950 font-bold border-amber-500 shadow-md shadow-amber-500/20'
                    : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:text-white'
                }`}
              >
                {reg}
              </button>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="space-y-1.5">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
            Modalidades de Entrega:
          </span>
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`text-xs px-2.5 py-1 rounded-lg border transition cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/50 font-semibold'
                    : 'bg-slate-900/40 text-slate-400 border-slate-800 hover:text-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="text-[11px] text-slate-400 pt-1 border-t border-slate-800/80 flex items-center justify-between">
          <span>Exibindo <strong>{filtered.length}</strong> de <strong>{SERVICES_CATALOG.length}</strong> páginas de serviços indexadas.</span>
          {(search || activeRegion !== 'Todas' || activeCategory !== 'Todas') && (
            <button
              onClick={() => { setSearch(''); setActiveRegion('Todas'); setActiveCategory('Todas'); }}
              className="text-amber-400 hover:underline cursor-pointer"
            >
              Limpar filtros
            </button>
          )}
        </div>

      </div>

      {/* Grid of Pages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-[60vh] overflow-y-auto pr-1">
        {filtered.map((item) => (
          <button
            key={item.id}
            onClick={() => {
              onSelectService(item.id);
              if (onCloseModal) onCloseModal();
            }}
            className="w-full text-left p-4 rounded-2xl bg-slate-950/80 hover:bg-slate-900 border border-slate-800/80 hover:border-amber-500/40 transition flex items-center justify-between group cursor-pointer"
          >
            <div className="pr-3 space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-white group-hover:text-amber-400 transition">
                  {item.neighborhood}
                </span>
                <span className="text-[10px] text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                  {item.categoryLabel}
                </span>
              </div>
              <p className="text-xs text-slate-400 line-clamp-1">
                {item.title}
              </p>
              <div className="text-[11px] text-slate-500">
                Atendimento: <strong className="text-emerald-400">Coleta e entrega rápida</strong> • Saída Dutra 225
              </div>
            </div>

            <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition shrink-0" />
          </button>
        ))}

        {filtered.length === 0 && (
          <div className="col-span-2 text-center py-10 text-xs text-slate-500 bg-slate-950 rounded-2xl border border-slate-800">
            Nenhuma rota localizada com os filtros selecionados.
          </div>
        )}
      </div>

    </div>
  );

  if (isOpenModal) {
    return (
      <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn">
        <div className="bg-slate-900 border border-slate-800 w-full max-w-4xl rounded-3xl p-6 sm:p-8 shadow-2xl relative">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
            <div>
              <div className="flex items-center gap-2">
                <Layers className="w-5 h-5 text-amber-400" />
                <h3 className="font-heading text-xl font-black text-white">
                  50 Bairros & Rotas Especializadas
                </h3>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                Selecione o bairro desejado para visualizar a página completa de atendimento e solicitar o motoboy
              </p>
            </div>
            {onCloseModal && (
              <button 
                onClick={onCloseModal}
                className="p-2.5 text-slate-400 hover:text-white rounded-full bg-slate-800 cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>
          {content}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-7xl mx-auto pt-10 space-y-6">
      <div className="border-b border-slate-800 pb-4">
        <h3 className="font-heading text-2xl font-black text-white">
          Diretório Completo de 50 Bairros e Serviços
        </h3>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Navegue pelas rotas programáticas atendidas por nossa frota com saída da Rodovia Presidente Dutra 225
        </p>
      </div>
      {content}
    </div>
  );
};
