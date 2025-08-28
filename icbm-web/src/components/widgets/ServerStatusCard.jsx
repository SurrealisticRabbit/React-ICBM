import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";

function ServerStatusCard() {
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
  );
}

export default ServerStatusCard;
