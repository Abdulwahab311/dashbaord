import React from "react";
import { ResponsiveContainer, AreaChart, Area, Tooltip } from "recharts";

const LegendDot = ({ color }) => (
  <span className="inline-block w-2.5 h-2.5 rounded-full mr-2" style={{ backgroundColor: color }} />
);

export default function ScalingChart() {
  const legends = [
    { id: "zorg", label: "OMZET ZORG", color: "#51E08D" },
    { id: "industrie", label: "OMZET INDUSTRIE", color: "#F6C26B" },
    { id: "ov", label: "OMZET OV", color: "#5DD1FF" },
    { id: "huur", label: "HUUR INKOMSTEN", color: "#FF896E" },
  ];

  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const yTicks = ["10M","5M","1M","500K","100K","50K"]; // visual labels only

  // Simple demo data to render areas; values are scaled to create similar shapes
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
    <div className="rounded-2xl overflow-hidden border border-[#252B42] bg-[#0B1020] text-white w-full">
      {/* Top gradient bar */}
      <div className="rounded-2xl bg-gradient-to-r from-[#0A0A0A] via-[#8B5A2A] to-[#F0A64F] px-3 py-1.5 flex items-center justify-between">
        <div className="text-xs sm:text-sm tracking-wide">SCALING SPEED</div>
        <div className="flex items-center gap-4 text-[10px] sm:text-xs overflow-x-auto whitespace-nowrap scrollbar-thin">
          {legends.map((l) => (
            <span key={l.id} className="flex items-center">
              <LegendDot color={l.color} />
              {l.label}
            </span>
          ))}
        </div>
      </div>

      {/* Chart area */}
      <div className="bg-[#0C132A] p-2">
        <div className="relative h-[150px] sm:h-[170px] md:h-[180px] lg:h-[189px]">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-1 bottom-4 flex flex-col justify-between text-[8px] sm:text-[9px] text-gray-300 pl-2">
            {yTicks.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>

          {/* X-axis labels */}
          <div className="absolute left-8 sm:left-9 md:left-14 right-1  bottom-0.5 flex justify-between text-[8px] sm:text-[9px] text-gray-400">
            {months.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </div>

          {/* Recharts stacked area chart, axes hidden to preserve layout */}
          <div className="absolute inset-0 left-8 sm:left-9 md:left-10 right-2 top-1 bottom-4 ">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
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
                <Area type="monotone" dataKey="blue" stroke="none" fill="url(#areaBlue)" stackId="1" />
                <Area type="monotone" dataKey="green" stroke="none" fill="url(#areaGreen)" stackId="1" />
                <Area type="monotone" dataKey="pink" stroke="none" fill="url(#areaPink)" stackId="1" />
                <Tooltip
                  contentStyle={{ background: "#0B1020", border: "1px solid #252B42", borderRadius: 8, color: "#fff", padding: "6px 8px" }}
                  labelFormatter={(label) => `Month: ${label}`}
                  formatter={(value, name) => [value, name.toUpperCase()]}
                  cursor={{ stroke: "#F0A650", strokeDasharray: "3 3", strokeOpacity: 0.4 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
