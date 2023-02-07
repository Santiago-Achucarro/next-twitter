import {
  Box,
  FormControl,
  Typography,
  Button,
  ButtonGroup,
} from "@mui/material";
import { InputThem } from "@/addons/Custom/customsThemes";
import { useInput } from "@/addons/Custom/customHooks";
import { Link as Anchor } from "@mui/material";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const RegisterForm = () => {
  const [fullName, setFullName, HandlerFullName] = useInput("");
  const [userName, setUserName, HandlerUserName] = useInput("");
  const [email, setEmail, HandlerEmail] = useInput("");
  const [password, setPassWord, HandlerPassword] = useInput("");
  const [profilePic, setProfilePic, HandlerProfilePic] = useInput("");
  const router = useRouter();

  const HandlerSubmit = async (e) => {
    e.preventDefault();
    if (!fullName || !userName || !email || !password) {
      return alert("campos faltantes");
    }
    const dataUser = {
      fullName,
      userName,
      email,
      password,
      profilePic,
    };

    if (dataUser) {
      try {
        const resp = await fetch("http://localhost:5000/api/users/register", {
          headers: {
            "Content-type": "application/json",
            // "Content-type": "multipart/form-data",
          },
          method: "post",
          body: JSON.stringify(dataUser),
        });
        const data = await resp.json();
        if (resp.ok) {
          router.push("/login");
        } else {
          alert("Usuario existente");
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
      component={"form"}
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
          type="text"
          placeholder="Nombre"
          label="Nombre"
          variant="filled"
          name="fullName"
          {...HandlerFullName}
        />
        <InputThem
          type="text"
          placeholder="Usuario"
          label="Usuario"
          variant="filled"
          name="userName"
          {...HandlerUserName}
        />
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
        <InputThem
          label="Profile Image"
          variant="standard"
          focused
          type="file"
          name="profilePic"
          {...HandlerProfilePic}
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
            onClick={(e) => HandlerSubmit(e)}
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
            Registrarse
          </Button>
          <Typography textAlign="center">
            ¿Ya tienes cuenta?
            <Link href="/login" legacyBehavior>
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
                Inicia Sesion
              </Anchor>
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export { RegisterForm };
