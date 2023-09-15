import React, { useState } from 'react'

const Navbar = ({background}) => {
    const colors = ['bg-transparent','bg-orange-300']
    const [opacity,setOpacity] = useState(0);
  return (
    <div className={`flex flex-row p-4 sticky z-10 scroll-m-2 top-0 transition-position duration-200 ${colors[background]} backdrop-blur-sm`}>
        <ul className='grid grid-cols-4 mx-auto font-bold text-green-600'>
            <li >Home</li>
            <li>Menu</li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>

    </div>
  )
}

export default Navbar