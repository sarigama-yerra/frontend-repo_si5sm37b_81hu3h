import Spline from '@splinetool/react-spline'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-white">
      {/* Background gradient aura behind content */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(closest-side,rgba(168,85,247,0.25),rgba(59,130,246,0.15),rgba(255,166,0,0.12),transparent)]" />

      {/* Spline animation */}
      <div className="absolute inset-0" aria-hidden>
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} className="opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-24 pb-20 text-center sm:pt-28 lg:pt-32">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/40 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm backdrop-blur">
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-orange-400" />
          AI Agents for Real Estate
        </div>

        <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-6xl">
          Build voice and chat agents that scale your real estate operations
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
          Automate lead qualification, appointment setting, listing coordination, and post‑sale care with production‑ready AI agents. Faster response times, higher conversion, lower overhead.
        </p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <a href="#cta" className="inline-flex items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400">
            Start Free <ArrowRight className="ml-2 h-4 w-4" />
          </a>
          <a href="#features" className="inline-flex items-center justify-center rounded-md bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 shadow backdrop-blur transition hover:bg-white">
            See How It Works
          </a>
        </div>

        {/* Logos / social proof placeholder */}
        <div className="mt-10 grid grid-cols-2 items-center gap-6 opacity-80 sm:grid-cols-4">
          {['Brokerages','Property Mgmt','Mortgage','Title'].map((l) => (
            <div key={l} className="text-xs font-medium text-slate-600">{l}</div>
          ))}
        </div>
      </div>
    </section>
  )
}
