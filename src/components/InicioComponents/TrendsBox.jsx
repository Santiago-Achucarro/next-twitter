import { Box, ListItem, List, Typography, Link } from "@mui/material";
import React from "react";
import { CgMore } from "react-icons/cG";
import trend from "../../addons/trends.json";

const Trend = () => {
  return (
    <Box sx={{ display: "flex", width: "48%", justifyContent: "center" }}>
      <Box
        sx={{
          width: "65%",
          padding: 2,
          mr: 10,
          height: "65%",
        }}
      >
        <Typography
          component="h1"
          sx={{
            fontWeight: "700",
            fontSize: 20,
            backgroundColor: "#16181C",
            padding: 1.5,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        >
          Qué está pasando
        </Typography>
        {trend.map((elem, index) => (
          <Box
            key={index}
            sx={{
              width: "100",
              paddingX: 2,
              paddingY: 0.5,
              backgroundColor: "#16181C",
              "&:hover": {
                backgroundColor: "#1D1F23",
                cursor: "pointer",
              },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box sx={{ width: "92.5%" }}>
                <Typography
                  sx={{ fontSize: 12, fontWeight: "100", color: "grey" }}
                >
                  {elem.tendencia}
                </Typography>
              </Box>
              <Box>
                <CgMore color="grey" className="IconMore" />
              </Box>
            </Box>
            <Typography sx={{ fontSize: 14, fontWeight: "600" }}>
              {elem.trend}
            </Typography>
            <Typography
              sx={{
                fontSize: 12,
                fontWeight: "100",
                color: "grey",
                mt: "6px",
              }}
            >
              {elem.cantidad}
            </Typography>
          </Box>
        ))}
        <Box
          sx={{
            backgroundColor: "#16181C",
            paddingLeft: 1,
            paddingY: 2,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
            "&:hover": {
              backgroundColor: "#1D1F23",
              cursor: "pointer",
            },
          }}
        >
          <Link sx={{ ml: 1, textDecoration: "none", color: "#1C7DBF" }}>
            Mostrar más
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export { Trend };
