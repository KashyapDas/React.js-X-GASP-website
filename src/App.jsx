import React from 'react'
import Loader from './components/Loader'
import BlackScreen from './components/BlackScreen'
import gsap from 'gsap'
import PageOne from './components/PageOne'
import PageTwo from './components/PageTwo'

const App = () => {

  const tl = gsap.timeline();

  return (
    <div className='h-screen w-screen overflow-hidden'>
      <Loader tl={tl} />

      <BlackScreen tl={tl} />
      
      <PageOne />

    </div>
  )
}

export default App
