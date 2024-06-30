import { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

interface ThemeContextProps {
  changeTheme: () => void;
  lightMode: boolean;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeContextProvider = (props: any) => {
  const [lightMode, setligthMode] = useState<boolean>(false);
  const darkTheme: object = {
    colors: {
      background: "#141D2F",
      themeBtn: "#fff",
      card: "#1E2A47",
      textNorm: "#fff",
      textBolded: "#FFF",
    },
  };
  const lightTheme: object = {
    colors: {
      background: "#F6F8FF",
      themeBtn: "#4B6A9B",
      card: "#FEFEFE",
      textNorm: "#697C9A",
      textBolded: "#2B3442",
      color: "#000",
    },
  };

  function changeTheme(): void {
    setligthMode((prev) => !prev);
  }

  useEffect(() => {
    localStorage.getItem("theme") === "lightTheme" && setligthMode(true);
  }, []);

  useEffect(() => {
    const mode = lightMode ? "ligth" : "Dark";
    localStorage.setItem("theme", mode);
  });

  return (
    <ThemeContext.Provider value={{ changeTheme, lightMode }}>
      <ThemeProvider theme={lightMode ? lightTheme : darkTheme}>
        {props.children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
