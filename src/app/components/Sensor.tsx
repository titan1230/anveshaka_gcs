"use client";

export default function Sensor() {
  return (
    <div className="bg-base-100">
      <div className="card card-normal bg-base-200 m-5 w-2/5">
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
              <div className="text-lg flex-none">50° | 55°</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
/*      <div className="grid grid-cols-3 gap-4 m-5 bg-base-100">
<div className="flex justify-between">
    <div className="text-2xl">Gyro Data:</div>
    <div className="text-2xl">X: 0.5</div>
</div>
*/