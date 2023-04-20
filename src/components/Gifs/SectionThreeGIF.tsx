import { useRef, useState } from "react";
import HoveringText from "../HoverText";
import { Box } from "@mui/material";

const SectionThreeGIF = () => {
  const [src] = useState<string>("/images/Section3/boo.jpeg");
  const [tempSrc, setTempSrc] = useState<string>("");

  const gifRef = useRef<HTMLImageElement>(null);

  function handleClick(): void {
    setTempSrc("images/Animations/BooWizard_CLICKABLE .gif");
    setTimeout(() => {
      setTempSrc("");
    }, 1200);
  }

  return (
    <>
      <img
        ref={gifRef}
        src={tempSrc || src}
        alt="My GIF"
        width={"6%"}
        style={{
          position: "absolute",
          top: "65.5%",
          left: "50%",
          transform: "translate(-50%, -50%)",

          cursor: "pointer",
          zIndex: 2,
        }}
        onClick={handleClick}
      />
      {/* text */}

      <Box
        sx={{
          position: "absolute",
          top: "34%",
          left: "49.5%",
          transform: "translate(-50%, -50%)",
          width: "42%",
          zIndex: 2,
        }}
      >
        <HoveringText text={"/images/Section3/Section3Text2.png"} />
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: "73.5%",
          left: "50.0%",
          transform: "translate(-50%, -50%)",
          width: "24%",
          zIndex: 2,
        }}
      >
        <HoveringText text={"/images/Section3/Section3Text1.png"} />
      </Box>
    </>
  );
};

export default SectionThreeGIF;
