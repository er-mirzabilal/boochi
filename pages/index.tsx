import { Box } from "@mui/material";
import Boochi from "@/components/Boochi";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          maxWidth: "2450px",
          margin: "auto",
        }}
      >
        <Boochi />
      </Box>
    </>
  );
}
