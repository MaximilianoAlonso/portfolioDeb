import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { categoriasTrabajos } from '../data/trabajosData';

function CategoriaDetalle() {
  const { categoriaId } = useParams();
  const categoria = categoriasTrabajos[categoriaId];

  if (!categoria) {
    return (
      <div className="container" style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h2>Categoría no encontrada</h2>
        <Link to="/" className="btn-primary" style={{ marginTop: '20px', display: 'inline-block' }}>
          Volver al Inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="portfolio-container">
      {/* Botón para volver atrás */}
      <header className="navbar">
        <Link to="/" className="logo">Debora Escobar</Link>
        <Link to="/" className="btn-primary" style={{ padding: '8px 16px', fontSize: '14px' }}>
          ← Volver
        </Link>
      </header>

      <section className="section" style={{ paddingTop: '120px' }}>
        <div className="container">
          <h2 className="section-title">{categoria.title}</h2>
          <p style={{ textAlign: 'center', marginBottom: '40px', color: '#888' }}>
            {categoria.descripcion}
          </p>

          {/* Galería de fotos de esta categoría */}
          <div className="gallery-grid">
            {categoria.fotos.length > 0 ? (
              categoria.fotos.map((item, index) => (
                <div className="gallery-item" key={index}>
                  <img src={item.img} alt={item.title} />
                  <div className="gallery-overlay">
                    <span>{item.title}</span>
                  </div>
                </div>
              ))
            ) : (
              <p style={{ textAlign: 'center', gridColumn: '1 / -1', color: '#777' }}>
                Próximamente se agregarán fotos a esta sección.
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

export default CategoriaDetalle;