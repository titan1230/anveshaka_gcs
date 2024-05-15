"use client";

import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Sensor from "./components/Sensor";
import CamFeed from "./components/CamFeed";
import Power from "./components/Power";
import PathPlanning from "./components/PathPlanning";
import Image from "next/image"
import d from "@/../public/d.png"

export default function Home() {
  const [data, setData] = useState<{ data: { num: number }, status: number }>({ data: { num: 0 }, status: 0 });
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/ping', {
          method: 'GET',
          cache: "no-store"
        });

        if (!res.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await res.text();

        if ( data === "Error" || res.status !== 200 ) {
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
          <Power connected={connected} />
          <PathPlanning />
        </div>
        <div className="w-3/5 h-3/5 items-start">
          <CamFeed />
          <div className="flex flex-wrap ml-4 mr-4 h-56 gap-[9.81px] mt-5 pt-4 justify-center">  
            {/* <div className="bg-black h-[290px] w-[290px] flex-shrink-0"></div>
            <div className="bg-black h-[290px] w-[290px] flex-shrink-0"></div>
            <div className="bg-black h-[290px] w-[290px] flex-shrink-0"></div>   */}
            <Image src={d} alt="d" />
          </div>
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
