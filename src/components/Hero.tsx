import { useCursorSpotlight } from '@/hooks/useCursorSpotlight';

export function Hero() {
  const onMouseMove = useCursorSpotlight();

  return (
    <header
      id="top"
      onMouseMove={onMouseMove}
      className="hero-spotlight relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      {/* Animated gradient mesh background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="mesh-orb animate-mesh-1"
          style={{
            top: '-10%',
            left: '10%',
            width: '50vw',
            height: '50vw',
            background: 'radial-gradient(circle, rgba(217,164,65,0.45), transparent 70%)',
          }}
        />
        <div
          className="mesh-orb animate-mesh-2"
          style={{
            top: '5%',
            right: '5%',
            width: '45vw',
            height: '45vw',
            background: 'radial-gradient(circle, rgba(47,111,98,0.35), transparent 70%)',
          }}
        />
        <div
          className="mesh-orb animate-mesh-3"
          style={{
            bottom: '-10%',
            left: '30%',
            width: '40vw',
            height: '40vw',
            background: 'radial-gradient(circle, rgba(184,92,56,0.30), transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-xs font-mono font-medium text-indigo backdrop-blur-sm">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
          </span>
          Early access opening soon
        </div>

        {/* Headline */}
        <h1 className="mt-8 font-serif text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] text-indigo tracking-tight">
          One <span className="gradient-text italic">gateway</span> for every
          <br className="hidden sm:block" /> MoTA scholarship.
        </h1>

        {/* Subhead */}
        <p className="mt-6 max-w-2xl mx-auto text-[1rem] sm:text-lg leading-relaxed text-ink">
          SANGAM replaces three disconnected government portals — NSP, SFMP, and the NOS Portal —
          with a single, intelligent platform that unifies all five Ministry of Tribal Affairs
          scholarship schemes for ST students.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#signup"
            className="btn-primary inline-flex items-center rounded-full bg-amber px-7 py-3.5 text-sm font-semibold text-indigo-dark"
          >
            <span>Join Early Access</span>
          </a>
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo underline-offset-4 hover:underline"
          >
            See how it works
            <svg className="w-4 h-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        </div>

        {/* Stat row */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
          <StatItem value="5" label="Schemes unified" />
          <div className="hidden sm:block w-px h-12 bg-border" />
          <StatItem value="3" label="Portals replaced" />
          <div className="hidden sm:block w-px h-12 bg-border" />
          <StatItem value="7+" label="Systems verified" />
        </div>
      </div>
    </header>
  );
}

function StatItem({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="font-serif text-4xl sm:text-5xl font-semibold gradient-text-amber-clay">
        {value}
      </div>
      <div className="mt-1 font-mono text-xs uppercase tracking-wider text-ink/50">
        {label}
      </div>
    </div>
  );
}
