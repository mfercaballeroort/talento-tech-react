// App.jsx

// 1. Importaciones de los componentes nuevos (E-commerce)
import Layout from './components/Layout';
import TarjetaProducto from './components/TarjetaProducto';

// 2. Importaciones de tus componentes anteriores actualizadas
import { Bienvenida } from "./components/Bienvenida";
import Encabezado from "./components/Encabezado";
import CuerpoPosteo from "./components/CuerpoPosteo";
import PieDePosteo from "./components/PieDePosteo";  
import Asistente from "./components/Asistente"; 

// ... resto de tu código

function App() {
  // 1. Datos de tu feature anterior (Asistentes)
  const asistentes = [
    { nombre: 'Juan Pérez', tarea: 'Frontend Developer', emoji: '💻' },
    { nombre: 'Ana Gómez', tarea: 'Diseñadora UX/UI', emoji: '🎨' },
    { nombre: 'Carlos Ruiz', tarea: 'Backend Developer', emoji: '⚙️' }
  ];

  // 2. Datos del nuevo feature (Catálogo de E-commerce)
  const catalogo = [
    { id: 1, nombre: 'Notebook Pro 15"', precio: 1250000, imagen: '' },
    { id: 2, nombre: 'Monitor Ultrawide 34"', precio: 450000, imagen: '' },
    { id: 3, nombre: 'Teclado Mecánico Wireless', precio: 85000, imagen: '' },
  ];

  return (
    <Layout>
      {/* === SECCIÓN LEGACY (COMENTADA) === 
        Descomentá esta sección si querés volver a ver tus componentes de posteos 
      */}
      {/* <section style={{ marginBottom: '4rem' }}>
        <Bienvenida/>
        <Encabezado/>
        <CuerpoPosteo/>
        <PieDePosteo/>
        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
          {asistentes.map((asistente, index) => (
            <Asistente 
              key={index}
              nombre={asistente.nombre}
              tarea={asistente.tarea}
              emoji={asistente.emoji}
            />
          ))}
        </div>
      </section>
      */}

      {/* === NUEVA SECCIÓN: E-COMMERCE === */}
      <section>
        <h2 style={{ marginBottom: '2rem', color: 'var(--text-h)' }}>
          Catálogo de Productos
        </h2>
        <div className="grid-productos">
          {catalogo.map((producto) => (
            <TarjetaProducto 
              key={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              imagen={producto.imagen}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default App;