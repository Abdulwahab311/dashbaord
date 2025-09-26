import React from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import Gauge from "./Guage";

const SectionHeader = ({ text, bg }) => (
  <div
    className={`w-full rounded-t-lg text-white text-xs font-semibold tracking-widest px-3 py-2 ${bg}`}
  >
    {text}
  </div>
);
const SparkMini = ({
  data = [5, 20, 8, 30, 15, 40, 10, 35, 25, 45, 20, 50, 15, 55, 30],
}) => (
  <Sparklines data={data} limit={0} width={260} height={36} margin={4}>
    <SparklinesLine color="#FF3B61" />
  </Sparklines>
);
const StatCard = ({ title, value, note, change, header }) => (
  <div className="rounded-lg overflow-hidden border border-[#252B42] flex flex-col h-full min-h-[120px]">
    {/* Card Header (optional) */}
    {header && (
      <div
        className={`px-2 py-1 text-[8px] sm:text-[10px] font-semibold tracking-wider text-white ${header}`}
      >
        <div className="truncate">{title}</div>
      </div>
    )}

    {/* Card Body */}
    <div className="bg-gradient-to-b from-[#000000] to-[#090D28] p-2 sm:p-3 flex flex-col flex-1">
      {!header && (
        <div className="text-[8px] sm:text-[10px] tracking-widest text-gray-300 mb-1 leading-tight line-clamp-2 min-h-[16px]">
          {title.length > 20 ? `${title.substring(0, 17)}...` : title}
        </div>
      )}

      <div className="text-white text-sm sm:text-xl font-semibold mb-1 truncate flex-shrink-0">
        {value}
      </div>

      <div className="flex items-center justify-start gap-1 sm:gap-2 text-[7px] sm:text-[9px] mb-2 min-h-[16px]">
        {change && (
          <span
            className={`font-medium rounded-md px-1 shrink-0 ${
              change.startsWith("-")
                ? "text-red-400 bg-[#FF000024]"
                : "text-green-400 bg-[#00D39424]"
            }`}
          >
            {change}
          </span>
        )}
        {note && (
          <span className="text-gray-400 truncate text-[6px] sm:text-[8px]">
            {note.length > 15 ? `${note.substring(0, 12)}...` : note}
          </span>
        )}
      </div>

      {/* Sparkline replace image */}
      <div className="h-6  -mx-2 sm:-mx-5 -mb-4  mt-auto flex items-center">
        <SparkMini />
      </div>
    </div>
  </div>
);

const SectionPanel = ({ header, headerBg, children }) => (
  <div className="rounded-lg overflow-hidden border border-[#252B42] bg-[#090D28] h-full flex flex-col">
    <SectionHeader text={header} bg={headerBg} />
    <div className="p-2 flex-1 overflow-auto">{children}</div>
  </div>
);

export default function Marketing() {
  return (
    <div className="grid grid-cols-12 px-2 py-2 gap-4 text-white items-stretch">
      {/* MARKETING */}
      <div className="col-span-12 lg:col-span-4 h-full">
        <SectionPanel
          header="MARKETING"
          headerBg="bg-gradient-to-r from-black to-[#FFCC8B]"
        >
          {/* Row 1: Activity / Efficiency / Potential */}
          <div className="grid grid-cols-3 gap-2  items-stretch text-center mb-2">
            {/* Activity */}
            <div className="flex flex-col h-full">
              <div className="text-[10px] sm:text-xs font-semibold tracking-widest text-gray-300 mb-1">
                ACTIVITY
              </div>
              <StatCard
                title="TOTAL MARKETING SPENT"
                value="€5,172,595"
                change="+8%"
                note="vs last 3 months"
              />
            </div>

            {/* Efficiency */}
            <div className="flex flex-col h-full">
              <div className="text-[10px] sm:text-xs font-semibold tracking-widest text-gray-300 mb-1">
                EFFICIENCY
              </div>
              <StatCard
                title="MARKETING EFFICIENCY RATIO"
                value="80%"
                change="-3%"
                note="vs last 3 months"
              />
            </div>

            {/* Potential */}
            <div className="flex flex-col h-full">
              <div className="text-[10px] sm:text-xs font-semibold tracking-widest text-gray-300 mb-1">
                POTENTIAL
              </div>
              <StatCard
                title="POTENTIAL UNTAPPED"
                value="€2,500,000"
                change="+6%"
                note="vs last 3 months"
              />
            </div>
          </div>

          {/* Row 2: Extra Stats */}
          <div className="grid grid-cols-3 gap-2 items-stretch">
            <StatCard
              title="MARKETING FTE"
              value="€5,172,595"
              change="+8%"
              note="vs last 3 months"
            />
            <StatCard
              title="COST PER LEAD"
              value="80%"
              change="-3%"
              note="vs last 3 months"
            />
            <StatCard
              title="POTENTIAL MARKETING GROWTH"
              value="€2,500,000"
              change="+6%"
              note="vs last 3 months"
            />
          </div>
        </SectionPanel>
      </div>

      {/* SALES */}
      <div className="col-span-12 lg:col-span-4 h-full">
        <SectionPanel
          header="SALES"
          headerBg="bg-gradient-to-r from-black to-[#FFCC8B]"
        >
          <div className="grid grid-cols-3 gap-2 mb-2 items-stretch text-center">
            {/* Activity */}
            <div className="flex flex-col h-full">
              <div className="text-[10px] sm:text-xs font-semibold tracking-widest text-white mb-1">
                ACTIVITY
              </div>
              <StatCard
                title="TOTAL SALES SPENT"
                value="€3,192,969"
                change="+6%"
                note="vs last 3 months"
              />
            </div>

            {/* Efficiency */}
            <div className="flex flex-col h-full">
              <div className="text-[10px] sm:text-xs font-semibold tracking-widest text-white mb-1">
                EFFICIENCY
              </div>
              <div className="rounded-lg overflow-hidden border border-[#252B42] bg-[#090D28] flex items-center justify-center p-3 min-h-[120px] flex-1">
                <Gauge value={10.8} min={0} max={20} />
              </div>
            </div>

            {/* Potential */}
            <div className="flex flex-col h-full">
              <div className="text-[10px] sm:text-xs font-semibold tracking-widest text-white mb-1">
                POTENTIAL
              </div>
              <StatCard
                title="OCCUPANCY"
                value="$2,002,095"
                change="-2%"
                note="vs last 3 months"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 items-stretch">
            <StatCard
              title="SALES FTE"
              value="€3,192,969"
              change="-6%"
              note="vs last 3 months"
            />
            <StatCard
              title="CONVERSION RATE"
              value="27%"
              change="-1%"
              note="vs last 3 months"
            />
            <StatCard
              title="REVENUE/LEAD"
              value="€1,250"
              change="-2%"
              note="vs last 3 months"
            />
          </div>
        </SectionPanel>
      </div>

      {/* SCALING */}
      <div className="col-span-12 lg:col-span-4 h-full">
        <SectionPanel
          header="SCALING"
          headerBg="bg-gradient-to-r from-[#000000] to-[#FFFFFF]"
        >
          <div className="grid grid-cols-3 gap-2 items-stretch">
            <StatCard
              title="SCALING COSTS (COS)"
              value="€3,192,969"
              change="+6%"
              note="vs last 3 months"
            />
            <StatCard
              title="NET PROFIT MARGIN"
              value="27%"
              change="-1%"
              note="vs last 3 months"
            />
            <StatCard
              title="CUSTOMER ACQ. COSTS"
              value="$2,002,095"
              change="-2%"
              note="vs last 3 months"
            />

            <div className="col-span-3 rounded-lg overflow-hidden border border-[#252B42] bg-[#090D28] flex items-center justify-center p-3 min-h-[150px] flex-1">
              <Gauge value={10.8} min={0} max={20} />
            </div>
          </div>
        </SectionPanel>
      </div>
    </div>
  );
}