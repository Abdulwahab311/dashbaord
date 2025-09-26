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

  // left side labels ke liye min-max range
  const minVal = 2000;
  const maxVal = 6000;
  const steps = 5;
  const stepVal = (maxVal - minVal) / steps;
  const yLabels = Array.from({ length: steps + 1 }, (_, i) =>
    Math.round(maxVal - i * stepVal)
  );

  return (
    <div className="relative flex flex-col h-80 p-4 text-white">
      {/* Background Table Grid */}
      <div className="absolute inset-0 top-8 px-4 pb-6 pointer-events-none grid grid-cols-[50px_1fr] z-0">
        
        {/* Left Y-axis labels */}
        <div className="flex flex-col justify-between text-[10px] text-gray-400 pr-2">
          {yLabels.map((val, i) => (
            <span key={i}>{val}</span>
          ))}
        </div>

        {/* Right side table grid */}
        <div className="grid grid-cols-7 h-full">
          {data.map((d, i) => (
            <div
              key={i}
              className="flex flex-col justify-between border-l border-gray-800 text-[10px] text-gray-500"
            >
              {yLabels.map((_, j) => (
                <div
                  key={j}
                  className="border-b border-gray-800 flex-1"
                ></div>
              ))}
              <span className="text-center mt-1">{d.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Chart overlays */}
      <div className="flex-1 z-20">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Tooltip
              contentStyle={{
                backgroundColor: "#111827",
                border: "none",
                borderRadius: "6px",
                color: "#fff",
              }}
            />

            {/* Target line */}
            <Line
              type="monotone"
              dataKey="target"
              stroke="#F04245"
              strokeWidth={2.5}
              dot={false}
              activeDot={{ r: 6, fill: "#D292B6" }}
            />

            
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default NetProfitChart;
