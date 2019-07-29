import React, {useState} from 'react';


import './App.css';

function App() {
  const [todos, setTodos] = useState([{text: "Learn about React"}, {text: "Meet friend for lunch"}, {text: "Build really cool todo app"}]);
   const Todo = ({todo}) => <div className="todo">{todo.text}</div>
  return (
    <div className="App">
      <h1>TODO REACT HOOK APP</h1>
     <div className="todo-list">
      {todos.map((todo, index) => (
        <Todo key={index} index={index} todo={todo}/>
      ))}
     </div>
    </div>
  );
}

export default App;
