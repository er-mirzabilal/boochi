import { Box } from "@mui/material";
import Bitcoin from "@/components/Bitcoin";
import HoveringText from "@/components/HoverText";
import VideoPlayer from "@/components/Vidoe";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          // maxWidth: "2450px",
          margin: "auto",
        }}
      >
        {/* <Bitcoin />
         */}
        <VideoPlayer />
      </Box>
    </>
  );
}
