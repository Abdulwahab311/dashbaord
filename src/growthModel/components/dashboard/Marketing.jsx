import React from "react";
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { areaElementClasses, lineElementClasses } from '@mui/x-charts/LineChart';
import { useEffect, useRef, useState } from 'react';

// Static dummy data for spark lines
const sparkLineData = [120, 135, 110, 145, 130, 160, 140, 125, 155, 170, 150, 165];

// Measure container width to make sparkline responsive on small screens
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

const SectionHeader = ({ title }) => (
  <div className="w-full rounded-t-lg bg-gradient-to-r from-[#000000] to-[#ED5E23] text-white text-xs font-semibold tracking-widest px-3 py-1">
    {title}
  </div>
);

const StatCard = ({ title, value, note, extraTop = false }) => {
  const { ref, width } = useElementWidth();
  // Account for -mx-3 bleed (12px each side) so the line reaches edges
  const chartWidth = Math.max(140, width);
  const chartHeight = chartWidth < 220 ? 20 : 24;
  const wrapperStyle = { height: chartHeight };
  return (
    <div className="rounded-lg bg-gradient-to-b from-[#000000] to-[#242a4c] border border-[#3b4467] p-3 overflow-hidden h-29 flex flex-col">
      <div className="text-[10px] tracking-widest text-gray-300 uppercase font-medium leading-tight mb-1">{title}</div>
      <div className="text-white text-xl font-semibold mb-1">{value}</div>
      <div className="text-[9px] text-gray-400 mb-2">{note}</div>
      <div className={`relative -mx-3 -mb-3 overflow-hidden rounded-b-lg ${extraTop ? 'mt-6' : ''} mt-auto`} style={wrapperStyle}> 
        <div ref={ref} className="w-full h-full">
          <SparkLineChart
          data={sparkLineData}
          height={chartHeight}
          width={chartWidth}
          area
          color="#DB2777"
            margin={{ top: 0, bottom: -6, left: -8, right: -8 }}
          sx={{
            [`& .${areaElementClasses.root}`]: { 
              opacity: 0.2,
              filter: 'drop-shadow(0 2px 4px rgba(219, 39, 119, 0.3))'
            },
            [`& .${lineElementClasses.root}`]: { 
              strokeWidth: 2,
              filter: 'drop-shadow(0 1px 2px rgba(219, 39, 119, 0.4))'
            },
          }}
          />
        </div>
      </div>
    </div>
  );
};

const SectionPanel = ({ title, children }) => (
  <div className="rounded-lg overflow-hidden border border-[#252B42] bg-[#0B1020]">
    <SectionHeader title={title} />
    <div className="p-3">
      {children}
    </div>
  </div>
);

export default function Marketing() {
  return (
    <div className="grid grid-cols-12 gap-2 text-white">
      {/* Activity */}
      <div className="col-span-12 lg:col-span-4">
        <SectionPanel title="ACTIVITY">
          <div className="grid grid-cols-2 gap-3">
            <StatCard title="TOTAL MARKETING SPENT" value="$340,231" note="vs last 3 months" />
            <StatCard title="REVENUE ATTR TO MARKETING" value="24%" note="vs last 3 months" />
            <StatCard title="MARKETING FTE" value="2 FTE" note="vs last 3 months" extraTop />
            <StatCard title="% OF TOTAL FTE'S IN MARKETING" value="20%" note="vs last 3 months" />
          </div>
        </SectionPanel>
      </div>

      {/* Effectivity */}
      <div className="col-span-12 lg:col-span-4 ">
        <SectionPanel title="EFFECTIVITY">
          <div className="grid grid-cols-2 gap-3">
            <StatCard title="NEW REVENUE GENERATED" value="$523,531" note="vs last 3 months" />
            <StatCard title="MARKETING EFFECIENCY RATIO" value="4.23" note="vs last 3 months" />
            <StatCard title="COST PER LEAD " value="$142.12" note="vs last 3 months" extraTop />
            <StatCard title="RETURN ON INVESTMENT" value="4.23" note="vs last 3 months" />
          </div>
        </SectionPanel>
      </div>

      {/* Potential (no inner cards, fixed size) */}
      <div className="col-span-12 lg:col-span-4">
        <SectionPanel title="POTENTIAL">
          <div className="rounded-lg  h-[245px]" />
        </SectionPanel>
      </div>
    </div>
  );
}
