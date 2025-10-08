import React from "react";
import logo from "./assets/logo.png";
import project1 from "./assets/project-1.jpg";
import project2 from "./assets/project-2.jpg";
import project3 from "./assets/project-3.jpg";

export default function App() {
  return (
    <div className="font-sans text-gray-800">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-4 bg-white shadow-sm sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <img src={logo} alt="MMAS Marketing Logo" className="w-12 h-12 object-contain" />
          <h1 className="text-2xl font-bold text-mmasBlue">MMAS Marketing</h1>
        </div>
        <nav className="space-x-6 hidden md:flex">
          <a href="#services" className="text-mmasBlack hover:text-mmasGold">Servicios</a>
          <a href="#portfolio" className="text-mmasBlack hover:text-mmasGold">Portafolio</a>
          <a href="#contact" className="text-mmasBlack hover:text-mmasGold">Contacto</a>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center py-20 bg-gradient-to-br from-mmasBlue to-mmasBlack text-white">
        <h2 className="text-5xl font-extrabold mb-4">Impulsamos tu marca al siguiente nivel</h2>
        <p className="text-lg mb-8">Estrategia, diseño y resultados reales para tu negocio.</p>
        <a href="#contact" className="px-6 py-3 bg-mmasGold text-white rounded-lg shadow hover:bg-yellow-600 transition">Contáctanos</a>
      </section>

      {/* Servicios */}
      <section id="services" className="py-20 px-8 bg-gray-50">
        <h2 className="text-4xl font-bold text-center text-mmasBlue mb-12">Nuestros Servicios</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-mmasBlack mb-2">Gestión de Redes Sociales</h3>
            <p className="text-gray-600">
              Construimos tu comunidad digital con contenido auténtico y estrategias de engagement.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-mmasBlack mb-2">Publicidad Digital</h3>
            <p className="text-gray-600">
              Campañas efectivas en Meta Ads, Google Ads y TikTok Ads para maximizar tu retorno.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-mmasBlack mb-2">Branding y Diseño</h3>
            <p className="text-gray-600">
              Creamos identidades visuales que comunican confianza, propósito y valor.
            </p>
          </div>
        </div>
      </section>

      {/* Portafolio */}
      <section id="portfolio" className="py-20 px-8 bg-white">
        <h2 className="text-4xl font-bold text-center text-mmasBlue mb-16">Portafolio de Proyectos</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {/* Proyecto 1 */}
          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
            <img src={project1} alt="Proyecto 1" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-mmasBlack mb-4">Estrategia Digital para Marca de Moda</h3>
              <ul className="text-gray-600 space-y-2 list-disc list-inside">
                <li><strong>Objetivo:</strong> aumentar ventas online en un 40%.</li>
                <li><strong>Estrategia:</strong> segmentación por intereses y remarketing en Meta Ads.</li>
                <li><strong>Resultado:</strong> incremento real de 56% en conversión.</li>
              </ul>
            </div>
          </div>

          {/* Proyecto 2 */}
          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
            <img src={project2} alt="Proyecto 2" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-mmasBlack mb-4">Branding para Empresa Tecnológica</h3>
              <ul className="text-gray-600 space-y-2 list-disc list-inside">
                <li><strong>Objetivo:</strong> reposicionar la marca con un enfoque moderno.</li>
                <li><strong>Estrategia:</strong> rediseño del logotipo, paleta y tono visual.</li>
                <li><strong>Resultado:</strong> aumento de 300% en recordación de marca.</li>
              </ul>
            </div>
          </div>

          {/* Proyecto 3 */}
          <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
            <img src={project3} alt="Proyecto 3" className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-mmasBlack mb-4">Campaña 360° para Restaurante Local</h3>
              <ul className="text-gray-600 space-y-2 list-disc list-inside">
                <li><strong>Objetivo:</strong> atraer nuevos clientes durante temporada baja.</li>
                <li><strong>Estrategia:</strong> storytelling visual y promociones geolocalizadas.</li>
                <li><strong>Resultado:</strong> aumento de 70% en reservas durante el mes.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contact" className="py-20 px-8 bg-gradient-to-br from-mmasBlue to-mmasGold text-white text-center">
        <h2 className="text-4xl font-bold mb-6">¿Listo para hacer crecer tu marca?</h2>
        <p className="text-lg mb-10">Contáctanos y demos el siguiente paso juntos.</p>
        <a href="mailto:mmas.mkting@gmail.com" className="px-8 py-4 bg-white text-mmasBlue font-semibold rounded-lg shadow hover:bg-gray-100 transition">
          mmas.mkting@gmail.com
        </a>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm bg-gray-900 text-gray-400">
        © {new Date().getFullYear()} MMAS Marketing · Todos los derechos reservados
      </footer>
    </div>
  );
}
