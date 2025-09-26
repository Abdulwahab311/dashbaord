import React from "react";
import { ResponsiveContainer, AreaChart, Area } from "recharts";

const LegendDot = ({ color }) => (
  <span
    className="inline-block w-2.5 h-2.5 rounded-full mr-2"
    style={{ backgroundColor: color }}
  />
);

export default function ScalingChart() {
  const yTicks = ["0", "20", "10", "10", "10", ""];

  const data = [
    { m: "Jan", blue: 50, green: 25, pink: 10 },
    { m: "Feb", blue: 80, green: 40, pink: 18 },
    { m: "Mar", blue: 65, green: 55, pink: 25 },
    { m: "Apr", blue: 40, green: 30, pink: 35 },
    { m: "May", blue: 45, green: 35, pink: 50 },
    { m: "Jun", blue: 60, green: 42, pink: 38 },
    { m: "Jul", blue: 55, green: 48, pink: 45 },
    { m: "Aug", blue: 42, green: 32, pink: 50 },
    { m: "Sep", blue: 70, green: 60, pink: 42 },
    { m: "Oct", blue: 95, green: 85, pink: 30 },
    { m: "Nov", blue: 88, green: 70, pink: 35 },
    { m: "Dec", blue: 76, green: 55, pink: 42 },
  ];

  return (
    <div className="rounded-2xl text-white w-full h-full">
      {/* Chart area */}
      <div
        className="mt-2 rounded-xl bg-[#000000] p-2 h-[290px]"
        style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05)" }}
      >
        <div className="relative w-full h-full">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-1 bottom-4 flex flex-col justify-between text-[8px] text-gray-300 pl-2">
            {yTicks.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          {/* Recharts area */}
          <div class="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-medium ">
            QUARTER GOAL LESSEN CYCLE TIME
          </div>

          <div className="absolute inset-0 left-10 right-2 top-1 bottom-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="areaBlue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2BA2C9" stopOpacity={0.9} />
                    <stop offset="100%" stopColor="#2BA2C9" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="areaGreen" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#48E0A6" stopOpacity={0.7} />
                    <stop offset="100%" stopColor="#48E0A6" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="areaPink" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#E46AA3" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="#E46AA3" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="blue"
                  fill="url(#areaBlue)"
                  stackId="1"
                />
                <Area
                  type="monotone"
                  dataKey="green"
                  fill="url(#areaGreen)"
                  stackId="1"
                />
                <Area
                  type="monotone"
                  dataKey="pink"
                  fill="url(#areaPink)"
                  stackId="1"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
