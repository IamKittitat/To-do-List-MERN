
function DeleteTodoById(GetTodo,id,props) {
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
                }
            ) 
}

export default DeleteTodoById;