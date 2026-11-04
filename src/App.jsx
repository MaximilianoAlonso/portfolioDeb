import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useParams } from 'react-router-dom';
import './App.css';

// Imagen de perfil principal del inicio
import profileImg from './assets/portfolio-index-image.png';

// --- IMPORTACIÓN DE TUS FOTOS (Agrupa aquí tus 46 fotos w1 a w46 según la categoría) ---
import w1 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.16 (1).jpeg';
import w2 from './assets/works/WhatsApp Image 2026-11-02 at 17.14.16 (2).jpeg';
// ... Puedes importar el resto de tus fotos aquí (w3 hasta w46)

// Base de datos de categorías con sus respectivas fotos y descripciones breves
const categoriasTrabajos = {
  'corte-femenino': {
    title: 'Corte Femenino',
    descripcion: 'Cortes estructurados, bob, capas, desmechados y diseño de estilo personalizado según la forma del rostro.',
    fotos: [
      { img: w1, title: 'Corte Bob Estructurado' },
      { img: w2, title: 'Capas Largas y Texturizadas' },
      // Agrega aquí más fotos y descripciones para corte femenino
    ]
  },
  'corte-masculino': {
    title: 'Corte Masculino',
    descripcion: 'Especialista en fades (degradados), cortes clásicos, modernos, perfilado de navaja y diseño de barba.',
    fotos: [
      { img: w1, title: 'Fade Bajo con Barba Definida' },
      { img: w2, title: 'Corte Clásico con Navaja' },
      // Agrega aquí más fotos y descripciones para corte masculino
    ]
  },
  'trenzas': {
    title: 'Trenzas',
    descripcion: 'Diseños de trenzas pegadas, africanas, cocidas y estilos urbanos creativos de alta duración.',
    fotos: [
      { img: w1, title: 'Trenzas Pegadas Urbanas' },
      { img: w2, title: 'Diseño Creativo con 3D' },
      // Agrega aquí más fotos y descripciones para trenzas
    ]
  },
  'color': {
    title: 'Color',
    descripcion: 'Colorimetría avanzada, balayage, mechas, iluminación, global y tintura técnica con cuidado capilar.',
    fotos: [
      { img: w1, title: 'Balayage en Tonos Cálidos' },
      { img: w2, title: 'Coloración Global Platinada' },
      // Agrega aquí más fotos y descripciones para color
    ]
  }
};

// Componente para la vista detallada de cada categoría de trabajos
function CategoriaDetalle() {
  const { categoriaId } = useParams();
  const categoria = categoriasTrabajos[categoriaId];

  if (!categoria) {
    return (
      <div className="portfolio-container" style={{ textAlign: 'center', padding: '100px 20px' }}>
        <h2>Categoría no encontrada</h2>
        <Link to="/" className="btn-primary" style={{ marginTop: '20px', display: 'inline-block', textDecoration: 'none' }}>
          Volver al Inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="portfolio-container">
      {/* Barra de Navegación interna */}
      <header className="navbar">
        <Link to="/" className="logo">Debora Escobar</Link>
        <Link to="/" className="btn-primary" style={{ padding: '8px 16px', fontSize: '14px', textDecoration: 'none' }}>
          ← Volver al Inicio
        </Link>
      </header>

      <section className="section" style={{ paddingTop: '120px' }}>
        <div className="container">
          <h2 className="section-title">{categoria.title}</h2>
          <p style={{ textAlign: 'center', marginBottom: '40px', color: '#aaa', maxWidth: '600px', marginInline: 'auto' }}>
            {categoria.descripcion}
          </p>

          {/* Galería de fotos con descripción */}
          <div className="gallery-grid">
            {categoria.fotos.length > 0 ? (
              categoria.fotos.map((foto, index) => (
                <div className="gallery-item" key={index}>
                  <img src={foto.img} alt={foto.title} />
                  <div className="gallery-overlay">
                    <span>{foto.title}</span>
                  </div>
                </div>
              ))
            ) : (
              <p style={{ textAlign: 'center', gridColumn: '1 / -1', color: '#888', padding: '40px 0' }}>
                Próximamente se cargarán las imágenes correspondientes a esta sección.
              </p>
            )}
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© {new Date().getFullYear()} Debora Escobar — Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

// Componente de la Página Principal (Home)
function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const serviciosList = [
    {
      id: 'corte-femenino',
      title: 'Corte Femenino',
      description: 'Cortes estructurados, bob, capas, desmechados y diseño de estilo personalizado según la forma del rostro.',
      img: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'corte-masculino',
      title: 'Corte Masculino',
      description: 'Especialista en fades (degradados), cortes clásicos, modernos, perfilado de navaja y diseño de barba.',
      img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'trenzas',
      title: 'Trenzas',
      description: 'Diseños de trenzas pegadas, africanas, cocidas y estilos urbanos creativos de alta duración.',
      img: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'color',
      title: 'Color',
      description: 'Colorimetría avanzada, balayage, mechas, iluminación, global y tintura técnica con cuidado capilar.',
      img: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80'
    }
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

      {/* 4. Trabajos / Servicios */}
      <section id="trabajos" className="section bg-card">
        <div className="container">
          <h2 className="section-title">Especialidades & Trabajos</h2>
          <div className="cards-grid">
            {serviciosList.map((servicio) => (
              <Link 
                to={`/trabajos/${servicio.id}`} 
                className="card card-with-img" 
                key={servicio.id}
                style={{ textDecoration: 'none', color: 'inherit', display: 'block', cursor: 'pointer' }}
              >
                <div className="cert-img-container">
                  <img src={servicio.img} alt={servicio.title} />
                </div>
                <div className="card-content">
                  <h3>{servicio.title} ➔</h3>
                  <p>{servicio.description}</p>
                </div>
              </Link>
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

// Componente principal App que envuelve las rutas
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/trabajos/:categoriaId" element={<CategoriaDetalle />} />
      </Routes>
    </Router>
  );
}

export default App;