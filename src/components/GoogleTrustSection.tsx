import React from 'react';
import { Star, ShieldCheck, CheckCircle2, MapPin, Quote, ThumbsUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesCatalog';

export const GoogleTrustSection: React.FC = () => {
  const testimonials = [
    {
      name: "Camila Ribeiro",
      role: "Gerente de Loja de Moda",
      location: "Brás (Rua Miller)",
      text: "Compro tecidos e roupas no atacado no Brás e eles despacham direto no ônibus de turismo para o interior. Nunca perdi um horário de saída. Recomendo demais!",
      stars: 5,
      date: "Há 2 semanas"
    },
    {
      name: "Dr. Eduardo Fagundes",
      role: "Sócio e Advogado",
      location: "Tatuapé (Praça Silvio Romero)",
      text: "Usamos para colheita de assinaturas em contratos imobiliários e protocolos em cartórios de Guarulhos e Santana. Super pontuais e mandam foto do comprovante na hora.",
      stars: 5,
      date: "Há 1 mês"
    },
    {
      name: "Renato Silveira",
      role: "Chefe de Oficina Mecânica",
      location: "Rodovia Presidente Dutra (km 224)",
      text: "Nossa oficina fica colada na base deles na Dutra. Quando precisamos de bateria ou sensor de emergência, o motoboy chega em 10 minutos. O carro do cliente é liberado no mesmo dia.",
      stars: 5,
      date: "Há 3 semanas"
    },
    {
      name: "Patrícia Mendonça",
      role: "Supervisora de Operações",
      location: "Internacional Shopping Guarulhos",
      text: "Retiram diariamente compras de 'Clique e Retire' para nossos clientes residenciais. Evita que o comprador enfrente fila de estacionamento. Equipe de total confiança.",
      stars: 5,
      date: "Há 2 semanas"
    }
  ];

  return (
    <section className="py-16 bg-slate-900 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-bold text-amber-400 mb-3">
            <ShieldCheck className="w-3.5 h-3.5" /> Reputação Comprovada no Google
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-black text-white tracking-tight">
            Avaliado em 4.9 Estrelas por Empresas e Clientes
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Veja o que dizem lojistas do Brás, escritórios do Tatuapé e comércios da Rodovia Presidente Dutra.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((review, idx) => (
            <div 
              key={idx}
              className="bg-slate-950 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between shadow-lg relative group hover:border-amber-500/40 transition"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-slate-500">{review.date}</span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed italic">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center font-bold text-xs text-amber-400">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white">{review.name}</h4>
                  <p className="text-[10px] text-slate-400">{review.role}</p>
                  <span className="text-[10px] text-amber-400/90 flex items-center gap-1">
                    <MapPin className="w-2.5 h-2.5" /> {review.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Verification Banner */}
        <div className="mt-10 bg-slate-950/60 border border-slate-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">
                Empresa 100% Verificada e Registrada no Google
              </h4>
              <p className="text-xs text-slate-400">
                Endereço fixo na Rod. Pres. Dutra-Pista Lateral, 225 - Vila Itapegica, Guarulhos.
              </p>
            </div>
          </div>

          <a
            href={COMPANY_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-amber-400 hover:text-amber-300 hover:underline shrink-0"
          >
            Conferir no Google Maps →
          </a>
        </div>

      </div>
    </section>
  );
};
