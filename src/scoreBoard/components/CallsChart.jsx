import React from 'react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
  { month: 'Jan', samuel: 800, idiris: 300, daud: 30 },
  { month: 'Feb', samuel: 600, idiris: 200, daud: 120 },
  { month: 'Mar', samuel: 1200, idiris: 350, daud: 360 },
  { month: 'Apr', samuel: 1100, idiris: 300, daud: 140 },
  { month: 'May', samuel: 1000, idiris: 250, daud: 730 },
  { month: 'Jun', samuel: 1800, idiris: 700, daud: 220 },
  { month: 'Jul', samuel: 2200, idiris: 800, daud: 260 },
  { month: 'Aug', samuel: 1800, idiris: 700, daud: 220 },
  { month: 'Sep', samuel: 1600, idiris: 600, daud: 1010 },
  { month: 'Oct', samuel: 2100, idiris: 750, daud: 240 },
  { month: 'Nov', samuel: 2500, idiris: 950, daud: 300 }
];

const CallsChart = () => {
  return (
    <div className="w-full bg-[#090D28] rounded-2xl p-4">
      <div className="flex justify-between items-center mb-1">
        <h2 className="text-white text-sm font-semibold">CALLS GOAL</h2>
        <div className="flex items-center space-x-3 text-[10px]">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-[#8B5CF6]"></div>
            <span className="text-gray-300">SAMUEL</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-[#7BD3C4]"></div>
            <span className="text-gray-300">IDIRIS</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-[#22D3EE]"></div>
            <span className="text-gray-300">DAUD</span>
          </div>
        </div>
      </div>

      <div className="h-75">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="gradSamuelCalls" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.4" />
              </linearGradient>
              <linearGradient id="gradIdirisCalls" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#7BD3C4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#7BD3C4" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="gradDaudCalls" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.25" />
              </linearGradient>
            </defs>

            <CartesianGrid vertical horizontal={false} stroke="#2A3358" />

            <XAxis
              dataKey="month"
              axisLine={{ stroke: '#2A3358' }}
              tickLine={false}
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
            />
            <YAxis
              axisLine={{ stroke: '#2A3358' }}
              tickLine={false}
              tick={{ fill: '#9CA3AF', fontSize: 12 }}
              domain={[0, 6000]}
              tickFormatter={(value) => value.toString()}
            />

            <Area type="monotone" dataKey="daud" stackId="1" stroke="#22D3EE" fill="url(#gradDaudCalls)" />
            <Area type="monotone" dataKey="idiris" stackId="1" stroke="#7BD3C4" fill="url(#gradIdirisCalls)" />
            <Area type="monotone" dataKey="samuel" stackId="1" stroke="#8B5CF6" fill="url(#gradSamuelCalls)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CallsChart;


