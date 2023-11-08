
export default function Navbar() {
  return (
    <div className='container mx-auto bg-slate-200 rounded-full mt-3'>
    <nav className='flex items-center justify-between'>
      <div>
        <img
          src='https://picsum.photos/200'
          alt='Logo'
          className='rounded-full sm:w-28 sm:h-28 w-20 h-20'
        />
      </div>
      <ul className='flex space-x-3 md:space-x-6'>
        <li className='text-gray-800 hover:text-gray-600'>Home</li>
        <li className='text-gray-800 hover:text-gray-600'>About Us</li>
        <li className='text-gray-800 hover:text-gray-600'>Services</li>
        <li className='text-gray-800 hover:text-gray-600'>Pricing</li>
      </ul>
      <button className='bg-blue-600 px-6 py-4 rounded-full mr-2 text-white hover:bg-blue-800'>Sign Up</button>
    </nav>
  </div>
  )
}
