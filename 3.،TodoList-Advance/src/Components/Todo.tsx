import React from "react";
import { Todo  as TodoType} from "./Todos.types";

type TodoProps = {
  todo: TodoType;
  deleteTodo: (id: string) => boolean;
  toggleComplete: (id: string) => boolean;
};

function Todo({todo,deleteTodo,toggleComplete}:TodoProps) {
  return (
    <div className="Todo">
      <p className={`${todo.completed ? "completed" : ""}`}>{todo.title}</p>
      <div style={{display:"flex",gap:"10px",alignItems:"center"}}>
        <div>
          <svg
            onClick={() => toggleComplete(todo.id)}
            style={{ fontSize: "20px" }}
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 14 14"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="M4.41 12.961a2.5 2.5 0 0 0 1.076.244h5.346a2.5 2.5 0 0 0 2.47-2.114l.626-4.003a2 2 0 0 0-1.976-2.31H8.67V2.422a1.625 1.625 0 0 0-3.044-.794l-2.077 3.71a1.5 1.5 0 0 0-.191.733v5.442a1.5 1.5 0 0 0 .854 1.354l.2.095Zm-3.366-7.44a.996.996 0 0 0-.997.996v5.112a.997.997 0 0 0 .997.997h.496a.5.5 0 0 0 .5-.5V6.02a.5.5 0 0 0-.5-.5h-.496Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div>
        <svg
          onClick={() => deleteTodo(todo.id)}
          style={{ fontSize: "20px" }}
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <g fill="none">
            <path
              fill="currentColor"
              d="m20 9l-1.995 11.346A2 2 0 0 1 16.035 22h-8.07a2 2 0 0 1-1.97-1.654L4 9"
            />
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.3"
              d="m20 9l-1.995 11.346A2 2 0 0 1 16.035 22h-8.07a2 2 0 0 1-1.97-1.654L4 9zm1-3h-5.625M3 6h5.625m0 0V4a2 2 0 0 1 2-2h2.75a2 2 0 0 1 2 2v2m-6.75 0h6.75"
            />
          </g>
        </svg>
        </div>
      </div>
     
    </div>
  );
}

export default Todo;
