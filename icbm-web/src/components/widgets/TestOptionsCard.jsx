import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

// Accept the onNavigate function as a prop
function TestOptionsCard({ onNavigate }) {
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
            Test Options
          </Typography>
          <Stack direction="column" spacing={2}>
            <Button variant="outlined" color="primary">
              Open Sign-In Page
            </Button>
            {/* When clicked, call onNavigate with the target page name */}
            <Button
              variant="outlined"
              color="secondary"
              onClick={() => onNavigate("register")}
            >
              Open Register Page
            </Button>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}

export default TestOptionsCard;