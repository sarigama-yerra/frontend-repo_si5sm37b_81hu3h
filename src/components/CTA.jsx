export default function CTA() {
  return (
    <section id="cta" className="relative z-10 bg-white py-20">
      <div className="mx-auto max-w-5xl rounded-2xl bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-700 px-8 py-14 text-center text-white shadow-xl">
        <h3 className="text-3xl font-bold sm:text-4xl">Launch your first agent in minutes</h3>
        <p className="mx-auto mt-3 max-w-2xl text-white/90">
          Start free, then scale as conversations grow. No infrastructure to manage.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href="/test" className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow hover:bg-white/90">
            Run System Check
          </a>
          <a href="#" className="inline-flex items-center justify-center rounded-md bg-black/20 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/30 backdrop-blur hover:bg-black/30">
            Talk to Sales
          </a>
        </div>
      </div>
    </section>
  )
}
