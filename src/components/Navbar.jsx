import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">ReactAcademy</Link>

      <div className="navbar-links">
        <NavLink to="/" end>Inicio</NavLink>
        <NavLink to="/cursos">Cursos</NavLink>
        <NavLink to="/nosotros">Nosotros</NavLink>
        <NavLink to="/login">Login</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
