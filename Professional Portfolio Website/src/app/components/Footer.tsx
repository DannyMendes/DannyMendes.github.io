
import { motion } from "motion/react";
import { Heart } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { profile } from "../data/profile";
import { socialIconClass } from "../lib/styles";
import { SectionContainer } from "./layout/SectionContainer";

const socialLinks = [
  { href: profile.github.url, icon: FaGithub, iconClass: "text-white" },
  { href: profile.linkedin.url, icon: FaLinkedin, iconClass: "text-blue-500" },
  { href: `mailto:${profile.email}`, icon: FaEnvelope, iconClass: "text-red-500" },
] as const;

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="py-16 px-6 border-t border-purple-500/20">
      <SectionContainer>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-xl mb-4 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
              {profile.firstName}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {profile.footerTagline}
            </p>
          </div>

          <div>
            <h4 className="mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-sm text-muted-foreground hover:text-purple-400 transition-colors"
                >
                  Sobre Mim
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-sm text-muted-foreground hover:text-purple-400 transition-colors"
                >
                  Projetos
                </a>
              </li>
              <li>
                <a
                  href={profile.resume}
                  download
                  className="text-sm text-muted-foreground hover:text-purple-400 transition-colors"
                >
                  Baixar Currículo
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4">Vamos Conversar</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Disponível para oportunidades e colaborações
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ href, icon: Icon, iconClass }) => (
                <motion.a
                  key={href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                  className={socialIconClass}
                >
                  <Icon className={`w-5 h-5 ${iconClass}`} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5">
          <p className="text-center text-sm text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} {profile.firstName}. Desenvolvido com
            <Heart className="w-4 h-4 text-purple-400 fill-purple-400" />
            e muita dedicação!
          </p>
        </div>
      </SectionContainer>
    </footer>
  );
}
