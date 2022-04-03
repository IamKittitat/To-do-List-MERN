import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from 'react-router-dom';
import ThemeContext from '../Components/Themes';
import UpdateTodoById from "../api/UpdateTodoById";
import GetTodoById from "../api/GetTodoById";

function UpdateTodo() {

    const { id } = useParams();
    const [task, setTask] = useState('');
    const [date, setDate] = useState('');
    const [theme, setTheme] = useContext(ThemeContext);

    useEffect(() => {
        GetTodoById(setTask, setDate, id);
    }, [])

    const handleSubmit = event => {
        var data = {
            'id': id,
            'task': task,
            'date': date,
        }
        UpdateTodoById(data, id)
    }

    const handleDateChange = (event) => {
        const value = event.target.value;
        //const valueSplit = value.split('-');
        setDate(value);
    }

    const formStyle = {
        fontFamily: "Montserrat, sans-serif",
        background: theme[theme.now].pageBackground,
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
    }

    const SubmitStyleDiv = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
        <>
            <style>{`
            body {
            font-family: Montserrat, sans-serif;
            background: ${theme[theme.now].pageBackground};
        `}</style>
            <form style={formStyle}>
                <div style={InputStyle}>
                    <div style={TaskStyle}>
                        <label style={TaskLabelStyle}>Task</label>
                        <input
                            type="text"
                            name="task"
                            value={task || ""}
                            onChange={(e) => setTask(e.target.value)}
                            style={TaskInputStyle}
                        />
                    </div>
                    <div style={DateStyle}>
                        <label style={DateLabelStyle}>Due Date</label>
                        <input
                            type="date"
                            name="date"
                            value={date || ""}
                            onChange={handleDateChange}
                            style={DateInputStyle}
                        />
                    </div>
                </div>
                <Link to='/' style={SubmitStyleDiv} onClick={handleSubmit}>
                    <input type="submit" style={SubmitStyle} />
                </Link>
            </form>
        </>
    );
}

export default UpdateTodo;