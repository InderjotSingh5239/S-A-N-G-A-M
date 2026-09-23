import { useStaggeredReveal } from '@/hooks/useScrollReveal';
import {
  LayoutDashboard,
  Bot,
  ShieldCheck,
  Radar,
  Wallet,
  type LucideIcon,
} from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  tag: string;
  title: string;
  description: string;
  size: 'large' | 'wide' | 'medium';
}

const features: Feature[] = [
  {
    icon: LayoutDashboard,
    tag: 'Module 4.1',
    title: 'Unified Scholarship Dashboard',
    description:
      'Track every application through Submitted → Verification → Sanction → Disbursement in a single screen. DBT status, pending actions, and flagged deficiencies are surfaced upfront — so students always know what needs attention.',
    size: 'large',
  },
  {
    icon: Bot,
    tag: 'Module 4.2',
    title: 'JAGO Chatbot',
    description:
      'A multilingual, student-specific assistant that answers eligibility, status, and deficiency questions in plain language — and sends proactive alerts when a milestone is reached or action is needed.',
    size: 'large',
  },
  {
    icon: ShieldCheck,
    tag: 'Module 4.3',
    title: 'Unified Verification & Integration Layer',
    description:
      'Automated checks on identity, ST/PVTG certificates, income, academic records, NET/JRF qualification, and disability certificates. Mismatches route to manual review — applications are never blocked. The verification pipeline runs silently in the background across every integrated system.',
    size: 'wide',
  },
  {
    icon: Radar,
    tag: 'Module 4.4',
    title: 'Coverage Gap Detection',
    description:
      "Matches UDISE+/APAAR/OTR records against scholarship data to find enrolled-but-unclaimed students — enabling targeted MoTA outreach to those who are eligible but haven't applied.",
    size: 'medium',
  },
  {
    icon: Wallet,
    tag: 'Module 4.1',
    title: 'Digital Document Wallet',
    description:
      'DigiLocker-linked. Submit documents once and reuse them across every scheme application — no re-uploading the same caste certificate year after year.',
    size: 'medium',
  },
];

export function BentoFeatures() {
  const ref = useStaggeredReveal<HTMLDivElement>(120);

  return (
    <section id="features" className="px-5 sm:px-8 py-section" aria-label="Features">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-clay">Features</p>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl font-semibold text-indigo leading-tight">
            Everything the three portals should have been.
          </h2>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  const { icon: Icon, tag, title, description, size } = feature;

  const sizeClasses: Record<Feature['size'], string> = {
    large: 'lg:col-span-2 lg:row-span-2',
    wide: 'lg:col-span-4',
    medium: 'lg:col-span-2',
  };

  const isLarge = size === 'large';

  return (
    <article
      className={`reveal bento-card rounded-2xl border border-border bg-card p-7 flex flex-col ${
        sizeClasses[size]
      } ${isLarge ? 'min-h-[280px]' : ''}`}
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo/10 text-indigo">
        <Icon className="w-5 h-5" />
      </span>

      <h3
        className={`mt-5 font-serif font-semibold text-indigo ${
          isLarge ? 'text-2xl' : 'text-xl'
        }`}
      >
        {title}
      </h3>
      <p
        className={`mt-3 text-sm leading-relaxed text-ink ${
          isLarge ? 'max-w-md' : ''
        }`}
      >
        {description}
      </p>
      <span className="mt-auto pt-4 self-start font-mono text-[11px] uppercase tracking-wider text-teal bg-teal/8 px-2.5 py-1 rounded-full">
        {tag}
      </span>
    </article>
  );
}
