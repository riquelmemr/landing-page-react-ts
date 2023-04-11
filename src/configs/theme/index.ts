import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  name: "light",

  colors: {
    primary: "#000",
    secondary: "#898989",
    info: "#0070f3",
  },

  background: "#fff",
}

export const darkTheme: DefaultTheme = {
  name: "dark",

  colors: {
    primary: "#fff",
    secondary: "#ccc",
    info: "#0070f3",
  },

  background: "#000",
}