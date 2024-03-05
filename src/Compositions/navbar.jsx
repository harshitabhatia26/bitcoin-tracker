import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent">
        <Toolbar sx={{ justifyContent: 'flex-end' }}>
          <Button color="inherit" sx={{textTransform: 'none', margin: '10px'}}>Crypto Taxes</Button>
          <Button color="inherit" sx={{textTransform: 'none', margin: '10px'}}>Free Tools</Button>
          <Button color="inherit" sx={{textTransform: 'none', margin: '10px'}}>Resource Center</Button>
          <Button variant="contained" sx={{textTransform: 'none', margin: '10px', backgroundColor: '#1B4AEF'}}>Get Started</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}