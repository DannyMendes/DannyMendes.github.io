import { motion } from "motion/react";
import { GraduationCap, Briefcase, Award } from "lucide-react";

// ─── ALTERE OS DADOS ABAIXO COM SUA FORMAÇÃO E EXPERIÊNCIAS REAIS ─────────────

const education = [
  {
    degree: "Bacharelado em Engenharia de Software",          // ALTERE
    institution: "Nome da Universidade",                      // ALTERE
    period: "2020 – 2024",                                    // ALTERE
    description: "Formação com foco em desenvolvimento de sistemas, algoritmos, banco de dados e engenharia de software.",
  },
  {
    degree: "Bootcamp Full Stack",                            // ALTERE ou remova
    institution: "Nome da Escola / Plataforma",               // ALTERE
    period: "2023",
    description: "Imersão intensiva em desenvolvimento web moderno com React, Node.js e boas práticas de mercado.",
  },
];

const experience = [
  {
    role: "Desenvolvedora Full Stack",                        // ALTERE
    company: "Nome da Empresa",                               // ALTERE
    period: "Jan 2024 – Presente",                           // ALTERE
    description: "Desenvolvimento de features em React e Node.js, otimização de queries PostgreSQL e implementação de testes automatizados.",
  },
  {
    role: "Desenvolvedora Front-end Jr.",                     // ALTERE
    company: "Outra Empresa",                                 // ALTERE
    period: "Jun 2022 – Dez 2023",                           // ALTERE
    description: "Criação de interfaces responsivas com React e TypeScript, integração com APIs REST e participação em code reviews.",
  },
];

const certifications = [
  { name: "AWS Cloud Practitioner",        issuer: "Amazon Web Services", year: "2024" },
  { name: "Desenvolvimento Web Completo",  issuer: "Udemy",               year: "2023" },
  // ADICIONE MAIS CERTIFICAÇÕES AQUI
];

// ──────────────────────────────────────────────────────────────────────────────

function TimelineItem({
  title,
  subtitle,
  period,
  description,
  index,
}: {
  title: string;
  subtitle: string;
  period: string;
  description: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-6 border-l border-white/10 pb-8 last:pb-0"
    >
      <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-purple-500 ring-4 ring-background" />
      <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
        <div>
          <h4 className="text-white">{title}</h4>
          <span className="text-sm text-purple-400">{subtitle}</span>
        </div>
        <span className="text-xs text-muted-foreground bg-white/5 border border-white/10 px-3 py-1 rounded-full">
          {period}
        </span>
      </div>
      <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{description}</p>
    </motion.div>
  );
}

export function Qualifications() {
  return (
    <section id="qualifications" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-sm text-purple-400 mb-4">
            Trajetória
          </span>
          <h2 className="text-4xl md:text-5xl mb-4">Qualificações</h2>
          <p className="text-muted-foreground max-w-xl">
            Formação acadêmica, experiências profissionais e certificações relevantes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Formação */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <GraduationCap className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-xl">Formação Acadêmica</h3>
            </div>
            {education.map((e, i) => (
              <TimelineItem
                key={e.degree}
                title={e.degree}
                subtitle={e.institution}
                period={e.period}
                description={e.description}
                index={i}
              />
            ))}
          </div>

          {/* Experiência */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
                <Briefcase className="w-5 h-5 text-purple-400" />
              </div>
              <h3 className="text-xl">Experiência Profissional</h3>
            </div>
            {experience.map((e, i) => (
              <TimelineItem
                key={e.role + e.company}
                title={e.role}
                subtitle={e.company}
                period={e.period}
                description={e.description}
                index={i}
              />
            ))}
          </div>
        </div>

        {/* Certificações */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 rounded-lg bg-purple-500/10 border border-purple-500/20">
              <Award className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-xl">Certificações</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, i) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-5 rounded-xl bg-card border border-white/5 hover:border-purple-500/30 transition-all group"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-sm text-white group-hover:text-purple-300 transition-colors">{cert.name}</p>
                    <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                  </div>
                  <span className="text-xs text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded shrink-0">
                    {cert.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-purple-600/8 rounded-full blur-[120px] -z-10 pointer-events-none" />
    </section>
  );
}
