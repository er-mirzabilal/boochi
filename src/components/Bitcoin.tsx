import { useState } from "react";

import { Box } from "@mui/material";
import React from "react";
import "animate.css";
const Bitcoin = () => {
  const [position, setPosition] = useState({ x: 10, y: 10 });

  function handleMouseMove(e: any) {
    setPosition({ x: e.clientX, y: e.clientY });
  }

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "relative",
          // width: "100%",
          // height: "100%",
          // overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            // right: "-17px",
            // overflowY: "scroll",
          }}
        >
          <img
            src="/images/Section5.gif"
            alt="My image"
            style={{ width: "100vw", filter: "blur(4px)" }}
          />

          <img
            className="animate__animated animate__bounceInDown"
            src="/images/B/B/Bitcoin_Boos_Logo.png"
            alt="My image"
            width={"30%"}
            style={{
              position: "absolute",
              top: "10%",
              left: "35%",
              transform: "translate(-50%, -50%)",

              cursor: "pointer",
            }}
          />
          <a href="/explore">
            <Box
              sx={{
                position: "absolute",
                display: "block",
                width: "24%",
                top: "33%",
                left: "38%",

                cursor: "pointer",

                ":hover": {
                  animation: "shake 1s",
                },
              }}
            >
              <img
                className="animate__animated animate__fadeInDown"
                src="/images/B/B/Enter the Kingdom.png"
                alt="My image"
                width={"98%"}
              />
            </Box>
          </a>

          <img
            className="animate__animated animate__fadeInBottomRight"
            src="/images/B/B/Twitter.png"
            alt="My image"
            width={"7%"}
            style={{
              position: "absolute",
              top: "40%",
              left: "32%",
              transform: "translate(-50%, -50%)",

              cursor: "pointer",
            }}
          />
          <Box sx={{ width: "20%" }}>
            <Box
              sx={{
                position: "absolute",

                width: "20%",
                top: "44%",
                left: "40%",

                cursor: "pointer",
                transition: "transform 0.3s ease-in",

                ":hover": {
                  animation: "shake 1s",
                },
              }}
            >
              <a
                href="https://bitcoinboos.elementor.cloud/gallery/"
                target="_blank"
              >
                <img
                  className="animate__animated animate__fadeInDown"
                  src="/images/B/B/Gallery.png"
                  alt="My image"
                  width={"90%"}
                  style={{}}
                />
              </a>
            </Box>
          </Box>

          <img
            className="animate__animated animate__fadeInBottomRight"
            src="/images/B/B/Discord01.png"
            alt="My image"
            width={"7%"}
            style={{
              position: "absolute",
              top: "40%",
              left: "59%",
              transform: "translate(-50%, -50%)",

              cursor: "pointer",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Bitcoin;
