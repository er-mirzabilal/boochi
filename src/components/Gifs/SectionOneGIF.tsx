import { Box } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import HoveringText from "../HoverText";

export const Section = (props: any) => {
  const [play, setPlay] = useState(false);
  const [musicBox, setMusicBox] = useState(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const [isMuted, setIsMuted] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    const handlePlayPause = () => {
      const audio = audioRef.current;
      if (audio) {
        setIsPlaying(audio.paused ? false : true);
      }
    };

    if (audio) {
      audio.addEventListener("play", handlePlayPause);
      audio.addEventListener("pause", handlePlayPause);

      return () => {
        audio.removeEventListener("play", handlePlayPause);
        audio.removeEventListener("pause", handlePlayPause);
      };
    }
  }, [audioRef.current]);

  const togglePlayPause = () => {
    const audio = audioRef.current;

    if (audio) {
      if (audio.paused) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  };
  const toggleMute = () => {
    const audio = audioRef.current;
    setIsMuted(!isMuted);
    if (audio) {
      audio.muted = !audio.muted;
    }
  };
  return (
    // <Box
    //   sx={{
    //     position: "relative",
    //   }}
    // >
    //   <Box
    //     onClick={() => props.setShowSection(true)}
    //     sx={{
    //       position: "absolute",

    //       width: "42%",
    //       height: { lg: "40vh", md: "30vh", sm: "10vh", xs: "10vh" },

    //       zIndex: 2,
    //       left: "30%",
    //       top: { lg: 70, md: 60, sm: 50, xs: 40 },
    //       cursor: "pointer",
    //     }}
    //   ></Box>
    //   <Box
    //     sx={{
    //       position: "absolute",
    //     }}
    //   >
    //     <img
    //       src="images/Section1/ForegroundLight.png"
    //       alt="My image"
    //       style={{ maxWidth: "100%" }}
    //     />
    //   </Box>

    //   <Box
    //     sx={{
    //       position: "absolute",
    //     }}
    //   >
    //     <img
    //       src="images/Section1/SkyLight.png"
    //       alt="My image"
    //       style={{ maxWidth: "100%" }}
    //     />
    //     <SectionOneGIF
    //       showSection={props.showSection}
    //       setShowSection={props.setShowSection}
    //     />
    //   </Box>
    // </Box>
    <Box
      sx={{
        position: "relative",
        width: "100vw",
        margin: 0,
      }}
    >
      <Box
        onClick={() => props.setShowSection(true)}
        sx={{
          position: "absolute",
          // background: "red",
          width: "42%",
          height: {
            xl: "45vh",
            lg: "35vh",
            md: "25vh",
            sm: "14vh",
            xs: "12vh",
            miniMobile: "10vh",
          },
          // height: "40%",
          zIndex: 3,
          left: "30%",
          top: { lg: 60, md: 40, sm: 30, xs: 22, miniMobile: 18 },
          // top: "20%",
          cursor: "pointer",
        }}
      ></Box>
      <Box
        sx={{
          position: "absolute",
        }}
      >
        <img
          src="images/Section1/CastlePositionLight.png"
          alt="My image"
          style={{
            width: "100vw",

            // height: "100vh",
          }}
        />
      </Box>
      <Box
        sx={{
          position: "absolute",
        }}
      >
        <img
          src="images/Section1/ForegroundLight.png"
          alt="My image"
          style={{
            width: "100vw",
            // height: "100vh",
          }}
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
          style={{ width: "100vw" }}
        />
        <SectionOneGIF
          showSection={props.showSection}
          setShowSection={props.setShowSection}
        />
        {musicBox && (
          <Box
            sx={{
              position: "absolute",
              top: "75%",
              left: "3%",
              // width: { md: "20vw", sm: "15vw", miniMobile: "13vw" },
              width: "25vw",
              paddingBottom: 2,
            }}
          >
            <Box sx={{ position: "absolute", width: "20vw", zIndex: 2 }}>
              <img
                src="/images/Music/ButtonBase.png"
                alt="My image"
                width={"90%"}
              />

              <audio
                src="/images/Music/booBATTLE.wav"
                ref={audioRef}
                muted={isMuted}
              />

              <Box
                onClick={togglePlayPause}
                sx={{
                  position: "absolute",
                  cursor: "pointer",
                  width: "12vw",
                  display: play ? "none" : "block",
                  top: "15%",
                  zIndex: 2,

                  left: "28%",
                }}
              >
                <img
                  src={
                    isPlaying
                      ? "/images/Music/PauseButton.png"
                      : "/images/Music/PlayButton.png"
                  }
                  alt="My image"
                  width={"55%"}
                />
              </Box>

              <Box
                sx={{
                  position: "absolute",
                  cursor: "pointer",
                  width: "20vw",
                  top: "8%",
                  zIndex: 2,
                  left: "65%",
                }}
              >
                <img
                  onClick={() => setMusicBox(!musicBox)}
                  src="/images/Music/XButton.png"
                  alt="My image"
                  width={"20%"}
                />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  width: "20vw",
                  top: "8%",

                  left: "4%",

                  // background: "red",
                }}
              >
                <img
                  onClick={toggleMute}
                  src="/images/Music/MusicButton.png"
                  alt="My image"
                  width={"20%"}
                  style={{ cursor: "pointer", zIndex: 2 }}
                />
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

const SectionOneGIF = (props: any) => {
  console.log(props, "props for section 1 ");
  const [src] = useState<string>("images/Section1/monster.jpeg");
  const [tempSrc, setTempSrc] = useState<string>("");

  const gifRef = useRef<HTMLImageElement>(null);

  function handleClick(): void {
    setTempSrc("images/Section1/monsterGIF.jpeg");
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
        width="23%"
        style={{
          position: "absolute",
          top: "83.5%",
          left: "53.5%",
          transform: "translate(-50%, -50%)",
          cursor: "pointer",
          zIndex: 2,
          // background: "red",
        }}
        onClick={handleClick}
      />

      <Box
        sx={{
          position: "absolute",

          width: "80%",
          top: "43%",
          left: "11%",
        }}
      >
        <HoveringText text={"images/Section1/text.jpeg"} />
      </Box>
      <img
        src="images/Section1/arrowCastle.gif"
        alt="My image"
        width={"90%"}
        style={{
          position: "absolute",
          transform: "rotate(63deg)",
          width: "7%",
          top: "5%",
          left: "42%",
          zIndex: 2,
        }}
      />
    </>
  );
};

export default SectionOneGIF;
