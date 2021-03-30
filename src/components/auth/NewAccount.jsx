// vendors
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

// context
import alertContext from '../../context/alerts/alertContext';
import authContext from '../../context/authentication/authContext';

function NewAccount() {
  const alertCxt = useContext(alertContext);

  const { alert, showAlert } = alertCxt;

  const authCxt = useContext(authContext);

  const { registryUser } = authCxt;

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

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (
      name.trim() === '' ||
      email.trim() === '' ||
      password.trim() === '' ||
      confirm.trim() === ''
    ) {
      showAlert('Todos los campos son obligatorios', 'alerta-error');
      return;
    }
    if (password.length < 6) {
      showAlert('Password debe ser de al menos 6 caracteres', 'alerta-error');
      return;
    }

    if (password !== confirm) {
      showAlert('Los password no son iguales', 'alerta-error');
      return;
    }

    registryUser({ name, email, password });
  };

  return (
    <div className="form-usuario">
      {alert && <div className={`alerta ${alert.category}`}>{alert.msg}</div>}
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
