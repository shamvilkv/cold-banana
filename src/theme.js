import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: ["poppins"].join(","),
    fontSize: "16px",
  },

  components: {
    MuiLink: {
      styleOverrides: { root: { textDecoration: "none" } },
    },
    MuiButton: {
      styleOverrides: {
        root: { borderRadius: "100px" },
      },
    },
  },
});

export default theme;
