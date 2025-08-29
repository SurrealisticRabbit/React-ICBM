import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  Paper,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleAuthenticate = async (event) => {
    event.preventDefault();
    setError(""); // Clear previous errors

    try {
      const response = await fetch("http://localhost:4000/api/authenticate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "An error occurred.");
      }

      localStorage.setItem("token", data.token);
      navigate("/"); // Navigate to the main app view on success
    } catch (err) {
      setError(err.message);
      console.error("Authentication failed:", err);
    }
  };

  return (
    // ThemeProvider and CssBaseline are now handled in App.jsx
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Paper elevation={6} sx={{ p: 4, width: "100%" }}>
            <Typography component="h1" variant="h5" sx={{ mb: 2 }}>
              Register / Sign In
            </Typography>
            <Box component="form" onSubmit={handleAuthenticate} noValidate>
              {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoFocus
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register / Sign In
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>
  );
}

export default RegisterPage;
