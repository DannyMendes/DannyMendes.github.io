
import { motion } from "motion/react";
import { Github } from "lucide-react";
import { profile } from "../data/profile";
import { useGithubRepos } from "../hooks/useGithubRepos";
import { FeaturedCard } from "./portfolio/FeaturedCard";
import { SmallCard } from "./portfolio/SmallCard";
import { SectionContainer } from "./layout/SectionContainer";
import { SectionHeader } from "./layout/SectionHeader";

export function Portfolio() {
  const { featured, others, loading } = useGithubRepos();

  return (
    <section id="projects" className="py-24 px-6 relative">
      <SectionContainer>
        <SectionHeader
          badge="Projetos"
          title="Portfólio no GitHub"
          description={
            loading
              ? "Carregando repositórios..."
              : "Projetos reais do meu GitHub, do mais recente ao mais antigo."
          }
        />

        {featured && (
          <div className="mb-8">
            <FeaturedCard repo={featured} />
          </div>
        )}

        {others.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {others.map((repo, i) => (
              <SmallCard key={repo.name} repo={repo} index={i} />
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href={`https://github.com/${profile.github.username}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-purple-500/35 hover:border-purple-500/50 text-muted-foreground hover:text-white transition-all duration-300"
          >
            <Github className="w-4 h-4" />
            Ver todos os repositórios
          </a>
        </motion.div>
      </SectionContainer>
    </section>
  );
}
