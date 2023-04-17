import React, { useState, useEffect } from "react";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box } from "@mui/material";
import SectionOneGIF from "./Gifs/SectionOneGIF";
import SectionTwoGIF from "./Gifs/SectionTwoGIF";
import SectionThreeGIF from "./Gifs/SectionThreeGIF";
import SectionFourGIF from "./Gifs/SectionFourGIF";

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  console.log(currentSlide, "currentSlide");

  const settings: Settings = {
    // dots: true,
    infinite: false,
    speed: 1800,

    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    beforeChange: (newIndex) => setCurrentSlide(newIndex),
    afterChange: (oldIndex) => setCurrentSlide(oldIndex),
    arrows: true,
    vertical: true,
  };

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (e.deltaY < 0 && currentSlide > 0) {
        setCurrentSlide(currentSlide - 1);
        console.log("working if condition");
      } else if (e.deltaY > 0 && currentSlide < 4) {
        setCurrentSlide(currentSlide + 1);
        console.log("working else condition");
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [currentSlide]);
  const Section: React.FC = () => {
    return (
      <Box
        style={{
          transition: "transform 0.5s ease-out",

          transform: "translateX(100%)",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100vw",
            height: "100vh",
            // display: currentSlide === 0 ? "block" : "none",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              zIndex: 2,
            }}
          >
            <img
              src="images/Section1/CastlePositionLight.png"
              alt="My image"
              style={{ maxWidth: "100%" }}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",
              zIndex: 2,
            }}
          >
            <img
              src="images/Section1/Anuncio.gif"
              alt="My image"
              style={{ maxWidth: "100%" }}
            />
          </Box>
          <Box
            sx={{
              position: "absolute",

              width: "42%",
              height: { lg: "40vh", md: "30vh", sm: "10vh", xs: "10vh" },

              zIndex: 2,
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
              src="images/Section1/ForegroundLight.png"
              alt="My image"
              style={{ maxWidth: "100%" }}
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
              style={{ maxWidth: "100%" }}
            />
            <SectionOneGIF />
          </Box>
        </Box>
      </Box>
    );
  };
  const SectionTwo: React.FC = () => {
    return (
      <Box
        style={{
          transition: "transform 0.5s ease-out",

          transform: "translateX(100%)",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100vw",
            height: "100vh",
            // display: currentSlide === 1 ? "block" : "none",
          }}
        >
          <Box sx={{ position: "absolute", zIndex: 2 }}>
            <img
              src="/images/Section2/ThroneRoomGodRays.png"
              alt="My image"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </Box>
          <Box sx={{ position: "absolute" }}>
            <img
              src="/images/Section2/SkyThroneroom.png"
              alt="My image"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </Box>
          <Box sx={{ position: "absolute" }}>
            <img
              src="/images/Section2/ThroneLight.png"
              alt="My image"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </Box>

          <Box sx={{ position: "absolute" }}>
            <img
              src="/images/Section2/ThroneRoomBackgroundLight.png"
              alt="My image"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
            <SectionTwoGIF />
          </Box>
        </Box>
      </Box>
    );
  };
  const SectionThree: React.FC = () => {
    return (
      <Box
        style={{
          transition: "transform 0.5s ease-out",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100vw",
            height: "100vh",
            // display: currentSlide === 2 ? "block" : "none",
          }}
        >
          <Box sx={{ position: "absolute", zIndex: 2 }}>
            <img
              src="/images/Section3/Section3.gif"
              alt="My image"
              style={{ width: "100%", height: "100%" }}
            />
            <SectionThreeGIF />
          </Box>
        </Box>
      </Box>
    );
  };
  const SectionFour: React.FC = () => {
    return (
      <Box
        style={{
          transition: "transform 0.5s ease-out",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100vw",
            height: "100vh",
            // display: currentSlide === 3 ? "block" : "none",
          }}
        >
          <Box sx={{ position: "absolute", zIndex: 2 }}>
            <img
              src="/images/Section4/Section4.gif"
              alt="My image"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />

            <SectionFourGIF />
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <Slider {...settings} initialSlide={currentSlide}>
        <Section />
        <SectionTwo />
        <SectionThree />

        <SectionFour />
      </Slider>
    </Box>
  );
};

export default Carousel;
