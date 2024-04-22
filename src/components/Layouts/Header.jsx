import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import CloseIcon from '@mui/icons-material/Close';

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: '#F6995C' }}>
          <Toolbar>
            {/* Menu Icon Button */}
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2, display: { md: 'none' } }} // Hide on desktop view
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" style={{ textDecoration: 'none', color: '#11235A' }}>
                Easyspace
              </Link>
            </Typography>
            {/* Navigation Links */}
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <Button color="inherit" sx={{ color: '#11235A' }}>
                <Link to="/pricing" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Pricing
                </Link>
              </Button>
              <Button color="inherit" sx={{ color: '#11235A' }}>
                <Link to="/features" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Features
                </Link>
              </Button>
              <Button color="inherit" sx={{ color: '#11235A' }}>
                <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Contact
                </Link>
              </Button>
              <Button color="inherit" sx={{ color: '#11235A' }}>
                <Link to="/blog" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Blog
                </Link>
              </Button>
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: 2 }}>
              <Button color="primary" variant="outlined" sx={{ bgcolor: '' }}>
                <Link to="/signup" style={{ textDecoration: 'none', color: 'inherit' }}>
                  Signup
                </Link>
              </Button>
              <Box sx={{ ml: 1 }}>
                <Button color="secondary" variant="outlined" sx={{ bgcolor: '#' }}>
                  <Link to="/signin" style={{ textDecoration: 'none' }}>
                    Signin
                  </Link>
                </Button>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      {/* Drawer for Mobile View */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer}
      >
        <List sx={{ textAlign: 'center' }}>
          <IconButton
            onClick={toggleDrawer}
            sx={{ position: 'absolute', right: '5px', top: '5px' }}
          >
            <CloseIcon />
          </IconButton>
          <ListItem button>
            <Link to="/pricing" style={{ textDecoration: 'none', color: 'inherit' }}>
              Pricing
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/features" style={{ textDecoration: 'none', color: 'inherit' }}>
              Features
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/contact" style={{ textDecoration: 'none', color: 'inherit' }}>
              Contact
            </Link>
          </ListItem>
          <ListItem button>
            <Link to="/blog" style={{ textDecoration: 'none', color: 'inherit' }}>
              Blog
            </Link>
          </ListItem>
          <ListItem>
            <Button component={Link} to="/signup" color="primary" variant="outlined" sx={{ bgcolor: '' }}>
              Signup
            </Button>
          </ListItem>
          <ListItem>
            <Button component={Link} to="/signin"  color="secondary" variant="outlined" sx={{ bgcolor: '#' }}>
              Signin
            </Button>
          </ListItem>
        </List>
      </Drawer>
    </>
  );
}
