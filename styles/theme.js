import { createTheme } from "@mui/material";

// Create a theme instance.
const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#05204A",
    },
    secondary: {
      main: "#6699CC",
    },
    error: {
      main: "#f44336",
    },
    success: {
      main: "#4caf50",
    },
    common: {
      black: "#19192B",
      white: "#ffffff",
    },

    grey: {
      500: "#bcbcbc",
      700: "#79797a",
    },
    info: {
      main: "#1bb2f1",
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: "Roboto",
  },
});

export default theme;
