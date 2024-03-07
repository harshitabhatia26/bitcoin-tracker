import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from '@mui/material';

export default function NavBar() {
  const isMobile = useMediaQuery('(max-width:700px)');
  const [showMenu, setShowMenu] = React.useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <img className="w-24 ml-8" src="https://www.koinx.com/_next/static/media/Logo.5f2ad8d5.svg" />
        {isMobile ? (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenuClick}
          >
            <MenuIcon />
          </IconButton>
        ) : (
          <Toolbar sx={{ justifyContent: 'flex-center' }}>
            <Button color="inherit" sx={{ textTransform: 'none', margin: '10px' }}>Crypto Taxes</Button>
            <Button color="inherit" sx={{ textTransform: 'none', margin: '10px' }}>Free Tools</Button>
            <Button color="inherit" sx={{ textTransform: 'none', margin: '10px' }}>Resource Center</Button>
            <Button variant="contained" sx={{ textTransform: 'none', margin: '10px', backgroundColor: '#1B4AEF' }}>Get Started</Button>
          </Toolbar>
        )}
      </AppBar>
      {isMobile && showMenu && (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', padding: '10px' }}>
          <Button color="inherit" sx={{ textTransform: 'none', margin: '5px' }}>Crypto Taxes</Button>
          <Button color="inherit" sx={{ textTransform: 'none', margin: '5px' }}>Free Tools</Button>
          <Button color="inherit" sx={{ textTransform: 'none', margin: '5px' }}>Resource Center</Button>
          <Button variant="contained" sx={{ textTransform: 'none', margin: '5px', backgroundColor: '#1B4AEF' }}>Get Started</Button>
        </Box>
      )}
    </Box>
  );
}
