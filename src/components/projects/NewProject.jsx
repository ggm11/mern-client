// vendors
import { useContext, useState } from 'react';

// context
import projectContext from '../../context/projects/projectContext';

function NewProject() {
  const projectCxt = useContext(projectContext);
  const {
    form,
    showProjectForm,
    setProject,
    setNameIsEmpty,
    isNameEmpty,
    resetEmptyNameAlert,
  } = projectCxt;

  const [projectName, setProjectName] = useState({
    name: '',
  });

  const { name } = projectName;

  const handleOnChangeProject = (e) => {
    setProjectName({
      ...projectName,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitProject = (e) => {
    e.preventDefault();
    if (name === '') return setNameIsEmpty();
    setProject(name);
    setProjectName({ name: '' });
    resetEmptyNameAlert();
  };

  const handleClick = () => showProjectForm();

  return (
    <>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={handleClick}
      >
        Nuevo proyecto
      </button>
      {form ? (
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
      ) : null}
      {isNameEmpty && <div>El nombre del proyecto no puede estar vacio</div>}
    </>
  );
}

export default NewProject;
