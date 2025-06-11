import React from 'react'

export default function NewSletter() {
    return (
        <div className='bg-gray-100 text-center  px-40 py-16'>
            <h2 className='font-bold text-4xl mb-5'>Sign up for our newsletter</h2>
            <p className='mb-5 text-gray-500'>Be the first to know about releases and industry news and insights.</p>
            <div className="flex justify-center mb-10">
                <input type="email" placeholder='Enter your email' className='rounded-xl px-2.5 bg-white mx-5 w-96' />
                <div style={{ backgroundColor: '#7F56D9' }} className="btn text-white">Subscribe</div>
            </div>
            <p className='text-gray-500'>We care about your data in our privacy policy.</p>
        </div>
    )
}
