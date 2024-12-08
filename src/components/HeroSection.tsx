import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="pt-header min-h-screen bg-background">
      <div className="max-w-content mx-auto px-4 py-section">
        <div className="text-center mb-12 mobileL:mb-16 laptop:mb-20">
          <h1 className="text-hero-lg font-inter mb-4 mobileL:mb-6">
            Introducing the Windsurf Editor
          </h1>
          <p className="text-text-secondary text-h2 max-w-2xl mx-auto mb-6 mobileL:mb-8 px-4 font-inter">
            The best platform that lets AI be your AI coding buddy
          </p>
          <div className="flex flex-col mobileL:flex-row gap-4 justify-center items-center">
            <Link
              href="/get-started"
              className="w-full mobileL:w-auto bg-accent hover:bg-accent-dark text-background px-6 py-3 rounded-full transition-colors font-semibold text-body"
            >
              Get Started Free
            </Link>
            <Link
              href="#features"
              className="w-full mobileL:w-auto border border-text-secondary/20 hover:bg-primary text-text-primary px-6 py-3 rounded-full transition-colors text-body"
            >
              Explore Features
            </Link>
          </div>
        </div>
        
        <div className="relative w-full aspect-video max-w-5xl mx-auto rounded-lg overflow-hidden border border-text-secondary/20 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20"></div>
          <Image
            src="/editor-preview.png"
            alt="Windsurf Editor Interface"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="mt-12 mobileL:mt-16 laptop:mt-20 text-center">
          <p className="text-text-secondary mb-6 mobileL:mb-8 text-body">
            Codebase assistance are loved by millions of developers
          </p>
          <div className="grid grid-cols-1 mobileL:grid-cols-3 gap-6 mobileL:gap-12 items-center max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <span className="text-h1 font-bold text-text-primary mb-2">51.5 TFLOPS</span>
              <span className="text-small text-text-secondary">AI Processing Power</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-h1 font-bold text-text-primary mb-2">0.2s Latency</span>
              <span className="text-small text-text-secondary">Response Time</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-h1 font-bold text-text-primary mb-2">24.3M</span>
              <span className="text-small text-text-secondary">Daily Requests</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
