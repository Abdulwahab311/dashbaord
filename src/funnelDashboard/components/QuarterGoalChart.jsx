import React from 'react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from 'recharts';

// Mocked monthly data to render flowing shapes similar to the screenshot
const data = [
  { m: 'Jan', sales: 6, c1: 4, dev: 2, c2: 1, exit: 0.5, nazorg: 0.5 },
  { m: 'Feb', sales: 9, c1: 5, dev: 3, c2: 1.5, exit: 0.7, nazorg: 0.8 },
  { m: 'Mar', sales: 7, c1: 4, dev: 2.5, c2: 1.2, exit: 0.6, nazorg: 0.7 },
  { m: 'Apr', sales: 5, c1: 5, dev: 3.5, c2: 1.8, exit: 0.8, nazorg: 0.9 },
  { m: 'May', sales: 6, c1: 4.5, dev: 3, c2: 1.6, exit: 0.7, nazorg: 0.8 },
  { m: 'Jun', sales: 8, c1: 3.5, dev: 2.2, c2: 1.1, exit: 0.6, nazorg: 0.7 },
  { m: 'Jul', sales: 6.5, c1: 3, dev: 2.8, c2: 1.4, exit: 0.7, nazorg: 0.9 },
  { m: 'Aug', sales: 5.5, c1: 2.8, dev: 2.6, c2: 1.3, exit: 0.6, nazorg: 0.8 },
  { m: 'Sep', sales: 11, c1: 4, dev: 3.5, c2: 1.8, exit: 0.9, nazorg: 1.1 },
  { m: 'Oct', sales: 10.5, c1: 3.8, dev: 3.1, c2: 1.6, exit: 0.8, nazorg: 1 },
  { m: 'Nov', sales: 9.5, c1: 3.2, dev: 2.7, c2: 1.3, exit: 0.7, nazorg: 0.9 },
  { m: 'Dec', sales: 9.8, c1: 3.4, dev: 2.9, c2: 1.4, exit: 0.75, nazorg: 0.95 }
];

const QuarterGoalChart = () => {

  return (
    <div className="w-full bg-[#0B0F24] rounded-2xl p-4 ">
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-white text-sm font-semibold">QUARTER GOAL LESSEN CYCLE TIME</h2>
        {/* Legend */}
        <div className="flex items-center gap-3 text-[10px]">
          <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#22D3EE]"></span><span className="text-gray-300">SALES</span></div>
          <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#9333EA]"></span><span className="text-gray-300">1e CONTRACTFASE</span></div>
          <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#10B981]"></span><span className="text-gray-300">DEVELOPMENT</span></div>
          <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#F59E0B]"></span><span className="text-gray-300">2e CONTRACTFASE</span></div>
          <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#EF4444]"></span><span className="text-gray-300">EXIT</span></div>
          <div className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#94A3B8]"></span><span className="text-gray-300">NA-ZORG</span></div>
        </div>
      </div>

      <div className="h-44">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="gradSales" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.15" />
              </linearGradient>
              <linearGradient id="gradC1" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#9333EA" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="gradDev" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10B981" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#10B981" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="gradC2" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="gradExit" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#EF4444" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#EF4444" stopOpacity="0.08" />
              </linearGradient>
              <linearGradient id="gradNazorg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#94A3B8" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#94A3B8" stopOpacity="0.08" />
              </linearGradient>
            </defs>

            <CartesianGrid stroke="#2A3358" strokeOpacity={0.3} vertical={true} horizontal={false} />

            {/* <XAxis dataKey="m" axisLine={{ stroke: '#2A3358' }} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} /> */}
            <YAxis axisLine={{ stroke: '#2A3358' }} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} domain={[0, 20]} />

            {/* Order from bottom to top for stacking visual */}
            <Area type="monotone" dataKey="nazorg" stackId="1" stroke="#94A3B8" fill="url(#gradNazorg)" />
            <Area type="monotone" dataKey="exit" stackId="1" stroke="#EF4444" fill="url(#gradExit)" />
            <Area type="monotone" dataKey="c2" stackId="1" stroke="#F59E0B" fill="url(#gradC2)" />
            <Area type="monotone" dataKey="dev" stackId="1" stroke="#10B981" fill="url(#gradDev)" />
            <Area type="monotone" dataKey="c1" stackId="1" stroke="#9333EA" fill="url(#gradC1)" />
            <Area type="monotone" dataKey="sales" stackId="1" stroke="#22D3EE" fill="url(#gradSales)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default QuarterGoalChart;


