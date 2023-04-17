import React, { useRef, useState } from "react";
import { Box } from "@mui/material";
import SectionOneGIF from "./Gifs/SectionOneGIF";
import SectionTwoGIF from "./Gifs/SectionTwoGIF";
import SectionThreeGIF from "./Gifs/SectionThreeGIF";
import SectionFourGIF from "./Gifs/SectionFourGIF";

const Explorer = () => {
  const [showSections, setShowSections] = useState("sectionOne");

  return (
    <Box>
      {/* Sectoin One */}
      <Box
        style={{
          transition: "transform 0.5s ease-out",
          transform:
            showSections === "sectionOne"
              ? "translateX(0)"
              : "translateX(100%)",
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: showSections === "sectionOne" ? "block" : "none",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              zIndex: 2,
            }}
          >
            <img
              src="images/Section1/CastlePositionLight.png"
              alt="My image"
              style={{ maxWidth: "100%" }}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              zIndex: 2,
            }}
          >
            <img
              src="images/Section1/Anuncio.gif"
              alt="My image"
              style={{ maxWidth: "100%" }}
            />
          </Box>
          <Box
            onClick={() => setShowSections("sectionTwo")}
            sx={{
              position: "absolute",

              width: "42%",
              height: { lg: "40vh", md: "30vh", sm: "10vh", xs: "10vh" },

              zIndex: 2,
              left: "30%",
              top: { lg: 70, md: 60, sm: 50, xs: 40 },
              cursor: "pointer",
            }}
          ></Box>
          <Box
            sx={{
              position: "absolute",
            }}
          >
            <img
              src="images/Section1/ForegroundLight.png"
              alt="My image"
              style={{ maxWidth: "100%" }}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
            }}
          >
            <img
              src="images/Section1/SkyLight.png"
              alt="My image"
              style={{ maxWidth: "100%" }}
            />
            <SectionOneGIF />
          </Box>
        </Box>
      </Box>
      {/* Sectoin Two */}
      <Box
        style={{
          transition: "transform 0.5s ease-out",
          transform:
            showSections === "sectionTwo"
              ? "translateX(0)"
              : "translateX(100%)",
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: showSections === "sectionTwo" ? "block" : "none",
          }}
        >
          <Box
            onClick={() => setShowSections("sectionThree")}
            sx={{ position: "absolute", zIndex: 2 }}
          >
            <img
              src="/images/Section2/ThroneRoomGodRays.png"
              alt="My image"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </Box>
          <Box sx={{ position: "absolute" }}>
            <img
              src="/images/Section2/SkyThroneroom.png"
              alt="My image"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </Box>
          <Box sx={{ position: "absolute" }}>
            <img
              src="/images/Section2/ThroneLight.png"
              alt="My image"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </Box>

          <Box sx={{ position: "absolute" }}>
            <img
              src="/images/Section2/ThroneRoomBackgroundLight.png"
              alt="My image"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
            <SectionTwoGIF />
          </Box>
        </Box>
        {/* )} */}
      </Box>

      {/* Sectoin Three */}
      <Box
        style={{
          transition: "transform 0.5s ease-out",
          transform:
            showSections === "sectionThree"
              ? "translateX(0)"
              : "translateX(100%)",
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: showSections === "sectionThree" ? "block" : "none",
          }}
        >
          <Box
            onClick={() => setShowSections("sectionFour")}
            sx={{ position: "absolute", zIndex: 2 }}
          >
            <img
              src="/images/Section3/Section3.gif"
              alt="My image"
              style={{ width: "100%", height: "100%" }}
            />
            <SectionThreeGIF />
          </Box>

          {/* <Box sx={{ position: "absolute" }}>
            <img
              src="/images/Section3/ArchiveRoomFire.gif"
              alt="My image"
              style={{ width: "100%", height: "100%" }}
            />
          </Box> */}
        </Box>
      </Box>

      {/* Sectoin Four */}
      <Box
        style={{
          transition: "transform 0.5s ease-out",
          transform:
            showSections === "sectionFour"
              ? "translateX(0)"
              : "translateX(100%)",
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: showSections === "sectionFour" ? "block" : "none",
          }}
        >
          <Box
            // onClick={() => setShowSections("sectionFive")}
            sx={{ position: "absolute", zIndex: 2 }}
          >
            <img
              src="/images/Section4/Section4.gif"
              alt="My image"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />

            <SectionFourGIF />
          </Box>
        </Box>
      </Box>
      {/* Sectoin Five */}
      <Box
        style={{
          transition: "transform 0.5s ease-out",
          transform:
            showSections === "sectionFive"
              ? "translateX(0)"
              : "translateX(100%)",
        }}
      >
        <Box
          sx={{
            position: "relative",
            display: showSections === "sectionFive" ? "block" : "none",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              cursor: "pointer",
            }}
          >
            <img
              onClick={() => setShowSections("sectionOne")}
              src="/images/Section5.gif"
              alt="My image"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Explorer;
