import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import GetTodo from "../api/GetTodo";

// const ButtonStyle = [
//     'border: none;',
//     'color: white;',
//     'height:40px;',
//     'width:70px;',
//     'border-radius: 10px;',
//     'margin: 4px 10px;',
//     'cursor: pointer;',
// ]

const Td = styled.td`
    width: 50px;
    height:30px;
`
const Tr = styled.tr`
    font-family: Montserrat, sans-serif !important;
`
const UpdateButton = styled.input.attrs({type: "submit"})`
    background-color: #EEA90B;
`
const CheckBox = styled.input.attrs({type: "submit"})`
    background-color: ${props => props.colorForStatus};

`
const DeleteButton = styled.input.attrs({type: "submit"})`
    background-color: #E42222;

`
function TodoCard(props) {
    const [todo, setTodo] = useState(props.todo);
    const changeDoneStatus = (id, done) => {
        var data = {
            'done': !done,
        }
        let newTodo = { ...todo, done: !todo.done };
        setTodo(newTodo);
        fetch('http://localhost:8000/api/todos/' + id, {
            method: 'PUT',
            headers: {
                'Accept': 'application/form-data',
                'Content-Type': 'application/json',

            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
    }
    const DeleteTodo = id => {
        const newTodos = [...props.Todos];
        console.log(newTodos);

        fetch('http://localhost:8000/api/todos/' + id, {
            method: 'DELETE',
            headers: {
                Accept: 'application/form-data',
                'Content-Type': 'application/json',
            },
        })
            .then(res => res.json())
            .then(
                (result) => {
                    GetTodo(props.setTodos);
                    // newTodos.splice(props.idx,1);
                    // console.log(newTodos,props.idx);
                    // props.setTodos(newTodos);
                    // //alert(result['msg'])
                }
            ) 
    }
    const colorForStatus = todo.done == true ? '#0FC65E' : '#E42222';    
    
    return (
        <>
     
            <Tr>
                <Td><CheckBox colorForStatus={colorForStatus} className="CheckBox" type="submit" value={todo.done} onClick={() => changeDoneStatus(todo._id, todo.done)} /></Td>
                <Td>{todo.task}</Td>
                <Td><div>
                    <Link to={`/update/${todo._id}`} >
                        <UpdateButton type="submit" value="Edit" />
                    </Link>
                    <DeleteButton type="submit" value="Delete" onClick={() => DeleteTodo(todo._id)} />
                </div></Td>
                <Td>{todo.date}</Td>
            </Tr>
        </>
    );

}

export default TodoCard;