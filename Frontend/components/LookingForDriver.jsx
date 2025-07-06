import React from 'react'

const LookingForDriver = (props) => {
  return (
     <div className="relative w-full h-full flex flex-col bg-blue-100 rounded-b-2xl shadow-lg overflow-hidden">
      {/* Close/Back Button */}
      <button
        className="absolute top-3 left-1/2 -translate-x-1/2 bg-blue-200 rounded-full p-2 shadow text-blue-700 hover:bg-blue-300 transition"
        onClick={() => {
          if (props.setConfirmRidePanel) props.setConfirmRidePanel(false);
          if (props.setVehiclePanel) props.setVehiclePanel(true);
        }}
        title="Back"
      >
        <i className="ri-arrow-down-wide-line text-2xl"></i>
      </button>

      <div className="flex flex-col items-center justify-center pt-14 px-6 pb-6 h-full">
        <h3 className="text-2xl font-semibold mb-5 text-blue-800">
          Looking for driver ..
        </h3>

        {/*  Reduced image size */}
        <img
          src=".png"
          alt="Vehicle"
          className="w-32 h-20 object-contain mb-6 rounded-xl shadow" /* was very large */
        />

        <div className="w-full space-y-4">
          {/* Pickup */}
          <div className="flex items-center gap-4 bg-white rounded-xl p-3 shadow border border-blue-100">
            <i className="ri-map-pin-2-fill text-xl text-blue-500"></i>
            <div>
              <h4 className="text-base font-semibold text-blue-800">
                562/11-A
              </h4>
              <p className="text-xs text-gray-500">Kankariya Talab, Bhopal</p>
            </div>
          </div>

          {/* Drop */}
          <div className="flex items-center gap-4 bg-white rounded-xl p-3 shadow border border-blue-100">
            <i className="ri-map-pin-2-fill text-xl text-green-500"></i>
            <div>
              <h4 className="text-base font-semibold text-blue-800">
                562/11-A
              </h4>
              <p className="text-xs text-gray-500">Kankariya Talab, Bhopal</p>
            </div>
          </div>

          {/* Fare */}
          <div className="flex items-center gap-4 bg-white rounded-xl p-3 shadow border border-blue-100">
            <i className="ri-currency-line text-xl text-yellow-500"></i>
            <div>
              <h4 className="text-base font-semibold text-blue-800">₹193.20</h4>
              <p className="text-xs text-gray-500">Cash Payment</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => {
            if (props.setShowLookingForDriver) props.setShowLookingForDriver(false);
            if (props.setShowWaitForDriver) props.setShowWaitForDriver(true);
          }}
          className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold text-lg shadow transition"
        >
          Confirm
        </button>
      </div>
    </div>
  )
}

export default LookingForDriver