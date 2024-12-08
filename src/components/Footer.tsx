import Image from 'next/image';
import Link from 'next/link';

const footerLinks = {
  Products: [
    'IDE Extensions',
    'Chat',
    'Command',
    'Copilot Alternative',
    'Enterprise',
    'Language Support',
  ],
  Solutions: [
    'For Developers',
    'For Teams',
    'For Enterprise',
    'Security',
    'Pricing',
  ],
  Resources: [
    'Documentation',
    'API Reference',
    'Community',
    'GitHub',
    'Discord',
    'Twitter',
  ],
  Company: [
    'About',
    'Blog',
    'Careers',
    'Press',
    'Contact',
  ],
  Legal: [
    'Privacy',
    'Terms',
    'Security',
    'Status',
    'Cookies',
  ],
};

const socialLinks = [
  { href: '#', icon: '/social/github.svg', label: 'GitHub' },
  { href: '#', icon: '/social/twitter.svg', label: 'Twitter' },
  { href: '#', icon: '/social/discord.svg', label: 'Discord' },
  { href: '#', icon: '/social/linkedin.svg', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-text-secondary/10 pt-16 pb-8">
      <div className="max-w-content mx-auto px-4">
        <div className="grid grid-cols-2 mobileL:grid-cols-3 laptop:grid-cols-5 gap-8 mb-16">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-text-primary font-semibold mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-text-secondary hover:text-text-primary transition-colors text-small"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col mobileL:flex-row justify-between items-center pt-8 border-t border-text-secondary/10">
          <div className="flex items-center gap-4 mb-4 mobileL:mb-0">
            <Image
              src="/logo.svg"
              alt="Codeium Logo"
              width={100}
              height={28}
              className="dark:invert"
            />
            <span className="text-text-secondary text-small">
              © {new Date().getFullYear()} Codeium. All rights reserved.
            </span>
          </div>

          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-text-secondary hover:text-text-primary transition-colors"
                aria-label={link.label}
              >
                <Image
                  src={link.icon}
                  alt={`${link.label} icon`}
                  width={20}
                  height={20}
                  className="dark:invert"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
