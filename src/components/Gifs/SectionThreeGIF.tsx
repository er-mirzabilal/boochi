import { useEffect, useRef, useState } from "react";
import HoveringText from "../HoverText";
import { Box } from "@mui/material";
import "animate.css";

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
  const text1 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting && text1.current) {
            text1.current.classList.add(
              "animate__animated",
              "animate__backInUp"
            );
            observer.unobserve(entry.target);
          }
        });
      }
    );

    if (text1.current) {
      observer.observe(text1.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
  const text2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting && text2.current) {
            text2.current.classList.add(
              "animate__animated",
              "animate__backInUp"
            );
            observer.unobserve(entry.target);
          }
        });
      }
    );

    if (text2.current) {
      observer.observe(text2.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);
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
        ref={text2}
        className="box"
        sx={{
          position: "absolute",
          top: "34%",
          left: "28.4%",
          transform: "translate(-50%, -50%)",
          width: "42%",
          zIndex: 2,
        }}
      >
        <HoveringText text={"/images/Section3/Section3Text2.png"} />
      </Box>

      <Box
        ref={text1}
        className="box"
        sx={{
          position: "absolute",
          top: "73.5%",
          left: "37.0%",
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
