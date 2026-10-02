import { useState } from 'react';
import './Counter.css';

function Counter() {
  const [contador, setContador] = useState(0);

  function sumar() {
    setContador(contador + 1);
  }

  function restar() {
    setContador(contador - 1);
  }

  return (
    <section className="counter-section">
      <h2>Cuántos estudiantes van a inscribirse?</h2>
      <p className="counter-hint">Usa los botones para ajustar el número</p>

      <div className="counter-box">
        <button className="counter-btn" onClick={restar}>−</button>
        <span className="counter-value">{contador}</span>
        <button className="counter-btn" onClick={sumar}>+</button>
      </div>

      <p className="counter-label">estudiantes inscritos</p>
    </section>
  );
}

export default Counter;