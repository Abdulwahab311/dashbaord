import React, { useState } from "react";
import PerformanceChart from "../components/PerformanceChart";
import TotalDeals from "../components/TotalDeals";
import Portfolio from "../components/Portfolio";
import PieCharts from "../components/PieChats";
import Tabs from "../../BusinessModel/components/Tabs";
import EffectivelyChart from "../components/EffectivelyChart";

// --- Dropdown with toggle ---
const Dropdown = ({ options, selected, onChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Selected button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center space-x-1 bg-[#1a1f3d] px-2 py-1 rounded text-white text-sm"
      >
        <span>{selected}</span>
        <span className="text-[10px]">▼</span>
      </button>

      {/* Dropdown menu */}
      {open && (
        <div className="absolute left-0 mt-1 w-32 bg-[#1a1f3d] rounded shadow-lg z-10">
          {options.map((opt) => (
            <div
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false); // close after selection
              }}
              className={`px-3 py-1 cursor-pointer text-sm ${
                selected === opt ? "bg-[#2a2f4d] text-white" : "text-gray-300"
              } hover:bg-[#2a2f4d]`}
            >
              {opt}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const BusinessModelDashboard = () => {
  const [selected, setSelected] = useState("Weekly"); // default Weekly

  return (
    <>
      {/* Top Bar with dropdown */}
      <div className="flex justify-between items-center mb-2">
        <Dropdown
          options={["Weekly", "Monthly", "Annual"]}
          selected={selected}
          onChange={setSelected}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
        <PerformanceChart />
        <TotalDeals />
        <Portfolio />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 mt-1">
        <PieCharts />
        <EffectivelyChart />
      </div>

      <Tabs />
    </>
  );
};

export default BusinessModelDashboard;
