import React from 'react';
import './App.css';
import Counter from './hooks/Counter';
import Info from "./hooks/Info";
import ContextSample from "./hooks/ContextSample";
import Average from "./hooks/Average";
import Counter1 from "./components/Counter1";
import MyForm from "./components/MyForm";
import ReducerSample from "./components/ReducerSample";
import Counter2 from "./components/Counter2";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function App() {
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };

  return (
      <>
        {/*<Counter1/>*/}
        {/*<Info/>*/}
        {/*<ContextSample/>*/}
        {/*<Average/>*/}

        {/*<Counter1/>*/}
        {/*<MyForm onSubmit={onSubmit}/>*/}
        {/*<ReducerSample/>*/}

        {/*<Counter2/>*/}

        <TodoInsert />
        <TodoList />
      </>
  )
}

export default App;
