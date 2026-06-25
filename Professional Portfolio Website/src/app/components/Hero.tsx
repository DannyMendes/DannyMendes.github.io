
import { motion } from "motion/react";
import { Download, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { profile } from "../data/profile";
import { contactLinkClass } from "../lib/styles";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { SectionContainer } from "./layout/SectionContainer";

const contactLinks = [
  {
    href: `mailto:${profile.email}`,
    icon: FaEnvelope,
    iconClass: "text-red-500",
    label: profile.email,
  },
  {
    href: profile.github.url,
    icon: FaGithub,
    iconClass: "text-white",
    label: profile.github.label,
    external: true,
  },
  {
    href: profile.linkedin.url,
    icon: FaLinkedin,
    iconClass: "text-blue-500",
    label: profile.linkedin.label,
    external: true,
  },
] as const;

export function Hero() {
  return (
    <section id="about" className="min-h-screen flex items-center px-6 pt-24 pb-16">
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <h1 className="text-5xl md:text-6xl mb-3 bg-gradient-to-br from-white via-white to-purple-400 bg-clip-text text-transparent leading-tight">
              {profile.nameLines[0]}
              <br />
              {profile.nameLines[1]}
            </h1>
            <h2 className="text-xl md:text-2xl text-purple-400 mb-4">{profile.title}</h2>
            <div className="flex items-center gap-2 text-sm text-white/80 mb-6">
              <MapPin className="w-4 h-4" />
              <span>{profile.location}</span>
            </div>
            {profile.bio.map((paragraph) => (
              <p
                key={paragraph.slice(0, 30)}
                className="text-base text-white/80 max-w-xl mb-4 last:mb-8 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}
            <div className="flex flex-wrap items-center gap-3 mb-8">
              {contactLinks.map(({ href, icon: Icon, iconClass, label, ...rest }) => (
                <a
                  key={label}
                  href={href}
                  {...("external" in rest && rest.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={contactLinkClass}
                >
                  <Icon className={`w-4 h-4 ${iconClass}`} />
                  {label}
                </a>
              ))}
            </div>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={profile.resume}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white shadow-lg shadow-purple-500/30 transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Baixar Currículo
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-1 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-3xl scale-110" />
              <div className="absolute inset-0 rounded-full border border-purple-500/35 scale-105" />
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-purple-500/40 shadow-2xl shadow-purple-500/20">
                <ImageWithFallback
                  src={profile.avatar}
                  alt={profile.fullName}
                  className="w-full h-full object-cover"
                />
              </div>
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 px-4 py-2 rounded-lg bg-card border border-purple-500/35 shadow-xl backdrop-blur-sm"
              >
                <span className="text-sm text-purple-300">{profile.titleEn}</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </SectionContainer>
    </section>
  );
}
