import resumePdf from "../../imports/Currículo-Danielly-Mendes-Pires-Ferreira.pdf";
import profilePic from "../../imports/foto-perfil-danny.jpeg";

export const profile = {
  firstName: "Danielly Mendes",
  fullName: "Danielly Mendes Pires Ferreira",
  nameLines: ["Danielly Mendes", "Pires Ferreira"] as const,
  title: "Engenheira de Software",
  titleEn: "Software Engineer",
  location: "Portugal",
  email: "ferreiradmp@gmail.com",
  github: {
    username: "DannyMendes",
    url: "https://github.com/DannyMendes",
    label: "github.com/DannyMendes",
  },
  linkedin: {
    url: "https://linkedin.com/in/seu-perfil",
    label: "LinkedIn",
  },
  resume: resumePdf,
  avatar: profilePic,
  bio: [
    "Engenheira de Software Júnior com experiência em desenvolvimento web com HTML, CSS e JavaScript, PHP, MySQL. Conhecimentos em desenvolvimento com Java, C++.",
    "Atuo na criação de aplicações, integrações e automações com IA (Copilot, Lovable, TRAE, n8n) Breve experiência em gestão de projetos de software. Busco sempre a evolução e melhoramento contínuo com eficiência e boas práticas.",
  ],
  footerTagline:
    "Engenheira de Software apaixonada por criar soluções escaláveis e experiências digitais excepcionais.",
} as const;

export const navItems = [
  { label: "Sobre", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projetos", id: "projects" },
] as const;

export const FEATURED_REPO = "";
