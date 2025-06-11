import React from 'react'
import error from '../assets/images/404 Error.svg'
export default function NotFound() {
    return (
        <div className="flex justify-center items-center h-max w-full">
            <img className="w-2xl" src={error} alt="" />
        </div>
    )
}
