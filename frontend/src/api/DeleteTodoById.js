function DeleteTodoById(id) {
    return fetch('http://localhost:8000/api/todos/' + id, {
        method: 'DELETE',
        headers: {
            Accept: 'application/form-data',
            'Content-Type': 'application/json',
        },
    })
        .then(res => res.json())

}

export default DeleteTodoById;