import { TextField } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
const InputThem = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    border: "2px solid black",
    borderRadius: 5,
    color: "white",
  },
}));

const InputTextArea = styled((props) => (
  <TextField InputProps={{ disableUnderline: true }} {...props} />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    border: "2px solid black",
    borderRadius: 5,
    color: "white",
  },
}));

const BoxTextArea = styled((props) => (
  <TextField
    InputProps={{ disableUnderline: true, readOnly: true }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiFilledInput-root": {
    border: "2px solid black",
    borderRadius: 5,
    color: "white",
  },
}));

export { InputThem, InputTextArea, BoxTextArea };
