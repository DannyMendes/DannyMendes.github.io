export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export function timeAgo(dateStr: string) {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days === 0) return "hoje";
  if (days === 1) return "ontem";
  if (days < 30) return `${days} dias atrás`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months} mês${months > 1 ? "es" : ""} atrás`;
  const years = Math.floor(months / 12);
  return `${years} ano${years > 1 ? "s" : ""} atrás`;
}
