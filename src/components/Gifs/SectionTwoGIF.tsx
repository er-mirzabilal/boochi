import { useRef, useState } from "react";

const SectionTwoGIF = () => {
  const [src] = useState<string>("/images/Animations/kingSkype.jpeg");
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
  const [srcKit] = useState<string>(
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

  const [scrollOpen, setScrollOpen] = useState(false);

  const [scrollSrc, setScrollSrc] = useState(
    "images/Section2/Scroll/ScrollClosed.png"
  );

  function handleClickScroll(): void {
    setScrollSrc("images/Section2/Scroll/ScrollOpening.gif");
    setTimeout(() => {
      setScrollSrc("images/Section2/Scroll/ScrollOpenContent.png");
      setScrollOpen(true);
    }, 1000);
  }
  function handleClickScrollClose(): void {
    setScrollSrc("images/Section2/Scroll/ScrollClosing.gif");
    setTimeout(() => {
      setScrollSrc("images/Section2/Scroll/ScrollClosed.png");
      setScrollOpen(false);
    }, 1050);
  }

  //latter

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
        src={scrollSrc}
        onClick={scrollOpen ? handleClickScrollClose : handleClickScroll}
        alt="My GIF"
        width={"40%"}
        style={{
          position: "absolute",
          top: "3%",
          left: "50%",
          cursor: "pointer",
          zIndex: 2,
        }}
        loading="lazy"
        onMouseEnter={(e) => {
          e.currentTarget.style.animation =
            scrollSrc === "images/Section2/Scroll/ScrollClosed.png"
              ? "scrollShake 0.7s"
              : "";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.animation = "";
        }}
      />
    </>
  );
};

export default SectionTwoGIF;
