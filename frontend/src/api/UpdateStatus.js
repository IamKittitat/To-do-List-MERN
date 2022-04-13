function UpdateStatus(data, id) {
    return fetch('http://localhost:8000/api/todos/' + id, {
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
              console.log("UpdateStatus api");
            }
          )
}

export default UpdateStatus;