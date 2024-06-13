"use client";

import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Sensor from "./components/Sensor";
import CamFeed from "./components/CamFeed";
import Power from "./components/Power";
import PathPlanning from "./components/PathPlanning";
import Image from "next/image"
import d from "@/../public/d.png"
import g1 from "@/../public/g1.png"
import g2 from "@/../public/g2.png"
import g4 from "@/../public/g4.png"

export default function Home() {
  const [data, setData] = useState<{
    "roll": number,
    "pitch": number,
    "yaw": number,
    "accel_x": number,
    "accel_y": number,
    "accel_z": number,
    "gyro_x": number,
    "gyro_y": number,
    "gyro_z": number,
    "mag_x": number,
    "mag_y": number,
    "mag_z": number
  }>({
    "roll": 0,
    "pitch": 0,
    "yaw": 0,
    "accel_x": 0,
    "accel_y": 0,
    "accel_z": 0,
    "gyro_x": 0,
    "gyro_y": 0,
    "gyro_z": 0,
    "mag_x": 0,
    "mag_y": 0,
    "mag_z": 0
  });
  const [connected, setConnected] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/telm', {
          method: 'GET',
          cache: "no-store"
        });

        if (!res.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await res.json();

        setData(data);

        if (data === "Error" || res.status !== 200) {
          setConnected(false);
        } else {
          setConnected(true);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setConnected(false);
      }
    };

    const intervalId = setInterval(fetchData, 1000);

    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="bg-base-100">
      <Nav connected={connected} />

      <div className="flex items-start flex-wrap">
        <div className="w-2/5 h-auto">
          <Sensor connected={connected} />
          {/* <Power connected={connected} /> */}
          {/* <PathPlanning /> */}
        </div>
        <div className="w-3/5 h-3/5 items-start">
          <CamFeed />

          {/* <div className="container grid grid-cols-2 gap-x-5 gap-y-5 pr-4">
            <Image src={g1} alt="d" width={440} height={330} className="w-[430px] h-[320px] ml-4" />
            <Image src={g2} alt="e" width={440} height={330} className="w-[430px] h-[320px] ml-3" />
            <Image src={g4} alt="f" width={440} height={330} className="w-[430px] h-[320px] ml-3" />
            <div className="box rounded-lg text-white flex items-center justify-center p-8">D</div>
          </div> */}

          {/* <div className="flex flex-wrap ml-4 mr-4 h-56 gap-[9.81px] mt-5 pt-4 justify-center">  
            <div className="bg-black h-[290px] w-[290px] flex-shrink-0 object-contain overflow-hidden">
              <Image src={g1} alt="g1" className="justify-center"/>
            </div>
            <div className="bg-black h-[290px] w-[290px] flex-shrink-0"></div>
            <div className="bg-black h-[290px] w-[290px] flex-shrink-0"></div>  
            // {/* <Image src={d} alt="d" /> */ }
          {/* </div> */}
        </div>
      </div>
      <div>
      </div>
      {/* <div className="flex items-start flex-wrap p-5 gap-10">
        <div className="w-[58%] h-[500px] bg-black"></div>
        <div className="w-[39.32%] h-[500px] bg-black"></div>
      </div> */}

    </div>
  );
}
