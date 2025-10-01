import React from 'react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from 'recharts';

const data = [
  { month: 'Jan', zorg: 2000, industrie: 1500, other: 800 },
  { month: 'Feb', zorg: 2200, industrie: 1600, other: 900 },
  { month: 'Mar', zorg: 2400, industrie: 1700, other: 1000 },
  { month: 'Apr', zorg: 2600, industrie: 1800, other: 1100 },
  { month: 'May', zorg: 2800, industrie: 1900, other: 1200 },
  { month: 'Jun', zorg: 3000, industrie: 2000, other: 1300 },
  { month: 'Jul', zorg: 3200, industrie: 2100, other: 1400 },
  { month: 'Aug', zorg: 3400, industrie: 2200, other: 1500 },
  { month: 'Sep', zorg: 3600, industrie: 2300, other: 1600 },
  { month: 'Oct', zorg: 3500, industrie: 2250, other: 1550 },
  { month: 'Nov', zorg: 3300, industrie: 2100, other: 1450 },
  { month: 'Dec', zorg: 3100, industrie: 2000, other: 1350 }
];

const DealsChart = () => {
  return (
    <div className="w-full">
      {/* Chart section with dark background */}
      <div className="bg-[#181C3A] rounded-2xl p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-white text-lg font-semibold">DEALS</h2>
          <div className="flex items-center space-x-3 text-[10px]">
             <div className="flex items-center space-x-1">
               <div className="w-2 h-2 rounded-full bg-[#22D3EE]"></div>
               <span className="text-gray-300">ZORG</span>
             </div>
             <div className="flex items-center space-x-1">
               <div className="w-2 h-2 rounded-full bg-[#DB2777]"></div>
               <span className="text-gray-300">INDUSTRIE DEALS</span>
             </div>
             <div className="flex items-center space-x-1">
               <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#9333EAD9' }}></div>
               <span className="text-gray-300">OTHER DEALS</span>
             </div>
          </div>
        </div>

        <div className="h-47">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="gradZorg" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22D3EE" stopOpacity="1.0" />
                  <stop offset="100%" stopColor="#22D3EE" stopOpacity="1.0" />
                </linearGradient>
                <linearGradient id="gradIndustrie" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#DB2777" stopOpacity="1.0" />
                  <stop offset="100%" stopColor="#DB2777" stopOpacity="1.0" />
                </linearGradient>
                <linearGradient id="gradOther" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#9333EAD9" stopOpacity="1.0" />
                  <stop offset="100%" stopColor="#9333EAD9" stopOpacity="1.0" />
                </linearGradient>
              </defs>

             <CartesianGrid stroke="#2A3358" strokeWidth={3} strokeOpacity={0.3} vertical={true} horizontal={false} />
             
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
               domain={[0, 8000]}
               tickFormatter={(value) => `${(value/1000).toFixed(0)}k`}
             />

              <Area type="monotone" dataKey="other" stackId="1" stroke="#9333EAD9" strokeWidth={1} fill="url(#gradOther)" />
              <Area type="monotone" dataKey="industrie" stackId="1" stroke="#DB2777" strokeWidth={1} fill="url(#gradIndustrie)" />
              <Area type="monotone" dataKey="zorg" stackId="1" stroke="#22D3EE" strokeWidth={1} fill="url(#gradZorg)" />
           </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Mini KPI cards below chart (outside dark bg) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 mt-4">
        {[
          { title: 'SELF FINANCED', value: 0 },
          { title: 'WITHIN DEADLINE', value: 7 },
          { title: 'EXTERNALFINANCING', value: 9 },
        ].map((k, i) => (
          <div key={i} className="bg-[#0B0F24] rounded-xl p-2 sm:p-3 md:p-4 text-center shadow-[0_0_0_1px_rgba(42,51,88,0.6)]">
            <div className="text-white text-xl sm:text-2xl font-bold mb-1 leading-none">{k.value}</div>
            <div className="text-gray-300 text-[9px] sm:text-[10px] tracking-wide break-words leading-tight">{k.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DealsChart;
