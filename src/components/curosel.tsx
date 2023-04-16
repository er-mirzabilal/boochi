// import React, { useState } from "react";
// import { Box } from "@mui/material";
// import Carousel from "@mui/material/Carousel";

// const MyCarousel = () => {
//   const [slideIndex, setSlideIndex] = useState(0);

//   const handleSlideChange = (event, newIndex) => {
//     setSlideIndex(newIndex);
//   };

//   return (
//     <Box>
//       <Carousel
//         index={slideIndex}
//         onChange={handleSlideChange}
//         sx={{
//           "& .MuiCarouselItem-root": {
//             height: "100%",
//           },
//         }}
//       >
//         {/* Your slides here */}
//         <img src="slide1.png" alt="Slide 1" />
//         <img src="slide2.png" alt="Slide 2" />
//         <img src="slide3.png" alt="Slide 3" />
//       </Carousel>
//     </Box>
//   );
// };

// export default MyCarousel;

import React, { useState } from "react";
import { Box } from "@mui/material";
// import Carousel from "react-slick";
import Carousel from "@mui/material/Carousel";
import SectionOneGIF from "./SectionOneGIF";
import SectionTwoGIF from "./SectionTwoGIF";
import SectionThreeGIF from "./SectionThreeGIF";
import SectionFourGIF from "./SectionFourGIF";

interface BoochiProps {}

const Boochi2: React.FC<BoochiProps> = (props) => {
  const [slideIndex, setSlideIndex] = useState<number>(0);

  const handleSlideChange = (event: React.SyntheticEvent, newIndex: number) => {
    setSlideIndex(newIndex);
  };

  return (
    <Box>
      <Carousel
        index={slideIndex}
        onChange={handleSlideChange}
        sx={{
          "& .MuiCarouselItem-root": {
            height: "100%",
          },
        }}
      >
        {/* Section One */}
        <Box sx={{ height: "100%" }}>
          <Box
            sx={{
              position: "relative",
            }}
          >
            <img
              src="images/Section1/CastlePositionLight.png"
              alt="My image"
              style={{ maxWidth: "100%" }}
            />

            <img
              src="images/Section1/Anuncio.gif"
              alt="My image"
              style={{ maxWidth: "100%" }}
            />

            <Box
              onClick={() => setSlideIndex(1)}
              sx={{
                position: "absolute",
                width: "42%",
                height: { lg: "40vh", md: "30vh", sm: "10vh", xs: "10vh" },
                left: "30%",
                top: { lg: 70, md: 60, sm: 50, xs: 40 },
                cursor: "pointer",
              }}
            ></Box>

            <img
              src="images/Section1/ForegroundLight.png"
              alt="My image"
              style={{ maxWidth: "100%" }}
            />

            <img
              src="images/Section1/SkyLight.png"
              alt="My image"
              style={{ maxWidth: "100%" }}
            />

            <SectionOneGIF />
          </Box>
        </Box>

        {/* Section Two */}
        <Box sx={{ height: "100%" }}>
          <Box sx={{ position: "relative" }}>
            <img
              src="/images/Section2/ThroneRoomGodRays.png"
              alt="My image"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />

            <img
              src="/images/Section2/SkyThroneroom.png"
              alt="My image"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />

            <img
              src="/images/Section2/ThroneLight.png"
              alt="My image"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />

            <img
              src="/images/Section2/ThroneRoomBackgroundLight.png"
              alt="My image"
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />

            <SectionTwoGIF />
          </Box>
        </Box>
      </Carousel>
    </Box>
  );
};
export default Boochi2;
