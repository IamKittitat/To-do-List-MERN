import styled from 'styled-components';
import React, { useContext } from 'react';
import ThemeContext from '../Components/Themes';
import Time from './Time';

const HeaderDiv = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const Title = styled.h1`
    color: ${props => props.theme[props.theme.now].titleColor};
    text-align: center;
    font-size: 50px;
    font-family: Montserrat, sans-serif;
    margin-left: 40%;
`;

function Header() {
    const [theme, setTheme] = useContext(ThemeContext);
    return (
        <HeaderDiv>
            <Title theme={theme}> To Do List </Title>
            <Time />
        </HeaderDiv>
    )
}

export default Header;