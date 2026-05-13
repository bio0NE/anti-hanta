import { SiTelegram, SiX, SiDiscord } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-primary/30 pt-20 pb-10 px-6 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">
          
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-primary text-4xl">☣</span>
              <span className="font-['Bebas_Neue'] text-white text-5xl tracking-wider leading-none">ANTI HANTA</span>
            </div>
            <p className="text-primary font-mono tracking-widest text-xs font-bold">THE IMMUNE VACCINE OF HANTA</p>
          </div>

          <div className="flex gap-6">
            <a href="#" className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-white/70 hover:text-primary hover:border-primary hover:bg-primary/10 transition-all shadow-none hover:shadow-[0_0_15px_rgba(0,255,65,0.4)]">
              <SiTelegram className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center text-white/70 hover:text-primary hover:border-primary hover:bg-primary/10 transition-all shadow-none hover:shadow-[0_0_15px_rgba(0,255,65,0.4)]">
              <SiX className="w-5 h-5" />
            </a>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-mono text-white/40">
          <p>© {new Date().getFullYear()} ANTI HANTA. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors">TERMS OF SERVICE</a>
            <a href="#" className="hover:text-primary transition-colors">PRIVACY POLICY</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
