import { Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded bg-blue-600 text-white grid place-items-center font-bold">HS</div>
          <div>
            <p className="text-sm uppercase tracking-widest text-gray-500">Summit</p>
            <p className="text-lg font-semibold text-gray-900">Health & Safety</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-gray-700">
          <a href="#agenda" className="hover:text-blue-600">Agenda</a>
          <a href="#speakers" className="hover:text-blue-600">Speakers</a>
          <a href="#register" className="hover:text-blue-600">Register</a>
          <a href="/test" className="px-3 py-1.5 rounded bg-gray-900 text-white hover:bg-gray-800">System Check</a>
        </nav>
        <button className="md:hidden p-2 rounded hover:bg-gray-100" aria-label="Menu">
          <Menu size={22} />
        </button>
      </div>
    </header>
  )
}
