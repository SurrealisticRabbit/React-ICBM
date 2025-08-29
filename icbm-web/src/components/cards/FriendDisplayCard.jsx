import * as React from "react";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import RsvpOutlinedIcon from "@mui/icons-material/RsvpOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Collapse from "@mui/material/Collapse";
import MessagerBox from "../widgets/MessagerBox";

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
            variant="subtitle3"
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
        <MessagerBox />
      </Collapse>
    </Card>
  );
}

export default FriendDisplayCard;
