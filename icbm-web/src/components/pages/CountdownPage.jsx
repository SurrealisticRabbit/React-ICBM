import React, { useState, useEffect } from 'react';
import { Box, Typography, Container, CircularProgress } from '@mui/material';
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

function CountdownPage({ onComplete, startTime = 10 }) {
  const [count, setCount] = useState(startTime);
  

  useEffect(() => {
    if (count <= 0) {
      onComplete();
      return;
    }
    const timerId = setInterval(() => {
      setCount(prevCount => prevCount - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [count, onComplete]);

  return (
        <ThemeProvider theme={darkTheme}>
          <CssBaseline enableColorScheme />
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',     
        justifyContent: 'center', 
        minHeight: '100vh',      
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 4,
        }}
      >
        <Typography component="h1" variant="h4" align="center">
          Counting Down...
        </Typography>
        
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
          <CircularProgress 
            variant="determinate" 
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
              position: 'absolute',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography variant="h2" component="div" color="text.secondary">
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