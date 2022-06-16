import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import DeleteTodoById from "../api/DeleteTodoById";
import GetTodo from "../api/GetTodo";
import UpdateStatus from "../api/UpdateStatus";
import PropTypes from 'prop-types';

const Td = styled.td`
    width: 50px;
    height:30px;
`
const Tr = styled.tr`   
    font-family: Montserrat, sans-serif !important;
    background-color: ${props => props.tableRowColor} !important;
`
const UpdateButton = styled.input.attrs({ type: "submit" })`
    background-color: #dd5;
    ${({ styleOverrides }) => ({ ...styleOverrides })}
`
const CheckBox = styled.input.attrs({ type: "submit" })`
    background-color: ${props => props.colorForStatus};
    border: 1px solid black !important;
    ${({ styleOverrides }) => ({ ...styleOverrides })}
`
const DeleteButton = styled.input.attrs({ type: "submit" })`
    background-color: #dd5;
    ${({ styleOverrides }) => ({ ...styleOverrides })}
`

function TodoCard(props) {
    const [todo, setTodo] = useState(props.todo);
    const setTodos = props.setTodos;
    console.log("render TodoCard");
    useEffect(() => {
        setTodo(props.todo);
    }, [props.todo])

    const changeDoneStatus = (id, done) => {
        var data = {
            'done': !done,
        }
        let newTodo = { ...todo, done: !todo.done };
        setTodo(newTodo);
        UpdateStatus(data, id);
    }
    const DeleteTodo = id => {
        DeleteTodoById(id).then(
            (result) => {
                GetTodo().then((result) => {
                    setTodos(result);
                });
            }
        )
    }
    const colorForStatus = todo.done === true ? '#0FC65E' : '#E42222';
    const ButtonStyle = {
        border: 'none',
        color: '#34495E',
        height: '40px',
        width: '70px',
        'border-radius': '10px',
        margin: '4px 10px',
        cursor: 'pointer',
        fontWeight: 'bold',
    }
    const tableRowColor = () => {
        if (todo.done) {
            return '#22816E'
        } else {
            if (new Date().setHours(0, 0, 0, 0) <= new Date(todo.date).setHours(0, 0, 0, 0)) {
                return '#34495E'
            }
            return '#BB2D32'
        }
    }

    const getDate = (date) => {
        let d = new Date(date);
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        return d.getDate() + " " + monthNames[d.getMonth() + 1] + " " + d.getFullYear();
    }

    return (
        <Tr tableRowColor={tableRowColor}>
            <Td><CheckBox styleOverrides={ButtonStyle} colorForStatus={colorForStatus} className="CheckBox" type="submit" value={todo.done ? "Done" : "-"} onClick={() => changeDoneStatus(todo._id, todo.done)} /></Td>
            <Td>{todo.task}</Td>
            <Td><div>
                <Link to={`/update/${todo._id}`} >
                    <UpdateButton styleOverrides={ButtonStyle} type="submit" value="Edit" />
                </Link>
                <DeleteButton styleOverrides={ButtonStyle} type="submit" value="Delete" onClick={() => DeleteTodo(todo._id)} />
            </div></Td>
            <Td>{(new Date().setHours(0, 0, 0, 0) === new Date(todo.date).setHours(0, 0, 0, 0)) ? 'Today' : getDate(todo.date)}</Td>
        </Tr>
    );

}

TodoCard.propTypes = {
    todo: PropTypes.object.isRequired,
    setTodos: PropTypes.func.isRequired,
    Todos: PropTypes.array.isRequired,
    idx: PropTypes.number.isRequired,
}

export default TodoCard;