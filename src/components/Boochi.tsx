import React, { useRef, useState } from "react";
import { Box } from "@mui/material";
import SectionOneGIF from "./SectionOneGIF";
import SectionTwoGIF from "./SectionTwoGIF";
import SectionThreeGIF from "./SectionThreeGIF";
import SectionFourGIF from "./SectionFourGIF";

const Boochi = () => {
  const [showSections, setShowSections] = useState("sectionOne");
  const [src, setSrc] = useState<string>(
    "images/Animations/booreAndMonster.gif"
  );
  // const [tempSrc, setTempSrc] = useState<string>("");

  // const gifRef = useRef<HTMLImageElement>(null);

  // function handleClick(): void {
  //   setTempSrc("images/Animations/banner - CLICKABLE.gif");
  //   setTimeout(() => {
  //     setTempSrc("");
  //   }, 2000);
  // }

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
              // width: "100vw",
              // height: "100vh",
              // overflow: "hidden",
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

              {/* <img
                ref={gifRef}
                src={tempSrc || src}
                alt="My GIF"
                width="50%"
                style={{
                  position: "absolute",
                  top: "83.5%",
                  left: "53.5%",
                  transform: "translate(-50%, -50%)",
                  cursor: "pointer",
                  zIndex: 2,
                }}
                onClick={handleClick}
              /> */}
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
            }}
          >
            <Box sx={{ position: "absolute" }}>
              <img
                src="/images/Section3/ArchiveRoomLightning.png"
                alt="My image"
                style={{ width: "100%", height: "100%" }}
              />
            </Box>

            <Box
              onClick={() => setShowSections("sectionFour")}
              sx={{ position: "absolute" }}
            >
              <img
                src="/images/Section3/ArchiveRoomFire.gif"
                alt="My image"
                // style={{ maxWidth: "100%", maxHeight: "100%" }}
                style={{ width: "100%", height: "100%" }}
              />
              <SectionThreeGIF />
            </Box>
          </Box>
        )}{" "}
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
            }}
          >
            <Box sx={{ position: "absolute" }}>
              <img
                src="/images/Section4/SecretChamberLight.png"
                alt="My image"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
            </Box>

            <Box
              onClick={() => setShowSections("sectionFive")}
              sx={{ position: "absolute" }}
            >
              <img
                src="/images/Section4/SecretChamberFire.gif"
                alt="My image"
                style={{ maxWidth: "100%", maxHeight: "100%" }}
              />
              <SectionFourGIF />
            </Box>
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
        )}
      </Box>
    </Box>
  );
};

export default Boochi;
