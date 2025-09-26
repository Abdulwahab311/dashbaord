import React from "react";

// Tiny sparkline using SVG for the large card footer
const Sparkline = ({ values = [] }) => {
  const width = 260;
  const height = 40;
  const padding = 0;
  const data = values.length
    ? values
    : [5, 18, 10, 14, 12, 11, 13, 12, 14, 10, 12, 15, 12, 16, 14];
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = Math.max(1, max - min);
  const stepX = (width - padding * 2) / (data.length - 1);

  const points = data.map((v, i) => {
    const x = padding + i * stepX;
    const y = height - padding - ((v - min) / range) * (height - padding * 2);
    return [x, y];
  });

  const path = points
    .map((p, i) => (i === 0 ? `M ${p[0]} ${p[1]}` : `L ${p[0]} ${p[1]}`))
    .join(" ");

  const areaPath = `${path} L ${width} ${height} L 0 ${height} Z`;

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      className="w-full h-10 block"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="sparkFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#22c55e" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#22c55e" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <path d={areaPath} fill="url(#sparkFill)" />
      <path d={path} fill="none" stroke="#22c55e" strokeWidth="2" />
    </svg>
  );
};

const LeadCards = () => {
  return (
    <div className="w-full space-y-4">
      {/* Top cards row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {/* Main metric card */}
        <div className="lg:col-span-2 text-center bg-[#0B0F24] rounded-2xl p-6 shadow-[0_0_0_1px_rgba(42,51,88,0.6)] flex flex-col overflow-hidden">
          <div className="text-white  text-xl font-semibold tracking-wide">
            TOTAL AMOUNT OF LEADS
          </div>
          <div className="text-gray-300 text-[11px] mt-2">GOAL: 2000 LEADS</div>

          <div className="mt-6 text-white text-[96px] leading-none font-bold">
            481
          </div>
          <div className="mt-4 flex justify-center items-center space-x-2 text-[12px]">
            <span className="text-emerald-400 font-semibold">+12.5%</span>
            <span className="text-gray-300">VS LAST MONTH</span>
          </div>

          <div className="relative -mx-6 -mb-6 mt-4 bg-[#0a0e22]">
            <Sparkline />
          </div>
        </div>

        {/* Right small cards */}
        <div className="flex flex-col gap-4">
          <div className="bg-[#0B0F24] text-center rounded-2xl p-6 shadow-[0_0_0_1px_rgba(42,51,88,0.6)]">
            <div className="text-gray-300 text-[12px] mb-2">
              AVERAGE COST PER LEAD
            </div>
            <div className="text-white text-5xl font-extrabold tracking-tight">
              €1.13
            </div>
            <div className="text-emerald-400 text-[12px] mt-2 font-semibold">
              +12.5%
            </div>
          </div>

          <div
            className="rounded-2xl p-6 shadow-[0_0_0_1px_rgba(42,51,88,0.6)]"
            style={{
              background:
                "linear-gradient(180deg, rgba(16,185,129,0.25) 0%, rgba(16,185,129,0.12) 30%, rgba(16,185,129,0.05) 100%)",
            }}
          >
            <div className="text-emerald-300 text-center text-[12px]">
              TOTAL AMOUNT OF LEADS
            </div>
            <div className="text-white text-5xl text-center font-extrabold mt-2">18</div>
          </div>
        </div>
      </div>

      {/* Segmented color bar */}
      <div className="rounded-2xl p-3">
        <div className="h-16 w-full rounded-lg overflow-hidden flex">
          <div
            className="h-full"
            style={{ width: "22%", backgroundColor: "#D34B4B" }}
          />
          <div
            className="h-full"
            style={{ width: "22%", backgroundColor: "#D39A4B" }}
          />
          <div
            className="h-full"
            style={{ width: "22%", backgroundColor: "#10B981" }}
          />
          <div
            className="h-full"
            style={{ width: "22%", backgroundColor: "#7C3AED" }}
          />
          <div
            className="h-full"
            style={{ width: "12%", backgroundColor: "#06B6D4" }}
          />
        </div>
        <div className="mt-3 flex justify-between text-gray-300 text-sm px-1">
          <span>0</span>
          <span>2</span>
          <span>4</span>
          <span>8</span>
          <span>12</span>
          <span>14</span>
        </div>
      </div>
    </div>
  );
};

export default LeadCards;
