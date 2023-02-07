import { Box } from "@mui/system";
import React from "react";
import { InputBox, PostBox, Trend } from ".";

const CenterMain = () => {
  return (
    <Box
      sx={{
        color: "white",
        width: "100vw",
        ml: 0.4,
        mt: 8,
        display: "flex",
      }}
    >
      <Box
        sx={{
          width: "51.6%",
          backgroundColor: "black",
          ml: 2.6,
          borderLeft: 1,
          borderRight: 1,
          borderColor: "#2F3336",
        }}
      >
        <InputBox />
        <PostBox />
      </Box>
      <Trend />
    </Box>
  );
};

export { CenterMain };
