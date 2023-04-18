import { Box } from "@mui/material";
import React, { useState } from "react";
import SectionOneGIF, { Section } from "./Gifs/SectionOneGIF";
import SectionFourGIF from "./Gifs/SectionFourGIF";
import SectionThreeGIF from "./Gifs/SectionThreeGIF";
import SectionTwoGIF from "./Gifs/SectionTwoGIF";

const Exploror = () => {
  const [showSection, setShowSection] = useState(false);
  return (
    <>
      {!showSection && (
        <Section showSection={false} setShowSection={setShowSection} />
      )}

      {showSection && (
        <Box sx={{ position: "relative" }}>
          <Box sx={{ position: "relative", margin: 0 }}>
            <img
              src="/images/Section2/Section2.png"
              alt="My image"
              style={{ maxWidth: "100%" }}
            />
            <SectionTwoGIF />
          </Box>
          <Box sx={{ position: "relative", marginTop: -1 }}>
            <img
              src="/images/Section3/Section3.gif"
              alt="My image"
              style={{ maxWidth: "100%" }}
            />
            <SectionThreeGIF />
          </Box>
          <Box sx={{ position: "absolute", marginTop: -1 }}>
            <img
              src="/images/Section4/Section4.gif"
              alt="My image"
              style={{ maxWidth: "100%" }}
            />
            <SectionFourGIF />
          </Box>
        </Box>
      )}
    </>
  );
};

export default Exploror;
