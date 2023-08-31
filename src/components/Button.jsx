import React from 'react'

const Button = ({content,classed,onClick}) => {
  return (
    <>
      <button onClick={onClick} className={classed}>
        {content}
      </button>
    
    
    
    </>
  )
}

export default Button