import CourseCard from './CourseCard';
import './CoursesSection.css';

const cursos = [
  { icono: "⚛️", titulo: "React Básico", descripcion: "Componentes, props, estado y eventos. Todo lo que necesitas para empezar.", nivel: "Principiante" },
  { icono: "🔁", titulo: "React Hooks", descripcion: "Profundiza en useState, useEffect y crea tus propios custom hooks.", nivel: "Intermedio" },
  { icono: "📁", titulo: "Estado Global", descripcion: "Gestiona el estado con Context API y aprende cuándo usarlo.", nivel: "Intermedio" },
  { icono: "🚀", titulo: "React Avanzado", descripcion: "Rendimiento, patrones avanzados y arquitectura para proyectos grandes.", nivel: "Avanzado" }
];

function CoursesSection() {
  return (
    <section className="courses-section">
    <h2 style={{ color: '#0d1120' }}>Nuestros Cursos</h2>
    <p className="courses-subtitle">Elige el camino que mejor se adapte a ti</p>
      <div className="courses-grid">
        {cursos.map((curso) => (
          <CourseCard 
            key={curso.titulo}
            icono={curso.icono}
            titulo={curso.titulo}
            descripcion={curso.descripcion}
            nivel={curso.nivel}
          />
        ))}
      </div>
    </section>
  );
}

export default CoursesSection;