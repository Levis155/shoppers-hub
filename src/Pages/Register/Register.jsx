import "./Register.css";
import { BiSolidShoppingBags } from "react-icons/bi";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  TextField,
  InputLabel,
  FormControl,
  IconButton,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const formControlStyle = {
  "& .MuiInputBase-root": {
    fontSize: "1.4rem",
    fontFamily: "inherit",
  },
  "& .MuiInputLabel-root": {
    fontSize: "1.4rem",
    fontFamily: "inherit",
    color: "rgba(0, 0, 0, 0.6)", 
    "&.Mui-focused": {
      color: "var(--primary-color)", 
    },
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--primary-color)",
    },
  },
};

function Register() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="registration-page-wrapper">
      <form action="">
        <BiSolidShoppingBags className="registration-page-logo" />
        <p className="registration-form-title">Signup with shoppers hub</p>

        <div className="registration-form-body">
          <TextField
            label="First Name"
            variant="outlined"
            sx={formControlStyle}
          />

          <TextField
            label="Last Name"
            variant="outlined"
            sx={formControlStyle}
          />

          <TextField
            label="Email Address"
            variant="outlined"
            sx={formControlStyle}
          />

          <TextField
            label="Username"
            variant="outlined"
            sx={formControlStyle}
          />

          <FormControl variant="outlined" sx={formControlStyle}>
            <InputLabel>
              Password
            </InputLabel>
            <OutlinedInput
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>

          <FormControl variant="outlined" sx={formControlStyle}>
            <InputLabel>
              Confirm Password
            </InputLabel>
            <OutlinedInput
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Confirm Password"
            />
          </FormControl>

          <button className="signup-btn">signup</button>
        </div>

        <p className="login-text">Already have an account? <Link to={"/login"}>Login</Link></p>
      </form>
    </div>
  );
}

export default Register;
