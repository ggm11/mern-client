function Task({ task }) {
  return (
    <li className="tarea sombra">
      <p>{task.name}</p>
      <div className="state">
        {task.state ? (
          <button type="button" className="completo">
            Completo
          </button>
        ) : (
          <button type="button" className="incompleto">
            Incompleto
          </button>
        )}
      </div>
    </li>
  );
}

export default Task;
