import Image from 'next/image'

import { Inter } from 'next/font/google'
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(() => {
    const icon = document.querySelector('.menu-icon');
    const menuOption = document.querySelector('.menu');
    icon.addEventListener('click', () => {
      menuOption.classList.toggle('hidden');
    });
    
  }, []);
  return (
  <>
  {/* navbar */}
  <div className='container mx-auto bg-slate-200 rounded-full mt-3'>
    <nav className='flex items-center justify-between'>
      <div>
        <img
          src='https://picsum.photos/200'
          alt='Logo'
          className='rounded-full w-20 h-20 md:w-24 md:h-24'
        />
      </div>
      <ul className='flex space-x-3 md:space-x-6 hidden md:flex'>
        <li className='text-gray-800 hover:text-gray-600'>Home</li>
        <li className='text-gray-800 hover:text-gray-600'>About Us</li>
        <li className='text-gray-800 hover:text-gray-600'>Services</li>
        <li className='text-gray-800 hover:text-gray-600'>Pricing</li>
      </ul>
      <button className='bg-blue-600 px-6 py-4 rounded-full mr-2 text-white hover:bg-blue-800 hidden md:inline'>Sign Up</button>
      <button className='mr-5 border-2 border-black rounded md:hidden menu-icon'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
    </nav>
  </div>
  <div className='bg-black mx-24 p-5 rounded-3xl text-center mt-2 menu hidden'>
    <ul className='flex flex-col  space-y-4'>
        <li className='text-white hover:text-gray-600'>Home</li>
        <li className='text-white hover:text-gray-600'>About Us</li>
        <li className='text-white hover:text-gray-600'>Services</li>
        <li className='text-white hover:text-gray-600'>Pricing</li>
      </ul>
      <button className='bg-blue-600 px-6 py-4 rounded-full mt-2 text-white hover:bg-blue-800'>Sign Up</button>
    </div>
  {/* navbar end */}
  <hero>
    <div className='container mx-auto mt-16 flex flex-col xl:flex-row '>
      <div>
        <Image src='/images/hero.png' alt='hero' width={1000} height={1000}/>
      </div>
      <div className='p-4 space-y-6'>
      <h1 className='text-4xl text-purple-800 font-bold md:text-5xl'>Welcome to the World <br/> of Programming</h1>
      <p className='text-sm md:text-xl'>
            Explore the endless possibilities of programming and technology. Whether you're a seasoned developer or just starting your coding journey, this landing page is your gateway to a world of innovation and creativity.
        </p>
        <p className='text-sm md:text-xl'>
            Our mission is to inspire and empower you to create, learn, and build with code. Discover the latest trends, find resources, and connect with a thriving community of fellow programmers. Let's code and make amazing things together!
        </p>
      </div>
    </div>
  </hero>
  {/* main content */} 
  <h1 className='text-center mt-14 text-3xl font-bold'>Key Features</h1>
  <div className="container mx-auto mt-5 flex flex-col space-y-14 md:space-y-0 md:flex-row">
    <div className='w-1/3 text-center mx-auto space-y-6'>
      <h1 className='text-2xl text-purple-800' >NextJs</h1>
      <Image src='/images/undraw_next_js_-8-g5m.svg' width={200} height={200} className='mx-auto'/>
    </div>
    <div className='w-1/3 text-center mx-auto space-y-6'>
      <h1 className='text-2xl text-purple-800'>Mobile Development</h1>
      <Image src='/images/mobile.svg' width={200} height={200} className='mx-auto'/>
    </div>
    <div className='w-1/3 text-center mx-auto space-y-6'>
      <h1 className='text-2xl text-purple-800'>Cloud Services</h1>
      <Image src='/images/cloud.svg' width={200} height={200} className='mx-auto'/>
    </div>
  </div>
  {/* end main content */}

  {/* Pricing section */}
  <div className='container mx-auto text-center mt-6 mb-6 '>
    <h1 className='text-4xl mt-8 font-bold text-blue-600'>Our Pricing</h1>
    <p className='text-2xl'>Choose the plan that's right for you.</p>

    <div className='grid grid-cols-1 md:grid-cols-3 mx-auto  gap-4 lg:mx-52 mt-7'>
    <div className='w-80 p-4 mt-4 bg-gray-100 border-2 rounded-2xl hover:shadow-2xl mx-auto'>
      <h1 className='text-5xl mt-5 text-blue-800'>$19.99</h1>
      <h1 className='text-2xl mt-5 text-blue-600'>Basic Plan</h1>
      <h1 className='text-4xl mt-5 text-blue-600 mb-3'>Features</h1>
      <ul className='space-y-2'>
        <li>Unlimited Access to Tutorials</li>
        <li>24/7 Email Support</li>
        <li>Monthly Coding Webinars</li>
        <li>Basic Coding Challenges</li>
        <li>Community Forum Access</li>
      </ul>
      <button className='bg-blue-600 px-6 py-4 rounded-full mr-2 text-white hover:bg-blue-800 my-6'>Get Started</button>
    </div>
    <div className='w-80 p-4 bg-gray-100 border-2 rounded-2xl hover:shadow-2xl mx-auto border-dashed border-4 border-blue-500 hover:border-blue-800'>
      <p className='mt-2 bg-blue-600 rounded-full mx-20 text-white'>Popular plan</p>
    <h1 className='text-5xl mt-5 text-blue-800'>$39.99</h1>
      <h1 className='text-2xl mt-5 text-blue-600'>Growth Plan</h1>
      <h1 className='text-4xl mt-5 text-blue-600 mb-3'>Features</h1>
      <ul className='space-y-2'>
        <li>All Basic Plan Features</li>
        <li>Priority Support</li>
        <li>Advanced Coding Challenges</li>
        <li>Weekly Coding Workshops</li>
        <li>Exclusive Coding Resources</li>
      </ul>
      <button className='bg-blue-600 px-6 py-4 rounded-full mr-2 text-white hover:bg-blue-800 my-6'>Get Started</button>
    </div>
    <div className='w-80 p-4 mt-4 bg-gray-100 border-2 rounded-2xl hover:shadow-2xl mx-auto'>
    <h1 className='text-5xl mt-5 text-blue-800'>$59.99</h1>
      <h1 className='text-2xl mt-5 text-blue-600'>Advanced Plan</h1>
      <h1 className='text-4xl mt-5 text-blue-600 mb-3'>Features</h1>
      <ul className='space-y-2'>
        <li>All Growth Plan Features</li>
        <li>Expert Coding Guidance</li>
        <li>Access to Premium Courses</li>
        <li>Daily Coding Challenges</li>
        <li>Personal Coding Mentor</li>
      </ul>
      <button className='bg-blue-600 px-6 py-4 rounded-full mr-2 text-white hover:bg-blue-800 my-6'>Get Started</button>
    </div>
    </div>
  </div>
  {/* end pricing section */}

  {/* key Features */}
  <div className='container mx-auto text-center mt-10'>
    <p className='text-xl'>Recent Updates</p>
    <h1 className='text-4xl'>Featured Stories</h1>

    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 md:mx-60 mt-7'>
    <div className='w-80 mx-auto p-4 mt-4 bg-gray-100 border-2 rounded-2xl hover:shadow-2xl'>
    <Image src='/images/workhome.svg' width={400} height={400} className='p-6'/>
    <h1 className='text-2xl mt-2 text-blue-800'>Work from Home</h1>
    <p className='mt-3 leading-7'>Embrace the freedom to work from the comfort of your home or any location of your choice. Our platform supports remote work, allowing you to maintain a healthy work-life balance.</p>
    </div>
    <div className='w-80 mx-auto  p-4 bg-gray-100 border-2 rounded-2xl hover:shadow-2xl'>
    <Image src='/images/edu.svg' width={400} height={400} className='p-6'/>
    <h1 className='text-2xl mt-2 text-blue-800'>Interactive Learning</h1>
    <p className='mt-3 leading-7'>Dive into a world of interactive learning with hands-on coding exercises, real-world projects, and engaging coding challenges. Gain practical experience while you learn.</p>
    </div>
    <div className='w-80 mx-auto p-4 mt-4 bg-gray-100 border-2 rounded-2xl hover:shadow-2xl'>
    <Image src='/images/support.svg' width={400} height={400} className='p-6'/>
    <h1 className='text-2xl mt-2 text-blue-800'>Community Support</h1>
    <p className='mt-3 leading-7'>Connect with a vibrant community of fellow programmers, share your experiences, and seek help when needed. Our supportive community is here to help you on your coding journey.</p>
    </div>
    </div>
  </div>
    {/* end key Features */}

    {/* footer */}
    <footer className='bg-gray-100  mt-9 space-y-12 flex flex-col md:flex-row md:justify-center'>
      <div className='w-1/4 mx-auto'>
        <h1 className='md:pt-28 pt-5 text-2xl text-center text-purple-700'>The Full Stack</h1>
        <img
          src='https://picsum.photos/200'
          alt='Logo'
          className='rounded-full sm:w-36 sm:h-36 w-20 h-20 mx-auto mb-3'
        />
      </div>
      <div className='w-2/4 flex flex-row justify-center items-center mx-auto'>
        <ul className='pr-8'>
        <li>Home</li>
        <li>About us</li>
        <li>Pricing</li>
        </ul>
        <ul className='pr-8'>
        <li>Services</li>
        <li>Login</li>
        <li>Signup</li>
        </ul>
        <ul className='pr-8'>
        <li>portfollio</li>
        <li>GitHub</li>
        <li>Skills</li>
        </ul>

      </div>
      <div className='w-1/4 flex justify-between md:justify-center md:space-x-5 mx-auto'>
        <Image src='/images/insta.svg' width={40} height={50}/>
        <Image src='/images/facebook.svg' width={40} height={50}/>
        <Image src='/images/twitter.svg' width={40} height={50}/>
      </div>
    </footer>

  </>
  )
}
