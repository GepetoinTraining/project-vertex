'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CraftPrompt from '@/components/CraftPrompt'

// --- VERCEL BLOB ASSETS ---
// 1. The Glory: Construction/Render
const VIDEO_CONSTRUCTION = "https://s8vgnbofam2djlq5.public.blob.vercel-storage.com/tower_render.mp4" 
// 2. The Tension: Senna's Rear Wing approaching Tamburello
const VIDEO_FINAL_CURVE = "https://s8vgnbofam2djlq5.public.blob.vercel-storage.com/fg_rear_wing.mp4" 
// 3. The Victory: Senna Flag Wave
const VIDEO_VICTORY = "https://s8vgnbofam2djlq5.public.blob.vercel-storage.com/fg_victory.mp4"

// --- THE NARRATIVE ARC ---
const SCENES = [
  {
    id: 1,
    video: VIDEO_CONSTRUCTION,
    telemetry: "STATUS: VERTICAL VELOCITY",
    title: "YOU OWN THE SKYLINE.",
    text: "544 Meters. A technological fortress. You have built the greatest residential record in the hemisphere. The telemetry is perfect.",
    btn: "Check The Telemetry",
    theme: "glory" // Black background, Gold/White text
  },
  {
    id: 2,
    video: VIDEO_FINAL_CURVE,
    telemetry: "WARNING: TRAJECTORY LOCKED", 
    title: "THE WALL IS COMING.",
    text: "You are currently in the corner. The 15% SELIC wall is dead ahead. If you hold this line, the OPEX impact is mathematically inevitable.",
    btn: "Correct Steering",
    theme: "tension" // NEW THEME: White background, Black text (Blinding realization)
  },
  {
    id: 3,
    video: VIDEO_VICTORY,
    telemetry: "SYSTEM: LIQUIDITY RESTORED",
    title: "THE CCP MANEUVER",
    text: "We stop the bleed. We assume the G-Force. We fractionalize the risk to global capital. You finish the race; we fund the fuel.",
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
    // Give them time to stare at the "Wall" in scene 2
    const btnTimer = setTimeout(() => setShowBtn(true), currentScene.theme === 'tension' ? 8000 : 6000) 
    return () => { clearTimeout(textTimer); clearTimeout(btnTimer) }
  }, [sceneIndex, isFinished])

  const nextScene = () => {
    if (sceneIndex < SCENES.length - 1) setSceneIndex(prev => prev + 1)
    else setIsFinished(true)
  }

  // --- FINAL SCREEN: TERM SHEET ---
  if (isFinished) {
    return (
      <main className="h-screen bg-[#050505] text-white flex flex-col items-center justify-center p-8 font-mono">
        <div className="max-w-4xl w-full border border-[#D90429] p-8 bg-[#111]">
          <h1 className="text-3xl text-[#D90429] mb-4 uppercase">Protocol: Liquidity Event</h1>
          <p className="text-gray-400 mb-8">
            The impact was avoided. Run this simulation to see how the CCP structure clears the balance sheet.
          </p>
          <CraftPrompt mode="fg" />
        </div>
      </main>
    )
  }

  // --- SCENE RENDER ---
  return (
    <main className={`h-screen w-screen overflow-hidden relative flex flex-col items-center justify-center transition-colors duration-1000 ${currentScene.theme === 'tension' ? 'bg-[#f0f0f0] text-black' : 'bg-black text-white'}`}>
      
      {/* VIDEO LAYER */}
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
        {/* Gradient Overlay */}
        <div className={`absolute inset-0 ${currentScene.theme === 'tension' ? 'bg-white/40' : 'bg-black/60'}`} />
      </div>

      {/* CONTENT LAYER */}
      <div className="z-10 relative max-w-5xl text-center px-6">
        <AnimatePresence>
          {showText && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}>
              
              <span className={`font-mono text-sm border px-3 py-1 mb-8 inline-block font-bold tracking-widest ${currentScene.theme === 'tension' ? 'border-black text-black' : 'border-[#FFD700] text-[#FFD700] bg-black'}`}>
                {currentScene.telemetry}
              </span>
              
              <h1 className={`font-hero text-7xl md:text-9xl uppercase leading-none mb-8 ${currentScene.theme === 'tension' ? 'text-black' : 'text-white drop-shadow-2xl'}`}>
                {currentScene.title}
              </h1>
              
              <p className={`text-2xl font-serif leading-relaxed max-w-2xl mx-auto p-6 border-l-4 ${currentScene.theme === 'tension' ? 'border-[#D90429] text-black bg-white/60 backdrop-blur-sm' : 'border-[#FFD700] text-gray-200 bg-black/50 backdrop-blur-md'}`}>
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