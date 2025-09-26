import React from "react";
import NetProfitChart from "./LineChart"; // Chart import karo

// Generic Stat Card
const StatCard = ({ title, value, note, change }) => (
  <div className="rounded-xl  bg-[linear-gradient(180deg,#000000_0%,#000000_20%,#20A804_100%)] border border-[#252B42] p-3 flex flex-col items-center text-center h-40">
    {/* Title */}
    <div className="text-[11px] font-medium tracking-widest text-gray-400 mb-1 mt-2">
      {title}
    </div>

    {/* Value */}
    <div className="text-white text-4xl font-semibold">{value}</div>

    {/* Change + Note */}
    {(change || note) && (
      <div className="flex items-center justify-center gap-2 text-[10px] mb-2">
        {change && (
          <span
            className={`font-medium rounded-md px-2 py-0.5 ${
              change.startsWith("-")
                ? "text-red-400 bg-red-500/20"
                : "text-green-400 bg-green-500/20"
            }`}
          >
            {change}
          </span>
        )}
        {note && <span className="text-gray-500">{note}</span>}
      </div>
    )}

    
  </div>
);

export default function Cards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
      {/* Left stacked cards */}
      <div className="flex flex-col gap-4 ">
        <StatCard
          title="NET (FREE) CASH POSITION"
          value="$7,345,273"
          change="+12%"
          note="vs last 3 months"
        />
        <div className="rounded-xl bg-[linear-gradient(180deg,#000000_0%,#20A804_100%)] border border-[#252B42] p-3 flex flex-col items-center text-center h-40">
          {/* Title */}
          <div className="text-[11px] font-medium tracking-widest text-gray-400 mb-1 mt-8">
            BURN RATE
          </div>

          {/* Value */}
          <div className="text-white text-5xl font-semibold">$1.54M</div>
        </div>
      </div>

      {/* Right big Line Chart card (No sparkline image) */}
      <div className="md:col-span-2">
        <div className="rounded-xl bg-[#090D28] border border-[#252B42] h-[calc(2*10rem+1rem)] w-full p-3">
          <NetProfitChart /> {/* Chart full card ke andar */}
        </div>
      </div>
    </div>
  );
}
