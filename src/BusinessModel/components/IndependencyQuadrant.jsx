import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// Chart settings (compact)
const RINGS = 10;
const RING_THICKNESS = 8; // thinner rings for small chart
const SLICE_VALUE = 25; // 4 equal quadrants

// Four quadrants and depths
const quadrants = [
  { key: 'GOALS', color: '#3DBA66', depth: 7 },
  { key: 'TEAMS', color: '#E14141', depth: 5 },
  { key: 'PROCESSES', color: '#18C2A4', depth: 9 },
  { key: 'DASHBOARDING', color: '#32B6E6', depth: 8 },
];

const ringBackground = 'transparent';
const separators = 'white';

const pieData = quadrants.map(q => ({ name: q.key, value: SLICE_VALUE }));

const Pill = ({ children }) => (
  <span className="text-[8px] px-1 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-400/20">{children}</span>
);

const GradientCard = ({ title, value, variant = 'orange' }) => {
  const gradient = variant === 'green'
    ? 'from-[#0C3B00] via-[#0E5B00] to-[#17A700]'
    : 'from-[#2B0000] via-[#5A1800] to-[#D03F00]';
  return (
    <div className={`rounded-lg p-1.5 bg-gradient-to-b ${gradient} shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_6px_12px_rgba(0,0,0,0.25)]`}>
      <div className="text-white text-[9px] font-semibold tracking-widest uppercase text-center mb-1">{title}</div>
      <div className="flex items-center justify-center gap-1.5">
        <div className="text-white text-lg font-semibold leading-none">{value}%</div>
        <Pill>+2%</Pill>
      </div>
    </div>
  );
};

// Responsive label renderer that scales with chart radius
const labelRenderer = ({ cx, cy, midAngle, outerRadius, name }) => {
  const RAD = Math.PI / 180;
  const r = outerRadius + Math.max(10, outerRadius * 0.08);
  const x = cx + r * Math.cos(-midAngle * RAD);
  const y = cy + r * Math.sin(-midAngle * RAD);
  const fontSize = Math.max(8, Math.min(12, outerRadius * 0.08));
  return (
    <text x={x} y={y} textAnchor="middle" dominantBaseline="middle" fill="#FFFFFF" fontSize={fontSize} fontWeight={800} style={{ letterSpacing: '0.12em' }}>
      {name}
    </text>
  );
};

const IndependencyQuadrant = () => {
  return (
    <div className="text-white bg-[#252A51] p-2 rounded-lg">
      <div className="text-center mb-2">
        <div className="font-semibold tracking-[0.2em] text-xs">INDEPENDANCY QUADRANT</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-center">
        {/* Left: Chart */}
        <div className="rounded-lg p-2 relative">
          <div className="h-[200px] sm:h-[220px] md:h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
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
                {/* Transparent label layer that scales with chart */}
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
          {/* Center hub */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-4 h-4 rounded-full bg-[#D9DFE6] ring-4 ring-[#2A3158] ring-opacity-60" />
          </div>
        </div>

        {/* Right: 2x2 KPI cards */}
        <div className="grid grid-cols-2 gap-2">
          <GradientCard title="GOALS" value={67} variant="orange" />
          <GradientCard title="TEAMS" value={36} variant="orange" />
          <GradientCard title="PROCESSES" value={87} variant="green" />
          <GradientCard title="DASHBOARDING" value={71} variant="orange" />
        </div>
      </div>
    </div>
  );
};

export default IndependencyQuadrant;
