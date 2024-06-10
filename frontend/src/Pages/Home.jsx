import React from 'react'
import NavBar from '../Components/NavBar'

const Home = () => {
  return (
    <>
      <NavBar />
      <main className='page-section h-screen'>
        <article className='animated-screen first-screen'>
          <div className="">
            <p>A</p>
            <p>NEW EXPERIENCE FOR</p>
            <p>YOU</p>
          </div>
          <button>READY ?</button>
        </article>
        <article className='animated-screen second-screen'>
          <p>WELCOME</p>
          <p>TO</p>
        </article>
        <article className="animated-screen third-screen">
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/PUBG_Mobile_simple_logo_black.png"
            className='w-20'
            alt=""
          />
          <p>GASY COMUNITY</p>
        </article>
        <article className='animated-screen fourth-screen'>
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/43/PUBG_Mobile_simple_logo_black.png"
            className='w-20'
            alt=""
          />
        </article>
        <article className='animated-screen final-screen'>
          <section>DISCORD SERVER</section>
          <section>SCRIMS SCHEDULE</section>
          <section>EVENT</section>
        </article>
      </main>
    </>
  )
}

export default Home
