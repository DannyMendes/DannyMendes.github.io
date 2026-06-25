import { motion } from "motion/react";
import { Github, ExternalLink, Star, GitFork, Clock } from "lucide-react";
import { timeAgo } from "../../lib/utils";
import type { GitHubRepo } from "../../types/github";

export function FeaturedCard({ repo }: { repo: GitHubRepo }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="group p-8 rounded-xl bg-card border border-purple-500/35 hover:border-purple-500/50 transition-all duration-500"
    >
      <div>
        <div className="flex items-start justify-between mb-4 flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-4 h-4 fill-purple-400 text-purple-400" />
              <span className="text-xs text-purple-400 uppercase tracking-wider">
                Projeto em Destaque
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl group-hover:text-purple-300 transition-colors">
              {repo.name}
            </h3>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4" /> {repo.stargazers_count}
            </span>
            <span className="flex items-center gap-1">
              <GitFork className="w-4 h-4" /> {repo.forks_count}
            </span>
          </div>
        </div>
        <p className="text-muted-foreground mb-6 leading-relaxed max-w-2xl text-base">
          {repo.description || "Projeto sem descrição. Adicione uma no GitHub."}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {repo.topics.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/35 text-sm text-purple-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-purple-500/35 hover:border-purple-500/50 text-sm text-muted-foreground hover:text-white transition-all"
            >
              <Github className="w-4 h-4" /> Ver Repositório
            </a>
            {repo.homepage && (
              <a
                href={repo.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white text-sm transition-all"
              >
                Acessar Deploy <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="w-3 h-3" /> Atualizado {timeAgo(repo.updated_at)}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
