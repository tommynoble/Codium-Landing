import Image from 'next/image';
import Link from 'next/link';

const features = [
  {
    icon: "/icons/enterprise.svg",
    title: "Enterprise Plan",
    description: "Built for enterprises that need advanced features, enhanced productivity and self-hosting.",
    link: "Learn more"
  },
  {
    icon: "/icons/training.svg",
    title: "Training Data",
    description: "Our models are trained on high-quality open source code, never your private code.",
    link: "Read more"
  },
  {
    icon: "/icons/compliance.svg",
    title: "Compliance",
    description: "We take security seriously with SOC 2 Type II compliance and more.",
    link: "View details"
  },
  {
    icon: "/icons/free.svg",
    title: "How is this Free?",
    description: "We're committed to maintaining a free tier while building premium features.",
    link: "Learn why"
  },
  {
    icon: "/icons/security.svg",
    title: "Security & Privacy",
    description: "Your code stays private and secure with our enterprise-grade security.",
    link: "Read more"
  },
  {
    icon: "/icons/support.svg",
    title: "Support",
    description: "Get expert support whenever you need it with our dedicated team.",
    link: "Contact us"
  }
];

export default function FeaturesSection() {
  return (
    <section className="bg-black py-section" id="features">
      <div className="max-w-content mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-h1 font-heading mb-4">Why Choose Codeium?</h2>
          <Link
            href="/get-started"
            className="bg-accent hover:bg-accent-dark text-background px-6 py-3 rounded-full transition-colors inline-block"
          >
            Get Codeium
          </Link>
        </div>

        <div className="grid grid-cols-1 min-[540px]:grid-cols-2 min-[768px]:grid-cols-2 min-[912px]:grid-cols-2 laptop:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-primary p-6 rounded-lg hover:bg-primary/80 transition-colors group"
            >
              <div className="h-12 w-12 mb-4 flex items-center justify-center">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
              </div>
              <h3 className="text-h2 font-heading mb-2">{feature.title}</h3>
              <p className="text-text-secondary mb-4">{feature.description}</p>
              <Link
                href="#"
                className="text-accent group-hover:text-accent-dark transition-colors inline-flex items-center gap-1 hover:gap-2 duration-300"
              >
                {feature.link}
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
