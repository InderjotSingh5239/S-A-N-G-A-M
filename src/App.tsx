import { Nav } from '@/components/Nav';
import { Hero } from '@/components/Hero';
import { GatewayDiagram } from '@/components/GatewayDiagram';
import { Problem } from '@/components/Problem';
import { BentoFeatures } from '@/components/BentoFeatures';
import { HowItWorks } from '@/components/HowItWorks';
import { Verification } from '@/components/Verification';
import { MotaCallout } from '@/components/MotaCallout';
import { Signup } from '@/components/Signup';
import { Footer } from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-base text-ink antialiased">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <GatewayDiagram />
        <BentoFeatures />
        <HowItWorks />
        <Verification />
        <MotaCallout />
        <Signup />
      </main>
      <Footer />
    </div>
  );
}

export default App;
