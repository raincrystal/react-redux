import {
  GET_TASK_SUCCESSFUL,
  GET_TASK_FAILED,
  UPDATE_TASK_SUCCESSFUL,
  ADD_TASK_SUCCESSFUL,
  DELETE_TASK_SUCCESSFUL,
} from './actionTypes';

const INIT_STATE = {
  taskList: {},
  updateTask: {},
  addTask: {}
};

const TasksState = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_TASK_SUCCESSFUL:
      return {
        ...state,
        taskList: action.payload,
      };

    case GET_TASK_FAILED:
      return {
        ...state,
        error: action.payload,
      };

    case UPDATE_TASK_SUCCESSFUL:
      const taskIndex = state.taskList.docs.findIndex((doc) => doc._id === action.payload._id);
      const newDocs = [...state.taskList.docs];

      if (taskIndex > -1) {
        newDocs[taskIndex] = action.payload;
      }

      return {
        ...state,
        taskList: {
          ...state.taskList,
          docs: newDocs
        },
        updateTask: action.payload,
      };

    case ADD_TASK_SUCCESSFUL:
      return {
        ...state,
        taskList: {
          ...state.taskList,
          docs: [...state.taskList.docs, action.payload.data]
        },
        addTask: action.payload,
      };

    case DELETE_TASK_SUCCESSFUL:
      return {
        ...state,
        taskList: {
          ...state.taskList,
          docs: state.taskList.docs.filter((doc) => doc._id !== action.payload)
        },
        addTask: action.payload,
      };

    default:
      return state;
  }
};

export default TasksState;
