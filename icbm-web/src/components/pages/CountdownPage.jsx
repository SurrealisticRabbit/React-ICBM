import React, { useState, useEffect } from "react";
import { Box, Typography, Container, CircularProgress } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FFFFFF",
    },
  },
});

const countdownTexts = {
  countingText: "Wait...",
  successText: "Go!",
};

function CountdownPage({ onComplete, startTime = 10 }) {
  const [count, setCount] = useState(startTime);
  const [countdownText, setCountdownText] = useState(
    countdownTexts.countingText
  );

  useEffect(() => {
    if (count <= 0) {
      setCountdownText(countdownTexts.successText);

      const cooldownTimer = setTimeout(() => {
        onComplete();
      }, 2000);
      return () => clearTimeout(cooldownTimer);
    }

    const timerId = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [count, onComplete]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline enableColorScheme />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Typography sx={{ mb: 4 }} component="h1" variant="h3" align="center">
            {countdownText}
          </Typography>

          <Box sx={{ position: "relative", display: "inline-flex" }}>
            <CircularProgress
              variant="determinate"
              color="secondary"
              value={(count / startTime) * 100}
              size={300}
              thickness={3}
            />
            <Box
              sx={{
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: "absolute",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="h1" style={{ fontWeight: "bold" }} component="div" color="secondary">
                {count}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default CountdownPage;
