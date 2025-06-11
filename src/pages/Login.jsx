import React, { useState } from 'react'
import logo from '../assets/images/logo.jpg'
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup"
import { useFormik } from 'formik';
import axios from 'axios';
import { toast } from 'react-toastify';

// MUI imports
import {
    Box,
    Button,
    TextField,
    Typography,
    Paper,
    Divider,
    Stack,
    CircularProgress,
} from '@mui/material';

export default function Login() {

    let navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    async function sendData(values) {
        try {
            setLoading(false)
            const { data } = await axios.post('http://localhost:3000/login', values);
            console.log('User log in:', data);
            toast.success("Log in successfully!");
            localStorage.setItem('token', data.accessToken);
            localStorage.setItem('id', data.user.id);
            navigate('/');
        } catch (error) {
            console.error('log in error:', error.response?.data || error.message);
            toast.warning(error.response?.data || error.message)
            setLoading(true)
        }
    }

    function validationSchema() {
        let schema = new Yup.object({
            email: Yup.string()
                .email('Email is invalid')
                .required('Email is required'),
            password: Yup.string()
                .matches(/^[A-Z][a-zA-Z0-9@]{6,}$/)
                .required('Password is required'),
        })
        return schema
    }

    let login = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema,
        onSubmit: (values) => {
            const { rePassword, ...cleanedValues } = values;
            sendData(cleanedValues)
        }
    })

    return (
        <Box
            minHeight="100vh"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            bgcolor="background.default"
        >
            <Paper elevation={3} sx={{ p: 4, maxWidth: 400, width: '100%' }}>
                <Box display="flex" flexDirection="column" alignItems="center">
                    <img
                        alt="Your Company"
                        src={logo}
                        style={{ height: 40, marginBottom: 16 }}
                    />
                    <Typography variant="h5" fontWeight="bold" textAlign="center" gutterBottom>
                        Log in to your account
                    </Typography>
                    <Typography variant="body2" color="text.secondary" textAlign="center" mb={2}>
                        Start your 30-day free trial.
                    </Typography>
                </Box>
                <Box component="form" onSubmit={login.handleSubmit} mt={2}>
                    <Stack spacing={2}>
                        <TextField
                            label="Email"
                            id="email"
                            name="email"
                            type="email"
                            value={login.values.email}
                            onChange={login.handleChange}
                            error={Boolean(login.errors.email && login.touched.email)}
                            helperText={login.errors.email && login.touched.email ? login.errors.email : ''}
                            fullWidth
                            size="small"
                        />
                        <TextField
                            label="Password"
                            id="password"
                            name="password"
                            type="password"
                            value={login.values.password}
                            onChange={login.handleChange}
                            error={Boolean(login.errors.password && login.touched.password)}
                            helperText={login.errors.password && login.touched.password ? login.errors.password : ''}
                            fullWidth
                            size="small"
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ py: 1.5, fontWeight: 600, textTransform: 'none' }}
                            disabled={!login.dirty || !login.isValid || !loading}
                        >
                            {loading ? 'Log in' : <CircularProgress size={24} color="inherit" />}
                        </Button>

                    </Stack>
                </Box>
                <Typography variant="body2" color="text.secondary" align="center" mt={4}>
                    Don’t have an account?
                    <Link to="/signup" style={{ color: '#7F56D9', fontWeight: 600, marginLeft: 6 }}>
                        Sign up
                    </Link>
                </Typography>
            </Paper>
        </Box>
    )
}
