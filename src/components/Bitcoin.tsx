import { useRef, useEffect, useState } from "react";

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
          {/* //i tried to do that movement work on this div by (setting background image) */}

      <Box
        onMouseMove={handleMouseMove}
        style={
          {
            // transform: `translate(-${position.x / 50}px, -${position.y / 50}px)`,
          }
        }
        sx={{
          position: "relative",
          backgroundImage: "url(/images/Section5.gif)",
          // width: "100vw",
          // height: "100vh",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            cursor: "pointer",
          }}
        >
          {/* //this is the image on which we want to add movement */}
          <img
            src="/images/Section5.gif"
            alt="My image"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />

          {/* <img src="/images/Section5.gif" alt="My Image" /> */}

          <img
            className="animate__animated animate__bounceInDown"
            src="/images/B/B/Bitcoin_Boos_Logo.png"
            alt="My image"
            width={"30%"}
            style={{
              position: "absolute",
              top: "10%",
              left: "32%",
              transform: "translate(-50%, -50%)",

              cursor: "pointer",
            }}
          />
          <a href="/explore">
            <Box
              sx={{
                position: "absolute",
                display: "block",
                width: "60%",
                top: "33%",
                left: "37%",

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
                width={"33%"}
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
              left: "30%",
              transform: "translate(-50%, -50%)",

              cursor: "pointer",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              display: "block",
              width: "60%",
              top: "44%",
              left: "36%",

              cursor: "pointer",
              transition: "transform 0.3s ease-in",

              ":hover": {
                animation: "shake 1s",
              },
            }}
          >
            <img
              className="animate__animated animate__fadeInDown"
              src="/images/B/B/Gallery.png"
              alt="My image"
              width={"33%"}
            />
          </Box>

          <img
            className="animate__animated animate__fadeInBottomRight"
            src="/images/B/B/Discord01.png"
            alt="My image"
            width={"7%"}
            style={{
              position: "absolute",
              top: "40%",
              left: "56%",
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