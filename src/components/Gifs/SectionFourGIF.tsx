import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import HoveringText from "../HoverText";
import "animate.css";

const SectionFourGIF = () => {
  // for ClickAblepanda
  const [srcPanda] = useState<string>("images/Section4/Pand0_IDLEa.gif");

  const [tempSrcPanda, setTempSrcPanda] = useState<string>();

  const gifRefPanda = useRef<HTMLImageElement>(null);

  function handleClickPnada(): void {
    setTempSrcPanda("/images/Section4/Pand0_CLICKABLEa.jpeg");
    setTimeout(() => {
      setTempSrcPanda("");
    }, 2300);
  }
  // for ClickAbleworker
  const [srcWorker] = useState<string>(
    "/images/Animations/Boo3ConstructionBoo_IDLE.gif"
  );

  const [tempSrcWorker, setTempSrcWorker] = useState<string>();

  const gifRefWorker = useRef<HTMLImageElement>(null);

  function handleClickWorker(): void {
    setTempSrcWorker("images/Section4/worker.jpeg");
    setTimeout(() => {
      setTempSrcWorker("");
    }, 2500);
  }

  // const [boxRef, isBoxVisible] = useOnScreen({
  //   rootMargin: "-100px 0px",
  //   threshold: 0.5,
  // });

  // const boxAnimationClass = isBoxVisible
  //   ? "animate__animated animate__fadeInBottomRight"
  //   : "";

  return (
    <>
      <img
        ref={gifRefPanda}
        src={tempSrcPanda || srcPanda}
        alt="My GIF"
        width={"7%"}
        style={{
          position: "absolute",
          top: "78%",
          left: "23%",
          transform: "translate(-50%, -50%)",

          cursor: "pointer",
          zIndex: 2,
        }}
        onClick={handleClickPnada}
      />
      <img
        ref={gifRefWorker}
        src={tempSrcWorker || srcWorker}
        alt="My GIF"
        width={"7%"}
        style={{
          position: "absolute",
          top: "78%",
          left: "50%",
          transform: "translate(-50%, -50%)",

          cursor: "pointer",
          zIndex: 2,
        }}
        onClick={handleClickWorker}
      />
      <a href="/">
        <img
          src="/images/Animations/exit.jpeg"
          alt="My image"
          width={"10%"}
          style={{
            position: "absolute",
            top: "50%",
            left: "95%",
            transform: "translate(-50%, -50%)",

            cursor: "pointer",
            zIndex: 2,
          }}
        />
      </a>

      <Box
        className="animate__animated animate__fadeInBottomRight"
        sx={{
          position: "absolute",
          top: "23.5%",
          left: "13%",
          transform: "translate(-50%, -50%)",
          width: "37%",
          zIndex: 2,
        }}
      >
        <HoveringText text={"/images/Section4/Section4Text1.png"} />
      </Box>

      <Box
        // ref={boxRef || undefined}
        // className={boxAnimationClass}
        className="animate__animated animate__fadeInBottomRight"
        sx={{
          position: "absolute",
          top: "23.5%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "33%",
          zIndex: 2,
        }}
      >
        <HoveringText text={"/images/Section4/Section4Text2.png"} />
      </Box>

      <Box
        className="animate__animated animate__fadeInBottomRight"
        sx={{
          position: "absolute",
          top: "88%",
          left: "33%",
          transform: "translate(-50%, -50%)",
          width: "33%",
          zIndex: 2,
        }}
      >
        <HoveringText text={"/images/Section4/Section4Text3.png"} />
      </Box>
    </>
  );
};
export default SectionFourGIF;
 