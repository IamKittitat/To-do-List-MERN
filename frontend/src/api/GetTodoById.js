import React from "react";

function GetTodoById(setTask, setDate, id) {
    fetch("http://localhost:8000/api/todos/" + id)
        .then(res => res.json())
        .then(
            (result) => {
                setTask(result.task);
                setDate(result.date);
            }
        )
}

export default GetTodoById;
