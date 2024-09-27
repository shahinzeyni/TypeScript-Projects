import React,{useState} from 'react'
// import { Todo } from './Components/Todos.types'
import './App.css';

const App: React.FC = () =>  {
  interface Todo {
    id: number;
    title: string;
    isComplete: boolean;
  }

  const [todos,setTodos] = useState<Todo[]>([
    {id:1,title:"Learn React",isComplete:false},
    {id:2,title:"Learn TypeScript",isComplete:false},
    {id:3,title:"Learn Redux",isComplete:false},
    {id:4,title:"Learn React-Redux",isComplete:false},
    {id:5,title:"Learn React-Router",isComplete:false}
  ]) 
  console.log(todos);
  const [todoTitle, setTodoTitle] = useState("")
  const [status, setStatus] = useState("all")


  const todoTitleHandler = (event:React.ChangeEvent<HTMLInputElement>) => {
      setTodoTitle(event.target.value)
  }


  const addTodo = (event:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault()
      let newTodo = {
          id:todos.length + 1,
          title: todoTitle,
          isComplete:false
      }
      setTodos([...todos,newTodo])
  }

  const removeTodo = (todoId: number) => {
      let newTodos = todos.filter(item => item.id !== todoId)
      setTodos(newTodos) 
  }


  const editTodo = (todoId: number) => {
    let newTodos = todos.map((item) => item.id === todoId ? {...item,isComplete : !item.isComplete} : item)
    setTodos(newTodos)
  }
  

  const statusHandler = (event:React.ChangeEvent<HTMLSelectElement>) => {
      setStatus(event.target.value)
  }

  return (
    <>
      <form>
        <input
          type="text"
          placeholder='Add Todo'
          className="todo-input"
          maxLength="40"
          value={todoTitle}
          onChange={todoTitleHandler}
        />
        <button className="todo-button" onClick={addTodo}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 32 32"
          >
            <path
              fill="currentColor"
              d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13s13-5.832 13-13S23.168 3 16 3m0 2c6.087 0 11 4.913 11 11s-4.913 11-11 11S5 22.087 5 16S9.913 5 16 5m-1 5v5h-5v2h5v5h2v-5h5v-2h-5v-5z"
            />
          </svg>
        </button>
        <div className="select">
          <select name="todos" className="filter-todo" onChange={statusHandler}>
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>

      <div className="todo-container">
        <ul className="todo-list">
          {todos.map((item) => (
            <div
              className={`todo ${item.isComplete ? "completed" : ""}`}
              style={{ display: "flex" }}
            >
              <li className="todo-item">{item.title}</li>

              <button className="check-btn" onClick={() => editTodo(item.id)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 2048 2048"
                >
                  <path
                    fill="currentColor"
                    d="m1491 595l90 90l-749 749l-365-365l90-90l275 275zM1024 0q141 0 272 36t245 103t207 160t160 208t103 245t37 272q0 141-36 272t-103 245t-160 207t-208 160t-245 103t-272 37q-141 0-272-36t-245-103t-207-160t-160-208t-103-244t-37-273q0-141 36-272t103-245t160-207t208-160T751 37t273-37m0 1920q123 0 237-32t214-90t182-141t140-181t91-214t32-238q0-123-32-237t-90-214t-141-182t-181-140t-214-91t-238-32q-123 0-237 32t-214 90t-182 141t-140 181t-91 214t-32 238q0 123 32 237t90 214t141 182t181 140t214 91t238 32"
                  />
                </svg>
              </button>

              <button className="trash-btn" onClick={() => removeTodo(item.id)}>
                <svg
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
              </button>
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;