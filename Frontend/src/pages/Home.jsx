import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationSearchPanel from '../../components/LocationSearchPanel';
import VehiclePanel from '../../components/VehiclePanel';
import ConfirmRide from '../../components/ConfirmRide';
import LookingForDriver from '../../components/LookingForDriver';
import WaitForDriver from '../../components/WaitForDriver';

const Home = () => {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [showLocationPanel, setShowLocationPanel] = useState(false);
  const [showVehiclePanel, setShowVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [showLookingForDriver, setShowLookingForDriver] = useState(false);
  const [showWaitForDriver, setShowWaitForDriver] = useState(false);

  const locationPanelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const lookingForDriverRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  // Panel animations
  useGSAP(() => {
    gsap.to(locationPanelRef.current, {
      height: showLocationPanel ? '60%' : '0%',
      opacity: showLocationPanel ? 1 : 0,
      duration: 0.4,
    });
  }, [showLocationPanel]);

  useGSAP(() => {
    gsap.to(vehiclePanelRef.current, {
      height: showVehiclePanel ? '60%' : '0%',
      opacity: showVehiclePanel ? 1 : 0,
      duration: 0.4,
    });
  }, [showVehiclePanel]);

  useGSAP(() => {
    gsap.to(confirmRidePanelRef.current, {
      height: confirmRidePanel ? '60%' : '0%',
      opacity: confirmRidePanel ? 1 : 0,
      duration: 0.4,
    });
  }, [confirmRidePanel]);

  useGSAP(() => {
    gsap.to(lookingForDriverRef.current, {
      height: showLookingForDriver ? '60%' : '0%',
      opacity: showLookingForDriver ? 1 : 0,
      duration: 0.4,
    });
  }, [showLookingForDriver]);

  useGSAP(() => {
    gsap.to(waitingForDriverRef.current, {
      height: showWaitForDriver ? '60%' : '0%',
      opacity: showWaitForDriver ? 1 : 0,
      duration: 0.4,
    });
  }, [showWaitForDriver]);

  const handleInputFocus = () => {
    if (!showVehiclePanel && !confirmRidePanel) {
      setShowLocationPanel(true);
    }
  };

  const handleLocationSelect = () => {
    setShowLocationPanel(false);
    setShowVehiclePanel(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (pickup && destination) {
      setShowLocationPanel(false);
      setShowVehiclePanel(true);
    }
  };

  const handleBackToForm = () => {
    setShowVehiclePanel(false);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100 overflow-hidden">
      {/* Background */}
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

      {/* Location Search Panel */}
      <div
        ref={locationPanelRef}
        className="absolute top-0 left-0 w-full bg-blue-100 z-20 rounded-b-2xl shadow-lg overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        <LocationSearchPanel
          setPanelOpen={setShowLocationPanel}
          setVehiclePanel={setShowVehiclePanel}
          onLocationSelect={handleLocationSelect}
        />
      </div>

      {/* Main Form */}
      {!showVehiclePanel && !confirmRidePanel && !showLookingForDriver && !showWaitForDriver && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 w-full max-w-sm p-5 bg-white rounded-t-2xl shadow-xl border-t-2 border-blue-200 z-10">
          <h4 className="text-2xl font-bold mb-4 text-blue-700 text-center tracking-tight">
            Find Your Ride
          </h4>

          <form className="space-y-3" onSubmit={handleFormSubmit}>
            <input
              onFocus={handleInputFocus}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-blue-50 px-4 py-2 text-base block w-full rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              type="text"
              placeholder="Add a pickup location (e.g., Hostel, Main Gate)"
              autoComplete="off"
            />
            <input
              onFocus={handleInputFocus}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-blue-50 px-4 py-2 text-base block w-full rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              type="text"
              placeholder="Enter your destination (e.g., Library, Canteen)"
              autoComplete="off"
            />
            <button
              type="submit"
              className="w-full py-2 rounded-lg bg-blue-500 text-white font-semibold text-base hover:bg-blue-600 transition"
              disabled={!pickup || !destination}
            >
              Search Ride
            </button>
          </form>

          <div className="mt-4 text-center text-gray-500 text-xs">
            RidePool &mdash; Connecting College Students for Smarter, Greener Rides 🚗
          </div>
        </div>
      )}

      {/* Vehicle Panel */}
      <div
        ref={vehiclePanelRef}
        className="absolute bottom-0 left-0 w-full bg-blue-100 z-20 rounded-b-2xl shadow-lg overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        {showVehiclePanel && !confirmRidePanel && (
          <VehiclePanel
            setConfirmRidePanel={setConfirmRidePanel}
            setVehiclePanel={setShowVehiclePanel}
            onBack={handleBackToForm}
          />
        )}
      </div>

      {/* Confirm Ride Panel */}
      <div
        ref={confirmRidePanelRef}
        className="absolute bottom-0 left-0 w-full bg-blue-100 z-20 rounded-b-2xl shadow-lg overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        {confirmRidePanel && (
          <ConfirmRide
            setConfirmRidePanel={setConfirmRidePanel}
            setVehiclePanel={setShowVehiclePanel}
            setShowLookingForDriver={setShowLookingForDriver} // <-- pass this
          />
        )}
      </div>

      {/* Looking For Driver Panel */}
      <div
        ref={lookingForDriverRef}
        className="absolute bottom-0 left-0 w-full bg-blue-100 z-30 rounded-b-2xl shadow-lg overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        {showLookingForDriver && (
          <LookingForDriver
            setShowLookingForDriver={setShowLookingForDriver}
            setShowWaitForDriver={setShowWaitForDriver} // <-- pass this
          />
        )}
      </div>

      {/* Waiting For Driver Panel */}
      <div
        ref={waitingForDriverRef}
        className="absolute bottom-0 left-0 w-full bg-blue-100 z-40 rounded-b-2xl shadow-lg overflow-hidden"
        style={{ height: 0, opacity: 0 }}
      >
        {showWaitForDriver && (
          <WaitForDriver
            setConfirmRidePanel={setConfirmRidePanel}
            setVehiclePanel={setShowVehiclePanel}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
