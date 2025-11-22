'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import CraftPrompt from '@/components/CraftPrompt'

// REPLACE WITH YOUR VERCEL BLOB URL
const VIDEO_HERO = "https://public.blob.vercel-storage.com/senna-tower-clouds-render.mp4"

export default function InvestorDeck() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: targetRef })
  
  // Parallax effect: Video moves slower than scroll to create depth
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <main className="bg-[#050505] text-white font-serif overflow-x-hidden selection:bg-[#FFD700] selection:text-black">
      
      {/* 1. HERO: VIDEO BACKGROUND (ABOVE THE CLOUDS) */}
      <section ref={targetRef} className="relative h-[120vh] flex items-center justify-center overflow-hidden">
        
        {/* PARALLAX VIDEO LAYER */}
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <video 
            src={VIDEO_HERO}
            className="w-full h-full object-cover opacity-60 grayscale scale-110" // scale-110 prevents white edges on scroll
            autoPlay 
            loop 
            muted 
            playsInline
          />
          {/* Gradient Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/20 to-[#050505]" />
        </motion.div>
        
        {/* TEXT LAYER */}
        <div className="relative z-10 text-center p-6 mt-[-20vh]">
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "1em" }} 
            animate={{ opacity: 1, letterSpacing: "0.2em" }} 
            transition={{ duration: 1.5 }}
            className="block text-[#FFD700] text-xs uppercase mb-6 font-sans font-bold tracking-[0.2em]"
          >
            The Senna Tower Collection
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.5, delay: 0.2 }}
            className="text-6xl md:text-9xl leading-none mb-6 drop-shadow-2xl"
          >
            A Seat in<br />The Gods.
          </motion.h1>
          <p className="font-sans text-gray-300 text-sm md:text-lg tracking-wide uppercase drop-shadow-lg border-l-2 border-[#FFD700] pl-4 inline-block bg-black/30 backdrop-blur-sm p-2">
            544 Meters. 10 Fractions Per Floor. Infinite Legacy.
          </p>
        </div>
      </section>

      {/* 2. THE VALUE PROPOSITION */}
      <section className="relative z-20 py-32 px-6 md:px-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          
          <div className="border-t border-white/10 pt-8 group hover:border-[#FFD700] transition-colors duration-500">
            <h3 className="text-3xl mb-4 italic text-[#FFD700]">The Asset</h3>
            <p className="font-sans text-gray-400 leading-relaxed text-sm">
              You are not buying a timeshare. You are acquiring a <strong>Deeded Property (Matrícula)</strong> in the tallest residential structure in the hemisphere. It is an engineering marvel shielded by the Senna brand.
            </p>
          </div>

          <div className="border-t border-white/10 pt-8 group hover:border-[#FFD700] transition-colors duration-500">
            <h3 className="text-3xl mb-4 italic text-[#FFD700]">The Visa</h3>
            <p className="font-sans text-gray-400 leading-relaxed text-sm">
              Your investment of USD ~900k instantly qualifies you for the <strong>Brazilian Investor Visa</strong>. Secure a "Plan B" residency in South America's safest luxury haven.
            </p>
          </div>

          <div className="border-t border-white/10 pt-8 group hover:border-[#FFD700] transition-colors duration-500">
            <h3 className="text-3xl mb-4 italic text-[#FFD700]">The Access</h3>
            <p className="font-sans text-gray-400 leading-relaxed text-sm">
              Ownership grants entry to the <em>Senna Global Access</em> network. Trade your view of the Atlantic for a chalet in Aspen or a villa in Tuscany via our partner collection.
            </p>
          </div>

        </div>
      </section>

      {/* 3. THE CALL TO ACTION / PROMPT */}
      <section className="h-screen flex flex-col items-center justify-center px-6 bg-[#000] relative overflow-hidden">
        {/* Subtle Ambient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.08),transparent_70%)]" />
        
        <div className="relative z-10 max-w-3xl w-full text-center">
          <h2 className="text-4xl md:text-5xl mb-8 font-hero uppercase tracking-wide">Initiate Due Diligence</h2>
          <p className="font-sans text-gray-500 mb-12 max-w-xl mx-auto">
            We invite your Family Office to verify the regulatory compliance, brand value, and residency benefits via our secure AI protocol.
          </p>
          
          <div className="bg-[#111] border border-white/10 p-1 text-left shadow-2xl transition-transform hover:scale-[1.01] duration-500">
             <div className="bg-black p-4 border-b border-white/5 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FFD700] opacity-80"/>
                <div className="w-3 h-3 rounded-full bg-gray-600 opacity-50"/>
                <div className="w-3 h-3 rounded-full bg-gray-600 opacity-50"/>
             </div>
             <div className="p-8">
                <CraftPrompt mode="investor" />
             </div>
          </div>
        </div>
      </section>

    </main>
  )
}