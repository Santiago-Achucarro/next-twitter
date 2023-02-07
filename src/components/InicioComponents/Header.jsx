import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  Divider,
} from "@mui/material";
import { BsStars } from "react-icons/bs";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <AppBar sx={{ width: "76%" }} className="headerToolbar">
      <Toolbar sx={{backgroundColor:"black"}} >
        <Divider
          orientation="vertical"
          sx={{ backgroundColor: "#2F3336", mr: 4 }}
          flexItem
        />
        <Box sx={{ display: "flex", width: "50%", alignItems: "center" }}>
          <Box sx={{ width: "95%" }}>
            <Typography sx={{ fontWeight: "bold", fontSize: 21 }}>
              Inicio
            </Typography>
          </Box>

          <Box
            sx={{
              width: "5%",
              display: "flex",
              justifyContent: "center",
              mr: 2,
              borderRadius: 20,
              padding: 1,
              "&:hover": {
                backgroundColor: "#191919",
                cursor: "pointer",
              },
            }}
          >
            <BsStars fontSize={22} />
          </Box>
        </Box>
        <Divider
          orientation="vertical"
          sx={{ backgroundColor: "#2F3336" }}
          flexItem
        />
        <Box
          sx={{
            ml: 3,
            backgroundColor: "#202327",
            borderRadius: 5,
            display: "flex",
            alignItems: "center",
            paddingY: "6px",
            paddingX: 3,
            mb: 1,
          }}
        >
          <SearchIcon color="primary" />
          <InputBase
            sx={{ color: "white", ml: 2, width: "270px" }}
            placeholder="Buscar en Twitter"
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export { Header };
