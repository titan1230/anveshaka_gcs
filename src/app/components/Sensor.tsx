"use client";

import { useEffect, useState } from "react";

export default function Sensor(props : {connected: boolean}) {

  const [t, setT] = useState([0,0]);

  useEffect(() => {

    const timer = setInterval(() => {
      const t1 = Math.floor(Math.random() * (55 - 50 + 1)) + 50;
      const t2 = Math.floor(Math.random() * (t1 - 6 + 1)) + 6;
      setT([t1, t2]);
    }, 1000);

    return () => clearInterval(timer);
  }, [t])

  return (
    <div className="bg-base-100">
      <div className="card card-compact bg-base-200 m-5">
        <div className="card-body">
          <p className="text-3xl font-bold">Sensor Live Data</p>
          <div className="dataElements ml-5">
            {/* GYRO SENSOR */}
            <div className="flex justify-between">
              <div className="text-lg flex-1">Gyro Angles:</div>
              <div className="text-lg flex-none">X: 50° | Y: 60° | Z: 70°</div>
            </div>
            {/* COMPASS */}
            <div className="flex justify-between">
              <div className="text-lg flex-1">Compass Data:</div>
              <div className="text-lg flex-none">50° | NE</div>
            </div>
            {/* BPM ATM PRESSURE SENSOR */}
            <div className="flex justify-between">
              <div className="text-lg flex-1">ATM Pressure:</div>
              <div className="text-lg flex-none">5500 mPas</div>
            </div>
            {/* TEMP SENSOR */}
            <div className="flex justify-between">
              <div className="text-lg flex-1"> {`Temperature <CORE | ENV>`} :</div>
              <div className="text-lg flex-none">{`${t[0]}° | ${t[1]}°`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}