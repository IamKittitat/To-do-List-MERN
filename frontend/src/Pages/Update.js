import React, { useState } from 'react';
import Header from '../Components/Header';
import ThemeSwitcher from '../Components/ThemeSwitcher';
import UpdateTodo from '../Components/UpdateTodo';
import ThemeContext,{Themes} from '../Components/Themes'

function Update() {
  const [theme,setTheme] = useState(Themes);
  return (
    <>
      <ThemeContext.Provider value={[theme,setTheme]}>
        <Header/>
        <UpdateTodo/>
        <ThemeSwitcher/>
      </ThemeContext.Provider>
    </>
  );
}

export default Update;
