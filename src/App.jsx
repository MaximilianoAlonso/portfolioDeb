import React, { useState } from 'react';
import './App.css';

// Imagen de perfil principal del inicio
import profileImg from './assets/portfolio-index-image.png';

// Importación completa de todas las 46 fotos de la carpeta works
import w1 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.16 (1).jpeg';
import w2 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.16 (2).jpeg';
import w3 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.16.jpeg';
import w4 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.17.jpeg';
import w5 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.18.jpeg';
import w6 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.19 (1).jpeg';
import w7 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.19.jpeg';
import w8 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.20 (1).jpeg';
import w9 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.20.jpeg';
import w10 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.21 (1).jpeg';
import w11 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.21.jpeg';
import w12 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.22.jpeg';
import w13 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.27 (1).jpeg';
import w14 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.27 (2).jpeg';
import w15 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.27 (3).jpeg';
import w16 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.27.jpeg';
import w17 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.28 (1).jpeg';
import w18 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.28.jpeg';
import w19 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.29 (1).jpeg';
import w20 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.29 (2).jpeg';
import w21 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.29.jpeg';
import w22 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.30 (1).jpeg';
import w23 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.30 (2).jpeg';
import w24 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.30.jpeg';
import w25 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.31 (1).jpeg';
import w26 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.31 (2).jpeg';
import w27 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.31 (3).jpeg';
import w28 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.31.jpeg';
import w29 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.32 (1).jpeg';
import w30 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.32 (2).jpeg';
import w31 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.32 (3).jpeg';
import w32 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.32.jpeg';
import w33 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.33 (1).jpeg';
import w34 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.33 (3).jpeg';
import w35 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.33 (4).jpeg';
import w36 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.33.jpeg';
import w37 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.34 (1).jpeg';
import w38 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.34 (2).jpeg';
import w39 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.34 (3).jpeg';
import w40 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.34 (4).jpeg';
import w41 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.34.jpeg';
import w42 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.35 (1).jpeg';
import w43 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.35 (2).jpeg';
import w44 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.35 (3).jpeg';
import w45 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.35.jpeg';
import w46 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.36.jpeg';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Lista con las 46 fotos mapeadas para la galería
  const trabajosList = [
    { img: w1, title: 'Corte & Barbería' },
    { img: w2, title: 'Diseño de Barba' },
    { img: w3, title: 'Estilismo Masculino' },
    { img: w4, title: 'Fade de Precisión' },
    { img: w5, title: 'Colorimetría y Textura' },
    { img: w6, title: 'Corte Clásico & Navaja' },
    { img: w7, title: 'Texturizado Superior' },
    { img: w8, title: 'Fade Bajo con Barba' },
    { img: w9, title: 'Estilo Urbano' },
    { img: w10, title: 'Diseño de Imagen' },
    { img: w11, title: 'Corte Moderno' },
    { img: w12, title: 'Detalle de Nuca & Fades' },
    { img: w13, title: 'Estilismo y Acabado' },
    { img: w14, title: 'Barbería Profesional' },
    { img: w15, title: 'Colorimetría Capilar' },
    { img: w16, title: 'Ondas & Estilismo' },
    { img: w17, title: 'Trabajo Integral' },
    { img: w18, title: 'Corte & Barbería' },
    { img: w19, title: 'Diseño de Barba' },
    { img: w20, title: 'Estilismo Masculino' },
    { img: w21, title: 'Fade de Precisión' },
    { img: w22, title: 'Colorimetría y Textura' },
    { img: w23, title: 'Corte Clásico & Navaja' },
    { img: w24, title: 'Texturizado Superior' },
    { img: w25, title: 'Fade Bajo con Barba' },
    { img: w26, title: 'Estilo Urbano' },
    { img: w27, title: 'Diseño de Imagen' },
    { img: w28, title: 'Corte Moderno' },
    { img: w29, title: 'Detalle de Nuca & Fades' },
    { img: w30, title: 'Estilismo y Acabado' },
    { img: w31, title: 'Barbería Profesional' },
    { img: w32, title: 'Colorimetría Capilar' },
    { img: w33, title: 'Ondas & Estilismo' },
    { img: w34, title: 'Trabajo Integral' },
    { img: w35, title: 'Corte & Barbería' },
    { img: w36, title: 'Diseño de Barba' },
    { img: w37, title: 'Estilismo Masculino' },
    { img: w38, title: 'Fade de Precisión' },
    { img: w39, title: 'Colorimetría y Textura' },
    { img: w40, title: 'Corte Clásico & Navaja' },
    { img: w41, title: 'Texturizado Superior' },
    { img: w42, title: 'Fade Bajo con Barba' },
    { img: w43, title: 'Estilo Urbano' },
    { img: w44, title: 'Diseño de Imagen' },
    { img: w45, title: 'Corte Moderno' },
    { img: w46, title: 'Trabajo Integral' },
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

      {/* 4. Trabajos (Galería con las 46 fotos) */}
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