import type { AppProps } from "next/app";
import "../src/styles/globals.css";
import { ThemeProvider } from "@mui/material";
import theme from "@/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}
