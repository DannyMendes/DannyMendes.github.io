import { profile, FEATURED_REPO } from "../data/profile";
import type { GitHubRepo } from "../types/github";

export const FALLBACK_PROJECTS: GitHubRepo[] = [
  {
    name: "Projeto Destaque",
    description:
      "Sistema completo com autenticação OAuth2, dashboard analítico em tempo real e gerenciamento de usuários com diferentes níveis de permissão.",
    html_url: `https://github.com/${profile.github.username}/projeto-1`,
    homepage: "",
    topics: ["react", "typescript", "node", "postgresql"],
    stargazers_count: 12,
    forks_count: 3,
    updated_at: new Date().toISOString(),
    featured: true,
  },
  {
    name: "Projeto 2",
    description:
      "API RESTful escalável com cache distribuído, filas de processamento assíncrono e integração com serviços externos.",
    html_url: `https://github.com/${profile.github.username}/projeto-2`,
    homepage: "",
    topics: ["nextjs", "tailwind", "prisma", "redis"],
    stargazers_count: 8,
    forks_count: 1,
    updated_at: new Date().toISOString(),
    featured: false,
  },
  {
    name: "Projeto 3",
    description: "Aplicativo mobile cross-platform com sincronização offline-first e notificações push.",
    html_url: `https://github.com/${profile.github.username}/projeto-3`,
    homepage: "",
    topics: ["react-native", "firebase", "redux"],
    stargazers_count: 5,
    forks_count: 0,
    updated_at: new Date().toISOString(),
    featured: false,
  },
];

export { FEATURED_REPO };
