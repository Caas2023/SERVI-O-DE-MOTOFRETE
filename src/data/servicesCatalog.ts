import { ServiceLandingPage } from '../types';

export const COMPANY_INFO = {
  name: "Motoboy e Logística Express",
  category: "Serviço de entrega em Guarulhos e São Paulo",
  address: "Rod. Pres. Dutra-Pista Lateral, 225 - Vila Itapegica, Guarulhos - SP, 07034-911",
  shortAddress: "Rod. Pres. Dutra 225, Vila Itapegica, Guarulhos - SP (Ao lado do Internacional Shopping)",
  phone: "(11) 95724-8425",
  rawPhone: "5511957248425",
  openingHours: "Segunda a Sábado das 08:00 às 20:00 (Plantão Expresso 24h sob agendamento)",
  googleRating: 4.9,
  reviewsCount: 148,
  googleMapsUrl: "https://maps.google.com/?q=Rod.+Pres.+Dutra-Pista+Lateral,+225+-+Vila+Itapegica,+Guarulhos+-+SP,+07034-911",
};

// Raw definitions for 50 specialized programmatic landing pages
interface ServiceDef {
  id: string;
  category: ServiceLandingPage['serviceCategory'];
  catLabel: string;
  region: ServiceLandingPage['region'];
  neighborhood: string;
  title: string;
  h1: string;
  tagline: string;
  deliveryTime: string;
  distKm: number;
  landmarks: string[];
  whyUs: string;
  overview: string;
  steps: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  keywords: string[];
  msg: string;
}

const rawServices: ServiceDef[] = [
  // 1-10: Shoppings & Centros Comerciais
  {
    id: "retirada-pacote-internacional-shopping-guarulhos",
    category: "shopping",
    catLabel: "Retirada em Shopping",
    region: "Guarulhos",
    neighborhood: "Vila Itapegica / Internacional Shopping",
    title: "Retirada de Pacotes e Compras no Internacional Shopping Guarulhos",
    h1: "Motoboy para Retirada de Pacotes no Internacional Shopping Guarulhos",
    tagline: "Nossa base fica a menos de 3 minutos do shopping (Rod. Pres. Dutra 225). Coleta expressa e entrega imediata.",
    deliveryTime: "15 a 30 min",
    distKm: 0.8,
    landmarks: ["Rod. Presidente Dutra km 225", "Av. Carlos Ferreira Endres", "Cinemark Internacional", "Poupatempo Internacional Shopping"],
    whyUs: "Com base operacional na pista lateral da Rodovia Presidente Dutra 225, nossos motoboys acessam as docas e lojas do Internacional Shopping em minutos.",
    overview: "Serviço especializado para compradores online e lojistas que precisam retirar mercadorias, presentes ou trocas no Internacional Shopping Guarulhos com destino a qualquer ponto de SP ou Guarulhos.",
    steps: [
      { step: 1, title: "Envio de Autorização", description: "Envie pelo WhatsApp o número do pedido ou documento de retirada emitido pela loja." },
      { step: 2, title: "Retirada no Balcão", description: "Nosso motoboy credenciado acessa o shopping, confere os itens e fotografa o pacote lacrado." },
      { step: 3, title: "Entrega Express", description: "Transporte imediato em baú higienizado e entrega com comprovante assinado e geolocalização." }
    ],
    faqs: [
      { question: "Vocês retiram compras do tipo 'Clique e Retire' de grandes redes?", answer: "Sim! Retiramos em lojas como Renner, Riachuelo, Casas Bahia, Sephora, Magazine Luiza e quiosques com sua autorização." },
      { question: "Quanto tempo leva para retirar no Internacional Shopping?", answer: "Como nossa base fica no número 225 da Dutra, o tempo médio até o balcão da loja é de apenas 10 a 20 minutos." }
    ],
    keywords: ["motoboy internacional shopping guarulhos", "retirada de pacote shopping guarulhos", "motoboy itapegica guarulhos", "retirar compra internacional shopping"],
    msg: "Olá! Preciso retirar um pacote no Internacional Shopping Guarulhos com entrega expressa. Podem me passar orçamento?"
  },
  {
    id: "retirada-compras-shopping-center-norte",
    category: "shopping",
    catLabel: "Retirada em Shopping",
    region: "Zona Norte SP",
    neighborhood: "Shopping Center Norte / Vila Guilherme",
    title: "Retirada de Encomendas no Shopping Center Norte e Lar Center",
    h1: "Motoboy Express para Retirada no Shopping Center Norte e Lar Center",
    tagline: "Deslocamento veloz pela Marginal Tietê e Av. Zaki Narchi para coletas ágeis no maior polo da Zona Norte.",
    deliveryTime: "25 a 45 min",
    distKm: 7.2,
    landmarks: ["Shopping Center Norte", "Lar Center", "Av. Otto Baumgart", "Av. Zaki Narchi", "Expo Center Norte"],
    whyUs: "O Shopping Center Norte concentra alto tráfego. Nossos motociclistas conhecem todos os acessos das docas para retirar sua compra sem fricção.",
    overview: "Ideal para encomendas de presentes, eletrônicos, documentos corporativos e compras online para retirada presencial imediata no Center Norte.",
    steps: [
      { step: 1, title: "Envio dos Dados", description: "Encaminhe o comprovante de compra e o nome da loja no Center Norte." },
      { step: 2, title: "Coleta no Ponto", description: "O motoboy chega ao shopping, retira o pacote e valida nota e integridade." },
      { step: 3, title: "Destino Final", description: "Entrega em Guarulhos, Santana, Tucuruvi ou Zona Leste com comprovação digital." }
    ],
    faqs: [
      { question: "Atendem retiradas também no Lar Center?", answer: "Sim, atendemos Center Norte, Shopping Lar Center e feiras do Expo Center Norte." },
      { question: "Vocês realizam trocas de mercadorias em lojas do shopping?", answer: "Sim! Levamos a peça antiga, realizamos a troca no balcão e retornamos a nova com nota carimbada." }
    ],
    keywords: ["motoboy shopping center norte", "retirada compras lar center", "entregador center norte sp", "motoboy vila guilherme"],
    msg: "Olá! Preciso de um motoboy para retirar uma compra no Shopping Center Norte. Como funciona?"
  },
  {
    id: "retirada-pacote-shopping-metro-tatuape",
    category: "shopping",
    catLabel: "Retirada em Shopping",
    region: "Zona Leste SP",
    neighborhood: "Tatuapé / Metrô Tatuapé",
    title: "Retirada de Pacotes no Shopping Metrô Tatuapé e Boulevard",
    h1: "Motoboy para Retiradas no Shopping Metrô Tatuapé e Boulevard Tatuapé",
    tagline: "Ligação direta do complexo comercial Tatuapé para toda a Zona Leste e Guarulhos via Salim Farah Maluf.",
    deliveryTime: "20 a 40 min",
    distKm: 9.5,
    landmarks: ["Shopping Metrô Tatuapé", "Shopping Boulevard Tatuapé", "Estação Tatuapé CPTM/Metrô", "Rua Tuiuti"],
    whyUs: "O polo Tatuapé é um dos maiores centros de varejo da Zona Leste. Nossa equipe atende diariamente clientes residenciais e corporativos economizando horas de trânsito na Radial Leste.",
    overview: "Coleta e entrega de produtos adquiridos em lojas de ambos os shoppings interligados do Tatuapé com entrega expressa porta a porta.",
    steps: [
      { step: 1, title: "Contato via WhatsApp", description: "Informe a loja e código de retirada." },
      { step: 2, title: "Retirada Rápida", description: "Motoboy estaciona nas vagas dedicadas e retira o pacote." },
      { step: 3, title: "Entrega em Mãos", description: "Receba seu pacote em casa ou no escritório com segurança." }
    ],
    faqs: [
      { question: "Vocês atendem os dois shoppings do Tatuapé?", answer: "Sim, atendemos o Shopping Metrô Tatuapé e o Shopping Boulevard Tatuapé sem diferença de tarifa de acesso." }
    ],
    keywords: ["motoboy shopping metro tatuape", "retirada shopping boulevard tatuape", "motoboy tatuape zona leste", "entregas rapidas shopping tatuape"],
    msg: "Olá! Preciso de um motoboy para retirar uma encomenda no Shopping Metrô Tatuapé."
  },
  {
    id: "retirada-compras-shopping-penha",
    category: "shopping",
    catLabel: "Retirada em Shopping",
    region: "Zona Leste SP",
    neighborhood: "Penha de França",
    title: "Retirada Express de Encomendas no Shopping Penha",
    h1: "Motoboy para Retirada de Compras no Shopping Penha de França",
    tagline: "Atendimento no centro histórico da Penha com rápida conexão para Cangaíba, Tiquatira e Dutra.",
    deliveryTime: "20 a 35 min",
    distKm: 6.8,
    landmarks: ["Shopping Penha", "Rua Dr. João Ribeiro", "Praça 8 de Setembro", "Basílica da Penha"],
    whyUs: "A Penha possui tráfego intenso. Nosso serviço de motoboy garante entrega rápida sem surpresas com estacionamento ou filas.",
    overview: "Serviço voltado para compradores online e lojistas do Shopping Penha que necessitam de distribuição rápida.",
    steps: [
      { step: 1, title: "Solicitação", description: "Envie autorização da compra pelo WhatsApp." },
      { step: 2, title: "Busca", description: "Motoboy comparece ao balcão e retira os produtos." },
      { step: 3, title: "Entrega", description: "Envio direto ao seu endereço residencial ou corporativo." }
    ],
    faqs: [
      { question: "É seguro enviar o motoboy retirar itens de valor?", answer: "Sim, nossos profissionais são cadastrados, verificados e mantemos rastreamento ativo em todas as corridas." }
    ],
    keywords: ["motoboy shopping penha", "retirada pacotes shopping penha", "entregador penha zl", "motoboy penha de frança"],
    msg: "Olá! Gostaria de um orçamento para retirar um produto no Shopping Penha."
  },
  {
    id: "retirada-compras-shopping-parque-shopping-maia",
    category: "shopping",
    catLabel: "Retirada em Shopping",
    region: "Guarulhos",
    neighborhood: "Parque Shopping Maia / Picanço",
    title: "Retirada de Pacotes no Parque Shopping Maia em Guarulhos",
    h1: "Motoboy para Retirada no Parque Shopping Maia (Guarulhos)",
    tagline: "Conexão rápida com os bairros Maia, Picanço, Bosque Maia e Centro de Guarulhos.",
    deliveryTime: "20 a 35 min",
    distKm: 5.5,
    landmarks: ["Parque Shopping Maia", "Av. Bartholomeu de Carlos", "Bosque Maia", "Av. Paulo Faccini"],
    whyUs: "O Parque Shopping Maia é o polo de alto padrão de Guarulhos. Prestamos serviço discreto, veloz e de alta responsabilidade.",
    overview: "Retirada de itens de vestuário, presentes e eletrônicos no shopping com entrega em qualquer bairro da cidade ou São Paulo.",
    steps: [
      { step: 1, title: "Envio da Nota", description: "Envie comprovante de pagamento e ordem de retirada." },
      { step: 2, title: "Coleta", description: "Motoboy retira e fotografa na doca/loja." },
      { step: 3, title: "Finalização", description: "Entrega direta no endereço do cliente." }
    ],
    faqs: [
      { question: "Fazem entregas em condomínios da Av. Paulo Faccini e Maia?", answer: "Sim, entregamos na portaria de todos os condomínios da região com identificação formal." }
    ],
    keywords: ["motoboy parque shopping maia", "retirada compras shopping maia guarulhos", "motoboy bosque maia", "entregador shopping maia"],
    msg: "Olá! Preciso de um motoboy para retirar uma compra no Parque Shopping Maia em Guarulhos."
  },
  {
    id: "retirada-compras-shopping-analia-franco",
    category: "shopping",
    catLabel: "Retirada em Shopping",
    region: "Zona Leste SP",
    neighborhood: "Jardim Anália Franco",
    title: "Retirada de Pacotes no Shopping Anália Franco",
    h1: "Motoboy para Retirada de Encomendas no Shopping Anália Franco",
    tagline: "Transporte cuidadoso e pontual para marcas exclusivas e pacotes na Zona Leste nobre.",
    deliveryTime: "25 a 45 min",
    distKm: 11.2,
    landmarks: ["Shopping Anália Franco", "Av. Regente Feijó", "Parque CERET", "Jardim Anália Franco"],
    whyUs: "Entregas corporativas e residenciais com alto nível de zelo, ideais para presentes de luxo e pedidos especiais no Anália Franco.",
    overview: "Retirada e transporte expresso para itens comprados no Shopping Anália Franco com destino a Guarulhos, Tatuapé e Zona Norte.",
    steps: [
      { step: 1, title: "Comprovante", description: "Compartilhe o código de liberação da loja." },
      { step: 2, title: "Retirada Segura", description: "O motoboy embala em baú acolchoado." },
      { step: 3, title: "Entrega", description: "Entrega personalizada na porta do destinatário." }
    ],
    faqs: [
      { question: "Vocês atendem aos sábados no Anália Franco?", answer: "Sim, atendemos durante os finais de semana sob plantão com agendamento." }
    ],
    keywords: ["motoboy shopping analia franco", "retirada compras analia franco", "motoboy regente feijo", "entrega ceret analia franco"],
    msg: "Olá! Preciso de um motoboy para retirar um item no Shopping Anália Franco."
  },
  {
    id: "retirada-compras-shopping-d-marginal-tiete",
    category: "shopping",
    catLabel: "Retirada em Shopping",
    region: "Zona Norte SP",
    neighborhood: "Canindé / Marginal Tietê",
    title: "Retirada Express no Shopping D - Marginal Tietê",
    h1: "Motoboy para Retirada de Compras no Shopping D (Marginal Tietê)",
    tagline: "Estratégico no corredor da Marginal Tietê entre o Brás, Santana e a Via Dutra.",
    deliveryTime: "20 a 35 min",
    distKm: 8.0,
    landmarks: ["Shopping D", "Marginal Tietê", "Av. Cruzeiro do Sul", "Estádio do Canindé"],
    whyUs: "Nossos motociclistas transitam continuamente pela Marginal Tietê, garantindo tempo de resposta mínimo para chamados no Shopping D.",
    overview: "Coleta em qualquer loja do Shopping D com envio imediato para escritórios, residências ou pontos de conexão de cargas.",
    steps: [
      { step: 1, title: "Solicite", description: "Envie os dados do balcão ou locker de coleta." },
      { step: 2, title: "Acesso Rápido", description: "O mensageiro retira a encomenda no Shopping D." },
      { step: 3, title: "Entrega Eficaz", description: "Pacote entregue e confirmado via foto no WhatsApp." }
    ],
    faqs: [
      { question: "Atendem coletas em horário de pico na Marginal Tietê?", answer: "Sim, os motoboys possuem vasta experiência nos corredores da Marginal e chegam com extrema pontualidade." }
    ],
    keywords: ["motoboy shopping d", "retirada pacotes shopping d marginal", "motoboy caninde", "entrega expressa shopping d"],
    msg: "Olá! Preciso retirar uma compra no Shopping D na Marginal Tietê."
  },
  {
    id: "retirada-compras-expo-center-norte",
    category: "shopping",
    catLabel: "Feiras e Pavilhões",
    region: "Zona Norte SP",
    neighborhood: "Expo Center Norte / Carandiru",
    title: "Coleta e Entrega Urgente no Expo Center Norte",
    h1: "Motoboy para Pavilhões e Estandes no Expo Center Norte",
    tagline: "Entrega de materiais promocionais, crachás, peças de reposição e brindes para expositores de feiras.",
    deliveryTime: "25 a 40 min",
    distKm: 7.5,
    landmarks: ["Expo Center Norte Pavilhão Azul/Branco", "Rua José Bernardo Pinto", "Rua Galatea", "Novotel Center Norte"],
    whyUs: "Quem expõe em feiras não pode perder tempo. Levamos e retiramos peças esquecidas, materiais gráficos, contratos e suprimentos sem burocracia.",
    overview: "Logística ágil voltada para expositores, montadoras de estandes e participantes de feiras técnicas no Expo Center Norte.",
    steps: [
      { step: 1, title: "Identificação", description: "Informe o nome da feira, pavilhão e número da rua/estande." },
      { step: 2, title: "Despacho", description: "O motoboy retira o material na sua empresa ou fábrica." },
      { step: 3, title: "Entrega no Pavilhão", description: "Entrega protocolada com o responsável do evento." }
    ],
    faqs: [
      { question: "O motoboy consegue entrar dentro do pavilhão da feira?", answer: "Sim, mediante indicação de credenciamento ou encontro no portão de carga e descarga autorizado." }
    ],
    keywords: ["motoboy expo center norte", "entrega feira center norte", "motoboy stand expo center norte", "entrega urgente feiras sp"],
    msg: "Olá! Preciso de uma entrega urgente de material para um estande no Expo Center Norte."
  },
  {
    id: "retirada-compras-boulevard-tatuape",
    category: "shopping",
    catLabel: "Retirada em Shopping",
    region: "Zona Leste SP",
    neighborhood: "Boulevard Tatuapé / Tuiuti",
    title: "Retirada de Pacotes no Shopping Boulevard Tatuapé",
    h1: "Motoboy para Retirada no Shopping Boulevard Tatuapé",
    tagline: "Agilidade na Rua Gonçalves Crespo e conexão com a Celso Garcia e Salim Farah Maluf.",
    deliveryTime: "20 a 40 min",
    distKm: 9.8,
    landmarks: ["Shopping Boulevard Tatuapé", "Rua Gonçalves Crespo", "Rua Tuiuti", "Metrô Tatuapé"],
    whyUs: "Evitamos filas de pagamento e estacionamento do shopping para você receber suas mercadorias diretamente em seu endereço.",
    overview: "Serviço expresso para retirada e entrega residencial ou comercial de produtos comprados no Boulevard Tatuapé.",
    steps: [
      { step: 1, title: "Envio", description: "Compartilhe os detalhes da compra via WhatsApp." },
      { step: 2, title: "Retirada", description: "Mensageiro retira os itens conferidos." },
      { step: 3, title: "Entrega", description: "Entrega segura na sua casa ou empresa." }
    ],
    faqs: [
      { question: "Vocês atendem finais de semana?", answer: "Sim, atendemos durante o horário de funcionamento das lojas do shopping." }
    ],
    keywords: ["motoboy boulevard tatuape", "retirada compras boulevard tatuape", "entrega encomendas tatuape"],
    msg: "Olá! Gostaria de cotar a retirada de um pacote no Shopping Boulevard Tatuapé."
  },
  {
    id: "retirada-compras-poli-shopping-guarulhos-centro",
    category: "shopping",
    catLabel: "Retirada em Shopping",
    region: "Guarulhos",
    neighborhood: "Centro de Guarulhos / Poli Shopping",
    title: "Retirada de Compras no Poli Shopping Guarulhos Centro",
    h1: "Motoboy para Retirada no Poli Shopping e Calçadão de Guarulhos",
    tagline: "Rapidez no coração do Calçadão Dom Pedro II e Rua Felício Marcondes.",
    deliveryTime: "15 a 25 min",
    distKm: 3.2,
    landmarks: ["Poli Shopping Guarulhos", "Rua Dom Pedro II", "Praça Tereza Cristina", "Igreja Matriz de Guarulhos"],
    whyUs: "O centro comercial de Guarulhos possui restrição para veículos de quatro rodas. O motoboy acessa a pé os calçadões com agilidade.",
    overview: "Retirada e envio de pacotes de lojas de eletrônicos, perfumarias e roupas do Poli Shopping e Calçadão Central de Guarulhos.",
    steps: [
      { step: 1, title: "Loja e Pedido", description: "Indique o balcão da loja no Poli Shopping." },
      { step: 2, title: "Coleta", description: "Retirada rápida no centro com envio de foto." },
      { step: 3, title: "Destino", description: "Entrega expressa na sua porta." }
    ],
    faqs: [
      { question: "Quanto tempo leva a saída da Dutra até o Poli Shopping?", answer: "Apenas 10 a 15 minutos em média." }
    ],
    keywords: ["motoboy poli shopping guarulhos", "retirada calcadao dom pedro guarulhos", "motoboy centro guarulhos lojas"],
    msg: "Olá! Gostaria de cotar a retirada de um produto no Poli Shopping em Guarulhos."
  },

  // 11-22: Polo de Moda, Confecções e Atacado no Brás e Pari
  {
    id: "motoboy-bras-atacado-confeccao",
    category: "bras-moda",
    catLabel: "Polo do Brás & Moda",
    region: "Centro & Brás",
    neighborhood: "Brás (Polo de Confecções)",
    title: "Motoboy no Brás para Coleta de Roupas e Encomendas de Moda",
    h1: "Motoboy no Brás: Coleta em Confecções, Fardos e Lojas de Roupas",
    tagline: "Especialista nas ruas do Brás. Coletamos pacotes, peças de mostruário, aviamentos e notas fiscais.",
    deliveryTime: "25 a 45 min",
    distKm: 10.5,
    landmarks: ["Rua Miller", "Rua Maria Marcolina", "Rua Oriente", "Largo da Concórdia", "Feirinha da Concórdia"],
    whyUs: "O trânsito do Brás é impraticável para carros. Nossos motoboys conhecem a dinâmica dos lojistas, sabem onde estacionar e realizam coletas sem perda de tempo.",
    overview: "Serviço indispensável para lojistas de outras cidades, revendedores online e fábricas que compram no Brás e necessitam despachar fardos no mesmo dia.",
    steps: [
      { step: 1, title: "Envio do Pedido", description: "Envie o nome da loja no Brás, endereço e responsável pela liberação." },
      { step: 2, title: "Coleta no Balcão", description: "O motoboy retira as mercadorias, confere volume e lacre e emite foto no WhatsApp." },
      { step: 3, title: "Destino ou Despacho", description: "Levamos até sua loja, residência ou despachamos na transportadora indicada." }
    ],
    faqs: [
      { question: "Vocês pegam encomendas pesadas de roupas no Brás?", answer: "Sim, transportamos pacotes de até 20kg no baú ou acionamos mais de uma moto para lotes maiores." },
      { question: "Vocês levam fardos até os ônibus de turismo no Brás?", answer: "Sim! Entregamos diretamente na mão do guia ou no bagageiro do ônibus contratado." }
    ],
    keywords: ["motoboy no bras", "coleta de confeccoes bras", "motoboy rua miller", "entregas atacado de roupas bras", "motoboy feirinha da concordia"],
    msg: "Olá! Preciso de um motoboy para retirar uma encomenda de roupas no Brás. Podem me atender hoje?"
  },
  {
    id: "coleta-despacho-onibus-compras-bras",
    category: "bras-moda",
    catLabel: "Polo do Brás & Moda",
    region: "Centro & Brás",
    neighborhood: "Brás / Pari / Estacionamentos de Ônibus",
    title: "Despacho de Encomendas em Ônibus de Excursão no Brás",
    h1: "Motoboy para Despachar Mercadorias em Ônibus de Excursão no Brás",
    tagline: "Garantia de embarque das suas compras de atacado nos ônibus de sacoleiros antes do horário de partida.",
    deliveryTime: "20 a 40 min",
    distKm: 11.0,
    landmarks: ["Estacionamento de Ônibus do Pari", "Mega Polo Moda", "Rua Hannemann", "Pátio Brás"],
    whyUs: "Sabemos que os ônibus de compras têm horário rígido para partir. Operamos com precisão cronometrada para entregar sua mercadoria no bagageiro correto.",
    overview: "Solução sob medida para confeccionistas que precisam entregar pedidos de última hora para clientes do interior ou sacoleiros que já estão a caminho.",
    steps: [
      { step: 1, title: "Dados do Ônibus", description: "Informe empresa do ônibus, placa, guia responsável e horário limite de embarque." },
      { step: 2, title: "Retirada Expressa", description: "Buscamos o pacote na loja ou fábrica indicada." },
      { step: 3, title: "Entrega no Bagageiro", description: "Entregamos na mão do guia com foto e carimbo no WhatsApp." }
    ],
    faqs: [
      { question: "Vocês atendem os estacionamentos do Pari e da Monsenhor de Andrade?", answer: "Sim, conhecemos todos os bolsões e pátios de estacionamento de excursão do Brás e Pari." }
    ],
    keywords: ["despacho onibus bras", "motoboy onibus excursao bras", "entregar pacote onibus de sacoleiro", "motoboy estacionamento pari"],
    msg: "Olá! Preciso despachar um pacote urgente em um ônibus de compras no Brás. Conseguem me ajudar?"
  },
  {
    id: "motoboy-pari-tecidos-aviamentos",
    category: "bras-moda",
    catLabel: "Polo do Brás & Moda",
    region: "Centro & Brás",
    neighborhood: "Pari / Canindé",
    title: "Entrega de Aviamentos, Zíperes e Tecidos no Pari",
    h1: "Motoboy no Pari: Entrega de Tecidos, Aviamentos e Insumos Têxteis",
    tagline: "Abastecimento contínuo entre fornecedores do Pari e oficinas de costura em Guarulhos e Zona Leste.",
    deliveryTime: "20 a 40 min",
    distKm: 9.8,
    landmarks: ["Rua Silva Teles", "Praça Padre Bento", "Rua Santa Rita", "Largo do Pari"],
    whyUs: "Uma linha de costura não pode parar por falta de aviamentos. Nosso motoboy busca o insumo no Pari e entrega na confecção em tempo recorde.",
    overview: "Logística ágil de suprimentos para o setor de moda entre o Pari, Brás e oficinas parceiras da Grande SP.",
    steps: [
      { step: 1, title: "Pedido Separado", description: "Ligue para a loja no Pari para deixar a mercadoria separada." },
      { step: 2, title: "Coleta do Motoboy", description: "Retiramos o pacote e conferimos a nota fiscal." },
      { step: 3, title: "Chegada na Oficina", description: "Entrega expressa na sua bancada de costura." }
    ],
    faqs: [
      { question: "Vocês atendem faturamento mensal para confecções?", answer: "Sim, oferecemos fechamento mensal ou quinzenal com boleto bancário." }
    ],
    keywords: ["motoboy pari", "entrega aviamentos pari", "motoboy tecidos silva teles", "entrega confeccao guarulhos bras"],
    msg: "Olá! Preciso de um motoboy para buscar aviamentos no Pari e levar para minha confecção."
  },
  {
    id: "motoboy-feirinha-da-madrugada-bras",
    category: "bras-moda",
    catLabel: "Polo do Brás & Moda",
    region: "Centro & Brás",
    neighborhood: "Circuito das Compras / Feira da Madrugada",
    title: "Motoboy para Circuito das Compras e Feirinha da Madrugada",
    h1: "Motoboy Feira da Madrugada e Circuito de Compras no Brás",
    tagline: "Plantão matinal a partir das 05h para coletas de atacado antes do fechamento dos boxes.",
    deliveryTime: "25 a 45 min",
    distKm: 10.2,
    landmarks: ["Circuito das Compras Brás", "Rua São Caetano", "Rua do Gasômetro", "Av. do Estado"],
    whyUs: "Sabemos o horário de abertura e fechamento dos boxes na madrugada do Brás. Garantimos retirada pontual mesmo no pico de movimento.",
    overview: "Serviço para revendedores e comerciantes que precisam retirar pacotes no Circuito das Compras e receber em qualquer ponto da Grande SP.",
    steps: [
      { step: 1, title: "Box e Ala", description: "Informe o piso, ala e número do box no Circuito das Compras." },
      { step: 2, title: "Retirada", description: "Mensageiro coleta as sacolas com conferência." },
      { step: 3, title: "Envio Imediato", description: "Entrega direta no seu ponto comercial ou residência." }
    ],
    faqs: [
      { question: "Vocês conseguem retirar bem cedo pela manhã?", answer: "Sim, iniciamos atendimentos expressos nas primeiras horas para suprir lojistas do Brás." }
    ],
    keywords: ["motoboy feira da madrugada", "motoboy circuito das compras bras", "entrega sacolas bras", "entregador atacado de roupas"],
    msg: "Olá! Gostaria de um motoboy para coletar na Feirinha da Madrugada / Circuito das Compras no Brás."
  },
  {
    id: "motoboy-belem-confeccoes-moda",
    category: "bras-moda",
    catLabel: "Polo do Brás & Moda",
    region: "Centro & Brás",
    neighborhood: "Belém / Celso Garcia",
    title: "Entrega Expressa de Confecções no Belém e Celso Garcia",
    h1: "Motoboy para Confecções e Malharias no Belém (São Paulo)",
    tagline: "Ponte ágil entre os polos têxteis do Belém, Brás e Tatuapé via Av. Celso Garcia.",
    deliveryTime: "20 a 35 min",
    distKm: 8.5,
    landmarks: ["Largo do Belém", "Av. Celso Garcia", "Metrô Belém", "Rua Toledo Barbosa"],
    whyUs: "O Belém é repleto de oficinas de corte e costura. Facilitamos o trânsito de peças cortadas e roupas prontas com agilidade.",
    overview: "Transporte rápido de pacotes de costura, amostras e produtos manufaturados no polo têxtil do Belém.",
    steps: [
      { step: 1, title: "Chame no WhatsApp", description: "Indique o endereço no Belém e o volume da carga." },
      { step: 2, title: "Coleta", description: "Motoboy realiza a coleta no balcão da confecção." },
      { step: 3, title: "Entrega", description: "Envio com comprovante digital." }
    ],
    faqs: [
      { question: "Vocês transportam pacotes de corte?", answer: "Sim, levamos lotes de tecidos cortados para oficinas de costura parceiras." }
    ],
    keywords: ["motoboy belem sp", "motoboy celso garcia", "entrega malharias belem", "entregas rapidas belem"],
    msg: "Olá! Preciso de um motoboy no Belém para coleta de confecções."
  },
  {
    id: "motoboy-bresser-mooca-confeccoes",
    category: "bras-moda",
    catLabel: "Polo do Brás & Moda",
    region: "Centro & Brás",
    neighborhood: "Bresser / Mooca",
    title: "Entrega de Confecções e Calçados na Mooca e Bresser",
    h1: "Motoboy na Mooca e Bresser: Entregas de Roupas, Calçados e Amostras",
    tagline: "Agilidade no corredor industrial e comercial da Rua da Mooca e Radial Leste.",
    deliveryTime: "25 a 45 min",
    distKm: 11.5,
    landmarks: ["Rua da Mooca", "Estação Bresser-Mooca", "Av. Alcântara Machado", "Hospital São Cristóvão"],
    whyUs: "Combinamos pontualidade e zelo no transporte de calçados e confecções da Mooca para centros de distribuição em Guarulhos e Zona Norte.",
    overview: "Entrega e coleta para indústrias, comércios locais e compradores da Mooca e adjacências.",
    steps: [
      { step: 1, title: "Orçamento", description: "Simule a corrida no site ou chame no WhatsApp." },
      { step: 2, title: "Busca", description: "Retirada em lojas ou depósitos na Mooca." },
      { step: 3, title: "Recebimento", description: "Entrega com protocolo assinado." }
    ],
    faqs: [
      { question: "Vocês atendem as empresas da Mooca?", answer: "Sim, atendemos comércios, indústrias e escritórios da Mooca." }
    ],
    keywords: ["motoboy mooca", "motoboy bresser", "entrega calcados mooca", "motoboy alcantara machado"],
    msg: "Olá! Preciso de um motoboy na região da Mooca / Bresser para uma entrega expressa."
  },
  {
    id: "motoboy-rua-25-de-marco-acessorios",
    category: "bras-moda",
    catLabel: "Polo do Brás & Moda",
    region: "Centro & Brás",
    neighborhood: "25 de Março / Centro Histórico",
    title: "Motoboy na 25 de Março para Coleta de Bijuterias e Acessórios",
    h1: "Motoboy na Rua 25 de Março: Retirada de Compras de Atacado",
    tagline: "Vença a multidão da 25 de Março. Nosso mensageiro retira seus pacotes com rapidez nas galerias.",
    deliveryTime: "30 a 50 min",
    distKm: 12.0,
    landmarks: ["Ladeira Porto Geral", "Galeria Pajé", "Rua Carlos de Sousa Nazaré", "Metrô São Bento"],
    whyUs: "A 25 de Março possui restrições severas para carros. Nossos motociclistas estacionam com facilidade e sobem nas galerias para retirar seu pedido já pago.",
    overview: "Serviço de busca e entrega para lojistas de bairro e comerciantes que compram na 25 de Março sem precisar ir pessoalmente.",
    steps: [
      { step: 1, title: "Envio do Cupom", description: "Envie a nota de pedido da galeria e autorização." },
      { step: 2, title: "Coleta no Box", description: "O motoboy sobe até o box, confere o lacre e retira." },
      { step: 3, title: "Despacho Rápido", description: "Entrega em Guarulhos, Santana, Tatuapé ou via transportadora." }
    ],
    faqs: [
      { question: "Vocês retiram compras em andares altos de galerias?", answer: "Sim, retiramos em qualquer andar e box de galerias da região central." }
    ],
    keywords: ["motoboy 25 de marco", "coleta galeria paje", "retirada ladeira porto geral", "motoboy compras atacado sp"],
    msg: "Olá! Preciso de um motoboy para retirar compras numa galeria da 25 de Março."
  },
  {
    id: "motoboy-ponte-pequena-tiras-estampas",
    category: "bras-moda",
    catLabel: "Polo do Brás & Moda",
    region: "Centro & Brás",
    neighborhood: "Ponte Pequena / Armênia",
    title: "Entrega Rápida de Amostras e Estamparia na Ponte Pequena",
    h1: "Motoboy na Região da Ponte Pequena e Armênia",
    tagline: "Agilidade no entroncamento do Metrô Armênia, Marginal Tietê e Av. Tiradentes.",
    deliveryTime: "20 a 35 min",
    distKm: 9.0,
    landmarks: ["Estação Armênia do Metrô", "Av. Tiradentes", "Ponte das Bandeiras", "Marginal Tietê"],
    whyUs: "Ponto nevrálgico de trânsito em São Paulo. O motoboy transpõe os gargalos da Ponte das Bandeiras em fração de minutos.",
    overview: "Coleta e entrega de insumos rápidos e documentos entre a Ponte Pequena e empresas da Zona Norte e Guarulhos.",
    steps: [
      { step: 1, title: "Solicitação", description: "Indique o ponto na Ponte Pequena." },
      { step: 2, title: "Ação", description: "Mensageiro no local em até 20 minutos." },
      { step: 3, title: "Conclusão", description: "Entrega assinada digitalmente." }
    ],
    faqs: [
      { question: "Vocês atendem órgãos públicos da região da Armênia?", answer: "Sim, realizamos protocolos em repartições públicas da Av. Tiradentes e Centro." }
    ],
    keywords: ["motoboy ponte pequena", "motoboy metro armenia", "entrega estamparia sp", "entregador av tiradentes"],
    msg: "Olá! Preciso de um motoboy para coleta rápida na Ponte Pequena / Armênia."
  },
  {
    id: "motoboy-caninde-confeccao-brindes",
    category: "bras-moda",
    catLabel: "Polo do Brás & Moda",
    region: "Centro & Brás",
    neighborhood: "Canindé",
    title: "Entrega Expressa de Brindes e Confecção no Canindé",
    h1: "Motoboy no Canindé: Atendimento a Fábricas e Oficinas",
    tagline: "Atendimento veloz aos galpões de silk-screen, bordados e brindes do Canindé.",
    deliveryTime: "20 a 35 min",
    distKm: 8.8,
    landmarks: ["Estádio do Canindé (Portuguesa)", "Rua Comendador Nestor Pereira", "Marginal Tietê", "Pari"],
    whyUs: "O Canindé reúne dezenas de fornecedores de uniformes e brindes. Nossos motoboys garantem a entrega pontual do seu lote promocional.",
    overview: "Transporte de amostras de tecido, camisetas personalizadas e brindes corporativos para feiras e clientes corporativos.",
    steps: [
      { step: 1, title: "Informação", description: "Passe o endereço da oficina no Canindé." },
      { step: 2, title: "Retirada", description: "O motoboy confere os pacotes de peças." },
      { step: 3, title: "Destino", description: "Entrega pontual no local do evento ou escritório." }
    ],
    faqs: [
      { question: "Vocês levam caixas com bonés e camisetas?", answer: "Sim, acomodadas em baús selados e impermeáveis." }
    ],
    keywords: ["motoboy caninde", "entrega estamparia caninde", "motoboy uniformes sp", "entregador estadio caninde"],
    msg: "Olá! Gostaria de cotar uma entrega saindo de uma confecção no Canindé."
  },
  {
    id: "motoboy-bras-troca-mercadorias-defeito",
    category: "bras-moda",
    catLabel: "Polo do Brás & Moda",
    region: "Centro & Brás",
    neighborhood: "Brás (Trocas e Devoluções)",
    title: "Serviço de Troca e Devolução de Mercadorias no Brás",
    h1: "Motoboy para Troca de Peças e Devolução de Mercadorias no Brás",
    tagline: "Resolvemos sua troca no balcão da loja do Brás sem você precisar perder o dia em filas.",
    deliveryTime: "30 a 50 min",
    distKm: 10.8,
    landmarks: ["Rua da Juta", "Rua Barão de Ladário", "Rua Oriente", "Galeria Pagé Brás"],
    whyUs: "Lojas do Brás costumam ter prazos curtos para trocas de atacado. Não perca sua garantia: enviamos o motoboy hoje mesmo.",
    overview: "Serviço exclusivo de intermediação de trocas de vestuário e produtos de atacado no polo comercial do Brás.",
    steps: [
      { step: 1, title: "Coleta da Peça", description: "O motoboy retira a peça a ser trocada na sua casa ou loja." },
      { step: 2, title: "Troca na Loja", description: "Ele se desloca ao Brás, aguarda a conferência e pega a nova peça." },
      { step: 3, title: "Devolução em Mãos", description: "Retorno imediato e entrega da nova mercadoria para você." }
    ],
    faqs: [
      { question: "O motoboy confirma a cor e tamanho antes de sair da loja?", answer: "Sim! Ele manda foto ou vídeo no WhatsApp para você aprovar antes de sair do balcão." }
    ],
    keywords: ["troca de roupas no bras motoboy", "devolucao mercadoria bras", "motoboy troca atacado bras", "servico de trocas bras sp"],
    msg: "Olá! Preciso que um motoboy realize uma troca de mercadoria numa loja no Brás para mim."
  },
  {
    id: "motoboy-pari-rua-silva-teles",
    category: "bras-moda",
    catLabel: "Polo do Brás & Moda",
    region: "Centro & Brás",
    neighborhood: "Pari / Rua Silva Teles",
    title: "Coleta de Roupas no Atacado da Rua Silva Teles no Pari",
    h1: "Motoboy na Rua Silva Teles (Pari): Atacado de Moda e Malharia",
    tagline: "O polo da moda feminina e malhas do Pari atendido com precisão diária.",
    deliveryTime: "25 a 40 min",
    distKm: 9.6,
    landmarks: ["Rua Silva Teles", "Largo do Pari", "Rua Miller", "Rua Maria Marcolina"],
    whyUs: "A Rua Silva Teles é o coração do atacado do Pari. Nossos motoboys retiram seus fardos de vestidos, jeans e malhas sem complicação.",
    overview: "Coletas programadas ou urgentes em confecções da Silva Teles com entrega em Guarulhos, Zona Leste e transportadoras.",
    steps: [
      { step: 1, title: "Dados da Loja", description: "Informe loja e nome da vendedora que separou o pedido." },
      { step: 2, title: "Retirada", description: "Conferência rápida dos fardos e foto no WhatsApp." },
      { step: 3, title: "Despacho", description: "Entrega direta ao destino." }
    ],
    faqs: [
      { question: "Qual o limite de fardos por moto?", answer: "Até 2 fardos médios de 10kg por moto ou despachamos mais entregadores para seu lote." }
    ],
    keywords: ["motoboy silva teles pari", "coleta atacado silva teles", "entregas atacado pari sp"],
    msg: "Olá! Preciso retirar um pedido de roupas na Rua Silva Teles no Pari."
  },
  {
    id: "motoboy-rua-oriente-maria-marcolina-bras",
    category: "bras-moda",
    catLabel: "Polo do Brás & Moda",
    region: "Centro & Brás",
    neighborhood: "Brás / Rua Oriente e Maria Marcolina",
    title: "Motoboy nas Ruas Oriente e Maria Marcolina no Brás",
    h1: "Motoboy no Miolo do Brás: Ruas Oriente, Maria Marcolina e Barão de Ladário",
    tagline: "As vias mais movimentadas do Brás cobertas com agilidade por motoboys experientes.",
    deliveryTime: "25 a 45 min",
    distKm: 10.4,
    landmarks: ["Rua Maria Marcolina", "Rua Oriente", "Rua Barão de Ladário", "Largo da Concórdia"],
    whyUs: "Carros ficam completamente travados nessas ruas. Nossos motociclistas se deslocam a pé e de moto com rapidez cirúrgica.",
    overview: "Serviço de coleta e entrega para sacoleiros, atacadistas e revendedores do polo central do Brás.",
    steps: [
      { step: 1, title: "Solicitação", description: "Envie os comprovantes e contatos da loja." },
      { step: 2, title: "Retirada no Balcão", description: "Mensageiro retira as sacolas etiquetadas." },
      { step: 3, title: "Envio Seguro", description: "Transporte protegido até seu endereço." }
    ],
    faqs: [
      { question: "Vocês atendem encomendas de jeans e peças pesadas?", answer: "Sim, transportamos calças e jaquetas jeans devidamente ensacadas." }
    ],
    keywords: ["motoboy maria marcolina", "motoboy rua oriente bras", "entrega atacado bras sp"],
    msg: "Olá! Preciso de um motoboy para retirar pacotes na Rua Maria Marcolina / Rua Oriente no Brás."
  },

  // 23-35: Documentos, Contratos, Cartórios e Fóruns
  {
    id: "entrega-documentos-cartorio-guarulhos-centro",
    category: "documentos",
    catLabel: "Documentos & Cartórios",
    region: "Guarulhos",
    neighborhood: "Centro de Guarulhos / Cartórios",
    title: "Entrega de Documentos e Protocolos nos Cartórios de Guarulhos",
    h1: "Motoboy para Cartórios e Fórum no Centro de Guarulhos",
    tagline: "Reconhecimento de firma, autenticações, certidões e protocolos judiciais com máxima segurança.",
    deliveryTime: "15 a 30 min",
    distKm: 3.5,
    landmarks: ["1º Cartório de Notas de Guarulhos", "2º Cartório de Notas", "Calçadão Dom Pedro II", "Fórum Central de Guarulhos"],
    whyUs: "Documentos jurídicos exigem idoneidade. Nossos profissionais são verificados, pontuais e habituados com procedimentos notariais rígidos.",
    overview: "Transporte e acompanhamento de protocolos de documentos empresariais, imobiliários e judiciais nos cartórios de Guarulhos.",
    steps: [
      { step: 1, title: "Lacre de Segurança", description: "Coletamos a documentação em envelope lacrado com orientação de protocolo." },
      { step: 2, title: "Apresentação no Cartório", description: "O motoboy retira senha, aguarda a conferência e paga taxas se necessário." },
      { step: 3, title: "Devolução dos Carimbos", description: "Entrega do protocolo oficial e vias autenticadas na sua empresa." }
    ],
    faqs: [
      { question: "O motoboy pode pagar a taxa de emolumentos no cartório?", answer: "Sim, podemos realizar o pagamento de taxas mediante adiantamento via Pix oficial." }
    ],
    keywords: ["motoboy cartorio guarulhos", "entrega documentos centro guarulhos", "motoboy forum guarulhos", "protocolo cartorio de notas guarulhos"],
    msg: "Olá! Preciso de um motoboy de confiança para levar documentos a um cartório no Centro de Guarulhos."
  },
  {
    id: "entrega-contratos-tatuape-analia-franco",
    category: "documentos",
    catLabel: "Documentos & Cartórios",
    region: "Zona Leste SP",
    neighborhood: "Tatuapé / Anália Franco",
    title: "Coleta e Assinatura de Contratos no Tatuapé e Anália Franco",
    h1: "Motoboy para Assinatura de Contratos no Tatuapé e Anália Franco",
    tagline: "Serviço 'Vai e Volta': colhemos assinaturas físicas de diretores e sócios e devolvemos na mesma hora.",
    deliveryTime: "20 a 35 min",
    distKm: 9.2,
    landmarks: ["Praça Silvio Romero", "Rua Serra de Bragança", "Rua Emília Marengo", "Edifícios Platina 220 e Geon"],
    whyUs: "Grandes transações imobiliárias e societárias no Tatuapé exigem rapidez. Nosso motoboy colhe a assinatura física no mesmo dia.",
    overview: "Transporte executivo de minutas contratuais, escrituras e procurações no eixo empresarial da Zona Leste.",
    steps: [
      { step: 1, title: "Retirada do Contrato", description: "Buscamos o envelope no seu escritório com indicação das laudas a assinar." },
      { step: 2, title: "Colheita de Assinatura", description: "O motoboy aguarda o signatário rubricar e assinar todas as vias." },
      { step: 3, title: "Devolução Imediata", description: "Retorno expresso da via física assinada para seu arquivamento." }
    ],
    faqs: [
      { question: "Vocês atendem os prédios comerciais da Praça Silvio Romero?", answer: "Sim, atendemos todos os centros empresariais do Tatuapé com identificação na portaria." }
    ],
    keywords: ["motoboy contratos tatuape", "entrega documentos analia franco", "motoboy silvio romero", "assinatura de contrato motoboy zl"],
    msg: "Olá! Preciso de um motoboy no Tatuapé para colher assinatura em um contrato urgente."
  },
  {
    id: "entrega-documentos-forum-santana-zona-norte",
    category: "documentos",
    catLabel: "Documentos & Cartórios",
    region: "Zona Norte SP",
    neighborhood: "Santana / Fórum Regional",
    title: "Entrega de Documentos no Fórum de Santana e Cartórios da ZN",
    h1: "Motoboy para Fórum de Santana e Cartórios da Zona Norte",
    tagline: "Agilidade jurídica na Av. Olavo Fontes, Santana e Rua Voluntários da Pátria.",
    deliveryTime: "25 a 40 min",
    distKm: 8.2,
    landmarks: ["Fórum Regional de Santana", "Rua Olavo Fontes", "Rua Voluntários da Pátria", "Metrô Santana"],
    whyUs: "Prazos processuais são improrrogáveis. Confie a entrega de petições, certidões e notificações a quem conhece a rotina forense de Santana.",
    overview: "Solução para escritórios de advocacia e pessoas físicas com prazos na Justiça de Santana.",
    steps: [
      { step: 1, title: "Agendamento", description: "Informe o número da vara ou cartório destinatário." },
      { step: 2, title: "Protocolo", description: "Nosso motoboy ingressa no fórum e obtém o carimbo de protocolo oficial." },
      { step: 3, title: "Comprovação", description: "Foto da folha carimbada via WhatsApp no mesmo instante." }
    ],
    faqs: [
      { question: "Vocês atendem o Fórum Trabalhista da Zona Norte?", answer: "Sim, atendemos todas as sedes judiciais da Zona Norte de São Paulo." }
    ],
    keywords: ["motoboy forum santana", "entrega documentos santana sp", "motoboy cartorio zona norte", "protocolo peticao forum santana"],
    msg: "Olá! Preciso de um motoboy urgente para protocolar documentos no Fórum de Santana."
  },
  {
    id: "entrega-malotes-macedo-bom-clima-guarulhos",
    category: "documentos",
    catLabel: "Documentos & Cartórios",
    region: "Guarulhos",
    neighborhood: "Macedo / Bom Clima / Prefeitura",
    title: "Entrega de Malotes e Documentos no Macedo e Bom Clima",
    h1: "Motoboy no Macedo e Bom Clima (Polo Administrativo de Guarulhos)",
    tagline: "Atendimento frequente ao Fórum Trabalhista, Prefeitura de Guarulhos e Faculdades.",
    deliveryTime: "15 a 30 min",
    distKm: 4.8,
    landmarks: ["Prefeitura de Guarulhos", "Fórum Cível Bom Clima", "Av. Monteiro Lobato", "Hospital Municipal de Urgências (HMU)"],
    whyUs: "Macedo e Bom Clima concentram os principais órgãos públicos de Guarulhos. Sabemos exatamente onde protocolar cada expediente.",
    overview: "Coleta e entrega de certidões, processos administrativos e malotes contábeis para empresas de Guarulhos.",
    steps: [
      { step: 1, title: "Coleta", description: "Buscamos o malote em sua empresa com termo de custódia." },
      { step: 2, title: "Tramitação", description: "Apresentamos na secretaria ou repartição indicada." },
      { step: 3, title: "Retorno", description: "Devolvemos os comprovantes chancelados." }
    ],
    faqs: [
      { question: "Vocês atendem a sede da Receita Federal em Guarulhos?", answer: "Sim, realizamos entregas de requerimentos e processos na Receita Federal." }
    ],
    keywords: ["motoboy macedo guarulhos", "motoboy bom clima guarulhos", "entrega prefeitura guarulhos", "malotes contabeis guarulhos"],
    msg: "Olá! Preciso de um motoboy no Bom Clima / Macedo para protocolo de documentos."
  },
  {
    id: "entrega-documentos-cartorio-penha",
    category: "documentos",
    catLabel: "Documentos & Cartórios",
    region: "Zona Leste SP",
    neighborhood: "Penha / Cartório de Notas",
    title: "Entrega de Documentos nos Cartórios da Penha de França",
    h1: "Motoboy para Cartórios e Tabelionatos na Penha de França",
    tagline: "Agilidade nos Tabelionatos de Notas e Cartório de Registro Civil da Penha.",
    deliveryTime: "20 a 35 min",
    distKm: 6.5,
    landmarks: ["Praça da Penha", "Rua Padre João", "Rua Betari", "Metrô Penha"],
    whyUs: "Elimine a perda de horas em filas de cartório. Nosso motoboy protocoliza, aguarda o processo e traz seu documento pronto.",
    overview: "Intermediação de serviços notariais e registrais para empresas e famílias da Penha e adjacências.",
    steps: [
      { step: 1, title: "Envio", description: "Recebemos o documento e instruções de autenticação." },
      { step: 2, title: "Execução", description: "Motoboy aguarda o cartório realizar o procedimento." },
      { step: 3, title: "Devolução", description: "Retorno imediato ao seu endereço." }
    ],
    faqs: [
      { question: "Vocês fazem serviço de busca de certidões prontas?", answer: "Sim, retiramos certidões de nascimento, casamento e ônus reais em cartórios." }
    ],
    keywords: ["motoboy cartorio penha", "entrega documentos penha de franca", "tabelionato penha motoboy", "autenticacao cartorio penha"],
    msg: "Olá! Gostaria de contratar um motoboy para levar um documento ao Cartório da Penha."
  },
  {
    id: "entrega-documentos-vila-maria-transportadoras",
    category: "documentos",
    catLabel: "Documentos & Cartórios",
    region: "Zona Norte SP",
    neighborhood: "Vila Maria (Polo de Transportadoras)",
    title: "Entrega de CTRCs, Notas Fiscais e Manifestos na Vila Maria",
    h1: "Motoboy para Transportadoras na Vila Maria: Notas Fiscais e CTRC",
    tagline: "O maior hub de transporte de carga do Brasil atendido com precisão minuto a minuto.",
    deliveryTime: "15 a 30 min",
    distKm: 5.0,
    landmarks: ["Rua Curuçá", "Av. Guilherme Cotching", "Polo de Cargas da Vila Maria", "Marginal Tietê"],
    whyUs: "Um caminhão de carga parado aguardando documentação gera prejuízos. Levamos canhotos, DACTEs e manifestos aos pátios da Vila Maria sem demora.",
    overview: "Serviço prioritário para transportadoras, operadores logísticos e embarcadores com sede na Vila Maria.",
    steps: [
      { step: 1, title: "Chamado", description: "Solicite o motoboy para coleta da documentação fiscal." },
      { step: 2, title: "Chegada no Pátio", description: "Entrega direta ao encarregado de expedição da transportadora." },
      { step: 3, title: "Canhoto Assinado", description: "Foto imediata do comprovante carimbado no WhatsApp." }
    ],
    faqs: [
      { question: "Vocês atendem faturamento para transportadoras com muitas viagens?", answer: "Sim, possuímos pacotes corporativos de corridas com emissão de fatura mensal." }
    ],
    keywords: ["motoboy vila maria", "documentos transportadoras vila maria", "entrega nota fiscal pátio vila maria", "motoboy guilherme cotching"],
    msg: "Olá! Preciso de um motoboy para levar documentos fiscais com urgência em uma transportadora na Vila Maria."
  },
  {
    id: "entrega-documentos-vila-carrão-imobiliarias",
    category: "documentos",
    catLabel: "Documentos & Cartórios",
    region: "Zona Leste SP",
    neighborhood: "Vila Carrão / Conselheiro Carrão",
    title: "Entrega de Contratos e Chaves em Imobiliárias na Vila Carrão",
    h1: "Motoboy na Vila Carrão: Chaves, Laudos de Vistoria e Contratos",
    tagline: "Agilidade na Av. Conselheiro Carrão e Rua Taubaté para corretores e proprietários.",
    deliveryTime: "20 a 35 min",
    distKm: 8.8,
    landmarks: ["Av. Conselheiro Carrão", "Rua Taubaté", "Terminal Vila Carrão", "Parque Manchester"],
    whyUs: "Imobiliárias dependem de agilidade no envio de chaves para vistoria e assinatura de contratos. Garantimos pontualidade sem desvios.",
    overview: "Logística documental e de entrega de chaves para o mercado imobiliário e moradores da Vila Carrão.",
    steps: [
      { step: 1, title: "Contato", description: "Indique o local de coleta da chave ou contrato." },
      { step: 2, title: "Custódia", description: "O motoboy guarda a chave lacrada com identificação." },
      { step: 3, title: "Entrega", description: "Recebimento confirmado pelo destinatário." }
    ],
    faqs: [
      { question: "Vocês recolhem assinatura e devolvem as chaves?", answer: "Sim, executamos corridas de ida e volta conforme sua necessidade." }
    ],
    keywords: ["motoboy vila carrao", "entrega chaves vila carrao", "motoboy conselheiro carrao", "entrega contratos imobiliaria zl"],
    msg: "Olá! Preciso de um motoboy na Vila Carrão para entrega de documentos e chaves."
  },
  {
    id: "entrega-documentos-vila-matilde-radial",
    category: "documentos",
    catLabel: "Documentos & Cartórios",
    region: "Zona Leste SP",
    neighborhood: "Vila Matilde / Radial Leste",
    title: "Entrega Expressa de Documentos na Vila Matilde",
    h1: "Motoboy na Vila Matilde: Atendimento Rápido na Radial Leste",
    tagline: "Deslocamento veloz pela Radial Leste e Rua Joaquim Marra para escritórios e comércios.",
    deliveryTime: "20 a 35 min",
    distKm: 7.8,
    landmarks: ["Estação Vila Matilde do Metrô", "Rua Joaquim Marra", "Av. Waldemar Carlos Pereira", "Radial Leste"],
    whyUs: "A Vila Matilde possui grande movimentação comercial. Nossos motoboys conhecem cada rua e praça, garantindo pontualidade britânica.",
    overview: "Serviço versátil de mensageiro para documentos, pequenas encomendas e produtos locais na Vila Matilde.",
    steps: [
      { step: 1, title: "Envio", description: "Envie os endereços no WhatsApp." },
      { step: 2, title: "Trajeto", description: "Motoboy em rota com máxima segurança." },
      { step: 3, title: "Confirmação", description: "Comprovante enviado em instantes." }
    ],
    faqs: [
      { question: "Qual o tempo médio para o motoboy chegar na Vila Matilde?", answer: "Em torno de 15 a 25 minutos partindo da nossa base na Dutra 225." }
    ],
    keywords: ["motoboy vila matilde", "entregador radial leste", "entrega documentos vila matilde", "motoboy joaquim marra"],
    msg: "Olá! Preciso de um motoboy na Vila Matilde para uma entrega urgente de documentos."
  },
  {
    id: "entrega-documentos-vila-galvao-guarulhos",
    category: "documentos",
    catLabel: "Documentos & Cartórios",
    region: "Guarulhos",
    neighborhood: "Vila Galvão / Lago dos Patos",
    title: "Motoboy para Documentos na Vila Galvão e Lago dos Patos",
    h1: "Motoboy na Vila Galvão: Entregas Comerciais e Residenciais",
    tagline: "Proximidade imediata com a Rodovia Fernão Dias, Av. Timóteo Penteado e Jaçanã.",
    deliveryTime: "15 a 25 min",
    distKm: 4.2,
    landmarks: ["Lago dos Patos", "Praça Santos Dumont", "Av. Sete de Setembro", "Teatro Nelson Rodrigues"],
    whyUs: "A Vila Galvão é tradicional e nobre. Oferecemos atendimento discreto e cuidadoso para moradores e lojistas.",
    overview: "Transporte de documentos, receitas médicas, encomendas leves e contratos na Vila Galvão e divisa com SP.",
    steps: [
      { step: 1, title: "Mensagem", description: "Solicite o mensageiro com seus dados." },
      { step: 2, title: "Coleta", description: "Retirada em residência ou empresa." },
      { step: 3, title: "Sucesso", description: "Entrega com assinatura e foto." }
    ],
    faqs: [
      { question: "Vocês atendem os condomínios ao redor do Lago dos Patos?", answer: "Sim, atendemos com apresentação de documento oficial na portaria." }
    ],
    keywords: ["motoboy vila galvao", "motoboy lago dos patos guarulhos", "entrega documentos timoteo penteado", "motoboy emilio ribas"],
    msg: "Olá! Preciso de um motoboy para fazer uma entrega na Vila Galvão em Guarulhos."
  },
  {
    id: "entrega-documentos-gopouva-guarulhos",
    category: "documentos",
    catLabel: "Documentos & Cartórios",
    region: "Guarulhos",
    neighborhood: "Gopouva / Emílio Ribas",
    title: "Entrega Rápida de Documentos e Encomendas no Gopouva",
    h1: "Motoboy no Gopouva: Serviços Rápidos para Comércios e Escritórios",
    tagline: "A menos de 2km da nossa base na Dutra 225. Atendimento relâmpago no Gopouva.",
    deliveryTime: "10 a 20 min",
    distKm: 2.1,
    landmarks: ["Av. Emílio Ribas", "Anel Viário de Guarulhos", "Hospital Padre Bento", "Parque Fracalanza"],
    whyUs: "Por sermos vizinhos de bairro, o deslocamento até o Gopouva leva literalmente minutos. É a opção mais rápida do mercado.",
    overview: "Entregas diárias de malotes, documentos contratuais e encomendas no Gopouva com destino a qualquer ponto de SP ou Guarulhos.",
    steps: [
      { step: 1, title: "Orçamento WhatsApp", description: "Envie os pontos de retirada e entrega." },
      { step: 2, title: "Chegada em 10 min", description: "O motoboy chega rapidamente ao seu endereço no Gopouva." },
      { step: 3, title: "Finalização", description: "Entrega concluída com assinatura digital." }
    ],
    faqs: [
      { question: "Vocês atendem chamados urgentes no Hospital Padre Bento?", answer: "Sim, realizamos entregas de receitas, prontuários autorizados e suprimentos." }
    ],
    keywords: ["motoboy gopouva", "motoboy emilio ribas guarulhos", "entregador anel viario guarulhos", "motoboy rapido gopouva"],
    msg: "Olá! Preciso de um motoboy urgente aqui no bairro Gopouva em Guarulhos."
  },
  {
    id: "entrega-documentos-forum-civel-trabalhista-guarulhos",
    category: "documentos",
    catLabel: "Documentos & Cartórios",
    region: "Guarulhos",
    neighborhood: "Bom Clima / Fórum Trabalhista",
    title: "Protocolo em Varas Cíveis e Trabalhistas de Guarulhos",
    h1: "Motoboy para Varas Trabalhistas e Cíveis em Guarulhos",
    tagline: "Protocolos judiciais de petições urgentes e guias com comprovante oficial.",
    deliveryTime: "15 a 30 min",
    distKm: 4.9,
    landmarks: ["Fórum da Justiça do Trabalho de Guarulhos", "Av. Tiradentes", "Bom Clima"],
    whyUs: "Atuação constante na Justiça do Trabalho e Fórum Cível de Guarulhos para garantir cumprimento rigoroso de prazos fatais.",
    overview: "Serviço prioritário para departamentos jurídicos de indústrias e escritórios de advocacia de Guarulhos e SP.",
    steps: [
      { step: 1, title: "Documento", description: "Recebemos o arquivo ou envelope impresso." },
      { step: 2, title: "Distribuição", description: "Protocolo no balcão da secretaria da vara." },
      { step: 3, title: "Certidão", description: "Envio imediato da imagem carimbada." }
    ],
    faqs: [
      { question: "Vocês atendem mandados e ofícios judiciais?", answer: "Sim, transportamos notificações e ofícios com estrito sigilo." }
    ],
    keywords: ["motoboy forum trabalhista guarulhos", "protocolo judiciario guarulhos", "motoboy advocacia guarulhos"],
    msg: "Olá! Preciso protocolar um processo com urgência no Fórum Trabalhista de Guarulhos."
  },
  {
    id: "entrega-documentos-belem-sindicatos",
    category: "documentos",
    catLabel: "Documentos & Cartórios",
    region: "Centro & Brás",
    neighborhood: "Belém / Sindicatos e Entidades",
    title: "Entrega de Homologações e Documentos no Belém",
    h1: "Motoboy para Sindicatos, Federações e Homologações no Belém",
    tagline: "Atendimento pontual às sedes de sindicatos e entidades de classe no Belém.",
    deliveryTime: "20 a 35 min",
    distKm: 8.6,
    landmarks: ["Rua Tobias Barreto", "Largo do Belém", "Radial Leste", "Estação Belém"],
    whyUs: "O bairro do Belém concentra diversas sedes sindicais. Levamos rescisões, livros de registro e pedidos de homologação no prazo.",
    overview: "Serviço para departamentos de recursos humanos e escritórios contábeis da Zona Leste e Guarulhos.",
    steps: [
      { step: 1, title: "Horário da Homologação", description: "Informe o horário marcado no sindicato." },
      { step: 2, title: "Despacho", description: "O motoboy entrega a pasta ao preposto." },
      { step: 3, title: "Retorno", description: "Devolução da rescisão carimbada." }
    ],
    faqs: [
      { question: "Vocês recolhem assinatura do preposto no sindicato?", answer: "Sim, aguardamos o término da conferência e trazemos as vias carimbadas." }
    ],
    keywords: ["motoboy homologacao belem", "entrega documentos sindicatos belem", "motoboy rh zona leste"],
    msg: "Olá! Preciso de um motoboy para levar documentos a um sindicato no Belém."
  },
  {
    id: "entrega-documentos-mooca-junta-comercial",
    category: "documentos",
    catLabel: "Documentos & Cartórios",
    region: "Centro & Brás",
    neighborhood: "Mooca / Polo Contábil",
    title: "Motoboy para Escritórios de Contabilidade na Mooca",
    h1: "Motoboy na Mooca: Atendimento a Contabilidades e Despachantes",
    tagline: "Trânsito ágil de livros fiscais, DECOREs, balanços e registros contratuais na Mooca.",
    deliveryTime: "25 a 40 min",
    distKm: 11.0,
    landmarks: ["Av. Paes de Barros", "Rua da Mooca", "Rua Juventus", "Praça Ciro Pontes"],
    whyUs: "A Mooca possui centenas de escritórios de contabilidade que exigem motoboys de alta confiança para circulação de dados fiscais.",
    overview: "Coleta e entrega diária de documentos fiscais, faturas e certidões na Mooca e Zona Leste.",
    steps: [
      { step: 1, title: "Agende a Coleta", description: "Indique o escritório na Mooca." },
      { step: 2, title: "Transporte Lacre", description: "Documentos transportados em pasta hermética." },
      { step: 3, title: "Recibo", description: "Protocolo assinado enviado no WhatsApp." }
    ],
    faqs: [
      { question: "Vocês atendem a Av. Paes de Barros?", answer: "Sim, atendemos toda a extensão da Paes de Barros e adjacências." }
    ],
    keywords: ["motoboy contabilidade mooca", "entrega livros fiscais mooca", "motoboy paes de barros"],
    msg: "Olá! Gostaria de cotar motoboy para atendimento contábil na Mooca."
  },

  // 36-41: Malotes Corporativos, Peças & Insumos de Urgência
  {
    id: "motoboy-transporte-malotes-dutra",
    category: "corporativo",
    catLabel: "Corporativo & Malotes",
    region: "Guarulhos",
    neighborhood: "Ponte Grande / Dutra / Hubs Logísticos",
    title: "Transporte e Troca de Malotes Corporativos na Via Dutra",
    h1: "Motoboy para Malotes Corporativos e Sedes na Rodovia Presidente Dutra",
    tagline: "Circulação segura de malotes bancários, contratos e relatórios entre filiais da Via Dutra.",
    deliveryTime: "20 a 35 min",
    distKm: 1.5,
    landmarks: ["Rodovia Presidente Dutra", "Ponte Grande", "Trevo de Guarulhos", "Marginal Tietê"],
    whyUs: "Com sede no Km 225 da Dutra, nossos motoboys atendem galpões, multinacionais e sedes corporativas com pontualidade estrita e lacres de segurança invioláveis.",
    overview: "Serviço sob demanda ou contrato diário para transporte de malotes fechados, documentos administrativos e canhotos de entrega entre filiais e matriz.",
    steps: [
      { step: 1, title: "Lacre de Segurança", description: "O malote é recolhido com lacre numerado e conferência do termo de custódia." },
      { step: 2, title: "Deslocamento Rápido", description: "Transporte direto sem paradas intermediárias em baú protegido." },
      { step: 3, title: "Protocolo na Portaria", description: "Entrega em mãos ao destinatário com assinatura e foto do canhoto." }
    ],
    faqs: [
      { question: "Vocês realizam trocas diárias de malotes entre matriz e filial?", answer: "Sim, operamos rotas fixas diárias ou semanais com faturamento PJ quinzenal ou mensal." },
      { question: "O motoboy assina termo de sigilo e responsabilidade?", answer: "Sim, todos os nossos mensageiros possuem cadastro verificado e termo de sigilo formal." }
    ],
    keywords: ["motoboy malotes dutra", "transporte malotes guarulhos", "motoboy corporativo via dutra", "malote empresarial guarulhos sp"],
    msg: "Olá! Preciso de um motoboy para transporte de malotes corporativos na Rodovia Dutra."
  },
  {
    id: "motoboy-parque-novo-mundo-insumos",
    category: "autopecas",
    catLabel: "Autopeças & Insumos",
    region: "Zona Norte SP",
    neighborhood: "Parque Novo Mundo / Fernão Dias",
    title: "Entrega de Peças Mecânicas e Insumos no Parque Novo Mundo",
    h1: "Motoboy no Parque Novo Mundo: Autopeças e Insumos Industriais",
    tagline: "Atendimento expresso a galpões mecânicos, retíficas e transportadoras do Parque Novo Mundo.",
    deliveryTime: "15 a 25 min",
    distKm: 2.8,
    landmarks: ["Praça Novo Mundo", "Rodovia Fernão Dias", "Av. Tenente Amaro Felicíssimo da Silveira", "Marginal Tietê"],
    whyUs: "O Parque Novo Mundo abriga grandes oficinas de linha pesada, retíficas e frotas de caminhão. Levamos filtros, mangueiras, bombas e rolamentos urgentes sem parada na operação.",
    overview: "Coleta de peças automotivas, juntas, rolamentos e parafusos industriais em distribuidores com entrega imediata em oficinas e pátios.",
    steps: [
      { step: 1, title: "Solicitação Rápida", description: "Envie endereço da distribuidora e número da peça ou nota." },
      { step: 2, title: "Retirada no Balcão", description: "O motoboy confere o código da peça e acomoda com proteção." },
      { step: 3, title: "Entrega na Oficina", description: "Descarregamento imediato na baia do mecânico responsável." }
    ],
    faqs: [
      { question: "Vocês atendem faturamento mensal para oficinas e frotistas?", answer: "Sim, emitimos boleto quinzenal ou mensal com NF-e discriminada." }
    ],
    keywords: ["motoboy autopecas parque novo mundo", "entrega pecas caminhoes fernao dias", "motoboy tenente amaro", "insumos industriais motoboy zn"],
    msg: "Olá! Preciso de um motoboy no Parque Novo Mundo para transportar peças automotivas / industriais urgentes."
  },
  {
    id: "motoboy-tatuape-chaves-vistorias",
    category: "corporativo",
    catLabel: "Corporativo & Imobiliário",
    region: "Zona Leste SP",
    neighborhood: "Tatuapé / Anália Franco",
    title: "Entrega de Chaves, Vistorias e Contratos no Tatuapé",
    h1: "Motoboy no Tatuapé: Chaves de Imóveis, Vistorias e Assinaturas",
    tagline: "Agilidade premium para imobiliárias, corretores, arquitetos e construtoras do Tatuapé e Anália Franco.",
    deliveryTime: "25 a 40 min",
    distKm: 9.0,
    landmarks: ["Rua Itapura", "Rua Coelho Lisboa", "Praça Silvio Romero", "Jardim Anália Franco"],
    whyUs: "O mercado imobiliário do Tatuapé não pode perder visitas nem fechar plantão por falta de chave ou minuta contratual. Nossos motoboys transportam com protocolo físico rigoroso.",
    overview: "Circulação rápida de molhos de chaves etiquetados, laudos de vistoria de entrega de chaves, plantas arquitetônicas e contratos de locação ou compra e venda.",
    steps: [
      { step: 1, title: "Guarda da Chave", description: "O mensageiro retira a chave na imobiliária com identificação formal." },
      { step: 2, title: "Entrega no Plantão", description: "Deslocamento veloz até o condomínio ou corretor de plantão." },
      { step: 3, title: "Recibo ou Devolução", description: "Colheita de protocolo assinado ou devolução das chaves no mesmo dia." }
    ],
    faqs: [
      { question: "Vocês recolhem assinatura do locatário e devolvem o contrato?", answer: "Sim, realizamos o formato de corrida dupla 'leva e traz' com conferência das rubricas." }
    ],
    keywords: ["motoboy entrega chaves tatuape", "motoboy imobiliaria analia franco", "entrega contratos silvio romero", "motoboy rua itapura"],
    msg: "Olá! Preciso de um motoboy no Tatuapé para entrega de chaves e contratos imobiliários."
  },
  {
    id: "motoboy-santana-laboratorios-dentistas",
    category: "saude",
    catLabel: "Saúde & Odontologia",
    region: "Zona Norte SP",
    neighborhood: "Santana / Jardim São Paulo",
    title: "Transporte de Próteses Dentárias e Moldes em Santana",
    h1: "Motoboy em Santana para Clínicas Odontológicas e Laboratórios de Prótese",
    tagline: "Transporte de moldes de gesso, alinhadores ortodônticos, coroas e implantes com amortecimento total.",
    deliveryTime: "25 a 40 min",
    distKm: 8.0,
    landmarks: ["Av. Nova Cantareira", "Rua Voluntários da Pátria", "Estação Santana", "Av. Braz Leme"],
    whyUs: "Santana é o maior polo de consultórios odontológicos e clínicas médicas da Zona Norte. Nosso transporte conta com acondicionamento antichoque para próteses delicadas.",
    overview: "Coletas e entregas programadas ou de emergência entre laboratórios de prótese dentária e consultórios em Santana, Parada Inglesa e Tucuruvi.",
    steps: [
      { step: 1, title: "Acondicionamento Seguro", description: "A caixa protética é acomodada em nicho acolchoado no baú." },
      { step: 2, title: "Transporte Cauteloso", description: "Pilotagem defensiva com atenção absoluta para evitar trepidações." },
      { step: 3, title: "Entrega à Secretária", description: "Protocolo assinado na recepção do consultório com envio no WhatsApp." }
    ],
    faqs: [
      { question: "Vocês atendem clínicas na Rua Voluntários da Pátria e Braz Leme?", answer: "Sim, realizamos rotas diárias pelos principais centros clínicos de Santana." }
    ],
    keywords: ["motoboy protese dentaria santana", "transporte moldes odontologicos zn", "motoboy voluntarios da patria", "entrega laboratorial santana sp"],
    msg: "Olá! Preciso de um motoboy em Santana para transporte de trabalhos protéticos / odontológicos."
  },
  {
    id: "motoboy-cecap-hospital-geral-malotes",
    category: "saude",
    catLabel: "Saúde & Documentos",
    region: "Guarulhos",
    neighborhood: "Parque Cecap / Hospital Geral de Guarulhos",
    title: "Entrega de Malotes e Documentos Médicos no Cecap",
    h1: "Motoboy no Cecap: Hospital Geral de Guarulhos e Clínicas Especializadas",
    tagline: "Atendimento expresso ao complexo médico do Cecap, Terminal Rodoviário e Av. Monteiro Lobato.",
    deliveryTime: "20 a 30 min",
    distKm: 7.2,
    landmarks: ["Hospital Geral de Guarulhos (HGG)", "Estação Guarulhos-CECAP CPTM", "Terminal Rodoviário Cecap", "Av. Monteiro Lobato"],
    whyUs: "Bairro estratégico que abriga o Hospital Geral de Guarulhos e diversos serviços públicos. Garantimos entrega direta a setores administrativos e recepção.",
    overview: "Transporte ágil de prontuários, laudos periciais, termos médicos autorizados e malotes administrativos no Cecap e imediações.",
    steps: [
      { step: 1, title: "Identificação do Setor", description: "Indique a ala, bloco ou setor receptor no complexo do Cecap." },
      { step: 2, title: "Deslocamento Ágil", description: "Chegada em minutos pelas avenidas Monteiro Lobato e Tancredo Neves." },
      { step: 3, title: "Confirmação Formal", description: "Entrega ao profissional autorizado com foto do protocolo assinado." }
    ],
    faqs: [
      { question: "Vocês entregam em recepções hospitalares e postos?", answer: "Sim, nossos entregadores seguem as orientações de acesso e higiene hospitalar." }
    ],
    keywords: ["motoboy hospital geral guarulhos", "entrega documentos cecap guarulhos", "motoboy monteiro lobato", "motoboy saude guarulhos"],
    msg: "Olá! Preciso de um motoboy para levar documentos urgentes no Cecap / Hospital Geral de Guarulhos."
  },
  {
    id: "motoboy-cangaiba-pequenas-cargas-urgentes",
    category: "autopecas",
    catLabel: "Autopeças & Cargas Rápidas",
    region: "Zona Leste SP",
    neighborhood: "Cangaíba / Engenheiro Goulart",
    title: "Motoboy no Cangaíba: Baterias, Peças e Suprimentos de Oficinas",
    h1: "Motoboy no Cangaíba e Engenheiro Goulart: Socorro Rápido e Peças",
    tagline: "Deslocamento ágil entre a Av. Cangaíba, Penha e Rodovia Ayrton Senna para autopeças e ferramentas.",
    deliveryTime: "20 a 35 min",
    distKm: 5.6,
    landmarks: ["Av. Cangaíba", "Estação Engenheiro Goulart", "Av. Danfer", "Parque Ecológico do Tietê"],
    whyUs: "O Cangaíba possui centenas de oficinas mecânicas, funilarias e indústrias leves que precisam de peças e ferramentas de reposição urgente vindas de distribuidores.",
    overview: "Serviço de socorro e entrega expressa de baterias, cabos, pastilhas de freio e insumos em oficinas do Cangaíba e Engenheiro Goulart.",
    steps: [
      { step: 1, title: "Coleta no Distribuidor", description: "Buscamos a peça na autopeças ou concessionária indicada." },
      { step: 2, title: "Trajeto Seguro", description: "Peça calçada no baú de moto para proteção de roscas e sensores." },
      { step: 3, title: "Entrega na Oficina", description: "Recebimento direto pelo mecânico responsável." }
    ],
    faqs: [
      { question: "Vocês transportam baterias automotivas?", answer: "Sim, transportamos baterias seladas em posição vertical com calço antiderrapante." }
    ],
    keywords: ["motoboy cangaiba", "entrega pecas oficinas cangaiba", "motoboy engenheiro goulart", "entregador av cangaiba autopecas"],
    msg: "Olá! Preciso de um motoboy no Cangaíba para retirar peças de reposição em distribuidora."
  },

  // 42-47: Saúde, Medicamentos & Laboratórios
  {
    id: "entrega-saude-medicamentos-hospital-nipo-brasileiro",
    category: "saude",
    catLabel: "Saúde & Medicamentos",
    region: "Zona Norte SP",
    neighborhood: "Parque Novo Mundo / Hospital Nipo-Brasileiro",
    title: "Entrega de Medicamentos e Exames no Hospital Nipo-Brasileiro",
    h1: "Motoboy para Saúde: Hospital Nipo-Brasileiro e Clínicas da Região",
    tagline: "Transporte delicado de receitas controladas, medicamentos de alto custo e laudos médicos.",
    deliveryTime: "15 a 30 min",
    distKm: 3.5,
    landmarks: ["Hospital Nipo-Brasileiro", "Rua Pistoia", "Av. Sanatório", "Marginal Tietê"],
    whyUs: "Medicamentos e prontuários médicos não aceitam atrasos. Tratamos entregas hospitalares com nível máximo de prioridade e responsabilidade.",
    overview: "Logística médica para farmácias de manipulação, drogarias e familiares de internados no Hospital Nipo-Brasileiro.",
    steps: [
      { step: 1, title: "Identificação", description: "Informe o setor hospitalar, paciente ou médico recebedor." },
      { step: 2, title: "Transporte Térmico", description: "Medicamento devidamente protegido contra luz e calor." },
      { step: 3, title: "Protocolo de Entrega", description: "Entrega com comprovante assinado e identificação do recebedor." }
    ],
    faqs: [
      { question: "Vocês transportam medicamentos que necessitam de caixa térmica?", answer: "Sim, aceitamos caixas térmicas com gelo reutilizável lacradas pelo remetente." }
    ],
    keywords: ["motoboy hospital nipo brasileiro", "entrega medicamentos parque novo mundo", "transporte exames medicos sp", "motoboy saude guarulhos sp"],
    msg: "Olá! Preciso de uma entrega urgente de medicamentos/exames para o Hospital Nipo-Brasileiro."
  },
  {
    id: "entrega-saude-hospital-sao-camilo-santana",
    category: "saude",
    catLabel: "Saúde & Medicamentos",
    region: "Zona Norte SP",
    neighborhood: "Santana / Hospital São Camilo",
    title: "Entrega de Exames e Amostras no Hospital São Camilo Santana",
    h1: "Motoboy para Hospitais em Santana: São Camilo e Clínicas",
    tagline: "Rapidez e protocolo cuidadoso no polo hospitalar e clínico da Zona Norte de SP.",
    deliveryTime: "25 a 40 min",
    distKm: 8.5,
    landmarks: ["Hospital São Camilo Santana", "Rua Voluntários da Pátria", "Rua Dr. Zuquim", "Metrô Jardim São Paulo"],
    whyUs: "Santana possui concentração de consultórios que demandam próteses, lentes e amostras biológicas com pontualidade.",
    overview: "Serviço especializado para clínicas, médicos e pacientes em trânsito com o Hospital São Camilo Santana.",
    steps: [
      { step: 1, title: "Instruções", description: "Repasse os cuidados especiais de manuseio da encomenda." },
      { step: 2, title: "Trânsito Prioritário", description: "O motoboy realiza trajeto direto sem paradas intermediárias." },
      { step: 3, title: "Protocolo Médico", description: "Comprovante assinado entregue na recepção ou consultório." }
    ],
    faqs: [
      { question: "Vocês entregam próteses dentárias para clínicas de Santana?", answer: "Sim, temos ampla experiência com laboratórios de prótese." }
    ],
    keywords: ["motoboy hospital sao camilo santana", "entrega clinicas voluntarios da patria", "transporte laudos santana", "motoboy medico zona norte"],
    msg: "Olá! Gostaria de cotar uma entrega urgente para uma clínica/hospital em Santana."
  },
  {
    id: "entrega-saude-hospital-municipal-guarulhos-urgencias",
    category: "saude",
    catLabel: "Saúde & Medicamentos",
    region: "Guarulhos",
    neighborhood: "Centro / HMU Guarulhos",
    title: "Entrega de Insumos e Medicamentos no HMU Guarulhos",
    h1: "Motoboy para Saúde: Hospital Municipal de Urgências de Guarulhos",
    tagline: "Deslocamento imediato entre farmácias centrais e o Hospital Municipal de Urgências.",
    deliveryTime: "15 a 25 min",
    distKm: 3.8,
    landmarks: ["HMU Guarulhos", "Rua Tiradentes", "Centro de Guarulhos", "Secretaria da Saúde de Guarulhos"],
    whyUs: "Para urgências de saúde, a proximidade da nossa base na Dutra 225 permite alcançar o HMU em menos de 15 minutos.",
    overview: "Logística emergencial para entrega de receitas, laudos e insumos farmacêuticos em unidades de pronto atendimento.",
    steps: [
      { step: 1, title: "Chamado", description: "Chame no WhatsApp indicando 'Urgência Médica'." },
      { step: 2, title: "Despacho", description: "Prioridade absoluta de saída na frota de motoboys." },
      { step: 3, title: "Entrega", description: "Entrega realizada com protocolo e foto enviada." }
    ],
    faqs: [
      { question: "A equipe atende fora do horário comercial para saúde?", answer: "Sim, mantemos plantonistas para demandas emergenciais de saúde e farmácia." }
    ],
    keywords: ["motoboy hmu guarulhos", "entrega hospital municipal guarulhos", "motoboy medicamentos urgentes guarulhos", "entrega farmacia centro guarulhos"],
    msg: "Olá! Preciso de uma entrega emergencial de medicamento/exame no HMU Guarulhos."
  },
  {
    id: "entrega-saude-hospital-geral-guarulhos-cecap",
    category: "saude",
    catLabel: "Saúde & Medicamentos",
    region: "Guarulhos",
    neighborhood: "Cecap / Hospital Geral de Guarulhos",
    title: "Entrega de Medicamentos no Hospital Geral de Guarulhos (HGG)",
    h1: "Motoboy para Saúde: Hospital Geral de Guarulhos no Cecap",
    tagline: "Acesso veloz via Rodovia Presidente Dutra e Ayrton Senna até o HGG.",
    deliveryTime: "20 a 30 min",
    distKm: 7.5,
    landmarks: ["Hospital Geral de Guarulhos", "Alameda dos Lírios", "Parque Cecap", "Estação CECAP CPTM"],
    whyUs: "Pontualidade essencial para transporte de prontuários, receitas especiais e insumos cirúrgicos para o maior hospital estadual da cidade.",
    overview: "Serviço prioritário para suprimento médico e hospitalar entre a capital e o Hospital Geral de Guarulhos.",
    steps: [
      { step: 1, title: "Contato", description: "Informe o setor do HGG e responsável." },
      { step: 2, title: "Coleta", description: "Retirada em farmácia ou laboratório." },
      { step: 3, title: "Entrega", description: "Protocolado na triagem ou enfermaria autorizada." }
    ],
    faqs: [
      { question: "Vocês atendem chamados de clínicas de radiologia?", answer: "Sim, transportamos filmes e laudos de tomografia e raio-X." }
    ],
    keywords: ["motoboy hospital geral guarulhos", "entrega medicamentos hgg cecap", "transporte exames cecap guarulhos"],
    msg: "Olá! Preciso de uma entrega médica urgente no Hospital Geral de Guarulhos no Cecap."
  },
  {
    id: "entrega-saude-odontologia-proteses-tatuape",
    category: "saude",
    catLabel: "Saúde & Medicamentos",
    region: "Zona Leste SP",
    neighborhood: "Tatuapé / Clínicas Odontológicas",
    title: "Transporte de Próteses Dentárias e Alinhadores no Tatuapé",
    h1: "Motoboy para Laboratórios de Prótese Dentária no Tatuapé",
    tagline: "Cuidado absoluto com moldagens, trabalhos em cerâmica e alinhadores ortodônticos.",
    deliveryTime: "20 a 35 min",
    distKm: 9.3,
    landmarks: ["Rua Tuiuti", "Rua Apucarana", "Praça Silvio Romero", "Metrô Carrão"],
    whyUs: "Próteses e moldes de gesso são extremamente frágeis. Nossos mensageiros utilizam caixas acolchoadas anti-choque.",
    overview: "Conexão diária entre laboratórios de prótese de Guarulhos/SP e consultórios odontológicos do Tatuapé.",
    steps: [
      { step: 1, title: "Acondicionamento", description: "O laboratório lacra a caixa identificada do paciente." },
      { step: 2, title: "Transporte Suave", description: "Motociclista pilota com cuidado preventivo." },
      { step: 3, title: "Entrega ao Dentista", description: "Entregue a tempo da consulta do paciente." }
    ],
    faqs: [
      { question: "As caixas de prótese vão soltas no baú?", answer: "Nunca! Utilizamos divisórias de espuma e amarração para evitar qualquer vibração prejudicial." }
    ],
    keywords: ["motoboy protese dentaria tatuape", "entrega laboratorio odontologico zl", "transporte moldes dentista tatuape"],
    msg: "Olá! Sou de um laboratório/consultório e preciso de entregas de próteses no Tatuapé."
  },
  {
    id: "entrega-saude-clinicas-braz-leme-santana",
    category: "saude",
    catLabel: "Saúde & Medicamentos",
    region: "Zona Norte SP",
    neighborhood: "Santana / Av. Braz Leme",
    title: "Entregas para Clínicas Médicas e Estéticas na Av. Braz Leme",
    h1: "Motoboy para Clínicas na Av. Braz Leme e Santana",
    tagline: "Agilidade no principal corredor nobre de saúde e dermatologia da Zona Norte.",
    deliveryTime: "25 a 40 min",
    distKm: 8.4,
    landmarks: ["Av. Braz Leme", "Campo de Marte", "Rua Dr. César", "Rua Salete"],
    whyUs: "Avenida de alto fluxo com centros de dermatologia, cirurgia plástica e estética que exigem discrição e pontualidade.",
    overview: "Transporte de dermocosméticos manipulados, toxina botulínica refrigerada e prontuários médicos na Braz Leme.",
    steps: [
      { step: 1, title: "Coleta em Farmácia", description: "Retirada na farmácia de manipulação parceira." },
      { step: 2, title: "Envio Expresso", description: "Transporte direto e higienizado." },
      { step: 3, title: "Recebimento Clínico", description: "Entregue na recepção com assinatura da secretária." }
    ],
    faqs: [
      { question: "Vocês atendem transporte com bolsa térmica?", answer: "Sim, aceitamos bolsas térmicas lacradas com gelo em gel." }
    ],
    keywords: ["motoboy braz leme", "entrega clinica estetica santana", "motoboy farmacia manipulacao braz leme"],
    msg: "Olá! Preciso de um motoboy para entrega em uma clínica na Av. Braz Leme."
  },

  // 48-50: Autopeças Emergenciais & Socorro Mecânico
  {
    id: "entrega-autopecas-urgente-marginal-dutra",
    category: "autopecas",
    catLabel: "Autopeças & Oficinas",
    region: "Guarulhos",
    neighborhood: "Rodovia Presidente Dutra / Pista Lateral",
    title: "Entrega Emergencial de Autopeças na Dutra e Marginal",
    h1: "Motoboy para Autopeças e Moto-peças: Corredor Dutra e Marginal",
    tagline: "Carro ou caminhão parado na oficina? Levamos a peça de reposição em minutos.",
    deliveryTime: "15 a 30 min",
    distKm: 0.5,
    landmarks: ["Rodovia Presidente Dutra Pista Lateral 225", "Auto Peças Dutra", "Ponte de Cumbica", "Trevo de Bonsucesso"],
    whyUs: "Sediados no coração do polo rodoviário da Grande SP. O mecânico solicita a peça e ela chega à rampa antes do elevador descer.",
    overview: "Logística expressa para peças automotivas entre distribuidores, concessionárias e oficinas em Guarulhos e SP.",
    steps: [
      { step: 1, title: "Código da Peça", description: "Informe o distribuidor onde a peça está faturada." },
      { step: 2, title: "Embarque Seguro", description: "O motoboy acomoda a peça no baú protegido contra impactos." },
      { step: 3, title: "Chegada na Oficina", description: "Entrega na mão do mecânico com nota fiscal." }
    ],
    faqs: [
      { question: "Vocês transportam baterias automotivas?", answer: "Sim, transportamos baterias devidamente calçadas e em posição vertical segura." }
    ],
    keywords: ["motoboy autopecas dutra", "entrega pecas de carro urgente guarulhos", "motoboy oficina mecanica sp", "distribuidora autopecas entrega expressa"],
    msg: "Olá! Preciso de uma entrega urgente de autopeças com coleta na região da Dutra."
  },
  {
    id: "entrega-autopecas-fernao-dias-vila-sabrina",
    category: "autopecas",
    catLabel: "Autopeças & Oficinas",
    region: "Zona Norte SP",
    neighborhood: "Vila Sabrina / Rodovia Fernão Dias",
    title: "Entrega Expressa de Peças de Caminhão e Auto na Fernão Dias",
    h1: "Motoboy para Autopeças e Linha Pesada na Fernão Dias e Vila Sabrina",
    tagline: "Suporte a postos de molas, retíficas e transportadoras no corredor Fernão Dias.",
    deliveryTime: "15 a 30 min",
    distKm: 4.0,
    landmarks: ["Rodovia Fernão Dias km 82", "Av. Professor Castro Júnior", "Vila Sabrina", "Posto Fernão Dias"],
    whyUs: "Nossos motociclistas conhecem os acessos de retornos da Fernão Dias, garantindo que o caminhão volte a rodar rapidamente.",
    overview: "Entrega especializada de reposição automotiva para veículos leves e pesados em oficinas da Vila Sabrina e Fernão Dias.",
    steps: [
      { step: 1, title: "Identificação", description: "Nome da oficina ou posto na Fernão Dias." },
      { step: 2, title: "Retirada", description: "Buscamos no balcão da distribuidora." },
      { step: 3, title: "Instalação", description: "Entrega direta ao mecânico responsável." }
    ],
    faqs: [
      { question: "Vocês atendem oficinas em postos de combustível na rodovia?", answer: "Sim, levamos as peças até o pátio onde o veículo estiver estacionado." }
    ],
    keywords: ["motoboy fernao dias autopecas", "entrega pecas caminhao sp", "motoboy vila sabrina", "pecas de van entrega expressa"],
    msg: "Olá! Preciso de um motoboy para retirar uma peça automotiva e levar na região da Fernão Dias."
  },
  {
    id: "entrega-autopecas-marginal-tiete-vila-maria",
    category: "autopecas",
    catLabel: "Autopeças & Oficinas",
    region: "Zona Norte SP",
    neighborhood: "Marginal Tietê / Ponte da Vila Maria",
    title: "Socorro Rápido de Peças Mecânicas na Marginal Tietê",
    h1: "Motoboy para Peças Automotivas e Oficinas na Marginal Tietê",
    tagline: "Entrega expressa de pastilhas, discos, correias e filtros ao longo da Marginal Tietê.",
    deliveryTime: "20 a 35 min",
    distKm: 5.8,
    landmarks: ["Ponte da Vila Maria", "Marginal Tietê Sentido Castelo/Ayrton Senna", "Av. Morvan Dias de Figueiredo"],
    whyUs: "A Marginal Tietê é a espinha dorsal de São Paulo. Chegamos nas oficinas e centros automotivos vizinhos às pontes sem retenção.",
    overview: "Socorro e abastecimento emergencial de peças automotivas para centros de reparação rápida e concessionárias na Marginal.",
    steps: [
      { step: 1, title: "Balcão Distribuidor", description: "Indique a loja de autopeças na Marginal." },
      { step: 2, title: "Coleta Veloz", description: "Retirada do volume com nota fiscal." },
      { step: 3, title: "Entrega na Oficina", description: "Entrega para o mecânico liberar o veículo do cliente." }
    ],
    faqs: [
      { question: "Vocês atendem aos sábados para oficinas mecânicas?", answer: "Sim, os sábados pela manhã são de alta demanda para socorro de oficinas." }
    ],
    keywords: ["motoboy autopecas marginal tiete", "entrega pecas ponte vila maria", "socorro mecanico autopeças sp"],
    msg: "Olá! Preciso de uma entrega de peça automotiva urgente numa oficina na Marginal Tietê."
  }
];

// Map raw definitions to full ServiceLandingPage items
export const SERVICES_CATALOG: ServiceLandingPage[] = rawServices.map((item) => ({
  id: item.id,
  serviceCategory: item.category,
  categoryLabel: item.catLabel,
  region: item.region,
  neighborhood: item.neighborhood,
  title: item.title,
  h1: item.h1,
  tagline: item.tagline,
  metaTitle: `${item.title} | (11) 95724-8425`,
  metaDescription: `${item.tagline} Atendimento imediato em ${item.neighborhood}. Base na Dutra 225. Chame no WhatsApp.`,
  deliveryTimeEstimate: item.deliveryTime,
  distanceFromBaseKm: item.distKm,
  keyHighlights: [
    `Atendimento prioritário em ${item.neighborhood}`,
    `Tempo médio de deslocamento de ${item.deliveryTime}`,
    `Base operacional estratégica na Rod. Pres. Dutra 225`,
    `Protocolo digital com foto e assinatura pelo WhatsApp`
  ],
  localLandmarks: item.landmarks,
  whyHireUs: item.whyUs,
  serviceOverview: item.overview,
  stepByStep: item.steps,
  faqs: item.faqs,
  keywords: item.keywords,
  whatsappMessage: item.msg
}));

export const NEIGHBORHOOD_COORDINATES: Record<string, { lat: number; lng: number; mapXPercent: number; mapYPercent: number }> = {
  "Vila Itapegica / Internacional Shopping": { lat: -23.4912, lng: -46.5450, mapXPercent: 71, mapYPercent: 12 },
  "Shopping Center Norte / Vila Guilherme": { lat: -23.5132, lng: -46.6180, mapXPercent: 24, mapYPercent: 43 },
  "Expo Center Norte / Carandiru": { lat: -23.5098, lng: -46.6130, mapXPercent: 29, mapYPercent: 36 },
  "Santana / Fórum Regional": { lat: -23.5020, lng: -46.6260, mapXPercent: 10, mapYPercent: 25 },
  "Brás (Polo de Confecções)": { lat: -23.5385, lng: -46.6150, mapXPercent: 14, mapYPercent: 73 },
  "Tatuapé / Metrô Tatuapé": { lat: -23.5395, lng: -46.5770, mapXPercent: 48, mapYPercent: 71 },
  "Penha de França": { lat: -23.5250, lng: -46.5420, mapXPercent: 74, mapYPercent: 74 },
  "Vila Matilde / Radial Leste": { lat: -23.5320, lng: -46.5290, mapXPercent: 88, mapYPercent: 75 },
  "Vila Carrão / Conselheiro Carrão": { lat: -23.5480, lng: -46.5330, mapXPercent: 80, mapYPercent: 88 },
  "Parque Novo Mundo / Fernão Dias": { lat: -23.5030, lng: -46.5780, mapXPercent: 49, mapYPercent: 40 },
  "Tiquatira / Cangaíba": { lat: -23.5150, lng: -46.5350, mapXPercent: 73, mapYPercent: 46 }
};
