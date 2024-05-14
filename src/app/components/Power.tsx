"use client";

export default function Power(props: { connected: boolean }) {
  return (

    <div className="bg-base-100">
      <div className="card card-compact bg-base-200 m-5">
        <div className="card-body">
          <p className="text-3xl font-bold card-title">Power Statistics</p>
          <div className="ml-5 mr-5">
            <div className="flex justify-between">
              <div className="text-lg flex-1">Battery Voltage:</div>
              <div className="text-lg flex-none">14.8V</div>
            </div>
            <div className="flex justify-between">
              <div className="text-lg flex-1">Battery Temp:</div>
              <div className="text-lg flex-none">50℃</div>
            </div>
            <div className="flex justify-between">
              <div className="text-lg flex-1">Battery Ampere:</div>
              <div className="text-lg flex-none">5A</div>
            </div>
            <div className="flex justify-between">
              <div className="text-lg flex-1">Motor Power:</div>
              <div className="text-lg flex-none">500W</div>
            </div>
            <div className="flex justify-between">
              <div className="text-lg flex-1"> {`Temperature <CORE | ENV>`} :</div>
              <div className="text-lg flex-none">60℃</div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}


/*
<div className="card w-96 bg-primary text-primary-content">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn">Buy Now</button>
    </div>
  </div>
</div>

*/

/*
<div className="bg-base-100">
      <div className="card card-compact bg-base-200 m-5">
        <div className="card-body">
          <p className="text-3xl font-bold card-title">Power Statistics</p>
          <div className="dataElements">
            {/* Battery Voltage *}
    //         <div className="flex justify-between">
    //           <div className="text-lg flex-1">Battery Voltage:</div>
    //           <div className="text-lg flex-none">14.8V</div>
    //         </div>
    //         {/* Battery Temp *}
    //         <div className="flex justify-between">
    //           <div className="text-lg flex-1">Battery Temp:</div>
    //           <div className="text-lg flex-none">50℃</div>
    //         </div>
    //         {/* Battery Ampere *}
    //         <div className="flex justify-between">
    //           <div className="text-lg flex-1">Battery Ampere:</div>
    //           <div className="text-lg flex-none">5A</div>
    //         </div>
    //         {/* Motor Power *}
    //         <div className="flex justify-between">
    //           <div className="text-lg flex-1">Motor Power:</div>
    //           <div className="text-lg flex-none">500W</div>
    //         </div>
    //         {/* Motor Temp *}
    //         <div className="flex justify-between">
    //           <div className="text-lg flex-1"> {`Temperature <CORE | ENV>`} :</div>
    //           <div className="text-lg flex-none">60℃</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
/*/