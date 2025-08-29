import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

import GeneralSettingsCard from "../cards/GeneralSettingsCard";
import ServerStatusCard from "../cards/ServerStatusCard";
import TestOptionsCard from "../cards/TestOptionsCard";
import UserSettingsCard from "../cards/UserSettingsCard";

// Accept onNavigate as a prop from App.jsx
function SettingsPage({ onNavigate }) {
  return (
    <Box
      sx={{
        width: "90%",
        p: 1,
      }}
    >
      <Stack spacing={2}>
        <UserSettingsCard/>
        <ServerStatusCard />
        <TestOptionsCard onNavigate={onNavigate} />
        <GeneralSettingsCard />
      </Stack>
    </Box>
  );
}

export default SettingsPage;