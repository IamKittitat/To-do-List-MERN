import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import CreateTodo from "../api/CreateTodo";
import ThemeContext from '../Components/Themes';
import GetTodoById from "../api/GetTodoById";
import GetTodo from "../api/GetTodo";
import UpdateTodoById from "../api/UpdateTodoById";

function Form(props) {
  const [inputs, setInputs] = useState({});
  const [theme, setTheme] = useContext(ThemeContext);
  const setTodos = props.setTodos;
  let id = props.id;

  let isUpdate = (id !== undefined);
  console.log("render Form");

  useEffect(() => {
    console.log("useEffect Form");
    setInputs({});

    if (isUpdate) {
      GetTodoById(id).then(
        (result) => {
          setInputs({
            task: result.task,
            date: result.date,
          })
        }
      );
    }
  }, [id, isUpdate]);


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = event => {
    if (inputs.task && inputs.date) {
      let data = {
        'task': inputs.task,
        'date': inputs.date,
        'done': false,
      }
      if (isUpdate) {
        UpdateTodoById(data, id).then(
          (result) => {
            GetTodo().then((result) => {
              setTodos(result);
            });
            console.log("UpdateTodoById");
          }
        );
      } else {
        CreateTodo(data).then(
          (result) => {
            console.log("create api");
            GetTodo().then((result) => {
              setTodos(result);
            });
          }
        );
      }
      setInputs({});
    } else {
      alert("Please fill in all fields");
    }
  }

  const InputStyle = {
    display: 'flex',
    margin: '10px 160px 0px 110px',
    justifyContent: 'space-between',
  }
  const TaskStyle = {
    display: 'flex',
    flexDirection: 'column',
    margin: '20px',
  }
  const DateStyle = {
    display: 'flex',
    flexDirection: 'column',
    margin: '20px',
  }
  const SubmitStyle = {
    border: 'none',
    color: 'white',
    fontSize: '20px',
    height: '40px',
    width: '500px',
    borderRadius: '10px',
    cursor: 'pointer',
    backgroundColor: '#8B948F',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 'auto',
    textDecoration: 'none',
  }
  const TaskInputStyle = {
    width: '550px',
    height: '40px',
    borderRadius: '14px',
    fontSize: '20px',
    padding: '3px 30px',
    backgroundColor: theme[theme.now].pageBackground,
    color: theme[theme.now].titleColor,
  }
  const DateInputStyle = {
    width: '550px',
    height: '40px',
    borderRadius: '14px',
    fontSize: '20px',
    padding: '3px 30px',
    backgroundColor: theme[theme.now].pageBackground,
    color: theme[theme.now].titleColor,
  }
  const TaskLabelStyle = {
    color: theme[theme.now].titleColor,
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '30px',
    textAlign: 'center',
    fontWeight: 'bold',
    margin: '0px 20px 10px',
  }
  const DateLabelStyle = {
    color: theme[theme.now].titleColor,
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '30px',
    textAlign: 'center',
    fontWeight: 'bold',
    margin: '0px 20px 10px',
  }

  return (
    <form>
      <div style={InputStyle}>
        <div style={TaskStyle}>
          <label style={TaskLabelStyle}>Task</label>
          <input
            type="text"
            name="task"
            value={inputs.task || ""}
            onChange={handleChange}
            style={TaskInputStyle}
          />
        </div>

        <div style={DateStyle}>
          <label style={DateLabelStyle}>Due Date</label>
          <input
            type="date"
            name="date"
            value={inputs.date || ""}
            onChange={handleChange}
            style={DateInputStyle}
          />
        </div>

      </div>
      <Link to="/" style={{ textDecoration: "none" }}>
        <input type="submit" style={SubmitStyle} onClick={handleSubmit} />
      </Link>
    </form>

  )
}

export default Form;