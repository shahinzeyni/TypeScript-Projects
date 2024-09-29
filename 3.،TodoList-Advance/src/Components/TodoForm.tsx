import React, { useState } from "react";

type TodoFormProps = {
  addTodo:(title:string) => boolean; 
}  


function TodoForm({addTodo}:TodoFormProps) {
  const [value, setValue] = useState<string>("");
  const HandleSubmit = (event:React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
    value.length && addTodo(value)
    setValue("")
  }
  return (
    <form className="TodoForm" onSubmit={HandleSubmit} >
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        className="todo-input"
        placeholder="What is the task today?"
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
}

export default TodoForm;

