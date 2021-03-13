// vendors
import { useContext } from 'react';

// context
import taskContext from '../../context/tasks/taskContext';

function Task({ task }) {
  const taskCxt = useContext(taskContext);
  const { deleteTask, changeTaskState, setCurrentTask } = taskCxt;

  const handleClick = () => {
    deleteTask(task.id);
  };

  const handleChangeState = () => changeTaskState(task);

  const handleSelectTask = () => setCurrentTask(task);

  return (
    <li className="tarea sombra">
      <p>{task.name}</p>
      <div className="state">
        {task.state ? (
          <button
            type="button"
            className="completo"
            onClick={handleChangeState}
          >
            Completo
          </button>
        ) : (
          <button
            type="button"
            className="incompleto"
            onClick={handleChangeState}
          >
            Incompleto
          </button>
        )}
      </div>
      <div className="acciones">
        <button
          type="button"
          className="btn btn-primario"
          onClick={handleSelectTask}
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn-secundario"
          onClick={handleClick}
        >
          Eliminar
        </button>
      </div>
    </li>
  );
}

export default Task;
