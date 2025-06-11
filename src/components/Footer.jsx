import React from 'react'
import logo from '../assets/images/logo.jpg';
import { Link } from 'react-router'

export default function Footer() {
  return (
    <>
      <div className='px-40 py-16 grid grid-cols-6'>
      <div>
        <ul>
          <li className='text-gray-500 mb-3'>Product</li>
          <li>
            <Link to='#'>Overview</Link>
          </li>
          <li>
            <Link to='#'>Features</Link>
          </li>
          <li>
            <Link to='#'>Solutions</Link>
          </li>
          <li>
            <Link to='#'>Tutorials</Link>
          </li>
          <li>
            <Link to='#'>Pricing</Link>
          </li>
          <li>
            <Link to='#'>Releases</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li className='text-gray-500 mb-3'>Company</li>
          <li>
            <Link to='#'>About us</Link>
          </li>
          <li>
            <Link to='#'>Careers</Link>
          </li>
          <li>
            <Link to='#'>Press</Link>
          </li>
          <li>
            <Link to='#'>News</Link>
          </li>
          <li>
            <Link to='#'>Media kit</Link>
          </li>
          <li>
            <Link to='#'>Contact</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li className='text-gray-500 mb-3'>Resources</li>
          <li>
            <Link to='#'>Blog</Link>
          </li>
          <li>
            <Link to='#'>Newsletter</Link>
          </li>
          <li>
            <Link to='#'>Events</Link>
          </li>
          <li>
            <Link to='#'>Help center</Link>
          </li>
          <li>
            <Link to='#'>Tutorials</Link>
          </li>
          <li>
            <Link to='#'>Support</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li className='text-gray-500 mb-3'>Use cases</li>
          <li>
            <Link to='#'>Startups</Link>
          </li>
          <li>
            <Link to='#'>Enterprise</Link>
          </li>
          <li>
            <Link to='#'>Government</Link>
          </li>
          <li>
            <Link to='#'>SaaS center</Link>
          </li>
          <li>
            <Link to='#'>Market places</Link>
          </li>
          <li>
            <Link to='#'>Ecommerce</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li className='text-gray-500 mb-3'>Social</li>
          <li>
            <Link to='#'>X</Link>
          </li>
          <li>
            <Link to='#'>LinkedIn</Link>
          </li>
          <li>
            <Link to='#'>Facebook</Link>
          </li>
          <li>
            <Link to='#'>GitHub</Link>
          </li>
          <li>
            <Link to='#'>Instagram</Link>
          </li>
          <li>
            <Link to='#'>Dribble</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li className='text-gray-500 mb-3'>Legal</li>
          <li>
            <Link to='#'>Terms</Link>
          </li>
          <li>
            <Link to='#'>Privacy</Link>
          </li>
          <li>
            <Link to='#'>Cookies</Link>
          </li>
          <li>
            <Link to='#'>Licenses</Link>
          </li>
          <li>
            <Link to='#'>Settings</Link>
          </li>
          <li>
            <Link to='#'>Contact</Link>
          </li>
        </ul>
      </div>

    </div>
    <hr className='text-gray-300'/>
    <div className='px-40 py-8 flex justify-between'>
      <img className='h-8 w-auto' src={logo} alt="" />
      <p className='text-gray-400'>© 2077 ACGR. All rights reserved.</p>
    </div>
    </>
    
  )
}
