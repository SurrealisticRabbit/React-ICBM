import React from "react";
import FriendDisplayCard from "../widgets/FriendDisplayCard";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const initialFriends = [
  {
    id: 2,
    name: "Ducky",
    status_colour: "success",
    status_short: "Online",
    status_long: "Ducky is currently idle",
  },
];

function FriendsPage() {
  const [friends, setFriends] = React.useState(initialFriends);

  const handleRsvpClick = (friendToUpdate) => {
    const updatedFriends = friends.map((friend) => {
      if (friend.id === friendToUpdate.id) {
        const isCurrentlyOnline = friend.status_short === "Online";
        return {
          ...friend,
          status_long: isCurrentlyOnline
            ? `${friend.name} is now Offline`
            : `${friend.name} is now Online`,
          status_short: isCurrentlyOnline ? "Offline" : "Online",
          status_colour: isCurrentlyOnline ? "default" : "success",
        };
      }
      return friend;
    });

    setFriends(updatedFriends);
  };

  return (
    <Box
      sx={{
        width: "100%",
        pt: 2,
      }}
    >
      <Stack spacing={2} alignItems="center">
        {friends.map((friend) => (
          <FriendDisplayCard
            key={friend.id} // Add a unique key prop
            friend={friend}
            onRsvpClick={handleRsvpClick} // Pass the handler function as a prop
          />
        ))}
      </Stack>
    </Box>
  );
}

export default FriendsPage;
