// vendors
import { useContext } from 'react';

// context
import projectContext from '../../context/projects/projectContext';

function Project({ project }) {
  const projectCxt = useContext(projectContext);
  const { setSelectedProject } = projectCxt;

  const handleClick = () => setSelectedProject(project.id);

  return (
    <li>
      <button type="button" className="btn btn-blank" onClick={handleClick}>
        {project.name}
      </button>
    </li>
  );
}

export default Project;
