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
  role: "Desenvolvedor Back-end | DevSecOps em Formação | Ex-Atleta de Alto Rendimento",
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
    items: ["Java", "Python", "VBA"],
    span: "md:col-span-2",
  },
  {
    title: "Back-end",
    icon: Code2,
    items: ["Spring Boot", "APIs REST", "JSON"],
    span: "md:col-span-2",
  },
  {
    title: "Segurança",
    icon: ShieldCheck,
    items: ["OWASP", "AppSec", "Linux", "Redes"],
    span: "md:col-span-2",
  },
  {
    title: "Ferramentas",
    icon: Database,
    items: ["Git", "GitHub", "Docker", "CI/CD"],
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
    title: "Meu Tutor de Inglês AI",
    description:
      "Assistente conversacional para prática de inglês usando LLM Llama 3.3, com correções gramaticais e feedback contextual.",
    stack: ["Python", "LLM", "Llama 3.3"],
    icon: Bot,
    link: "https://www.linkedin.com/posts/jo%C3%A3o-carlos-damacena-4724232aa_python-backend-ia-activity-7460396738793713664-Irhq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEp1CNYBr_7EmjcoH3Q_UZgGUgqDn_eCJ_w", 
    image: "/image.jpg", 
  },
  {
    title: "Buscador de CEP em Java",
    description:
      "Aplicação Java consumindo APIs REST públicas, com parsing de JSON e tratamento robusto de erros de rede.",
    stack: ["Java", "REST", "JSON"],
    icon: MapPin,
    link: "https://www.linkedin.com/posts/jo%C3%A3o-carlos-damacena-4724232aa_java-desenvolvimento-backend-activity-7458517882382151680-WjCw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEp1CNYBr_7EmjcoH3Q_UZgGUgqDn_eCJ_w",
    image: "/image (1).jpg", 
  },
  {
    title: "Dashboard de Hábitos (VBA)",
    description:
      "Automação completa em Excel/VBA para registro, acompanhamento e análise de hábitos com gráficos dinâmicos.",
    stack: ["VBA", "Excel", "Automação"],
    icon: BarChart3,
    link: "https://www.linkedin.com/posts/jo%C3%A3o-carlos-damacena-4724232aa_excel-vba-macros-activity-7427869536223137792-1WOm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEp1CNYBr_7EmjcoH3Q_UZgGUgqDn_eCJ_w",
    image: "/image (2).jpg",
  },
  {
    title: "Sistemas OO em Java",
    description:
      "Conjunto de projetos aplicando POO, SOLID e padrões de arquitetura para sistemas modulares e testáveis.",
    stack: ["Java", "POO", "Arquitetura"],
    icon: Boxes,
    link: "https://www.linkedin.com/posts/jo%C3%A3o-carlos-damacena-4724232aa_finalizei-dois-projetos-em-java-com-foco-activity-7430068354960347137-IAhm?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEp1CNYBr_7EmjcoH3Q_UZgGUgqDn_eCJ_w",
    image: "/image (3).jpg", 
  },
];

export const certifications = [
  {
    name: "Cisco — Networking Academy",
    issuer: "Cisco",
    items: [
      "Introduction to Cybersecurity", 
      "Network Defense",
      "CCNA: Introduction to Networks"
    ],
  },
  {
    name: "Hackers do Bem",
    issuer: "SoftexRS / MCTI",
    items: [
      "Fundamentos de Segurança Cibernética", 
      "Nivelamento em Redes e Linux",
      "Basico de Pentest e Ethical Hacking"
    ],
  },
  {
    name: "Formações Alura",
    issuer: "Alura",
    items: [
      "AppSec: Fundamentos de Segurança no Software",
      "Java: Orientação a Objetos, Listas e Coleções",
      "Git e GitHub: Versionamento e Colaboração",
      "Arquitetura de Computadores: Funcionamento de Sistemas"
    ],
  },
];