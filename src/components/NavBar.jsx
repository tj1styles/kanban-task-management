import React from 'react'
import Button from './Button'
import {FaEllipsisV} from 'react-icons/fa'


const NavBar = ({content,icon_content,onClick,div_click,icon_class}) => {
  return (
    <>
      <nav className='flex flex-row lg:w-calc lg:pl-[0px]  h-20 z-0 dark:bg-lightSecondary dark:shadow-gray-500 dark:shadow-sm shadow-gray-950 shadow-sm'>
        <h2 className=' flex flex-row pl-2 text-black dark:text-white font-bold text-xl pt-[30px] '>
            {content}
            <div className={icon_class}  onClick={div_click}>
              <i >
                {icon_content}
              </i>
            </div>
        </h2>




      <div className='flex flex-row ml-auto mt-6'>



        <Button  content={<> <i>+</i>  <span className='hidden md:inline-block sm:inline-block'>Add New Task</span></> } classed={'bg-primary mb-5 md:py-[10px] md:px-[18px] rounded-full md:pb-[29px] sm:px-[20px]  xs:px-[20px] xs:text-[17px] xs:py-[2px] text-xs text-white font-bold mr-[10px]'} onClick={onClick}/>
        <FaEllipsisV className='dark:text-white   cursor-pointer mt-3 pr-[10px]'/>
      </div>








      </nav>
    
    
    
    </>
  )
}

export default NavBar