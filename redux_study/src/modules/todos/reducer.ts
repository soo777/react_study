import { createReducer } from "typesafe-actions";
import { TodosAction, TodosState } from "./types";
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from "./actions";

const initialState: TodosState = [
  { id: 1, text: "aaa", done: true },
  { id: 2, text: "bbb", done: true },
  { id: 3, text: "ccc", done: false },
];

const todos = createReducer<TodosState, TodosAction>(initialState, {
  [ADD_TODO]: (state, { payload: text }) =>
    state.concat({
      id: Math.max(...state.map(todo => todo.id)) + 1,
      text,
      done: false,
    }),
  [TOGGLE_TODO]: (state, { payload: id }) =>
    state.map(todo => (todo.id === id ? { ...todo, done: !todo.done } : todo)),
  [REMOVE_TODO]: (state, { payload: id }) =>
    state.filter(todo => todo.id !== id),
});

export default todos;