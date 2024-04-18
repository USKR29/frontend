import React from 'react'

const Button = ({text, onClick})=> {
  return (
    <button className='bg-orange-200 rounded-lg w-10 h-10 gap-4' type='button' onClick={onClick}>{text}</button>
  )
}

export default Button