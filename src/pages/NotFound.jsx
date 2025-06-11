import React from 'react'
import error from '../assets/images/404 Error.svg'
import { Box } from '@mui/material'

export default function NotFound() {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minHeight="80vh"
            width="100%"
        >
            <Box
                component="img"
                src={error}
                alt="404 Not Found"
                sx={{ width: { xs: '90%', sm: 500, md: 700 }, maxWidth: '100%' }}
            />
        </Box>
    )
}
