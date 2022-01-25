import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormControlLabel from "@mui/material/FormControlLabel/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "45vh",
    width: 350,
    margin: "150px auto",
  };

  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };

  return (
    <Grid>
      <Paper elevation={5} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle} sx={{ marginBottom: "10px" }}>
            <LockOutlinedIcon />
          </Avatar>
          <h2 style={{ marginBottom: "30px" }}>Ingreso al Sistema</h2>
        </Grid>
        <TextField
          label="Usuario"
          placeholder="Ingrese nombre de Usuario"
          fullWidth
          required
          sx={{ marginBottom: "10px" }}
        />
        <TextField
          label="Contraseña"
          placeholder="Ingrese contraseña"
          type="password"
          fullWidth
          required
          sx={{ marginBottom: "30px" }}
        />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
        >
          Entrar
        </Button>
      </Paper>
    </Grid>
  );
};

export default Login;
