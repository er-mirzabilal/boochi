import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    position: "relative",
  }),
  content: {
    opacity: 0,
  },
}));

const SectionOneGIF = (props: any) => {
  const classes = useStyles();
  const controls1 = useAnimation();
  const { ref: ref1, inView: inView1 } = useInView({
    threshold: 0.9,
    // triggerOnce: true,
  });

  useEffect(() => {
    if (inView1) {
      controls1.start({
        opacity: 1,
        transition: { duration: 1, delay: 0.2 },
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
          onClick={() => props.setShowSections("sectionTwo")}
          src="images/Animations/Boores_IDLE.gif"
          alt="My GIF"
          width={"9%"}
          style={{
            position: "absolute",
            top: "89.5%",
            left: "45.5%",
            transform: "translate(-50%, -50%)",
            cursor: "pointer",
            zIndex: 2,
          }}
        />
        <img
          onClick={() => props.setShowSections("sectionTwo")}
          src="images/Animations/Monster.gif"
          alt="My GIF"
          width={"20%"}
          style={{
            position: "absolute",
            top: "81.5%",
            left: "55.5%",
            transform: "translate(-50%, -50%)",

            cursor: "pointer",
            zIndex: 2,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default SectionOneGIF;
