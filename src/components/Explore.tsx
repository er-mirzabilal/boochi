import { Box } from "@mui/material";
import React, { useState } from "react";
import { Section } from "./Gifs/SectionOneGIF";
import SectionFourGIF from "./Gifs/SectionFourGIF";
import SectionThreeGIF from "./Gifs/SectionThreeGIF";
import SectionTwoGIF from "./Gifs/SectionTwoGIF";
import Music from "./Gifs/music";

const Exploror = () => {
  const [showSection, setShowSection] = useState(false);
  const [musicBox, setMusicBox] = useState(true);

  return (
    <>
      <Box
        sx={{
          display: showSection ? "none" : "block",
          // opacity: showSection ? 1 : 0,
          // transition: "opacity 0.5s ease-in-out",
        }}
      >
        <Section showSection={false} setShowSection={setShowSection} />
      </Box>

      <Box
        sx={{
          position: "relative",
          display: showSection ? "block" : "none",
          transition: "opacity 3.2s ease-in-out",
        }}
      >
        <Box sx={{ position: "relative", margin: 0 }}>
          <img
            src="/images/Section2/Section2.png"
            alt="My image"
            style={{ width: "100vw" }}
          />
          <SectionTwoGIF />
          <Box
            sx={{
              position: "absolute",
              top: "75%",
              left: "3%",
              // width: { md: "20vw", sm: "15vw", miniMobile: "13vw" },
              width: "20vw",
              paddingBottom: 2,
            }}
          >
            <Music
              setMusicBox={setMusicBox}
              musicBox={musicBox}
              src={"/images/Music/booBATTLE.wav"}
            />
          </Box>
        </Box>
        <Box sx={{ position: "relative", marginTop: -1 }}>
          <img
            src="/images/Section3/Section3.gif"
            alt="My image"
            style={{ width: "100vw" }}
          />
          <SectionThreeGIF />
        </Box>
        <Box sx={{ position: "absolute", marginTop: -1 }}>
          <img
            src="/images/Section4/Section4.gif"
            alt="My image"
            style={{ width: "100vw" }}
          />
          <SectionFourGIF />
        </Box>
      </Box>
    </>
  );
};

export default Exploror;
