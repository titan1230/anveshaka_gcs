import Image from 'next/image'
import React from 'react'
import roverImg from "../../../public/mars.jpg";

export default function CamFeed() {
  return (
    <Image src={roverImg} alt="Rover Cam Feed" className='p-4 h-3/5'/>
  )
}