import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Clock, 
  Phone, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  Navigation,
  FileText,
  Truck,
  Building2,
  Calendar,
  AlertCircle,
  HelpCircle,
  Share2
} from 'lucide-react';
import { ServiceLandingPage } from '../types';
import { COMPANY_INFO, SERVICES_CATALOG } from '../data/servicesCatalog';
import { generateWhatsAppLink, formatCurrencyBRL } from '../utils/pricing';
import { generateDeepPageContent } from '../utils/contentGenerator';

interface ServicePageDetailProps {
  service: ServiceLandingPage;
  onBack: () => void;
  onSelectService: (serviceId: string) => void;
}

export const ServicePageDetail: React.FC<ServicePageDetailProps> = ({
  service,
  onBack,
  onSelectService
}) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [copiedLink, setCopiedLink] = useState(false);

  // Generate the deep 800+ word operational content
  const pageContent = generateDeepPageContent(service);

  // Sync document title and meta description dynamically for Google SEO
  useEffect(() => {
    document.title = `${service.title} | (11) 95724-8425`;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', service.metaDescription);
    }
    return () => {
      document.title = "Motoboy e Logística Express | Entregas Rápidas em Guarulhos, Brás e SP";
    };
  }, [service]);

  // Clean subset of related neighborhoods
  const otherNeighborhoods = SERVICES_CATALOG.filter(
    s => s.id !== service.id && s.region === service.region
  ).slice(0, 4);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  return (
    <article className="w-full bg-slate-950 text-slate-100 min-h-screen pb-16">
      
      {/* Schema.org Structured Data for Google Rich Snippets */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": service.title,
            "serviceType": service.categoryLabel,
            "provider": {
              "@type": "LocalBusiness",
              "name": COMPANY_INFO.name,
              "telephone": COMPANY_INFO.phone,
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Rod. Pres. Dutra-Pista Lateral, 225 - Vila Itapegica",
                "addressLocality": "Guarulhos",
                "addressRegion": "SP",
                "postalCode": "07034-911",
                "addressCountry": "BR"
              }
            },
            "areaServed": service.neighborhood,
            "description": service.metaDescription
          })
        }}
      />

      {/* Top Breadcrumb & Return Bar */}
      <div className="bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-between gap-3 text-xs">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white font-medium cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-amber-400" /> Voltar ao Início
          </button>

          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-slate-400">
            <span>Início</span>
            <span>/</span>
            <span className="text-slate-300">{service.region}</span>
            <span>/</span>
            <span className="text-amber-400 font-semibold">{service.neighborhood}</span>
          </nav>
        </div>
      </div>

      {/* Enterprise Hero Banner */}
      <header className="bg-gradient-to-b from-slate-900 via-slate-900/90 to-slate-950 border-b border-slate-800 py-10 lg:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl space-y-4">
            
            <div className="flex flex-wrap items-center gap-2">
              <span className="bg-amber-500 text-slate-950 text-xs font-black px-3 py-1 rounded-md uppercase tracking-wide">
                {service.categoryLabel}
              </span>
              <span className="bg-slate-800 text-slate-300 text-xs font-semibold px-3 py-1 rounded-md flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-rose-400" />
                {service.neighborhood}
              </span>
              <span className="bg-emerald-950/60 border border-emerald-500/30 text-emerald-400 text-xs font-bold px-3 py-1 rounded-md flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                Coleta Rápida • Envio Sob Demanda
              </span>
            </div>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              {service.h1}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              {service.tagline}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Empresa com alvará e endereço verificado no Google
              </span>
              <span className="flex items-center gap-1.5">
                <Navigation className="w-4 h-4 text-amber-400" /> Base física na Rod. Pres. Dutra 225 (~{service.distanceFromBaseKm} km)
              </span>
            </div>

            {/* Direct Call to Action */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={generateWhatsAppLink(service.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-base px-8 py-4 rounded-xl shadow-xl shadow-emerald-500/20 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <Phone className="w-5 h-5 fill-slate-950" />
                Pedir Motoboy em {service.neighborhood} no WhatsApp
              </a>

              <button
                onClick={handleShare}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold px-5 py-4 rounded-xl border border-slate-700 transition cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                {copiedLink ? 'Link Copiado!' : 'Copiar Link da Página'}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Main Grid: Comprehensive 800+ Words Guide + Sticky Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Editorial Body (800+ Words) */}
          <main className="lg:col-span-8 space-y-10">
            
            {/* Section 1: Introdução Operacional */}
            <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="font-heading text-xl sm:text-2xl font-black text-white border-b border-slate-800 pb-3">
                1. Panorama Logístico e Operação em {service.neighborhood}
              </h2>
              <div className="text-slate-300 text-sm leading-relaxed space-y-4 whitespace-pre-line font-normal">
                <p>{pageContent.introduction}</p>
                <p>{pageContent.regionalContext}</p>
              </div>
            </section>

            {/* Section 2: Procedimento Operacional Passo a Passo */}
            <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="font-heading text-xl sm:text-2xl font-black text-white border-b border-slate-800 pb-3">
                2. Como Funciona a Ordem de Coleta e Entrega na Prática
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                {pageContent.operationalProcedure}
              </p>

              {/* 3 Step Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4">
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1.5">
                  <span className="text-amber-400 font-black text-xs block">ETAPA 01</span>
                  <h4 className="text-sm font-bold text-white">Chamado no WhatsApp</h4>
                  <p className="text-xs text-slate-400">Envio de endereços, ordem de retirada ou instruções do pacote.</p>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1.5">
                  <span className="text-emerald-400 font-black text-xs block">ETAPA 02</span>
                  <h4 className="text-sm font-bold text-white">Coleta & Conferência</h4>
                  <p className="text-xs text-slate-400">Motoboy chega com rapidez no local indicado e fotografa a encomenda lacrada.</p>
                </div>
                <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1.5">
                  <span className="text-sky-400 font-black text-xs block">ETAPA 03</span>
                  <h4 className="text-sm font-bold text-white">Entrega & Protocolo</h4>
                  <p className="text-xs text-slate-400">Comprovante assinado e foto do recebedor enviados em tempo real.</p>
                </div>
              </div>
            </section>

            {/* Section 3: Especificações de Carga e Cuidados */}
            <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="font-heading text-xl sm:text-2xl font-black text-white border-b border-slate-800 pb-3">
                3. Tipos de Cargas Transportadas e Conformidade Legal
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                {pageContent.cargoSpecifications}
              </p>

              <div className="bg-slate-950 p-4 rounded-xl border border-slate-800 flex items-start gap-3 text-xs text-slate-300">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Baús Regulamentados e Homologados pelo DETRAN</strong>
                  <span>Capacidade de até 90 litros e limite de carga de até 20 kg por moto, com vedação estanque contra chuvas fortes.</span>
                </div>
              </div>
            </section>

            {/* Section 4: Faturamento Corporativo PJ */}
            <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="font-heading text-xl sm:text-2xl font-black text-white border-b border-slate-800 pb-3 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-sky-400" />
                4. Atendimento Corporativo com Faturamento Mensal (PJ)
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                {pageContent.corporateBenefits}
              </p>

              <div className="pt-2">
                <a
                  href={generateWhatsAppLink(`Olá! Gostaria de abrir cadastro PJ para faturamento corporativo de motoboy para minha empresa em ${service.neighborhood}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-sky-400 hover:text-sky-300 hover:underline"
                >
                  Abrir cadastro corporativo via WhatsApp com emissão de NF-e →
                </a>
              </div>
            </section>

            {/* Section 5: Pontos de Referência Atendidos */}
            <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="font-heading text-xl sm:text-2xl font-black text-white border-b border-slate-800 pb-3">
                5. Vias e Pontos de Referência Cobertos em {service.neighborhood}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pageContent.localLandmarksDetailed.map((item, idx) => (
                  <div key={idx} className="bg-slate-950 p-3.5 rounded-xl border border-slate-800">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
                      <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                      <span>{item.title}</span>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 6: Perguntas Frequentes Aprofundadas */}
            <section className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-4">
              <h2 className="font-heading text-xl sm:text-2xl font-black text-white border-b border-slate-800 pb-3 flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-amber-400" />
                6. Dúvidas Frequentes sobre o Atendimento
              </h2>
              
              <div className="space-y-3 pt-2">
                {pageContent.detailedFaqs.map((faq, idx) => (
                  <div 
                    key={idx}
                    className="border border-slate-800 rounded-xl overflow-hidden bg-slate-950/60"
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                      className="w-full text-left p-4 flex items-center justify-between text-xs sm:text-sm font-bold text-slate-200 hover:text-white cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      {openFaq === idx ? (
                        <ChevronUp className="w-4 h-4 text-amber-400 shrink-0 ml-2" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-500 shrink-0 ml-2" />
                      )}
                    </button>
                    {openFaq === idx && (
                      <div className="p-4 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/40">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

          </main>

          {/* Sticky Sidebar: Order Dispatch & Local Trust Card */}
          <aside className="lg:col-span-4 space-y-6 sticky top-20">
            
            {/* Quick Dispatch Card */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl space-y-5">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block">
                  Central de Despacho Imediato
                </span>
                <h3 className="font-heading text-lg font-black text-white mt-1">
                  Chamar Motoboy em {service.neighborhood}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Saída direta da Rodovia Presidente Dutra 225.
                </p>
              </div>

              {/* SLA & Phone */}
              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-4 h-4 text-emerald-400" /> Atendimento:
                  </span>
                  <strong className="text-emerald-400">Coleta e entrega rápida</strong>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 space-y-1">
                  <span className="text-slate-500 block text-[11px]">Telefone Oficial / Plantão:</span>
                  <a href={`tel:${COMPANY_INFO.rawPhone}`} className="text-sm font-bold text-white hover:text-amber-400 flex items-center gap-1.5">
                    <Phone className="w-4 h-4 text-emerald-400" /> {COMPANY_INFO.phone}
                  </a>
                </div>
              </div>

              {/* Main Button */}
              <a
                href={generateWhatsAppLink(service.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-4 px-4 rounded-xl text-sm shadow-xl shadow-emerald-500/20 transition-all hover:scale-[1.02] cursor-pointer text-center"
              >
                <Phone className="w-4 h-4 fill-slate-950" />
                Pedir no WhatsApp Agora
              </a>

              <div className="text-center text-[11px] text-slate-500">
                Atendimento humanizado sem robôs ou esperas
              </div>
            </div>

            {/* Google Profile Verification Box */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-3 text-xs">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-bold text-white">Perfil Verificado no Google</span>
              </div>
              <p className="text-slate-400 text-[11px]">
                <strong>{COMPANY_INFO.name}</strong><br />
                {COMPANY_INFO.address}
              </p>
              <div className="text-amber-400 font-bold text-xs">
                ★ 4.9 (148 avaliações de clientes reais)
              </div>
              <a
                href={COMPANY_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] text-slate-400 hover:text-amber-400 hover:underline block pt-1"
              >
                Ver localização no Google Maps →
              </a>
            </div>

            {/* Nearby Neighborhoods in the Same Region */}
            {otherNeighborhoods.length > 0 && (
              <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 space-y-3">
                <h4 className="text-xs font-bold text-slate-300">
                  Outras Rotas em {service.region}:
                </h4>
                <div className="space-y-1.5">
                  {otherNeighborhoods.map(other => (
                    <button
                      key={other.id}
                      onClick={() => onSelectService(other.id)}
                      className="w-full text-left p-2 rounded-lg bg-slate-950 hover:bg-slate-800 text-xs text-slate-300 hover:text-white transition cursor-pointer flex items-center justify-between"
                    >
                      <span className="truncate">{other.neighborhood}</span>
                      <span className="text-[10px] text-emerald-400 font-bold shrink-0 ml-2">Coleta rápida</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

          </aside>

        </div>
      </div>

    </article>
  );
};
