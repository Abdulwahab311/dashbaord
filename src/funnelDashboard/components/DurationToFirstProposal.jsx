// frontend/src/funnelDashboard/components/DurationToFirstProposal.jsx
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, ReferenceLine } from 'recharts';

const SectionChart = ({ title, steps, revenues, data, bgClass, bottom }) => {
  const columnCount = Math.max(1, (bottom?.kpis?.length || 1));
  const columnPositions = Array.from({ length: Math.max(0, columnCount - 1) }, (_, i) => ((i + 1) / columnCount) * 100);

  return (
  <div className={`border-r border-slate-700 last:border-r-0`}>
    <div className={`px-3 py-2 ${bgClass}`}>
      <div className="text-white font-semibold text-xs mb-1">{title}</div>
      <div className="flex justify-center gap-3 text-[10px] text-white/80 mb-1">
        {steps.map((s, i) => <span key={i}>{s}</span>)}
      </div>
      {revenues?.length ? (
        <div className="flex justify-center gap-1 text-[9px] text-white/60">
          {revenues.map((r, i) => <span key={i}>{r}</span>)}
        </div>
       
      ) : null}
    </div>
    <div className={`${bgClass.replace('from-', 'from-').replace('to-', 'to-')} px-2 py-2`}>
      <div className="h-70">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 8, right: 6, bottom: 4, left: 6 }} barCategoryGap="0%" barGap={0}>
            <XAxis dataKey="name" axisLine={false} tickLine={false} tick={false} height={0} />
            <YAxis domain={[-100, 100]} axisLine={false} tickLine={false} tick={false} width={0} />
            {[100, 80, 60, 40, 20, 0, -20, -40, -60, -80, -100].map(v => (
              <ReferenceLine 
                key={v} 
                y={v} 
                stroke={v === 0 ? "#FFFFFF" : "#374151"} 
                strokeOpacity={v === 0 ? 1 : 0.5} 
                strokeWidth={0.5} 
              />
            ))}
            <Bar dataKey="value" radius={[2, 2, 2, 2]} maxBarSize={40}>
              {data.map((d, i) => <Cell key={i} fill={d.color} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
    {/* Attached KPI tile (part of the same column) */}
    <div className={`${bgClass} px-3 py-2`}>
      {/* Generic KPI row for non-SALES */}
      {title !== 'SALES' && (
        <div className="flex items-center gap-2 mt-8 ">
          {bottom?.highlight !== null && bottom?.highlight !== undefined ? (
            <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded">{bottom.highlight}</span>
          ) : null}
          <div className="flex items-center gap-3 text-[11px] text-white/80">
            {(bottom?.kpis || []).map((k, i) => <span key={i}>{k}</span>)}
          </div>
        </div>
      )}
      {/* For SALES: legend header row with KPIs to the right, then legend+grid */}
      {title === 'SALES' ? (
        <div className="mt-2">
          {/* Header row: left legend block + KPIs */}
          <div className="flex items-center gap-3">
            <div className="text-white/80 text-[8px] leading-4">
              <div>HIGHEST/</div>
              <div>LONGEST</div>
              <div>CYCLETIME</div>
              <div>/ DURATION</div>
            </div>
            <div className="flex items-center gap-3 text-[12px] text-white/90">
              {bottom?.highlight !== null && bottom?.highlight !== undefined ? (
                <span className="bg-red-500 text-white text-[10px] px-1.5 py-0.5 rounded">{bottom.highlight}</span>
              ) : null}
              {(bottom?.kpis || []).map((k, i) => <span key={i}>{k}</span>)}
            </div>
          </div>
          {/* Below: remaining legend rows + grid */}
          <div className="mt-1 flex gap-3">
            <div className=" text-white/80 text-[8px] leading-4">
              <div className="mb-8">
                <div>CYCLETIME</div>
                <div>SHORTEST/</div>
                <div>LAST</div>
              </div>
              <div className="mb-8">
                <div>CYCLETIME</div>
              </div>
              <div>
                <div>CYCLE TIME IN</div>
                <div>THE WHOLE</div>
                <div>FUNNEL</div>
              </div>
            </div>
            <div className="relative w-full">
              <div className="w-full aspect-square border border-white/10 rounded" />
              {columnPositions.map((pos, idx) => (
                <div key={idx} className="absolute top-0 bottom-0 w-px bg-white/10" style={{ left: `${pos}%` }} />
              ))}
              <div className="absolute left-0 right-0 h-px bg-white/10" style={{ top: '33.333%' }} />
              <div className="absolute left-0 right-0 h-px bg-white/10" style={{ top: '66.666%' }} />
            </div>
          </div>
        </div>
      ) : (
        // Default: only combined grid
        <div className={`${title === 'AFTERCARE' ? 'mt-5' : ''} relative opacity-30 `}>
          <div className="w-full aspect-square border border-white/10 rounded" />
          {columnPositions.map((pos, idx) => (
            <div key={idx} className="absolute top-0 bottom-0 w-px bg-white/10" style={{ left: `${pos}%` }} />
          ))}
          <div className="absolute left-0 right-0 h-px bg-white/10" style={{ top: '33.333%' }} />
          <div className="absolute left-0 right-0 h-px bg-white/10" style={{ top: '66.666%' }} />
        </div>
      )}
    </div>
  </div>
  );
};

const DurationToFirstProposal = () => {
  // Colors
  const orange = '#F59E0B';
  const cyan = '#06B6D4';
  const red = '#EF4444';

  // Section datasets (tweak as needed)
  const sales = [
    { name: '1', value: 32, color: orange },
    { name: '2', value: 25, color: orange },
    { name: '3', value: -60, color: red },
    { name: '4', value: 8, color: orange },
  ];

  const contract1 = [
    { name: '1', value: 57, color: cyan },
    { name: '2', value: 32, color: cyan },
    { name: '3', value: 85, color: cyan },
    { name: '4', value: 12, color: cyan },
    { name: '5', value: -55, color: red },
    { name: '6', value: -25, color: red },
    { name: '7', value: -35, color: red },
    { name: '8', value: -40, color: red },
  ];

  const development = [
    { name: '1', value: 50, color: orange },
    { name: '2', value: 35, color: orange },
    { name: '3', value: 42, color: orange },
    { name: '4', value: 55, color: orange },
    { name: '5', value: 80, color: orange },
    { name: '6', value: -35, color: red },
    { name: '7', value: -55, color: red },
    { name: '8', value: -78, color: red },
  ];

  const exit2 = [
    { name: '1', value: 55, color: cyan },
    { name: '2', value: 25, color: cyan },
    { name: '3', value: 82, color: cyan },
    { name: '4', value: 12, color: cyan },
    { name: '5', value: -60, color: red },
    { name: '6', value: -20, color: red },
  ];

  const exit = [
    { name: '1', value: 55, color: orange },
    { name: '2', value: 82, color: orange },
    { name: '3', value: 28, color: orange },
    { name: '4', value: 8, color: orange },
    { name: '5', value: -58, color: red },
    { name: '6', value: -40, color: red },
  ];

  const aftercare = [
    { name: '1', value: 8, color: cyan },
  ];

  const sections = [
    {
      title: 'SALES',
      steps: ['595', '43', '13', '14'],
      revenues: ['€4.5M', '€4.5M', '€4.5M', '€4.5M'],
      data: sales,
      bgClass: 'bg-[#2B2430]',
    },
    {
      title: '1E CONTRACTFASE',
      steps: ['1', '2', '3', '4', '5', '6', '7', '8'],
      revenues: Array(8).fill('€4.5M'),
      data: contract1,
      bgClass: 'bg-[#0F1D44]',
    },
    {
      title: 'DEVELOPMENT',
      steps: ['1', '2', '3', '4', '5', '6', '7', '8'],
      revenues: Array(8).fill('€4.5M'),
      data: development,
      bgClass: 'bg-[#062A33]',
    },
    {
      title: 'EXIT 2E CONTRACTFASE',
      steps: ['1', '2', '3', '4'],
      revenues: Array(4).fill('€4.5M'),
      data: exit2,
      bgClass: 'bg-[#201B33]',
    },
    {
      title: 'EXIT',
      steps: ['1', '2', '3', '4'],
      revenues: Array(4).fill('€4.5M'),
      data: exit,
      bgClass: 'bg-[#2A1730]',
    },
    {
      title: 'AFTERCARE',
      steps: ['1'],
      revenues: ["€4.5M"],
      data: aftercare,
      bgClass: 'bg-[#2B1633]',
    },
  ];

  // Mock KPI data for the attached tiles (numbers adapted from screenshots)
  const bottomKpis = [
    { highlight: '4.5', kpis: ['1.4', '1.3', '3', '0'] },
    { highlight: '4.5', kpis: ['1', '3', '3'] },
    { highlight: '4.5', kpis: ['2', '0.5', '1.4', '1', '1.4', '2.1', '2.1', '4.1'] },
    { highlight: '4.5', kpis: ['1', '3', '3'] },
    { highlight: '4.5', kpis: ['1', '3', '3'] },
    { highlight: null, kpis: [] },
  ];

  return (
    <div className="w-full bg-[#090D28] rounded-xl p-1">
      <div className="text-white font-semibold text-sm mb-2">Duration To First Proposal</div>

      {/* Y axis + charts row */}
      <div className="flex">
        {/* Y axis */}
        {/* Revenue label + Y axis */}
        <div className="w-15 bg-[#090D28] ">
          <div className="px-2 py-1 text-white text-[5px] text-center  mt-17">
            TOTALE REVENUE
            <br />
            IN € MILLIONS
          </div>
          <div className="py-2 text-[10px] text-white/80 flex flex-col justify-between items-center gap-3 ">
            {[100, 80, 60, 40, 20, 0, -20, -40, -60, -80, -100].map(v => <div key={v}>{v}</div>)}
          </div>
          
        </div>
        {/* Charts + attached KPI tiles in each column */}
        <div className="flex-1 grid grid-cols-6 mt-5">
          {sections.map((s, i) => (
            <SectionChart
              key={i}
              title={s.title}
              steps={s.steps}
              revenues={s.revenues}
              data={s.data}
              bgClass={s.bgClass}
              bottom={bottomKpis[i]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DurationToFirstProposal;