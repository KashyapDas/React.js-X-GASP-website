import React from 'react'
import style from './style.module.css'

const MenuRight = () => {
  return (
    <div className='bg-[#1A1A1A] w-[35%] h-full'>

    {/* This is the close button */}
      <div className='w-full h-[5%]'> 
        <h1 className={`${style.gilroyRegular} uppercase text-xs font-extralight text-right pr-5 pt-3 mt-1 cursor-pointer hover:text-sm origin-center transition-all ease-in-out duration-75`}>Close</h1>
      </div>

      <h1 className={`${style.gilroyRegular} text-2xl font-semibold mt-10`}>Logo</h1>

      {/* This is the menu's options */}

      <div className={`bg-zinc-700 options ${style.gilroyHeavy} text-5xl uppercase font-extralight mt-28`}>
        <h1 className='ml-16 cursor-pointer'>About</h1>
        <h1 className='ml-16 cursor-pointer '>Story</h1>
        <h1 className='ml-16 cursor-pointer'>Projects</h1>
        <h1 className='ml-16 cursor-pointer'>Releases</h1>

      </div>


    </div>
  )
}

export default MenuRight
