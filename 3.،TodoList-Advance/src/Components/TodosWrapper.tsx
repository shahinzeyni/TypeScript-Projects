import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";
import { Todo as TodoType } from "./Todos.types";

function TodosWrapper() {
  const [todos, setTodos] = useState<TodoType[]>([]);

  const addTodo = (title: string) => {
    setTodos([
      ...todos,
      {
        id: crypto.randomUUID(),
        title,
        completed: false,
      },
    ]);

    return true;
  };

  const deleteTodo = (id: string) => {
    let newTodo = todos.filter(todo => todo.id !== id)
    setTodos(newTodo)
    return true
  };
  console.log(todos);
  const toggleComplete = (todoId: string) => {
    let NewTodo = todos.map(todo => todo.id === todoId ? {...todo,completed:!todo.completed} : todo)
    setTodos(NewTodo)

    return true
  };

  return (
    <div className="TodoWrapper">
      <h1>Todo List ❤️ </h1>

      <TodoForm addTodo={addTodo} />

      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          deleteTodo={deleteTodo}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
}

export default TodosWrapper;
