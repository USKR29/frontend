import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import Image from 'next/image'

function Slider({sliderList}) {
  return (
    <div>
        <Carousel>
            <CarouselContent>
                {sliderList.map((slider,index)=>(
                    <CarouselItem key={index} className=" w-full h-[300px] sm:h-[600px]">
                        <Image src={process.env.NEXT_BACKEND_BASE_URL+slider.attributes.slideimg.data.attributes.url} width={1000} height={500} alt='banner' className=' object-cover w-full h-[300px] sm:h-[600px] rounded-md'/>
                    </CarouselItem>
                ))}
                
            </CarouselContent>
            <CarouselPrevious className=' ml-20'/>
            <CarouselNext className=' mr-20'/>
        </Carousel>

    </div>
  )
}

export default Slider