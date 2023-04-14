import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    position: "relative",
  }),
  content: {
    opacity: 0,
  },
}));

const SectionOneGIF = (props: any) => {
  const [src, setSrc] = useState<string>(
    "images/Animations/booreAndMonster.gif"
  );
  const [tempSrc, setTempSrc] = useState<string>("");

  const gifRef = useRef<HTMLImageElement>(null);

  function handleClick(): void {
    setTempSrc("images/Animations/banner - CLICKABLE.gif");
    setTimeout(() => {
      setTempSrc("");
    }, 2000);
  }
  const classes = useStyles();
  const controls1 = useAnimation();
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.5,
    // triggerOnce: true,
  });

  useEffect(() => {
    if (inView1) {
      controls1.start({
        opacity: 1,
        transition: { duration: 1, delay: 0.5 },
      });
    }
  }, [controls1, inView1]);

  return (
    <motion.div className={classes.root} transition={{ duration: 1 }}>
      <motion.div
        ref={ref1}
        className={classes.content}
        animate={controls1}
        initial={{ opacity: 0 }}
      >
        <img
          ref={gifRef}
          src={tempSrc || src}
          alt="My GIF"
          width="50%"
          style={{
            position: "absolute",
            top: "83.5%",
            left: "53.5%",
            transform: "translate(-50%, -50%)",
            cursor: "pointer",
            zIndex: 2,
          }}
          onClick={handleClick}
        />
      </motion.div>
    </motion.div>
  );
};

export default SectionOneGIF;
