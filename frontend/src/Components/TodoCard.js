import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import DeleteTodoById from "../api/DeleteTodoById";
import GetTodo from "../api/GetTodo";
import UpdateTodoById from "../api/UpdateTodoById";

const Td = styled.td`
    width: 50px;
    height:30px;
`
const Tr = styled.tr`   
    border: 1px solid #34495E;
    font-family: Montserrat, sans-serif !important;
    background-color: ${props => props.tableRowColor} !important;
`
const UpdateButton = styled.input.attrs({ type: "submit" })`
    background-color: #EEA90B;
    ${({ styleOverrides }) => ({ ...styleOverrides })}
`
const CheckBox = styled.input.attrs({ type: "submit" })`
    background-color: ${props => props.colorForStatus};
    ${({ styleOverrides }) => ({ ...styleOverrides })}
`
const DeleteButton = styled.input.attrs({ type: "submit" })`
    background-color: #E42222;
    ${({ styleOverrides }) => ({ ...styleOverrides })}
`
function TodoCard(props) {
    const [todo, setTodo] = useState(props.todo);
    
    const changeDoneStatus = (id, done) => {
        var data = {
            'done': !done,
        }
        let newTodo = { ...todo, done: !todo.done };
        setTodo(newTodo);
        UpdateTodoById(data, id)
    }
    const DeleteTodo = id => {
        const newTodos = [...props.Todos];
        DeleteTodoById(GetTodo, id, props)
    }
    const colorForStatus = todo.done == true ? '#0FC65E' : '#E42222';
    const ButtonStyle = {
        border: 'none',
        color: 'white',
        height: '40px',
        width: '70px',
        'border-radius': '10px',
        margin: '4px 10px',
        cursor: 'pointer',
    }
    const tableRowColor = () => {
        if (todo.done) {
            return '#0BA94F'
        } else {
            if (new Date().setHours(0, 0, 0, 0) <= new Date(todo.date).setHours(0, 0, 0, 0)) {
                return '#34495E'
            }
            return '#AF0D0D'
        }
    }

    return (
        <Tr tableRowColor={tableRowColor}>
            <Td><CheckBox styleOverrides={ButtonStyle} colorForStatus={colorForStatus} className="CheckBox" type="submit" value={todo.done} onClick={() => changeDoneStatus(todo._id, todo.done)} /></Td>
            <Td>{todo.task}</Td>
            <Td><div>
                <Link to={`/update/${todo._id}`} >
                    <UpdateButton styleOverrides={ButtonStyle} type="submit" value="Edit" />
                </Link>
                <DeleteButton styleOverrides={ButtonStyle} type="submit" value="Delete" onClick={() => DeleteTodo(todo._id)} />
            </div></Td>
            <Td>{(new Date().setHours(0, 0, 0, 0) === new Date(todo.date).setHours(0, 0, 0, 0)) ? 'Today' : todo.date}</Td>
        </Tr>
    );

}

export default TodoCard;