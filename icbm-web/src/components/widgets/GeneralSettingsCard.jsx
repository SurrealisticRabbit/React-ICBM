import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

function GeneralSettingsCard() {
  return (
    <Card
      sx={{
        mt: 2,
      }}
    >
      <CardContent>
        <Box>
          <Typography
            sx={{
              m: 2,
              textAlign: "center",
            }}
            variant="h5"
          >
            General Settings
          </Typography>
          <Stack direction="column" spacing={2}>
            <Button variant="contained" color="error">
              Logout
            </Button>
            <Button variant="outlined" color="error">
              Delete App Data
            </Button>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}

export default GeneralSettingsCard;
