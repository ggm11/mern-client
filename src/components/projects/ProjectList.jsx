import Project from './Project';

function ProjectList() {
  const projects = [
    { name: 'Tienda Virtual' },
    { name: 'Intranet' },
    { name: 'Diseno de Sitio web' },
  ];
  return (
    <ul className="listado-proyectos">
      {projects.map((project) => (
        <Project project={project} />
      ))}
    </ul>
  );
}

export default ProjectList;
