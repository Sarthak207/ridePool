import React from 'react';

const LocationSearchPanel = (props) => {
  const locations = [
    "Flat No. 204, Lotus Residency Sector 15, Navi Mumbai",
    "No. 18, 2nd Cross, Lakshmi Nagar Near City Hospital, Bengaluru",
    "House No. 77, Shanti Vihar, Patna",
    "Plot No. 12, Green Park Colony, Chennai",
  ];

  return (
    <div className="p-4">
      <div className="mb-4 text-center text-blue-700 font-bold text-sm tracking-wide uppercase">
        Suggested Locations
      </div>
      {locations.map((location, idx) => (
        <div
          onClick={() => {
            props.setPanelOpen(false);
            props.setVehiclePanel(true);
            if (props.onLocationSelect) props.onLocationSelect(location);
          }}
          className="flex items-center gap-3 cursor-pointer bg-white hover:bg-blue-50 border border-blue-100 rounded-xl px-3 py-3 mb-3 shadow transition-all duration-200"
          key={idx}
        >
          <span className="bg-blue-200 h-11 w-11 flex rounded-full items-center justify-center shadow text-blue-600 border-2 border-blue-400">
            <i className="ri-map-pin-fill text-2xl"></i>
          </span>
          <div className="flex-1">
            <h4 className="font-semibold text-blue-800 text-base leading-snug">
              {location}
            </h4>
          </div>
          <i className="ri-arrow-right-s-line text-blue-400 text-2xl"></i>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
