import React from 'react';
import logo from '../assets/images/logo.jpg';
import { Link as RouterLink } from 'react-router';
import { Box, Typography, Link, Divider } from '@mui/material';

export default function Footer() {
  return (
    <>
      <Box sx={{ px: 40, py: 16, display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: 2 }}>
        {/* Product */}
        <Box>
          <Typography sx={{ color: 'gray', mb: 1 }}>Product</Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            <Link sx={{textDecoration:'none', color: '#3c434d'}} component={RouterLink} to="#">Overview</Link>
            <Link sx={{textDecoration:'none', color: '#3c434d'}} component={RouterLink} to="#">Features</Link>
            <Link sx={{textDecoration:'none', color: '#3c434d'}} component={RouterLink} to="#">Solutions</Link>
            <Link sx={{textDecoration:'none', color: '#3c434d'}} component={RouterLink} to="#">Tutorials</Link>
            <Link sx={{textDecoration:'none', color: '#3c434d'}} component={RouterLink} to="#">Pricing</Link>
            <Link sx={{textDecoration:'none', color: '#3c434d'}} component={RouterLink} to="#">Releases</Link>
          </Box>
        </Box>

        {/* Company */}
        <Box>
          <Typography sx={{ color: 'gray', mb: 1 }}>Company</Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            <Link sx={{textDecoration:'none', color: '#3c434d'}} component={RouterLink} to="#">About us</Link>
            <Link sx={{textDecoration:'none', color: '#3c434d'}} component={RouterLink} to="#">Careers</Link>
            <Link sx={{textDecoration:'none', color: '#3c434d'}} component={RouterLink} to="#">Press</Link>
            <Link sx={{textDecoration:'none', color: '#3c434d'}} component={RouterLink} to="#">News</Link>
            <Link sx={{textDecoration:'none', color: '#3c434d'}} component={RouterLink} to="#">Media kit</Link>
            <Link sx={{textDecoration:'none', color: '#3c434d'}} component={RouterLink} to="#">Contact</Link>
          </Box>
        </Box>

        {/* Resources */}
        <Box>
          <Typography sx={{ color: 'gray', mb: 1 }}>Resources</Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            <Link sx={{textDecoration:'none', color: '#3c434d'}} component={RouterLink} to="#">Blog</Link>
            <Link sx={{textDecoration:'none', color: '#3c434d'}} component={RouterLink} to="#">Newsletter</Link>
            <Link sx={{textDecoration:'none', color: '#3c434d'}} component={RouterLink} to="#">Events</Link>
            <Link sx={{textDecoration:'none', color: '#3c434d'}} component={RouterLink} to="#">Help center</Link>
            <Link sx={{textDecoration:'none', color: '#3c434d'}} component={RouterLink} to="#">Tutorials</Link>
            <Link sx={{textDecoration:'none', color: '#3c434d'}} component={RouterLink} to="#">Support</Link>
          </Box>
        </Box>

        {/* Use Cases */}
        <Box>
          <Typography sx={{ color: 'gray', mb: 1 }}>Use cases</Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            <Link sx={{textDecoration:'none', color: '#3c434d'}} component={RouterLink} to="#">Startups</Link>
            <Link sx={{textDecoration:'none', color: '#3c434d'}} component={RouterLink} to="#">Enterprise</Link>
            <Link sx={{textDecoration:'none', color: '#3c434d'}} component={RouterLink} to="#">Government</Link>
            <Link sx={{textDecoration:'none', color: '#3c434d'}} component={RouterLink} to="#">SaaS center</Link>
            <Link sx={{textDecoration:'none', color: '#3c434d'}} component={RouterLink} to="#">Market places</Link>
            <Link sx={{textDecoration:'none', color: '#3c434d'}} component={RouterLink} to="#">Ecommerce</Link>
          </Box>
        </Box>

        {/* Social */}
        <Box>
          <Typography sx={{ color: 'gray', mb: 1 }}>Social</Typography>
          <Box display="flex" flexDirection="column" gap={1}>
            <Link sx={{textDecoration:'none', color: '#3c434d'}} component={RouterLink} to="#">X</Link>
            <Link sx={{textDecoration:'none', color: '#3c434d'}} component={RouterLink} to="#">LinkedIn</Link>
            <Link sx={{textDecoration:'none', color: '#3c434d'}} component={RouterLink} to="#">Facebook</Link>
            <Link sx={{textDecoration:'none', color: '#3c434d'}} component={RouterLink} to="#">GitHub</Link>
            <Link sx={{textDecoration:'none', color: '#3c434d'}} component={RouterLink} to="#">Instagram</Link>
            <Link sx={{textDecoration:'none', color: '#3c434d'}} component={RouterLink} to="#">Dribble</Link>
          </Box>
        </Box>

        {/* Legal */}
        <Box>
          <Typography sx={{ color: 'gray', mb: 1 }}>Legal</Typography>
          <Box  display="flex" flexDirection="column" gap={1}>
            <Link sx={{textDecoration:'none', color: '#3c434d'}} component={RouterLink} to="#">Terms</Link>
            <Link sx={{textDecoration:'none', color: '#3c434d'}} component={RouterLink} to="#">Privacy</Link>
            <Link sx={{textDecoration:'none', color: '#3c434d'}} component={RouterLink} to="#">Cookies</Link>
            <Link sx={{textDecoration:'none', color: '#3c434d'}} component={RouterLink} to="#">Licenses</Link>
            <Link sx={{textDecoration:'none', color: '#3c434d'}} component={RouterLink} to="#">Settings</Link>
            <Link sx={{textDecoration:'none', color: '#3c434d'}} component={RouterLink} to="#">Contact</Link>
          </Box>
        </Box>
      </Box>

      <Divider sx={{ bgcolor: 'gray.300' }} />

      <Box sx={{ px: 40, py: 8, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box component="img" src={logo} alt="Logo" sx={{ height: 32, width: 'auto' }} />
        <Typography sx={{ color: 'gray' }}>© 2077 ACGR. All rights reserved.</Typography>
      </Box>
    </>
  );
}
