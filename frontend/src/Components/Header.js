import styled from 'styled-components';
import React, { useContext } from 'react';
import ThemeContext from '../Components/Themes';

const Title = styled.h1`
    color: ${props => props.theme[props.theme.now].titleColor};
    text-align: center;
    font-size: 50px;
    font-family: Montserrat, sans-serif;
`;

function Header() {
    const [theme, setTheme] = useContext(ThemeContext);
    return (
        <Title theme={theme}> To Do List </Title>

    )
}

export default Header;