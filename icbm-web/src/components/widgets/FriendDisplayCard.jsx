import * as React from "react";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import RsvpOutlinedIcon from "@mui/icons-material/RsvpOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";

const message_history = [
  {
    sender: "Ducky",
    message: "Where are you?",
  },
  {
    sender: "Gandalf",
    message: "I'm here!",
  },
  {
    sender: "Gandalf",
    message: "It's time",
  },
];

function FriendDisplayCard({ friend, onRsvpClick }) {
  const { name, status_colour, status_short, status_long } = friend;
  const [isMessageOpen, setIsMessageOpen] = React.useState(false);

  const handleMailClick = () => {
    setIsMessageOpen((prev) => !prev);
  };

  const handleRsvpClick = () => {
    if (typeof onRsvpClick === "function") {
      onRsvpClick(friend);
    } else {
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
        transition: "all 0.3s ease-in-out",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <CardContent>
          <Typography component="div" variant="h5">
            {name}
          </Typography>
          <Typography
            variant="subtitle1"
            color="text.secondary"
            component="div"
          >
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
          <Chip label={status_short} color={status_colour} sx={{ mr: 1 }} />
          <IconButton onClick={handleMailClick}>
            <MailOutlineIcon />
          </IconButton>
          <IconButton onClick={handleRsvpClick}>
            <RsvpOutlinedIcon />
          </IconButton>
        </Box>
      </Box>

      <Collapse in={isMessageOpen} timeout="auto" unmountOnExit>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1, // Add padding for spacing
          }}
        >
          <Stack>
            {message_history.map((message, index) => (
              <Box
                sx={{
                  display: "flex",
                  m:1,
                  ml:2,
                  flexDirection: "column",
                  width: "100%",
                  alignItems:
                    message.sender === name ? "flex-end" : "flex-start",
                  justifyContent:
                    message.sender === name ? "flex-end" : "flex-start",
                }}
              >
                <Paper
                  sx={{
                    width: "100%",
                    p:0.5,
                    mt:0.5,
                  }}
                  elevation={3}
                >
                  <Typography variant="body2">
                    {message.sender}: {message.message}
                  </Typography>
                </Paper>
              </Box>
            ))}
          </Stack>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            p: 2, // Add padding for spacing
          }}
        >
          <TextField
            fullWidth // This makes the TextField expand
            label={`Message to ${name}`}
            variant="outlined"
            size="small" // Use "small" size for a more compact look
          />
          <Button variant="contained">Send</Button>
        </Box>
      </Collapse>
    </Card>
  );
}

export default FriendDisplayCard;
