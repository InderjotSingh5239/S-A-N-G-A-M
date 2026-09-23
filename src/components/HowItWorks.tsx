import { useStaggeredReveal } from '@/hooks/useScrollReveal';
import { FileText, Eye, Activity, BellRing } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: 'Link documents via DigiLocker',
    description: 'Connect your DigiLocker account once. Identity, caste, income, and academic certificates are pulled in and verified automatically.',
  },
  {
    icon: Eye,
    title: 'See every eligible scheme in one view',
    description: 'SANGAM runs a unified eligibility check across all five MoTA schemes — you see everything you qualify for on a single screen.',
  },
  {
    icon: Activity,
    title: 'Apply and track status in real time',
    description: 'Submit applications with pre-filled data and reusable documents. Watch each one move through Verification → Sanction → Disbursement.',
  },
  {
    icon: BellRing,
    title: 'Get JAGO alerts when action is needed',
    description: 'The JAGO chatbot proactively notifies you about milestones, pending deficiencies, and disbursement updates — in your language.',
  },
];

export function HowItWorks() {
  const ref = useStaggeredReveal<HTMLDivElement>(150);

  return (
    <section id="how-it-works" className="px-5 sm:px-8 py-section" aria-label="How it works">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <p className="font-mono text-xs uppercase tracking-widest text-clay">How it works</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-semibold text-indigo leading-tight">
            From scattered to seamless — in four steps.
          </h2>
        </div>

        <div ref={ref} className="relative pl-10 sm:pl-12">
          {/* Gradient connecting line */}
          <div
            className="absolute left-4 sm:left-5 top-2 bottom-2 w-0.5 timeline-line rounded-full"
            aria-hidden="true"
          />

          <ol className="space-y-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <li key={step.title} className="reveal relative">
                  {/* Numbered node */}
                  <div className="absolute -left-10 sm:-left-12 top-0 flex items-center justify-center">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-dark text-amber font-mono text-sm font-semibold border-2 border-amber/40">
                      {index + 1}
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber/15 text-clay">
                      <Icon className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-indigo">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
