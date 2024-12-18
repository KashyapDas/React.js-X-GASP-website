import React from 'react'
import MenuLeft from './MenuLeft';
import MenuRight from './MenuRight';

const Menu = () => {


  return (
    <div className='w-screen h-[0%] bg-violet-400 absolute bottom-0 left-0 flex menu '>
        <MenuLeft />
        <MenuRight />
    </div>
  )
}

export default Menu; 
