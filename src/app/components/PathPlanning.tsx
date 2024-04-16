import Image from 'next/image'
import React from 'react'

export default function PathPlanning() {
  return (
    <div className="bg-base-100">
      <div className="card card-compact bg-base-200 m-5">
        <div className="card-body">
        <p className="text-3xl font-bold mb-3">Path Planning</p>
          <Image priority src="https://cdn.discordapp.com/attachments/746595636995948614/1203606157340573696/can-you-connect-2-inventory-connectors-together-toms-simple-v0-94wt001q9gma1.png?ex=6624c315&is=66124e15&hm=61bc2505aca3c1784b4c744a25ff92e6fd1449d315e23c1d4425a7d6b003591b&" alt="Path Planning" width={800} height={600} />
        </div>
      </div>
    </div>
  )
}