import React, { useState } from 'react';
import logo from '../assets/images/logo.jpg';
import { Link as RouterLink, NavLink as RouterNavLink } from 'react-router';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none' }}>
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    {/* Left Side */}
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            <img src={logo} alt="Logo" style={{ height: 32, width: 'auto' }} />
                        </Box>
                    </Box>

                    {/* Middle Links */}
                    <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: 2 }}>
                        <Button component={RouterNavLink} to="/" sx={{ fontWeight: 600, color: '#374151' }}>
                            Home
                        </Button>
                        <Button component={RouterNavLink} to="/posts" sx={{ fontWeight: 600, color: '#374151' }}>
                            Posts
                        </Button>
                    </Box>

                    {/* Right Side Buttons */}
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button component={RouterLink} to="/login" variant="outlined" sx={{ bgcolor: 'white', fontWeight: 500 }}>
                            Log in
                        </Button>
                        <Button component={RouterLink} to="/signup" sx={{ bgcolor: '#7F56D9', color: 'white', fontWeight: 500 }}>
                            Sign up
                        </Button>

                        {/* Hamburger */}
                        <IconButton
                            sx={{ display: { sm: 'none' }, color: '#374151' }}
                            edge="start"
                            onClick={toggleDrawer}
                        >
                            <MenuIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Drawer for mobile */}
            <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
                <Box sx={{ width: 250, p: 2 }}>
                    <Box display="flex" justifyContent="flex-end">
                        <IconButton onClick={toggleDrawer}>
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton component={RouterNavLink} to="/" onClick={toggleDrawer}>
                                <ListItemText primary="Dashboard" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component={RouterNavLink} to="/team" onClick={toggleDrawer}>
                                <ListItemText primary="Team" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component={RouterNavLink} to="/projects" onClick={toggleDrawer}>
                                <ListItemText primary="Projects" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton component={RouterNavLink} to="/calendar" onClick={toggleDrawer}>
                                <ListItemText primary="Calendar" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </>
    );
}
