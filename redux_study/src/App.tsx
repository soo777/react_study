import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Info from "./components/Info";
import ContextSample from "./components/ContextSample";
import Average from "./components/Average";

function App() {
  return (
      <>
        <Counter/>
        <Info/>
        <ContextSample/>
        <Average/>
      </>
  )
}

export default App;
