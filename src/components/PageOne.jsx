import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, {useRef} from 'react'
import Navbar from "./Navbar";
import Home from "./Home"


const PageOne = () => {

  const mainDivRef = useRef(null);

  useGSAP(() => {
    gsap.from(mainDivRef.current, {
      scale: 1.4,
      delay: 2.7,
      duration: 2.2,
      transformOrigin: 'center center',
      overflow: 'hidden' 
    })
  })

  return (
    <div className='h-screen w-screen relative top-0 left-0 overflow-hidden page1'>
          
        <div ref={mainDivRef} className='bg-[url(https://images.prismic.io/arock-website-2023/d4147892-cb03-4582-af32-326bb109803f_AROCK-_1502.jpg?fm=webp&q=100&fit=crop)] bg-no-repeat bg-cover bg-center z-20 h-full w-full'></div>
        <Navbar />
        <Home />
    </div>
  )
}

export default PageOne;
