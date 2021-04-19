import { takeEvery, put, call } from 'redux-saga/effects';

import { GET_TASK, UPDATE_TASK, ADD_TASK, DELETE_TASK, UPDATE_TASK_STATUS } from './actionTypes';
import { getTaskSuccessful, getTaskFailed, updateTaskSuccessful, addTaskSuccessful, deleteTaskSuccessful } from './actions';
import { addTaskRec, deleteTaskRec, getTaskRec, updateTaskRec, updateTaskStatus } from '../../apiHelper';


function* fetchTaskData(params) {
  try {
    const response = yield call(getTaskRec, params.payload);
    yield put(getTaskSuccessful(response));
  } catch (error) {
    yield put(getTaskFailed(error));
  }
}

function* addTaskData(params) {

  try {
    const data = yield call(addTaskRec, params.payload);
    yield put(addTaskSuccessful(data));
  } catch (error) {
    yield put(getTaskFailed(error));
  }
}

function* updateTaskData(params) {
  try {
    const response = yield call(updateTaskRec, params.payload);
    yield put(updateTaskSuccessful(response));
  } catch (error) {
    yield put(getTaskFailed(error));
  }
}

function* deleteTaskData(params) {
  try {
     yield call(deleteTaskRec, params.payload);
    yield put(deleteTaskSuccessful(params.payload));
  } catch (error) {
    yield put(getTaskFailed(error));
  }
}

function* updateTaskStatusData(params) {
  try {
     yield call(updateTaskStatus, params.payload);
  } catch (error) {
    yield put(getTaskFailed(error));
  }
}

export function* TasksSaga() {
  yield takeEvery(GET_TASK, fetchTaskData);
  yield takeEvery(UPDATE_TASK, updateTaskData);
  yield takeEvery(UPDATE_TASK_STATUS, updateTaskStatusData)
  yield takeEvery(ADD_TASK, addTaskData);
  yield takeEvery(DELETE_TASK, deleteTaskData);

}

export default TasksSaga;
