import React, { useRef } from 'react'
import { FaRegPlayCircle } from "react-icons/fa";
import style from "./style.module.css"
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';



const Home = () => {

  // you should gave the delay greater than 2.7

  // const headingRef = useRef(null);
  const tl = gsap.timeline();

  useGSAP(()=>{
    gsap.from(".iconR",{
      opacity : 0,
      delay : 5,
      duration : 0.4,
    })
    tl.from(".mainHeading h2",{
      y : "90%",
      delay : 3.5,
      duration : 0.5,
      stagger : 0.2,
    })
    tl.from(".subHeading",{
        y : "100%",
        duration : 0.6,
    })
  })


  return (
    <div className='bg-transparent z-30 overflow-hidden'>
        <div  className={`${style.gilroyHeavy} mainHeading font-black text-[25vw] uppercase flex absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] overflow-hidden`}>
            <h2>A</h2>
            <h2>r</h2>
            <h2>o</h2>
            <h2>c</h2>
            <h2>k</h2>
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
        <div className={`iconR ${style.gilroyHeavy} text-4xl rounded-full border-4 border-solid border-white w-12 h-12 flex items-center justify-center absolute top-[33%] right-[4%] translate-x-[4%] translate-y-[33%] opacity-100`}>R</div>
    </div>
  )
}

export default Home
