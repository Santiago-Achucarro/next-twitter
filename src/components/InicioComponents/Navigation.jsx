import { Box, Button, ButtonGroup } from "@mui/material";
import React from "react";
import { BsTwitter } from "react-icons/bs";
import {
  BiHash,
  VscBell,
  IoMdListBox,
  IoMailOutline,
  BsBookmark,
  HiUser,
  CgMoreO,
  RiHome7Fill,
} from "../../addons/icons";

const Navigation = () => {
  const navItems = [
    { id: 1, item: "Inicio", svg: <RiHome7Fill /> },
    { id: 2, item: "Explorar", svg: <BiHash /> },
    { id: 3, item: "Notificaciones", svg: <VscBell /> },
    { id: 4, item: "Mensajes", svg: <IoMailOutline /> },
    { id: 5, item: "Guardados", svg: <BsBookmark /> },
    { id: 6, item: "Listas", svg: <IoMdListBox /> },
    { id: 7, item: "Perfil", svg: <HiUser /> },
    { id: 9, item: "Más opciones", svg: <CgMoreO /> },
  ];
  return (
    <Box
      sx={{
        width: "25%",
        height: "70vh",
        backgroundColor: "black",
        ml: 10,
        pt: 1.5,
        top: 0,
        bottom: "10%",
        position: "sticky",
      }}
      component="div"
    >
      <Box sx={{color:"white"}}>
        <BsTwitter fontSize={30} cursor="pointer" className="icon"/>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", mt: 1 }}>
        {navItems.map((ele) => (
          <ButtonGroup key={ele.id}>
            <Button
              startIcon={ele.svg}
              sx={{
                paddingX: 2,
                fontSize: 22,
                color: "white",
                fontWeight: "200",
                textAlign: "center",
                textTransform: "none",
                borderRadius: 5,
                "&:hover": {
                  backgroundColor: "#191919",
                  cursor: "pointer",
                },
              }}
              variant="text"
              size="medium"
            >
              {ele.item}
            </Button>
          </ButtonGroup>
        ))}
      </Box>
      <Box>
        <Button
          variant="contained"
          sx={{
            mt: 2,
            paddingX: 10,
            paddingY: 1.5,
            borderRadius: 10,
            textTransform: "none",
            fontWeight: "700",
            fontSize: 15,
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
  );
};

export { Navigation };
