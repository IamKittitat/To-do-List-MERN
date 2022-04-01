import React,{ useState,useContext } from "react";
import { Link } from "react-router-dom";
import ThemeContext from '../Components/Themes';
import TodoList from "./TodoList";

function Form() {
  const [inputs, setInputs] = useState({});
  const [theme,setTheme] = useContext(ThemeContext);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = event => {
    event.preventDefault();
    let data = {
      'task': inputs.task,
      'date': inputs.date,
      'done': false,
    }
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
          setInputs({task:"",date:""});
        }
      )
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
  }

  const TaskInputStyle = {
    width: '550px',
    height: '40px',
    borderRadius: '14px',
    fontSize: '20px',
    padding:'3px 30px',
    backgroundColor: theme[theme.now].pageBackground,
    color: theme[theme.now].titleColor,
  }

  const DateInputStyle = {
    width: '550px',
    height: '40px',
    borderRadius: '14px',
    fontSize: '20px',
    padding:'3px 30px',
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
// Inline css
  const DateLabelStyle = {
    color: theme[theme.now].titleColor,
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '30px',
    textAlign: 'center',
    fontWeight: 'bold',
    margin: '0px 20px 10px',
  }

  return (
    <>
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
        <input type="submit" style={SubmitStyle} onClick={handleSubmit}/>  
      </form>
      <TodoList inputs={inputs}/>
    </>
  )
}

export default Form;