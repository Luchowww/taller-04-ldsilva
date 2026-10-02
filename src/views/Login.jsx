import { useState } from 'react';
import './Views.css';

function Login() {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [enviado, setEnviado] = useState(false);

  const hayCamposVacios = correo.trim() === '' || password === '';

  function manejarEnvio(e) {
    e.preventDefault();
    setEnviado(true);
  }

  return (
    <section className="page-section">
      <h1>Iniciar sesión</h1>

      <form className="login-form" onSubmit={manejarEnvio}>
        <label htmlFor="correo">Correo</label>
        <input
          id="correo"
          type="email"
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          disabled={enviado}
        />

        <label htmlFor="password">Contraseña</label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          disabled={enviado}
        />

        <button type="submit" className="login-button" disabled={hayCamposVacios || enviado}>
          Ingresar
        </button>

        <p className="login-microcopy">
          Esto es solo una interfaz: no se valida ningún dato ni existe un usuario real.
        </p>
      </form>
    </section>
  );
}

export default Login;
