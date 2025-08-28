import * as React from "react";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import RsvpOutlinedIcon from "@mui/icons-material/RsvpOutlined";

function FriendDisplayCard({ friend, onRsvpClick }) {
  const { name, status_colour, status_short, status_long } = friend;

  const handleRsvpClick = () => {
    // First, check if onRsvpClick was actually passed as a prop and is a function
    if (typeof onRsvpClick === "function") {
      // If it is, call it with the friend data
      onRsvpClick(friend);
    } else {
      // If not, log an error to the console for easier debugging
      console.error(
        `Error: The 'onRsvpClick' prop was not provided to FriendDisplayCard for friend: ${name}`
      );
    }
  };

  return (
    <Card
      sx={{
        width: "90%",
        maxWidth: 500,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <CardContent>
        <Typography component="div" variant="h5">
          {name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" component="div">
          {status_long}
        </Typography>
      </CardContent>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          pr: 2,
        }}
      >
        <Chip
          label={status_short}
          variant=""
          color={status_colour}
          sx={{ mr: 1 }}
        />
        <IconButton onClick={handleRsvpClick}>
          <RsvpOutlinedIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </Box>
    </Card>
  );
}

export default FriendDisplayCard;