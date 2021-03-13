// vendors
import { useContext } from 'react';

// context
import projectContext from '../../context/projects/projectContext';
import taskContext from '../../context/tasks/taskContext';
function Project({ project }) {
  const projectCxt = useContext(projectContext);
  const taskCxt = useContext(taskContext);

  const { setSelectedProject } = projectCxt;
  const { getTasksById } = taskCxt;

  const handleClick = () => {
    setSelectedProject(project.id);
    getTasksById(project.id);
  };

  return (
    <li>
      <button type="button" className="btn btn-blank" onClick={handleClick}>
        {project.name}
      </button>
    </li>
  );
}

export default Project;
