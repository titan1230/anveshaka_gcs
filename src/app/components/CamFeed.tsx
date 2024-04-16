import Image from 'next/image'
import React from 'react'
import roverImg from "../../../public/mars.jpg";

export default function CamFeed() {
  return (
    <div className='m-4'>
      <Image src={roverImg} alt="Rover Cam Feed" className='h-3/5'/>
    </div>
  )
}