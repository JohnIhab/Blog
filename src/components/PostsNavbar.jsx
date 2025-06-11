import React, { useState } from 'react'
import logo from '../assets/images/logo.jpg';
import { Link, NavLink } from 'react-router';
import Swal from 'sweetalert2';
export default function PostsNavbar() {
    const [isOpen, setIsOpen] = useState(false);
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
    return (
        <nav className="bg-transparent">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </button>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex shrink-0 items-center [@media(max-width:530px)]:hidden">
                            <img className="h-8 w-auto" src={logo} alt="Logo" />
                        </div>

                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-4">
                                <NavLink to="/" className="rounded-md px-3 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900">Home</NavLink>
                                <NavLink to="/posts" className="rounded-md px-3 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900">Posts</NavLink>

                            </div>
                        </div>
                    </div>

                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="flex space-x-4">

                            <Link to="/add" className="btn font-medium text-white px-4 py-1 rounded" style={{ backgroundColor: '#7F56D9' }}>
                                Create Post
                            </Link>
                        </div>
                    </div>
                    <button
                        className="btn bg-transparent border-none p-0 hover:bg-transparent focus:bg-transparent active:bg-transparent"
                        popoverTarget="popover-1"
                        style={{ anchorName: "--anchor-1" }}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6 ml-14"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                            />
                        </svg>
                    </button>



                    <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                        popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" }}>
                        <li><Link onClick={handleLogout}>Logout</Link></li>
                    </ul>

                </div>
            </div>

            {isOpen && (
                <div className="sm:hidden" id="mobile-menu">
                    <div className="space-y-1 px-2 pt-2 pb-3">
                        <NavLink to="/" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">Dashboard</NavLink>
                        <NavLink to="/team" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">Team</NavLink>
                        <NavLink to="/projects" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">Projects</NavLink>
                        <NavLink to="/calendar" className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100">Calendar</NavLink>
                    </div>
                </div>
            )}
        </nav>
    )
}
