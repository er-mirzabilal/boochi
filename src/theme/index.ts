import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      miniMobile: 0,
      xs: 500,
      sm: 600,
      md: 800,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    miniMobile: true;
  }
}
