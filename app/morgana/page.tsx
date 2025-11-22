'use client'
import { motion } from 'framer-motion'
import CraftPrompt from '@/components/CraftPrompt'

// UPDATE WITH YOUR BLOB URL
const VIDEO_FLOW = "https://s8vgnbofam2djlq5.public.blob.vercel-storage.com/fg_flow.mp4" 

export default function MorganaDeck() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] font-sans selection:bg-[#D4AF37] selection:text-black text-white">
      
      {/* HERO */}
      <section className="relative h-screen flex flex-col justify-center px-12 md:px-24 bg-[radial-gradient(circle_at_80%_20%,rgba(212,175,55,0.15),transparent_50%)]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-[#D4AF37] tracking-[0.2em] text-xs uppercase mb-6 block font-bold">
            Briefing Confidencial // M.L.B.
          </span>
          <h1 className="font-serif text-5xl md:text-8xl mb-8 leading-[0.9]">
            A Convergência de <br />
            <span className="italic text-[#D4AF37]">Verticalidade</span> & <span className="italic text-[#e5dada]">Legado</span>.
          </h1>
          <p className="text-gray-400 max-w-xl text-lg border-l-2 border-[#D4AF37] pl-6">
            Morgana, você construiu uma marca entendendo que valor real não é apenas tecido — é identidade.
            A FG está construindo a torre mais alta do mundo. Nós temos o mecanismo para levá-la ao palco global.
          </p>
        </motion.div>
      </section>

      {/* THE CONCEPT SPLIT */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
        <div className="bg-[#111] relative overflow-hidden">
             <video 
               src={VIDEO_FLOW}
               className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale"
               autoPlay loop muted playsInline
             />
             <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="flex flex-col justify-center p-12 md:p-24 bg-[#050505]">
          <span className="text-[#D4AF37] tracking-widest text-xs mb-4 uppercase">O Ativo</span>
          <h2 className="font-serif text-4xl mb-6">Projeto Vertex</h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Erguendo-se a 544 metros no horizonte do Atlântico Sul. Uma fortaleza tecnológica. 
            Mas o mercado local não consegue absorver 150 andares a R$ 32M por unidade.
            A solução não é baixar o preço. É fracionar a chave.
          </p>
          <div className="grid grid-cols-2 gap-8">
             <div><h4 className="font-serif text-3xl">500m+</h4><span className="text-xs text-gray-600 uppercase">Recorde Mundial</span></div>
             <div><h4 className="font-serif text-3xl">USD 900k</h4><span className="text-xs text-gray-600 uppercase">Preço de Entrada</span></div>
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