import dynamic from 'next/dynamic';
import Header from '@/components/Header';

// Dynamically import components that might cause hydration issues
const HeroSection = dynamic(() => import('@/components/HeroSection'), {
  ssr: true,
});

const ComparisonSection = dynamic(() => import('@/components/ComparisonSection'), {
  ssr: true,
});

const FeaturesSection = dynamic(() => import('@/components/FeaturesSection'), {
  ssr: true,
});

const EnterpriseLogos = dynamic(() => import('@/components/EnterpriseLogos'), {
  ssr: true,
});

const Footer = dynamic(() => import('@/components/Footer'), {
  ssr: true,
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-text-primary">
      <Header />
      <main>
        <HeroSection />
        <EnterpriseLogos />
        <ComparisonSection />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  );
}
