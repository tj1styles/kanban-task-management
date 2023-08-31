import React from 'react'

const Card = ({heading_content,paragraph_content, onPressed, classed,keys}) => {
  return (
  
        <div  className={classed} onClick={onPressed}  >

            <h2>{heading_content}</h2>
            <div className='flex flex-row w-full pt-[20px] '>
            {paragraph_content}


            </div>


        </div>
    
  )
}

export default Card