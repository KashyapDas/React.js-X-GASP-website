import React from 'react'
import Loader from './components/Loader'
import BlackScreen from './components/BlackScreen'
import gsap from 'gsap'
import PageOne from './components/PageOne'
import Menu from './components/Menu'

const App = () => {

  const tl = gsap.timeline();

  return (
    <div className='h-screen w-screen relative overflow-hidden'>
      <Loader tl={tl} />

      <BlackScreen tl={tl} />
      

      <Menu />
      <PageOne />
      

    </div>
  )
}

export default App
