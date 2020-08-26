import { combineReducers } from "redux";
import counter from "./counter2";
import todos from "./todos";
// import todos from "./todos/reducer";
import counter3, { counterSaga } from "./counter3";
import { all } from 'redux-saga/effects';

const rootReducer = combineReducers({
  counter,
  todos,
  counter3,
});

export function* rootSaga () {
  yield all([counterSaga()]);
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
