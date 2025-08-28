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

function SettingsPage() {
  return (
    <Box
      sx={{
        width: "100%",
        p: 2,
      }}
    >
      <Stack spacing={2}>
        <GeneralSettingsCard />
        <ServerStatusCard />
        <TestOptionsCard />
      </Stack>
    </Box>
  );
}

export default SettingsPage;
