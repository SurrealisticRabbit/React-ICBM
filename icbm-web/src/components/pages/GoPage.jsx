import React from "react";
import UserDisplayCard from "../widgets/UserDisplayCard";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";

// This data doesn't change, so it can stay outside the component
const modes = [
  {
    type: "idle",
    colour: "primary",
    youText: "You are currently idle",
    friendText: "is currently idle",
  },
  {
    type: "next_phase",
    colour: "secondary",
    youText: "You are in next phase",
    friendText: "is in next phase",
  },
  {
    type: "nuclear",
    colour: "warning",
    youText: "You are currently nuclear",
    friendText: "has gone nuclear",
  },
  {
    type: "hol_up",
    colour: "error",
    youText: "You are currently on hold",
    friendText: "is currently on hold",
  },
];

const initialUsers = [
  {
    self: true,
    name: "Gandalf",
    status_colour: "secondary",
    status_short: "Admiral",
    status_long: "You are currently idle",
    mode: "idle",
    mode_colour: "primary",
  },
  {
    self: false,
    name: "Ducky",
    status_colour: "warning",
    status_short: "Engineer",
    status_long: "Ducky is currently idle",
    mode: "idle",
    mode_colour: "primary",
  },
];

function GoPage() {
  const [users, setUsers] = React.useState(initialUsers);
  const [phase, setPhase] = React.useState("idle");

  const handleChange = (event, newPhase) => {
    if (!newPhase || newPhase === phase) {
      return; // Don't do anything if the phase hasn't changed
    }

    setPhase(newPhase);

    // Create a new array with the updated user data
    const updatedUsers = users.map((user) => {
      const modeInfo = modes.find((mode) => mode.type === newPhase);
      const modeColor = modeInfo.colour;
      const newStatusLong = user.self
        ? modeInfo.youText
        : `${user.name} ${modeInfo.friendText}`;

      // Return a new user object
      return {
        ...user,
        status_long: newStatusLong,
        mode: newPhase,
        mode_colour: modeColor,
      };
    });

    // Set the users state with the new array, triggering a re-render
    setUsers(updatedUsers);
  };

  const control = {
    value: phase,
    onChange: handleChange,
    exclusive: true,
  };

  return (
    <Box
      sx={{
        width: "100%",
        pt: 2,
      }}
    >
      <Stack spacing={2} alignItems="center">
        {users.map((user, index) => (
          <UserDisplayCard key={index} user={user} />
        ))}
      </Stack>

      <Box
        sx={{
          position: "fixed",
          bottom: 72, // 56px for BottomNav + 16px spacing
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ToggleButtonGroup {...control} exclusive aria-label="Platform">
          <ToggleButton color="primary" value="idle">
            Idle
          </ToggleButton>
          <ToggleButton color="secondary" value="next_phase">
            Next Phase
          </ToggleButton>
          <ToggleButton color="warning" value="nuclear">
            Nuclear
          </ToggleButton>
          <ToggleButton color="error" value="hol_up">
            Hol' Up
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
    </Box>
  );
}

export default GoPage;