import React, { useState } from 'react';
import Header from '../Components/Header';
import Form from '../Components/Form';
import ThemeSwitcher from '../Components/ThemeSwitcher';
import ThemeContext, { Themes } from '../Components/Themes'
import { useParams } from 'react-router-dom';
import UpdateTodo from '../Components/UpdateTodo';
import Content from '../Components/Content';

function Main() {
  const [theme, setTheme] = useState(Themes);
  // get path >    
  return (
    <>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <Header />
        <Content />
        <ThemeSwitcher />
      </ThemeContext.Provider>
    </>
  );
}

export default Main;
