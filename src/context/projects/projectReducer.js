import {
  PROJECT_FORM_VISIBILITY,
  PROJECT_GET_PROJECTS,
  PROJECT_SET_PROJECT,
  PROJECT_NAME_EMPTY_ALERT,
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
    default:
      return state;
  }
};

export default projectReducer;
