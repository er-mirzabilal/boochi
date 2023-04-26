import { useState } from "react";

import { Box } from "@mui/material";
import React from "react";
import "animate.css";
import Music from "./Gifs/music";
const Bitcoin = () => {
  const [musicBox, setMusicBox] = useState(true);

  return (
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
          src="/images/Skype_Picture_2023_04_20T17_31_48_268Z.jpeg"
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
        {/* new  */}
        <Box sx={{ position: "absolute", top: "43%", left: "30%" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "baseline",

              width: "60%",
            }}
          >
            <Box
              sx={{
                // position: "absolute",
                // cursor: "pointer",
                // transition: "transform 0.3s ease-in",

                // top: "40%",
                // background: "red",
                float: "right",
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
                  width={"90%"}
                />
              </a>
            </Box>
            <Box sx={{}}>
              <Box
                sx={{
                  width: "fit-content",
                  // position: "absolute",

                  // width: "20%",
                  // top: "44%",
                  // left: "41%",

                  cursor: "pointer",
                  transition: "transform 0.3s ease-in",
                  // background: "blue",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "auto",

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
                    style={{
                      //  background: "pink",
                      marginLeft: "2.5%",
                    }}
                  />
                </a>
              </Box>
            </Box>

            <Box
              sx={{
                cursor: "pointer",
                float: "left",
                transition: "transform 0.3s ease-in",
                // position: "absolute",
                // background: "green",
                // top: "40%",
                // left: "59.9%",
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
                  width={"90%"}
                />
              </a>
            </Box>
          </Box>
        </Box>
        {/* music */}

        <Box
          sx={{
            position: "fixed",
            top: {
              lg: "80%",
              md: "50%",
              sm: "33%",
              xs: "20%",
              miniMobile: "23%",
            },
            left: "3%",

            width: "20vw",
            paddingBottom: 2,
          }}
        >
          <Music
            setMusicBox={setMusicBox}
            musicBox={musicBox}
            src={"/images/Music/booKingdom.wav"}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Bitcoin;
