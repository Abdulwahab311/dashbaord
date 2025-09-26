import React from "react";
import { ResponsiveContainer, AreaChart, Area, Tooltip } from "recharts";

export default function ScalingChart() {
  const yTicks = ["€700K", "€600K", "€500K", "€400K", "€300K", "€200K"];

  const data = [
    { m: "Jan", cash: 200, revenue: 250, cogs: 150, overhead: 80, frozen: 50, profit: 100, investments: 60 },
    { m: "Feb", cash: 300, revenue: 270, cogs: 160, overhead: 85, frozen: 55, profit: 120, investments: 70 },
    { m: "Mar", cash: 350, revenue: 290, cogs: 170, overhead: 90, frozen: 60, profit: 130, investments: 75 },
    { m: "Apr", cash: 400, revenue: 320, cogs: 180, overhead: 95, frozen: 70, profit: 140, investments: 80 },
    { m: "May", cash: 380, revenue: 310, cogs: 175, overhead: 92, frozen: 65, profit: 135, investments: 78 },
    { m: "Jun", cash: 360, revenue: 300, cogs: 165, overhead: 88, frozen: 62, profit: 128, investments: 74 },
    { m: "Jul", cash: 340, revenue: 280, cogs: 160, overhead: 85, frozen: 58, profit: 122, investments: 70 },
  ];

  return (
    <div className="text-white w-full h-full flex flex-col">
      {/* Chart Header */}
      <div className="flex items-center justify-between mb-2">
        <div className="text-[9px] font-medium tracking-wider text-gray-400">
          YEAR FORECAST FINANCIAL POSITION
        </div>
        <div className="text-[8px] text-gray-500">Weekly ▼</div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center gap-2 mb-2 text-[7px]">
        <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-blue-400"></div><span className="text-gray-300">CASH POSITION</span></div>
        <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-green-400"></div><span className="text-gray-300">REVENUE</span></div>
        <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-red-400"></div><span className="text-gray-300">COSTS - Costs Of Goods Sold</span></div>
        <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-orange-400"></div><span className="text-gray-300">COSTS - Overhead</span></div>
        <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-purple-400"></div><span className="text-gray-300">TEMPORARY FROZEN CASH</span></div>
        <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-cyan-400"></div><span className="text-gray-300">PROFIT</span></div>
        <div className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-yellow-400"></div><span className="text-gray-300">INVESTMENTS</span></div>
      </div>

      {/* Chart container */}
      <div className="flex-1 rounded-xl bg-[#0C132A] p-2 min-h-[120px]"
           style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05)" }}>
        <div className="relative w-full h-full">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-1 bottom-4 flex flex-col justify-between text-[8px] text-gray-300 pl-1">
            {yTicks.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>

          {/* Chart */}
          <div className="absolute inset-0 left-8 right-2 top-1 bottom-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="cash" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="50%" stopColor="#189AF8" stopOpacity={0.9} />
                    <stop offset="90%" stopColor="#189AF8" stopOpacity={0.05} />
                  </linearGradient>
                  <linearGradient id="revenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="50%" stopColor="#22c55e" stopOpacity={0.9} />
                    <stop offset="90%" stopColor="#22c55e" stopOpacity={0.05} />
                  </linearGradient>
                  <linearGradient id="cogs" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="50%" stopColor="#ef4444" stopOpacity={0.9} />
                    <stop offset="90%" stopColor="#ef4444" stopOpacity={0.05} />
                  </linearGradient>
                  <linearGradient id="overhead" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="50%" stopColor="#f97316" stopOpacity={0.9} />
                    <stop offset="90%" stopColor="#f97316" stopOpacity={0.05} />
                  </linearGradient>
                  <linearGradient id="frozen" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="50%" stopColor="#9333EA" stopOpacity={0.9} />
                    <stop offset="90%" stopColor="#9333EA" stopOpacity={0.05} />
                  </linearGradient>
                  <linearGradient id="profit" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="50%" stopColor="#06b6d4" stopOpacity={0.9} />
                    <stop offset="90%" stopColor="#06b6d4" stopOpacity={0.05} />
                  </linearGradient>
                  <linearGradient id="investments" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="50%" stopColor="#eab308" stopOpacity={0.9} />
                    <stop offset="90%" stopColor="#eab308" stopOpacity={0.05} />
                  </linearGradient>
                </defs>

                {/* Tooltip for hover labels */}
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1E293B",
                    border: "none",
                    borderRadius: "6px",
                    padding: "6px",
                    fontSize: "10px",
                    color: "#fff",
                  }}
                  labelStyle={{ fontSize: "10px", color: "#94a3b8" }}
                  cursor={{ stroke: "#475569", strokeWidth: 1, strokeDasharray: "3 3" }}
                />

                {/* Areas */}
                <Area type="monotone" dataKey="cash" stroke="none" fill="url(#cash)" stackId="1" />
                <Area type="monotone" dataKey="revenue" stroke="none" fill="url(#revenue)" stackId="1" />
                <Area type="monotone" dataKey="cogs" stroke="none" fill="url(#cogs)" stackId="1" />
                <Area type="monotone" dataKey="overhead" stroke="none" fill="url(#overhead)" stackId="1" />
                <Area type="monotone" dataKey="frozen" stroke="none" fill="url(#frozen)" stackId="1" />
                <Area type="monotone" dataKey="profit" stroke="none" fill="url(#profit)" stackId="1" />
                <Area type="monotone" dataKey="investments" stroke="none" fill="url(#investments)" stackId="1" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
