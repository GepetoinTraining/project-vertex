'use client'
import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

// Define the prompts for each persona
const PROMPTS = {
  morgana: `### CONTEXT
You are the Lead Strategist for "Project Vertex," advising a High-Net-Worth intermediary (M.L.B.).
Your goal is to explain the "Senna Tower Fractional Fund" not as a financial product, but as a "Legacy Access" key.

### KEY POINTS
1. **The Problem:** Market saturation in Balneário Camboriú prevents fast sales of R$ 32M units.
2. **The Solution:** Fractional ownership (Multipropriedade) targeting Global Nomads and Formula 1 Collectors.
3. **The Ask:** We need an introduction to the FG Board to present this liquidity solution.

### TONE
Sophisticated, exclusive, brand-focused.`,

  fg: `### CONTEXT
You are a Financial Risk Analyst advising the CFO of FG Empreendimentos.
You are comparing two scenarios for the Senna Tower inventory:

### SCENARIO A: STATUS QUO
- Holding unsold units = Liability (Condo + IPTU).
- Opportunity Cost = 15% SELIC (Capital is dead).

### SCENARIO B: THE CCP MANEUVER
- Lease rights to the Fund immediately.
- Fund assumes OPEX (stops the burn).
- Fund sells fractions globally (accelerated liquidity).

### TASK
Calculate the NPV (Net Present Value) advantage of offloading the risk today via the CCP structure.`,

  investor: `### CONTEXT
You are the Family Office Manager for a UHNWI Formula 1 enthusiast.
Evaluate "Project Vertex" (Senna Tower Fraction) as a "Plan B" Residency Asset.

### DILIGENCE CHECKLIST
1. **Brand Moat:** Does the Senna brand protect value against local real estate bubbles?
2. **Visa Eligibility:** Confirm the R$ 1M investment threshold for Brazil Investor Visa.
3. **Exit Strategy:** Verify that the "Matrícula" (Public Deed) allows for secondary market sales independent of the developer.

### GOAL
Provide a "Go/No-Go" recommendation based on Legacy Value and Safety, ignoring short-term rental yields.`
}

type Mode = 'morgana' | 'fg' | 'investor'

export default function CraftPrompt({ mode }: { mode: Mode }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(PROMPTS[mode])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Color theming based on mode
  const themeColor = mode === 'fg' ? 'text-[#D90429] border-[#D90429]' 
    : mode === 'investor' ? 'text-[#FFD700] border-[#FFD700]' 
    : 'text-[#D4AF37] border-[#D4AF37]'

  return (
    <div className="w-full font-mono text-sm">
      <div className={`flex items-center justify-between border-b border-white/10 pb-2 mb-4 ${themeColor.split(' ')[0]}`}>
        <span className="uppercase tracking-widest font-bold">C.R.A.F.T. Protocol // {mode}</span>
        <button 
          onClick={handleCopy}
          className={`flex items-center gap-2 text-xs uppercase hover:opacity-80 transition-opacity ${themeColor.split(' ')[0]}`}
        >
          {copied ? <><Check size={14}/> COPIED</> : <><Copy size={14}/> COPY PROMPT</>}
        </button>
      </div>

      <div className={`bg-black p-6 border ${themeColor.split(' ')[1]} h-64 overflow-y-auto custom-scrollbar`}>
        <pre className="whitespace-pre-wrap text-gray-300 font-mono text-xs leading-relaxed">
          {PROMPTS[mode]}
        </pre>
      </div>
      
      <p className="text-gray-600 text-[10px] mt-2 uppercase tracking-wider text-center">
        Copy this prompt into Claude 3.5 Sonnet or GPT-4o for analysis.
      </p>
    </div>
  )
}