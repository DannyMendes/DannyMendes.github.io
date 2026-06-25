
import { motion } from "motion/react";
import { certifications, inProgressCourses } from "../data/certifications";
import { GlassCard } from "./layout/GlassCard";
import { SectionContainer } from "./layout/SectionContainer";
import { SectionHeader } from "./layout/SectionHeader";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 relative">
      <SectionContainer>
        <SectionHeader
          badge="Cursos e Formações"
          title="Cursos e Formações"
          description="Adquiridos ao longo da minha carreira"
          className="mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {certifications.map((cert, i) => (
            <GlassCard
              key={cert.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative overflow-hidden"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 p-1.5 rounded-md bg-purple-500/10 border border-purple-500/20 shrink-0">
                    <cert.icon className="w-4 h-4 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-white group-hover:text-purple-200 transition-colors font-medium">
                      {cert.name}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                  </div>
                </div>
                {cert.logo && (
                  <img
                    src={cert.logo}
                    alt={cert.issuer}
                    className="h-8 w-auto object-contain shrink-0 mt-0.5 rounded-md"
                  />
                )}
              </div>
            </GlassCard>
          ))}
        </div>

        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl text-purple-400 mb-4">Em Formação</h3>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {inProgressCourses.map((item, i) => (
              <GlassCard
                key={item.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 p-1.5 rounded-md bg-purple-500/10 border border-purple-500/20 shrink-0">
                    <item.icon className="w-4 h-4 text-purple-400" />
                  </div>
                  <p className="text-sm text-white group-hover:text-purple-200 transition-colors">
                    {item.name}
                  </p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
