import React, { useState } from 'react';
import logo from '../assets/images/logo.jpg';
import { Link as RouterLink, NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  MenuItem,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';

export default function PostsNavbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire({
      title: 'Are you sure you want to log out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, log out',
      cancelButtonText: 'Cancel',
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('token');
        navigate('/login');
        Swal.fire('Logged out!', 'You have been logged out successfully.', 'success');
      }
    });
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>

          {/* Mobile menu icon */}
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <Box component={RouterLink} to="/" sx={{ display: { xs: 'none', sm: 'block' }, mr: 10 }}>
            <img src={logo} alt="Logo" style={{ height: 32, width: 'auto' }} />
          </Box>

          {/* Desktop navigation */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' } }}>
            <Button component={RouterLink} to="/" sx={{ color: '#555', fontWeight: 'bold' }}>
              Home
            </Button>
            <Button component={RouterLink} to="/posts" sx={{ color: '#555', fontWeight: 'bold' }}>
              Posts
            </Button>
          </Box>

          {/* Create Post Button */}
          <Button
            component={RouterLink}
            to="/add"
            variant="contained"
            sx={{ bgcolor: '#7F56D9', color: '#fff', textTransform: 'none', mr: 10 }}
          >
            Create Post
          </Button>

          {/* Account Menu */}
          <IconButton
            size="large"
            aria-label="account"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle sx={{ color: '#7F56D9' }} />
          </IconButton>

          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
          <List>
            <ListItem button component={RouterLink} to="/">
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button component={RouterLink} to="/posts">
              <ListItemText primary="Posts" />
            </ListItem>
            <ListItem button component={RouterLink} to="/add">
              <ListItemText primary="Create Post" />
            </ListItem>
            <ListItem button onClick={handleLogout}>
              <ListItemText primary="Logout" />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
