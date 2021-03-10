// vendors
import { useContext } from 'react';

// components
import Task from './Task';

// context
import projectContext from '../../context/projects/projectContext';

function TaskList() {
  const projectTasks = [
    { name: 'Elegir plataforma', state: true },
    { name: 'Elegir Colores', state: false },
    { name: 'Elegir Plataformas de pago', state: false },
    { name: 'Elegir Hosting', state: true },
  ];

  const projectCxt = useContext(projectContext);
  const { selectedProject } = projectCxt;
  if (!selectedProject) return <h2>Selecciona un proyecto</h2>;
  const [project] = selectedProject;

  return (
    selectedProject && (
      <>
        <h2>Proyecto: {project.name}</h2>
        <ul className="listado-tareas">
          {projectTasks.length === 0 ? (
            <li className="tarea">
              <p>No hay tareas</p>
            </li>
          ) : (
            projectTasks.map((task, index) => <Task key={index} task={task} />)
          )}
        </ul>
        <button type="button" className="btn btn-eliminar">
          Eliminar Proyecto &times;
        </button>
      </>
    )
  );
}

export default TaskList;
