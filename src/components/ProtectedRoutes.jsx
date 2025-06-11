import React from 'react'
import { Navigate } from 'react-router';

export default function ProtectedRoutes({children}) {
    let token = localStorage.getItem('token');
    if (token) return children
    return <Navigate to='/login/' />
}
