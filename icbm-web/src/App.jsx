import React from "react";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Layout and Util Components
import MainLayout from "./components/layout/MainLayout";
import ProtectedRoute from "./components/utils/ProtectedRoute";

// Page Components
import GoPage from "./components/pages/GoPage";
import FriendsPage from "./components/pages/FriendsPage";
import SettingsPage from "./components/pages/SettingsPage";
import RegisterPage from "./components/pages/RegisterPage";
import CountdownPage from "./components/pages/CountdownPage";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FFFFFF",
    },
  },
});

// A small wrapper for CountdownPage to handle navigation via props
const CountdownWrapper = () => {
  const navigate = useNavigate();
  return <CountdownPage onComplete={() => navigate("/")} />;
};

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline enableColorScheme />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<RegisterPage />} />
          <Route path="/countdown" element={<CountdownWrapper />} />

          <Route element={<ProtectedRoute />}>
            <Route element={<MainLayout />}>
              <Route path="/" element={<GoPage />} />
              <Route path="/friends" element={<FriendsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;