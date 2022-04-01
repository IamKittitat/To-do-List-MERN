import React,{useState} from 'react';
import Header from '../Components/Header';
import Form from '../Components/Form';
import ThemeSwitcher from '../Components/ThemeSwitcher';
import ThemeContext,{Themes} from '../Components/Themes'


function Main() {
  const [theme,setTheme] = useState(Themes);
  return (
    <>
      <ThemeContext.Provider value={[theme,setTheme]}>
        <Header/>
        <Form />
        <ThemeSwitcher/>
      </ThemeContext.Provider>
    </>
  );
}

export default Main;
