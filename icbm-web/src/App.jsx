import "./App.css";
import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import GoPage from "./components/pages/GoPage";
import FriendsPage from "./components/pages/FriendsPage";
import SettingsPage from "./components/pages/SettingsPage";
import RegisterPage from "./components/pages/RegisterPage"; // 1. Import the new page
import CountdownPage from "./components/pages/CountdownPage";


const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FFFFFF",
    },
  },
});

function App() {
  const [value, setValue] = React.useState(0);
  const [view, setView] = React.useState("main");

  if (view === "register") {
    return <RegisterPage onNavigate={setView} />;
  } else if (view === "countdown") {
    return <CountdownPage onComplete={setView}/>;
  }


  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline enableColorScheme />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          pt: 1,
          pb: "72px",
        }}
      >
        {value === 0 && <GoPage />}
        {value === 1 && <FriendsPage />}
        {/* 4. Pass the setView function down to SettingsPage */}
        {value === 2 && <SettingsPage onNavigate={setView} />}
        <Paper
          sx={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
          }}
          elevation={3}
        >
          <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction label="Go" icon={<WhatshotIcon />} />
            <BottomNavigationAction
              label="Friends"
              icon={<PeopleOutlineIcon />}
            />
            <BottomNavigationAction
              label="Settings"
              icon={<SettingsOutlinedIcon />}
            />
          </BottomNavigation>
        </Paper>
      </Box>
    </ThemeProvider>
  );
}

export default App;