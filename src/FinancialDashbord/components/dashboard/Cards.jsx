import React, { useEffect, useRef, useState } from "react";
import Gauge from "./Gauge";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import { areaElementClasses, lineElementClasses } from "@mui/x-charts/LineChart";

// Dummy sparkline data (you can customize per card later)
const sparkLineData = [120, 135, 110, 145, 130, 160, 140, 125, 155, 170, 150, 100];

// ✅ Hook for responsive chart sizing
function useElementWidth() {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const update = () => setWidth(el.clientWidth || 0);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return { ref, width };
}

// ✅ Generic Stat Card
const StatCard = ({ title, value, note, change }) => {
  const { ref, width } = useElementWidth();
  const chartWidth = Math.max(100, width);
  const chartHeight = chartWidth < 200 ? 20 : 24;
  const wrapperStyle = { height: chartHeight };

  return (
    <div className="rounded-lg bg-[#090D28] border border-[#252B42] flex flex-col items-center text-center h-40">
      {/* Title */}
      <div className="text-[12px] sm:text-[13px] font-medium tracking-widest text-gray-400 mt-2 sm:mt-6 truncate">
        {title}
      </div>

      {/* Value */}
      <div className="text-white mt-4 text-base sm:text-xl font-semibold truncate">
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

      {/* ✅ Sparkline using MUI */}
      <div
        className="mt-auto w-full flex items-end rounded-b-md overflow-hidden justify-center h-6"
        style={wrapperStyle}
      >
        <div ref={ref} className="w-full h-full">
          <SparkLineChart
            data={sparkLineData}
            height={chartHeight}
            width={chartWidth}
            area
            color="#00D394"
            margin={{ top: 0, bottom: -6, left: -8, right: -8 }}
            sx={{
              [`& .${areaElementClasses.root}`]: {
                opacity: 0.15,
                filter: "drop-shadow(0 2px 4px rgba(0, 211, 148, 0.3))",
              },
              [`& .${lineElementClasses.root}`]: {
                strokeWidth: 2,
                filter: "drop-shadow(0 1px 2px rgba(0, 211, 148, 0.4))",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

// ✅ Main Layout
export default function Cards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 w-full">
      <StatCard
        title="NET (FREE) CASH POSITION"
        value="$7,345,273"
        change="+12%"
        note="vs last 3 months"
      />
      <StatCard
        title="BURN RATE"
        value="$31,987"
        change="+8%"
        note="vs last 3 months"
      />

      {/* Gauge Card */}
      <div className="rounded-lg bg-[#090D28] border border-[#252B42] flex flex-col items-center justify-center sm:p-4 h-40">
        <Gauge value={10.8} min={0} max={20} />
      </div>

      <StatCard
        title="ANNUAL NET PROFIT"
        value="$7,345,273"
        change="+5%"
        note="vs last 3 months"
      />
      <StatCard
        title="ANNUAL REVENUE"
        value="$31,987"
        change="+3%"
        note="vs last 3 months"
      />
    </div>
  );
}
