"use client";

import { useEffect, useState } from "react";

export default function Sensor(props: { connected: boolean }) {

  const [t, setT] = useState(70);
  const [gyro, setGyro] = useState(["1", "1", "1"]);
  const [compass, setCompass] = useState(50);
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
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const intervalId = setInterval(fetchData, 1000);

    // Cleanup function to clear the interval
    return () => clearInterval(intervalId);
  }, []);


  return (
    <div className="bg-base-100">
      <div className="card card-compact bg-base-200 m-5">
        <div className="card-body">
          <p className="text-3xl font-bold">Sensor Live Data</p>
          <div className="dataElements ml-5">
            <div className="ml-5 mr-5">
              {/* GYRO SENSOR */}
              <div className="flex justify-between">
                <div className="text-lg flex-1">Roll | Pitch | Yaw:</div>
                <div className="text-lg flex-none">{`X: ${data.roll}° | Y: ${data.pitch}° | Z: ${data.yaw}°`}</div>
              </div>
              {/* COMPASS */}
              <div className="flex justify-between">
                <div className="text-lg flex-1">Compass Data:</div>
                <div className="text-lg flex-none">{`${compass}° | NE`}</div>
              </div>
              {/* BPM ATM PRESSURE SENSOR */}
              <div className="flex justify-between">
                <div className="text-lg flex-1">ATM Pressure:</div>
                <div className="text-lg flex-none">1006 mPas</div>
              </div>
              {/* TEMP SENSOR */}
              <div className="flex justify-between">
                <div className="text-lg flex-1"> {`Temperature`} :</div>
                <div className="text-lg flex-none">{`${t}°`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}