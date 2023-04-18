import { Box } from "@mui/material";
import { useRef, useState } from "react";

const SectionTwoGIF = (props: any) => {
  const [src, setSrc] = useState<string>(
    "/images/Animations/kingSkype.jpeg"
    // "/images/Animations/king.png"
  );
  const [tempSrc, setTempSrc] = useState<string>("");

  const gifRef = useRef<HTMLImageElement>(null);

  function handleClick(): void {
    setTempSrc("images/Animations/skypeKing.jpeg");
    setTimeout(() => {
      setTempSrc("");
    }, 1200);
  }
  // for ClickAblecat
  const [srcCat, setSrCat] = useState<string>(
    "images/Animations/Boo58BlackCatBoo_IDLE.gif"
  );

  const [tempSrcCat, setTempSrcCat] = useState<string>();

  const gifRefCat = useRef<HTMLImageElement>(null);

  function handleClickCat(): void {
    setTempSrcCat("images/Animations/Boo58BlackCatBoo_CLICKABLE.gif");
    setTimeout(() => {
      setTempSrcCat("");
    }, 800);
  }
  // for ClickAbleKit
  const [srcKit, setSrcKit] = useState<string>(
    "images/Animations/Boo5kitsuneboo_IDLE.gif"
  );

  const [tempSrcKit, setTempSrcKit] = useState<string>();

  const gifRefKit = useRef<HTMLImageElement>(null);

  function handleClickKit(): void {
    setTempSrcKit("images/Animations/Boo5kitsuneboo_CLICKABLE.gif");
    setTimeout(() => {
      setTempSrcKit("");
    }, 2500);
  }

  //latter

  const [srcLetter, setSrcLetter] = useState(false);

  return (
    <>
      <img
        ref={gifRef}
        src={tempSrc || src}
        alt="My GIF"
        width={"7%"}
        style={{
          position: "absolute",
          top: "62.5%",
          left: "58%",
          transform: "translate(-50%, -50%)",

          cursor: "pointer",
          zIndex: 2,
        }}
        onClick={handleClick}
      />
      <img
        ref={gifRefCat}
        src={tempSrcCat || srcCat}
        alt="My GIF"
        width={"8%"}
        style={{
          position: "absolute",
          top: "14%",
          left: "15%",
          transform: "translate(-50%, -50%)",
          cursor: "pointer",
          zIndex: 2,
        }}
        onClick={handleClickCat}
      />
      <img
        ref={gifRefKit}
        src={tempSrcKit || srcKit}
        alt="My GIF"
        width={"17%"}
        style={{
          position: "absolute",
          top: "77.5%",
          left: "31%",
          transform: "translate(-50%, -50%)",
          cursor: "pointer",
          zIndex: 2,
        }}
        onClick={handleClickKit}
      />

      <img
        src="images/changes/changes/ScrollClosed.png"
        alt="My GIF"
        width={"40%"}
        style={{
          position: "absolute",
          display: srcLetter ? "none" : "block",
          top: "118%",
          left: "70%",
          transform: "translate(-50%, -50%)",
          cursor: "pointer",
          zIndex: 2,
        }}
        onClick={() => setSrcLetter(!srcLetter)}
      />

      <img
        src="images/changes/changes/ScrollOpenContent.png"
        alt="My GIF"
        width={"40%"}
        style={{
          position: "absolute",
          top: "55.4%",
          display: srcLetter ? "block" : "none",
          left: "70%",
          transform: "translate(-50%, -50%)",
          cursor: "pointer",
          zIndex: 2,
        }}
        onClick={() => setSrcLetter(!srcLetter)}
      />
    </>
  );
};

export default SectionTwoGIF;
