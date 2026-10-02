import { Link } from 'react-router-dom';
import './Views.css';

function NotFound() {
  return (
    <section className="page-section">
      <h1>404</h1>
      <p>La página que buscas no existe.</p>
      <Link to="/" className="page-link">Volver al inicio</Link>
    </section>
  );
}

export default NotFound;
