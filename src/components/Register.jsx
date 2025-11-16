import { useEffect, useState } from 'react'

export default function Register() {
  const [form, setForm] = useState({ full_name: '', email: '', organization: '', role: '', sessions: [], consent: true })
  const [submitting, setSubmitting] = useState(false)
  const [result, setResult] = useState(null)

  const sessionOptions = [
    { id: 'ergonomics-101', label: 'Ergonomics 101' },
    { id: 'fire-safety', label: 'Modern Fire Safety Protocols' },
    { id: 'mental-health', label: 'Mental Health at Work' },
  ]

  const update = (k, v) => setForm(prev => ({ ...prev, [k]: v }))

  const toggleSession = (id) => {
    setForm(prev => ({
      ...prev,
      sessions: prev.sessions.includes(id)
        ? prev.sessions.filter(s => s !== id)
        : [...prev.sessions, id]
    }))
  }

  const submit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setResult(null)
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      const data = await res.json()
      if (!res.ok || !data.ok) throw new Error(data.detail || 'Registration failed')
      setResult({ ok: true, message: 'You are registered! Check your inbox for confirmation.' })
      setForm({ full_name: '', email: '', organization: '', role: '', sessions: [], consent: true })
    } catch (err) {
      setResult({ ok: false, message: err.message })
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="register" className="max-w-2xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-900">Register</h2>
      <p className="text-gray-600 mt-2">Secure your spot. It takes less than a minute.</p>

      <form onSubmit={submit} className="mt-8 space-y-4 bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input value={form.full_name} onChange={e => update('full_name', e.target.value)} required className="mt-1 w-full rounded border-gray-300 focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" value={form.email} onChange={e => update('email', e.target.value)} required className="mt-1 w-full rounded border-gray-300 focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Organization</label>
            <input value={form.organization} onChange={e => update('organization', e.target.value)} className="mt-1 w-full rounded border-gray-300 focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <input value={form.role} onChange={e => update('role', e.target.value)} className="mt-1 w-full rounded border-gray-300 focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>

        <div>
          <p className="block text-sm font-medium text-gray-700">Select Sessions</p>
          <div className="mt-2 grid sm:grid-cols-3 gap-2">
            {sessionOptions.map(opt => (
              <label key={opt.id} className={`flex items-center gap-2 rounded border p-2 cursor-pointer ${form.sessions.includes(opt.id) ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}>
                <input type="checkbox" checked={form.sessions.includes(opt.id)} onChange={() => toggleSession(opt.id)} />
                <span className="text-sm">{opt.label}</span>
              </label>
            ))}
          </div>
        </div>

        <label className="flex items-center gap-2 text-sm text-gray-700">
          <input type="checkbox" checked={form.consent} onChange={e => update('consent', e.target.checked)} />
          I agree to the terms and privacy policy.
        </label>

        <div className="flex items-center gap-3">
          <button disabled={submitting} className="px-5 py-2.5 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 disabled:opacity-60">
            {submitting ? 'Submitting...' : 'Submit Registration'}
          </button>
          {result && (
            <p className={result.ok ? 'text-emerald-600' : 'text-red-600'}>
              {result.message}
            </p>
          )}
        </div>
      </form>
    </section>
  )
}
