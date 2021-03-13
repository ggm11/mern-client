// vendors
import { useContext, useEffect, useState } from 'react';

// context
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';

function TaskForm() {
  const projectCxt = useContext(projectContext);
  const { selectedProject } = projectCxt;

  const taskCxt = useContext(taskContext);
  const {
    taskError,
    createTask,
    validateTask,
    getTasksById,
    currentTask,
    updateTask,
    resetCurrentTask,
  } = taskCxt;

  useEffect(() => {
    if (currentTask) {
      setTask(currentTask.name);
    } else {
      setTask('');
    }
  }, [currentTask]);

  const [task, setTask] = useState('');

  if (!selectedProject) return null;

  const handleChange = (e) => setTask(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task.trim() === '') {
      validateTask();
      return;
    }

    const [selected] = selectedProject;

    if (currentTask === null) {
      createTask({ task, projectId: selected.id });
    } else {
      updateTask({ ...currentTask, name: task });
      resetCurrentTask();
    }

    getTasksById(selected.id);
    setTask('');
  };

  return (
    <div className="formulario">
      <form onSubmit={handleSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre Tarea..."
            name="name"
            value={task}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value={currentTask ? 'Editar Tarea' : 'Agregar Tarea'}
          />
        </div>
      </form>
      {taskError && (
        <p className="alerta-error">El nombre de la tarea es obligatorio</p>
      )}
    </div>
  );
}

export default TaskForm;
