import { Headphones, Calendar, FileSearch, MessagesSquare, ShieldCheck, Gauge } from 'lucide-react'

const features = [
  {
    icon: Headphones,
    title: '24/7 Lead Concierge',
    desc: 'Capture, qualify, and route leads in real-time via voice and chat across web, phone, and SMS.'
  },
  {
    icon: Calendar,
    title: 'Appointment Engine',
    desc: 'Real-time calendar booking, reminders, and rescheduling with human-like confirmations.'
  },
  {
    icon: FileSearch,
    title: 'Listing Intelligence',
    desc: 'Sync MLS data, answer property questions, schedule tours, and handle disclosures.'
  },
  {
    icon: MessagesSquare,
    title: 'Pipeline Nurture',
    desc: 'Multi-channel follow-ups that drive response rates and move deals forward automatically.'
  },
  {
    icon: ShieldCheck,
    title: 'Compliance-Ready',
    desc: 'Call recording controls, consent handling, and auditable conversation logs.'
  },
  {
    icon: Gauge,
    title: 'Performance Analytics',
    desc: 'See conversion lift, SLA adherence, and ROI with actionable dashboards.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative z-10 bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold text-slate-900 sm:text-4xl">Designed for the real estate value chain</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-slate-600">Pick from proven agent templates or compose your own with our visual builder.</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-slate-200 bg-white/70 p-6 shadow-sm transition hover:shadow-md">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 via-blue-500 to-orange-400 text-white">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
