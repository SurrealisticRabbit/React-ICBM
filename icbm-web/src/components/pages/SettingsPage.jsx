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

import GeneralSettingsCard from "../widgets/GeneralSettingsCard";
import ServerStatusCard from "../widgets/ServerStatusCard";
import TestOptionsCard from "../widgets/TestOptionsCard";

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
        <GeneralSettingsCard />
        <ServerStatusCard />
        {/* Pass onNavigate down to the TestOptionsCard */}
        <TestOptionsCard onNavigate={onNavigate} />
      </Stack>
    </Box>
  );
}

export default SettingsPage;