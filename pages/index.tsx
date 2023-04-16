import { Box } from "@mui/material";
import Bitcoin from "@/components/Bitcoin";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          maxWidth: "2450px",
          margin: "auto",
        }}
      >
        <Bitcoin />
      </Box>
    </>
  );
}
