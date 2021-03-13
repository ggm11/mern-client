// vendors
import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

// context
import projectContext from './projectContext';

// reducer
import projectReducer from './projectReducer';

// constants
import {
  PROJECT_FORM_VISIBILITY,
  PROJECT_GET_PROJECTS,
  PROJECT_SET_PROJECT,
  PROJECT_NAME_EMPTY_ALERT,
  PROJECT_SELECTED_PROJECT,
  PROJECT_DELETE_PROJECT,
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
    isNameEmpty: false,
    selectedProject: null,
  };

  const [state, dispatch] = useReducer(projectReducer, initialState);

  const showProjectForm = () => dispatch({ type: PROJECT_FORM_VISIBILITY });

  const getProjects = () =>
    dispatch({ type: PROJECT_GET_PROJECTS, payload: projects });

  const setProject = (name) =>
    dispatch({ type: PROJECT_SET_PROJECT, payload: { id: uuidv4(), name } });

  const setNameIsEmpty = () => dispatch({ type: PROJECT_NAME_EMPTY_ALERT });

  const setSelectedProject = (projectId) =>
    dispatch({ type: PROJECT_SELECTED_PROJECT, payload: projectId });

  const deleteProject = (projectId) =>
    dispatch({ type: PROJECT_DELETE_PROJECT, payload: projectId });

  return (
    <projectContext.Provider
      value={{
        form: state.form,
        projects: state.projects,
        showProjectForm,
        isNameEmpty: state.isNameEmpty,
        selectedProject: state.selectedProject,
        getProjects,
        setProject,
        setNameIsEmpty,
        setSelectedProject,
        deleteProject,
      }}
    >
      {props.children}
    </projectContext.Provider>
  );
};

export default ProjectState;
