
import React from 'react';
import {Link} from 'react-router-dom'
import { SquareChevronRight , X } from 'lucide-react';
import { useState } from 'react';


const NavBar = () => {
    const[open ,setOpen] = useState(false);

    return (
        <>
        <div className='absolute top-0 left-0 w-full z-50 bg-transparent'>
        <div 
           className=' mt-12 md:hidden text-amber-600 cursor-pointer'
           onClick={() => setOpen(!open)} > 

          {open ? <X size={28} className='ml-7 mb-5' /> : <SquareChevronRight size={28} className='ml-7 mb-5'/>}
        </div>

        <div className= {`relative -top-12 -left-26 h-full w-64 transform ${
          open ? 'translate-x-44' : '-translate-x-full'
        } transition-transform duration-500 ease-in-out md:hidden z-50`}>
        <div className='flex gap-6 '>
            <Link to='/' onClick={() => setOpen(false)}> 
                  <div className="text-amber-800  hover:text-amber-600">
                       Home
                    </div>
              </Link> 
            
              <Link to= '/about' onClick={() => setOpen(false)}>
                  <div className="text-amber-800 hover:text-amber-600">
                     About
                  </div>
              </Link>
              <Link to='/resume' onClick={() => setOpen(false)}>
                    <div className="text-amber-800 hover:text-amber-600">
                        Resume
                    </div>
              </Link>
              <Link to='/portfolio' onClick={() => setOpen(false)} >
                    <div className="text-amber-800 hover:text-amber-600">
                        Portfolio
                    </div>
              </Link>
              <Link to='/contact' onClick={() => setOpen(false)}>
                    <div className="text-amber-800 hover:text-amber-600">
                        Contact
                    </div>  
              </Link>       
        </div>
        </div>

        {/* {medium screen link} */}
        <div className='md:flex justify-center space-x-10 pt-5 md:mt-2 p-7 mt-3 hidden'>
              <Link to='/'> 
                  <div className="text-amber-800  hover:text-amber-600">
                       Home
                    </div>
              </Link> 
            
              <Link to= '/about'>
                  <div className="text-amber-800 hover:text-amber-600">
                     About
                  </div>
              </Link>
              <Link to='/resume'>
                    <div className="text-amber-800 hover:text-amber-600">
                        Resume
                    </div>
              </Link>
              <Link to='/portfolio' className='transition-transform duration-1000'>
                    <div className="text-amber-800 hover:text-amber-600">
                        Portfolio
                    </div>
              </Link>
              <Link to='/contact'>
                    <div className="text-amber-800 hover:text-amber-600">
                        Contact
                    </div>  
              </Link>          
        </div>
        </div>
        </>
    )
}
export default NavBar