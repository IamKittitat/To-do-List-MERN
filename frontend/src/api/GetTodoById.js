function GetTodoById(id) {
    return fetch("http://localhost:8000/api/todos/" + id).then(res => res.json())

}

export default GetTodoById;
