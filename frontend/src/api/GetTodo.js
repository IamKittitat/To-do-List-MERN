function GetTodo(setTodos) {
    fetch("http://localhost:8000/api/todos/")
        .then(res => res.json())
        .then(
            (result) => {
                setTodos(result);
            }
        )
}

export default GetTodo;