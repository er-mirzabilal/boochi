import { useRef, useState } from "react";

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
      <img
        src="/images/changes/changes/Section3TextBox1.png"
        alt="My GIF"
        width={"26%"}
        style={{
          position: "absolute",
          top: "26.5%",
          left: "17%",
          transform: "translate(-50%, -50%)",

          zIndex: 2,
        }}
        onClick={handleClick}
      />
      <img
        src="/images/changes/changes/Section3TextBox2.png"
        alt="My GIF"
        width={"23%"}
        style={{
          position: "absolute",
          top: "79.5%",
          left: "50.0%",
          transform: "translate(-50%, -50%)",

          zIndex: 2,
        }}
        onClick={handleClick}
      />
    </>
  );
};

export default SectionThreeGIF;
