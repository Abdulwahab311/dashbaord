import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { month: "Jan", zorg: 3800, industrie: 2000, other: 1200 },
  { month: "Feb", zorg: 4200, industrie: 2200, other: 1400 },
  { month: "Mar", zorg: 4600, industrie: 2400, other: 1600 },
  { month: "Apr", zorg: 5000, industrie: 2600, other: 1800 },
  { month: "May", zorg: 5400, industrie: 2800, other: 2000 },
  { month: "Jun", zorg: 5800, industrie: 3000, other: 2200 },
  { month: "Jul", zorg: 6200, industrie: 3200, other: 2400 },
  { month: "Aug", zorg: 6600, industrie: 3400, other: 2600 },
  { month: "Sep", zorg: 7000, industrie: 3600, other: 2800 },
  { month: "Oct", zorg: 6500, industrie: 3300, other: 2500 },
  { month: "Nov", zorg: 6000, industrie: 3000, other: 2300 },
  { month: "Dec", zorg: 6000, industrie: 3000, other: 2300 },
];

const LeadAountChart = () => {
  return (
    <div className="w-full bg-[#090D28] rounded-2xl p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-lg font-semibold">LEAD AMOUNT GOAL</h2>
        <div className="flex items-center space-x-3 text-[10px]">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-[#3B82F6]"></div>
            <span className="text-gray-300">HEALTHCARE DEALS</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-[#8B5CF6]"></div>
            <span className="text-gray-300">DEALS</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-[#EC4899]"></div>
            <span className="text-gray-300">OTHER DEALS</span>
          </div>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="gradOther" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.15" />
              </linearGradient>
              <linearGradient id="gradIndustrie" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.15" />
              </linearGradient>
              <linearGradient id="gradZorg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#EC4899" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#EC4899" stopOpacity="0.15" />
              </linearGradient>
            </defs>

            {/* No grid lines in the chart area */}
            <XAxis
              dataKey="month"
              axisLine={{ stroke: "#2A3358" }}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 12 }}
            />
            <YAxis
              axisLine={{ stroke: "#2A3358" }}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 12 }}
              domain={[0, 6000]}
              ticks={[0, 1000, 6000]} // ✅ Custom tick values
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "#1F2937",
                border: "none",
                borderRadius: "8px",
                color: "#F9FAFB",
              }}
            />

            <Area
              type="monotone"
              dataKey="other"
              stackId="1"
              stroke="#3B82F6"
              fill="url(#gradOther)"
            />
            <Area
              type="monotone"
              dataKey="industrie"
              stackId="1"
              stroke="#8B5CF6"
              fill="url(#gradIndustrie)"
            />
            <Area
              type="monotone"
              dataKey="zorg"
              stackId="1"
              stroke="#EC4899"
              fill="url(#gradZorg)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default LeadAountChart;
