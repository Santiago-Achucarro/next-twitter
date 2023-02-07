import { LayoutPage } from "@/components/LayoutPage";
import { LoginForm } from "@/components/LoginForm";
import { Box, Typography } from "@mui/material";

export default function Login() {
  return (
    <>
      <LayoutPage title={"Login"}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
          }}
        >
          <Box
            sx={{
              backgroundColor: "#202327",
              width: "30%",
              height: "80%",
              borderRadius: "10px",
              boxShadow: "9px 6px 5px 1px rgba(0,0,0,0.27)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "15%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mb: 5,
              }}
            >
              <Typography component={"h1"} fontSize={40} color="white">
                Login
              </Typography>
            </Box>
            <LoginForm />
          </Box>
        </Box>
      </LayoutPage>
    </>
  );
}
