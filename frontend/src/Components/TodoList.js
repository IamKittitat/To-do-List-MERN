import React, { useContext } from "react";
import TodoCard from "./TodoCard";
import ThemeContext from '../Components/Themes';

function TodoList(props) {
  const [theme, setTheme] = useContext(ThemeContext);
  const Todos = props.Todos;
  const setTodos = props.setTodos;

  return (
    <>
      <style>{`
      body {
        font-family: Montserrat, sans-serif;
        background: ${theme[theme.now].pageBackground};
      }

      .rwd-table {
        margin:20px 10px 20px 70px;
        background: #34495E;
        width: 90%;
        border-radius: 10px;   
        border-collapse: collapse;    
      }

      th{
          margin: .5em 1em;
          height:40px;
      }

      td {
          margin: .5em 1em;
          height:30px;
      }

      .tableHead{
        color: #dd5;
        padding: 10px important!; 
      }

      .tableBody{
        color: #fff;
        text-align: center;
        
      }
    `}</style>
      <table className="rwd-table">
        <thead className="tableHead">
          <tr>
            <th>Done</th>
            <th colSpan={2}>Task</th>
            <th>Due date</th>
          </tr>
        </thead>
        <tbody className="tableBody">
          {Todos.map((todo, idx) => (
            <TodoCard key={todo._id} todo={todo} setTodos={setTodos} Todos={Todos} idx={idx} />
          ))}
        </tbody>
      </table>
    </>
  )
}

export default TodoList;
