import React, { useState } from 'react';

const GaugeChart = ({ current, goal, color }) => {
  const percentage = (current / goal) * 100;
  const rotation = (percentage / 100) * 180;
  
  return (
    <div className="relative w-28 h-24 mx-auto">
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
    <div className="relative w-28 h-24 mx-auto">
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
  <div className=" bg-[#090D28]   px-2 pt-3">
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
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={`left-tick-${i}`} className="absolute left-2 z-20" style={{ top: 18 + i * 28 }}>
            <div className={`${i === 3 ? 'w-6' : 'w-4'} h-[2px] rounded bg-white/80`} />
          </div>
        ))}
        <div className="absolute left-0 right-0 bottom-0  z-10">
          <div className="w-full h-[78px] rounded-[12px] bg-[#18D359]" />
        </div>
      </div>
    </div>
  </div>
);

const DesignOntwrep = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('7 Days');

  const metrics = [
    { title: 'NITRATES ADVISUER RISICOBALEN', current: 16, goal: 1, color: '#22c55e' },
    { title: 'AANBEMEN SELECTIEKEN', current: 16, goal: 14, color: '#22c55e' },
    { title: 'VVE REGELS DUIDELIJK, VVE BEITERE AFMAKEN', current: 16, goal: 28, color: '#ef4444' },
    { title: 'DSFHTEVITE TEKENINGEN VOOR VERUNNING AANVRAAG', current: 16, goal: 14, color: '#ef4444' },
    { title: 'OFFERTE AANNEMER ONTVANGER', current: 16, goal: 7, color: '#f59e0b', isDagen: true },
    { title: 'NUTS OVERLEIS', current: 16, goal: 21, color: '#22c55e', isDagen: true },
  ];

  return (
    <div className=" p-1">
      <div className=" mx-auto">
        <h1 className="text-xl font-bold text-white mb-3">DESIGN ONTWERP & VERGUNNINGEN</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-1">
          <div className="lg:col-span-1">
            <div className="bg-[#090D28] rounded-">
              <PillarCard />
            </div>
          </div>

          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-1">
            {metrics.map((metric, index) => (
              <div
                key={index}
                className="bg-[#090D28] rounded-lg py-4  hover:border-slate-600 transition-all"
              >
                <h3 className="text-white font-semibold text-xs mb-4 h-8 flex items-center justify-center text-center whitespace-pre-line">
                  {metric.title}
                </h3>
                {metric.isDagen ? (
                  <GaugeDagen current={metric.current} goal={metric.goal} color={metric.color} />
                ) : (
                  <GaugeChart current={metric.current} goal={metric.goal} color={metric.color} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesignOntwrep;
