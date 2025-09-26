import React from "react";

// ✅ Generic Stat Card
const StatCard = ({ title, value, note, change, className }) => (
  <div
    className={`rounded-2xl border border-[#252B42] flex flex-col items-center text-center h-40 ${className}`}
  >
    {/* Title */}
    <div className="text-[12px] sm:text-[10px] font-medium tracking-widest text-gray-200 mt-4 sm:mt-5 truncate">
      {title}
    </div>

    {/* Value */}
    <div className="text-white text-base sm:text-3xl font-semibold truncate">
      {value}
    </div>

    {/* Change + Note */}
    {(change || note) && (
      <div className="flex items-center justify-center gap-1 sm:gap-2 text-[9px] sm:text-[13px] mb-1">
        {change && (
          <span
            className={`font-medium rounded-md px-1 ${
              change.startsWith("-")
                ? "text-red-400 bg-[#FF000024]"
                : "text-green-400 bg-[#00D39424]"
            }`}
          >
            {change}
          </span>
        )}
        {note && (
          <span className="text-gray-500 truncate max-w-[80px] sm:max-w-none">
            {note}
          </span>
        )}
      </div>
    )}
  </div>
);

// ✅ Main Layout
export default function Cards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 w-full">
      <StatCard title="TOTAL PROJECTS" value="6" className="bg-gradient-to-b from-[#090D28] to-[rgba(9,13,40,0)]" />
      <StatCard title="FORECASTED COSTS" value="4.6M" className="bg-gradient-to-b from-[#090D28] to-[rgba(9,13,40,0)]" />

      {/* 3rd Card with Red Gradient */}
      <StatCard
        title="CURRENT COSTS"
        value="4.9M"
        className="bg-gradient-to-b from-[#F04245] to-[rgba(240,66,69,0)]"
      />

      <StatCard title="PLANNED" value="202" className="bg-gradient-to-b from-[#090D28] to-[rgba(9,13,40,0)]" />
      <StatCard title="CURRENT DURATION" value="159" className="bg-gradient-to-b from-[#090D28] to-[rgba(9,13,40,0)]" />

      {/* 6th Card with Red Gradient */}
      <StatCard
        title="EXTRA CARD"
        value="123"
        className="bg-gradient-to-b from-[#F04245] to-[rgba(240,66,69,0)]"
      />
    </div>
  );
}
