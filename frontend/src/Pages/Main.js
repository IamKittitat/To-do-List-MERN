import React, { useState } from 'react';
import Header from '../Components/Header';
import ThemeSwitcher from '../Components/ThemeSwitcher';
import ThemeContext, { Themes } from '../Components/Themes'
import Content from '../Components/Content';

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
        <Header />
        <Content />
        <ThemeSwitcher />
      </ThemeContext.Provider>
    </>
  );
}

export default Main;
