import { useRef, useEffect, useState } from "react";

import { Box } from "@mui/material";
import React from "react";
import "animate.css";
const Bitcoin = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const waveTransform = hovered ? "translateY(-5px) rotate(-3deg)" : "";

  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Box
        sx={{
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            cursor: "pointer",
          }}
        >
          <img
            src="/images/Section5.gif"
            alt="My image"
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />

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
            <img
              className="animate__animated animate__bounceIn"
              src="/images/B/B/Enter the Kingdom.png"
              alt="My image"
              width={"20%"}
              style={{
                position: "absolute",
                top: "33%",
                left: "37%",
                transform: "translate(-50%, -50%)",
                zIndex: 2,

                cursor: "pointer",
              }}
            />
          </a>

          <img
            className="animate__animated animate__fadeInBottomRight"
            src="/images/B/B/Twitter.png"
            alt="My image"
            width={"7%"}
            style={{
              position: "absolute",
              top: "40%",
              left: "31%",
              transform: "translate(-50%, -50%)",

              cursor: "pointer",
            }}
          />

          <img
            className="animate__animated animate__fadeInDown"
            src="/images/B/B/Gallery.png"
            alt="My image"
            width={"20%"}
            style={{
              position: "absolute",
              top: "43%",
              left: "37%",
              transform: `translate(-50%, -50%) ${waveTransform}`,
              cursor: "pointer",
              transition: "transform 0.3s ease-out",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />

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
