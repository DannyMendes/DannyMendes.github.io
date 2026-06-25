
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Skills } from "./components/Skills";
import { Certifications } from "./components/Certifications";
import { Portfolio } from "./components/Portfolio";
import { Footer } from "./components/Footer";
import { Stars } from "./components/Stars";

export default function App() {
  return (
    <div className="dark min-h-screen text-foreground overflow-x-hidden portfolio-bg">
      <Stars />

      <Header />

      <main className="relative z-10">
        <Hero />
        <Skills />
        <Certifications />
        <Portfolio />
      </main>

      <Footer />
    </div>
  );
}
