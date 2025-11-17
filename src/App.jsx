import Hero from './components/Hero'
import Features from './components/Features'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen w-full bg-white text-slate-900">
      <Hero />
      <Features />
      <CTA />
      <footer className="relative z-10 border-t border-slate-200 bg-white py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
          <p className="text-sm text-slate-500">© {new Date().getFullYear()} Flames — AI agents for real estate</p>
          <nav className="flex items-center gap-6 text-sm text-slate-600">
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#cta" className="hover:text-slate-900">Get Started</a>
            <a href="/test" className="hover:text-slate-900">System Check</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default App
