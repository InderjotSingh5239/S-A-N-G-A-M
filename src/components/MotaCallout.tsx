import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Building2 } from 'lucide-react';

export function MotaCallout() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="px-5 sm:px-8 py-section" aria-label="Built for MoTA">
      <div
        ref={ref}
        className="reveal max-w-4xl mx-auto rounded-3xl border-2 border-border border-t-[3px] border-t-teal bg-card p-8 sm:p-12 text-center"
      >
        <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo/10 text-indigo">
          <Building2 className="w-7 h-7" />
        </span>
        <h2 className="mt-6 font-serif text-2xl sm:text-3xl font-semibold text-indigo leading-tight">
          Built for the Ministry of Tribal Affairs.
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-[1rem] text-ink leading-relaxed">
          SANGAM is designed as the single front-end for MoTA's scholarship ecosystem —
          consolidating NSP, SFMP, and the NOS Portal into one platform that serves students,
          verifying officers, and administrators alike. Coverage Gap Detection gives MoTA the
          tools to proactively reach eligible students who've fallen through the cracks.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {['Student-first', 'Admin-ready', 'DigiLocker-native', 'DBT-aware'].map((label) => (
            <span
              key={label}
              className="font-mono text-xs uppercase tracking-wider text-teal bg-teal/8 px-3 py-1.5 rounded-full"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
