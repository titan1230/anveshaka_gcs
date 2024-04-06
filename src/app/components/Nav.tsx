"use client";

import { FcHighPriority, FcCheckmark, FcAlarmClock, FcFullBattery } from "react-icons/fc";
import { FaSatellite } from "react-icons/fa6";

import { useState } from "react";

export default function Nav() {

  const [connected, setConnected] = useState(false);
  const [battery, setBattery] = useState(100);


  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <FcHighPriority className="text-2xl mr-6" />
        <b className="text-2xl font-mono text-[#ffffff]">Rover Connected</b>
      </div>
      <div className="flex-none">
        <p className="mr-6 text-[#4fff48] text-2xl">CONNECTION STABLE</p>
        <FaSatellite className="text-2xl mr-6" />
        <FcFullBattery className="text-2xl mr-6" title="Battery %"/>
        <FcAlarmClock className="text-2xl mr-6" />
      </div>
    </div>
  );
}