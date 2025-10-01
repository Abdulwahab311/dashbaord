import React from "react";

// ✅ Generic Stat Card
const StatCard = ({ title, value, note, change, className }) => (
  <div
    className={`rounded-2xl border border-[#252B42] flex flex-col items-center text-center h-40 justify-between ${className}`}
  >
    {/* Title */}
    <div className="text-[18px]  font-medium tracking-widest text-gray-200 pt-3 px-4 truncate">
      {title}
    </div>

    {/* Value centered vertically */}
    <div className="flex-1 w-full flex items-center justify-center">
      <div className="text-white md:text-6xl text-xl font-semibold truncate px-2">
        {value}
      </div>
    </div>

    {/* Change + Note at bottom */}
    {(change || note) && (
      <div className="flex items-center justify-center gap-1 sm:gap-2 text-[18px] sm:text-[18px] pb-3 px-2">
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
          <span className="text-gray-500 truncate max-w-[100px] sm:max-w-none">
            {note}
          </span>
        )}
      </div>
    )}
  </div>
);

// ✅ Highlight Card (for middle one)
const HighlightCard = ({ title, value }) => (
  <div className="rounded-2xl bg-gradient-to-b from-[#F04245] to-[rgba(240,66,69,0)] h-40 flex flex-col text-center items-center justify-between shadow-[0_0_24px_rgba(240,66,69,0.25)]">
    <div className="text-[18px] font-medium tracking-widest text-white/90 pt-3 px-2 uppercase truncate">
      {title}
    </div>
    <div className="flex-1 w-full flex items-center justify-center">
      <div className="text-white text-6xl sm:text-6xl font-semibold tracking-wide px-2">
        {value}
      </div>
    </div>
    <div className="pb-3" />
  </div>
);

// ✅ Main Layout
export default function Cards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 w-full items-stretch">
      <StatCard title="TOTAL PROJECTS" value="6" className="bg-gradient-to-b from-[#090D28] to-[rgba(9,13,40,0)]" />
      <StatCard title="FORECASTED COSTS" value="4.6M" className="bg-gradient-to-b from-[#090D28] to-[rgba(9,13,40,0)]" />

      {/* Middle highlighted card */}
      <HighlightCard title="CURRENT COSTS" value="4.9M" />

      <StatCard title="PLANNED" value="202" className="bg-gradient-to-b from-[#090D28] to-[rgba(9,13,40,0)]" />
      <StatCard title="CURRENT DURATION" value="159" className="bg-gradient-to-b from-[#090D28] to-[rgba(9,13,40,0)]" />

      {/* Extra card */}
      <StatCard
        title="RAN OUT STEPS"
        value="2"
        className="bg-gradient-to-b from-[#F04245] to-[rgba(240,66,69,0)]"
      />
    </div>
  );
}
