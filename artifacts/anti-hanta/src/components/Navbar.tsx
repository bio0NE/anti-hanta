import { SiTelegram, SiX, SiDiscord } from "react-icons/si";
import { Link } from "wouter";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/60 backdrop-blur-md border-b border-primary/20 h-20 flex items-center justify-between px-6 md:px-12">
      <div className="flex items-center gap-3">
        <span className="text-primary text-3xl">☣</span>
        <div className="flex flex-col">
          <span className="font-['Bebas_Neue'] text-primary text-2xl tracking-wider leading-none">ANTI HANTA</span>
          <span className="text-[10px] text-muted-foreground font-bold tracking-widest leading-none">THE IMMUNE VACCINE OF HANTA</span>
        </div>
      </div>
      
      <div className="hidden lg:flex items-center gap-8">
        {["HOME", "ABOUT", "TOKEN", "ROADMAP", "APP", "COMMUNITY", "FAQ"].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-semibold text-white/80 hover:text-primary transition-colors duration-300">
            {item}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-4 text-white/60">
          <a href="#" className="hover:text-primary transition-colors"><SiTelegram className="w-5 h-5" /></a>
          <a href="#" className="hover:text-primary transition-colors"><SiX className="w-5 h-5" /></a>
          <a href="#" className="hover:text-primary transition-colors"><SiDiscord className="w-5 h-5" /></a>
        </div>
        <button className="bg-primary/10 border border-primary text-primary px-6 py-2 font-bold hover:bg-primary hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,255,65,0.3)] hover:shadow-[0_0_25px_rgba(0,255,65,0.6)]">
          BUY $ANTI
        </button>
      </div>
    </nav>
  );
}
