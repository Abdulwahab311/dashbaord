import React from 'react';
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from 'recharts';

const Header = ({ title }) => (
  <div className="w-full rounded-t-lg text-white text-xl font-semibold tracking-widest  py-1">
    {title}
  </div>
);

const MetricCard = ({ title, value, delta, positive, danger }) => (
  <div
    className={`rounded-lg overflow-hidden ${danger ? '' : 'border border-[#252B42]'} ${danger ? 'bg-gradient-to-b from-[#F04245] to-[#090D28]' : 'bg-gradient-to-b from-[#000000] to-[#090D28]/0'} p-4 flex flex-col justify-center`}
  >
    <div className="text-[8px] tracking-widest text-gray-300 mb-2 uppercase text-center">{title}</div>
    <div className="flex items-center justify-center gap-2">
      <div className="text-white text-lg font-semibold leading-none">{value}</div>
      {delta !== undefined && (
        <span className={`text-[10px]  py-0.5 rounded ${positive ? 'bg-emerald-500/15 text-emerald-400' : 'bg-red-500/15 text-red-400'}`}>
          {positive ? '+' : ''}{delta}
        </span>
      )}
    </div>
  </div>
);

const chartData = [
  { x: '-3m', a: 10, b: 6, c: 3 },
  { x: '-2m', a: 25, b: 13, c: 6 },
  { x: '-1m', a: 22, b: 12, c: 5 },
  { x: 'NU',  a: 50, b: 25, c: 12 },
  { x: '+1m', a: 38, b: 18, c: 9 },
  { x: '+2m', a: 42, b: 21, c: 10 },
  { x: '+3m', a: 70, b: 40, c: 18 }
];

// Metric cards data
const metrics = [
  { title: 'NUMBER OF ACTIVE USERS', value: '20', delta: '0.2%', positive: true },
  { title: 'MONTHLY NEW USERS', value: '2', delta: '2%', positive: true },
  { title: 'RENEWAL RATE', value: '94%', delta: '2%', positive: true },
  { title: 'INACTIVE USERS', value: '0', delta: '', positive: true },
  { title: 'CHURN RATE', value: '6%', delta: '-2%', positive: false, danger: true },
  { title: 'TOTAL CONTRACT VALUE', value: '$1.54M', delta: '1%', positive: true },
];

const ActiveUserChart = () => {
  return (
    <div className="text-white ">
      <div className="rounded-lg overflow-hidden border border-[#252B42] bg-[#0B1020] ">
        <div className="px-2 py-3">
          <div className="rounded-lg bg-[#181C3A] border border-[#252B42] h-60 md:h-72 overflow-hidden relative">
            <div className="absolute top-2 left-2 text-white text-sm md:text-base font-semibold tracking-widest z-10">
              ACTIVE USER BASE
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 12, bottom: 10, left: -8 }}>
                <defs>
                  <linearGradient id="colorA" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22D3EE" stopOpacity={0.6}/>
                    <stop offset="95%" stopColor="#22D3EE" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorB" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#5B8BF7" stopOpacity={0.45}/>
                    <stop offset="95%" stopColor="#5B8BF7" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorC" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F43F5E" stopOpacity={0.25}/>
                    <stop offset="95%" stopColor="#F43F5E" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#23283b" strokeDasharray="4 6" vertical={false} />
                <XAxis dataKey="x" tick={{ fill: '#9CA3AF', fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis hide domain={[0, 80]} />
                <Tooltip contentStyle={{ background: '#0B1020', border: '1px solid #252B42' }} labelStyle={{ color: '#fff' }} />
                <Area type="monotone" dataKey="c" stroke="#F43F5E" fillOpacity={1} fill="url(#colorC)" strokeWidth={2} />
                <Area type="monotone" dataKey="b" stroke="#5B8BF7" fillOpacity={1} fill="url(#colorB)" strokeWidth={2} />
                <Area type="monotone" dataKey="a" stroke="#22D3EE" fillOpacity={1} fill="url(#colorA)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
            {metrics.map((m) => (
              <MetricCard key={m.title} title={m.title} value={m.value} delta={m.delta} positive={m.positive} danger={m.danger} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveUserChart;
