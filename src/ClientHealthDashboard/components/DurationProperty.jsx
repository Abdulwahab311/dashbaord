import React, { useState } from 'react';

const GaugeChart = ({ current, goal, color }) => {
  const percentage = (current / goal) * 100;
  const rotation = (percentage / 100) * 180;
  
  return (
    <div className="relative w-40 h-32 mx-auto overflow-hidden">
      {/* Background arc */}
      <svg className="w-full h-full" viewBox="0 0 200 100">
        <path
          d="M 20 80 A 80 80 0 0 1 180 80"
          fill="none"
          stroke="#374151"
          strokeWidth="16"
          strokeLinecap=""
        />
        {/* Colored arc */}
        <path
          d="M 20 80 A 80 80 0 0 1 180 80"
          fill="none"
          stroke={color}
          strokeWidth="16"
          strokeLinecap=""
          strokeDasharray={`${(rotation / 180) * 251.2} 251.2`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center mt-2">
        <div className="text-[13px] font-bold text-white">{current} DAYS</div>
        <div className="text-xs text-gray-400 mt-1">{goal} DAYS</div>
      </div>
    </div>
  );
};

const GaugeDagen = ({ current, goal, color }) => {
  const percentage = (current / goal) * 100;
  const rotation = (percentage / 100) * 180;
  
  return (
    <div className="relative w-40 h-32 mx-auto overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 200 100">
        <path
          d="M 20 80 A 80 80 0 0 1 180 80"
          fill="none"
          stroke="#374151"
          strokeWidth="16"
          strokeLinecap=""
        />
        <path
          d="M 20 80 A 80 80 0 0 1 180 80"
          fill="none"
          stroke={color}
          strokeWidth="16"
          strokeLinecap=""
          strokeDasharray={`${(rotation / 180) * 251.2} 251.2`}
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center mt-3">
        <div className="text-[13px] font-bold text-white">{current} DAGEN</div>
        <div className="text-xs text-gray-400 mt-1">{goal} DAGEN</div>
      </div>
    </div>
  );
};

const PillarCard = () => (
  <div className=" bg-[#090D28]   px-1 pt-3 ">
    <div className="text-[15px] text-gray-100 text-center font-extralight uppercase  ">
      <div>Average</div>
      
    </div>

    <div className="mt-4 space-y-3">
      <div className="rounded-md bg-[#0E1330] border  py-2 text-center shadow-[0_0_0_1px_rgba(24,211,89,0.3)]" style={{ borderColor: '#18D359' }}>
        <div className="text-[11px] text-gray-300">Goals</div>
        <div className="text-[11px] text-white font-semibold">7 DAYS</div>
      </div>
      <div className="rounded-md bg-[#18D359]  py-2 text-center">
        <div className="text-[11px] text-[#0E1330] font-semibold">Now</div>
        <div className="text-[11px] text-[#0E1330] font-semibold">7 DAYS</div>
      </div>
    </div>

    <div className="mt-4 flex-1 flex items-end justify-center">
      <div className="w-full h-[250px] rounded-lg bg-[#2A3354] relative overflow-hidden border border-[#3A456B]/40">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={`left-tick-${i}`} className="absolute left-2 z-20" style={{ top: 18 + i * 28 }}>
            <div className={`${i === 4 ? 'w-6' : 'w-4'} h-[2px] rounded bg-white/80`} />
          </div>
        ))}
        <div className="absolute left-0 right-0 bottom-0  z-10">
          <div className="w-full h-[78px] rounded-[12px] bg-[#18D359]" />
        </div>
      </div>
    </div>
  </div>
);

// Pillar with custom title and badges used in column 3
const PillarInfo = ({ titleLines = [], goalsLabel = '56 Days', nowLabel = '7 Days', fillPercent = 50 }) => (
  <div className=" bg-[#090D28]   px-1 pt-3">
    <div className="text-[13px] text-gray-100 text-center font-extralight uppercase leading-tight ">
      {titleLines.map((t, i) => (
        <div key={i}>{t}</div>
      ))}
    </div>

    <div className="mt-3 space-y-2">
      <div className="rounded-md bg-[#0E1330] border  py-1.5 text-center shadow-[0_0_0_1px_rgba(24,211,89,0.3)]" style={{ borderColor: '#18D359' }}>
        <div className="text-[11px] text-gray-300">Goals</div>
        <div className="text-[10px] text-white font-semibold">{goalsLabel}</div>
      </div>
      <div className="rounded-md bg-[#18D359]  py-1.5 text-center">
        <div className="text-[11px] text-[#0E1330] font-semibold">Now</div>
        <div className="text-[10px] text-[#0E1330] font-semibold">{nowLabel}</div>
      </div>
    </div>

    <div className="mt-3 flex-1 flex items-end justify-center">
      <div className="w-full h-[250px] rounded-lg bg-[#2A3354] relative overflow-hidden border border-[#3A456B]/40">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={`left-tick-${i}`} className="absolute left-2 z-20" style={{ top: 18 + i * 23 }}>
            <div className={`${i === 4 ? 'w-6' : 'w-4'} h-[2px] rounded bg-white/80`} />
          </div>
        ))}
        <div className="absolute left-0 right-0 bottom-0  z-10">
          <div className="w-full h-[78px] rounded-[12px] bg-[#18D359]" />
        </div>
        <div className="absolute left-0 right-0 bottom-0  z-10">
          <div className="w-full rounded-[12px] bg-[#18D359]" style={{ height: `${Math.max(0, Math.min(100, fillPercent))}%` }} />
        </div>
      </div>
    </div>
  </div>
);

export const DurationProperty = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('7 Days');
  
  const metrics = [
    { title: 'PERMIT SUBMITTED', current: 16, goal: 14, color: '#22c55e' },
    { title: 'SIGNED RENTAL AGREEMENT', current: 16, goal: 56, color: '#22c55e' },
    { title: 'SIGNED CONSTRUCTION AGREEMENT', current: 16, goal: 56, color: '#22c55e' },
    { title: 'VERBAL AGREEMENT WITH TENANT', current: 16, goal: 14, color: '#ef4444' },
    { title: 'PERMIT SUBMITTED', current: 16, goal: 14, color: '#22c55e', isDagen: true },
    { title: 'VERBAL AGREEMENT WITH TENANT', current: 16, goal: 14, color: '#ef4444', isDagen: true },
  ];
  
  return (
    <div className=" p-1">
      <div className=" mx-auto">
        <h1 className="text-xl font-bold text-white mb-3">DURATION PROPERTY PRESERVATION</h1>
        
        {/* 4 columns: pillar | two cards | pillar | two cards */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-2">
          {/* Column 1: Pillar (keep same) */}
          <div className="flex md:col-span-2 ">
            <div className=" rounded-xl w-full  ">
              <PillarCard />
            </div>
          </div>

          {/* Column 2: two cards stacked */}
          <div className="flex flex-col gap-1 md:col-span-3">
            {[metrics[0], metrics[3]].map((metric, index) => (
              <div key={`c2-${index}`} className="bg-[#090D28] rounded-lg pt-6 p-1 min-h-[200px] hover:border-slate-600 transition-all">
                <h3 className="text-white font-semibold text-sm mb-5 h-10 flex items-center justify-center text-center whitespace-pre-line">
                  {metric.title}
                </h3>
                <GaugeChart current={metric.current} goal={metric.goal} color={metric.color} />
              </div>
            ))}
          </div>

          {/* Column 3: Two pillars horizontal with custom titles */}
          <div className="flex justify-center gap-2 md:col-span-4">
            <div className=" rounded-xl w-full  min-h-[260px]">
              <PillarInfo titleLines={["SIGNED", "RENTAL", "AGREEMENT"]} goalsLabel="56 Days" nowLabel="7 Days" fillPercent={60} />
            </div>
            <div className=" rounded-xl w-full py- min-h-[260px]">
              <PillarInfo titleLines={["SIGNED", "CONSTRUCTION", "AGREEMENT"]} goalsLabel="56 Days" nowLabel="7 Days" fillPercent={60} />
            </div>
          </div>

          {/* Column 4: two cards stacked (use DAYS gauges) */}
          <div className="flex flex-col gap-1 md:col-span-3">
            {[metrics[4], metrics[5]].map((metric, index) => (
              <div key={`c4-${index}`} className="bg-[#090D28] rounded-lg pt-5 p-1 min-h-[215px] hover:border-slate-600 transition-all">
                <h3 className="text-white font-semibold text-sm mb-5 h-10 flex items-center justify-center text-center whitespace-pre-line">
                  {metric.title}
                </h3>
                <GaugeChart current={metric.current} goal={metric.goal} color={metric.color} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DurationProperty;
