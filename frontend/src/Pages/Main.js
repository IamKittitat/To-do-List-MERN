import React, { useState } from 'react';
import Header from '../Components/Header';
import ThemeSwitcher from '../Components/ThemeSwitcher';
import ThemeContext, { Themes } from '../Components/Themes'
import Content from '../Components/Content';

// if no index in Header folder >  ../Components/Header/Header.js 
// if index .js in folder 

function Main() {
  const [theme, setTheme] = useState(Themes);
  return (
    <>
      <style>{`
      body {
        font-family: Montserrat, sans-serif;
        background: ${theme[theme.now].pageBackground};
      `}
      </style>
      <ThemeContext.Provider value={[theme, setTheme]}>
      {/* value= {{theme,setTheme}} > to choose some element*/}
        <Header />
        <Content />
        <ThemeSwitcher />
      </ThemeContext.Provider>
    </>
  );
}

export default Main;
