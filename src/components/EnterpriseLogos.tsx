import Image from 'next/image';

export default function EnterpriseLogos() {
  const logos = [
    { src: '/logos/andrill.svg', alt: 'Andrill Logo', width: 120 },
    { src: '/logos/morgan-stanley.svg', alt: 'Morgan Stanley Logo', width: 150 },
    { src: '/logos/vector.svg', alt: 'Vector Logo', width: 120 },
    { src: '/logos/dell.svg', alt: 'Dell Logo', width: 80 },
    { src: '/logos/rockwell.svg', alt: 'Rockwell Logo', width: 140 },
    { src: '/logos/zillow.svg', alt: 'Zillow Logo', width: 100 },
  ];

  return (
    <section className="bg-background py-16">
      <div className="max-w-content mx-auto px-4">
        <h2 className="text-center text-text-secondary mb-12 text-body">
          Codeium lets the world's leading enterprises dream bigger
        </h2>
        <div className="grid grid-cols-2 mobileL:grid-cols-3 laptop:grid-cols-6 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <div key={index} className="w-full flex justify-center items-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={35}
                className="opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
