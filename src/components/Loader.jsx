import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'

const Loader = ({tl}) => {

    const loaderRef =useRef(null);
    // const tl = gsap.timeline();

  useGSAP(()=>{
    tl.to(loaderRef.current,{
        width : "100%",
        duration : 2.5,
        delay: 0.8,
        ease : 'expo.inOut'
    }) 
    .to(loaderRef.current,{
        opacity : 0
    })
  })

  return (
    <div className='w-screen h-[4px] bg-transparent fixed z-50 '>
        <div ref={loaderRef} className='w-0 h-full bg-white rounded-r-full'></div>
    </div>
  )
}

export default Loader
