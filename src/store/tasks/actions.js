import {
  GET_TASK,
  GET_TASK_SUCCESSFUL,
  GET_TASK_FAILED,
  UPDATE_TASK,
  UPDATE_TASK_SUCCESSFUL,
  UPDATE_TASK_FAILED,
  UPDATE_TASK_STATUS,
  UPDATE_STATUS_TASK_SUCCESSFUL,
  UPDATE_STATUS_TASK_FAILED,
  ADD_TASK,
  ADD_TASK_SUCCESSFUL,
  ADD_TASK_FAILED,
  DELETE_TASK,
  DELETE_TASK_SUCCESSFUL,
} from './actionTypes';

//Get Task
export const getTask = (params) => ({
  type: GET_TASK,
  payload: params,
});

export const getTaskSuccessful = (stores) => {
  return {
    type: GET_TASK_SUCCESSFUL,
    payload: stores,
  };
};

export const getTaskFailed = (error) => {
  return {
    type: GET_TASK_FAILED,
    payload: error,
  };
};


//Update Task Status

export const addTask = (stores) => {
  return {
    type: ADD_TASK,
    payload: stores,
  };
};

export const  addTaskSuccessful = (payload) => {
  return {
    type: ADD_TASK_SUCCESSFUL,
    payload,
  };
};

export const addTaskFailed = (error) => {
  return {
    type: ADD_TASK_FAILED,
    payload: error,
  };
};

//Update Task
export const updateTask = (stores) => {
  return {
    type: UPDATE_TASK,
    payload: stores,
  };
};

export const updateTaskSuccessful = (stores) => {
  return {
    type: UPDATE_TASK_SUCCESSFUL,
    payload: stores,
  };
};

export const updateTaskFailed = (error) => {
  return {
    type: UPDATE_TASK_FAILED,
    payload: error,
  };
};

//Update Task Status

export const updateTaskStatus = (stores) => {
  return {
    type: UPDATE_TASK_STATUS,
    payload: stores,
  };
};

export const updateTaskStatusSuccessful = (stores) => {
  return {
    type: UPDATE_STATUS_TASK_SUCCESSFUL,
    payload: stores,
  };
};

export const updateTaskStatusFailed = (error) => {
  return {
    type: UPDATE_STATUS_TASK_FAILED,
    payload: error,
  };
};

//delete
export const deleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id,
  };
};

export const deleteTaskSuccessful = (id) => {
  return {
    type: DELETE_TASK_SUCCESSFUL,
    payload: id,
  };
};
