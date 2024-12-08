import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'mobileSm': '360px',    // Samsung Galaxy S20
      'mobileM': '375px',     // iPhone SE
      'mobileL': '390px',     // iPhone 12/13/14
      'mobileXL': '414px',    // iPhone XR/11
      'tabletSm': '712px',    // Samsung Tablets
      'tabletM': '768px',     // iPad Mini
      'tabletL': '820px',     // iPad Air
      'laptop': '1024px',     // Small laptops
      'desktop': '1366px',    // Large laptops
      'desktopL': '1920px',   // Large displays
    },
    extend: {
      colors: {
        primary: '#1a1a1a',
        accent: '#00D1B2',
        'accent-dark': '#00A29D',
        background: '#000000',
        text: {
          primary: '#FFFFFF',
          secondary: '#A0AEC0',
        }
      },
      fontFamily: {
        heading: ['"Neue Haas Grotesk Display Pro"', 'sans-serif'],
        body: ['"Neue Haas Grotesk Text Pro"', 'sans-serif'],
        inter: ['_inter_e67d44', '__inter_Fallback_e67d44', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': 'clamp(32px, 5vw, 48px)',
        'h1': 'clamp(24px, 4vw, 32px)',
        'h2': 'clamp(20px, 3vw, 24px)',
        'body': 'clamp(14px, 2vw, 16px)',
        'small': 'clamp(12px, 1.5vw, 14px)',
        'hero-lg': ['64px', {
          lineHeight: 'normal',
          letterSpacing: '-1.92px',
          fontWeight: '500'
        }],
      },
      spacing: {
        'header': '80px',
        'section': '80px',
        'content': '40px',
      },
      maxWidth: {
        'content': '1200px',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to right, #00D1B2, #00A29D)',
        'cta-gradient': 'radial-gradient(circle, #00D1B2, #00A29D)',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
