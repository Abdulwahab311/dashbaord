import React, { useEffect, useRef, useState } from "react";
import Chart from "../dashboard/Wavechart";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import { areaElementClasses, lineElementClasses } from "@mui/x-charts/LineChart";

// Dummy sparkline data (can be customized per card later)
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

// ✅ NetProfitChart component
const NetProfitChart = ({ className }) => (
  <div
    className={`${className} rounded-lg flex items-center justify-center text-white font-semibold`}
  >
    <Chart />
  </div>
);

// ✅ Stat Card with MUI Sparkline
const StatCard = ({ title, value, note, change, big, bg }) => {
  const { ref, width } = useElementWidth();
  const chartWidth = Math.max(120, width);
  const chartHeight = chartWidth < 200 ? 20 : 26;
  const wrapperStyle = { height: chartHeight };

  return (
    <div
      className={`relative rounded border border-[#252B42] p-3 flex flex-col items-center text-center
      ${big ? "h-46 w-full" : "w-full"}`}
      style={{
        background: bg || "transparent",
      }}
    >
      {/* Title */}
      <div className="text-[7px] font-medium tracking-wider text-gray-400 mb-1 text-center truncate">
        {title}
      </div>

      {/* Value */}
      <div
        className={`text-white ${big ? "text-xl" : "text-base"} font-semibold`}
      >
        {value}
      </div>

      {/* Change + Note */}
      {(change || note) && (
        <div className="flex items-center justify-center gap-1 text-[8px] mt-1">
          {change && (
            <span
              className={`font-medium rounded-md px-1 py-0.5 ${
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

      {/* ✅ Sparkline using MUI */}
      <div
        className="absolute bottom-0 left-0 mx-auto right-0"
        style={wrapperStyle}
      >
        <div ref={ref} className="w-full h-full">
          <SparkLineChart
            data={sparkLineData}
            height={chartHeight}
            width={chartWidth}
            area
            color="#DB2777"
            margin={{ top: 0, bottom: -20, left: -8, right:5 }}
            sx={{
              [`& .${areaElementClasses.root}`]: {
                opacity: 0.2,
                filter: "drop-shadow(0 2px 4px rgba(219, 39, 119, 0.3))",
              },
              [`& .${lineElementClasses.root}`]: {
                strokeWidth: 2,
                filter: "drop-shadow(0 1px 2px rgba(219, 39, 119, 0.4))",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

// ✅ Cards Layout
export default function Cards() {
  return (
    <div className="flex flex-col xl:flex-row gap-3 w-full max-w-full">
      {/* ==== LEFT COLUMN - Net Cash Position ==== */}
      <div className="grid grid-cols-2 gap-2 w-full xl:w-60 flex-shrink-0 grid-rows-3">
        <div className="col-span-2 row-span-2">
          <StatCard
            big
            title="NET (FREE) CASH POSITION"
            value="€7.345.273"
            change="+12%"
            note="vs last 3 months"
          />
        </div>
        <StatCard
          title="NET PROFIT"
          value="€3.345.345"
          change="-5%"
          note="vs last 3 months"
        />
        <StatCard
          title="GROWTH CASH POSITION"
          value="€5.172.595"
          change="+8%"
          note="vs last 3 months"
        />
      </div>

      {/* ==== MIDDLE COLUMN - 6 Financial Cards ==== */}
      <div className="grid grid-cols-2 gap-2 w-full xl:w-60 flex-shrink-0">
        <StatCard
          title="GROSS CASH  (BANK)"
          value="€12.345.345"
          change="+12%"
          note="vs last 3 months"
        />
        <StatCard
          title="TEMPORARY FROZEN CASH"
          value="€3.345.345"
          change="-5%"
          note="vs last 3 months"
          bg="linear-gradient(180deg, rgba(240, 66, 69, 0.52) 0%, rgba(9, 13, 40, 0) 100%)"
        />
        <StatCard
          title="REVENUE"
          value="€5.172.595"
          change="-12%"
          note="vs last 3 months"
          bg="linear-gradient(180deg, rgba(240, 66, 69, 0.52) 0%, rgba(9, 13, 40, 0) 100%)"
        />
        <StatCard
          title="COSTS OF GOODS SOLD "
          value="€11.500.000"
          change="+10%"
          note="vs last 3 months"
        />
        <StatCard
          title="OPERATIONAL COSTS"
          value="€3.192.969"
          change="-15%"
          note="vs last 3 months"
        />
        <StatCard
          title="NET PROFIT MARGIN"
          value="€12.345.345"
          change="-8%"
          note="vs last 3 months"
          bg="linear-gradient(180deg, rgba(240, 66, 69, 0.52) 0%, rgba(9, 13, 40, 0) 100%)"
        />
      </div>

      {/* ==== RIGHT COLUMN - Chart ==== */}
      <div className="flex-1 min-w-0 w-full xl:w-auto">
        <div className="rounded-xl bg-[#090D28] border border-[#252B42] p-3 h-full min-h-[180px] xl:min-h-[240px]">
          <NetProfitChart className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}
