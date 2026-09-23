import { useScrollReveal } from '@/hooks/useScrollReveal';
import { AlertTriangle, Layers } from 'lucide-react';

export function Problem() {
  const leftRef = useScrollReveal<HTMLDivElement>();
  const rightRef = useScrollReveal<HTMLDivElement>();

  return (
    <section id="problem" className="px-5 sm:px-8 pt-section pb-0" aria-label="The problem">
      <div className="max-w-6xl mx-auto">
        <div className="reveal max-w-2xl" ref={leftRef}>
          <p className="font-mono text-xs uppercase tracking-widest text-clay">The Problem</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-semibold text-indigo leading-tight">
            Three portals. Five schemes. <span className="italic">One broken experience.</span>
          </h2>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          {/* Left: portal fragmentation */}
          <div ref={leftRef} className="reveal rounded-2xl border border-border bg-card p-8 flex flex-col">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo/10 text-indigo">
                <Layers className="w-5 h-5" />
              </span>
              <h3 className="font-serif text-xl font-semibold text-indigo">
                Fragmented across portals
              </h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink">
              Students apply to Pre-Matric and Post-Matric on NSP, disbursement flows through SFMP
              on Canara Bank's portal, and the National Overseas Scholarship lives on an entirely
              separate NOS Portal. Each has its own login, its own forms, its own status tracking —
              and none of them talk to each other.
            </p>
            <div className="mt-auto pt-6 rounded-xl border-l-4 border-clay bg-clay/8 px-4 py-4">
              <p className="text-sm text-ink/80 leading-relaxed">
                <strong className="font-semibold text-clay">For families:</strong> the same
                documents and details must be re-entered on a different portal for every child and
                every scheme — year after year.
              </p>
            </div>
          </div>

          {/* Right: one scheme at a time */}
          <div ref={rightRef} className="reveal rounded-2xl border border-border bg-card p-8 flex flex-col">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-teal/10 text-teal">
                <AlertTriangle className="w-5 h-5" />
              </span>
              <h3 className="font-serif text-xl font-semibold text-indigo">
                One scheme at a time
              </h3>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink">
              Each portal only knows about its own schemes. A student eligible for both Post-Matric
              and Top Class must discover and apply to each separately — with no system checking
              whether they might also qualify for the National Fellowship or NOS. Eligibility is
              siloed by design.
            </p>
            <div className="mt-auto pt-6 rounded-xl border-l-4 border-teal bg-teal/8 px-4 py-4">
              <p className="text-sm text-ink/80 leading-relaxed">
                <strong className="font-semibold text-teal">SANGAM's answer:</strong> a unified
                eligibility check that surfaces every scheme a student qualifies for — in one view,
                on one platform, in a single application.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
