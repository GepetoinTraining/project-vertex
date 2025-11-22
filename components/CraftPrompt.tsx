'use client'
import { useState } from 'react'
import { Copy, Check } from 'lucide-react'

const PROMPTS = {
  morgana: `### CONTEXTO
Você é o Estrategista Líder do "Projeto Vertex", aconselhando uma intermediária de Ultra-High-Net-Worth (M.L.B.).
Seu objetivo é explicar o "Fundo Fracionado Senna Tower" não como um produto financeiro, mas como uma chave de "Acesso ao Legado".

### PONTOS CHAVE
1. **O Problema:** A saturação do mercado em Balneário Camboriú impede vendas rápidas de unidades de R$ 32M.
2. **A Solução:** Multipropriedade (Deeded) focada em Nômades Globais e Colecionadores de F1.
3. **O Pedido:** Precisamos de uma introdução ao Conselho da FG para apresentar esta solução de liquidez.

### TOM
Sofisticado, exclusivo, focado na marca.`,

  fg: `### CONTEXTO
Você é um Analista de Risco Financeiro aconselhando o CFO da FG Empreendimentos.
Você está comparando dois cenários para o estoque da Senna Tower:

### CENÁRIO A: STATUS QUO
- Manter unidades não vendidas = Passivo (Condomínio + IPTU + Manutenção TMD).
- Custo de Oportunidade = SELIC 15% (Capital morto no concreto).

### CENÁRIO B: A MANOBRA CCP
- Cessão de direitos para o Fundo imediatamente.
- O Fundo assume o OPEX (estanca a sangria).
- O Fundo vende as frações globalmente (liquidez acelerada).

### TAREFA
Calcule o VPL (Valor Presente Líquido) da vantagem de transferir o risco hoje via estrutura CCP, considerando a inflação do INCC vs SELIC.`,

  investor: `### CONTEXTO
Você é o Gerente de Family Office para um entusiasta de Fórmula 1 (UHNWI).
Avalie o "Projeto Vertex" (Fração Senna Tower) como um Ativo de Residência "Plano B".

### CHECKLIST DE DILIGÊNCIA
1. **Fosso da Marca:** A marca "Senna" protege o valor contra bolhas imobiliárias locais?
2. **Elegibilidade de Visto:** Confirme se o limite de investimento de R$ 1M para o Visto de Investidor Brasileiro é atendido.
3. **Estratégia de Saída:** Verifique se a "Matrícula" permite vendas no mercado secundário independentes do desenvolvedor.

### OBJETIVO
Forneça uma recomendação de "Go/No-Go" baseada em Valor de Legado e Segurança Jurídica, ignorando yields de aluguel de curto prazo.`
}

type Mode = 'morgana' | 'fg' | 'investor'

export default function CraftPrompt({ mode }: { mode: Mode }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(PROMPTS[mode])
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const themeColor = mode === 'fg' ? 'text-[#D90429] border-[#D90429]' 
    : mode === 'investor' ? 'text-[#FFD700] border-[#FFD700]' 
    : 'text-[#D4AF37] border-[#D4AF37]'

  return (
    <div className="w-full font-mono text-sm">
      <div className={`flex items-center justify-between border-b border-white/10 pb-2 mb-4 ${themeColor.split(' ')[0]}`}>
        <span className="uppercase tracking-widest font-bold">PROTOCOLO C.R.A.F.T. // {mode}</span>
        <button 
          onClick={handleCopy}
          className={`flex items-center gap-2 text-xs uppercase hover:opacity-80 transition-opacity ${themeColor.split(' ')[0]}`}
        >
          {copied ? <><Check size={14}/> COPIADO</> : <><Copy size={14}/> COPIAR PROMPT</>}
        </button>
      </div>

      <div className={`bg-black p-6 border ${themeColor.split(' ')[1]} h-64 overflow-y-auto custom-scrollbar`}>
        <pre className="whitespace-pre-wrap text-gray-300 font-mono text-xs leading-relaxed">
          {PROMPTS[mode]}
        </pre>
      </div>
    </div>
  )
}