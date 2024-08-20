import React from 'react'

export default function CamFeed() {
  return (
    // <div className='m-4'>
    //   <img src="http://192.168.254.167:8088/feed" alt="Rover Cam Feed" className='h-3/5 pt-1' />
    //   {/* <video width="890" height="504" controls={false} preload="none" autoPlay className='h-[504px] w-[890px]'>
    //     <source src="./final.mp4" type="video/mp4" className='h-[504px] w-[890px]' />

    //     Your browser does not support the video tag.
    //   </video> */}
    // </div>

    <div className="bg-base-100">
      <div className='card card-compact bg-base-200 m-5'>
        <div className='card-body'></div>
        <p className="text-3xl font-bold pl-3">Cam Feed</p>
        <div className="dataElements ml-5">
          <img src="http://192.168.254.167:8088/feed" alt="Rover Cam Feed" className='pr-5 pb-5 w-[880px]' />
        </div>
      </div>
    </div>
  )
}

// 890 504