// vendors
import { useReducer } from 'react';

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
} from '../../types';

const TaskState = (props) => {
  const initialState = {
    tasks: [
      { name: 'Elegir plataforma', state: true, projectId: 1 },
      { name: 'Elegir Colores', state: false, projectId: 2 },
      { name: 'Elegir Plataformas de pago', state: false, projectId: 3 },
      { name: 'Elegir Hosting', state: true, projectId: 4 },
      { name: 'Elegir plataforma', state: true, projectId: 1 },
      { name: 'Elegir Colores', state: false, projectId: 2 },
      { name: 'Elegir Plataformas de pago', state: false, projectId: 3 },
      { name: 'Elegir Hosting', state: true, projectId: 4 },
      { name: 'Elegir plataforma', state: true, projectId: 1 },
      { name: 'Elegir Colores', state: false, projectId: 2 },
      { name: 'Elegir Plataformas de pago', state: false, projectId: 3 },
      { name: 'Elegir Hosting', state: true, projectId: 4 },
      { name: 'Elegir plataforma', state: true, projectId: 3 },
    ],
    tasksBySelectedProject: null,
    taskError: false,
  };

  const [state, dispatch] = useReducer(taskReducer, initialState);

  const getTasksById = (projectId) =>
    dispatch({ type: TASK_PROJECT_TASKS, payload: projectId });

  const createTask = ({ task, projectId }) =>
    dispatch({
      type: TASK_CREATE_TASK,
      payload: { name: task, state: false, projectId },
    });

  const validateTask = () => dispatch({ type: TASK_VALIDATE_TASK });

  const deleteTask = (id) => dispatch({ type: TASK_DELETE_TASK, payload: id });

  return (
    <taskContext.Provider
      value={{
        tasks: state.tasks,
        tasksBySelectedProject: state.tasksBySelectedProject,
        taskError: state.taskError,
        getTasksById,
        createTask,
        validateTask,
        deleteTask,
      }}
    >
      {props.children}
    </taskContext.Provider>
  );
};

export default TaskState;
