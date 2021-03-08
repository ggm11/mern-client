import { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const { email, password } = user;

  const handleOnChange = (e) =>
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

  const handleOnSubmit = () => {};

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Iniciar Sesion</h1>
        <form onSubmit={handleOnSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu email"
              value={email}
              onChange={handleOnChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Contrasena</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu password"
              value={password}
              onChange={handleOnChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Iniciar Sesion"
            />
          </div>
        </form>
        <Link to={'/new-account'} className="enlace-cuenta">
          Obtener cuenta
        </Link>
      </div>
    </div>
  );
}

export default Login;
