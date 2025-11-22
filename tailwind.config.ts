import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // UNIVERSE 1: THE LEGEND (INVESTOR)
        senna: {
          yellow: "#FFD700", // The Helmet
          green: "#009B3A",  // Nacional
          black: "#050505",  // Void
        },
        // UNIVERSE 2: THE REALPOLITIK (FG)
        fg: {
          red: "#D90429",    // The Bleed / Urgent
          concrete: "#1b1b1b", // Asphalt
        },
        // UNIVERSE 3: THE COUSIN (MORGANA)
        morgana: {
          gold: "#D4AF37",   // Luxury
          nude: "#E6C2BF",   // Silk
          dark: "#0a0a0a",   // Carbon
        },
      },
      fontFamily: {
        hero: ["var(--font-hero)"],      // Anton (Impact)
        narrative: ["var(--font-narrative)"], // Merriweather (Story)
        sans: ["var(--font-sans)"],      // Montserrat (Modern)
        tech: ["var(--font-tech)"],      // Roboto Mono (Data)
      },
      backgroundImage: {
        'radial-white': 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
        'radial-gold': 'radial-gradient(circle at 80% 20%, rgba(212,175,55,0.15), transparent 50%)',
      },
    },
  },
  plugins: [],
};
export default config;