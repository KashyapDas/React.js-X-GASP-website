import React from 'react'
import { Tilt } from '@jdion/tilt-react'
import bgPerson from "../image/bgPerson.png"

const MenuLeft = () => {
  return (
    <div className='bg-[#1A1A1A] w-[65%] h-full flex items-center justify-center relative'>

        <div className='w-[73%] h-[93%] absoulte overflow-hidden absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] z-20 opacity-[80%] brightness-200 contrast-200'>

            <img src={bgPerson} className='w-full h-full object-cover object-center scale-x-[-1] opacity-[100%]' />
        </div>

        <Tilt className='w-[70%] h-[90%] relative overflow-hidden z-30 opacity-[80%]'>

            <div className='.image1 h-full w-full scale-[1] absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'>
                <img src="https://images.prismic.io/arock-website-2023/d4147892-cb03-4582-af32-326bb109803f_AROCK-_1502.jpg?fm=webp&q=100&fit=crop" className='w-full h-full object-cover object-center scale-x-[-1] opacity-[100%]' />
            </div>

            <div className='.image2 h-full w-full scale-[0.94] absolute top-[50%] left-[43%] -translate-x-[45%] -translate-y-[50%]'>
                <img src="https://images.prismic.io/arock-website-2023/d4147892-cb03-4582-af32-326bb109803f_AROCK-_1502.jpg?fm=webp&q=100&fit=crop" className='w-full h-full object-cover object-center scale-x-[-1] opacity-[80%]' />
            </div>

            <div className='.image2 h-full w-full scale-[0.90] absolute top-[50%] left-[36%] -translate-x-[40%] -translate-y-[50%]'>
                <img src="https://images.prismic.io/arock-website-2023/d4147892-cb03-4582-af32-326bb109803f_AROCK-_1502.jpg?fm=webp&q=100&fit=crop" className='w-full h-full object-cover object-center scale-x-[-1] opacity-[60%]' />
            </div>

            <div className='.image2 h-full w-full scale-[0.92] absolute top-[50%] left-[71%] -translate-x-[70%] -translate-y-[50%]'>
                <img src="https://images.prismic.io/arock-website-2023/d4147892-cb03-4582-af32-326bb109803f_AROCK-_1502.jpg?fm=webp&q=100&fit=crop" className='w-full h-full object-cover object-center scale-x-[-1] opacity-[30%]' />
            </div>
            

        </Tilt>

    </div>
  )
}

export default MenuLeft
