import React, {useState} from 'react'
import Toggle from 'react-toggle'
import {FaSun, FaMoon} from 'react-icons/fa'
const ToggleButton = () => {
  const [isDark, setIsDark]= useState(true)
  return (
    <>
    <Toggle 
    className={'flex flex-row'} 
    checked={isDark}    
    onChange={({target})=> setIsDark(target.checked)}
    icons={{
      checked:'🌙', unchecked: '☀'
    }}
    aria-label="Dark mode toggle"
    
    />
    
    
    </>
  )
}

export default ToggleButton