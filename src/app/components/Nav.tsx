"use client";

import { FcHighPriority, FcCheckmark } from "react-icons/fc";
import { FaSatellite } from "react-icons/fa6";

import { useState } from "react";
import { Toaster } from "react-hot-toast";

interface Stars {
  "1": number[];
  "2": number[];
  "3": number[];
  "4": number[];
  "5": number[];
}

export default function Nav(props: { connected: boolean }) {

  const [killed, setKilled] = useState(false);

  const [stars, setStars] = useState<Stars>({
    "1": [0, 0],
    "2": [0, 0],
    "3": [0, 0],
    "4": [0, 0],
    "5": [0, 0],
  })

  return (
    <div className="navbar bg-base-100">
      <div><Toaster /></div>
      <div className="navbar-start">
        {props.connected ? <FcCheckmark className="text-2xl mr-6" /> : <FcHighPriority className="mr-6 text-2xl" />}
        {props.connected ? <b className="text-2xl font-mono text-[#4fff48]">Rover Connected</b> : <b className="text-2xl font-mono text-[#ff4f4f]">Rover Disconnected</b>}
      </div>
      <div className="navbar-center">
        <button className="btn btn-accent" onClick={() => (document.getElementById('my_modal_2') as HTMLDialogElement)?.showModal()}>STAR COORDS</button>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            {/* Table with 5 rows and 2 columns */}
            <table className="min-w-full bg-base-200 border border-gray-300 rounded-lg">
              <thead>
                <tr>
                  <th className="py-2 px-4 bg-base-300 border-b text-center">Stars</th>
                  <th className="py-2 px-4 bg-base-300 border-b text-center">Coords</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-base-200">
                  <td className="py-2 px-4 border-b text-center">1</td>
                  <td className="py-2 px-4 border-b text-center">{`X: ${stars["1"][0]}, Y: ${stars["1"][1]}`}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b text-center">2</td>
                  <td className="py-2 px-4 border-b text-center">{`X: ${stars["2"][0]}, Y: ${stars["2"][1]}`}</td>
                </tr>
                <tr className="bg-base-200">
                  <td className="py-2 px-4 border-b text-center">3</td>
                  <td className="py-2 px-4 border-b text-center">{`X: ${stars["3"][0]}, Y: ${stars["3"][1]}`}</td>
                </tr>
                <tr>
                  <td className="py-2 px-4 border-b text-center">4</td>
                  <td className="py-2 px-4 border-b text-center">{`X: ${stars["4"][0]}, Y: ${stars["4"][1]}`}</td>
                </tr>
                <tr className="bg-base-200">
                  <td className="py-2 px-4 border-b text-center">5</td>
                  <td className="py-2 px-4 border-b text-center">{`X: ${stars["5"][0]}, Y: ${stars["5"][1]}`}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <form method="dialog" className="modal-backdrop">
            <button>close</button>
          </form>
        </dialog>
      </div>
      <div className="navbar-end">
        {/* {props.connected ? <p className="mr-6 text-[#4fff48] text-2xl">CONNECTED</p> : <p className="mr-6 text-[#ff4f4f] text-2xl">CONNECTION LOST</p>} */}
        <FaSatellite className="text-2xl mr-6" color={props.connected ? "#4fff48" : "#ff4f4f"} />
      </div>

    </div>
  )
}