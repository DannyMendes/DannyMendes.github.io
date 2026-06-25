import { motion, type HTMLMotionProps } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "../ui/utils";

const glassCardStyle = {
  background: "rgba(255,255,255,0.03)",
  border: "2px solid rgba(167,139,250,0.35)",
  boxShadow: "0 2px 12px rgba(167,139,250,0.06)",
} as const;

type GlassCardProps = HTMLMotionProps<"div"> & {
  children: ReactNode;
};

export function GlassCard({ children, className, ...props }: GlassCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={cn("group p-5 rounded-lg transition-all duration-300", className)}
      style={glassCardStyle}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export { glassCardStyle };
