import React from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from "recharts";
import OrgChart from "./OrgChart";
import OrgPiechart from "./OrgPiechart";

// Chart settings
const RINGS = 8;
const RING_THICKNESS = 8;
const SLICE_VALUE = 12.5; // 8 equal slices
const RING_BG = "#F7F0E7";
const SEPARATOR = "#1B2142";

const sectors = [
  { name: "MANAGEMENT", color: "#E45757", depth: 8, percentage: 36 },
  { name: "MARKETING", color: "#F4C04B", depth: 6, percentage: 36 },
  { name: "SALES", color: "#7E9850", depth: 5, percentage: 36 },
  { name: "DEVELOPMENT", color: "#B7CAE8", depth: 9, percentage: 36 },
  { name: "RECRUITMENT", color: "#F6D777", depth: 6, percentage: 36 },
  { name: "DELIVERY", color: "#D07A3C", depth: 7, percentage: 36 },
  { name: "CUSTOMER SERVICE", color: "#B7CAE8", depth: 8, percentage: 36 },
  { name: "AFTER SALES", color: "#E3CDBE", depth: 4, percentage: 36 },
];

const departments = sectors.map((s) => ({
  name: s.name,
  value: SLICE_VALUE,
  percentage: s.percentage,
}));

// Compact Department Card (equal width fix)
const DepartmentCard = ({ name, value, delta = "+2%" }) => (
  <div className="rounded-lg p-2 bg-gradient-to-b from-[#000000] to-[#090D28] shadow text-center w-full">
    <div className="text-[10px] text-white font-semibold uppercase mb-1 truncate">
      {name}
    </div>
    <div className="flex items-center justify-center gap-1.5">
      <span className="text-white text-sm font-bold">{value}%</span>
      <span className="text-[8px] px-1 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-400/20">
        {delta}
      </span>
    </div>
  </div>
);

// Custom Tooltip Renderer
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-[#252A51] border border-[#D9DFE6]/20 rounded-lg p-2 text-white text-[clamp(9px,2.5vw,10px)]">
        <div className="font-semibold">{data.name}</div>
        <div>Percentage: {data.percentage}%</div>
      </div>
    );
  }
  return null;
};

const Departments = () => {
  return (
    <div className="text-white w-full overflow-x-hidden mb-5">
      {/* Row: OrgChart | Multi-ring Pie + Cards | PieChartComponent */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 items-start">
        {/* Left: OrgChart */}
        <div className="rounded-xl p-2">
          <OrgChart />
        </div>

        {/* Middle: Multi-ring Pie + Cards */}
        <div className="rounded-xl mt-2 h-[18rem] p-2 bg-[#252A51] flex flex-col sm:flex-row gap-2 relative">
          {/* Title - Positioned at top */}
          <div className="absolute top-1 left-0 right-0 text-center z-10">
            <h2 className="text-white text-[10px] font-semibold tracking-widest uppercase">
              DEPARTMENTS AND PROCESSES OPTIMISATION
            </h2>
          </div>

          {/* Chart */}
          <div className="w-full sm:w-1/2 relative pt-6">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip content={<CustomTooltip />} />
                {[...Array(RINGS)].map((_, ringIndex) => {
                  const inner = ringIndex * RING_THICKNESS;
                  const outer = inner + RING_THICKNESS;
                  return (
                    <Pie
                      key={`ring-${ringIndex}`}
                      data={departments}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={inner}
                      outerRadius={outer}
                      startAngle={90}
                      endAngle={450}
                      stroke={SEPARATOR}
                      strokeWidth={0.4}
                    >
                      {sectors.map((sector, idx) => (
                        <Cell
                          key={`cell-${ringIndex}-${idx}`}
                          fill={
                            ringIndex < sector.depth ? sector.color : RING_BG
                          }
                        />
                      ))}
                    </Pie>
                  );
                })}
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Cards in 2x4 grid */}
          <div className="w-full sm:w-1/2 grid grid-cols-2 sm:grid-cols-2 gap-2 justify-center items-center pt-6">
            {sectors.map((dept) => (
              <DepartmentCard
                key={dept.name}
                name={dept.name}
                value={dept.percentage}
              />
            ))}
          </div>
        </div>
        {/* Right: PieChartComponent */}
        <div className="rounded-xl p-2">
          <OrgPiechart />
        </div>
      </div>
    </div>
  );
};

export default Departments;
