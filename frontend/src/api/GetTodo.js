function GetTodo() {
    return fetch("http://localhost:8000/api/todos/").then(res => res.json())
}

export default GetTodo;