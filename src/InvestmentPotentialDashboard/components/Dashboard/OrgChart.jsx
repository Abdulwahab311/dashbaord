import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';

// Chart settings
const RINGS = 10;
const RING_THICKNESS = 8;
const SLICE_VALUE = 25; // 4 equal quadrants

const quadrants = [
  { key: 'GOALS', color: '#3DBA66', depth: 7, percentage: 67 },
  { key: 'TEAMS', color: '#E14141', depth: 5, percentage: 36 },
  { key: 'PROCESSES', color: '#18C2A4', depth: 9, percentage: 87 },
  { key: 'DASHBOARDING', color: '#32B6E6', depth: 8, percentage: 71 },
];

const ringBackground = 'transparent';
const separators = 'white';

const pieData = quadrants.map(q => ({ name: q.key, value: SLICE_VALUE, percentage: q.percentage }));

const Pill = ({ children }) => (
  <span className="text-[clamp(6px,1.8vw,8px)] px-1 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-400/20">{children}</span>
);

const GradientCard = ({ title, value, variant = 'orange' }) => {
  const gradient = variant === 'green'
    ? 'from-[#0C3B00] via-[#0E5B00] to-[#17A700]'
    : 'from-[#2B0000] via-[#5A1800] to-[#D03F00]';
  return (
    <div className={`rounded-lg p-1.5 bg-gradient-to-b ${gradient} shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_6px_12px_rgba(0,0,0,0.25)]`}>
      <div className="text-white text-[clamp(8px,2vw,9px)] font-semibold tracking-widest uppercase text-center mb-1">{title}</div>
      <div className="flex items-center justify-center gap-1">
        <div className="text-white text-[clamp(14px,3vw,16px)] font-semibold leading-none">{value}%</div>
        <Pill>+2%</Pill>
      </div>
    </div>
  );
};

// Custom Tooltip Renderer
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-[#252A51] border border-[#D9DFE6]/20 rounded-lg p-2 text-white text-[clamp(10px,2vw,12px)]">
        <div className="font-semibold">{data.name}</div>
        <div>Independency: {data.percentage}%</div>
      </div>
    );
  }
  return null;
};

// Responsive label renderer
const labelRenderer = ({ cx, cy, midAngle, outerRadius, name }) => {
  const RAD = Math.PI / 180;
  const r = outerRadius + Math.max(8, outerRadius * 0.08);
  const x = cx + r * Math.cos(-midAngle * RAD);
  const y = cy + r * Math.sin(-midAngle * RAD);
  const fontSize = Math.max(7, Math.min(10, outerRadius * 0.07));
  return (
    <text x={x} y={y} textAnchor="middle" dominantBaseline="middle" fill="#FFFFFF" fontSize={fontSize} fontWeight={800} style={{ letterSpacing: '0.12em' }}>
      {name}
    </text>
  );
};

const IndependencyQuadrant = () => {
  return (
    <div className="text-white bg-[#252A51] p-2 rounded-xl">
      <div className="text-center">
        <div className="font-semibold tracking-[0.2em] text-[clamp(10px,2.5vw,12px)]">INDEPENDENCY QUADRANT</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 items-center">
        {/* Left: Chart */}
        <div className="rounded-lg p-2 relative">
          <div className="h-[10rem] sm:h-[12rem] md:h-[14rem]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip content={<CustomTooltip />} />
                {[...Array(RINGS)].map((_, ringIndex) => {
                  const inner = ringIndex * RING_THICKNESS;
                  const outer = inner + RING_THICKNESS;
                  return (
                    <Pie
                      key={`ring-${ringIndex}`}
                      data={pieData}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={inner}
                      outerRadius={outer}
                      startAngle={90}
                      endAngle={450}
                      paddingAngle={0}
                      stroke={separators}
                      strokeWidth={0.5}
                    >
                      {quadrants.map((q, idx) => (
                        <Cell key={`cell-${ringIndex}-${idx}`} fill={ringIndex < q.depth ? q.color : ringBackground} />
                      ))}
                    </Pie>
                  );
                })}
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius={RINGS * RING_THICKNESS + 1}
                  outerRadius={RINGS * RING_THICKNESS + 1}
                  startAngle={90}
                  endAngle={450}
                  paddingAngle={0}
                  stroke="none"
                  fill="transparent"
                  labelLine={false}
                  label={labelRenderer}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-3 h-3 rounded-full bg-[#D9DFE6] ring-4 ring-[#2A3158] ring-opacity-60" />
          </div>
        </div>

        {/* Right: 2x2 KPI cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <GradientCard title="GOALS" value={67} variant="orange" />
          <GradientCard title="TEAMS" value={36} variant="orange" />
          <GradientCard title="PROCESSES" value={87} variant="green" />
          <GradientCard title="DASHBOARD" value={71} variant="orange" />
        </div>
      </div>
    </div>
  );
};

export default IndependencyQuadrant;