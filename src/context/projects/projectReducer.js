import {
  PROJECT_FORM_VISIBILITY,
  PROJECT_GET_PROJECTS,
  PROJECT_SET_PROJECT,
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
      };
    default:
      return state;
  }
};

export default projectReducer;
