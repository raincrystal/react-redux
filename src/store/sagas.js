import { all, fork } from "redux-saga/effects"

import TasksSaga from "./tasks/saga"

export default function* rootSaga() {
    yield all([
        fork(TasksSaga),
    ])
}
