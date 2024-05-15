"use client";

import { FcHighPriority, FcCheckmark, FcAlarmClock, FcFullBattery, FcDeleteColumn } from "react-icons/fc";
import { FaSatellite } from "react-icons/fa6";

import { useState } from "react";
import Counter from "./Counter";
import toast, { Toaster } from "react-hot-toast";

export default function Nav(props: { connected: boolean }) {

  const [battery, setBattery] = useState(100);
  const [killed, setKilled] = useState(false);

  return (
    <div className="navbar bg-base-100">
      <div><Toaster /></div>
      <div className="navbar-start">
        {props.connected ? <FcCheckmark className="text-2xl mr-6" /> : <FcHighPriority className="mr-6 text-2xl" />}
        {props.connected ? <b className="text-2xl font-mono text-[#4fff48]">Rover Connected</b> : <b className="text-2xl font-mono text-[#ff4f4f]">Rover Disconnected</b>}
      </div>
      <div className="navbar-center">
        { killed ? <button className="btn btn-error text-xl no-animation"> {killed ? "ROVER KILLED" : ""} </button> : ""}
      </div>
      <div className="navbar-end">
        {props.connected ? <p className="mr-6 text-[#4fff48] text-2xl">CONNECTION STABLE</p> : <p className="mr-6 text-[#ff4f4f] text-2xl">CONNECTION LOST</p>}
        <FaSatellite className="text-2xl mr-6" color={props.connected ? "#4fff48" : "#ff4f4f"} />
        {props.connected ? <FcFullBattery className="text-2xl mr-3" title="Battery %" /> : <FcDeleteColumn className="text-2xl mr-3" title="LOST !!!" />}
        <div className="pr-2 tooltip tooltip-error tooltip-bottom flex hover:tooltip-open items-center justify-center" data-tip="error">
          <FcAlarmClock className="text-2xl mr-2" />
          <Counter c={props.connected} />
        </div>
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-[#1d232a]">
          <h3 className="font-bold text-lg text-center">WARNING</h3>
          <p className="pt-4">THIS WILL TERMINATE THE THINGY</p>
          <p className="pb-4">PROCEED WITH CAUTION</p>
          <br />
          <div className="flow-root">
            <button className="btn btn-error float-left" onClick={() => {
              if (document) {
                (document.getElementById('my_modal_1') as HTMLFormElement).close();
              }
              
              const t = toast.loading('Working...', { position : 'bottom-right' });
              fetch('http://localhost:4561/kill', { cache: "no-store", method: 'GET' })
                .then(response => {
                  if (response.ok) {
                    toast.success('Process Killed', { id: t });
                  } else {
                    toast.error('Error in Killing' , { id: t });
                  }
                })
                .catch((error) => {
                  toast.error('Error in Killing' , { id: t });
                });

            }}>KILL</button>
            <button className="btn btn-success float-right" onClick={() => {
              if (document) {
                (document.getElementById('my_modal_1') as HTMLFormElement).close();
              }
            }}>CANCEL</button>
          </div>

        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>

    </div>
  )
}