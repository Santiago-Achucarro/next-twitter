import { BoxTextArea, InputTextArea } from "@/addons/Custom/customsThemes";
import { UserContext } from "@/addons/Custom/UserContext";
import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useContext } from "react";
import {
  BiMessageRounded,
  AiOutlineRetweet,
  AiOutlineHeart,
  BsDownload,
  IoIosStats,
  CgMore,
  CgProfile,
} from "../../addons/icons";

const PostBox = () => {
  const { data } = useContext(UserContext);
  console.log(data);
  return (
    data &&
    data.map((ele) => (
      <Box
        key={ele._id}
        sx={{
          borderTop: 1,
          borderBottom: 1,
          borderColor: "#2F3336",
        }}
      >
        <Box sx={{ display: "flex", mt: 2 }}>
          <Box sx={{ display: "flex", width: "90%", ml: 3 }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <CgProfile fontSize={30} />
            </Box>
            <Typography sx={{ ml: 2 }}>{ele.fullName}</Typography>
            <Typography sx={{ ml: 2, color: "grey" }}>
              @{ele.userName}
            </Typography>
          </Box>
          <CgMore color="grey" className="IconMore" />
        </Box>
        <Box
          sx={{
            maxWidth: 500,
            width: "50em",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "30em",
            mr: 1.5,
            margin: "auto",
            "& .MuiTextField-root": {
              width: "50em",
            },
            "& .MuiInputBase-root": {
              color: "white",
              border: "none",
              "& fieldset": {
                border: "none",
              },
            },
          }}
        >
          <BoxTextArea multiline value={ele.content} />
        </Box>

        <Stack
          direction="row"
          spacing={1.5}
          justifyContent="space-evenly"
          mt={2}
          mb={1}
        >
          <Box>
            <IoIosStats className="iconStats" />
          </Box>
          <Box>
            <BiMessageRounded className="iconMsg" />
          </Box>
          <Box>
            <AiOutlineRetweet className="iconRetwt" />
          </Box>
          <Box>
            <AiOutlineHeart className="iconLike" />
          </Box>
          <Box>
            <BsDownload className="iconShare" />
          </Box>
        </Stack>
      </Box>
    ))
  );
};

export { PostBox };
