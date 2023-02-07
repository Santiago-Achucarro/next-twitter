import React, { useContext, useEffect, useState } from "react";
import { Box, Button, TextField, Input } from "@mui/material";
import {
  CgProfile,
  HiOutlineGif,
  AiOutlinePicture,
  CgOptions,
  GrEmoji,
  TbCalendarTime,
  GiPositionMarker,
} from "../../addons/icons";
import { InputTextArea } from "@/addons/Custom/customsThemes";
import { useRouter } from "next/router";
import { UserContext } from "@/addons/Custom/UserContext";

const InputBox = () => {
  const [textField, useTextField] = useState("");
  const { token, user } = useContext(UserContext);
  console.log(`Bearer ${token}`);
  const router = useRouter();

  const sendData = async (e) => {
    if (textField) {
      const userData = { ...JSON.parse(user), content: textField };

      console.log(userData);

      const resp = await fetch("http://localhost:5000/api/post", {
        method: "post",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
      });

      if (resp.ok) {
        useTextField("");
        // setRefresh(!refresh);
        // router.reload();
      }
    }
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box sx={{ marginTop: 1.5, marginLeft: 1.5 }}>
          <CgProfile fontSize={30} />
        </Box>
        <Box
          component="form"
          sx={{
            width: "32.3em",
            mr: 1.1,
            margin: "auto",
            "& .MuiTextField-root": {
              width: "30em",
            },
            "& .MuiInputBase-root": {
              color: "white",
              border: "none",
              "& fieldset": {
                border: "none",
              },
            },
          }}
          autoComplete="off"
        >
          <InputTextArea
            multiline
            value={textField}
            onChange={(e) => useTextField(e.target.value)}
          />
        </Box>
      </Box>

      <Box sx={{ display: "flex", justifyContent: "center", paddingY: 2 }}>
        <Box
          sx={{
            width: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <AiOutlinePicture color="#1B92E2" fontSize={20} className="icon" />
          <HiOutlineGif color="#1B92E2" fontSize={20} className="icon" />
          <CgOptions color="#1B92E2" fontSize={20} className="icon" />
          <GrEmoji color="#1B92E2" fontSize={20} className="icon" />
          <TbCalendarTime color="#1B92E2" fontSize={20} className="icon" />
          <GiPositionMarker color="#1B92E2" fontSize={20} className="icon" />
        </Box>
        <Box
          sx={{
            width: "30%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Button
            onClick={sendData}
            disabled={textField === "" ? true : false}
            sx={{
              textTransform: "none",
              color: "white",
              padding: 0.9,
              borderRadius: 10,
              width: 90,
              backgroundColor: "#1d9bf0",
              "&:hover": {
                backgroundColor: "#1a8cd8",
              },
            }}
          >
            Twittear
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export { InputBox };
