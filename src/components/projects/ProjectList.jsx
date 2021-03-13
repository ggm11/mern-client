// vendors
import { useContext, useEffect } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

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

  if (projects.length === 0)
    return <p>No hay proyectos, comienza creando uno</p>;

  return (
    <ul className="listado-proyectos">
      <TransitionGroup>
        {projects.map((project) => (
          <CSSTransition timeout={200} classNames="proyecto" key={project.id}>
            <Project project={project} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
}

export default ProjectList;
