"use client";

import { useCallback, useState } from "react";
import Nav from "./components/Nav";
import Sensor from "./components/Sensor";

export default function Home() {

  const [data, setData] = useState("a")

  setInterval(async () => {
    try {
      const res = await fetch('http://localhost:3000/api/sensor', {
        method: 'GET',
      })
      const data = await res.text()
      setData(data)
    } catch (error) {
      console.error(error)
    }
  }, 1000)


  return (
    <div className="bg-base-100">
      <Nav />
      <Sensor />
      {data}
    </div>
  );
}
