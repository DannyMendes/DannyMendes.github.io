import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiHtml5, SiCss3,
  SiNodedotjs, SiPython, SiSpring, SiSpringboot,
  SiPostgresql, SiMysql, SiMongodb, SiRedis,
  SiDocker, SiGit, SiGithub, SiFigma, SiLinux, SiJira,
  SiTailwindcss, SiVite, SiPrisma, SiGooglecloud,
  SiLayers, SiApi, SiGraphql, SiTestinglibrary,
  SiGithubactions, SiScrum, SiCodefresh, SiKubernetes,
} from "react-icons/si";
import type { ElementType } from "react";

export type SkillItem = {
  name: string;
  Icon: ElementType;
  color: string;
};

export const skillset: SkillItem[] = [
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#ffffff" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "Spring", Icon: SiSpring, color: "#6DB33F" },
  { name: "Spring Boot", Icon: SiSpringboot, color: "#6DB33F" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "HTML5", Icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", Icon: SiCss3, color: "#1572B6" },
];

export const tools: SkillItem[] = [
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "GitHub", Icon: SiGithub, color: "#ffffff" },
  { name: "Docker", Icon: SiDocker, color: "#2496ED" },
  { name: "Google Cloud", Icon: SiGooglecloud, color: "#4285F4" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
  { name: "Linux", Icon: SiLinux, color: "#FCC624" },
  { name: "Prisma", Icon: SiPrisma, color: "#ffffff" },
  { name: "Vite", Icon: SiVite, color: "#646CFF" },
  { name: "Redis", Icon: SiRedis, color: "#DC382D" },
  { name: "Jira", Icon: SiJira, color: "#0052CC" },
];

export const additional: SkillItem[] = [
  { name: "Arquitetura de Software", Icon: SiLayers, color: "#A855F7" },
  { name: "REST APIs", Icon: SiApi, color: "#2563EB" },
  { name: "GraphQL", Icon: SiGraphql, color: "#E535AB" },
  { name: "Testes Automatizados", Icon: SiTestinglibrary, color: "#FF3E00" },
  { name: "CI/CD", Icon: SiGithubactions, color: "#2088FF" },
  { name: "Metodologias Ágeis", Icon: SiLayers, color: "#22C55E" },
  { name: "Scrum", Icon: SiScrum, color: "#FF6B6B" },
  { name: "Code Review", Icon: SiGithub, color: "#ffffff" },
  { name: "DDD", Icon: SiLayers, color: "#FACC15" },
  { name: "Clean Code", Icon: SiCodefresh, color: "#10B981" },
  { name: "Microsserviços", Icon: SiKubernetes, color: "#326CE5" },
];
