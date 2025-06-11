import React, { useState } from 'react'
import logo from '../assets/images/logo.jpg'
import { useNavigate, Link } from "react-router-dom";
import * as Yup from "yup"
import { useFormik } from 'formik';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
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

export default function Signup() {
    let navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    async function sendData(values) {
        try {
            setLoading(false)
            const { data } = await axios.post('http://localhost:3000/register', values);
            console.log('User registered:', data);
            toast.success("Registered successfully!");
            navigate('/login');
        } catch (error) {
            console.error('Registration error:', error.response?.data || error.message);
            toast.warning(error.response?.data || error.message)
            setLoading(true)
        }
    }

    function validationSchema() {
        let schema = new Yup.object({
            name: Yup.string()
                .min(3, 'Name must be at least 2 characters')
                .max(20, 'Name must be at most 20 characters')
                .required('Name is required'),
            email: Yup.string()
                .email('Email is invalid')
                .required('Email is required'),
            password: Yup.string()
                .matches(/^[A-Z][a-zA-Z0-9@]{6,}$/, 'Password must start with uppercase and be at least 7 characters')
                .required('Password is required'),
            rePassword: Yup.string()
                .oneOf([Yup.ref('password')], 'Passwords must match')
                .required('Please confirm your password')
        })
        return schema
    }

    let register = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            rePassword: ''
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
                        Create an account
                    </Typography>
                    <Typography variant="body2" color="text.secondary" textAlign="center" mb={2}>
                        Start your 30-day free trial.
                    </Typography>
                </Box>
                <Box component="form" onSubmit={register.handleSubmit} mt={2}>
                    <Stack spacing={2}>
                        <TextField
                            label="Name"
                            id="name"
                            name="name"
                            type="text"
                            value={register.values.name}
                            onChange={register.handleChange}
                            onBlur={register.handleBlur}
                            error={Boolean(register.errors.name && register.touched.name)}
                            helperText={register.errors.name && register.touched.name ? register.errors.name : ''}
                            fullWidth
                            size="small"
                        />
                        <TextField
                            label="Email"
                            id="email"
                            name="email"
                            type="email"
                            value={register.values.email}
                            onChange={register.handleChange}
                            onBlur={register.handleBlur}
                            error={Boolean(register.errors.email && register.touched.email)}
                            helperText={register.errors.email && register.touched.email ? register.errors.email : ''}
                            fullWidth
                            size="small"
                        />
                        <TextField
                            label="Password"
                            id="password"
                            name="password"
                            type="password"
                            value={register.values.password}
                            onChange={register.handleChange}
                            onBlur={register.handleBlur}
                            error={Boolean(register.errors.password && register.touched.password)}
                            helperText={register.errors.password && register.touched.password ? register.errors.password : ''}
                            fullWidth
                            size="small"
                        />
                        <TextField
                            label="Re-enter Password"
                            id="rePassword"
                            name="rePassword"
                            type="password"
                            value={register.values.rePassword}
                            onChange={register.handleChange}
                            onBlur={register.handleBlur}
                            error={Boolean(register.errors.rePassword && register.touched.rePassword)}
                            helperText={register.errors.rePassword && register.touched.rePassword ? register.errors.rePassword : ''}
                            fullWidth
                            size="small"
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            sx={{ py: 1.5, fontWeight: 600, textTransform: 'none' }}
                            disabled={!register.dirty || !register.isValid || !loading}
                        >
                            {loading ? 'Sign up' : <CircularProgress size={24} color="inherit" />}
                        </Button>
                        
                    </Stack>
                </Box>
                <Typography variant="body2" color="text.secondary" align="center" mt={4}>
                    Already have an account?
                    <Link to="/login" style={{ color: '#7F56D9', fontWeight: 600, marginLeft: 6 }}>
                        Log in
                    </Link>
                </Typography>
            </Paper>
        </Box>
    )
}
