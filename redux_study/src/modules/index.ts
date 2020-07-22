import { combineReducers } from "redux";
import counter from "./counter2";
import todos from "./todos";
// import todos from "./todos/reducer";

const rootReducer = combineReducers({
  counter,
  todos,

});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;