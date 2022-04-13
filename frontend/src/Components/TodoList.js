import React from "react";
import TodoCard from "./TodoCard";

function TodoList(props) {
  const Todos = props.Todos;
  const setTodos = props.setTodos;
  console.log("render TodoList");
  return (
    <>
      <style>{`
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
