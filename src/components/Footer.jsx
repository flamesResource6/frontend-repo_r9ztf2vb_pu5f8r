export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6 text-sm text-gray-600">
        <div>
          <p className="font-semibold text-gray-800">Health & Safety Summit</p>
          <p className="mt-2">A clean, modern event focused on safer workplaces and wellbeing.</p>
        </div>
        <div>
          <p className="font-semibold text-gray-800">Location</p>
          <p className="mt-2">Austin Convention Center<br/>500 E Cesar Chavez St, Austin, TX</p>
        </div>
        <div>
          <p className="font-semibold text-gray-800">Contact</p>
          <p className="mt-2">events@healthsafetyconf.com<br/>+1 (512) 555-0199</p>
        </div>
      </div>
      <div className="py-4 text-center text-xs text-gray-500">© 2025 Health & Safety Summit. All rights reserved.</div>
    </footer>
  )
}
