import React, { useState } from 'react'
import logo from '../assets/images/logo.jpg'
import { useNavigate, Link } from "react-router";
import * as Yup from "yup"
import { useFormik } from 'formik';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
export default function Signup() {
    let navigate = useNavigate();
    // npm run server
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
            rePassword:''
        },
        validationSchema,
        onSubmit: (values) => {
            const { rePassword, ...cleanedValues } = values;
            sendData(cleanedValues)
            
        }

    })
    // console.log(register);

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 ">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img
                        alt="Your Company"
                        src={logo}
                        className="mx-auto h-10 w-auto"
                    />
                    <h2 className="mt-3 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
                        Create an account
                    </h2>
                    <p className='text-gray-500 text-center mt-3'>Start your 30-day free trial.</p>
                </div>
                <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm ">
                    <form onSubmit={register.handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor='user' className="block text-sm/6 font-medium text-gray-900">
                                name
                            </label>
                            <div className="mt-2">
                                <input value={register.values.name} onBlur={register.handleBlur} onChange={register.handleChange} id='name' name='name' type='text' className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"></input>
                            </div>
                        </div>
                        {register.errors.name && register.touched.name ? <div role="alert" className="alert alert-error">{register.errors.name}</div> : ''}
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    value={register.values.email} onChange={register.handleChange}
                                    id="email"
                                    name="email"
                                    type="email"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>
                        {register.errors.email && register.touched.email ? <div role="alert" className="alert alert-error">{register.errors.email}</div> : ''}
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">
                                    Password
                                </label>

                            </div>
                            <div className="mt-2">
                                <input
                                    value={register.values.password} onChange={register.handleChange}
                                    id="password"
                                    name="password"
                                    type="password"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>
                        {register.errors.password && register.touched.password ? <div role="alert" className="alert alert-error">{register.errors.password}</div> : ''}
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="rePassword" className="block text-sm/6 font-medium text-gray-900">
                                    Re password
                                </label>

                            </div>
                            <div className="mt-2">
                                <input
                                    value={register.values.rePassword} onChange={register.handleChange}
                                    id="rePassword"
                                    name="rePassword"
                                    type="password"
                                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                                />
                            </div>
                        </div>
                        {register.errors.rePassword && register.touched.rePassword ? <div role="alert" className="alert alert-error">{register.errors.rePassword}</div> : ''}
                        <div>
                            <button
                                // disabled={!(register.dirty && register.isValid)}
                                style={{ backgroundColor: '#7F56D9' }}
                                type="submit"
                                className="flex w-full justify-center rounded-md  p-2 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                {loading ?'Sign up': <span className="loading loading-dots loading-xs"></span>}
                            </button>
                            <div className="flex items-center justify-center my-4">
                                <hr className="flex-grow border-t border-gray-300" />
                                <p className="mx-4 text-gray-500 text-sm">OR</p>
                                <hr className="flex-grow border-t border-gray-300" />
                            </div>

                            <button
                                className="flex w-full items-center justify-center  rounded-md mt-3 p-2 text-sm/6 font-semibold text-gray-900 bg-white shadow-xs"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" viewBox="0 0 48 48">
                                    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                </svg>
                                <p>Sign up with Google</p>
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        Already have an account?
                        <Link to="/login" className="font-semibold text-indigo-600 hover:text-indigo-500 mx-1.5">
                            Log in
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}
