import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import HoveringText from "../HoverText";
import Music from "./music";

export const Section = (props: any) => {
  const [play, setPlay] = useState(false);
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
          // background: "red",
          width: "42%",
          height: {
            xl: "45vh",
            lg: "35vh",
            md: "25vh",
            sm: "14vh",
            xs: "12vh",
            miniMobile: "10vh",
          },
          // height: "40%",
          zIndex: 3,
          left: "30%",
          top: { lg: 60, md: 40, sm: 30, xs: 22, miniMobile: 18 },
          // top: "20%",
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

            // height: "100vh",
          }}
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
            // height: "100vh",
          }}
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
        />
        <SectionOneGIF
          showSection={props.showSection}
          setShowSection={props.setShowSection}
        />

        <Box
          sx={{
            // position: "absolute",
            // top: "75%",
            position: "fixed",
            top: {
              lg: "80%",
              md: "50%",
              sm: "33%",
              xs: "20%",
              miniMobile: "23%",
            },
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
          // background: "red",
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
