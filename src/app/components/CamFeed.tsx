import Image from 'next/image'
import React from 'react'
import roverImg from "../../../public/mars.jpg";

export default function CamFeed() {
  return (
    <div className='m-4'>
      <img src="http://192.168.137.237:8088/" alt="Rover Cam Feed" className='h-3/5 pt-1' />
      {/* <video width="890" height="504" controls={false} preload="none" autoPlay className='h-[504px] w-[890px]'>
        <source src="./final.mp4" type="video/mp4" className='h-[504px] w-[890px]' />

        Your browser does not support the video tag.
      </video> */}
    </div>
  )
}

// 890 504