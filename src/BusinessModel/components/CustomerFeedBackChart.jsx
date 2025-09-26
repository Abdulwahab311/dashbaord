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
  <div className="w-full rounded-t-lg  text-white text-xl font-semibold tracking-widest px-3 py-1">
    {title}
  </div>
);

const StatCard = ({ title, value, delta, variant = 'neutral', size = 'lg' }) => {
  const isDanger = variant === 'danger';
  const isSuccess = variant === 'success';
  const borderClass = isDanger || isSuccess ? '' : 'border border-[#252B42]';

  const bgClass = isDanger
    ? 'bg-gradient-to-b from-[#F04245] to-[#090D28]/0'
    : isSuccess
      ? 'bg-gradient-to-b from-[#20A804] to-[#090D28]/0'
      : 'bg-gradient-to-b from-[#000000] to-[#090D28]/0';

  const badge = isDanger
    ? 'bg-red-500/15 text-red-400'
    : 'bg-emerald-500/15 text-emerald-400';

  return (
    <div className={`rounded-lg overflow-hidden ${borderClass} ${bgClass} p-4 flex flex-col justify-center`}>
      <div className="text-[8px] tracking-widest text-gray-300 mb-2 uppercase text-center">{title}</div>
      <div className="flex items-center justify-center gap-2">
        <div className={`text-white ${size === 'sm' ? 'text-lg' : 'text-sm'} font-semibold leading-none`}>{value}</div>
        {delta !== undefined && (
          <span className={`text-[10px] px-1.5 py-0.5 rounded ${badge}`}>{delta}</span>
        )}
      </div>
    </div>
  );
};

const chartData = [
  { x: '-3m', a: 8, b: 5, c: 3 },
  { x: '-2m', a: 18, b: 10, c: 6 },
  { x: '-1m', a: 16, b: 9, c: 5 },
  { x: 'NU',  a: 42, b: 22, c: 12 },
  { x: '+1m', a: 38, b: 19, c: 10 },
  { x: '+2m', a: 44, b: 22, c: 12 },
  { x: '+3m', a: 72, b: 42, c: 20 }
];

// Card data sources
const topStats = [
  { title: 'NET PROMOTER SCORE', value: '7.8', delta: '+2%', variant: 'neutral', size: 'sm' },
  { title: 'AVERAGE SCORE', value: '4.3', delta: '+2%', variant: 'neutral', size: 'sm' }
];

const bottomStats = [
  { title: '1/5 STARS (LOW SCORES)', value: '15,648', delta: '+2%', variant: 'success' },
  { title: 'REVIEWS FEEDBACK', value: '17,124', delta: '-2%', variant: 'neutral' },
  { title: '1/5 STARS (HIGH SCORES)', value: '120', delta: '+2%', variant: 'danger' }
];

const CustomerFeedBackChart = () => {
  return (
    <div className="text-white">
      <div className="rounded-lg overflow-hidden border border-[#252B42] bg-[#0B1020]">
        <div className="px-2 py-3">
          <div className="rounded-lg bg-[#181C3A] border border-[#252B42] h-60 md:h-[310px] overflow-hidden relative">
            <div className="absolute top-2 left-2 text-white text-sm md:text-base font-semibold tracking-widest z-10">
              CUSTOMER FEEDBACK
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 8, bottom: 10, left: -8 }}>
                <defs>
                  <linearGradient id="cfA" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22D3EE" stopOpacity={0.6}/>
                    <stop offset="95%" stopColor="#22D3EE" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="cfB" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#5B8BF7" stopOpacity={0.45}/>
                    <stop offset="95%" stopColor="#5B8BF7" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="cfC" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F43F5E" stopOpacity={0.25}/>
                    <stop offset="95%" stopColor="#F43F5E" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#23283b" strokeDasharray="4 6" vertical={false} />
                <XAxis dataKey="x" tick={{ fill: '#9CA3AF', fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis hide domain={[0, 80]} />
                <Tooltip contentStyle={{ background: '#0B1020', border: '1px solid #252B42' }} labelStyle={{ color: '#fff' }} />
                <Area type="monotone" dataKey="c" stroke="#F43F5E" fillOpacity={1} fill="url(#cfC)" strokeWidth={2} />
                <Area type="monotone" dataKey="b" stroke="#5B8BF7" fillOpacity={1} fill="url(#cfB)" strokeWidth={2} />
                <Area type="monotone" dataKey="a" stroke="#22D3EE" fillOpacity={1} fill="url(#cfA)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Row 1: Two large cards */}
          <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-3">
            {topStats.map((s) => (
              <StatCard key={s.title} title={s.title} value={s.value} delta={s.delta} variant={s.variant} size={s.size} />
            ))}
          </div>
          {/* Row 2: Three smaller cards */}
          <div className="mt-3 grid grid-cols-1 md:grid-cols-3 gap-3">
            {bottomStats.map((s) => (
              <StatCard key={s.title} title={s.title} value={s.value} delta={s.delta} variant={s.variant} size={s.size} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerFeedBackChart;


