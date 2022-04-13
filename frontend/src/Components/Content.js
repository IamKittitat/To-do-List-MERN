import { useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Form from "./Form";
import TodoList from "./TodoList";
import GetTodo from "../api/GetTodo";
import Header from '../Components/Header';

function Content() {
    const [Todos, setTodos] = useState([]);
    const { id } = useParams();
    console.log("rerender Content");
    useEffect(() => {
        //console.log("useEffect Content");
        GetTodo(setTodos)
    }, []);

    return(
        <>
            <Form Todos={Todos} setTodos={setTodos} id={id}/>
            {id === undefined ? <TodoList Todos={Todos} setTodos={setTodos}/> : null };
        </>
    )
}

export default Content;