import React, { useRef } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Loader from './components/Loader'
import BlackScreen from './components/BlackScreen'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const App = () => {

  const tl = gsap.timeline();
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
    <div className='overflow-x-hidden'>
      <Loader tl={tl} />

      <BlackScreen tl={tl} />
      

      <div className='h-screen w-screen relative top-0 left-0 overflow-hidden page1'>
          
        <div ref={mainDivRef} className='bg-[url(https://images.prismic.io/arock-website-2023/d4147892-cb03-4582-af32-326bb109803f_AROCK-_1502.jpg?fm=webp&q=100&fit=crop)] bg-no-repeat bg-cover bg-center z-20 h-full w-full'></div>
        <Navbar />
        <Home />
      </div>

      <div className='page2 h-screen w-screen bg-green-500'>

      </div>
    
    </div>
  )
}

export default App
