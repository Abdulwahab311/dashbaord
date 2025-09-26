import React from 'react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', samuel: 800, idiris: 1200, daud: 600 },
  { month: 'Feb', samuel: 900, idiris: 1100, daud: 700 },
  { month: 'Mar', samuel: 1000, idiris: 1000, daud: 800 },
  { month: 'Apr', samuel: 1100, idiris: 900, daud: 900 },
  { month: 'May', samuel: 1200, idiris: 800, daud: 1000 },
  { month: 'Jun', samuel: 1300, idiris: 700, daud: 1100 },
  { month: 'Jul', samuel: 1400, idiris: 600, daud: 1200 },
  { month: 'Aug', samuel: 1500, idiris: 500, daud: 1300 },
  { month: 'Sep', samuel: 1600, idiris: 400, daud: 1400 },
  { month: 'Oct', samuel: 1700, idiris: 300, daud: 1500 },
  { month: 'Nov', samuel: 1800, idiris: 200, daud: 1600 },
  { month: 'Dec', samuel: 1900, idiris: 100, daud: 1700 }
];

const CycleTimeChart = () => {
  return (
    <div className="w-full bg-[#090D28] rounded-2xl p-1">
      <div className="flex justify-between items-center mb-1">
        <h2 className="text-white text-sm font-semibold">LESSEN CYCLE TIME</h2>
        <div className="flex items-center space-x-3 text-[10px]">
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-[#F59E0B]"></div>
            <span className="text-gray-300">SAMUEL</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-[#3B82F6]"></div>
            <span className="text-gray-300">IDIRIS</span>
          </div>
          <div className="flex items-center space-x-1">
            <div className="w-2 h-2 rounded-full bg-[#06B6D4]"></div>
            <span className="text-gray-300">DA'UD</span>
          </div>
        </div>
      </div>

      <div className="h-30">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="gradSamuel" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="gradIdiris" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.3" />
              </linearGradient>
              <linearGradient id="gradDaud" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#06B6D4" stopOpacity="0.3" />
              </linearGradient>
            </defs>

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

            <Area type="monotone" dataKey="daud" stackId="1" stroke="#06B6D4" fill="url(#gradDaud)" />
            <Area type="monotone" dataKey="idiris" stackId="1" stroke="#3B82F6" fill="url(#gradIdiris)" />
            <Area type="monotone" dataKey="samuel" stackId="1" stroke="#F59E0B" fill="url(#gradSamuel)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default CycleTimeChart;
