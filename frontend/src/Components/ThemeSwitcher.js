import styled from 'styled-components';
import React, { useContext } from 'react';
import ThemeContext from '../Components/Themes';

const Toggle = styled.button`
    cursor: pointer;
    height: 50px;
    width: 100px;   
    border-radius: 10%; 
    border: none;
    margin: 20px;
    background-color: ${props => props.theme[props.theme.now].pageBackground};
    color: ${props => props.theme[props.theme.now].titleColor};
    transition: all .5s ease;
`;


function ThemeSwitcher() {
    const [theme, setTheme] = useContext(ThemeContext);

    function changeTheme() {
        if (theme.now === "light") {
            setTheme({ ...theme, now: "dark" });
        } else {
            setTheme({ ...theme, now: "light" });
        }
    };
    const description = theme.now === "light" ? "To Dark" : "To Light";

    return (
        <Toggle onClick={changeTheme} theme={theme}>
            {description}
        </Toggle>
    )
}

export default ThemeSwitcher;