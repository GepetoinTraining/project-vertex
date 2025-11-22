import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    // This catches everything in the app router
    "./app/**/*.{js,ts,jsx,tsx,mdx}", 
    // This catches your components folder
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // This catches any root pages (if you still have the /pages directory)
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    // SAFETY NET: If you have source folder
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
        hero: ["var(--font-hero)", "sans-serif"],
        narrative: ["var(--font-narrative)", "serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        tech: ["var(--font-tech)", "monospace"],
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