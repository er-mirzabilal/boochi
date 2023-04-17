import { Navigation, Pagination, Scrollbar, A11y, Mousewheel } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SectionOneGIF from "./Gifs/SectionOneGIF";
import { Box } from "@mui/material";
import SectionFourGIF from "./Gifs/SectionFourGIF";
import SectionThreeGIF from "./Gifs/SectionThreeGIF";
import SectionTwoGIF from "./Gifs/SectionTwoGIF";
import { useState } from "react";
const Section = (props: any) => {
  return (
    <Box
      style={{
        transition: "transform 0.5s ease-out",
      }}
    >
      <Box
        sx={{
          position: "relative",

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
          onClick={() => props.setShowSection(true)}
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
interface SlideProps {
  children: React.ReactNode;
}
const Slide = ({ children }: SlideProps) => {
  return (
    <div className="slide">
      {children}
      <style jsx>{`
        .slide {
          transition: transform 0.5s ease-out;
          transform: translateX(100%);
        }
        .slide.swiper-slide-active {
          transform: translateX(0%);
        }
      `}</style>
    </div>
  );
};

const SwiperExplorer = () => {
  const [showSection, setShowSection] = useState(false);
  return (
    <>
      {!showSection && (
        <Section showSection={false} setShowSection={setShowSection} />
      )}
      <Box
        style={{
          transition: "transform 0.5s ease-out",

          transform: `translateX(${showSection ? "0" : "100%"})`,
        }}
      >
        {showSection && (
          <Swiper
            // install Swiper modules
            modules={[Scrollbar, A11y, Mousewheel]}
            spaceBetween={50}
            slidesPerView={1}
            // direction="horizontal"
            //   navigation
            mousewheel={true}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper: any) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            <SwiperSlide>
              <SectionTwo />
            </SwiperSlide>

            <SwiperSlide>
              <SectionThree />
            </SwiperSlide>
            <SwiperSlide>
              <SectionFour />
            </SwiperSlide>
          </Swiper>
        )}
      </Box>
    </>
  );
};
export default SwiperExplorer;
