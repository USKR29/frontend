import Image from 'next/image'
import React from 'react'
import Bgr from './Bgr'

function About() {
  return (
    <div>
      
        <section className="text-gray-600 body-font drop-shadow-sm bg-white m-20  rounded-lg shadow-2xl">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image src={"/dialogo.jpg"} width={700} height={600} alt='logo' className='object-cover object-center rounded'/>
     
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col   items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About us
      <div className="h-1 w-20 bg-red-500 rounded"></div>
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Contact</button>
        </div>
    </div>
  </div>
</section>
   
        </div>
  )
}

export default About