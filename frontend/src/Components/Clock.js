import React, { useEffect, useState, useContext } from "react";
import ThemeContext from '../Components/Themes';
import styled from 'styled-components';

const Timer = styled.div`
    font-family: Montserrat, sans-serif;
    color: ${props => props.theme[props.theme.now].titleColor};
    font-size: 20px;
`
function Clock() {
    const [theme, setTheme] = useContext(ThemeContext);
    const [clockState, setClockState] = useState();

    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString())
        }, 1000);
    }, []);
    return <Timer theme={theme}>{clockState}</Timer>
    // return <div style={{ fontSize: "20px", fontWeight: "bold", color: }}> {clockState}</div>
}

export default Clock;