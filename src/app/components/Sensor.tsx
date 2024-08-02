"use client";

import { useEffect, useState } from "react";

interface SensorData {
  temperature: number,
  accelerometer: number[],
  gyroscope: number[],
  magnetometer: number[],
  euler_angle: number[],
  quaternion: number[],
  linear_acceleration: number[],
  gravity: number[]
}

export default function Sensor(props: { connected: boolean }) {

  const [data, setData] = useState({
    temperature: 0,
    accelerometer: [0, 0, 0],
    gyroscope: [0, 0, 0],
    magnetometer: [0, 0, 0],
    euler_angle: [0, 0, 0],
    quaternion: [0, 0, 0, 0],
    linear_acceleration: [0, 0],
    gravity: [0, 0, 0]
  })

  useEffect(() => {
    const socket = new WebSocket("ws://192.168.137.237:8765")

    socket.onmessage = (event) => {

      try {
        const data: SensorData = JSON.parse(event.data);
        setData(data);

      } catch (e) { }

      return () => {
        socket.close()
      }
    }
  }, [])


  return (
    <div className="bg-base-100">
      <div className="card card-compact bg-base-200 m-5">
        <div className="card-body">
          <p className="text-3xl font-bold">Sensor Live Data</p>
          <div className="dataElements ml-5">
            <div className="ml-5 mr-5">
              {/* GYRO SENSOR */}
              <div className="flex justify-between">
                <div className="text-lg flex-1">Gyroscope Data:</div>
                <div className="text-lg flex-none">{`X: ${data.gyroscope[0].toFixed(2)}`}<sup>c/s</sup>{` | Y: ${data.gyroscope[1].toFixed(2)}`}<sup>c/s</sup>{` | Z: ${data.gyroscope[2].toFixed(2)}`}<sup>c/s</sup></div>
              </div>
              {/* COMPASS */}
              <div className="flex justify-between">
                <div className="text-lg flex-1">Magnetometer Data:</div>
                <div className="text-lg flex-none">{`X: ${data.magnetometer[0].toFixed(2)}T | Y: ${data.magnetometer[1].toFixed(2)}T | Z: ${data.magnetometer[2].toFixed(2)}T`}</div>
              </div>
              {/* TEMP SENSOR */}
              <div className="flex justify-between">
                <div className="text-lg flex-1"> {`Temperature`} :</div>
                <div className="text-lg flex-none">{`${data.temperature.toFixed(2)}°`}</div>
              </div>
              {/* ACCELEROMETER */}
              <div className="flex justify-between">
                <div className="text-lg flex-1">Accelerometer Data:</div>
                <div className="text-lg flex-none">{`X: ${data.accelerometer[0].toFixed(2)}m/s² | Y: ${data.accelerometer[1].toFixed(2)}m/s² | Z: ${data.accelerometer[2].toFixed(2)}m/s²`}</div>
              </div>
              {/* EULER ANGLE */}
              <div className="flex justify-between">
                <div className="text-lg flex-1">Euler Angle:</div>
                <div className="text-lg flex-none">{`X: ${data.euler_angle[0].toFixed(2)}° | Y: ${data.euler_angle[1].toFixed(2)}° | Z: ${data.euler_angle[2].toFixed(2)}°`}</div>
              </div>
              {/* QUATERNION */}
              <div className="flex justify-between">
                <div className="text-lg flex-1">Quaternion:</div>
                <div className="text-lg flex-none">{`X: ${data.quaternion[0].toFixed(2)} | Y: ${data.quaternion[1].toFixed(2)} | Z: ${data.quaternion[2].toFixed(2)} | W: ${data.quaternion[3].toFixed(2)}`}</div>
              </div>
                {/* LINEAR ACCELERATION */}
                <div className="flex justify-between">
                  <div className="text-lg flex-1">Linear Acceleration:</div>
                  <div className="text-lg flex-none">{`X: ${data.linear_acceleration[0].toFixed(2)}m/s² | Y: ${data.linear_acceleration[1].toFixed(2)}m/s²`}</div>
                </div> 
              {/* GRAVITY */}
              <div className="flex justify-between">
                <div className="text-lg flex-1">Gravity:</div>
                <div className="text-lg flex-none">{`X: ${data.gravity[0].toFixed(2)}m/s² | Y: ${data.gravity[1].toFixed(2)}m/s² | Z: ${data.gravity[2].toFixed(2)}m/s²`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}