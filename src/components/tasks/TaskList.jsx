// vendors
import { useContext } from 'react';

// components
import Task from './Task';

// context
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

function TaskList() {
  const projectCxt = useContext(projectContext);
  const { selectedProject, deleteProject } = projectCxt;

  const taskCxt = useContext(taskContext);
  const { tasksBySelectedProject } = taskCxt;

  if (!selectedProject) return <h2>Selecciona un proyecto</h2>;
  const [project] = selectedProject;

  const handleClick = () => {
    deleteProject(project.id);
  };

  return (
    selectedProject && (
      <>
        <h2>Proyecto: {project.name}</h2>
        <ul className="listado-tareas">
          {tasksBySelectedProject.length === 0 ? (
            <li className="tarea">
              <p>No hay tareas</p>
            </li>
          ) : (
            tasksBySelectedProject.map((task, index) => (
              <Task key={index} task={task} />
            ))
          )}
        </ul>
        <button
          type="button"
          className="btn btn-eliminar"
          onClick={handleClick}
        >
          Eliminar Proyecto &times;
        </button>
      </>
    )
  );
}

export default TaskList;
