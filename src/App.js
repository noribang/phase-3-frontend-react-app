import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
// import logo from './logo.svg';
// import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // debugger
      fetch("http://localhost:9292/todos")
    .then((r) => r.json())
    .then((todos_data) => setTodos(todos_data))
  }, []);
  // console.log("todos: ", todos)

  // Handler will Add new todo to existing 
  // todos state array.
  function handleAddTodo(newTodo) {
    setTodos([...todos, newTodo])
  } 
  // Handler will Delete todo from existing 
  // todos state array.
  function handleDeleteTodo(id) {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos)
  }

  return (
      <div>
        <Header />
        <NewTodo onAddTodo={handleAddTodo}/>
        <TodoList 
          todos={todos}
          onTodoDelete={handleDeleteTodo}
        />


      </div>
  );
}

export default App;
