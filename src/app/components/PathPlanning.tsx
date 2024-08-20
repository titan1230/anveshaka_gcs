import Image from 'next/image'
import React from 'react'
import pp from '@/../public/pp.png'
import { FaBullseye } from 'react-icons/fa'

export default function PathPlanning() {
  return (
    <div className="bg-base-100">
      {/* <div className="card card-compact bg-base-200 m-5"> */}
      {/* <div className="card-body"> */}
      {/* <p className="text-3xl font-bold mb-3">Path Planning</p> */}
      {/* <div className='h-[305px] w-[542px] object-cover overflow-hidden'> */}
      {/* <video width="305" height="542" controls={false} preload="none" autoPlay className='h-[305px] w-[542px]'> */}
      {/* <source src="./v.mp4" type="video/mp4" className='h-[305px] w-[542px]' /> */}
      {/* Your browser does not support the video tag. */}
      {/* </video> */}
      {/* <Image priority src="https://cdn.discordapp.com/attachments/746595636995948614/1203606157340573696/can-you-connect-2-inventory-connectors-together-toms-simple-v0-94wt001q9gma1.png?ex=66446715&is=66431595&hm=655b132e72db35678c63d6b3142afbc35f63cbde1d43d70d3378eeb629c5b407&" alt="Path Planning" width={800} height={600} /> */}
      {/* <Image src={pp} priority alt="pp" height={305} width={542} /> */}

      {/* </div> */}
      {/* </div> */}
      {/* </div> */}

      <div className="card card-compact bg-base-200 m-5">
        <div className="card-body">
          <p className="text-3xl font-bold mb-3">Path Planning</p>
          <img src="http://192.168.254.167:8088/path" alt="Rover Cam Feed" className='h-3/5 pt-1' />
        </div>
      </div>
    </div>
  )
}