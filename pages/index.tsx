import { Box } from "@mui/material";
import Bitcoin from "@/components/Bitcoin";
import HoveringText from "@/components/HoverText";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          // maxWidth: "2450px",
          margin: "auto",
          // opacity: showSection ? 1 : 0,
          // opacity: 1,

          // transition: "opacity 0.5s ease-in-out",
        }}
      >
        <Bitcoin />
      </Box>
    </>
  );
}
