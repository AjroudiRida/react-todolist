import { useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import "./style.css";
export default function Todo() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [isFormSubmit, setIsFormSubmit] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("todos")) {
      const storedTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos([...storedTodos]);
    }
  },[]) 

  useEffect(() => {
    if (todos.length) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  function formSubmit(e) {
    e.preventDefault();
    setIsFormSubmit(true);
    setTodos((current) => {
      return [...current, { id: crypto.randomUUID(), title: newTodo }];
    });
    setNewTodo("");
  }

  function deletTodo(id) {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  }

  return (
    <div className="section-main">
      <div className="container">
        <h1 className="todo-title">Todos</h1>
        <TodoForm
          handleChange={(e) => setNewTodo(e.target.value)}
          handleFormSubmit={formSubmit}
          value={newTodo}
        />
        <TodoList todoItems={todos} deleteItem={deletTodo} />
      </div>
    </div>
  );
}
