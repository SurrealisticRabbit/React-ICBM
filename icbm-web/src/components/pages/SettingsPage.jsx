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

function SettingsPage() {
  return (
    <Box
      sx={{
        width: "100%",
        p: 2,
      }}
    >
      <Stack spacing={2}>
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
                Settings
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
      </Stack>

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
              Server Status
            </Typography>
            <Stack direction="column" spacing={2}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography variant="body1">Server Status:</Typography>
                <Chip
                  sx={{
                    ml: 1,
                    fontSize: 15,
                  }}
                  label="Server Online"
                  color="success"
                />
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography variant="body1">Service Status:</Typography>
                <Chip
                  sx={{
                    ml: 1,
                    fontSize: 15,
                  }}
                  label="ICBM System Online"
                  color="success"
                />
              </Box>
            </Stack>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}

export default SettingsPage;
