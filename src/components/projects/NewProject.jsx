import { useState } from 'react';

function NewProject() {
  const [project, setProject] = useState({
    name: '',
  });

  const { name } = project;

  const handleOnChangeProject = (e) => {
    setProject({
      ...project,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitProject = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <button type="button" className="btn btn-block btn-primario">
        Nuevo proyecto
      </button>
      <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProject}>
        <input
          type="text"
          className="input-text"
          placeholder="Nombre proyecto"
          name="name"
          value={name}
          onChange={handleOnChangeProject}
        />
        <input
          type="submit"
          className="btn btn-block btn-primario"
          value="Agregar Proyecto"
        />
      </form>
    </>
  );
}

export default NewProject;
