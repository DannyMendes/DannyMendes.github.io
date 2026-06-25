import { motion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "../ui/utils";

type SectionHeaderProps = {
  badge: string;
  title: string;
  description?: string;
  className?: string;
  badgeRounded?: "lg" | "full";
  children?: ReactNode;
};

export function SectionHeader({
  badge,
  title,
  description,
  className,
  badgeRounded = "lg",
  children,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn("mb-16", className)}
    >
      <span
        className={cn(
          "inline-block px-4 py-2 bg-purple-500/10 border border-purple-500/20 text-sm text-purple-400 mb-4",
          badgeRounded === "full" ? "rounded-full" : "rounded-lg",
        )}
      >
        {badge}
      </span>
      <h2 className="text-4xl md:text-5xl mb-4">{title}</h2>
      {description && <p className="text-muted-foreground max-w-xl">{description}</p>}
      {children}
    </motion.div>
  );
}
