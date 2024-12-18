import React, { useRef } from 'react'
import style from './style.module.css'
import { useRecoilState } from 'recoil'
import { menuAtom } from '../store/menuAtom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Navbar = () => {

  const [menuRead, menuFnc] = useRecoilState(menuAtom);

  const menuHandler = ()=>{
    menuFnc(true);
  }

  useGSAP(() => {
   if(menuRead) {
       // enter if true
       gsap.to(".menu", {
          height: "100%",
          duration: 1.6,
          delay : 0.1,
          opacity : 100,
          display : "flex",
          ease: 'back.inOut'
       })
   }
   else {
       // enter if false
       gsap.to(".menu", {
           height: "0%",
           duration: 1.3,
           opacity : 0,
           display : "none",
           ease: 'back.inOut'
        })
   }
}, [menuRead]);

  return (
    <div className='flex justify-between px-9 py-3 bg-transparent absolute top-0 left-0 w-full overflow-hidden'>
      <h1 className={`${style.gilroyRegular} font-bold text-2xl cursor-pointer uppercase`}>Logo</h1>
      <h1 onClick={menuHandler} className={`${style.gilroyRegular} font-semibold text-2xl cursor-pointer`}>Menu</h1>
    </div>
  )
}

export default Navbar
