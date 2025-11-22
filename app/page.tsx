import Link from 'next/link'
import { ArrowRight, Lock, Shield, Users } from 'lucide-react'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-white font-mono flex flex-col items-center justify-center p-6 selection:bg-[#D90429] selection:text-white">
      
      {/* HEADER */}
      <div className="w-full max-w-2xl mb-12 text-center border-b border-white/10 pb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-2">PROJECT VERTEX</h1>
        <p className="text-gray-500 text-xs tracking-[0.3em] uppercase">Authorized Personnel Only // Level 4 Clearance</p>
      </div>

      {/* THE DIRECTORY */}
      <div className="w-full max-w-2xl grid gap-4">
        
        {/* LINK 1: MORGANA (THE KEY) */}
        <Link href="/morgana" className="group relative block bg-[#0a0a0a] border border-white/10 p-6 hover:border-[#D4AF37] transition-all duration-300 hover:bg-[#D4AF37]/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/5 rounded-none group-hover:bg-[#D4AF37] group-hover:text-black transition-colors">
                 <Shield size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold group-hover:text-[#D4AF37] transition-colors">PROTOCOL: M.L.B.</h3>
                <p className="text-xs text-gray-600 uppercase tracking-wider">Strategic Partner // Access</p>
              </div>
            </div>
            <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#D4AF37]" />
          </div>
        </Link>

        {/* LINK 2: FG (THE NIGHTMARE) */}
        <Link href="/fg" className="group relative block bg-[#0a0a0a] border border-white/10 p-6 hover:border-[#D90429] transition-all duration-300 hover:bg-[#D90429]/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/5 rounded-none group-hover:bg-[#D90429] group-hover:text-white transition-colors">
                 <Lock size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold group-hover:text-[#D90429] transition-colors">PROTOCOL: BOARDROOM</h3>
                <p className="text-xs text-gray-600 uppercase tracking-wider">FG Empreendimentos // Financial</p>
              </div>
            </div>
            <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#D90429]" />
          </div>
        </Link>

        {/* LINK 3: INVESTOR (THE DREAM) */}
        <Link href="/investor" className="group relative block bg-[#0a0a0a] border border-white/10 p-6 hover:border-[#FFD700] transition-all duration-300 hover:bg-[#FFD700]/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/5 rounded-none group-hover:bg-[#FFD700] group-hover:text-black transition-colors">
                 <Users size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold group-hover:text-[#FFD700] transition-colors">PROTOCOL: ASCENSION</h3>
                <p className="text-xs text-gray-600 uppercase tracking-wider">Private Family Office // Presentation</p>
              </div>
            </div>
            <ArrowRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-[#FFD700]" />
          </div>
        </Link>

      </div>

      <footer className="mt-24 text-center text-xs text-gray-800 font-mono">
        SECURE CONNECTION ESTABLISHED <br/>
        NODE: BALNEÁRIO CAMBORIÚ
      </footer>

    </main>
  )
}