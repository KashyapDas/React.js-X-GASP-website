import React, { useRef } from 'react'
import { FaRegPlayCircle } from "react-icons/fa";
import style from "./style.module.css"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const Home = () => {

  // you should gave the delay greater than 2.7

  const headingRef = useRef(null);
  const tl = gsap.timeline();

  useGSAP(()=>{
    tl.from(headingRef.current,{
      y : "80%",
      delay : 3.5,
      duration : 0.8
    })
    tl.from(".subHeading",{
        y : "100%",
        delay : 0.5,
        duration : 1.2,
        stagger : 0.2,
    })
  })


  return (
    <div className='bg-transparent z-30 overflow-hidden'>
        <div  className={`${style.gilroyHeavy} font-black text-[25vw] uppercase inline absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] overflow-hidden`}>
          <h1 ref={headingRef}>Arock</h1>
        </div>

        <div className={`${style.gilroyRegular} font-black flex items-center justify-between absolute top-[78%] left-[47%] -translate-x-[47%] -translate-y-[78%] w-[85%]`}>
            <h1 className='overflow-hidden text-3xl flex'>
                  <h1 className='subHeading flex'><FaRegPlayCircle className='mr-1 cursor-pointer'/>Play <br/> The Film</h1>
            </h1>
            <h1 className='text-3xl overflow-hidden'>
                  <h1 className='subHeading'>Creator <br/> Curator</h1>
            </h1>
            <h1 className='text-3xl overflow-hidden'>
                  <h1 className='subHeading'>San Diego <br/> Los Angeles</h1>
            </h1>
        </div>
        <div className={`${style.gilroyHeavy} text-4xl rounded-full border-4 border-solid border-white w-12 h-12 flex items-center justify-center absolute top-[33%] right-[5%] translate-x-[5%] translate-y-[33%]`}>R</div>
    </div>
  )
}

export default Home
