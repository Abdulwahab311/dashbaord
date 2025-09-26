import React from 'react';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const data = [
  { name: '', series1: 12, series2: 8, series3: 4 },
  { name: '', series1: 14, series2: 10, series3: 6 },
  { name: '', series1: 16, series2: 12, series3: 8 },
  { name: '', series1: 15, series2: 11, series3: 10 },
  { name: '', series1: 13, series2: 9, series3: 12 },
  { name: '', series1: 11, series2: 8, series3: 11 },
  { name: '', series1: 9, series2: 7, series3: 10 },
  { name: '', series1: 8, series2: 6, series3: 9 },
  { name: '', series1: 10, series2: 8, series3: 8 },
  { name: '', series1: 12, series2: 9, series3: 7 },
  { name: '', series1: 15, series2: 11, series3: 6 },
  { name: '', series1: 18, series2: 13, series3: 5 },
  { name: '', series1: 16, series2: 12, series3: 4 }
];

export default function LessonCycleTimeChart() {
  return (
    <div className="w-full">
      <div className=" bg-[#090D28] rounded-lg p-3">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-white text-xl font-semibold">LESSEN CYCLE TIME</h1>
          <p className="text-gray-400 text-lg">This Month</p>
        </div>
        
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 20,
              }}
            >
              <defs>
                <linearGradient id="colorSeries1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#6B7280" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#6B7280" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorSeries2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorSeries3" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <XAxis 
                dataKey="name" 
                axisLine={false}
                tickLine={false}
                tick={false}
              />
              <YAxis 
                domain={[0,  20]}
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9CA3AF', fontSize: 14 }}
              />
              <Area
                type="monotone"
                dataKey="series1"
                stroke="#9CA3AF"
                strokeWidth={2}
                fill="url(#colorSeries1)"
                fillOpacity={0.6}
              />
              <Area
                type="monotone"
                dataKey="series2"
                stroke="#10B981"
                strokeWidth={2}
                fill="url(#colorSeries2)"
                fillOpacity={0.4}
              />
              <Area
                type="monotone"
                dataKey="series3"
                stroke="#8B5CF6"
                strokeWidth={2}
                fill="url(#colorSeries3)"
                fillOpacity={0.4}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
