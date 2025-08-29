import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const MainLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const pathToValue = {
    '/': 0,
    '/friends': 1,
    '/settings': 2,
  };

  // Determine the current value for the BottomNavigation based on the URL
  const currentValue = pathToValue[location.pathname];

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        pt: 1,
        pb: '72px', // Padding for the bottom navigation
        width: '100%',
        minHeight: '100vh',
      }}
    >
      {/* Child routes will render here (GoPage, FriendsPage, etc.) */}
      <Outlet />

      <Paper
        sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={currentValue}
          onChange={(event, newValue) => {
            switch (newValue) {
              case 0: navigate('/'); break;
              case 1: navigate('/friends'); break;
              case 2: navigate('/settings'); break;
              default: navigate('/');
            }
          }}
        >
          <BottomNavigationAction label="Go" icon={<WhatshotIcon />} />
          <BottomNavigationAction label="Friends" icon={<PeopleOutlineIcon />} />
          <BottomNavigationAction label="Settings" icon={<SettingsOutlinedIcon />} />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};

export default MainLayout;

