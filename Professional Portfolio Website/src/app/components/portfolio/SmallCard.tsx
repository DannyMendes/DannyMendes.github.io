import { motion } from "motion/react";
import { Github, ExternalLink, Star, GitFork } from "lucide-react";
import { timeAgo } from "../../lib/utils";
import type { GitHubRepo } from "../../types/github";

export function SmallCard({ repo, index }: { repo: GitHubRepo; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group p-6 rounded-xl bg-card border border-purple-500/20 hover:border-purple-500/50 transition-all duration-400 flex flex-col h-full"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="group-hover:text-purple-300 transition-colors">{repo.name}</h3>
        <div className="flex items-center gap-3 text-xs text-muted-foreground shrink-0">
          <span className="flex items-center gap-1">
            <Star className="w-3 h-3" /> {repo.stargazers_count}
          </span>
          <span className="flex items-center gap-1">
            <GitFork className="w-3 h-3" /> {repo.forks_count}
          </span>
        </div>
      </div>
      <p className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1">
        {repo.description || "Sem descrição disponível."}
      </p>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {repo.topics.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/35 text-xs text-purple-300"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-3 pt-3 border-t border-white/5">
        <a
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-purple-400 transition-colors"
        >
          <Github className="w-3.5 h-3.5" /> Repositório
        </a>
        {repo.homepage && (
          <a
            href={repo.homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-purple-400 hover:text-purple-300 transition-colors"
          >
            Deploy <ExternalLink className="w-3 h-3" />
          </a>
        )}
        <span className="ml-auto text-xs text-muted-foreground">
          {timeAgo(repo.updated_at)}
        </span>
      </div>
    </motion.div>
  );
}
