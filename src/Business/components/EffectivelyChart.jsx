import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  { x: 0, revCost: 20, labourProfit: 10, hourly: 15 },
  { x: 1, revCost: 45, labourProfit: 35, hourly: 40 },
  { x: 2, revCost: 60, labourProfit: 55, hourly: 50 },
  { x: 3, revCost: 105, labourProfit: 80, hourly: 65 },
  { x: 4, revCost: 120, labourProfit: 110, hourly: 80 },
  { x: 5, revCost: 95, labourProfit: 115, hourly: 100 },
  { x: 6, revCost: 190, labourProfit: 100, hourly: 105 },
  { x: 7, revCost: 95, labourProfit: 160, hourly: 103 },
  { x: 8, revCost: 175, labourProfit: 140, hourly: 102 },
  { x: 9, revCost: 110, labourProfit: 200, hourly: 160 },
  { x: 10, revCost: 210, labourProfit: 180, hourly: 195 },
];

const LegendDot = ({ color, label }) => (
  <div className="flex items-center gap-2 text-[10px] text-gray-300">
    <span className="inline-block w-2 h-2 rounded-sm" style={{ backgroundColor: color }} />
    <span>{label}</span>
  </div>
);

const MetricCard = ({ title, value }) => (
  <div className="bg-[#090D28] rounded-xl p-1 text-center">
    <div className="text-[10px] text-gray-300 tracking-wide uppercase mb-1">{title}</div>
    <div className="text-white text-xl font-semibold">{value}</div>
  </div>
);

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const p = payload[0];
    return (
      <div className="bg-[#101736] text-white text-xs px-3 py-2 rounded-md border border-white/10">
        <div className="font-semibold">PROFIT: {p.value}</div>
      </div>
    );
  }
  return null;
};

const EffectivelyChart = () => {
  return (
    <div className="w-full space-y-2">
      <div className="bg-[#090D28] rounded-2xl p-2">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-white font-semibold text-sm">EFFECTIVITY</h3>
          <div className="flex items-center gap-4">
            <LegendDot color="#22D3EE" label="Effectivity revenue / costs" />
            <LegendDot color="#9333EA" label="Labour effectivity revenue/ profit" />
            <LegendDot color="#3B82F6" label="Effective hourly wage" />
          </div>
        </div>
        <div className="h-44">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid stroke="#2A3358" strokeDasharray="0" opacity={0.5} />
              <XAxis dataKey="x" axisLine={{ stroke: '#2A3358' }} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
              <YAxis axisLine={{ stroke: '#2A3358' }} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'rgba(255,255,255,0.1)' }} />
              <Line type="monotone" dataKey="revCost" stroke="#22D3EE" strokeWidth={3} dot={false} />
              <Line type="monotone" dataKey="labourProfit" stroke="#9333EA" strokeWidth={3} dot={false} />
              <Line type="monotone" dataKey="hourly" stroke="#3B82F6" strokeWidth={3} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
        <MetricCard title="EFFECTIVITY REVENUE / COSTS OR PROFIT" value="12" />
        <MetricCard title="LABOUR EFFECTIVITY" value="00" />
        <MetricCard title="REVENUE/PROFIT Divide Through Hours" value="00" />
      </div>
    </div>
  );
};

export default EffectivelyChart;
