import { useState, type FormEvent } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { supabase } from '@/lib/supabase';
import { Loader2, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

type Status = 'idle' | 'loading' | 'success' | 'error' | 'duplicate';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Signup() {
  const ref = useScrollReveal<HTMLDivElement>();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();

    if (!EMAIL_REGEX.test(trimmed)) {
      setStatus('error');
      setMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setMessage('');

    try {
      // Try the Express/MongoDB backend first (configured for Replit deployment)
      const backendUrl = import.meta.env.VITE_BACKEND_URL;
      if (backendUrl) {
        const res = await fetch(`${backendUrl}/api/signup`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: trimmed }),
        });
        const data = await res.json();
        if (res.status === 409) {
          setStatus('duplicate');
          setMessage("You're already on the list!");
        } else if (!res.ok) {
          throw new Error(data.error || 'Something went wrong');
        } else {
          setStatus('success');
          setMessage("You're on the list! We'll notify you when SANGAM launches.");
          setEmail('');
        }
      } else {
        throw new Error('No backend URL configured');
      }
    } catch {
      // Fallback: save directly to Supabase (works in preview without backend)
      try {
        const { error: insertError } = await supabase
          .from('signups')
          .insert({ email: trimmed, source: 'landing_page' });

        if (insertError) {
          if (insertError.code === '23505') {
            setStatus('duplicate');
            setMessage("You're already on the list!");
          } else {
            throw insertError;
          }
        } else {
          setStatus('success');
          setMessage("You're on the list! We'll notify you when SANGAM launches.");
          setEmail('');
        }
      } catch {
        setStatus('error');
        setMessage('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <section
      id="signup"
      className="bg-indigo-dark relative overflow-hidden py-section px-5 sm:px-8"
      aria-label="Early access signup"
    >
      {/* Soft radial glow behind card */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[60%] w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(217,164,65,0.15), transparent 70%)',
          filter: 'blur(60px)',
        }}
        aria-hidden="true"
      />

      <div ref={ref} className="reveal relative z-10 max-w-lg mx-auto">
        <div className="glass-card rounded-3xl p-8 sm:p-10">
          <div className="text-center">
            <p className="font-mono text-xs uppercase tracking-widest text-amber/80">
              Early Access
            </p>
            <h2 className="mt-3 font-serif text-2xl sm:text-3xl font-semibold text-base leading-tight">
              Be first through the <span className="gradient-text italic">gateway</span>.
            </h2>
            <p className="mt-3 text-sm text-base/60 leading-relaxed">
              Join the early-access list. We'll notify you the moment SANGAM opens.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-4" noValidate>
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status === 'error' || status === 'duplicate') {
                    setStatus('idle');
                    setMessage('');
                  }
                }}
                disabled={status === 'loading' || status === 'success'}
                className="w-full rounded-full border border-white/15 bg-white/8 px-6 py-3.5 text-sm text-base placeholder:text-base/30 focus:border-amber/50 focus:outline-none focus:ring-2 focus:ring-amber/30 transition-colors disabled:opacity-50"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="btn-primary w-full inline-flex items-center justify-center gap-2 rounded-full bg-amber px-6 py-3.5 text-sm font-semibold text-indigo-dark disabled:opacity-70"
            >
              {status === 'loading' && (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Joining…</span>
                </>
              )}
              {status === 'success' && (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Joined!</span>
                </>
              )}
              {(status === 'idle' || status === 'error' || status === 'duplicate') && (
                <>
                  <span>Join Early Access</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Status messages */}
          {(status === 'success' || status === 'duplicate' || status === 'error') && (
            <div
              className={`mt-5 flex items-start gap-2.5 rounded-xl px-4 py-3 text-sm ${
                status === 'success'
                  ? 'bg-teal/15 text-teal border border-teal/20'
                  : status === 'duplicate'
                  ? 'bg-amber/15 text-amber border border-amber/20'
                  : 'bg-clay/15 text-clay border border-clay/20'
              }`}
              role={status === 'error' ? 'alert' : 'status'}
            >
              {status === 'success' && <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />}
              {status === 'duplicate' && <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />}
              {status === 'error' && <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />}
              <span>{message}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
