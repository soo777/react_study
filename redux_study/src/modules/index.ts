import { combineReducers } from "redux";
import counter from "./counter2";

const rootReducer = combineReducers({
  counter
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;