// types
import {
  TASK_PROJECT_TASKS,
  TASK_CREATE_TASK,
  TASK_VALIDATE_TASK,
  TASK_DELETE_TASK,
} from '../../types';

const taskReducer = (state, action) => {
  switch (action.type) {
    case TASK_PROJECT_TASKS:
      return {
        ...state,
        tasksBySelectedProject: state.tasks.filter(
          ({ projectId }) => projectId === action.payload
        ),
      };
    case TASK_CREATE_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        tasksBySelectedProject: [
          ...state.tasksBySelectedProject,
          action.payload,
        ],
        taskError: false,
      };
    case TASK_VALIDATE_TASK:
      return {
        ...state,
        taskError: true,
      };
    case TASK_DELETE_TASK:
      return {
        ...state,
        tasksBySelectedProject: state.tasksBySelectedProject.filter(
          (task) => task.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

export default taskReducer;
