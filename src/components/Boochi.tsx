import React, { useState } from "react";
import { Box } from "@mui/material";
import Image from "next/image";
import SectionOneGIF from "./SectionOneGIF";
import SectionTwoGIF from "./SectionTwoGIF";
import SectionThreeGIF from "./SectionThreeGIF";
import SectionFourGIF from "./SectionFour";

const Boochi = () => {
  const [showSections, setShowSections] = useState("sectionOne");

  return (
    <Box>
      {/* Sectoin One */}
      {showSections === "sectionOne" && (
        <Box
          sx={{
            position: "relative",
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              zIndex: 2,
              width: "100%",
              height: "100%",
            }}
          >
            <img
              src="images/Section1/CastlePositionLight.png"
              alt="My image"
              width={"100%"}
              height={"100%"}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              width: "100%",
              height: "100%",
            }}
          >
            <img
              src="images/Section1/ForegroundLight.png"
              alt="My image"
              width={"100%"}
              height={"100%"}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",

              width: "100%",
              height: "100%",
            }}
          >
            <img
              src="images/Section1/SkyLight.png"
              alt="My image"
              width={"100%"}
              height={"100%"}
            />
          </Box>

          {/* gifs */}
          <SectionOneGIF setShowSections={setShowSections} />
        </Box>
      )}
      {/* Sectoin Two */}

      {showSections === "sectionTwo" && (
        <Box
          sx={{
            position: "relative",
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <Box sx={{ position: "absolute", width: "100%", height: "100%" }}>
            <img
              src="/images/Section2/ThroneRoomGodRays.png"
              alt="My image"
              width={"100%"}
              height={"100%"}
            />
          </Box>
          <Box sx={{ position: "absolute", width: "100%", height: "100%" }}>
            <img
              src="/images/Section2/SkyThroneroom.png"
              alt="My image"
              width={"100%"}
              height={"100%"}
            />
          </Box>
          <Box sx={{ position: "absolute", width: "100%", height: "100%" }}>
            <img
              src="/images/Section2/ThroneLight.png"
              alt="My image"
              width={"100%"}
              height={"100%"}
            />
          </Box>

          <Box sx={{ position: "absolute", width: "100%", height: "100%" }}>
            <img
              src="/images/Section2/ThroneRoomBackgroundLight.png"
              alt="My image"
              width={"100%"}
              height={"100%"}
            />
          </Box>
          {/* gifs */}
          <SectionTwoGIF setShowSections={setShowSections} />
        </Box>
      )}
      {/* Sectoin Three */}

      {showSections === "sectionThree" && (
        <Box
          sx={{
            position: "relative",
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <Box sx={{ position: "absolute", width: "100%", height: "100%" }}>
            <img
              src="/images/Section3/ArchiveRoomLightning.png"
              alt="My image"
              width={"100%"}
              height={"100%"}
            />
          </Box>

          <Box sx={{ position: "absolute", width: "100%", height: "100%" }}>
            <img
              src="/images/Section3/ArchiveRoomFire.gif"
              alt="My image"
              width={"100%"}
              height={"100%"}
            />
          </Box>
          {/* gifs */}
          <SectionThreeGIF setShowSections={setShowSections} />
        </Box>
      )}
      {/* Sectoin Four */}

      {showSections === "sectionFour" && (
        <Box
          sx={{
            position: "relative",
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <Box sx={{ position: "absolute", width: "100%", height: "100%" }}>
            <img
              src="/images/Section4/SecretChamberLight.png"
              alt="My image"
              width={"100%"}
              height={"100%"}
            />
          </Box>

          <Box sx={{ position: "absolute", width: "100%", height: "100%" }}>
            <img
              src="/images/Section4/SecretChamberFire.gif"
              alt="My image"
              width={"100%"}
              height={"100%"}
            />
          </Box>
          {/* gifs */}
          <SectionFourGIF setShowSections={setShowSections} />
        </Box>
      )}
      {/* Sectoin Five */}

      {showSections === "sectionFive" && (
        <Box
          sx={{
            position: "relative",
            width: "100vw",
            height: "100vh",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              cursor: "pointer",
              width: "100%",
              height: "100%",
            }}
          >
            <img
              onClick={() => setShowSections("sectionOne")}
              src="/images/Section5.gif"
              alt="My image"
              width={"100%"}
              height={"100%"}
            />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Boochi;
