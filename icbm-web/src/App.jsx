import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import RegisterPage from './components/pages/RegisterPage';
import SettingsPage from './components/pages/SettingsPage';
import MainPage from './components/pages/MainPage';

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FFFFFF",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline enableColorScheme />
      <BrowserRouter>
        <Routes>
          {/* The main page of your application, shown after login */}
          <Route path="/" element={<MainPage />} />

          {/* The login/register page */}
          <Route path="/login" element={<RegisterPage />} />

          {/* The settings page */}
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;