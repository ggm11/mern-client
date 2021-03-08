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
        ) :
        (projectTasks.map((task) => (
          <Task task={task} />
        )))}
      </ul>
    </>
  );
}

export default TaskList;
