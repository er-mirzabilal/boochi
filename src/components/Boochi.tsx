import React, { useRef, useState } from "react";
import { Box } from "@mui/material";
import SectionOneGIF from "./SectionOneGIF";
import SectionTwoGIF from "./SectionTwoGIF";
import SectionThreeGIF from "./SectionThreeGIF";
import SectionFourGIF from "./SectionFourGIF";

const Boochi = () => {
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
        {showSections === "sectionOne" && (
          <Box
            sx={{
              position: "relative",
              width: "100vw",
              height: "100vh",
              // overflow: "hidden",file:///home/usama/Downloads/boochi/Bitcoin%20Boos%20%E2%80%93%20The%20website%20hub%20of%20the%20Kingdom.html
            }}
          >
            <Box
              sx={{
                position: "absolute",
                zIndex: 2,
              }}
            >
              <img
                onClick={() => setShowSections("sectionTwo")}
                src="images/Section1/CastlePositionLight.png"
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
        )}
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

            <Box
              onClick={() => setShowSections("sectionThree")}
              sx={{ position: "absolute", width: "100%", height: "100%" }}
            >
              <img
                src="/images/Section2/ThroneRoomBackgroundLight.png"
                alt="My image"
                width={"100%"}
                height={"100%"}
              />
            </Box>
            <SectionTwoGIF />

            {/* gifs */}
          </Box>
        )}
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

            <Box
              onClick={() => setShowSections("sectionFour")}
              sx={{ position: "absolute", width: "100%", height: "100%" }}
            >
              <img
                src="/images/Section3/ArchiveRoomFire.gif"
                alt="My image"
                width={"100%"}
                height={"100%"}
              />
            </Box>
            {/* gifs */}
            <Box>
              <SectionThreeGIF />
            </Box>
          </Box>
        )}
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

            <Box
              onClick={() => setShowSections("sectionFive")}
              sx={{ position: "absolute", width: "100%", height: "100%" }}
            >
              <img
                src="/images/Section4/SecretChamberFire.gif"
                alt="My image"
                width={"100%"}
                height={"100%"}
              />
            </Box>
            {/* gifs */}
            <SectionFourGIF />
          </Box>
        )}
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
    </Box>
  );
};

export default Boochi;
