import { useLocation, useParams } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import Form from "./Form";
import TodoList from "./TodoList";
import GetTodo from "../api/GetTodo";

function Content() {
    const [Todos, setTodos] = useState([]);
    const { id } = useParams();
    const pathname = useLocation().pathname;
    const isUpdate = pathname.includes("update");
    //split with / , query param  (more than 1 state) + enum 
    // isA , isB > 2**n || if dependent; enum 

    console.log("render Content");
    useEffect(() => {
        GetTodo().then((result) => {
            setTodos(result);
        })
    }, []);

    return (
        <>
            <Form setTodos={setTodos} id={id} />
            {isUpdate ? null : <TodoList Todos={Todos} setTodos={setTodos} />}
        </>
    )
}

export default Content;