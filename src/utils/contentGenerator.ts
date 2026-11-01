import { ServiceLandingPage } from '../types';
import { COMPANY_INFO } from '../data/servicesCatalog';

export interface DetailedPageContent {
  wordCount: number;
  introduction: string;
  regionalContext: string;
  operationalProcedure: string;
  cargoSpecifications: string;
  corporateBenefits: string;
  localLandmarksDetailed: { title: string; desc: string }[];
  detailedFaqs: { question: string; answer: string }[];
  operationalSummary: {
    baseLocation: string;
    averageSLA: string;
    coverageRadius: string;
    paymentMethods: string;
    inspectionGuarantee: string;
  };
}

/**
 * Generates an authoritative, non-AI-sounding, professional Brazilian logistics guide
 * with at least 800 substantive words tailored specifically to each neighborhood and service.
 */
export function generateDeepPageContent(service: ServiceLandingPage): DetailedPageContent {
  const isShopping = service.serviceCategory === 'shopping';
  const isBras = service.serviceCategory === 'bras-moda';
  const isDoc = service.serviceCategory === 'documentos';
  const isHealth = service.serviceCategory === 'saude';
  const isAuto = service.serviceCategory === 'autopecas';
  const isBancario = service.serviceCategory === 'bancario';
  const isCorp = service.serviceCategory === 'corporativo';

  let specificLogistics = "";
  if (isShopping) {
    specificLogistics = `A dinâmica de retirada de mercadorias em grandes shopping centers, como o Internacional Shopping Guarulhos, Shopping Center Norte, Lar Center, Shopping Metrô Tatuapé ou Boulevard, exige profundo conhecimento dos acessos de carga, cancelas de fornecedores, áreas de lockers e procedimentos internos de docas. Para um cliente comum ou lojista, retirar uma encomenda comprada na modalidade 'Clique e Retire' ou despachar uma troca de mercadoria costuma significar perder mais de uma hora em filas de estacionamento, pagamento de cancela, caminhadas extensas pelos corredores e espera no balcão de expedição. 

Nossa equipe opera estrategicamente a partir do nosso ponto operacional fixo no número 225 da Pista Lateral da Rodovia Presidente Dutra (Vila Itapegica), a menos de oitocentos metros dos portões de acesso do Internacional Shopping Guarulhos e com saída rápida para as marginais e avenidas Zaki Narchi, Carlos Ferreira Endres e Radial Leste. Nossos motociclistas credenciados acessam rapidamente as baias de motofrete autorizadas, comparecem com a ordem de retirada ao balcão da loja âncora ou quiosque, conferem a integridade da embalagem, fotografam a encomenda lacrada e enviam imediatamente o registro para o cliente via WhatsApp. O trajeto é realizado sem transbordo intermediário, com o pacote acondicionado em baú fechado e impermeabilizado, garantindo que o produto chegue impecável ao seu destino final.`;
  } else if (isBras) {
    specificLogistics = `O polo de confecções do Brás, Pari e adjacências concentra a maior movimentação comercial têxtil da América Latina, abrangendo vias fundamentais como a Rua Miller, Rua Maria Marcolina, Rua Oriente, Rua Silva Teles, Rua Barão de Ladário e o entorno do Largo da Concórdia e Circuito das Compras. A circulação de veículos de carga e automóveis particulares nessa região é historicamente travada por congestionamentos severos, restrições severas de estacionamento, fluxo maciço de pedestres e regras municipais de zona azul. 

Para sacoleiros, atacadistas, fabricantes de moda e revendedores de outras cidades que não podem se deslocar até a capital, contratar um motoboy experiente no Brás é indispensável para viabilizar entregas ágeis no mesmo dia. Nossos profissionais conhecem com precisão a numeração dos boxes, galerias comerciais, estacionamentos de ônibus de excursão na Rua Monsenhor de Andrade e depósitos de tecidos. Retiramos fardos de roupas, sacolas de pronta-entrega, mostruários de alfaiataria, aviamentos e pacotes de atacado, realizando a conferência física com a nota fiscal e emitindo foto ao comprador. Caso a encomenda precise ser despachada diretamente no bagageiro de um ônibus de excursão antes da partida, efetuamos a entrega em mãos para o guia de turismo responsável, recolhendo carimbo e assinatura no canhoto.`;
  } else if (isDoc) {
    specificLogistics = `O trâmite de documentos corporativos, contratos imobiliários, escrituras públicas, certidões forenses e minutas societárias exige absoluta pontualidade, sigilo e rigoroso cumprimento de prazos judiciais. Em polos jurídicos e cartoriais de grande demanda como os Cartórios de Notas do Centro de Guarulhos, o Fórum da Comarca na Rua Crisólita (Bom Clima), o Fórum Regional de Santana e os complexos empresariais do Tatuapé (como o Platina 220 e a Praça Silvio Romero), qualquer atraso pode acarretar a perda de um prazo processual fatal ou o adiamento de uma transação milionária.

Nossa empresa disponibiliza mensageiros habilitados para operações no formato 'Vai e Volta'. Retiramos a documentação em envelope devidamente lacrado na sede da sua empresa ou banca jurídica, conferimos a folha de rosto, ingressamos nas dependências do cartório ou tribunal, retiramos a senha de protocolo, recolhemos os carimbos oficiais e providenciamos a imediata colheita de assinaturas presenciais de sócios, diretores ou testemunhas. Assim que o documento recebe a chancela digital ou mecânica do escrivão, fotografamos a certidão em alta resolução e enviamos para o seu departamento antes mesmo de iniciar o trajeto de retorno.`;
  } else if (isAuto) {
    specificLogistics = `O abastecimento de autopeças e componentes mecânicos para oficinas, concessionárias, retíficas e frotas de caminhão ao longo da Rodovia Presidente Dutra e Fernão Dias é uma operação crítica onde cada minuto de atraso representa veículos parados e prejuízo em pátios. Transportamos rolamentos, juntas homocinéticas, bombas injetoras, correias dentadas, sensores eletrônicos, baterias automotivas seladas e parafusos de precisão em baús com calços protetores anti-impacto.

Nossos motociclistas recolhem a mercadoria diretamente no balcão de distribuidores industriais e grandes atacadistas de autopeças na Zona Norte e Guarulhos, conferem o código da peça com a ordem de compra emitida pela oficina e seguem imediatamente pela faixa expressa da Dutra e Marginal Tietê sem paradas intermediárias, realizando a entrega diretamente na bancada do mecânico encarregado com protocolo assinado.`;
  } else if (isHealth) {
    specificLogistics = `O transporte de materiais na área de saúde, como próteses dentárias, moldes em gesso, medicamentos controlados de alto custo, bolsas térmicas com amostras laboratoriais e laudos clínicos em hospitais como Nipo-Brasileiro, São Camilo e Hospital Geral de Guarulhos, exige protocolos de higiene e acondicionamento com estabilidade mecânica redobrada.

Nossa frota utiliza baús higienizados e isolados termicamente, protegendo frascos e recipientes contra variações de temperatura e impacto. O motoboy retira no laboratório ou farmácia com identificação de lote e termo de responsabilidade, dirigindo com postura defensiva e entregando em mãos na recepção de clínicas especializadas ou enfermarias autorizadas.`;
  } else {
    specificLogistics = `A ligação entre Guarulhos, a Zona Norte e a Zona Leste de São Paulo representa um dos nós viários de maior densidade logística do país, interligando corredores vitais como a Rodovia Presidente Dutra, a Rodovia Fernão Dias, a Rodovia Ayrton Senna, a Marginal Tietê e a Radial Leste. A prestação de serviços de transporte rápido nessa malha exige motociclistas profissionais com vivência prática das melhores rotas de escape para contornar gargalos crônicos, radares de velocidade, áreas de tráfego pesado e variações climáticas repentinas.

Sediados estrategicamente na pista lateral da Rodovia Presidente Dutra 225, garantimos tempo de resposta imediato para despachos urgentes de malotes corporativos, peças mecânicas de reposição para indústrias, documentos contratuais e abastecimento médico-hospitalar. Nossa metodologia elimina intermediários automatizados de aplicativos que frequentemente cancelam corridas de última hora. Aqui você conta com uma transportadora com sede física comprovada, atendimento telefônico direto e acompanhamento humanizado do início ao fim da rota.`;
  }

  const introduction = `Se você precisa de um serviço profissional, seguro e imediato de motoboy em ${service.neighborhood}, a Motoboy e Logística Express oferece a infraestrutura logística mais ágil da região. Com sede física estabelecida no número 225 da Pista Lateral da Rodovia Presidente Dutra (Vila Itapegica, Guarulhos), nossa base operacional posiciona-se estrategicamente junto ao entroncamento com a Rodovia Fernão Dias, Marginal Tietê e Av. Carlos Ferreira Endres, possibilitando que nossos mensageiros realizem a coleta rápida e o envio ágil no seu endereço. Seja para o transporte prioritário de documentos contratuais, retirada de encomendas e compras em shoppings centers, coleta de fardos no polo de confecções do Brás ou logística reversa para empresas, disponibilizamos profissionais uniformizados, com baús higienizados e comunicação contínua via WhatsApp em tempo real.`;

  const regionalContext = `A região de ${service.neighborhood} desempenha papel essencial no fluxo de mercadorias da Grande São Paulo e da capital. No dia a dia de empresas, escritórios e residências locais, deslocar um funcionário próprio para realizar entregas ou depender do transporte público para retirar mercadorias acarreta elevados custos operacionais, consumo excessivo de combustível e perda imprevisível de produtividade diante do tráfego metropolitano. Nossos motociclistas realizam rotas diárias pelos principais eixos viários da região, incluindo ${service.localLandmarks.join(', ')}. Conhecemos a fundo a sinalização de cada via, os horários de restrição de circulação, a localização de estacionamentos de carga e descarga autorizados e os procedimentos específicos de acesso a condomínios fechados, prédios comerciais, pavilhões industriais e galerias de varejo. Essa experiência prática de rua se traduz em economia de tempo e segurança tangível para o cliente que nos contrata.`;

  const operationalProcedure = `Nosso procedimento de execução de serviços de motoboy obedece a um padrão operacional rígido desenvolvido para assegurar tranquilidade total ao remetente e ao destinatário. O fluxo inicia-se no momento em que você entra em contato pelo telefone ou WhatsApp (11) 95724-8425. Nossa central operacional calcula a rota otimizada com máxima agilidade e despacha imediatamente o motociclista mais próximo ao ponto de retirada. No local de coleta, o profissional apresenta identificação formal, recolhe o pacote ou documento, confere os dados de nota fiscal ou ordem de retirada e emite um registro fotográfico imediato. Durante o percurso, a carga permanece abrigada em baú reforçado com isolamento térmico e vedação contra intempéries climáticas. No ponto de entrega, o mensageiro colhe o nome completo, documento de identidade e assinatura do recebedor, registrando o protocolo digital que é compartilhado imediatamente com você no WhatsApp, encerrando a ordem de serviço com transparência comprovada.`;

  const cargoSpecifications = `Para garantir a conformidade legal com as normas do Conselho Nacional de Trânsito (CONTRAN), do DETRAN-SP e da Secretaria Municipal de Transportes, todas as motocicletas da nossa frota utilizam baús rígidos homologados com capacidade de até noventa litros e carga limite de até vinte quilogramas por viagem. Transportamos com total segurança: envelopes contratuais lacrados, pastas com processos e certidões, peças e mostruários de confecções dobradas, insumos gráficos e embalagens comerciais, medicamentos e dermocosméticos, equipamentos de pequeno porte de informática (notebooks, tablets, periféricos), autopeças e baterias automotivas devidamente calçadas, além de encomendas retiradas no balcão de shoppings. Não transportamos cargas ilícitas, substâncias químicas inflamáveis sem autorização técnica ou objetos que extrapolem os limites físicos e de equilíbrio regulamentares da motocicleta.`;

  const corporateBenefits = `Para indústrias, comércios varejistas, escritórios de contabilidade, agências de publicidade e departamentos jurídicos situados em ${service.neighborhood} e no entorno da Rodovia Presidente Dutra, oferecemos a modalidade de Faturamento Corporativo para Empresas (PJ). Esse plano permite centralizar todas as demandas de entrega do mês sem a necessidade de pagamentos individuais a cada corrida. O departamento financeiro da sua empresa recebe quinzenal ou mensalmente um relatório consolidado com o registro completo de cada ordem de serviço (data, horário de solicitação, usuário solicitante, pontos de partida e destino, valor e protocolo assinado), acompanhado de Nota Fiscal de Serviços eletrônica oficial (NFS-e) e boleto bancário com prazo de compensação negociado. Essa estrutura reduz em até 40% os custos operacionais com mensageiros internos, além de eliminar riscos trabalhistas e despesas de depreciação de frota própria.`;

  const detailedFaqs = [
    {
      question: `Como funciona o tempo de coleta e entrega para chamados em ${service.neighborhood}?`,
      answer: `Partindo de nossa base operacional instalada na Rodovia Presidente Dutra 225 (Vila Itapegica), operamos com coleta rápida e despacho prioritário sob demanda. Não fazemos promessas falsas de minutos exatos, pois prezamos pela transparência com você diante do trânsito imprevisível da Grande São Paulo, porém garantimos máxima prioridade para coletar e entregar sua encomenda com agilidade total e segurança.`
    },
    {
      question: `Como é feita a comprovação formal de que o pacote ou documento foi entregue?`,
      answer: `Adotamos um sistema de protocolo duplo: o motociclista colhe a assinatura física ou rubricada do recebedor no canhoto de transporte, anota o nome legível e número de documento (RG ou CPF) e registra uma fotografia em tempo real do item entregue nas mãos do destinatário. Essa comprovação completa é enviada instantaneamente para o seu WhatsApp.`
    },
    {
      question: `É possível agendar coletas programadas com horário fixo de saída?`,
      answer: `Sim. Além do nosso plantão expresso para chamados de urgência imediata, atendemos ordens programadas com horário marcado para recolher malotes diários, coletas regulares em distribuidores de peças ou retirada de documentos com prazos agendados em cartórios e repartições públicas.`
    },
    {
      question: `Quais formas de pagamento são aceitas para clientes avulsos e empresas?`,
      answer: `Para clientes avulsos e pedidos sob demanda aceitamos transferência instantânea via Pix, cartões de crédito e débito na maquininha portátil do mensageiro ou dinheiro. Para empresas cadastradas no plano PJ disponibilizamos faturamento quinzenal ou mensal via boleto bancário com emissão de Nota Fiscal eletrônica.`
    }
  ];

  const localLandmarksDetailed = service.localLandmarks.map((landmark) => ({
    title: landmark,
    desc: `Ponto de atendimento com cobertura direta de nossos motoboys em ${service.neighborhood}, com rotas expressas pela Rodovia Presidente Dutra e principais artérias locais.`
  }));

  // Build full substantive text body to calculate exact word count
  const fullText = [
    introduction,
    regionalContext,
    specificLogistics,
    operationalProcedure,
    cargoSpecifications,
    corporateBenefits,
    detailedFaqs.map(f => f.question + " " + f.answer).join(" "),
    localLandmarksDetailed.map(l => l.title + " " + l.desc).join(" ")
  ].join(" ");

  const words = fullText.trim().split(/\s+/).length;

  return {
    wordCount: words,
    introduction,
    regionalContext: `${regionalContext}\n\n${specificLogistics}`,
    operationalProcedure,
    cargoSpecifications,
    corporateBenefits,
    localLandmarksDetailed,
    detailedFaqs,
    operationalSummary: {
      baseLocation: COMPANY_INFO.address,
      averageSLA: "Coleta e entrega rápida sob demanda",
      coverageRadius: "Grande São Paulo, Guarulhos, Brás, ZN e ZL",
      paymentMethods: "Pix, Cartão, Dinheiro e Boleto Faturado PJ",
      inspectionGuarantee: "Protocolo digital com foto e geolocalização no WhatsApp"
    }
  };
}
