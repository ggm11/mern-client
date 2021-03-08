// components
import NewProject from '../projects/NewProject';
import ProjectList from '../projects/ProjectList';

function Sidebar() {
  return (
    <aside>
      <h1>
        MERN <span>Tasks</span>
        <NewProject />
      </h1>
      <div className="proyectos">
        <h2>Tus Proyectos</h2>
        <ProjectList />
      </div>
    </aside>
  );
}

export default Sidebar;
