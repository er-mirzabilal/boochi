import { useRef, useState } from "react";

const SectionThreeGIF = (props: any) => {
  const [src, setSrc] = useState<string>(
    "/images/Animations/BooWizard_IDLE .gif"
  );
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
          left: "49.5%",
          transform: "translate(-50%, -50%)",

          cursor: "pointer",
          zIndex: 2,
        }}
        onClick={handleClick}
      />
    </>
  );
};

export default SectionThreeGIF;
