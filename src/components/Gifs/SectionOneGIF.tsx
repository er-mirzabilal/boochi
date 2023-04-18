import { Box } from "@mui/material";
import { useRef, useState } from "react";

export const Section = (props: any) => {
  return (
    <Box
      sx={{
        position: "relative",

        // display: currentSlide === 0 ? "block" : "none",
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
        onClick={() => props.setShowSection(true)}
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
  );
};

const SectionOneGIF = (props: any) => {
  const [src, setSrc] = useState<string>(
    "images/Animations/booreAndMonster.gif"
  );
  const [tempSrc, setTempSrc] = useState<string>("");

  const gifRef = useRef<HTMLImageElement>(null);

  function handleClick(): void {
    setTempSrc("images/Animations/banner - CLICKABLE.gif");
    setTimeout(() => {
      setTempSrc("");
    }, 2400);
  }

  return (
    <>
      <img
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
      />
    </>
  );
};

export default SectionOneGIF;
