'use client'
import { motion } from 'framer-motion'
import CraftPrompt from '@/components/CraftPrompt'

export default function MorganaDeck() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] font-sans selection:bg-[#D4AF37] selection:text-black">
      
      {/* HERO */}
      <section className="relative h-screen flex flex-col justify-center px-12 md:px-24 bg-[radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.15),transparent_50%)]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-[#D4AF37] tracking-[0.2em] text-xs uppercase mb-6 block font-bold">
            Confidential Briefing // M.L.B.
          </span>
          <h1 className="font-serif text-6xl md:text-8xl mb-8 leading-[0.9]">
            The Convergence of <br />
            <span className="italic text-[#D4AF37]">Verticality</span> & <span className="italic text-[#e5dada]">Legacy</span>.
          </h1>
          <p className="text-gray-400 max-w-xl text-lg border-l-2 border-[#D4AF37] pl-6">
            Morgana, you understand that true value isn't just fabric—it's identity. 
            FG is building the world's tallest tower. We have the mechanism to take it global.
          </p>
        </motion.div>
      </section>

      {/* THE CONCEPT SPLIT */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
        <div className="bg-[#111] relative overflow-hidden">
             {/* PLACEHOLDER FOR STATIC IMAGE OR VIDEO LOOP */}
             <div className="absolute inset-0 bg-cover bg-center opacity-60" style={{backgroundImage: "url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab')"}}></div>
             <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="flex flex-col justify-center p-12 md:p-24 bg-[#050505]">
          <span className="text-[#D4AF37] tracking-widest text-xs mb-4">THE ASSET</span>
          <h2 className="font-serif text-4xl mb-6">Project Vertex</h2>
          <p className="text-gray-500 mb-8">
            Rising 544 meters. A technological fortress. But the local market cannot absorb 150 floors at R$ 32M. 
            The solution is not to lower the price, but to slice the key.
          </p>
          <div className="grid grid-cols-2 gap-8">
             <div><h4 className="font-serif text-3xl">500m+</h4><span className="text-xs text-gray-600 uppercase">Height</span></div>
             <div><h4 className="font-serif text-3xl">USD 900k</h4><span className="text-xs text-gray-600 uppercase">Entry</span></div>
          </div>
        </div>
      </section>

      {/* THE PROMPT COMPONENT */}
      <section className="py-24 px-6 bg-[#0f0f0f] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
           <CraftPrompt mode="morgana" />
        </div>
      </section>
    </main>
  )
}