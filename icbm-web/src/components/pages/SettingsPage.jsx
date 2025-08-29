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

// The onNavigate prop is no longer needed, as we are using react-router-dom
function SettingsPage() {
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
        <TestOptionsCard />
        <GeneralSettingsCard />
      </Stack>
    </Box>
  );
}

export default SettingsPage;