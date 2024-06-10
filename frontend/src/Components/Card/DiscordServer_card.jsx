import React from 'react'

const DiscordServer_card = ({ name, link, logo, description }) => {
  return (
    <>
      <div className='flex gap-4'>
        <img 
        src={logo} 
        alt="" 
        className='w-12'
        />
        <h1> {name} </h1>
        <p> {description} </p>
      </div>
    </>
  )
}

export default DiscordServer_card
