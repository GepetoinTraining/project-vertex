
'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { Download } from 'lucide-react'
import CraftPrompt from '@/components/CraftPrompt'

// REPLACE WITH YOUR VERCEL BLOB URL
const VIDEO_HERO = "https://public.blob.vercel-storage.com/senna-tower-clouds-render.mp4"
const PDF_VIABILITY = "https://s8vgnbofam2djlq5.public.blob.vercel-storage.com/PROJECT%20VERTEX.pdf"

export default function InvestorDeck() {
  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: targetRef })
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <main className="bg-[#050505] text-white font-serif overflow-x-hidden selection:bg-[#FFD700] selection:text-black">
      
      {/* 1. HERO */}
      <section ref={targetRef} className="relative h-[120vh] flex items-center justify-center overflow-hidden">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <video 
            src={VIDEO_HERO}
            className="w-full h-full object-cover opacity-60 grayscale scale-110" 
            autoPlay loop muted playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050505]/20 to-[#050505]" />
        </motion.div>
        
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
            Um Lugar<br />No Olimpo.
          </motion.h1>
          <p className="font-sans text-gray-300 text-sm md:text-lg tracking-wide uppercase drop-shadow-lg border-l-2 border-[#FFD700] pl-4 inline-block bg-black/30 backdrop-blur-sm p-2">
            544 Metros. 10 Frações Por Andar. Legado Infinito.
          </p>
        </div>
      </section>

      {/* 2. THE VALUE PROPOSITION */}
      <section className="relative z-20 py-32 px-6 md:px-24 bg-[#0a0a0a] border-t border-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
          
          <div className="border-t border-white/10 pt-8 group hover:border-[#FFD700] transition-colors duration-500">
            <h3 className="text-3xl mb-4 italic text-[#FFD700]">O Ativo</h3>
            <p className="font-sans text-gray-400 leading-relaxed text-sm">
              Você não está comprando um timeshare. Você está adquirindo uma <strong>Escritura Pública (Matrícula)</strong> na estrutura residencial mais alta do hemisfério. Uma maravilha da engenharia blindada pela marca Senna.
            </p>
          </div>

          <div className="border-t border-white/10 pt-8 group hover:border-[#FFD700] transition-colors duration-500">
            <h3 className="text-3xl mb-4 italic text-[#FFD700]">O Visto</h3>
            <p className="font-sans text-gray-400 leading-relaxed text-sm">
              Seu investimento de ~USD 900k qualifica instantaneamente para o <strong>Visto de Investidor Brasileiro</strong>. Garanta uma residência "Plano B" no refúgio de luxo mais seguro da América do Sul.
            </p>
          </div>

          <div className="border-t border-white/10 pt-8 group hover:border-[#FFD700] transition-colors duration-500">
            <h3 className="text-3xl mb-4 italic text-[#FFD700]">O Acesso</h3>
            <p className="font-sans text-gray-400 leading-relaxed text-sm">
              A propriedade garante entrada na rede <em>Senna Global Access</em>. Troque sua vista do Atlântico por um chalé em Aspen ou uma vila na Toscana através de nossa coleção de parceiros.
            </p>
          </div>

        </div>
      </section>

      {/* 3. CALL TO ACTION */}
      <section className="h-screen flex flex-col items-center justify-center px-6 bg-[#000] relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.08),transparent_70%)]" />
        
        <div className="relative z-10 max-w-3xl w-full text-center">
          <h2 className="text-4xl md:text-5xl mb-8 font-hero uppercase tracking-wide">Iniciar Due Diligence</h2>
          <p className="font-sans text-gray-500 mb-8 max-w-xl mx-auto">
            Convidamos seu Family Office para verificar a conformidade regulatória, valor da marca e benefícios de residência.
          </p>

           <a href={PDF_VIABILITY} download className="inline-flex items-center gap-2 mb-12 px-8 py-3 border border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black transition-all uppercase font-bold text-sm tracking-widest">
               <Download size={18} />
               Baixar Investment Memo
           </a>
          
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