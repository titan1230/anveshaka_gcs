"use client";

import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Sensor from "./components/Sensor";
import CamFeed from "./components/CamFeed";
import PathPlanning from "./components/PathPlanning";

export default function Home() {
  const [connected, setConnected] = useState(true);

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

        const d = await res.text();

        if (d === "Error" || res.status !== 200) {
          console.log(res.status);
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
          <PathPlanning />
        </div>
        <div className="w-3/5 h-3/5 items-start">
          <CamFeed />
        </div>
      </div>
    </div>
  );
}
