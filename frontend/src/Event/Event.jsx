import React from 'react'
import LogoutButton from '../Components/LogoutButton'

function Event() {
  const userName=localStorage.getItem("name");
  return (
    <main className='flex flex-col items-center bg-custom-gradient h-full'>
      <img className='h-28' src="./iif-nsut-transparent.png" alt="Logo" />
      <div className='flex items-center w-[70%] justify-between'>
        <div className='text-blue-700'>{`Hye 👋 ${userName} !`}</div>
        <LogoutButton/>
      </div>
      <div className='flex flex-col items-center gap-5'>
        <h1 className='text-3xl text-blue-700'>Events</h1>
        <img className='h-72 rounded-lg' src="./IIFPitch-Punch.jpg" alt="" />
      </div>
    </main>
  )
}

export default Event