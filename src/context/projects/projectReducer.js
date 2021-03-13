// types
import {
  PROJECT_FORM_VISIBILITY,
  PROJECT_GET_PROJECTS,
  PROJECT_SET_PROJECT,
  PROJECT_NAME_EMPTY_ALERT,
  PROJECT_SELECTED_PROJECT,
  PROJECT_DELETE_PROJECT,
} from '../../types';

const projectReducer = (state, action) => {
  switch (action.type) {
    case PROJECT_FORM_VISIBILITY:
      return { ...state, form: true };
    case PROJECT_GET_PROJECTS:
      return { ...state, projects: action.payload };
    case PROJECT_SET_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
        form: false,
        isNameEmpty: false,
      };
    case PROJECT_NAME_EMPTY_ALERT:
      return {
        ...state,
        isNameEmpty: true,
      };
    case PROJECT_SELECTED_PROJECT:
      return {
        ...state,
        selectedProject: state.projects.filter(
          (project) => project.id === action.payload
        ),
      };
    case PROJECT_DELETE_PROJECT:
      return {
        ...state,
        selectedProject: null,
        projects: state.projects.filter(({ id }) => id !== action.payload),
      };
    default:
      return state;
  }
};

export default projectReducer;
