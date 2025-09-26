import React, { useEffect, useRef, useState } from "react";
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { areaElementClasses, lineElementClasses } from '@mui/x-charts/LineChart';
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

// Static dummy data for spark lines
const sparkLineData = [120, 135, 110, 145, 130, 160, 140, 125, 155, 170, 150, 165];

const SectionHeader = ({ title }) => (
  <div className="w-full rounded-t-lg bg-gradient-to-r from-[#000000] to-[#ED5E23] text-white text-xs font-semibold tracking-widest px-3 py-2">
    {title}
  </div>
);

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

const StatCard = ({ title, value, note, extraTop = false }) => {
  const { ref, width } = useElementWidth();
  // Account for -mx-3 bleed (12px each side)
  const chartWidth = Math.max(140, width);
  const chartHeight = chartWidth < 220 ? 20 : 24;
  return (
    <div className="rounded-lg bg-gradient-to-b from-[#000000] to-[#242a4c] border border-[#3b4467] p-3 overflow-hidden h-29 flex flex-col">
      <div className="text-[10px] tracking-widest text-gray-300 uppercase font-medium leading-tight mb-1">{title}</div>
      <div className="text-white text-xl font-semibold mb-1">{value}</div>
      <div className="text-[9px] text-gray-400 mb-2">{note}</div>
      <div className={`relative -mx-3 -mb-3 overflow-hidden rounded-b-lg ${extraTop ? 'mt-6' : ''} mt-auto`} style={{ height: chartHeight }}>
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

function GaugeChartLikeCards({ value = 10.8, min = 0, max = 20 }) {
  const clamped = Math.max(min, Math.min(value, max));
  const valueMax = max;
  return (
    <div className="relative flex items-center justify-center w-full max-w-[420px] mx-auto">
      <div className="w-full mt-1 relative" style={{ aspectRatio: '2 / 1' }}>
        <Gauge
          value={clamped}
          valueMax={valueMax}
          startAngle={-110}
          endAngle={110}
          sx={{
            [`& .${gaugeClasses.valueText}`]: {
              display: 'none'
            },
            [`& .${gaugeClasses.valueArc}`]: {
              stroke: '#00D351',
              strokeWidth: 2,
              strokeLinecap: 'round'
            },
            [`& .${gaugeClasses.referenceArc}`]: {
              stroke: '#9E9FA7',
              opacity: 0.6,
              strokeWidth: 2,
              strokeLinecap: 'round'
            }
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <div className="font-extrabold" style={{ fontSize: '28px', color: '#00D351' }}>{clamped}</div>
          <div style={{ fontSize: '16px', fontWeight: 600, color: '#9E9FA7' }}>{valueMax}</div>
        </div>
      </div>
    </div>
  );
}

function Funnel() {
  const steps = [
    { label: "LEADS", value: 1200, width: 92 },
    { label: "CALLS", value: 521, width: 75 },
    { label: "MEETINGS", value: 62, width: 62 },
    { label: "CONTRACTS SENT", value: 50, width: 52 },
    { label: "CLOSES", value: 10, width: 46 }
  ];

  return (
    <div className="relative mt-4 ">
      {steps.map((step) => {
        const ml = (100 - step.width) / 2; // center each step
        return (
          <div key={step.label} className="relative" style={{ marginLeft: `${ml}%`, width: `${step.width}%` }}>
            <div
              className="bg-gradient-to-r from-[#000000] to-[#00D394] relative h-10 text-white flex items-center px-4 rounded-md shadow-[0_8px_18px_rgba(0,0,0,0.35)]"
              
            >
              <span className="text-[10px] tracking-widest opacity-90">{step.label}</span>
              <span className="ml-auto text-sm font-semibold  text-white px-4 py-1 rounded-md ">
                {step.value}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function Sales() {
  return (
    <div className="grid grid-cols-12 gap-4 text-white ">
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
      <div className="col-span-12 lg:col-span-4">
        <SectionPanel title="EFFECTIVITY">
          <div className="space-y-4">
            <div>
              <div className="text-[10px] tracking-widest text-gray-300 mb-2">AVG. SALES CYCLE DURATION</div>
              <div className="rounded-lg bg-[#0A0F1F] px-4 flex items-center justify-center">
                <GaugeChartLikeCards value={10.8} min={0} max={20} />
              </div>
            </div>

            <div className="rounded-lg bg-gradient-to-l  -mt-10">
              <Funnel />
            </div>
          </div>
        </SectionPanel>
      </div>

      {/* Potential */}
      <div className="col-span-12 lg:col-span-4">
        <SectionPanel title="POTENTIAL">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 h-29">
            <StatCard title={<><span>OCCUPANCY</span><br />RATE</>} value="99%" note="vs last 3 months" />
            <StatCard title={<><span>WIN</span><br />RATE</>} value="82%" note="vs last 3 months" />
          </div>
        </SectionPanel>
      </div>
    </div>
  );
}
