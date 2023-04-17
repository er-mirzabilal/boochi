import { useRef, useState } from "react";

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
