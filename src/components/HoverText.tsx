import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
const hoverAnimation = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0); }
`;
const HoveringTextWrapper = styled.div`
  animation: ${hoverAnimation} 2s ease-in-out infinite;
`;
interface HoveringTextProps {
  text: string;
}
const HoveringText: React.FC<HoveringTextProps> = ({ text }) => {
  return (
    <HoveringTextWrapper>
    

      <img
        src={text}
        alt="My image"
        width={"90%"}
        style={{
          position: "absolute",

          width: "80%",
          top: "43%",
          left: "12%",
        }}
      />
    </HoveringTextWrapper>
  );
};
export default HoveringText;
