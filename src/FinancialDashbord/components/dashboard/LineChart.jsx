import React from "react";
import {
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const NetProfitChart = () => {
  const data = [
    { month: "Jan", profit: 4000, target: 3200 },
    { month: "Feb", profit: 3000, target: 2800 },
    { month: "Mar", profit: 5000, target: 4500 },
    { month: "Apr", profit: 4780, target: 4000 },
    { month: "May", profit: 5890, target: 5100 },
    { month: "Jun", profit: 4390, target: 3900 },
    { month: "Jul", profit: 4490, target: 4200 },
  ];

  return (
    <div className="bg-[#181C3A] text-white rounded-xl p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h1 className="text-sm font-semibold">CASH POSITION</h1>
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#2957B4]"></span>
            <span>Profit</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D292B6]"></span>
            <span>Target</span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data}>
          <Tooltip
            contentStyle={{
              backgroundColor: "#111827",
              border: "none",
              borderRadius: "6px",
              color: "#fff",
            }}
          />
          {/* Profit Line */}
          <Line
            type="monotone"
            dataKey="profit"
            stroke="#2957B4"
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 6, fill: "#2957B4" }}
          />
          {/* Target Line */}
          <Line
            type="monotone"
            dataKey="target"
            stroke="#D292B6"
            strokeWidth={2.5}
            dot={false}
            activeDot={{ r: 6, fill: "#D292B6" }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default NetProfitChart;
