function CreateTodo(data, setInputs) {
  fetch('http://localhost:8000/api/todos/', {
    method: 'POST',
    headers: {
      Accept: 'application/form-data',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then(res => res.json())
    .then(
      (result) => {
        setInputs({ task: "", date: "" });
      }
    )
}

export default CreateTodo;
