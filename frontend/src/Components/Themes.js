import React from "react";

const LightTheme = {
    pageBackground: "white",
    titleColor: "#34495E",
    tableColor: "#34495E",
    tableTitle: "#dd5",
    tableFontColor: "#fff",

};

const DarkTheme = {
    pageBackground: "#282c36",
    titleColor: "#ACC1D6",
    tableColor: "#ACC1D6",
    tableFontColor: "#000",
}

export const Themes = {
    light: LightTheme,
    dark: DarkTheme,
    now: 'light',
}

//export const [theme, setTheme] = useState(Themes);
const  ThemeContext = React.createContext();
export default ThemeContext;