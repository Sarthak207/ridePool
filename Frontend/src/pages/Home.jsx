import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../../components/LocationSearchPanel';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef(null);
  const pickupRef = useRef(null);
  const destinationRef = useRef(null);
  const panelCloseRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    // You can add your search logic here
  };

  // Close panel if neither input is focused
  const handleBlur = () => {
    setTimeout(() => {
      if (
        document.activeElement !== pickupRef.current &&
        document.activeElement !== destinationRef.current
      ) {
        setPanelOpen(false);
      }
    }, 0);
  };

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, { height: '60%', opacity: 1 });
      gsap.to(panelCloseRef.current, { opacity: 1 });
    } else {
      gsap.to(panelRef.current, { height: '0%', opacity: 0 });
      gsap.to(panelCloseRef.current, { opacity: 0 });
    }
  }, [panelOpen]);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100 overflow-hidden">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          className="h-full w-full object-cover opacity-80"
          src="a2p_london.png"
          alt="Background"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white/20 via-white/5 to-transparent" />
      </div>

      {/* Logo */}
      <img
        className="w-16 absolute left-6 top-6 z-10 drop-shadow"
        src="pngegg.png"
        alt="RidePool Logo"
      />

      {/* Animated Panel at the Top */}
      <div
        ref={panelRef}
        className="absolute top-0 left-0 w-full bg-blue-100 z-10 rounded-b-lg overflow-hidden"
        style={{ height: 0, transition: 'height 0.5s, opacity 0.5s' }}
      >
        <LocationSearchPanel/>
      </div>

      {/* Form at the bottom */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full max-w-xs p-4 bg-white/95 shadow-md rounded-t-lg z-20 border-t border-blue-200">
        <h5
          ref={panelCloseRef}
          onClick={() => setPanelOpen(false)}
          className={`absolute right-6 top-6 text-2xl cursor-pointer transition-opacity duration-300 ${panelOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <i className="ri-arrow-down-wide-line" />
        </h5>
        <h4 className="text-xl font-bold mb-3 text-blue-700 text-center">
          Find a Ride
        </h4>
        <form className="space-y-2" onSubmit={submitHandler}>
          <input
            ref={pickupRef}
            onFocus={() => setPanelOpen(true)}
            onBlur={handleBlur}
            value={pickup}
            onChange={(e) => setPickup(e.target.value)}
            className="bg-blue-50 px-3 py-2 text-base block w-full rounded border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
            type="text"
            placeholder="Add a pickup location (e.g., Hostel, Main Gate)"
          />
          <input
            ref={destinationRef}
            onFocus={() => setPanelOpen(true)}
            onBlur={handleBlur}
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
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