import GetTodo from "../api/GetTodo";

function UpdateDoneStatus(data, id,setTodos) {
    fetch('http://localhost:8000/api/todos/' + id, {
        method: 'PUT',
        headers: {
            'Accept': 'application/form-data',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
        .then(res => res.json())
        .then(
            (result) => {
              GetTodo(setTodos);
              console.log("UpdateTodoById");
            }
          )
}

export default UpdateDoneStatus;