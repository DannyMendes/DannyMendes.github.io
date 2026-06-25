
import { motion } from "motion/react";
import { profile, navItems } from "../data/profile";
import { scrollToSection } from "../lib/utils";
import { SectionContainer } from "./layout/SectionContainer";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/70 border-b border-purple-500/20"
    >
      <SectionContainer className="px-0 py-4 flex items-center justify-between">
        <motion.button
          whileHover={{ scale: 1.02 }}
          onClick={() => scrollToSection("about")}
        >
          <span className="text-lg bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
            {profile.firstName}
          </span>
        </motion.button>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(({ label, id }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {label}
            </button>
          ))}
        </nav>

        <a
          href={profile.resume}
          download
          className="text-sm px-4 py-2 rounded-lg bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/35 text-purple-300 hover:text-purple-200 transition-all duration-300"
        >
          Currículo
        </a>
      </SectionContainer>
    </motion.header>
  );
}
