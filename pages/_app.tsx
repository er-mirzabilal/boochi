import type { AppProps } from "next/app";
import "../src/styles/globals.css";
import { ThemeProvider } from "@mui/material";
import theme from "@/theme";
import Head from "next/head";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (window.innerWidth > 768) {
      // Check if viewport width is greater than 768px

      const cursor = document.createElement("div");
      cursor.classList.add("custom-cursor");
      document.body.appendChild(cursor);

      const handleMouseMove = (e: MouseEvent) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      };

      document.addEventListener("mousemove", handleMouseMove);

      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.body.removeChild(cursor);
      };
    }
  }, []);

  return (
    <div>
      <Head>
        <link rel="icon" href="/images/cursor.jpeg" />
      </Head>
      <ThemeProvider theme={theme}>
        <div className="custom-cursor-container">
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </div>
  );
}
