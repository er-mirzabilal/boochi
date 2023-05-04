import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import HoveringText from "../HoverText";
import "animate.css";
import Link from "next/link";

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

  const text1 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting && text1.current) {
            text1.current.classList.add(
              "animate__animated",
              "animate__backInLeft",
              "animate__slow"
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

  const text3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting && text3.current) {
            text3.current.classList.add(
              "animate__animated",
              "animate__fadeInBottomRight",
              "animate__slow"
            );
            observer.unobserve(entry.target);
          }
        });
      }
    );

    if (text3.current) {
      observer.observe(text3.current);
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
              "animate__backInRight",
              "animate__slow"
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
        ref={gifRefPanda}
        src={tempSrcPanda || srcPanda}
        alt="My GIF"
        width={"7%"}
        style={{
          position: "absolute",
          top: "78%",
          left: "23%",
          transform: "translate(-50%, -50%)",

          cursor: "none",
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

          cursor: "none",
          zIndex: 2,
        }}
        onClick={handleClickWorker}
      />
      <Link href="/">
        <img
          src="/images/Animations/exit.jpeg"
          alt="My image"
          width={"10%"}
          style={{
            position: "absolute",
            top: "50%",
            left: "95%",
            transform: "translate(-50%, -50%)",

            cursor: "none",
            zIndex: 2,
          }}
        />
      </Link>

      <Box
        ref={text1}
        className="box"
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
      <Link href={"https://docs.ordinals.com"} target="_blank">
        <Box
          ref={text2}
          className="box"
          sx={{
            position: "absolute",
            top: "23.5%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "33%",
            zIndex: 2,
            cursor: "none",
          }}
        >
          <HoveringText text={"/images/Section4/Section4Text2.png"} />
        </Box>
      </Link>
      <Box
        ref={text3}
        className="box"
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
