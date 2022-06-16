import styled from 'styled-components';
import React, { useContext } from 'react';
import ThemeContext from '../Components/Themes';
import Clock from './Clock';

const TimeDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    margin-right: 3%;
`
const DMY = styled.h1`
    color: ${props => props.theme[props.theme.now].titleColor};
    text-align: center;
    font-size: 30px;
    font-family: Montserrat, sans-serif;
`;

function Time() {
    const [theme, setTheme] = useContext(ThemeContext);

    const getDate = (date) => {
        let d = new Date(date);
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        return d.getDate() + " " + monthNames[d.getMonth() + 1] + " " + d.getFullYear();
    }
    return (
        <TimeDiv>
            <DMY theme={theme}>{getDate(new Date())}</DMY>
            <Clock />
        </TimeDiv>
    )
}

export default Time;