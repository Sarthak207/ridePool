import React from 'react';

const VehiclePanel = ({ onBack, setConfirmRidePanel, setVehiclePanel }) => {
  const vehicles = [
    {
      id: 1,
      name: 'JustGo',
      image: 'sports.png',
      time: '2 mins away',
      description: 'Affordable, compact rides',
      price: '₹193.20',
      rating: 4.8,
      rides: 120
    },
    {
      id: 2,
      name: 'PoolSedan',
      image: 'sedan.png',
      time: '5 mins away',
      description: 'Comfortable, shared rides',
      price: '₹150.00',
      rating: 4.9,
      rides: 85
    },
    {
      id: 3,
      name: 'QuickBike',
      image: 'bike.png',
      time: '1 min away',
      description: 'Fast, solo rides',
      price: '₹99.00',
      rating: 4.7,
      rides: 200
    }
  ];

  const handleVehicleSelect = (vehicle) => {
    if (setVehiclePanel) setVehiclePanel(false);
    if (setConfirmRidePanel) setConfirmRidePanel(true);
  };

  return (
    <div className="w-full h-full flex flex-col bg-blue-100 rounded-b-2xl shadow-lg overflow-hidden">
      {/* Header with Back Button */}
      <div className="flex items-center justify-between p-4 border-b border-blue-100 bg-blue-50">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors"
        >
          <i className="ri-arrow-left-line text-xl"></i>
          <span className="font-medium">Back</span>
        </button>
        <h3 className="text-lg font-bold text-blue-700 tracking-wide">
          Choose Your Ride
        </h3>
        <div className="w-16"></div>
      </div>
      {/* Vehicle Cards */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {vehicles.map((vehicle) => (
          <div
            key={vehicle.id}
            onClick={() => handleVehicleSelect(vehicle)}
            className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm hover:shadow-md border border-blue-200 hover:border-blue-300 transition-all duration-300 cursor-pointer"
          >
            <div className="flex-shrink-0">
              <img
                className="h-14 w-14 object-contain rounded-lg bg-white p-2"
                src={vehicle.image}
                alt={vehicle.name}
              />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h4 className="font-bold text-blue-800 text-lg">
                  {vehicle.name}
                </h4>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-green-600 font-medium">
                    {vehicle.time}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mb-2">{vehicle.description}</p>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                  <i className="ri-star-fill text-yellow-400 text-sm"></i>
                  <span className="text-sm font-medium text-gray-700">
                    {vehicle.rating}
                  </span>
                </div>
                <span className="text-xs text-gray-500">
                  ({vehicle.rides}+ rides)
                </span>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <h2 className="text-xl font-bold text-blue-700">
                {vehicle.price}
              </h2>
              <button 
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  handleVehicleSelect(vehicle);
                }}
              >
                Select
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* Footer */}
      <div className="p-4 bg-blue-50 border-t border-blue-200">
        <div className="flex items-center justify-center gap-6 text-xs text-gray-600">
          <div className="flex items-center gap-1">
            <i className="ri-shield-check-line text-green-500"></i>
            <span>Safe & Verified</span>
          </div>
          <div className="flex items-center gap-1">
            <i className="ri-time-line text-blue-500"></i>
            <span>Real-time Tracking</span>
          </div>
          <div className="flex items-center gap-1">
            <i className="ri-customer-service-2-line text-purple-500"></i>
            <span>24/7 Support</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehiclePanel;
