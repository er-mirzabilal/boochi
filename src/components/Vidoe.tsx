import React, { useRef, useEffect } from "react";

function VideoPlayer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  let timeoutId: NodeJS.Timeout;

  useEffect(() => {
    let lastScrollTop = 0;

    function handleScroll() {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const direction = scrollTop > lastScrollTop ? "down" : "up";
      lastScrollTop = scrollTop;
      if (direction === "down") {
        videoRef.current?.pause();
        clearTimeout(timeoutId);
      } else {
        videoRef.current?.play();
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          videoRef.current?.pause();
        }, 500); // set the timeout to 500 milliseconds (0.5 seconds) after scrolling stops
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <video ref={videoRef} src="images/A9.mp4" autoPlay muted loop />
      <video ref={videoRef} src="images/A9.mp4" autoPlay muted loop />

      <video ref={videoRef} src="images/A9.mp4" autoPlay muted loop />
    </div>
  );
}

export default VideoPlayer;
