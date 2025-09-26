import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, ReferenceLine } from 'recharts';

const stages = [
  { key: 'total', title: ['TOTAL DURATION','FIRST PROPOSAL'], days: '8 D', valueTop: '', pos: 8, neg: -8 },
  { key: 'stiko', title: ['MAKING','STIKO'], days: '4 D', valueTop: '12', pos: 6, neg: -5 },
  { key: 'floorplan', title: ['DRAWING','FLOORPLAN'], days: '10 D', valueTop: '', pos: 10, neg: -10 },
  { key: 'purchase', title: ['PURCHASE','PROPOSAL'], days: '6 D', valueTop: '', pos: 7, neg: -5 },
  { key: 'followup', title: ['PURCHASE','PROPOSAL','FOLLOW UP'], days: '6 D', valueTop: '', pos: 9, neg: -5 },
];

// Pass-through mapping to chart data
const data = stages.map(s => ({ name: s.key, pos: s.pos, neg: s.neg }));

const TopBadge = ({ value }) => (
  <div className="h-8 px-8 border border-white rounded-md flex items-center justify-center text-white text-sm tracking-wide">
    {value}
  </div>
);

const BottomBadge = ({ value }) => {
  const [num, unitRaw] = String(value).trim().split(/\s+/);
  const unit = unitRaw || 'D';
  return (
    <div className="h-8 px-5 border border-white/80 rounded-md flex items-center justify-center text-white text-sm font-semibold">
      <span className="tabular-nums mr-1">{num}</span>
      <span className="opacity-90 tracking-wide">{unit}</span>
    </div>
  );
};

const DurationRecharts = () => {
  const verticalTicks = [16,14,12,10,8,6,4,2,0,2,4,6,8,10,12,14];

  return (
    <div className="bg-[#0B1020] rounded-xl border border-[#252B42] p-4">
      <div className="text-white text-lg font-semibold mb-2">Duration To First Proposal</div>

      <div className="grid grid-cols-12 gap-4">
        {/* Left axis/labels */}
        <div className="col-span-2 flex flex-col justify-between py-4 mt-10">
          <div className="text-gray-300 text-sm leading-5">
            <div className="font-semibold mb-1">AMOUNT</div>
            <div>OF DEALS</div>
          </div>
          <div className="text-gray-300 text-sm leading-5 mb-10">
            <div className="font-semibold mb-1">DURATION</div>
            <div>TIME</div>
          </div>
        </div>

        {/* Chart area with badges */}
        <div className="col-span-10">
          <div className="relative">
            {/* Vertical tick list (left numbers) */}
            <div className="absolute -left-5 top-22 gap-1 flex flex-col h-[200px] justify-between text-white text-[9px] font-semibold">
              {verticalTicks.map(v => (
                <div key={v}>{v}</div>
              ))}
            </div>

            {/* Titles and top badges */}
            <div className="grid grid-cols-5 gap-8 pl-4 pr-2">
              {stages.map(s => (
                <div key={s.key} className="flex flex-col items-center">
                  <div className="h-14 text-center mb-2">
                    {s.title.map((t, i) => (
                      <div key={i} className="text-slate-300 text-[11px] leading-4 tracking-wide">{t}</div>
                    ))}
                  </div>
                  <div className="mb-2">
                    <TopBadge value={s.valueTop} />
                  </div>
                </div>
              ))}
            </div>

            {/* Chart */}
            <div className="pl-4 pr-2">
              <div className="w-full" style={{ height: 220 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data} margin={{ top: 8, right: 8, left: 8, bottom: 8 }} barCategoryGap={90} stackOffset="sign">
                    <YAxis hide domain={[-10, 16]} />
                    <XAxis dataKey="name" hide />
                    <ReferenceLine y={0} stroke="rgba(148,163,184,0.4)" />
                    <Bar dataKey="neg" stackId="a" fill="#cf2e2e" isAnimationActive={false} />
                    <Bar dataKey="pos" stackId="a" fill="#d69a2b" isAnimationActive={false} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Bottom badges */}
            <div className="grid grid-cols-5 gap-8 pl-4 pr-2 mt-3">
              {stages.map(s => (
                <div key={s.key} className="flex items-center justify-center">
                  <BottomBadge value={s.days} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DurationRecharts; 