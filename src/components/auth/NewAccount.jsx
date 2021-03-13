// vendors
import { useState } from 'react';
import { Link } from 'react-router-dom';

function NewAccount() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirm: '',
  });

  const { name, email, password, confirm } = user;

  const handleOnChange = (e) =>
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

  const handleOnSubmit = () => {};

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Crear una cuenta</h1>
        <form onSubmit={handleOnSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Tu nombre"
              value={name}
              onChange={handleOnChange}
            />
          </div>
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
            <label htmlFor="email">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu password"
              onChange={handleOnChange}
              value={password}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="email">Confirmar password</label>
            <input
              type="password"
              id="confirm"
              name="confirm"
              placeholder="Confirmacion de password"
              onChange={handleOnChange}
              value={confirm}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Registrar"
            />
          </div>
        </form>
        <Link to={'/'} className="enlace-cuenta">
          Volver a iniciar sesion
        </Link>
      </div>
    </div>
  );
}

export default NewAccount;
