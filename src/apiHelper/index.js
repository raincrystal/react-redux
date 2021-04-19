import { get, post, put, del } from './crud';
import { url_AddTask, url_deleteTask, url_getTask, url_updateTask, url_updateTaskStatus } from './urlLinks';


export const getTaskRec = async (params) => {
  const { page, limit } = params;
  return await get(url_getTask + `?page=${page}&limit=${limit}`);
};

export const addTaskRec = async (params) => {
  return await post(url_AddTask, params);
};

export const updateTaskRec = async (params) => {
  return await put(url_updateTask, params);
};

export const updateTaskStatus = async (params) => {
  return await put(url_updateTaskStatus , params);
};

export const deleteTaskRec = async (params) => {
    return await del(url_deleteTask + `?id=${params}`);
};
