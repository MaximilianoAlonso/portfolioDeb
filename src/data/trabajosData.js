// src/data/trabajosData.js

// Ejemplo con algunas de tus importaciones (puedes agrupar tus w1 a w46 según corresponda)
import w1 from '../assets/works/WhatsApp Image 2026-11-02 at 17.14.16 (1).jpeg';
import w2 from '../assets/works/WhatsApp Image 2026-11-02 at 17.14.16 (2).jpeg';
import w3 from '../assets/works/WhatsApp Image 2026-11-02 at 17.14.16.jpeg';
import w4 from '../assets/works/WhatsApp Image 2026-11-02 at 17.14.17.jpeg';
// ... importa el resto de fotos que necesites o agrupa las 46 aquí

export const categoriasTrabajos = {
  'corte-femenino': {
    title: 'Corte Femenino',
    descripcion: 'Cortes estructurados, bob, capas y diseño de estilo personalizado.',
    imagenPortada: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80',
    fotos: [
      { img: w1, title: 'Corte Estilizado Femenino' },
      { img: w2, title: 'Diseño y Capas' },
      // Agrega aquí todas las fotos que correspondan a corte femenino
    ]
  },
  'corte-masculino': {
    title: 'Corte Masculino',
    descripcion: 'Fades de precisión, cortes clásicos, modernos y perfilado de barba.',
    imagenPortada: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=800&q=80',
    fotos: [
      { img: w3, title: 'Fade de Precisión' },
      { img: w4, title: 'Corte Clásico & Navaja' },
      // Agrega aquí todas las fotos que correspondan a corte masculino
    ]
  },
  'trenzas': {
    title: 'Trenzas',
    descripcion: 'Diseños de trenzas pegadas, africanas y estilos urbanos creativos.',
    imagenPortada: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80',
    fotos: [
      // Agrega aquí las fotos de trenzas
    ]
  },
  'color': {
    title: 'Color',
    descripcion: 'Colorimetría avanzada, balayage, mechas y tintura técnica.',
    imagenPortada: 'https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=800&q=80',
    fotos: [
      // Agrega aquí las fotos de color
    ]
  }
};