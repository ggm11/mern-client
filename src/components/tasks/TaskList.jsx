import Task from './Task';

function TaskList() {
  const projectTasks = [
    { name: 'Elegir plataforma', state: true },
    { name: 'Elegir Colores', state: false },
    { name: 'Elegir Plataformas de pago', state: false },
    { name: 'Elegir Hosting', state: true },
  ];
  return (
    <>
      <h2>Proyecto: Tienda Virtual</h2>
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
  );
}

export default TaskList;
