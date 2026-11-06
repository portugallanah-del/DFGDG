/**
 * config.js - Conteúdo da Dra. Tamires Bremenkamp | Harmonização Facial de Luxo
 * Referência em rostos + jovens e naturais 🪄
 * Biomédica Esteta CRBM 7º 06738 • Jardim Camburi e Viana/ES
 */

export const SITE = {
  doutora: {
    nome: 'Dra. Tamires Bremenkamp',
    tituloCurto: 'Dra. Tamires',
    bioDestaque: 'Referência em rostos + jovens e naturais 🪄',
    registro: 'Biomédica Esteta CRBM 7º 06738',
    cidade: 'Jardim Camburi e Viana - ES',
    cidades: 'Jardim Camburi (Vitória) e Viana/ES',
    instagram: 'dratamiresbremenkamp',
    instagramUrl: 'https://www.instagram.com/dratamiresbremenkamp/',
    whatsapp: '5527992045985',
    whatsappFormatado: '+55 27 99204-5985',
    telefone: '(27) 99204-5985',
    agendamentoOnlineUrl: 'https://clinicabremenkamp.gendo.app/#/',
    grupoVipUrl: 'https://chat.whatsapp.com/Lmk4omeIxbvFskdnVhFT5b?mode=hq2tswi',
    foto: 'https://i.ibb.co/wZHS0d2J/Save-Clip-App-789214923-18111827471279410-1358597512088485727-n.webp'
  },
  hero: {
    titulo: 'Seu rosto, na sua melhor <span class="hero-gold-script">versão.</span>',
    subtitulo: 'Referência em rostos + jovens e naturais 🪄 • Biomédica Esteta CRBM 7º 06738. Cada plano nasce de uma avaliação individual com a Dra. Tamires em Jardim Camburi e Viana/ES.',
    cards: ['Rostos + Jovens e Naturais 🪄', 'CRBM 7º 06738', 'Jardim Camburi & Viana/ES'],
    foto: 'https://i.ibb.co/wZHS0d2J/Save-Clip-App-789214923-18111827471279410-1358597512088485727-n.webp',
    arco: 'ROSTOS JOVENS ✦ NATURALIDADE ✦ ELEGÂNCIA ✦ PROPORÇÃO ✦ CONFIANÇA ✦ '
  },
  faixa: [
    'Rostos Mais Jovens',
    'Naturalidade',
    'Harmonia Facial',
    'Beleza Única',
    'Elegância',
    'Cuidado Individualizado',
    'Proporção Facial',
    'Autoestima'
  ],
  transformacao: {
    antes: '/img/antes.webp',
    depois: '/img/depois.webp',
    legenda: 'Resultados variam de pessoa para pessoa.'
  },
  servicos: [
    {
      id: 'labial',
      rotulo: 'Lábios',
      nome: 'Preenchimento labial',
      foto: '/img/s-labial.svg',
      foco: [50, 45],
      durabilidade: '10 a 16 meses',
      recuperacao: 'Imediata (leve edema transitório em 24h)',
      indicacao: 'Lábios desidratados, assimetrias anatômicas e perda de contorno pelo tempo.',
      descricao: 'Contorno, volume e hidratação na medida do seu rosto, respeitando a proporção entre os lábios superior e inferior.',
      beneficios: [
        'Lábios mais jovens, hidratados e volumizados',
        'Simetria e contorno nítido do arco do cupido',
        'Acabamento discreto sem efeito artificial',
        'Uso de ácido hialurônico de alta biocompatibilidade com lidocaína'
      ]
    },
    {
      id: 'mento',
      rotulo: 'Mento',
      nome: 'Preenchimento de mento',
      foto: '/img/s-mento.svg',
      foco: [50, 56],
      durabilidade: '14 a 18 meses',
      recuperacao: 'Sem afastamento do trabalho',
      indicacao: 'Queixo retraído, falta de projeção no perfil e harmonia do terço inferior.',
      descricao: 'Projeta e alinha o queixo para equilibrar o perfil e a harmonia entre nariz, lábios e mandíbula.',
      beneficios: [
        'Mais expressão e definição no perfil',
        'Equilíbrio e alinhamento dos terços faciais',
        'Contorno elegante da linha da mandíbula',
        'Estruturação com sustentação óssea anatômica precisa'
      ]
    },
    {
      id: 'full',
      rotulo: 'Full face',
      nome: 'Full face & Rejuvenescimento',
      foto: '/img/s-full.svg',
      foco: [50, 42],
      durabilidade: '12 a 24 meses',
      recuperacao: 'Planejada em etapas confortáveis',
      indicacao: 'Rejuvenescimento global integrado, perda de sustentação e flacidez moderada.',
      descricao: 'Planejamento completo do rosto, combinando técnicas para rejuvenescer com coerência entre todas as regiões.',
      beneficios: [
        'Rosto harmônico, descansado e visivelmente mais jovem',
        'Resultado integrado em equilíbrio estético e natural',
        'Plano personalizado executado em etapas seguras',
        'Associação de preenchedores reabsorvíveis e bioestimuladores'
      ]
    },
    {
      id: 'botox',
      rotulo: 'Botox',
      nome: 'Toxina Botulínica (Botox)',
      foto: '/img/s-botox.svg',
      foco: [50, 26],
      durabilidade: '4 a 6 meses',
      recuperacao: 'Retorno imediato às atividades normais',
      indicacao: 'Rugas na testa, glabela (entre as sobrancelhas) e pés de galinha ao redor dos olhos.',
      descricao: 'Relaxa a musculatura das linhas de expressão da testa e do olhar, mantendo sua expressão viva e radiante.',
      beneficios: [
        'Olhar descansado, leve e jovial',
        'Prevenção ativa de novas marcas e vincos',
        'Resultado perceptível em poucos dias',
        'Técnica de dosagem personalizada para manter a mímica natural'
      ]
    },
    {
      id: 'olheira',
      rotulo: 'Olheiras',
      nome: 'Preenchimento de olheira',
      foto: '/img/s-olheira.svg',
      foco: [50, 36],
      durabilidade: '12 a 18 meses',
      recuperacao: 'Sem necessidade de repouso',
      indicacao: 'Sulco nasojugal profundo, sombras sob os olhos e aspecto crônico de cansaço.',
      descricao: 'Suaviza a sombra e o aspecto de cansaço sob os olhos, devolvendo luz, frescor e jovialidade ao olhar.',
      beneficios: [
        'Olhar iluminado e livre de sombras profundas',
        'Rosto descansado com frescor imediato',
        'Ácido hialurônico específico para a área periocular',
        'Aplicação atraumática com microcânula flexível'
      ]
    }
  ],
  galeria: [
    { src: '/img/g1.svg', legenda: 'Preenchimento labial com definição de contorno e hidratação' },
    { src: '/img/g2.svg', legenda: 'Alinhamento de perfil com projeção de mento e ângulo mandibular' },
    { src: '/img/g3.svg', legenda: 'Tratamento preventivo de linhas com toxina botulínica' },
    { src: '/img/g4.svg', legenda: 'Suavização profunda de olheiras e iluminação do olhar' },
    { src: '/img/g5.svg', legenda: 'Planejamento Full Face: harmonia e rejuvenescimento integrado' },
    { src: '/img/g6.svg', legenda: 'Harmonização de perfil respeitando traços anatômicos' },
    { src: '/img/g7.svg', legenda: 'Efeito gloss labial e definição do arco do cupido' },
    { src: '/img/g8.svg', legenda: 'Equilíbrio e proporção áurea facial individualizada' }
  ],
  sobre: {
    foto: 'https://i.ibb.co/wZHS0d2J/Save-Clip-App-789214923-18111827471279410-1358597512088485727-n.webp',
    titulo: 'Sua beleza é <span class="hero-gold-script">única.</span> O cuidado também.',
    subtitulo: 'Conheça a Dra. Tamires Bremenkamp, referência em rostos mais jovens e naturais no Espírito Santo.',
    emocional: 'Acredito que nenhum rosto precisa ser copiado ou padronizado. Cada traço conta uma história, e o meu trabalho é devolver jovialidade, frescor e proporção ao que já é seu, com delicadeza e escuta acolhedora. Quando você se olha no espelho e se reconhece mais descansada, mais jovem e confiante — sem perder a sua identidade —, alcançamos a verdadeira elegância estética.',
    tecnico: 'Dra. Tamires Bremenkamp é Biomédica Esteta (CRBM 7º 06738), especializada em harmonização facial de alta precisão, bioestimuladores de colágeno e rejuvenescimento estético avançado. Com consultórios modernos em Vitória (Jardim Camburi - Norte Sul Tower) e em Viana (Marcílio de Noronha), atua com rigorosa biossegurança, atualização científica contínua e os produtos reabsorvíveis mais seguros do mercado mundial.',
    citacao: '“Harmonizar é resgatar a sua melhor versão: devolver ao espelho a juventude, a elegância e a naturalidade que são só suas.”',
    citacaoAutor: 'Dra. Tamires Bremenkamp',
    numeros: [
      { v: 5, sufixo: '+', rotulo: 'anos de experiência' },
      { v: 1200, sufixo: '+', rotulo: 'procedimentos realizados' },
      { v: 5, sufixo: '.0', rotulo: 'avaliação máxima' }
    ]
  },
  instagram: {
    perfil: 'dratamiresbremenkamp',
    perfilUrl: 'https://www.instagram.com/dratamiresbremenkamp/',
    reelUrl: 'https://www.instagram.com/reel/Dd6lTg4Oglc/',
    reelId: 'Dd6lTg4Oglc',
    embedUrl: 'https://www.instagram.com/reel/Dd6lTg4Oglc/embed/'
  },
  grupoVip: {
    titulo: 'GRUPO VIP - Promoções Clínica Bremenkamp',
    subtitulo: 'Convite exclusivo para pacientes: receba em primeira mão novidades, ofertas relâmpago e condições exclusivas da Dra. Tamires Bremenkamp.',
    url: 'https://chat.whatsapp.com/Lmk4omeIxbvFskdnVhFT5b?mode=hq2tswi'
  },
  agendamentoOnline: {
    titulo: 'Agendar Online pelo Gendo',
    subtitulo: 'Prefere agendar seu horário com total comodidade? Acesse nossa plataforma oficial no Gendo.',
    url: 'https://clinicabremenkamp.gendo.app/#/'
  },
  feedbacks: [
    {
      nome: 'Mariana Silveira',
      servico: 'Preenchimento labial',
      texto: 'Saí me sentindo eu mesma, só mais descansada e jovem. Ninguém diz que fiz procedimento, só me elogiam que estou iluminada!'
    },
    {
      nome: 'Camila Albuquerque',
      servico: 'Preenchimento de mento',
      texto: 'O alinhamento do meu perfil mudou tudo! A Dra. Tamires tem uma sensibilidade incrível, ficou super harmonioso e sutil.'
    },
    {
      nome: 'Patrícia Novaes',
      servico: 'Botox preventivo',
      texto: 'Eu tinha muito receio de ficar sem expressão, mas o trabalho da Dra. Tamires é leveza pura. O olhar descansou naturalmente.'
    },
    {
      nome: 'Beatriz M. Castro',
      servico: 'Preenchimento de olheira',
      texto: 'Adeus corretivo pesado todo dia! A sombra sob os olhos suavizou tanto que pareço ter dormido 10 horas todos os dias.'
    },
    {
      nome: 'Renata V. Guimarães',
      servico: 'Full face & Rejuvenescimento',
      texto: 'Fizemos o plano com muita calma e transparência no Norte Sul Tower. Hoje me olho no espelho e vejo um rosto rejuvenescido e fresco.'
    },
    {
      nome: 'Juliana Mendes',
      servico: 'Preenchimento labial',
      texto: 'Volume na medida perfeita, sem exagero. Meus lábios ficaram hidratados e com o arco do cupido desenhado com delicadeza.'
    },
    {
      nome: 'Larissa Fontes',
      servico: 'Botox & Olheiras',
      texto: 'O atendimento da Dra. Tamires é acolhedor e super seguro. Ela explica cada detalhe anatômico e passa uma tranquilidade ímpar.'
    },
    {
      nome: 'Sofia Leite',
      servico: 'Full face',
      texto: 'Profissionalismo de altíssimo nível. A clínica tem um ambiente acolhedor, café delicioso e o resultado superou todas as expectativas.'
    },
    {
      nome: 'Fernanda Dantas',
      servico: 'Preenchimento labial & mento',
      texto: 'A sutileza no trabalho dela é impressionante. Recuperei a definição do meu rosto e rejuvenesci anos sem perder a identidade.'
    },
    {
      nome: 'Carolina Meirelles',
      servico: 'Harmonização & Rejuvenescimento',
      texto: 'A Dra. Tamires tem mãos de fada! Não senti dor alguma e o planejamento facial respeitou cada proporção minha com muita sofisticação.'
    },
    {
      nome: 'Luciana Barreto',
      servico: 'Preenchimento de olheiras',
      texto: 'O olhar cansado me incomodava há anos. O procedimento foi rápido, tranquilo e o efeito iluminador ficou surpreendente.'
    },
    {
      nome: 'Gabriela Bremenkamp',
      servico: 'Rejuvenescimento facial',
      texto: 'Equipe impecável e pós-atendimento atencioso demais. É muito gratificante encontrar uma profissional que prioriza a elegância e a naturalidade.'
    }
  ],
  unidades: [
    {
      id: 'vitoria',
      nome: 'Vitória (Jardim Camburi)',
      edificio: 'Norte Sul Tower',
      endereco: 'R. Gelu Vervloet dos Santos, 590 - Sl 1202 - Jardim Camburi',
      cidade: 'Vitória - ES',
      cep: '29090-100',
      dica: 'Edifício empresarial de alto padrão com estacionamento rotativo, elevadores inteligentes e portaria com controle de acesso.',
      mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.6106680457635!2d-40.28784112379374!3d-20.27495398119106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb817d7b1a629b3%3A0xe5a3eb7a136706e!2sR.%20Gelu%20Vervloet%20dos%20Santos%2C%20590%20-%20Jardim%20Camburi%2C%20Vit%C3%B3ria%20-%20ES%2C%2029090-100!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr',
      mapsLink: 'https://maps.google.com/?q=Norte+Sul+Tower+R.+Gelu+Vervloet+dos+Santos+590+Jardim+Camburi+Vitoria+ES'
    },
    {
      id: 'viana',
      nome: 'Viana (Marcílio de Noronha)',
      edificio: 'Clínica Bremenkamp - Polo Viana',
      endereco: 'Marcílio de Noronha',
      cidade: 'Viana - ES',
      cep: '29135-000',
      dica: 'Localização de fácil acesso na região central de Marcílio de Noronha com estacionamento e conforto para pacientes da Grande Vitória.',
      mapsLink: 'https://maps.google.com/?q=Marcilio+de+Noronha+Viana+ES'
    }
  ],
  estudio: {
    fotos: [
      { src: '/img/studio-1.svg', titulo: 'Sala de Avaliação Privativa', legenda: 'Ambiente acolhedor e privativo para planejamento anatômico detalhado' },
      { src: '/img/studio-2.svg', titulo: 'Recepção VIP & Lounge', legenda: 'Espaço exclusivo com café especial, conforto e tranquilidade' },
      { src: '/img/studio-3.svg', titulo: 'Consultório de Procedimentos', legenda: 'Biossegurança hospitalar rigorosa e tecnologia de ponta para sua segurança' },
      { src: '/img/studio-4.svg', titulo: 'Espaço de Relaxamento', legenda: 'Privacidade e acolhimento total antes e após cada atendimento' }
    ],
    endereco: 'Norte Sul Tower - R. Gelu Vervloet dos Santos, 590 - Sl 1202 - Jardim Camburi',
    cidade: 'Vitória - ES',
    horario: 'Segunda a Sexta, das 09h às 19h • Atendimento com hora marcada',
    dica: 'Atendimentos em Vitória (Jardim Camburi - Norte Sul Tower) e em Viana (Marcílio de Noronha). Escolha a unidade mais conveniente!',
    mapsEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.6106680457635!2d-40.28784112379374!3d-20.27495398119106!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb817d7b1a629b3%3A0xe5a3eb7a136706e!2sR.%20Gelu%20Vervloet%20dos%20Santos%2C%20590%20-%20Jardim%20Camburi%2C%20Vit%C3%B3ria%20-%20ES%2C%2029090-100!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr',
    mapsLink: 'https://maps.google.com/?q=Norte+Sul+Tower+R.+Gelu+Vervloet+dos+Santos+590+Jardim+Camburi+Vitoria+ES',
    wazeLink: 'https://waze.com/ul?q=Norte+Sul+Tower+Jardim+Camburi+Vitoria+ES'
  },
  atendimento: [
    {
      passo: '01',
      titulo: 'Conte o que você deseja realçar',
      descricao: 'Envie sua mensagem no WhatsApp ou agende online no Gendo informando seus objetivos e queixas principais.'
    },
    {
      passo: '02',
      titulo: 'Escolha a unidade ideal',
      descricao: 'Selecione onde prefere ser atendida: Jardim Camburi (Norte Sul Tower, Vitória) ou Marcílio de Noronha (Viana).'
    },
    {
      passo: '03',
      titulo: 'Receba a orientação inicial',
      descricao: 'Alinhamos expectativas, tiramos dúvidas sobre os procedimentos e preparamos seu momento.'
    },
    {
      passo: '04',
      titulo: 'Avaliação presencial com a Dra. Tamires',
      descricao: 'Consulta detalhada com análise facial personalizada para um resultado jovem, elegante e 100% natural.'
    }
  ],
  simulador: {
    antes: '/img/antes.webp',
    depois: '/img/depois.webp',
    regioes: {
      labios: { x: 50, y: 44, rx: 17, ry: 8, servico: 'Preenchimento labial', rotulo: 'Mais boca' },
      queixo: { x: 50, y: 56, rx: 21, ry: 9, servico: 'Preenchimento de mento', rotulo: 'Alinhamento de perfil' },
      olhos: [
        { x: 45, y: 36, rx: 11, ry: 6 },
        { x: 55, y: 36, rx: 11, ry: 6 }
      ],
      full: { x: 50, y: 42, rx: 32, ry: 38, servico: 'Full face & Rejuvenescimento', rotulo: 'Rosto mais jovem' }
    }
  },
  faq: [
    {
      p: 'Fico com aspecto artificial?',
      r: 'De forma alguma. O trabalho da Dra. Tamires Bremenkamp é referência justamente por entregar rostos mais jovens e naturais. O foco nunca é modificar seus traços, mas sim valorizar proporções, devolver volume perdido e iluminar o rosto com naturalidade.'
    },
    {
      p: 'Qual a formação e registro da profissional?',
      r: 'A Dra. Tamires Bremenkamp é Biomédica Esteta habilitada sob o registro CRBM 7º 06738, com ampla formação e especialização em Harmonização Facial, bioestimuladores e rejuvenescimento estético.'
    },
    {
      p: 'Em quais unidades a Dra. Tamires atende?',
      r: 'Você pode escolher ser atendida em Vitória (Jardim Camburi - Norte Sul Tower, Torre Sul, Sl 1202) ou em Viana (Marcílio de Noronha). Ambas as unidades contam com estrutura completa e atendimento com hora marcada.'
    },
    {
      p: 'Como posso agendar minha avaliação?',
      r: 'Você pode agendar diretamente pelo WhatsApp (+55 27 99204-5985) ou agendar online com total praticidade pelo sistema Gendo (clinicabremenkamp.gendo.app).'
    },
    {
      p: 'Existe um canal para acompanhar promoções?',
      r: 'Sim! Temos o Grupo VIP oficial da Clínica Bremenkamp no WhatsApp, onde são compartilhadas ofertas relâmpago, condições de datas comemorativas e conteúdos exclusivos.'
    },
    {
      p: 'Quanto tempo dura o procedimento?',
      r: 'Procedimentos com ácido hialurônico de alta tecnologia têm durabilidade média de 10 a 18 meses, sendo absorvidos lentamente pelo organismo. O Botox dura em média de 4 a 6 meses de acordo com o metabolismo individual.'
    },
    {
      p: 'O procedimento é doloroso?',
      r: 'O atendimento é muito confortável. Utilizamos anestésicos tópicos hospitalares de alta eficácia e agulhas/microcânulas ultrafinas atraumáticas. Além disso, as fórmulas já contêm lidocaína para máximo conforto.'
    },
    {
      p: 'Qual o tempo de recuperação?',
      r: 'A maioria dos procedimentos permite retorno imediato às atividades de rotina. Pode haver discreto inchaço nas primeiras 24h a 48h, de fácil manejo com as orientações pós-procedimento da doutora.'
    },
    {
      p: 'Posso parcelar meu tratamento?',
      r: 'Sim! Facilitamos o pagamento em até 12x no cartão de crédito, com condições especiais para planos de rejuvenescimento e harmonização facial integrada.'
    }
  ],
  analytics: { ga4: '', pixel: '' }
};
