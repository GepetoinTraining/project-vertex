'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CraftPrompt from '@/components/CraftPrompt'

// --- BLOB URLS (Use placeholders or your uploads) ---
const VIDEO_CONSTRUCTION = "https://[YOUR-BLOB-ID].public.blob.vercel-storage.com/fg-construction-timelapse.mp4" 
const VIDEO_CRASH = "https://[YOUR-BLOB-ID].public.blob.vercel-storage.com/senna-crash-glitch.mp4" 
const VIDEO_VICTORY = "https://[YOUR-BLOB-ID].public.blob.vercel-storage.com/senna-victory-flag.mp4"

// --- THE FINANCIAL NIGHTMARE SCRIPT ---
const SCENES = [
  {
    id: 1,
    video: VIDEO_CONSTRUCTION,
    telemetry: "STATUS: VERTICAL VELOCITY",
    title: "YOU OWN THE SKYLINE.",
    text: "544 Meters. A technological fortress. You have built the greatest residential record in the hemisphere.",
    btn: "Check The Telemetry",
    theme: "glory"
  },
  {
    id: 2,
    video: VIDEO_CRASH,
    telemetry: "WARNING: SELIC 15%", // The Financial Impact
    title: "IMPACT IMMINENT.",
    text: "Every unsold unit is hitting the wall of Opportunity Cost. R$ 3.5M per year in OPEX burn. The concrete is stagnant. The capital is dead.",
    btn: "Deploy Safety Car",
    theme: "crash" // White/Red/Black panic theme
  },
  {
    id: 3,
    video: VIDEO_VICTORY,
    telemetry: "SYSTEM: LIQUIDITY RESTORED",
    title: "THE CCP MANEUVER",
    text: "We stop the bleed. We assume the OPEX. We fractionalize the risk to global capital. You finish the race; we fund the fuel.",
    btn: "Sign The Term Sheet",
    theme: "glory"
  }
]

export default function FGDeck() {
  const [sceneIndex, setSceneIndex] = useState(0)
  const [showText, setShowText] = useState(false)
  const [showBtn, setShowBtn] = useState(false)
  const [isFinished, setIsFinished] = useState(false)

  const currentScene = SCENES[sceneIndex]

  // Timer Logic
  useEffect(() => {
    if (isFinished) return
    setShowText(false); setShowBtn(false)
    const textTimer = setTimeout(() => setShowText(true), 2500)
    const btnTimer = setTimeout(() => setShowBtn(true), 7000) // Force them to sit in the feeling
    return () => { clearTimeout(textTimer); clearTimeout(btnTimer) }
  }, [sceneIndex, isFinished])

  const nextScene = () => {
    if (sceneIndex < SCENES.length - 1) setSceneIndex(prev => prev + 1)
    else setIsFinished(true)
  }

  // --- FINAL SCREEN: THE TERM SHEET PROMPT ---
  if (isFinished) {
    return (
      <main className="h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-8 font-mono">
        <div className="max-w-4xl w-full border border-[#D90429] p-8 bg-[#111]">
          <h1 className="text-3xl text-[#D90429] mb-4 uppercase">Protocol: Liquidity Event</h1>
          <p className="text-gray-400 mb-8">
            The crash is avoidable. Run this simulation to see how the CCP structure clears your balance sheet liabilities.
          </p>
          <CraftPrompt mode="fg" />
        </div>
      </main>
    )
  }

  // --- SCENE RENDER ---
  return (
    <main className={`h-screen w-screen overflow-hidden relative flex flex-col items-center justify-center transition-colors duration-1000 ${currentScene.theme === 'crash' ? 'bg-white text-black' : 'bg-black text-white'}`}>
      
      {/* VIDEO LAYER */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.video 
            key={currentScene.id}
            src={currentScene.video}
            initial={{ opacity: 0 }} animate={{ opacity: 0.6 }} exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className={`w-full h-full object-cover ${currentScene.theme === 'crash' ? 'grayscale contrast-150 opacity-20' : 'grayscale opacity-50'}`}
            autoPlay loop muted playsInline
          />
        </AnimatePresence>
        <div className={`absolute inset-0 ${currentScene.theme === 'crash' ? 'bg-white/10' : 'bg-black/60'}`} />
      </div>

      {/* CONTENT LAYER */}
      <div className="z-10 relative max-w-5xl text-center px-6">
        <AnimatePresence>
          {showText && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
              
              <span className={`font-mono text-sm border px-3 py-1 mb-8 inline-block font-bold tracking-widest ${currentScene.theme === 'crash' ? 'border-[#D90429] text-[#D90429] bg-black' : 'border-[#FFD700] text-[#FFD700] bg-black'}`}>
                {currentScene.telemetry}
              </span>
              
              <h1 className={`font-hero text-7xl md:text-9xl uppercase leading-none mb-8 ${currentScene.theme === 'crash' ? 'text-black' : 'text-white drop-shadow-2xl'}`}>
                {currentScene.title}
              </h1>
              
              <p className={`text-2xl font-serif leading-relaxed max-w-2xl mx-auto p-6 border-l-4 ${currentScene.theme === 'crash' ? 'border-[#D90429] text-black bg-white/50' : 'border-[#FFD700] text-gray-200 bg-black/50 backdrop-blur-md'}`}>
                {currentScene.text}
              </p>

            </motion.div>
          )}
        </AnimatePresence>

        {/* BUTTON */}
        <div className="h-24 mt-12 flex justify-center">
          <AnimatePresence>
            {showBtn && (
              <motion.button
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                onClick={nextScene}
                className={`uppercase font-bold text-lg px-12 py-4 border-2 transition-all hover:scale-105 ${currentScene.theme === 'crash' ? 'border-black text-white bg-black hover:bg-[#D90429] hover:border-[#D90429]' : 'border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black'}`}
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