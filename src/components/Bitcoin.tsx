import { useState } from "react";

import { Box } from "@mui/material";
import React from "react";
import "animate.css";
import Music from "./Gifs/music";
import Link from "next/link";
const Bitcoin = () => {
  const [musicBox, setMusicBox] = useState(true);

  return (
    <Box
      // className="custom-cursor"
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
          loading="lazy"
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
          loading="eager"
        />
        <Link href="/explore">
          <Box
            sx={{
              position: "absolute",
              display: "block",
              width: "24%",
              top: "33%",
              left: "38.3%",

              cursor: "none",

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
              loading="lazy"
            />
          </Box>
        </Link>
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
                float: "right",
                left: "33%",
                ":hover": {
                  animation: "shake 1s",
                },
              }}
            >
              <Link
                href="https://www.twitter.com/bitcoinboos"
                target="_blank"
                style={{ cursor: "none" }}
              >
                <img
                  className="animate__animated animate__fadeInBottomRight"
                  src="/images/B/B/Twitter.png"
                  alt="My image"
                  width={"90%"}
                  loading="lazy"
                />
              </Link>
            </Box>
            <Box sx={{}}>
              <Box
                sx={{
                  width: "fit-content",

                  cursor: "none",
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
                <Link
                  style={{ cursor: "none" }}
                  href="https://bitcoinboos.elementor.cloud/gallery/"
                  target="_blank"
                >
                  <img
                    className="animate__animated animate__fadeInDown"
                    src="/images/B/B/Gallery.png"
                    alt="My image"
                    width={"90%"}
                    style={{
                      marginLeft: "2.5%",
                    }}
                  />
                </Link>
              </Box>
            </Box>

            <Box
              sx={{
                // cursor: "pointer",
                float: "left",
                transition: "transform 0.3s ease-in",

                ":hover": {
                  animation: "shake 1s",
                },
              }}
            >
              <Link
                style={{ cursor: "none" }}
                href="https://discord.com/invite/bitcoinboos"
                target="_blank"
              >
                <img
                  className="animate__animated animate__fadeInBottomRight"
                  src="/images/B/B/Discord01.png"
                  alt="My image"
                  width={"90%"}
                />
              </Link>
            </Box>
          </Box>
        </Box>
        {/* music */}

        <Box
          sx={{
            position: "fixed",
            top: {
              lg: "83%",
              md: "33%",
              sm: "35%",
              xs: "21%",
              miniMobile: "25%",
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
