import React from "react";
import TodoCard from "./TodoCard";
import PropTypes from 'prop-types';

function TodoList({ Todos, setTodos }) {
  console.log("render TodoList");

  return (
    <>
      <style>{`
      .rwd-table {
        margin:20px 10px 20px 70px;
        background: #34495E;
        width: 90%;
        border-radius: 0px;   
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
            <th>Status</th>
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

TodoList.propTypes = {
  Todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired,
}

export default TodoList;
