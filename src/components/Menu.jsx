import React from 'react'
import MenuLeft from './MenuLeft';
import MenuRight from './MenuRight';

const Menu = () => {
  return (
    <div className='w-screen h-screen bg-violet-400 z-50 absolute top-0 left-0 flex'>
        <MenuLeft />
        <MenuRight />
    </div>
  )
}

export default Menu; 
