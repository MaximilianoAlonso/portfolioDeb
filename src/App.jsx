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
          <h2>Estilista Profesional & Hair Designer</h2>
          <p>Especialista en colorimetría, corte de vanguardia y diseño de imagen.</p>
          <a href="#trabajos" className="btn-primary">Ver Trabajos</a>
        </div>
      </section>

      {/* 2. Sobre Mí */}
      <section id="sobre-mi" className="section bg-card">
        <div className="container">
          <h2 className="section-title">Sobre Mí</h2>
          <p className="bio-text">
            Apasionada por la moda y la salud capilar, me dedico a transformar la imagen de cada persona resaltando su belleza única. Con una visión moderna y personalizada, me mantengo en constante actualización en las últimas tendencias y técnicas del mundo de la peluquería y el estilismo.
          </p>
        </div>
      </section>

      {/* 3. Formación */}
      <section id="formacion" className="section">
        <div className="container">
          <h2 className="section-title">Formación</h2>
          <div className="cards-grid">
            <div className="card">
              <span className="year">2022 - 2023</span>
              <h3>Técnica Superior en Colorimetría</h3>
              <p>Especialización en Balayage, Babylights, decoloración consciente y corrección de color.</p>
            </div>
            <div className="card">
              <span className="year">2020 - 2021</span>
              <h3>Diseño de Corte & Visagismo</h3>
              <p>Estudio de morfología facial, arquitectura del cabello y tendencias de corte en seco y húmedo.</p>
            </div>
            <div className="card">
              <span className="year">2019</span>
              <h3>Tratamientos Capilares Avanzados</h3>
              <p>Diagnóstico de cuero cabelludo, nutrirreconstrucción y alisados de última generación.</p>
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

      {/* 5. Experiencia Laboral */}
      <section id="experiencia" className="section">
        <div className="container">
          <h2 className="section-title">Experiencia Laboral</h2>
          <div className="timeline">
            <div className="timeline-item">
              <span className="timeline-date">2022 - Presente</span>
              <h3>Estilista Principal & Studio Lead</h3>
              <p>Atención personalizada, diseño integral de imagen, colorimetría de precisión y estilismo para producciones.</p>
            </div>
            <div className="timeline-item">
              <span className="timeline-date">2019 - 2022</span>
              <h3>Especialista en Color — Salón Vanguardia</h3>
              <p>Asesoramiento de imagen, aplicación de técnicas de aclaración y tratamientos de restauración capilar.</p>
            </div>
            <div className="timeline-item">
              <span className="timeline-date">2017 - 2019</span>
              <h3>Asistente de Estilismo & Peinado</h3>
              <p>Preparación de clientes, lavado técnico, asistencia en cortes y aplicación de tratamientos nutricionales.</p>
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