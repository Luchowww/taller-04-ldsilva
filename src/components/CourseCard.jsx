import './CourseCard.css';

function CourseCard(props) {
  return (
    <div className="course-card">
        <div className="course-icon">{props.icono}</div>
        <h2 className="course-title">{props.titulo}</h2>    
        <p className="course-description">{props.descripcion}</p>
        <span className="course-badge">{props.nivel}</span>
    </div>
  );
}

export default CourseCard;