import { Box } from "@mui/material";
import { useRef, useState } from "react";
import HoveringText from "../HoverText";
import Music from "./music";

export const Section = (props: any) => {
  const [musicBox, setMusicBox] = useState(true);

  return (
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        margin: 0,
      }}
    >
      <Box
        onClick={() => props.setShowSection(true)}
        sx={{
          position: "absolute",
          width: "42%",
          height: {
            xl: "45vh",
            lg: "35vh",
            md: "25vh",
            sm: "14vh",
            xs: "12vh",
            miniMobile: "10vh",
          },
          zIndex: 3,
          left: "30%",
          top: { lg: 60, md: 40, sm: 30, xs: 22, miniMobile: 18 },
          cursor: "pointer",
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
        }}
      >
        <img
          src="images/Section1/CastlePositionLight.png"
          alt="My image"
          style={{
            width: "100vw",
          }}
          loading="lazy"
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
          style={{
            width: "100vw",
          }}
          loading="lazy"
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
          style={{ width: "100vw" }}
          loading="lazy"
        />
        <SectionOneGIF
          showSection={props.showSection}
          setShowSection={props.setShowSection}
        />

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
            src={"/images/Music/booBATTLE.wav"}
          />
        </Box>
      </Box>
    </Box>
  );
};

const SectionOneGIF = (props: any) => {
  console.log(props, "props for section 1 ");
  const [src] = useState<string>("images/Section1/monster.jpeg");
  const [tempSrc, setTempSrc] = useState<string>("");

  const gifRef = useRef<HTMLImageElement>(null);

  function handleClick(): void {
    setTempSrc("images/Section1/monsterGIF.jpeg");
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
        width="23%"
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

      <Box
        sx={{
          position: "absolute",

          width: "80%",
          top: "43%",
          left: "11%",
        }}
      >
        <HoveringText text={"images/Section1/text.jpeg"} />
      </Box>
      <img
        src="images/Section1/arrowCastle.gif"
        alt="My image"
        width={"90%"}
        style={{
          position: "absolute",
          transform: "rotate(63deg)",
          width: "7%",
          top: "5%",
          left: "42%",
          zIndex: 2,
        }}
      />
    </>
  );
};

export default SectionOneGIF;
