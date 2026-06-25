import { motion } from "motion/react";
import { skillset, tools, additional, type SkillItem } from "../data/skills";
import { SectionContainer } from "./layout/SectionContainer";
import { SectionHeader } from "./layout/SectionHeader";

function Pill({ name, Icon, color, index }: SkillItem & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      whileHover={{ y: -3, boxShadow: "0 0 18px rgba(167,139,250,0.25)" }}
      className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full cursor-default select-none transition-all duration-200"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(167,139,250,0.35)",
        boxShadow: "0 2px 12px rgba(167,139,250,0.08)",
      }}
    >
      <Icon style={{ color, flexShrink: 0 }} className="w-[18px] h-[18px]" />
      <span className="text-sm text-white/90 whitespace-nowrap">{name}</span>
    </motion.div>
  );
}

function Category({
  label,
  items,
  delay = 0,
}: {
  label: string;
  items: SkillItem[];
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="grid grid-cols-[110px_1fr] gap-6 items-start"
    >
      <div className="pt-2">
        <span className="text-xs uppercase tracking-[0.18em] text-purple-400/70">
          {label}
        </span>
      </div>
      <div className="flex flex-wrap gap-3">
        {items.map((item, i) => (
          <Pill key={item.name} {...item} index={i} />
        ))}
      </div>
    </motion.div>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 relative">
      <SectionContainer narrow>
        <SectionHeader
          badge="Tecnologias"
          title="Habilidades & Ferramentas"
          description="Stack que utilizo no dia a dia para construir produtos robustos e escaláveis."
          badgeRounded="full"
        />

        <div className="flex flex-col gap-10">
          <Category label="Skillset" items={skillset} />
          <div className="h-px bg-white/[0.05] ml-[110px]" />
          <Category label="Tools" items={tools} delay={0.05} />
          <div className="h-px bg-white/[0.05] ml-[110px]" />
          <Category label="Adicionais" items={additional} delay={0.1} />
        </div>
      </SectionContainer>
    </section>
  );
}
