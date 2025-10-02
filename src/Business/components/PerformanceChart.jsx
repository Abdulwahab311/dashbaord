import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// --- Smooth Mini Line Chart (used inside metric cards) ---
const SmoothLineChart = ({
  data = [],
  splitAt = 0.7,
  pastColor = "#22c55e",
  futureColor = "#e5e7ff",
}) => {
  const width = 200;
  const height = 60;
  const padding = 10;

  const safeData = Array.isArray(data) && data.length > 1 ? data : [0, 0];
  const maxVal = Math.max(...safeData);
  const minVal = Math.min(...safeData);
  const valueRange = maxVal - minVal || 1;
  const stepX = (width - padding * 2) / (safeData.length - 1);

  const points = safeData.map((v, i) => {
    const x = padding + i * stepX;
    const normalized = (v - minVal) / valueRange;
    const y = height - padding - normalized * (height - 2 * padding);
    return { x, y };
  });

  const createPath = (pts) => {
    if (pts.length === 0) return "";
    let path = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 1; i < pts.length; i++) {
      const prev = pts[i - 1];
      const curr = pts[i];
      const cx = (prev.x + curr.x) / 2;
      const cy = (prev.y + curr.y) / 2;
      path += ` Q ${cx} ${cy} ${curr.x} ${curr.y}`;
    }
    return path;
  };

  const clampedSplit = Math.max(0, Math.min(1, splitAt));
  const currentIndex = Math.floor(points.length * clampedSplit);
  const currentPoint = points[currentIndex] || { x: 0, y: 0 };

  const pastPoints = points.slice(0, currentIndex + 1);
  const futurePoints = points.slice(currentIndex);

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-full">
      <path d={createPath(pastPoints)} fill="none" stroke={pastColor} strokeWidth="2.5" />
      <path d={createPath(futurePoints)} fill="none" stroke={futureColor} strokeWidth="2.5" />
      <circle cx={currentPoint.x} cy={currentPoint.y} r="2.5" fill={pastColor} />
    </svg>
  );
};

const chartData = [
  { month: "Now", zorg: 2000, industrie: 1500, other: 1000 },
  { month: "Oct", zorg: 2500, industrie: 1800, other: 1200 },
  { month: "Nov", zorg: 3000, industrie: 2000, other: 1500 },
  { month: "Dec", zorg: 3500, industrie: 2200, other: 1800 },
  { month: "Jan", zorg: 4000, industrie: 2500, other: 2000 },
  { month: "Feb", zorg: 3800, industrie: 2300, other: 1900 },
  { month: "Mar", zorg: 4200, industrie: 2600, other: 2100 },
  { month: "Apr", zorg: 4500, industrie: 2800, other: 2300 },
  { month: "May", zorg: 4800, industrie: 3000, other: 2500 },
];

const metricData = [
  { title: "DEALS", value: "12", color: "#3B82F6", chartData: [8, 10, 7, 12, 9, 11, 12] },
  { title: "REVENUE", value: "€ 12.4M", color: "#EC4899", chartData: [8, 10, 7, 12, 9, 11, 12.4] },
  { title: "COSTS", value: "€ 9.6M", color: "#8B5CF6", chartData: [6, 8, 7, 9, 8.5, 9.2, 9.6] },
  { title: "PROFIT", value: "€ 3.5M", color: "#06B6D4", chartData: [2, 2.5, 1.8, 3, 2.2, 2.8, 3.5] },
  { title: "NET PROFIT", value: "€ 3.5M", color: "#10B981", chartData: [2, 2.5, 1.8, 3, 2.2, 2.8, 3.5] },
];

const PerformanceChart = () => {
  return (
    <div className="w-full space-y-3">
      {/* Main Area Chart */}
      <div className="bg-[#090D28] rounded-2xl p-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-white text-sm font-semibold">Deals Performance</h2>
          <div className="flex items-center space-x-4 text-[10px]">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 rounded-full bg-[#EC4899]"></div>
              <span className="text-gray-300">ZORG</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 rounded-full bg-[#8B5CF6]"></div>
              <span className="text-gray-300">INDUSTRIE</span>
            </div>
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 rounded-full bg-[#3B82F6]"></div>
              <span className="text-gray-300">OTHER</span>
            </div>
          </div>
        </div>

        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="gradOther" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="gradIndustrie" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.1" />
                </linearGradient>
                <linearGradient id="gradZorg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#EC4899" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#EC4899" stopOpacity="0.1" />
                </linearGradient>
              </defs>

              <CartesianGrid vertical stroke="rgba(42,51,88,0.4)" />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9CA3AF", fontSize: 11 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9CA3AF", fontSize: 11 }}
                domain={[0, 6000]}
                tickFormatter={(v) => `${(v / 1000).toFixed(0)}k`}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1F2937",
                  border: "none",
                  borderRadius: "8px",
                  color: "#F9FAFB",
                }}
              />
              <Area type="monotone" dataKey="other" stackId="1" stroke="#3B82F6" fill="url(#gradOther)" />
              <Area type="monotone" dataKey="industrie" stackId="1" stroke="#8B5CF6" fill="url(#gradIndustrie)" />
              <Area type="monotone" dataKey="zorg" stackId="1" stroke="#EC4899" fill="url(#gradZorg)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-5 gap-3">
        {metricData.map((metric, i) => (
          <div key={i} className="bg-[#090D28] rounded-xl p-3 flex flex-col justify-between">
            {/* Top Right Mini Filter */}
            <div className="flex justify-end text-[9px] text-gray-400">
              Weekly ▼
            </div>

            {/* Title & Value */}
            <div className="text-center mb-2">
              <h3 className="text-white font-medium text-xs uppercase">{metric.title}</h3>
              <p className="text-white font-bold text-sm">{metric.value}</p>
            </div>

            {/* Sparkline */}
            <div className="h-10">
              <SmoothLineChart data={metric.chartData} pastColor={metric.color} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceChart;
