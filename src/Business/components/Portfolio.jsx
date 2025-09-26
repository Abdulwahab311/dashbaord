import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const seriesData = [
  { day: 'Aug18', buildings: 4000, market: 6000, rent: 2500 },
  { day: 'Aug19', buildings: 5200, market: 7800, rent: 3000 },
  { day: 'Aug20', buildings: 6800, market: 9000, rent: 3600 },
  { day: 'Aug21', buildings: 6200, market: 8200, rent: 3300 },
  { day: 'Aug22', buildings: 7000, market: 7600, rent: 5200 },
  { day: 'Aug22', buildings: 7200, market: 7400, rent: 5400 },
  { day: 'Aug22', buildings: 6900, market: 7600, rent: 5100 },
  { day: 'Aug22', buildings: 6600, market: 7300, rent: 4800 },
  { day: 'Aug22', buildings: 7500, market: 8500, rent: 6000 },
  { day: 'Aug23', buildings: 6800, market: 8200, rent: 5700 },
  { day: 'Aug24', buildings: 7100, market: 8400, rent: 5900 },
];

const LegendItem = ({ color, label }) => (
  <div className="flex items-center space-x-2 text-xs">
    <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
    <span className="text-gray-300">{label}</span>
  </div>
);

const Portfolio = () => {
  return (
    <div className="w-full space-y-5">
      {/* Header + Chart Card */}
      <div className="bg-[#090D28] rounded-2xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-white text-base sm:text-lg font-semibold tracking-wide">VALUE OWN PORTFOLIO</h2>
          <div className="flex items-center space-x-4">
            <LegendItem color="#8B5CF6" label="Buildings" />
            <LegendItem color="#22C55E" label="Market Value" />
            <LegendItem color="#60A5FA" label="Rent" />
          </div>
        </div>
        <div className="h-56 sm:h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={seriesData} margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
              <CartesianGrid strokeDasharray="4 6" stroke="#233053" opacity={0.6} />
              <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} tickFormatter={(v) => `${Math.round(v/1000)}K`} />
              <Tooltip contentStyle={{ background: '#0F1539', border: 'none', borderRadius: 8, color: '#fff' }} />
              <Area type="monotone" dataKey="rent" stackId="1" stroke="#60A5FA" fill="#60A5FA" fillOpacity={0.25} />
              <Area type="monotone" dataKey="market" stackId="1" stroke="#22C55E" fill="#22C55E" fillOpacity={0.2} />
              <Area type="monotone" dataKey="buildings" stackId="1" stroke="#8B5CF6" fill="#8B5CF6" fillOpacity={0.2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="bg-[#090D28] rounded-2xl p-2">
          <div className="text-center">
            <div className="text-gray-300 text-xs uppercase tracking-wider mb-2">BUILDINGS</div>
            <div className="text-white text-xl font-semibold">12</div>
          </div>
        </div>
        <div className="bg-[#090D28] rounded-2xl p-2">
          <div className="text-center">
            <div className="text-gray-300 text-xs uppercase tracking-wider mb-2">MARKET VALUE</div>
            <div className="text-white text-xl font-semibold">€40M</div>
          </div>
        </div>
        <div className="bg-[#090D28] rounded-2xl p-2">
          <div className="text-center">
            <div className="text-gray-300 text-xs uppercase tracking-wider mb-2">RENT</div>
            <div className="text-white text-xl font-semibold">€150K per m</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
