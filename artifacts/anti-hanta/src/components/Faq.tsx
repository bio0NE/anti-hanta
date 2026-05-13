import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const faqs = [
  {
    q: "What is ANTI HANTA?",
    a: "ANTI HANTA is a community-driven survival token built as a counter-movement to the viral meme coin outbreaks. It represents immunity, resilience, and tactical on-chain warfare."
  },
  {
    q: "How do I buy $ANHA?",
    a: "You can acquire $ANHA through Uniswap or other decentralized exchanges on the Ethereum network. Simply connect your wallet, ensure you have ETH, and swap for $ANHA."
  },
  {
    q: "What blockchain is it on?",
    a: "ANTI HANTA is deployed on the Ethereum (ERC-20) blockchain, utilizing its battle-tested security and deep liquidity trenches."
  },
  {
    q: "What is the total supply?",
    a: "The total supply is strictly capped. No more serum can be minted. Check our tokenomics documentation for the exact distribution breakdown."
  },
  {
    q: "Is there a roadmap?",
    a: "Yes. The Immune Protocol is rolling out in phases: Outbreak (Launch), Contagion Control (Marketing & CEX listings), and Global Immunity (App utility and ecosystem expansion)."
  },
  {
    q: "How can I join the community?",
    a: "Join our Telegram barracks and Discord command center. The links are available in the navigation bar and at the bottom of this page."
  }
];

export function Faq() {
  return (
    <section id="faq" className="py-32 px-6 relative z-20 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-['Bebas_Neue'] text-6xl md:text-8xl text-white drop-shadow-[0_0_15px_rgba(0,255,65,0.4)]">
            LAB <span className="text-primary">FAQ</span>
          </h2>
          <p className="text-primary font-mono tracking-widest mt-2 font-bold">DECRYPTED INTEL</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem 
              key={i} 
              value={`item-${i}`}
              className="border border-primary/20 bg-card/40 backdrop-blur-md rounded-lg px-6 hover:border-primary/50 transition-colors data-[state=open]:border-primary data-[state=open]:shadow-[0_0_20px_rgba(0,255,65,0.15)]"
            >
              <AccordionTrigger className="text-left text-lg font-bold text-white hover:text-primary hover:no-underline py-6">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-white/70 text-base leading-relaxed pb-6">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
