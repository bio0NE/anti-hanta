import { SiTelegram, SiX } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-primary/30 pt-20 pb-10 px-6 relative z-20 overflow-hidden">

      {/* Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 blur-[140px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* TOP */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mb-16">

          {/* Logo */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">

            <div className="flex items-center gap-4 mb-4">

              {/* Coin Logo */}
              <img
                src="/images/coin.png"
                alt="ANTI HANTA"
                className="w-16 h-16 object-contain drop-shadow-[0_0_18px_rgba(0,255,65,0.6)]"
              />

              <div>
                <h2 className="font-['Bebas_Neue'] text-white text-5xl leading-none tracking-wider">
                  ANTI HANTA
                </h2>

                <p className="text-primary font-mono tracking-[0.3em] text-[11px] mt-1">
                  THE IMMUNE VACCINE OF HANTA
                </p>
              </div>

            </div>

            <p className="max-w-md text-white/50 text-sm leading-relaxed">
              The resistance against the infection has begun.
              Powered by memes. Protected by the community.
              Built on Ethereum.
            </p>

          </div>

          {/* Socials */}
          <div className="flex items-center gap-5">

            {/* Telegram */}
            <a
              href="https://t.me/AntiHanta_eth"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-14
                h-14
                rounded-full
                border
                border-primary/30
                flex
                items-center
                justify-center
                text-white/70
                hover:text-black
                hover:bg-primary
                hover:border-primary
                transition-all
                duration-300
                hover:scale-110
              "
              style={{
                boxShadow:
                  "0 0 0 rgba(0,255,65,0)",
              }}
            >
              <SiTelegram className="w-6 h-6" />
            </a>

            {/* X */}
            <a
              href="https://x.com/AntiHanta_eth"
              target="_blank"
              rel="noopener noreferrer"
              className="
                w-14
                h-14
                rounded-full
                border
                border-primary/30
                flex
                items-center
                justify-center
                text-white/70
                hover:text-black
                hover:bg-primary
                hover:border-primary
                transition-all
                duration-300
                hover:scale-110
              "
            >
              <SiX className="w-6 h-6" />
            </a>

          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-xs font-mono text-white/40 tracking-wider text-center md:text-left">
            © {new Date().getFullYear()} ANTI HANTA — ALL RIGHTS RESERVED
          </p>

          <div className="flex items-center gap-6 text-xs font-mono tracking-wider">

            <a
              href="/AntiHanta_ANHA_Whitepaper_v1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-primary transition-colors"
            >
              WHITEPAPER
            </a>

            <a
              href="#"
              className="text-white/40 hover:text-primary transition-colors"
            >
              TERMS
            </a>

            <a
              href="#"
              className="text-white/40 hover:text-primary transition-colors"
            >
              PRIVACY
            </a>

          </div>

        </div>
      </div>
    </footer>
  );
}