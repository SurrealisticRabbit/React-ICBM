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
  // Store the list of friends in state
  const [friends, setFriends] = React.useState(initialFriends);

  // This function handles the logic for updating a friend
  const handleRsvpClick = (friendToUpdate) => {
    const updatedFriends = friends.map((friend) => {
      // If this is the friend we want to update...
      if (friend.id === friendToUpdate.id) {
        // Check the current status to see if we should toggle to Online or Offline
        const isCurrentlyOnline = friend.status_short === "Online";

        // Return a new object with the toggled status and color
        return {
          ...friend,
          status_long: isCurrentlyOnline
            ? `${friend.name} is now Offline`
            : `${friend.name} is now Online`,
          status_short: isCurrentlyOnline ? "Offline" : "Online",
          status_colour: isCurrentlyOnline ? "default" : "success",
        };
      }
      // Otherwise, return the friend unchanged
      return friend;
    });

    // Update the state with the new array, triggering a re-render
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
