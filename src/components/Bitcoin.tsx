import { useState } from "react";

import { Box } from "@mui/material";
import React from "react";
import "animate.css";
const Bitcoin = () => {
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
            }}
          />
          <a href="/explore">
            <Box
              sx={{
                position: "absolute",
                display: "block",
                width: "24%",
                top: "33%",
                left: "38.3%",

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

          <Box
            sx={{
              cursor: "pointer",
              transition: "transform 0.3s ease-in",
              position: "absolute",
              top: "40%",
              // background: "red",

              left: "33%",
              ":hover": {
                animation: "shake 1s",
              },
            }}
          >
            <a href="https://www.twitter.com/bitcoinboos" target="_blank">
              <img
                className="animate__animated animate__fadeInBottomRight"
                src="/images/B/B/Twitter.png"
                alt="My image"
                width={"27%"}
              />
            </a>
          </Box>
          <Box sx={{ width: "20%" }}>
            <Box
              sx={{
                position: "absolute",

                width: "20%",
                top: "44%",
                left: "41%",

                cursor: "pointer",
                transition: "transform 0.3s ease-in",
                zIndex: 4,
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

          <Box
            sx={{
              cursor: "pointer",

              transition: "transform 0.3s ease-in",
              position: "absolute",
              // background: "red",
              top: "40%",
              left: "59.9%",
              ":hover": {
                animation: "shake 1s",
              },
            }}
          >
            <a href="https://discord.com/invite/bitcoinboos" target="_blank">
              <img
                className="animate__animated animate__fadeInBottomRight"
                src="/images/B/B/Discord01.png"
                alt="My image"
                width={"27%"}
              />
            </a>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Bitcoin;
