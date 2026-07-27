import {
  Code2,
  ShieldCheck,
  Database,
  Bot,
  MapPin,
  BarChart3,
  Boxes,
  type LucideIcon,
} from "lucide-react";

export const profile = {
  name: "João Carlos Damacena",
  role: "Desenvolvedor Back-end | DevSecOps | Integração de APIs | Segurança de Aplicações",
  location: "São Paulo — SP, Brasil",
  email: "jocagoda070307@gmail.com",
  github: "https://github.com/Joda33",
  linkedin: "https://www.linkedin.com/in/jo%C3%A3o-carlos-damacena-4724232aa/",
  photo: "Captura de tela 2023-12-09 030545.png",
};

export const navLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#tecnologias", label: "Tecnologias" },
  { href: "#projetos", label: "Projetos" },
  { href: "#certificacoes", label: "Certificações" },
  { href: "#contato", label: "Contato" },
];

export type TechCategory = {
  title: string;
  icon: LucideIcon;
  items: string[];
  span?: string;
};

export const techCategories: TechCategory[] = [
  {
    title: "Linguagens",
    icon: Code2,
    items: [
      "Java",
      "Python",
      "TypeScript",
      "SQL",
      "Deluge",
      "VBA"
    ],
    span: "md:col-span-2",
  },
  {
    title: "Back-end & APIs",
    icon: Database,
    items: [
      "Spring Boot",
      "Flask",
      "REST APIs",
      "OAuth",
      "JSON",
      "Zoho Creator"
    ],
    span: "md:col-span-2",
  },
  {
    title: "DevSecOps",
    icon: ShieldCheck,
    items: [
      "Docker",
      "GitHub Actions",
      "Bandit",
      "Pip-audit",
      "OWASP ZAP",
      "CI/CD"
    ],
    span: "md:col-span-2",
  },
  {
    title: "Ferramentas",
    icon: Database,
    items: [
      "Git",
      "GitHub",
      "Linux",
      "Postman",
      "BrasilAPI",
      "PagHiper",
      "Zoho Bigin"
    ],
    span: "md:col-span-2",
  },
];

export type Project = {
  title: string;
  description: string;
  stack: string[];
  icon: LucideIcon;
  link?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    title: "Sistema Imobiliário com Zoho Creator",
    description:
      "Sistema completo para gestão imobiliária desenvolvido em Zoho Creator, com automação de contratos, integração com BrasilAPI para validação de CEP/CNPJ, geração de boletos via PagHiper e sincronização em tempo real com Zoho Bigin utilizando Deluge, REST APIs e OAuth.",
    stack: [
      "Zoho Creator",
      "Deluge",
      "REST API",
      "OAuth",
      "BrasilAPI",
      "PagHiper",
      "Zoho Bigin",
    ],
    icon: Database,
    link: "https://www.linkedin.com/posts/jo%C3%A3o-carlos-damacena-4724232aa_zohocreator-deluge-restapi-activity-7487561311061528576-mDRG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEp1CNYBr_7EmjcoH3Q_UZgGUgqDn_eCJ_w",
    image: "/zoho.jpg",
  },

  {
    title: "Plataforma de Conscientização em Phishing",
    description:
      "Aplicação desenvolvida em React para treinamento de usuários contra ataques de engenharia social, utilizando componentes modernos e simulações totalmente executadas no navegador sem armazenamento de dados.",
    stack: [
      "React",
      "TypeScript",
      "TanStack Router",
      "TanStack Query",
      "Tailwind CSS",
    ],
    icon: ShieldCheck,
    link: "https://www.linkedin.com/posts/jo%C3%A3o-carlos-damacena-4724232aa_webdevelopment-reactjs-typescript-activity-7476065508723896320-yVdK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEp1CNYBr_7EmjcoH3Q_UZgGUgqDn_eCJ_w",
    image: "/phishing.png",
  },

  {
    title: "Pipeline DevSecOps para Flask",
    description:
      "Pipeline DevSecOps implementado em uma aplicação Flask utilizando Docker, GitHub Actions, Bandit, Pip-audit e OWASP ZAP para automação de testes e análise de vulnerabilidades.",
    stack: [
      "Python",
      "Flask",
      "Docker",
      "GitHub Actions",
      "Bandit",
      "Pip-audit",
      "OWASP ZAP",
    ],
    icon: ShieldCheck,
    link: "https://www.linkedin.com/posts/jo%C3%A3o-carlos-damacena-4724232aa_devsecops-cybersecurity-python-activity-7470971496241418240-2adV?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEp1CNYBr_7EmjcoH3Q_UZgGUgqDn_eCJ_w",
    image: "/devsecops.jpg",
  },

  {
    title: "Sentence Miner AI",
    description:
      "Aplicação web para mineração inteligente de frases em inglês utilizando inteligência artificial, permitindo geração contextual de exemplos e auxílio ao aprendizado com LLMs.",
    stack: [
      "Python",
      "LLM",
      "Groq",
      "Llama 3",
      "SQLite",
    ],
    icon: Bot,
    link: "https://phrasemaster-english.vercel.app/",
    image: "/sentence-miner.png",
  },

  {
    title: "Meu Tutor de Inglês AI",
    description:
      "Assistente conversacional baseado em LLM para prática de inglês com correção gramatical, feedback contextual e auxílio ao aprendizado.",
    stack: [
      "Python",
      "LLM",
      "Llama 3.3",
    ],
    icon: Bot,
    link: "https://www.linkedin.com/posts/jo%C3%A3o-carlos-damacena-4724232aa_python-backend-ia-activity-7460396738793713664-Irhq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEp1CNYBr_7EmjcoH3Q_UZgGUgqDn_eCJ_w",
    image: "/image.jpg",
  },

  {
    title: "Buscador de CEP em Java",
    description:
      "Aplicação Java para consulta de CEP utilizando APIs REST públicas, com parsing de JSON e tratamento robusto de exceções.",
    stack: [
      "Java",
      "REST",
      "JSON",
    ],
    icon: MapPin,
    link: "https://www.linkedin.com/posts/jo%C3%A3o-carlos-damacena-4724232aa_java-desenvolvimento-backend-activity-7458517882382151680-WjCw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEp1CNYBr_7EmjcoH3Q_UZgGUgqDn_eCJ_w",
    image: "/image (1).jpg",
  },

  {
    title: "Projetos Orientados a Objetos em Java",
    description:
      "Coleção de aplicações utilizando Programação Orientada a Objetos, SOLID e arquitetura modular para desenvolvimento de sistemas escaláveis.",
    stack: [
      "Java",
      "POO",
      "SOLID",
    ],
    icon: Boxes,
    link: "https://www.linkedin.com/posts/jo%C3%A3o-carlos-damacena-4724232aa_finalizei-dois-projetos-em-java-com-foco-activity-7430068354960347137-IAhm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEp1CNYBr_7EmjcoH3Q_UZgGUgqDn_eCJ_w",
    image: "/image (3).jpg",
  },

  {
    title: "Dashboard de Hábitos",
    description:
      "Sistema desenvolvido em Excel VBA para registro, acompanhamento e análise de hábitos com automações e dashboards dinâmicos.",
    stack: [
      "Excel",
      "VBA",
      "Automação",
    ],
    icon: BarChart3,
    link: "https://www.linkedin.com/posts/jo%C3%A3o-carlos-damacena-4724232aa_excel-vba-macros-activity-7427869536223137792-1WOm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEp1CNYBr_7EmjcoH3Q_UZgGUgqDn_eCJ_w",
    image: "/image (2).jpg",
  },
];

export const certifications = [
  {
    name: "Hackers do Bem",
    issuer: "Softex / MCTI",
    items: [
      "DevSecOps",
      "Segurança Cibernética",
      "Linux",
      "Redes",
      "Pentest",
    ],
  },
  {
    name: "Cisco Networking Academy",
    issuer: "Cisco",
    items: [
      "Introduction to Cybersecurity",
      "Network Defense",
      "CCNA: Introduction to Networks",
      "Endpoint Security",
    ],
  },
  {
    name: "Alura",
    issuer: "Alura",
    items: [
      "AppSec",
      "Java",
      "Git e GitHub",
      "Spring Boot",
      "Arquitetura de Computadores",
    ],
  },
];