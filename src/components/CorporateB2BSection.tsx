import React, { useState } from 'react';
import { 
  Building2, 
  FileText, 
  Receipt, 
  CheckCircle2, 
  ShieldCheck, 
  Send, 
  Sparkles,
  Calendar,
  Layers,
  Phone
} from 'lucide-react';
import { COMPANY_INFO } from '../data/servicesCatalog';
import { generateWhatsAppLink } from '../utils/pricing';

export const CorporateB2BSection: React.FC = () => {
  const [companyName, setCompanyName] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [ridesVolume, setRidesVolume] = useState('10 a 30 corridas/mês');

  const handleOpenAccount = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Olá! Gostaria de abrir cadastro PJ para faturamento corporativo de motoboy:\n` +
      `🏢 Empresa: ${companyName || 'Não informada'}\n` +
      `📄 CNPJ: ${cnpj || 'A informar'}\n` +
      `✉️ E-mail: ${email || 'A informar'}\n` +
      `📦 Volume estimado: ${ridesVolume}\n` +
      `Por favor me enviem a proposta corporativa.`;

    window.open(generateWhatsAppLink(msg), '_blank');
  };

  return (
    <section id="empresas" className="py-16 bg-slate-950 border-b border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: B2B Benefits */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-bold text-sky-400">
              <Building2 className="w-3.5 h-3.5" /> Faturamento para Empresas (PJ)
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl font-black text-white tracking-tight">
              Terceirize Seus Motoboys com Faturamento Quinzenal ou Mensal
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Ideal para confecções no Brás, escritórios de advocacia no Tatuapé, lojas no Internacional Shopping e indústrias na Via Dutra. Elimine passivo trabalhista e custos com manutenção de motos.
            </p>

            {/* Benefit Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-1">
                <div className="flex items-center gap-2 text-sky-400 font-bold text-sm">
                  <Receipt className="w-4 h-4" /> Boleto Bancário & NF-e
                </div>
                <p className="text-xs text-slate-400">
                  Emissão de Nota Fiscal de Serviços eletrônica e pagamento consolidado em fatura quinzenal ou mensal.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-1">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                  <ShieldCheck className="w-4 h-4" /> Ficha Limpa Verificada
                </div>
                <p className="text-xs text-slate-400">
                  Motoboys registrados, com antecedentes criminais checados e curso de transporte homologado.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-1">
                <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                  <FileText className="w-4 h-4" /> Protocolo com Foto
                </div>
                <p className="text-xs text-slate-400">
                  Comprovante de entrega com foto do recebedor e assinatura digital no WhatsApp imediatamente após a baixa.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl space-y-1">
                <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
                  <Layers className="w-4 h-4" /> Centro de Custo Detalhado
                </div>
                <p className="text-xs text-slate-400">
                  Relatório gerencial indicando data, solicitante, rota e valor de cada ordem de serviço para fácil rateio.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Quick PJ Onboarding Form */}
          <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-sky-400">
                Abertura Rápida de Conta PJ
              </span>
              <h3 className="font-heading text-xl font-bold text-white mt-1">
                Receba a Tabela Corporativa no WhatsApp
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Aprovação cadastral em até 2 horas. Comece a rodar hoje mesmo faturado.
              </p>
            </div>

            <form onSubmit={handleOpenAccount} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Razão Social ou Nome Fantasia:
                </label>
                <input
                  type="text"
                  required
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Ex: Confecções Estilo Ltda"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-sky-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  CNPJ da Empresa:
                </label>
                <input
                  type="text"
                  required
                  value={cnpj}
                  onChange={(e) => setCnpj(e.target.value)}
                  placeholder="00.000.000/0001-00"
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-sky-400"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Volume Estimado de Corridas:
                </label>
                <select
                  value={ridesVolume}
                  onChange={(e) => setRidesVolume(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-sky-400"
                >
                  <option value="Até 10 corridas/mês">Até 10 corridas/mês (Sob Demanda)</option>
                  <option value="10 a 30 corridas/mês">10 a 30 corridas/mês</option>
                  <option value="30 a 60 corridas/mês">30 a 60 corridas/mês (Tabela Bronze)</option>
                  <option value="Mais de 60 corridas/mês">Mais de 60 corridas/mês (Tabela Ouro)</option>
                  <option value="Motoboy Fixo (Diária Completa)">Motoboy Fixo (Diária Completa 8h)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 text-white font-bold py-3.5 px-4 rounded-xl text-xs shadow-lg shadow-sky-950/60 transition cursor-pointer"
              >
                <Send className="w-4 h-4" /> Solicitar Abertura de Conta PJ
              </button>
            </form>

            <div className="pt-2 text-center text-[11px] text-slate-500">
              Dúvidas sobre faturamento? Ligue para <strong className="text-white">{COMPANY_INFO.phone}</strong>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
