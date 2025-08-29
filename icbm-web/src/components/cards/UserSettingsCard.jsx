import * as React from "react";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import {
  Chip,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";

// Accept the onNavigate function as a prop

function UserSettingsCard() {
  const [badgeColor, setBadgeColor] = React.useState("primary");
  const [badgeText, setBadgeText] = React.useState("Admiral");
  const [inputValue, setInputValue] = React.useState("");

  const handleApplyClick = () => {
    // Update the badgeText with the value from the input field
    setBadgeText(inputValue);
  };

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
            User Settings
          </Typography>
          <Stack direction="column" spacing={2}>
            <Typography variant="h4">
              Gandalf
              <Chip
                label={badgeText}
                color={badgeColor}
                variant="outlined"
                sx={{ ml: 1 }}
              />
            </Typography>
            <TextField
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              label="Change Badge Text"
              variant="outlined"
            />
            <ToggleButtonGroup
              sx={{
                alignContent: "center",
                justifyContent: "center",
              }}
              exclusive
              value={badgeColor}
              onChange={(event, newValue) => {
                if (newValue !== null) {
                  setBadgeColor(newValue);
                }
              }}
            >
              <ToggleButton value="primary" color="primary">1</ToggleButton>
              <ToggleButton value="secondary" color="secondary">2</ToggleButton>
              <ToggleButton value="success" color="success">3</ToggleButton>
              <ToggleButton value="info" color="info">4</ToggleButton>
              <ToggleButton value="warning" color="warning">5</ToggleButton>
              <ToggleButton value="error" color="error">6</ToggleButton>
            </ToggleButtonGroup>
            <Button onClick={handleApplyClick} variant="contained" color="success">
              Apply
            </Button>
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
}

export default UserSettingsCard;
