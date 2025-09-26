import React from "react";
import { ResponsiveContainer, AreaChart, Area } from "recharts";

const LegendDot = ({ color }) => (
  <span className="inline-block w-1.5 h-1.5 rounded-full mr-0.5 sm:mr-1" style={{ backgroundColor: color }} />
);

export default function ScalingChart() {
  const legends = [
    { id: "zorg", label: "OMZET ZORG", color: "#51E08D" },
    { id: "industrie", label: "OMZET INDUSTRIE", color: "#F6C26B" },
    { id: "ov", label: "OMZET OV", color: "#5DD1FF" },
    { id: "huur", label: "HUUR INKOMSTEN", color: "#FF896E" },
  ];

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const yTicks = ["10M", "5M", "1M", "500K", "100K", "50K"]; // visual labels only

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
    <div className="rounded-2xl border border-[#252B42] text-white w-full max-w-full overflow-hidden">
      {/* Top gradient bar */}
      <div className="rounded-xl px-2 sm:px-3 py-1.5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-0">
        <div className="text-[10px] sm:text-xs tracking-wide">REVENUE</div>
        <div className="flex flex-nowrap items-center gap-1.5 sm:gap-2 text-[7px] sm:text-[8px] overflow-x-auto">
          {legends.map((l) => (
            <span key={l.id} className="flex items-center whitespace-nowrap">
              <LegendDot color={l.color} />
              <span className="hidden sm:inline">{l.label}</span>
              <span className="sm:hidden">{l.label.split(' ')[1] || l.label}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Chart area */}
      <div className="mt-2 rounded-xl bg-[#0C132A] p-1 sm:p-2" style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.05)" }}>
        <div className="relative h-[120px] sm:h-[160px] md:h-[190px]">
          {/* Y-axis labels */}
          <div className="absolute left-0 top-1 bottom-4 flex flex-col justify-between text-[7px] sm:text-[8px] text-gray-300 pl-1 sm:pl-2">
            {yTicks.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>

          {/* X-axis labels */}
          <div className="absolute left-6 sm:left-10 right-1 sm:right-2 bottom-0.5 flex justify-between text-[7px] sm:text-[8px] text-gray-400">
            {months.map((m, index) => (
              <span key={m} className={`${index % 2 === 0 || window.innerWidth > 640 ? 'block' : 'hidden sm:block'}`}>
                {m}
              </span>
            ))}
          </div>

          {/* Recharts stacked area chart, axes hidden to preserve layout */}
          <div className="absolute inset-0 left-6 sm:left-10 right-1 sm:right-2 top-1 bottom-4">
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
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}