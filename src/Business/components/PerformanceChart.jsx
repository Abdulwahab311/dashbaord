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

const SmoothLineChart = ({
  data = [],
  splitAt = 0.7, // fraction (0..1) where the future segment starts
  pastColor = "#22c55e",
  futureColor = "#e5e7ff",
}) => {
  const width = 800;
  const height = 300;
  const paddingLeft = 40;
  const paddingBottom = 20;

  const safeData = Array.isArray(data) && data.length > 1 ? data : [0, 0];
  const maxVal = Math.max(...safeData);
  const minVal = Math.min(...safeData);
  const valueRange = maxVal - minVal || 1;
  const stepX = (width - paddingLeft) / (safeData.length - 1);

  const points = safeData.map((v, i) => {
    const x = paddingLeft + i * stepX;
    const normalized = (v - minVal) / valueRange;
    const y =
      height - paddingBottom - normalized * (height - 2 * paddingBottom);
    return { x, y };
  });

  const createPath = (pts) => {
    if (pts.length === 0) return "";
    let path = `M ${pts[0].x} ${pts[0].y}`;
    for (let i = 1; i < pts.length; i++) {
      const prevPoint = pts[i - 1];
      const currentPoint = pts[i];
      const controlX = (prevPoint.x + currentPoint.x) / 2;
      const controlY = (prevPoint.y + currentPoint.y) / 2;
      path += ` Q ${controlX} ${controlY} ${currentPoint.x} ${currentPoint.y}`;
    }
    return path;
  };

  const clampedSplit = Math.max(0, Math.min(1, splitAt));
  const currentPointIndex = Math.floor(points.length * clampedSplit);
  const currentPoint = points[currentPointIndex] || { x: 0, y: 0 };

  // Split path into past (green) and future (white) segments
  const pastPoints = points.slice(0, currentPointIndex + 1);
  const futurePoints = points.slice(currentPointIndex);
  const pastPath = createPath(pastPoints);
  const futurePath = createPath(futurePoints);

  return (
    <svg
      viewBox="0 0 800 300"
      className="w-full h-full"
      style={{ overflow: "visible" }}
    >
      <defs>
        <filter id="softGlow">
          <feGaussianBlur stdDeviation="12" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Axes removed */}

      {/* Past (green) segment */}
      <path
        d={pastPath}
        fill="none"
        stroke={pastColor}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Future (white) segment */}
      <path
        d={futurePath}
        fill="none"
        stroke={futureColor}
        strokeWidth="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Focus point with glow */}
      <circle
        cx={currentPoint.x}
        cy={currentPoint.y}
        r="22"
        fill="#7c3aed"
        filter="url(#softGlow)"
        opacity="0.25"
      />
      <circle
        cx={currentPoint.x}
        cy={currentPoint.y}
        r="9"
        stroke="#7c3aed"
        strokeWidth="6"
        fill="none"
      />
      <circle cx={currentPoint.x} cy={currentPoint.y} r="7" fill="#0b0f24" />
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
  { month: "Nov", zorg: 4800, industrie: 3000, other: 2500 },
];

const metricData = [
  {
    title: "DEALS",
    value: "12",
    color: "#3B82F6",
    chartData: [8, 10, 7, 12, 9, 11, 12],
  },
  {
    title: "REVENUE",
    value: "€ 12.4 M",
    color: "#EC4899",
    chartData: [8, 10, 7, 12, 9, 11, 12.4],
  },
  {
    title: "COSTS",
    value: "€9.6M",
    color: "#8B5CF6",
    chartData: [6, 8, 7, 9, 8.5, 9.2, 9.6],
  },
  {
    title: "PROFIT",
    value: "€ 3.5 M",
    color: "#06B6D4",
    chartData: [2, 2.5, 1.8, 3, 2.2, 2.8, 3.5],
  },
  {
    title: "NET PROFIT",
    value: "€ 3.5 M",
    color: "#10B981",
    chartData: [2, 2.5, 1.8, 3, 2.2, 2.8, 3.5],
  },
];

const PerformanceChart = () => {
  return (
    <div className="w-full space-y-1">
      {/* Main Performance Chart */}
      <div className="bg-[#090D28] rounded-2xl p-1">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-white text-sm font-semibold">
            Deals Performance
          </h2>
          <div className="flex items-center space-x-1 text-[10px]">
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 rounded-full bg-[#EC4899]"></div>
              <span className="text-gray-300 ">ZORG DEALS</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-[#8B5CF6]"></div>
              <span className="text-gray-300">INDUSTRIE DEALS</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-[#3B82F6]"></div>
              <span className="text-gray-300">OTHER DEALS</span>
            </div>
          </div>
        </div>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
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
              {/* Vertical grid lines only */}
              <CartesianGrid
                vertical={true}
                horizontal={false}
                stroke="rgba(42,51,88,0.5)"
              />
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
                domain={[5000, 10000]} // start from 5k
                ticks={[5000, 6000, 10000]}
                tickFormatter={(value) => `${(value / 1000).toFixed(0)}k`}
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

      {/* Metric Cards */}
      <div className="grid grid-cols-5 gap-3">
        {metricData.map((metric, index) => (
          <div key={index} className="bg-[#090D28] rounded-xl pt-1">
            <div className="flex justify-end items-start mb-4">
              <div className="flex items-center space-x-1">
                <span className="text-[7px] text-gray-400  ">Weekly</span>
                <div className="text-gray-400 text-[5px] mr-2">▼</div>
              </div>
            </div>

            <div className="text-center ">
              <h3 className="text-white font-semibold text-sm uppercase tracking-wide mb-1">
                {metric.title}
              </h3>
              <div className="text-white text-sm font-bold">{metric.value}</div>
            </div>

            <div className="h-12">
              <SmoothLineChart
                data={metric.chartData}
                pastColor={metric.color}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerformanceChart;
