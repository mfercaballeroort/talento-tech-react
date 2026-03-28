import { Bienvenida } from "./components/Bienvenida";
import Encabezado from "./Encabezado";
import CuerpoPosteo from "./CuerpoPosteo";
import PieDePosteo from "./PieDePosteo";  
 import Asistente from "./Asistente"; 
function App() {
  const asistentes = [
    { nombre: 'Juan Pérez', tarea: 'Frontend Developer', emoji: '💻' },
    { nombre: 'Ana Gómez', tarea: 'Diseñadora UX/UI', emoji: '🎨' },
    { nombre: 'Carlos Ruiz', tarea: 'Backend Developer', emoji: '⚙️' }
  ];
  return (
    <>
     <Bienvenida/>
      <Encabezado/>
      <CuerpoPosteo/>
      <PieDePosteo/>
    {asistentes.map((asistente, index) => (
        <Asistente 
          key={index}
          nombre={asistente.nombre}
          tarea={asistente.tarea}
          emoji={asistente.emoji}
        />
      ))}
    </>
  );
}

export default App;
