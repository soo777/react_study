import React from 'react';
import './App.css';
import Counter from "./components/Counter";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/ TodoList";

function App() {
  return (
      <>
        {/*<Counter />*/}
        <TodoInsert/>
        <TodoList/>
      </>
  )
}

export default App;
