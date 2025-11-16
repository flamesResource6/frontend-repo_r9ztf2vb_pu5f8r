export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-emerald-50" />
      <div className="relative max-w-6xl mx-auto px-4 pt-16 pb-24">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-sm text-gray-700">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          In-person • October 12-13 • Austin, TX
        </div>
        <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          Health & Safety Summit 2025
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-700 max-w-2xl">
          A clean, modern event focused on safer workplaces, emergency readiness, and employee wellbeing. Learn from industry leaders and leave with actionable frameworks.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a href="#register" className="px-5 py-3 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700">
            Register Now
          </a>
          <a href="#agenda" className="px-5 py-3 rounded border border-gray-300 text-gray-800 font-semibold hover:bg-gray-50">
            View Agenda
          </a>
        </div>
      </div>
    </section>
  )
}
