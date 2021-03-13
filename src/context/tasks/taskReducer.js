// types
import {
  TASK_PROJECT_TASKS,
  TASK_CREATE_TASK,
  TASK_VALIDATE_TASK,
  TASK_DELETE_TASK,
  TASK_CHANGE_TASK_STATE,
  TASK_CURRENT_TASK,
  TASK_UPDATE_TASK,
  TASK_RESET_CURRENT_TASK,
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
        tasks: [action.payload, ...state.tasks],
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
          (task) => task.id !== action.payload
        ),
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case TASK_CHANGE_TASK_STATE:
      return {
        ...state,
        tasksBySelectedProject: state.tasksBySelectedProject.map((task) =>
          task.id === action.payload.id ? { ...task, state: !task.state } : task
        ),
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id ? { ...task, state: !task.state } : task
        ),
      };
    case TASK_CURRENT_TASK:
      return {
        ...state,
        currentTask: action.payload,
      };
    case TASK_UPDATE_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, name: action.payload.name }
            : task
        ),
      };
    case TASK_RESET_CURRENT_TASK:
      return {
        ...state,
        currentTask: null,
      };
    default:
      return state;
  }
};

export default taskReducer;
