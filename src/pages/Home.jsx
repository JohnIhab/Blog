import React from 'react'
import OurBlog from '../components/OurBlog'
import RecentPosts from '../components/RecentPosts'
import NewSletter from '../components/NewSletter'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <div className=''>
            <OurBlog />
            <NewSletter />
            <Footer />
        </div>
    )
}
