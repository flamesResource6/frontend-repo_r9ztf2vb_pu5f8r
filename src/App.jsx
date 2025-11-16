import Header from './components/Header'
import Hero from './components/Hero'
import Agenda from './components/Agenda'
import Register from './components/Register'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-emerald-50/40">
      <Header />
      <Hero />
      <Agenda />
      <Register />
      <Footer />
    </div>
  )
}

export default App
