import React, { useState } from 'react';
import './App.css';

// Imagen de perfil principal del inicio
import profileImg from './assets/portfolio-index-image.png';

// Importación de las fotos de la carpeta works para la galería
import work1 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.16.jpeg';
import work2 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.17.jpeg';
import work3 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.18.jpeg';
import work4 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.19.jpeg';
import work5 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.20.jpeg';
import work6 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.21.jpeg';
import work7 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.22.jpeg';
import work8 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.27.jpeg';
import work9 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.28.jpeg';
import work10 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.29.jpeg';
import work11 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.30.jpeg';
import work12 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.31.jpeg';
import work13 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.32.jpeg';
import work14 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.33.jpeg';
import work15 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.34.jpeg';
import work16 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.35.jpeg';
import work17 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.36.jpeg';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Lista de trabajos para mapear en la galería sin repetir
  const trabajosList = [
    { img: work1, title: 'Corte & Barbería Degradado' },
    { img: work2, title: 'Diseño y Perfilado de Barba' },
    { img: work3, title: 'Estilismo Masculino Moderno' },
    { img: work4, title: 'Fade de Precisión' },
    { img: work5, title: 'Colorimetría y Textura' },
    { img: work6, title: 'Corte Clásico & Navaja' },
    { img: work7, title: 'Texturizado Superior' },
    { img: work8, title: 'Fade Bajo con Barba' },
    { img: work9, title: 'Estilo Urbano' },
    { img: work10, title: 'Diseño de Imagen' },
    { img: work11, title: 'Corte Moderno' },
    { img: work12, title: 'Detalle de Nuca & Fades' },
    { img: work13, title: 'Estilismo y Acabado' },
    { img: work14, title: 'Barbería Profesional' },
    { img: work15, title: 'Colorimetría Capilar' },
    { img: work16, title: 'Ondas & Estilismo' },
    { img: work17, title: 'Trabajo Integral' },
  ];

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
              src={profileImg} 
              alt="Debora Escobar - Barbera & Estilista Profesional" 
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
            {trabajosList.map((trabajo, index) => (
              <div className="gallery-item" key={index}>
                <img src={trabajo.img} alt={trabajo.title} />
                <div className="gallery-overlay">
                  <span>{trabajo.title}</span>
                </div>
              </div>
            ))}
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