import * as React from "react";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import WhatsHotIcon from "@mui/icons-material/Whatshot";

function UserDisplayCard({ user }) {
  const user_name = user.name;
  const user_status_colour = user.status_colour;
  const user_status_short = user.status_short;
  const user_status_long = user.status_long;
  const user_mode_colour = user.mode_colour;
  const user_mode = user.mode.toUpperCase();


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
          {user_name}
          <Chip
          label={user_status_short}
          color={user_status_colour}
          variant="outlined"
          sx={{ ml: 1, mb:1 }}
        />
        </Typography>
        
        <Typography variant="subtitle3" color="text.secondary" component="div">
          {user_status_long}
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
          icon={<WhatsHotIcon />}
          label={user_mode}
          color={user_mode_colour}
          variant="outlined"
          sx={{ mr: 1 }}a
        />
      </Box>
    </Card>
  );
}

export default UserDisplayCard;
