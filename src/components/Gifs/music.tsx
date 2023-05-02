import { Box } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

const Music = (props: any) => {
  const [play] = useState(false);

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
    const isCurrentlyMuted = audio ? audio.muted : true;

    setIsMuted(!isCurrentlyMuted);

    if (audio) {
      audio.muted = !isCurrentlyMuted;
    }

    props.setMusicBox(!props.musicBox);
  };

  return (
    <div>
      {!props?.musicBox && (
        <Box
          sx={{
            position: "absolute",
            width: "20vw",
            top: "8%",
            cursor: "none",
            left: "4%",
           
          }}
        >
          <img
            onClick={toggleMute}
            src="/images/Music/MusicButton.png"
            alt="My image"
            width={"20%"}
          />
        </Box>
      )}
      {props?.musicBox && (
        <Box
          sx={{
            position: "absolute",
            top: "75%",
            left: "3%",
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

            <audio src={props?.src} ref={audioRef} muted={isMuted} />

            <Box
              onClick={togglePlayPause}
              sx={{
                position: "absolute",
                cursor: "none",
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
                cursor: "none",
                width: "20vw",
                top: "8%",
                zIndex: 2,
                left: "65%",
              }}
            >
              <img
                onClick={() => props.setMusicBox(!props.musicBox)}
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
              }}
            >
              <img
                onClick={toggleMute}
                src="/images/Music/MusicButton.png"
                alt="My image"
                width={"20%"}
                style={{ cursor: "none", zIndex: 2 }}
              />
            </Box>
          </Box>
        </Box>
      )}
    </div>
  );
};

export default Music;
