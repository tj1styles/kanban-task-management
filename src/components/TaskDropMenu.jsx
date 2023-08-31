import React from 'react'
import {FaTimes} from 'react-icons/fa'

const TaskDropMenu = ({onClick}) => {
  return (
    <>
    
    <div className='lg:w-[33%] md:w-[50%] sm:w-[70%] m-auto   md:h-[95vh] sm:h-[63vh] rounded-lg flex flex-row flex-wrap dark:bg-[rgb(44,44,56)] bg-lightGrey shadow-md shadow-gray-400'>
        <div className="w-[80%] flex flex-row flex-wrap items-center">
        <h2 className='pl-[42px]'>Add New Task</h2>
        </div>

        <div className="w-full justify-center flex flex-row flex-wrap">
            <div className="w-[80%]">
                <h6>Title</h6>
            </div>
            <input type="text" className="w-[80%] h-[6vh] rounded-md bg-transparent border-[rgb(66,66,78)] border-2 pl-[8px] focus:outline-none" placeholder="e.g Take coffee break" />

        </div>

        <div className="w-full justify-center flex flex-row flex-wrap">
            <div className="w-[80%]">
                <h6>Description</h6>
            </div>
            <textarea  type="text" className="w-[80%] rounded-md bg-transparent border-[rgb(66,66,78)] border-2 pl-[8px] resize-none overflow-y-hidden focus:outline-none h-[15vh]" placeholder="e.g It's always good to take a break. This 15 minute break will recharge the batteries a little. " ></textarea>

        </div>
 
        <div className="w-full justify-center flex flex-row flex-wrap ">
            <div className="w-[80%]">
                <h6>Subtasks</h6>
            </div>
            <div className="w-[80%] flex flex-row flex-wrap justify-center gap-y-[14px] gap-x-[8px]">
            <input type="text" className="w-[90%] focus:outline-none rounded-md bg-transparent border-[rgb(66,66,78)] border-2 pl-[8px]" placeholder='e.g Make coffee' />  <div className='w-[7%] pt-[8px] text-[20px]'> <FaTimes /> </div>
            <input type="text" className="w-[90%] focus:outline-none rounded-md bg-transparent border-[rgb(66,66,78)] border-2 pl-[8px]" placeholder='e.g Drink coffee & smile' />  <div className='w-[7%] pt-[8px] text-[20px]'> <FaTimes /> </div>
            <button className="w-[100%] dark:bg-[rgb(255,255,255)] bg-black rounded-full p-[6px] dark:text-[rgb(108,102,197)] text-white text-[14px] font-[600]" >+ Add New Subtasks</button>

            </div>

        </div>


        <div className="w-full justify-center flex flex-row flex-wrap py-[10px]">
            <div className="w-[80%]">
                <h6>Status</h6>
            </div>
            <select  className="w-[80%]   dark:bg-[rgb(44,44,56)] bg-lightGrey border-2 rounded-md  border-[rgb(66,66,78)] focus:outline-none" >

            <option value="" className='checked:border-[rgb(66,66,78)] checked:border-2 hover:bg-[rgb(100,95,198)] outline-none'>Todo</option>
            <option value="" className='checked:border-[rgb(66,66,78)] checked:border-2 hover:bg-[rgb(100,95,198)] outline-none'>Doing</option>
            <option value="" className='checked:border-[rgb(66,66,78)] checked:border-2 hover:bg-[rgb(100,95,198)] outline-none'>Done</option>

            </select>

        </div>
        <div className='justify-center items-center  flex flex-row flex-wrap w-full'>
            <button onClick={onClick} className="w-[80%] rounded-full p-[7px] bg-[rgb(100,95,198)] text-white"> Create Task</button>
        </div>





    </div>

    
    
    </>
  )
}

export default TaskDropMenu