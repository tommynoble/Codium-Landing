import Image from 'next/image';
import TestimonialsSection from './TestimonialsSection';

const ComparisonData = [
  {
    feature: "Free Plan",
    icon: "/icons/free.svg",
    codeium: "Free Forever",
    copilot: "$10/month",
    hasLink: true
  },
  {
    feature: "Enterprise Support",
    icon: "/icons/enterprise.svg",
    codeium: true,
    copilot: false,
    isCheck: true
  },
  {
    feature: "Security & Compliance",
    icon: "/icons/security.svg",
    codeium: true,
    copilot: false,
    isCheck: true
  },
  {
    feature: "Training on Private Code",
    icon: "/icons/training.svg",
    codeium: true,
    copilot: false,
    isCheck: true
  },
  {
    feature: "Customer Support",
    icon: "/icons/support.svg",
    codeium: "24/7 Support",
    copilot: "Limited",
    hasLink: false
  },
  {
    feature: "Marketplace Rating",
    icon: "/icons/star.svg",
    codeium: "★★★★★",
    copilot: "★★★★☆",
    hasLink: true
  }
];

export default function ComparisonSection() {
  return (
    <section className="bg-[#1C1E21] py-12 tabletM:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8 tabletM:mb-16">
          <h2 className="text-3xl tabletM:text-4xl font-bold text-gray-200 mb-3 tabletM:mb-4">
            Why Choose Codeium?
          </h2>
          <p className="text-gray-400 text-base tabletM:text-lg max-w-2xl mx-auto">
            See how Codeium outperforms GitHub Copilot in features, pricing, and enterprise-ready capabilities
          </p>
        </div>

        <div className="bg-[#24262A] rounded-xl tabletM:rounded-2xl overflow-hidden shadow-xl">
          {/* Header */}
          <div className="grid grid-cols-[1.5fr,1fr,1fr] tabletM:grid-cols-[2fr,1fr,1fr] bg-[#2C2E32] p-4 tabletM:p-6 border-b border-gray-700">
            <div className="text-gray-400 font-medium text-sm tabletM:text-base">Features</div>
            <div className="flex items-center justify-center gap-2 tabletM:gap-3">
              <div className="w-8 h-8 tabletM:w-10 tabletM:h-10 rounded-lg overflow-hidden bg-[#1C1E21] flex items-center justify-center">
                <Image 
                  src="/codeium-logo.svg" 
                  alt="Codeium" 
                  width={32} 
                  height={32}
                  className="w-6 h-6 tabletM:w-8 tabletM:h-8" 
                />
              </div>
              <span className="text-gray-200 font-semibold text-sm tabletM:text-base">Codeium</span>
            </div>
            <div className="flex items-center justify-center gap-2 tabletM:gap-3">
              <div className="w-8 h-8 tabletM:w-10 tabletM:h-10 rounded-lg overflow-hidden bg-[#1C1E21] flex items-center justify-center">
                <Image 
                  src="/copilot-logo.svg" 
                  alt="GitHub Copilot" 
                  width={32} 
                  height={32}
                  className="w-6 h-6 tabletM:w-8 tabletM:h-8" 
                />
              </div>
              <span className="text-gray-200 font-semibold text-sm tabletM:text-base">GitHub Copilot</span>
            </div>
          </div>

          {/* Comparison rows */}
          <div className="divide-y divide-gray-700">
            {ComparisonData.map((item, index) => (
              <div 
                key={index}
                className="grid grid-cols-[1.5fr,1fr,1fr] tabletM:grid-cols-[2fr,1fr,1fr] items-center hover:bg-[#2C2E32] transition-colors"
              >
                <div className="p-4 tabletM:p-6 flex items-center gap-3 tabletM:gap-4">
                  <div className="w-8 h-8 tabletM:w-10 tabletM:h-10 rounded-lg bg-[#1C1E21] p-1.5 tabletM:p-2 flex items-center justify-center">
                    <Image
                      src={item.icon}
                      alt={item.feature}
                      width={24}
                      height={24}
                      className="w-5 h-5 tabletM:w-6 tabletM:h-6 text-gray-200"
                    />
                  </div>
                  <div>
                    <span className="text-gray-200 font-medium text-sm tabletM:text-base">{item.feature}</span>
                    {item.hasLink && (
                      <a 
                        href="#" 
                        className="ml-1.5 tabletM:ml-2 text-blue-400 hover:text-blue-300 inline-flex items-center"
                      >
                        <svg className="w-3.5 h-3.5 tabletM:w-4 tabletM:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
                <div className="p-4 tabletM:p-6 text-center">
                  {typeof item.codeium === 'boolean' ? (
                    <div className={`inline-flex items-center justify-center w-7 h-7 tabletM:w-8 tabletM:h-8 rounded-lg ${item.codeium ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                      {item.codeium ? (
                        <svg className="w-4 h-4 tabletM:w-5 tabletM:h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 tabletM:w-5 tabletM:h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                    </div>
                  ) : (
                    <span className={`text-base tabletM:text-lg font-medium ${item.codeium.includes('★') ? 'text-yellow-400' : 'text-gray-200'}`}>
                      {item.codeium}
                    </span>
                  )}
                </div>
                <div className="p-4 tabletM:p-6 text-center">
                  {typeof item.copilot === 'boolean' ? (
                    <div className={`inline-flex items-center justify-center w-7 h-7 tabletM:w-8 tabletM:h-8 rounded-lg ${item.copilot ? 'bg-green-500/20' : 'bg-red-500/20'}`}>
                      {item.copilot ? (
                        <svg className="w-4 h-4 tabletM:w-5 tabletM:h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 tabletM:w-5 tabletM:h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      )}
                    </div>
                  ) : (
                    <span className={`text-base tabletM:text-lg font-medium ${item.copilot.includes('★') ? 'text-yellow-400' : 'text-gray-200'}`}>
                      {item.copilot}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <TestimonialsSection />
    </section>
  );
}
