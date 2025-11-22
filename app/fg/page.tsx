'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download } from 'lucide-react'
import CraftPrompt from '@/components/CraftPrompt'

// --- VERCEL BLOB ASSETS ---
const VIDEO_CONSTRUCTION = "https://[YOUR_HASH].public.blob.vercel-storage.com/tower_render.mp4" 
const VIDEO_FINAL_CURVE = "https://[YOUR_HASH].public.blob.vercel-storage.com/fg_crash_optimized.mp4" 
const VIDEO_VICTORY = "https://[YOUR_HASH].public.blob.vercel-storage.com/fg_victory.mp4"

// --- PDF ASSETS ---
const PDF_RED_TEAM = "https://s8vgnbofam2djlq5.public.blob.vercel-storage.com/Red%20Team%20Analysis%20of%20Real%20Estate%20Pitch.pdf"
const PDF_VIABILITY = "https://s8vgnbofam2djlq5.public.blob.vercel-storage.com/Brazil%20Timeshare%20Fund%20Viability%20Study.pdf"

const SCENES = [
  {
    id: 1,
    video: VIDEO_CONSTRUCTION,
    telemetry: "STATUS: VELOCIDADE VERTICAL",
    title: "VOCÊS SÃO DONOS DO HORIZONTE.",
    text: "544 Metros. Uma fortaleza tecnológica. Vocês construíram o maior recorde residencial do hemisfério. A telemetria está perfeita.",
    btn: "Checar Telemetria",
    theme: "glory"
  },
  {
    id: 2,
    video: VIDEO_FINAL_CURVE,
    telemetry: "ALERTA: TRAJETÓRIA TRAVADA", 
    title: "O MURO ESTÁ CHEGANDO.",
    text: "Vocês estão na curva. O muro da SELIC a 15% está logo à frente. R$ 32M parados em concreto custam R$ 4,8M ao ano em Custo de Oportunidade. O impacto é matematicamente inevitável.",
    btn: "Corrigir Direção",
    theme: "tension"
  },
  {
    id: 3,
    video: VIDEO_VICTORY,
    telemetry: "SISTEMA: LIQUIDEZ RESTAURADA",
    title: "A MANOBRA SCP",
    text: "Nós estancamos a sangria. Nós assumimos a Força-G. Nós fracionamos o risco para o capital global. Vocês terminam a corrida; nós pagamos o combustível.",
    btn: "Assinar Term Sheet",
    theme: "glory"
  }
]

export default function FGDeck() {
  const [sceneIndex, setSceneIndex] = useState(0)
  const [showText, setShowText] = useState(false)
  const [showBtn, setShowBtn] = useState(false)
  const [isFinished, setIsFinished] = useState(false)

  const currentScene = SCENES[sceneIndex]

  useEffect(() => {
    if (isFinished) return
    setShowText(false); setShowBtn(false)
    const textTimer = setTimeout(() => setShowText(true), 2500)
    const btnTimer = setTimeout(() => setShowBtn(true), currentScene.theme === 'tension' ? 8000 : 6000) 
    return () => { clearTimeout(textTimer); clearTimeout(btnTimer) }
  }, [sceneIndex, isFinished])

  const nextScene = () => {
    if (sceneIndex < SCENES.length - 1) setSceneIndex(prev => prev + 1)
    else setIsFinished(true)
  }

  if (isFinished) {
    return (
      <main className="min-h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-8 font-mono">
        <div className="max-w-4xl w-full border border-[#D90429] p-8 bg-[#111]">
          <h1 className="text-3xl text-[#D90429] mb-4 uppercase font-bold">Protocolo: Evento de Liquidez</h1>
          <p className="text-gray-400 mb-8 leading-relaxed">
            O impacto foi evitado. O relatório completo da "Red Team" (Riscos) e o Estudo de Viabilidade (Solução) estão disponíveis abaixo. Execute a simulação para ver como a estrutura CCP limpa o balanço patrimonial.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            <a href={PDF_RED_TEAM} download className="flex items-center gap-3 p-4 border border-white/20 hover:border-[#D90429] hover:bg-[#D90429]/10 transition-all group">
               <Download className="text-[#D90429]" />
               <div className="text-left">
                  <span className="block text-xs text-gray-500 uppercase">Relatório de Risco</span>
                  <span className="font-bold group-hover:text-[#D90429]">RED TEAM ANALYSIS</span>
               </div>
            </a>
            <a href={PDF_VIABILITY} download className="flex items-center gap-3 p-4 border border-white/20 hover:border-white hover:bg-white/5 transition-all group">
               <Download className="text-white" />
               <div className="text-left">
                  <span className="block text-xs text-gray-500 uppercase">Solução Estratégica</span>
                  <span className="font-bold">VIABILITY STUDY</span>
               </div>
            </a>
          </div>

          <CraftPrompt mode="fg" />
        </div>
      </main>
    )
  }

  return (
    <main className={`h-screen w-screen overflow-hidden relative flex flex-col items-center justify-center transition-colors duration-1000 ${currentScene.theme === 'tension' ? 'bg-[#f0f0f0] text-black' : 'bg-black text-white'}`}>
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.video 
            key={currentScene.id}
            src={currentScene.video}
            initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className={`w-full h-full object-cover ${currentScene.theme === 'tension' ? 'grayscale contrast-125 opacity-30' : 'grayscale opacity-50'}`}
            autoPlay loop muted playsInline
          />
        </AnimatePresence>
        <div className={`absolute inset-0 ${currentScene.theme === 'tension' ? 'bg-white/40' : 'bg-black/60'}`} />
      </div>

      <div className="z-10 relative max-w-5xl text-center px-6">
        <AnimatePresence>
          {showText && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
              <span className={`font-mono text-sm border px-3 py-1 mb-8 inline-block font-bold tracking-widest ${currentScene.theme === 'tension' ? 'border-black text-black' : 'border-[#FFD700] text-[#FFD700] bg-black'}`}>
                {currentScene.telemetry}
              </span>
              <h1 className={`font-hero text-6xl md:text-9xl uppercase leading-none mb-8 ${currentScene.theme === 'tension' ? 'text-black' : 'text-white drop-shadow-2xl'}`}>
                {currentScene.title}
              </h1>
              <p className={`text-xl md:text-2xl font-serif leading-relaxed max-w-3xl mx-auto p-6 border-l-4 ${currentScene.theme === 'tension' ? 'border-[#D90429] text-black bg-white/60 backdrop-blur-sm' : 'border-[#FFD700] text-gray-200 bg-black/50 backdrop-blur-md'}`}>
                {currentScene.text}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="h-24 mt-12 flex justify-center">
          <AnimatePresence>
            {showBtn && (
              <motion.button
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                onClick={nextScene}
                className={`uppercase font-bold text-lg px-12 py-4 border-2 transition-all hover:scale-105 ${currentScene.theme === 'tension' ? 'border-black text-black hover:bg-black hover:text-white' : 'border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black'}`}
              >
                {currentScene.btn} →
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  )
}
