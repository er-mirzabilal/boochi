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

const SectionTwoGIF = (props: any) => {
  const [src, setSrc] = useState<string>(
    "/images/Animations/Boo0BooKing_IDLE.gif"
  );
  const [tempSrc, setTempSrc] = useState<string>("");

  const gifRef = useRef<HTMLImageElement>(null);

  function handleClick(): void {
    setTempSrc("images/Animations/Boo0BooKingCLICKABLE.gif");
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
    }, 1200);
  }
  // for ClickAbleKit
  const [srcKit, setSrcKit] = useState<string>(
    "images/Animations/Boo5kitsuneboo_IDLE.gif"
  );

  const [tempSrcKit, setTempSrcKit] = useState<string>();

  const gifRefKit = useRef<HTMLImageElement>(null);

  function handleClickKit(): void {
    setTempSrcKit("images/Animations/Boo5kitsuneboo_CLICKABLE.gif");
    setTimeout(() => {
      setTempSrcKit("");
    }, 1800);
  }
  const classes = useStyles();
  const controls1 = useAnimation();
  const { ref: ref1, inView: inView1 } = useInView({
    // threshold: 0.1,
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
          width={"7%"}
          style={{
            position: "absolute",
            top: "61.5%",
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
            top: "13%",
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
      </motion.div>
    </motion.div>
  );
};

export default SectionTwoGIF;
