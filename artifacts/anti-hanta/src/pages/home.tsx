import { Particles } from "@/components/Particles";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Origin } from "@/components/Origin";
import { Features } from "@/components/Features";
import { Character } from "@/components/Character";
import { Protocol } from "@/components/Protocol";
import { AppMockup } from "@/components/AppMockup";
import { Resistance } from "@/components/Resistance";
import { Token } from "@/components/Token";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";

export function Home() {
  return (
    <div className="min-h-screen bg-black text-foreground selection:bg-primary selection:text-black overflow-x-hidden font-sans">
      <Particles />
      <Navbar />
      
      <main className="relative w-full">
        <Hero />
        <Origin />
        <Features />
        <Character />
        <Protocol />
        <AppMockup />
        <Resistance />
        <Token />
        <Faq />
      </main>

      <Footer />
    </div>
  );
}
