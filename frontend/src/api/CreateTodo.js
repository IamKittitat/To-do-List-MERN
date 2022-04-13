function CreateTodo(data) {
  return fetch('http://localhost:8000/api/todos/', {
    method: 'POST',
    headers: {
      'Accept': 'application/form-data',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
}

export default CreateTodo;
