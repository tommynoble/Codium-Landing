"use client";

import Image from 'next/image';
import { useEffect, useRef } from 'react';

interface Testimonial {
  quote: string;
  author: string;
  company: string;
  logo: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Using Github Copilot these days, but Codeium seems more responsive with better suggestions.",
    author: "Engineering Team",
    company: "Microsoft",
    logo: "/logos/microsoft.svg"
  },
  {
    quote: "I am switching to Codeium for my development needs. The suggestions are spot-on and it's much faster.",
    author: "Development Team",
    company: "Amazon",
    logo: "/logos/amazon.svg"
  },
  {
    quote: "Codeium has significantly improved our productivity by 50-75%.",
    author: "Tech Team",
    company: "Meta",
    logo: "/logos/meta.svg"
  },
  {
    quote: "The AI suggestions are incredibly accurate and help us write better code faster.",
    author: "Engineering Team",
    company: "Google",
    logo: "/logos/google.svg"
  },
  {
    quote: "Codeium's enterprise features have transformed our development workflow.",
    author: "Development Team",
    company: "Netflix",
    logo: "/logos/netflix.svg"
  },
  {
    quote: "The integration with our existing tools was seamless. Great product!",
    author: "Tech Team",
    company: "Adobe",
    logo: "/logos/adobe.svg"
  },
  {
    quote: "We've seen a dramatic improvement in code quality and development speed.",
    author: "Engineering Team",
    company: "Salesforce",
    logo: "/logos/salesforce.svg"
  },
  {
    quote: "The context-aware suggestions are a game-changer for our team.",
    author: "Development Team",
    company: "Twitter",
    logo: "/logos/twitter.svg"
  }
];

export default function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Clone the testimonials for smooth infinite scroll
    const content = scrollContainer.querySelector('.scroll-content');
    if (content) {
      const clone = content.cloneNode(true) as HTMLElement;
      scrollContainer.appendChild(clone);
    }

    let animationFrameId: number;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      if (scrollContainer) {
        // Move 1 pixel every 30ms
        scrollContainer.scrollLeft = (progress / 30) % (scrollContainer.scrollWidth / 2);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <section className="bg-[#1C1E21] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-200 mb-4">
          Trusted by World-Class Engineering Teams
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto">
          See what engineering teams from the world's leading companies have to say about Codeium
        </p>
      </div>

      <div 
        ref={scrollRef}
        className="overflow-hidden whitespace-nowrap"
      >
        <div className="scroll-content inline-flex gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-[400px] bg-[#24262A] p-8 rounded-xl inline-block"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg overflow-hidden bg-white flex-shrink-0 p-2">
                  <Image
                    src={testimonial.logo}
                    alt={testimonial.company}
                    width={32}
                    height={32}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-gray-200 font-medium">{testimonial.author}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
              <blockquote className="text-gray-300 leading-relaxed whitespace-normal">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
