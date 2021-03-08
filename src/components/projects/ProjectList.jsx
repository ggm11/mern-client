// vendors
import { useContext, useEffect } from 'react';

// components
import Project from './Project';

// context
import projectContext from '../../context/projects/projectContext';

function ProjectList() {
  const projectCxt = useContext(projectContext);
  const { projects, getProjects } = projectCxt;

  // TODO: REMOVE THIS ESLINTER
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    getProjects();
  }, []);

  if (projects.length === 0) return null;

  return (
    <ul className="listado-proyectos">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </ul>
  );
}

export default ProjectList;
