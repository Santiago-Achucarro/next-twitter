import {
  Box,
  Typography,
  Button,
  ButtonGroup,
  FormControl,
} from "@mui/material";
import { InputThem } from "@/addons/Custom/customsThemes";
import { useInput } from "@/addons/Custom/customHooks";
import { Link as Anchor } from "@mui/material";
import Link from "next/link";
import { NextResponse } from "next/server";
import { redirects } from "next.config";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";

const LoginForm = () => {
  const [userName, setUserName, HandlerUserName] = useInput("");
  const [email, setEmail, HandlerEmail] = useInput("");
  const [password, setPassWord, HandlerPassword] = useInput("");

  const router = useRouter();
  const HandlerLogin = async () => {
    if (!email || !password) {
      alert("faltan datos");
    }

    const userData = {
      email,
      password,
    };

    if (userData) {
      try {
        const resp = await fetch("http://localhost:5000/api/users/login", {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          method: "post",
          body: JSON.stringify(userData),
        });
        const data = await resp.json();
        if (resp.ok) {
          const token = data.tokenForAccess;
          const dataUser = JSON.stringify(data.userData);
          router.push({ pathname: "/inicio", query: { token, dataUser } });
        } else {
          alert(resp.status);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        height: "60%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "30px",
      }}
      encType="multipart/form-data"
    >
      <FormControl
        sx={{
          pl: 2,
          width: "330px",
          gap: 2,
          "& .MuiFormLabel-root.MuiInputLabel-root.Mui-focused": {
            color: "white",
          },
        }}
      >
        <InputThem
          type="email"
          placeholder="Email"
          label="Email"
          variant="filled"
          name="email"
          {...HandlerEmail}
        />
        <InputThem
          type="password"
          placeholder="Contraseña"
          label="Contraseña"
          variant="filled"
          name="password"
          {...HandlerPassword}
        />
      </FormControl>
      <Box
        sx={{
          width: "100%",
          height: "20%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            color: "white",
          }}
        >
          <Button
            onClick={(e) => HandlerLogin(e)}
            sx={{
              borderRadius: 5,
              borderColor: "white",
              paddingX: 5,
              paddingY: 1,
              mt: 4,
              backgroundColor: "white",
              color: "black",
              "&.MuiButtonBase-root.MuiButton-root:hover": {
                backgroundColor: "grey",
                borderColor: "gray",
              },
            }}
          >
            <Link href={"#"} legacyBehavior>
              <Anchor
                sx={{
                  "&.MuiLink-root": {
                    textDecorationLine: "none",
                  },
                  "&:hover": {
                    textDecorationLine: "underline",
                  },
                  ml: 1,
                }}
              >
                Sign in
              </Anchor>
            </Link>
          </Button>
          <Typography textAlign="center">
            ¿No tienes cuenta?
            <Link href="/register" legacyBehavior>
              <Anchor
                sx={{
                  "&.MuiLink-root": {
                    textDecorationLine: "none",
                  },
                  "&:hover": {
                    textDecorationLine: "underline",
                  },
                  ml: 1,
                }}
              >
                Registrate
              </Anchor>
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export { LoginForm };
