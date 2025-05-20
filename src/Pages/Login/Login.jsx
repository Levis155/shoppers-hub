import "./Login.css";
import { BiSolidShoppingBags } from "react-icons/bi";
import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
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
import formControlStyle from "../../data/formControlStyle";

export function Login() {
  return (
    <div className="login-page-wrapper">
      <form action="">
        <BiSolidShoppingBags className="login-page-logo" />
        <p className="login-form-title">Login to shoppers hub</p>

        <nav className="login-nav">
          <NavLink
            className={({ isActive }) =>
              isActive === true ? "login-active-link" : ""
            }
            to={"customer"}
          >
            customer login
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive === true ? "login-active-link" : ""
            }
            to={"admin"}
          >
            admin login
          </NavLink>
        </nav>
        <Outlet />
      </form>
    </div>
  );
}

export function CustomerLogin() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="login-form-body">
        <TextField
          label="Customer Username or Email"
          variant="outlined"
          sx={formControlStyle}
        />

        <FormControl variant="outlined" sx={formControlStyle}>
          <InputLabel>Customer Password</InputLabel>
          <OutlinedInput
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label={
                    showPassword ? "hide the password" : "display the password"
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
            label="Customer Password"
          />
        </FormControl>

        <button className="login-btn">Login</button>
      </div>

      <p className="register-text">
        Don't have an account? <Link to={"/register"}>Register</Link>
      </p>
    </>
  );
}

export function AdminLogin() {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="login-form-body">
      <TextField
        label="Admin Username or Email"
        variant="outlined"
        sx={formControlStyle}
      />

      <FormControl variant="outlined" sx={formControlStyle}>
        <InputLabel>Admin Password</InputLabel>
        <OutlinedInput
          type={showPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label={
                  showPassword ? "hide the password" : "display the password"
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
          label="Admin Password"
        />
      </FormControl>

      <button className="login-btn">Login</button>
    </div>
  );
}
