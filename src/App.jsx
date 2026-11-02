import React, { useState } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="portfolio-container">
      {/* Barra de Navegación & Menú Hamburguesa */}
      <header className="navbar">
        <a href="#inicio" className="logo">Debora Escobar</a>
        
        <button 
          className={`hamburger ${menuOpen ? 'active' : ''}`} 
          onClick={toggleMenu}
          aria-label="Abrir menú"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        <nav className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          <ul>
            <li><a href="#inicio" onClick={closeMenu}>Inicio</a></li>
            <li><a href="#sobre-mi" onClick={closeMenu}>Sobre Mí</a></li>
            <li><a href="#formacion" onClick={closeMenu}>Formación</a></li>
            <li><a href="#trabajos" onClick={closeMenu}>Trabajos</a></li>
            <li><a href="#experiencia" onClick={closeMenu}>Experiencia Laboral</a></li>
          </ul>
        </nav>
      </header>

      {/* 1. Inicio */}
      <section id="inicio" className="section hero">
        <div className="hero-content">
          <div className="profile-img-container">
            <img 
              src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80&w=400" 
              alt="Debora Escobar - Estilista Profesional" 
              className="profile-img"
            />
          </div>
          <h1>Debora Escobar</h1>
          <h2>Barbera & Estilista Profesional</h2>
          <p>Más de 10 años de trayectoria transformando la imagen, con especialización en barbería de precisión, trenzas y colorimetría.</p>
          <a href="#trabajos" className="btn-primary">Ver Trabajos</a>
        </div>
      </section>

      {/* 2. Sobre Mí */}
      <section id="sobre-mi" className="section bg-card">
        <div className="container">
          <h2 className="section-title">Sobre Mí</h2>
          <p className="bio-text">
            Profesional especializada en barbería y estilismo con más de una década de trayectoria en el sector. Mi enfoque combina una sólida destreza técnica en cortes, barbas, colorimetría y trenzas con una atención cálida y personalizada. Priorizo la escucha activa y el asesoramiento integral para garantizar que cada cliente experimente un servicio de excelencia, logrando resultados alineados con su identidad y estilo en un ambiente de absoluta confianza y respeto.
          </p>
        </div>
      </section>

      {/* 3. Formación */}
      <section id="formacion" className="section">
        <div className="container">
          <h2 className="section-title">Formación Académica & Certificaciones</h2>
          <div className="cards-grid">
            
            {/* Certificado Revlon 2019 */}
            <div className="card card-with-img">
              <div className="cert-img-container">
                <img src="/assets/2f32703e-bf2b-4998-9651-d83a269a5152.jfif" alt="Certificado Técnico en Colorimetría - Revlon Professional" />
              </div>
              <div className="card-content">
                <span className="year">2019</span>
                <h3>Técnico en Colorimetría</h3>
                <p className="institution">Revlon Professional</p>
                <p>Especialización técnica oficial en diagnóstico capilar, fórmulas de coloración avanzada y técnicas de aclaración.</p>
              </div>
            </div>

            {/* Certificado Ringo Academy 2018 */}
            <div className="card card-with-img">
              <div className="cert-img-container">
                <img src="/assets/WhatsApp Image 2026-10-26 at 00.03.58 (2).jpeg" alt="Certificado Barbero Expert - Ringo Professional Academy" />
              </div>
              <div className="card-content">
                <span className="year">2018</span>
                <h3>Barbero Expert</h3>
                <p className="institution">Ringo Professional Academy</p>
                <p>Capacitación intensiva en técnicas de barbería moderna, perfilado de barba, corte masculino y degradados (fades).</p>
              </div>
            </div>

            {/* Certificado EPyECC 2017 */}
            <div className="card card-with-img">
              <div className="cert-img-container">
                <img src="/assets/WhatsApp Image 2026-10-26 at 00.03.57.jpeg" alt="Certificado Curso de Color - EPyECC" />
              </div>
              <div className="card-content">
                <span className="year">2017</span>
                <h3>Curso de Color</h3>
                <p className="institution">EPyECC (Enseñanza de Peluquería y Estilos - Claudia Cuellar)</p>
                <p>Formación especializada en aplicación de tonos, matices, decoloración y tendencias de colorimetría capilar.</p>
              </div>
            </div>

            {/* Certificado Question 2017 */}
            <div className="card card-with-img">
              <div className="cert-img-container">
                <img src="/assets/WhatsApp Image 2026-10-26 at 00.03.57 (1).jpeg" alt="Seminario Creaciones & Tendencias - Question Professional" />
              </div>
              <div className="card-content">
                <span className="year">2017</span>
                <h3>Seminario Creaciones & Tendencias</h3>
                <p className="institution">Question Professional — Talleres Question</p>
                <p>Seminario técnico de perfeccionamiento en tendencias de temporada, estilismo contemporáneo y técnicas de peinado.</p>
              </div>
            </div>

            {/* Certificado In Coiffeur Academia */}
            <div className="card card-with-img">
              <div className="cert-img-container">
                <img src="/assets/WhatsApp Image 2026-10-26 at 00.03.58 (1).jpeg" alt="Certificado Permanente, Color, Corte y Peinado - In Coiffeur Academia" />
              </div>
              <div className="card-content">
                <span className="year">Ezeiza, Bs. As.</span>
                <h3>Permanente, Color, Corte y Peinado</h3>
                <p className="institution">In Coiffeur Academia (Cámara Patronos y Peinadores Sur)</p>
                <p>Curso integral avalado institucionalmente sobre técnicas de ondulado permanente, corte estructural y armado de peinados.</p>
              </div>
            </div>

            {/* Certificado Adela Sanz 2006 */}
            <div className="card card-with-img">
              <div className="cert-img-container">
                <img src="/assets/WhatsApp Image 2026-10-26 at 00.03.58.jpeg" alt="Diploma Peluquería Integral - Adela Sanz" />
              </div>
              <div className="card-content">
                <span className="year">2006</span>
                <h3>Peluquería Integral</h3>
                <p className="institution">Adela Sanz — Formación de Profesionales en Estética y Belleza</p>
                <p>Diploma profesional base que acredita la formación completa en fundamentos de peluquería, salud del cabello y estilismo.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Trabajos */}
      <section id="trabajos" className="section bg-card">
        <div className="container">
          <h2 className="section-title">Trabajos</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=500" alt="Diseño de Color" />
              <div className="gallery-overlay">
                <span>Colorimetría</span>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=500" alt="Balayage Gold" />
              <div className="gallery-overlay">
                <span>Balayage Gold</span>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&q=80&w=500" alt="Corte Bob Moderno" />
              <div className="gallery-overlay">
                <span>Corte Bob Moderno</span>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&q=80&w=500" alt="Peinado de Eventos" />
              <div className="gallery-overlay">
                <span>Peinado Social & Novias</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Debora Escobar — Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;