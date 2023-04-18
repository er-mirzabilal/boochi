import { Box } from "@mui/material";
import { useRef, useState } from "react";

export const Section = (props: any) => {
  return (
    // <Box
    //   sx={{
    //     position: "relative",
    //   }}
    // >
    //   <Box
    //     onClick={() => props.setShowSection(true)}
    //     sx={{
    //       position: "absolute",

    //       width: "42%",
    //       height: { lg: "40vh", md: "30vh", sm: "10vh", xs: "10vh" },

    //       zIndex: 2,
    //       left: "30%",
    //       top: { lg: 70, md: 60, sm: 50, xs: 40 },
    //       cursor: "pointer",
    //     }}
    //   ></Box>
    //   <Box
    //     sx={{
    //       position: "absolute",
    //     }}
    //   >
    //     <img
    //       src="images/Section1/ForegroundLight.png"
    //       alt="My image"
    //       style={{ maxWidth: "100%" }}
    //     />
    //   </Box>

    //   <Box
    //     sx={{
    //       position: "absolute",
    //     }}
    //   >
    //     <img
    //       src="images/Section1/SkyLight.png"
    //       alt="My image"
    //       style={{ maxWidth: "100%" }}
    //     />
    //     <SectionOneGIF
    //       showSection={props.showSection}
    //       setShowSection={props.setShowSection}
    //     />
    //   </Box>
    // </Box>
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
          height: { lg: "34vh", md: "30vh", sm: "15vh", xs: "10vh" },
          zIndex: 3,
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
      </Box>
    </Box>
  );
};

const SectionOneGIF = (props: any) => {
  console.log(props, "props for section 1 ");
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

      <img
        src="images/Section1/Anuncio.gif"
        alt="My image"
        width={"90%"}
        style={{
          position: "absolute",

          width: "80%",
          top: "33%",
          left: "15%",
          zIndex: 2,
        }}
      />

      {/* castle */}

      {/* <Box
        onClick={() => props.setShowSection(true)}
        sx={{
          position: "absolute",

          width: "68%",
          top: "7%",
          left: "30.7%",
          // zIndex: 2,
          cursor: "pointer",
          transition: "transform 0.3s ease-in",

          ":hover": {
            animation: "shake 1s",
          },
        }}
      >
        <img
          src="images/Section1/castleSS-removebg-preview.png"
          alt="My image"
          width={"60%"}
          style={{}}
        />
      </Box> */}
    </>
  );
};

export default SectionOneGIF;
