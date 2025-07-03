import React, { useState } from 'react';
import {useGSAP} from '@gsap/react';
import gsap from 'gsap';

const Home = () => {
  const [pickup,setPickup]= useState('')
  const [destination,setDestination]= useState('')
  const [panelOpen, setPanelOpen]= useState(false)
  const panelRef= useRef(null)

  const submitHandler=(e)=>{
    e.preventDefault()
  }
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100 overflow-hidden">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          className="h-full w-full object-cover opacity-80"
          src="a2p_london.png"
          alt="Background"
        />
        {/* Make overlay much lighter */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-white/5 to-transparent" />
      </div>

      {/* Logo */}
      <img
        className="w-16 absolute left-6 top-6 z-10 drop-shadow"
        src="pngegg.png"
        alt="RidePool Logo"
      />

      {/* Bottom Form */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-sm p-4 bg-white/95 shadow-md rounded-t-lg z-10 border-t border-blue-200">
        <h4 className="text-xl font-bold mb-3 text-blue-700 text-center">
          Find a Ride
        </h4>
        <form className="space-y-2" onSubmit={(e)=>{
          submitHandler(e)
        }}>
          <input
            onClick={()=>{
              setPanelOpen(true)
            }}
            value={pickup}
            onChange={(e)=>{
              setPickup(e.target.value)
            }}
            className="bg-blue-50 px-3 py-2 text-base block w-full rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
            type="text"
            placeholder="Add a pickup location (e.g., Hostel, Main Gate)"
          />
          <input
            value={destination}
            onChange={(e)=>{
              setPickup(e.target.value)
            }}
            className="bg-blue-50 px-3 py-2 text-base block w-full rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
            type="text"
            placeholder="Enter your destination (e.g., Library, Canteen)"
          />
          <button
            type="submit"
            className="w-full py-2 rounded bg-blue-500 text-white font-semibold text-base hover:bg-blue-600 transition"
          >
            Search Ride
          </button>
        </form>
        <div className="mt-3 text-center text-gray-500 text-xs">
          RidePool &mdash; Connecting College Students for Smarter, Greener Rides 🚗
        </div>
      </div>
    </div>
  );
};

export default Home;