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

const SectionFourGIF = (props: any) => {
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
          onClick={() => props.setShowSections("sectionFive")}
          src="/images/Animations/Pand0_CLICKABLEa.gif"
          alt="My GIF"
          width={"7%"}
          style={{
            position: "absolute",
            top: "77.5%",
            left: "23%",
            transform: "translate(-50%, -50%)",

            cursor: "pointer",
            zIndex: 2,
          }}
        />
        <img
          onClick={() => props.setShowSections("sectionFive")}
          src="/images/Animations/Boo3ConstructionBoo_CLICKABLE.gif"
          alt="My GIF"
          width={"7%"}
          style={{
            position: "absolute",
            top: "77%",
            left: "50%",
            transform: "translate(-50%, -50%)",

            cursor: "pointer",
            zIndex: 2,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default SectionFourGIF;
