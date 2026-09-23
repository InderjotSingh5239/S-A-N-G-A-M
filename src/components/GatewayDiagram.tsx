import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ArchIllustration } from './GatewayLogo';
import { ArrowRight } from 'lucide-react';

export function GatewayDiagram() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="px-5 sm:px-8 py-section" aria-label="Portal consolidation overview">
      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-widest text-clay">
          The Solution
        </p>
        <div
          ref={ref}
          className="reveal mt-6 rounded-3xl bg-indigo-dark p-8 sm:p-12 relative overflow-hidden"
        >
        {/* Decorative arch */}
        <div
          className="absolute right-0 top-0 w-48 h-40 text-amber/20 pointer-events-none"
          aria-hidden="true"
        >
          <ArchIllustration className="w-full h-full" />
        </div>

        <div className="relative z-10">
          <p className="font-mono text-xs uppercase tracking-widest text-amber/80">
            The Consolidation
          </p>

          {/* Flow */}
          <div className="mt-8 flex flex-col lg:flex-row items-stretch gap-6">
            {/* Old portals */}
            <div className="flex-1 space-y-3">
              <p className="font-mono text-xs uppercase tracking-wider text-white/40">
                Today — 3 separate portals
              </p>
              {['NSP', 'SFMP · Canara Bank', 'NOS Portal'].map((name) => (
                <div
                  key={name}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/70 font-medium"
                >
                  {name}
                </div>
              ))}
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center text-amber/60">
              <ArrowRight className="w-6 h-6 lg:rotate-0 rotate-90" />
            </div>

            {/* SANGAM layer */}
            <div className="flex-1 flex flex-col">
              <p className="font-mono text-xs uppercase tracking-wider text-white/40">
                Unified layer
              </p>
              <div className="mt-3 flex-1 rounded-xl border border-amber/30 bg-gradient-to-br from-amber/15 to-teal/10 px-4 py-6 flex flex-col items-center justify-center gap-2">
                <span className="font-serif text-xl font-semibold text-amber">SANGAM</span>
                <span className="text-xs text-white/60 text-center leading-relaxed">
                  Unified verification, eligibility, and tracking across all five schemes
                </span>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex items-center justify-center text-amber/60">
              <ArrowRight className="w-6 h-6 lg:rotate-0 rotate-90" />
            </div>

            {/* Output */}
            <div className="flex-1 space-y-3">
              <p className="font-mono text-xs uppercase tracking-wider text-white/40">
                One experience
              </p>
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/80 font-medium">
                Dashboard
                <p className="text-xs font-normal text-white/50 mt-1">
                  Track every scheme in one screen
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/80 font-medium">
                JAGO Chatbot
                <p className="text-xs font-normal text-white/50 mt-1">
                  Multilingual student assistant
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
