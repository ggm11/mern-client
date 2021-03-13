// vendors
import { useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

// context
import taskContext from './taskContext';

// reducer
import taskReducer from './taskReducer';

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

const TaskState = (props) => {
  const initialState = {
    tasks: [
      { id: 1, name: 'Elegir plataforma', state: true, projectId: 1 },
      { id: 2, name: 'Elegir Colores', state: false, projectId: 2 },
      { id: 3, name: 'Elegir Plataformas de pago', state: false, projectId: 3 },
      { id: 4, name: 'Elegir Hosting', state: true, projectId: 4 },
      { id: 5, name: 'Elegir plataforma', state: true, projectId: 1 },
      { id: 6, name: 'Elegir Colores', state: false, projectId: 2 },
      { id: 7, name: 'Elegir Plataformas de pago', state: false, projectId: 3 },
      { id: 8, name: 'Elegir Hosting', state: true, projectId: 4 },
      { id: 9, name: 'Elegir plataforma', state: true, projectId: 1 },
      { id: 10, name: 'Elegir Colores', state: false, projectId: 2 },
      {
        id: 11,
        name: 'Elegir Plataformas de pago',
        state: false,
        projectId: 3,
      },
      { id: 12, name: 'Elegir Hosting', state: true, projectId: 4 },
      { id: 13, name: 'Elegir plataforma', state: true, projectId: 3 },
    ],
    tasksBySelectedProject: null,
    taskError: false,
    currentTask: null,
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  const getTasksById = (projectId) =>
    dispatch({ type: TASK_PROJECT_TASKS, payload: projectId });

  const createTask = ({ task, projectId }) =>
    dispatch({
      type: TASK_CREATE_TASK,
      payload: { name: task, state: false, projectId, id: uuidv4() },
    });

  const validateTask = () => dispatch({ type: TASK_VALIDATE_TASK });

  const deleteTask = (id) => dispatch({ type: TASK_DELETE_TASK, payload: id });

  const changeTaskState = (task) =>
    dispatch({ type: TASK_CHANGE_TASK_STATE, payload: task });

  const setCurrentTask = (task) =>
    dispatch({ type: TASK_CURRENT_TASK, payload: task });

  const updateTask = (task) =>
    dispatch({ type: TASK_UPDATE_TASK, payload: task });

  const resetCurrentTask = () => dispatch({ type: TASK_RESET_CURRENT_TASK });

  return (
    <taskContext.Provider
      value={{
        tasks: state.tasks,
        tasksBySelectedProject: state.tasksBySelectedProject,
        taskError: state.taskError,
        currentTask: state.currentTask,
        getTasksById,
        createTask,
        validateTask,
        deleteTask,
        changeTaskState,
        setCurrentTask,
        updateTask,
        resetCurrentTask,
      }}
    >
      {props.children}
    </taskContext.Provider>
  );
};

export default TaskState;
