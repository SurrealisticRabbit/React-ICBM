import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";

const name = "Ducky";
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

function MessagerBox() {
  return (
    <Box>
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
                m: 1,
                ml: 2,
                flexDirection: "column",
                width: "100%",
                alignItems: message.sender === name ? "flex-end" : "flex-start",
                justifyContent:
                  message.sender === name ? "flex-end" : "flex-start",
              }}
            >
              <Paper
                sx={{
                  width: "100%",
                  p: 0.5,
                  mt: 0.5,
                }}
                elevation={3}
              >
                <Typography variant="subtitle3">
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
    </Box>
  );
}

export default MessagerBox;
