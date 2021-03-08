// vendors
import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

// utils
import projectContext from './projectContext';
import projectReducer from './projectReducer';

// constants
import {
  PROJECT_FORM_VISIBILITY,
  PROJECT_GET_PROJECTS,
  PROJECT_SET_PROJECT,
} from '../../types';

const projects = [
  { id: 1, name: 'Tienda Virtual' },
  { id: 2, name: 'Intranet' },
  { id: 3, name: 'Diseno de Sitio web' },
  { id: 4, name: 'MERN' },
];

const ProjectState = (props) => {
  const initialState = {
    form: false,
    projects: [],
  };

  const [state, dispatch] = useReducer(projectReducer, initialState);

  const showProjectForm = () => {
    dispatch({ type: PROJECT_FORM_VISIBILITY });
  };

  const getProjects = () => {
    dispatch({ type: PROJECT_GET_PROJECTS, payload: projects });
  };

  const setProject = (name) => {
    dispatch({ type: PROJECT_SET_PROJECT, payload: { id: uuidv4(), name } });
  };

  return (
    <projectContext.Provider
      value={{
        form: state.form,
        projects: state.projects,
        showProjectForm,
        getProjects,
        setProject,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
