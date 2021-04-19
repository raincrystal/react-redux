import { combineReducers } from "redux"

import TasksState from "./tasks/reducers"

const rootReducer = combineReducers({
  TasksState,
})

export default rootReducer
