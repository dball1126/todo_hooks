import React, {useState} from 'react';


import './App.css';

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
    </form>
  );
}


function App() {
  const [todos, setTodos] = useState([{text: "Learn about React"}, {text: "Meet friend for lunch"}, {text: "Build really cool todo app"}]);
   const Todo = ({todo}) => <div className="todo">{todo.text}</div>

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <h1>TODO REACT HOOK APP</h1>
     <div className="todo-list">
      {todos.map((todo, index) => (
        <Todo key={index} index={index} todo={todo}/>
      ))}
      <TodoForm addTodo={addTodo} />
     </div>
    </div>
  );
}

export default App;
