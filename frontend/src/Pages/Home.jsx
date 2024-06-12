import React, { useEffect, useState } from 'react'
import NavBar from '../Components/NavBar'

const Home = () => {
  const [ready, setReady] = useState(false)
  const handleReadyClick = () => {
    setReady(true)
  }

  return (
    <>
      <NavBar />
      <main className='page-section h-screen'>
        <article className={`animated-screen first-screen z-50 bg-white ${ready ? "animation-ready-0" : ''} `}>
          <div className="text-center landingText flex flex-col gap-8">
            <p>A</p>
            <p>NEW EXPERIENCE FOR</p>
            <p>YOU</p>
          </div>
          <button
            className=''
            onClick={handleReadyClick}>READY ?</button>
        </article>
        <article className={`animated-screen second-screen z-40 text-center flex flex-col gap-8 welcomeText bg-white ${ready ? "animation-ready-1" : ''}`}>
          <p className='text-3xl'>WELCOME TO</p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/43/PUBG_Mobile_simple_logo_black.png"
            className='w-96 mx-auto'
            alt=""
          />
          <p className='text-8xl'>GASY COMUNITY</p>
        </article>
        <article className={`animated-screen third-screen z-30 bg-white flex ${ready ? "animation-ready-2" : ''}`}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/43/PUBG_Mobile_simple_logo_black.png"
            className='w-96 m-auto'
            alt=""
          />
        </article>
        <article className={`animated-screen final-screen z-20 bg-white ${ready ? "animation-ready-3" : ''}`}>
          <section>DISCORD SERVER</section>
          <section>SCRIMS SCHEDULE</section>
          <section>EVENT</section>
        </article>
      </main>
    </>
  )
}

export default Home
