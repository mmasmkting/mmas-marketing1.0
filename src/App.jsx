import React from 'react'
import { motion } from 'framer-motion'
import { Facebook, Mail, Users } from 'lucide-react'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-mmasBlack antialiased">
      <header className="border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-mmasBlue to-mmasGold flex items-center justify-center text-white font-bold">MM</div>
            <div>
              <h1 className="text-lg font-semibold">MMAS Marketing</h1>
              <p className="text-xs text-gray-500">Estrategia, creatividad y resultados</p>
            </div>
          </div>
          <nav className="hidden md:flex gap-6 text-sm text-gray-600">
            <a href="#services" className="hover:text-mmasBlue">Servicios</a>
            <a href="#portfolio" className="hover:text-mmasBlue">Portafolio</a>
            <a href="#team" className="hover:text-mmasBlue">Equipo</a>
            <a href="#contact" className="hover:text-mmasBlue">Contacto</a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Crecimiento de marca con estrategia y creatividad</h2>
            <p className="mt-4 text-lg text-gray-600">En MMAS Marketing diseñamos campañas digitales, contenido y experiencias que conectan con tu público y mueven resultados reales: leads, ventas y posicionamiento.</p>
            <div className="mt-6 flex gap-3">
              <a href="mailto:mmas.mkting@gmail.com" className="px-5 py-3 bg-mmasBlue text-white rounded-lg shadow">Contáctanos</a>
              <a href="#portfolio" className="px-4 py-3 border rounded-lg text-sm">Ver portafolio</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }}>
            <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border shadow-sm">
              <img src="/src/assets/marketing.jpg" alt="Marketing" className="w-full rounded-lg object-cover h-72" />
              <div className="mt-4">
                <h3 className="font-semibold">Campañas integradas</h3>
                <p className="text-sm text-gray-500 mt-1">Estrategia creativa + ejecución técnica en Social Ads, SEO y contenido.</p>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="services" className="mt-12">
          <h3 className="text-2xl font-bold">Servicios</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white border rounded-xl p-6">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6" />
                <h4 className="font-semibold">Estrategia de marketing</h4>
              </div>
              <p className="text-sm text-gray-500 mt-3">Investigación, posicionamiento y plan de crecimiento digital personalizado.</p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6" />
                <h4 className="font-semibold">Gestión de redes & contenido</h4>
              </div>
              <p className="text-sm text-gray-500 mt-3">Calendarios, creación de contenidos y community management.</p>
            </div>

            <div className="bg-white border rounded-xl p-6">
              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6" />
                <h4 className="font-semibold">Ads & performance</h4>
              </div>
              <p className="text-sm text-gray-500 mt-3">Campañas pagadas (Meta, Google, TikTok), optimización y reporting.</p>
            </div>
          </div>
        </section>

        <section id="portfolio" className="mt-12">
          <h3 className="text-2xl font-bold">Portafolio</h3>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1,2,3].map(i => (
              <article key={i} className="bg-white border rounded-xl overflow-hidden">
                <img src={`/src/assets/project-${i}.jpg`} alt={`Proyecto ${i}`} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h4 className="font-semibold">Proyecto {i}</h4>
                  <p className="text-sm text-gray-500 mt-2">Campaña integrada con +50% de incremento en conversiones.</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="team" className="mt-12">
          <h3 className="text-2xl font-bold">Nuestro equipo</h3>
          <div className="mt-4 space-y-4">
            <div className="flex items-center gap-4 bg-white border rounded-lg p-4">
              <div className="w-12 h-12 rounded-full bg-mmasBlue flex items-center justify-center text-white font-semibold">AG</div>
              <div>
                <div className="font-medium">Andrés G.</div>
                <div className="text-sm text-gray-500">Director de estrategia</div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mt-12 bg-gray-50 rounded-xl p-6">
          <h3 className="text-2xl font-bold">Contacto</h3>
          <p className="text-gray-600 mt-2">Escríbenos y te responderemos en 1-2 días hábiles.</p>
          <div className="mt-4">
            <a className="inline-flex items-center gap-2" href="mailto:mmas.mkting@gmail.com"><Mail className="w-4 h-4" /> mmas.mkting@gmail.com</a>
          </div>
        </section>
      </main>

      <footer className="border-t mt-12">
        <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between text-sm text-gray-600">
          <div>© 2025 MMAS Marketing</div>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook">Facebook</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
