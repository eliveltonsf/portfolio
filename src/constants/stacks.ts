export type StackCategory = "front" | "back" | "mobile" | "infra";

export type StackInfo = {
  iconName: string;
  description: string;
  study: boolean;
  category: StackCategory;
};

export const STACKS_INFO: StackInfo[] = [
  {
    iconName: "html",
    description:
      "HTML é uma linguagem de marcação, onde definimos quais informação serão exibidas na tela por meio a tags. ",
    study: false,
    category: "front",
  },
  {
    iconName: "css",
    description:
      "CSS é uma linguagem de folha de estilo composta por escopos, criado com o propósito de estilizar as páginas.",
    study: false,
    category: "front",
  },
  {
    iconName: "js",
    description:
      "JavaScript é uma linguagem de programação que permite a você implementar ação, comportamentos dinâmicos nos elementos das páginas web.",
    study: false,
    category: "front",
  },
  {
    iconName: "react",
    description:
      "React é uma biblioteca JavaScript com foco em criar interfaces de usuário de forma componetizada.",
    study: false,
    category: "front",
  },
  {
    iconName: "react-native",
    description:
      "React Native é um framework para construir aplicações móveis usando React e JavaScript.",
    study: true,
    category: "mobile",
  },
  {
    iconName: "next",
    description:
      "Next.js é uma estrutura da web que permite funcionalidades como renderização do lado do servidor e geração de sites estáticos para web baseados em React.",
    study: false,
    category: "front",
  },

  {
    iconName: "figma",
    description:
      "Figma é um editor gráfico de vetor e prototipagem de projetos de design baseado principalmente no navegador web",
    study: false,
    category: "front",
  },
  {
    iconName: "mui",
    description:
      "MUI (Material-UI) é uma biblioteca de componentes para React, baseada no Material Design do Google, projetada para fornecer uma maneira fácil e rápida de construir interfaces de usuário modernas e responsivas.",
    study: true,
    category: "front",
  },
  {
    iconName: "sass",
    description:
      "Sass é um pré-processador CSS que adiciona alguns recursos que não estão disponíveis de forma nativa.",
    study: false,
    category: "front",
  },
  {
    iconName: "shadcn",
    description:
      "Shadcn é uma biblioteca de componentes para React, projetada para fornecer uma maneira fácil e rápida de construir interfaces de usuário modernas e responsivas.",
    study: true,
    category: "front",
  },
  {
    iconName: "storybook",
    description:
      "Storybook é uma ferramenta que tem como objetivo documentar e testar os componentes da aplicação.",
    study: false,
    category: "front",
  },
  {
    iconName: "styled",
    description:
      "styled-components é uma biblioteca que utiliza o conceito de CSS-in-JS, ou seja, que nos permite escrever códigos CSS dentro do Javascript.",
    study: false,
    category: "front",
  },
  {
    iconName: "tailwind",
    description:
      "Tailwind CSS é um framework CSS que nos fornece classes utilitárias com o propósito de estilizar as páginas.",
    study: false,
    category: "front",
  },
  {
    iconName: "jest",
    description:
      "Jest é um framework de teste em JavaScript projetado para garantir a correção de qualquer código JavaScript. Ele permite que você escreva testes com uma API acessível, familiar e rica em recursos que lhe dá resultados rapidamente.",
    study: false,
    category: "front",
  },
  {
    iconName: "radix",
    description:
      "Radix é uma biblioteca que fornece componentes acessíveis e sem estilos para a criação de aplicação em React.",
    study: false,
    category: "front",
  },
  {
    iconName: "tanstack",
    description:
      "TanStack é uma coleção de bibliotecas de código aberto para construção de aplicações web, incluindo React Query, React Table e React Location.",
    study: true,
    category: "front",
  },
  {
    iconName: "testing-library",
    description:
      "Testing Library é uma biblioteca de testes para aplicações JavaScript, projetada para fornecer uma maneira de testar a interface do usuário de forma que simule a interação do usuário real.",
    study: true,
    category: "front",
  },
  {
    iconName: "vtex",
    description:
      "VTEX é uma plataforma de e-commerce SaaS (Software as a Service). Na prática, isso significa que a VTEX é responsável por toda estrutura necessária para que os lojistas possam cadastrar seus produtos, integrar meios de pagamento, calcular frete, etc.",
    study: false,
    category: "front",
  },
  {
    iconName: "yup",
    description:
      "Yup é uma biblioteca de validação de esquemas para JavaScript e TypeScript, projetada para fornecer uma maneira fácil e intuitiva de validar dados em tempo de execução.",
    study: true,
    category: "front",
  },
  {
    iconName: "zod",
    description:
      "Zod é uma biblioteca de validação de esquemas para TypeScript e JavaScript, projetada para fornecer uma maneira segura e eficiente de validar dados em tempo de execução.",
    study: true,
    category: "front",
  },
  {
    iconName: "cypress",
    description:
      "Cypress é um framework para automação de testes end-to-end, onde atualmente usa a linguagem JavaScript.",
    study: true,
    category: "front",
  },

  {
    iconName: "redux",
    description:
      "Redux é uma biblioteca de gerenciamento de estado previsível para aplicativos JavaScript, frequentemente usada com bibliotecas como React ou Angular para construir interfaces de usuário.",
    study: true,
    category: "front",
  },
  {
    iconName: "typescript",
    description:
      "TypeScript é um superset do JavaScript que incluir recursos que não estão presentes na linguagem de forma nativa, além de torná-la estática.",
    study: false,
    category: "front",
  },
  {
    iconName: "node",
    description:
      "Nodejs é uma plataforma para executar código javascript com foco em montar regras de negócio e persistir dados para o fontend.",
    study: false,
    category: "back",
  },
  {
    iconName: "express",
    description:
      "Express é um framework web para Node.js, projetado para construir aplicações web e APIs de forma rápida e fácil.",
    study: true,
    category: "back",
  },
  {
    iconName: "graphql",
    description:
      "GraphQL é uma linguagem de consulta para APIs, permitindo que os clientes solicitem exatamente os dados de que precisam.",
    study: true,
    category: "back",
  },
  {
    iconName: "python",
    description:
      "O Python é uma linguagem de programação amplamente usada em aplicações da Web, desenvolvimento de software, ciência de dados e machine learning (ML).",
    study: true,
    category: "back",
  },
  {
    iconName: "sql",
    description:
      "SQL (Structured Query Language) é uma linguagem de programação usada para gerenciar e manipular bancos de dados relacionais.",
    study: true,
    category: "back",
  },
  {
    iconName: "zustand",
    description:
      "Zustand é uma biblioteca de gerenciamento de estado para aplicativos JavaScript, frequentemente usada com bibliotecas como React para construir interfaces de usuário.",
    study: true,
    category: "front",
  },
  {
    iconName: "aws",
    description:
      "AWS (Amazon Web Services) é uma plataforma de serviços em nuvem da Amazon, oferecendo uma ampla gama de serviços de computação, armazenamento e banco de dados.",
    study: true,
    category: "infra",
  },
  {
    iconName: "docker",
    description:
      "Docker é um conjunto de produtos de plataforma como serviço que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres.",
    study: true,
    category: "infra",
  },
  {
    iconName: "kubernetes",
    description:
      "Kubernetes é um sistema de orquestração de contêineres open-source que automatiza a implantação, o dimensioiconNamento e a gestão de aplicações em contêineres.",
    study: true,
    category: "infra",
  },
];
