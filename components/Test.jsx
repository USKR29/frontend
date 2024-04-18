import React from 'react'
import Bgr from './Bgr'
import Button from './Button'

function Test() {
  return (
    <div>
      <Bgr child={
        <div className=' bg-red-200 filter mix-blend-multiply w-[300px] h-[150px] rounded-md '>
          This is the end
        </div>
      } />
        <Button text="try" onClick={console.log("click")}/>
    </div>
  )
}

export default Test