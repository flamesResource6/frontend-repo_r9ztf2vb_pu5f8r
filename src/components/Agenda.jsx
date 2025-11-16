import { useEffect, useState } from 'react'

export default function Agenda() {
  const [sessions, setSessions] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/sessions`)
        if (!res.ok) throw new Error('Failed to load sessions')
        const data = await res.json()
        setSessions(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="agenda" className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-900">Agenda</h2>
      <p className="text-gray-600 mt-2">Two days of practical sessions and expert panels.</p>

      {loading && <p className="mt-6 text-gray-600">Loading sessions...</p>}
      {error && <p className="mt-6 text-red-600">{error}</p>}

      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {sessions.map(s => (
          <div key={s.id} className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-xs uppercase tracking-widest text-gray-500">{s.track}</p>
            <h3 className="mt-1 text-lg font-semibold text-gray-900">{s.title}</h3>
            <p className="text-sm text-gray-600">{s.speaker} • {s.time}</p>
            <p className="mt-3 text-gray-700 text-sm">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
