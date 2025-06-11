import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

export default function NewSletter() {
    return (
        <Box sx={{ backgroundColor: '#F3F4F6', textAlign: 'center', px: 40, py: 16 }}>
            <Typography sx={{ fontWeight: 'bold', fontSize: '2.25rem', mb: 5 }}>
                Sign up for our newsletter
            </Typography>
            <Typography sx={{ color: '#6B7280', mb: 5 }}>
                Be the first to know about releases and industry news and insights.
            </Typography>

            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 10, gap: 2 }}>
                <TextField
                    type="email"
                    placeholder="Enter your email"
                    sx={{
                        backgroundColor: 'white',
                        borderRadius: '1rem',
                        width: '24rem',
                        '& input': { px: 2.5 }
                    }}
                    variant="outlined"
                />
                <Button sx={{ backgroundColor: '#7F56D9', color: 'white', borderRadius: '8px', px: 4, py: 1 }}>
                    Subscribe
                </Button>
            </Box>

            <Typography sx={{ color: '#6B7280' }}>
                We care about your data in our privacy policy.
            </Typography>
        </Box>
    );
}
