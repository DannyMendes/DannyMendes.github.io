import { GraduationCap, Code, BookOpen, Layers, MonitorSmartphone } from "lucide-react";
import type { ElementType } from "react";
import newtonPaivaLogo from "../../imports/newton-icon.webp";
import iefpLogo from "../../imports/iefp-icone.png";
import unigranLogo from "../../imports/unigran-logo.jpeg";
import logo42 from "../../imports/42-icone.png";
import pitagorasLogo from "../../imports/pitagoras-icone.png";
import designLogo from "../../imports/design-logo.png";

export type Certification = {
  name: string;
  issuer: string;
  icon: ElementType;
  logo?: string;
};

export type InProgressCourse = {
  name: string;
  icon: ElementType;
};

export const certifications: Certification[] = [
  { name: "Graduação em Engenharia de Software", issuer: "Unigran", icon: GraduationCap, logo: unigranLogo },
  { name: "Técnico de Informática", issuer: "Newton Paiva - Brasil", icon: GraduationCap, logo: newtonPaivaLogo },
  { name: "Bootcamp Piscine na 42Heilbronn (Alemanha)", issuer: "Programação em C", icon: Code, logo: logo42 },
  { name: "Programação Java", issuer: "IEFP - Portugal", icon: Code, logo: iefpLogo },
  { name: "2 Semestre de Gestão", issuer: "Pitagoras - Brasil", icon: BookOpen, logo: pitagorasLogo },
  { name: "Curso Web com WordPress", issuer: "Portugal", icon: Layers, logo: iefpLogo },
  { name: "Curso Design Gráfico e Experiência do Usuário", issuer: "Online", icon: MonitorSmartphone, logo: designLogo },
];

export const inProgressCourses: InProgressCourse[] = [
  { name: "Arquitetura de Software", icon: Layers },
  { name: "Framework Web", icon: Code },
  { name: "IA Aplicada na Programação", icon: MonitorSmartphone },
];
