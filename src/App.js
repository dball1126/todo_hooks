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
  const [todos, setTodos] = useState([{ text: "Learn about React", isCompleted: false }, { text: "Meet friend for lunch", isCompleted: false }, { text: "Build really cool todo app", isCompleted: false}]);
  const Todo = ({ todo, index, isCompleted }) => <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>{todo.text}<button onClick={() => completeTodo(index)}>Done</button><button onClick={() => removeTodo(index)}>X</button></div>

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos)
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <h1>TODO REACT HOOK APP</h1>
     <div className="todo-list">
      {todos.map((todo, index) => (
        <Todo key={index} index={index} todo={todo} completeTodo={completeTodo}/>
      ))}
      <h3>Add New Todo</h3>
      <TodoForm addTodo={addTodo} />
     </div>
    </div>
  );
}

export default App;
