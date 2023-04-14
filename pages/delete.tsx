import { Box } from "@mui/material";
import Boochi from "@/components/Boochi";
// import  sendFile  from "next/dist/server/send-file";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          maxWidth: "2450px",
          margin: "auto",
        }}
      >
        {/* <Boochi /> */}

      </Box>
    </>
  );
}

// export async function getServerSideProps(context: any) {
//   await sendFile(context.req, context.res, "/boochi/landingPage.html");
// }
