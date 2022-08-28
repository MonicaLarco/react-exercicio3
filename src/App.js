import React from 'react';
import { TodoListV2 } from './hooks/TodoListV2';
import './index.css';


function App() {
  return (
    <div className="App">
      <h1>Todo list</h1>
      <TodoListV2 />
    </div>
  );
}

export default App;
