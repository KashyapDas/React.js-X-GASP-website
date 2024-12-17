import React from 'react'
import style from './style.module.css'

const Navbar = () => {
  return (
    <div className='flex justify-between px-9 py-3 bg-transparent z-30 absolute top-0 left-0 w-full overflow-hidden'>
      <h1 className={`${style.gilroyRegular} font-bold text-2xl cursor-pointer uppercase`}>Logo</h1>
      <h1 className={`${style.gilroyRegular} font-semibold text-2xl cursor-pointer`}>Menu</h1>
    </div>
  )
}

export default Navbar
