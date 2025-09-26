import React from 'react';

// Data inspired by the screenshot; colors tuned to the funnel palette
const phaseData = [
  {
    title: 'MARKETING',
    goal: '14 DAYS',
    now: 'Now 7 DAYS',
    header: { label: 'DOEL', bg: '#0F122E' },
    segments: [
      { label: '5 DAYS', color: '#3B82F6' },
      { label: '4 DAYS', color: '#EF4444' },
      { label: '3 DAYS', color: '#10B981' }
    ],
    average: '4.6'
  },
  {
    title: 'SALES',
    goal: '28 DAYS',
    now: 'Now 7 DAYS',
    header: { label: 'DOEL', bg: '#0F122E' },
    segments: [
      { label: '16 DAYS', color: '#F59E0B' },
      { label: '12 DAYS', color: '#10B981' }
    ],
    top: { label: '5 DAYS', color: '#3B82F6' },
    average: '7'
  },
  {
    title: 'CONTRACTFASE',
    goal: '35 DAYS',
    now: 'Now 28 DAYS',
    header: { label: 'DOEL', bg: '#0F122E' },
    segments: [
      { label: '6 DAYS', color: '#F59E0B' },
      { label: '3 DAYS', color: '#10B981' }
    ],
    top: { label: '5 DAYS', color: '#3B82F6' },
    average: '2'
  },
  {
    title: 'ONTWIKKELING',
    goal: '7 DAYS',
    now: 'Now 7 DAYS',
    header: { label: 'DOEL', bg: '#0F122E' },
    segments: [
      { label: '12 DAYS', color: '#F59E0B' },
      { label: '8 DAYS', color: '#10B981' }
    ],
    top: { label: '5 DAYS', color: '#3B82F6' },
    average: '4'
  },
  {
    title: '2e CONTRACTFASE',
    goal: '7 DAYS',
    now: 'Now 7 DAYS',
    header: { label: 'DOEL', bg: '#0F122E' },
    segments: [
      { label: '2 DAYS', color: '#F59E0B' },
      { label: '1 DAYS', color: '#10B981' }
    ],
    top: { label: '5 DAYS', color: '#3B82F6' },
    average: '4'
  }
];

const quarterData = {
  goalLabel: 'GOAL',
  goal: '15 DAYS',
  now: 'Now 21.6',
  segments: [
    { label: '4.6 DAYS', color: '#22D3EE', height: '20%' },
    { label: '7 DAYS', color: '#8B5CF6', height: '20%' },
    { label: '2 DAYS', color: '#DB2777', height: '20%' },
    { label: '4 DAYS', color: '#10B981', height: '20%' },
    { label: '3 DAYS', color: '#F59E0B', height: '20%' }
  ]
};

const PillarCard = ({ item }) => {
  // If a separate top section is present, render it; otherwise, use first segment as top
  const top = item.top || { label: item.segments[0].label, color: '#3B82F6' };
  const bottoms = item.top ? item.segments : item.segments.slice(1);

  return (
    <div className="text-white">
      {/* Top DOEL card (separate) */}
      <div
        className="rounded-xl p-2 mb-2"
        style={{
          backgroundImage: 'linear-gradient(180deg, #090D28 0%, rgba(255,255,255,0.10) 100%)'
        }}
      >
        <div className="text-gray-300 text-[10px] text-center mb-1">{item.header.label}</div>
        <div className="text-white text-xl font-bold text-center">{item.goal}</div>
      </div>

      {/* Body card (separate) */}
      <div className="bg-[#0B0F24] rounded-lg p-2 ">
        <div className="text-white text-xs font-semibold text-center mb-1">{item.now}</div>

        {/* Large stacked blocks */}
        <div className=" overflow-hidden bg-[#0B0F24] p-1 ">
          <div className=" overflow-hidden">
            {/* Top block */}
            <div className="h-24 w-full flex items-center justify-center rounded-t-lg" style={{ backgroundColor: top.color }}>
              <span className="text-white font-medium text-sm">{top.label}</span>
            </div>
            {/* Middle block(s) */}
            {bottoms.slice(0, bottoms.length - 1).map((b, i) => (
              <div key={i} className="h-10 w-full flex items-center justify-center" style={{ backgroundColor: b.color }}>
                <span className="text-[#0B0F24] font-medium text-sm">{b.label}</span>
              </div>
            ))}
            {/* Bottom block with average overlay */}
            {bottoms.length > 0 && (
              <div className="h-20 w-full flex items-center justify-center relative rounded-b-lg" style={{ backgroundColor: bottoms[bottoms.length - 1].color }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-[#0B0F24] font-bold text-xs tracking-wide text-center">AVERAGE NOW</span>
                  <span className="text-[#0B0F24] font-extrabold text-lg">{item.average}</span>
                </div>
                <span className="opacity-0">{bottoms[bottoms.length - 1].label}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom title */}
      <div className="mt-1 text-[9px] text-gray-300 text-center uppercase tracking-wide">{item.title}</div>
    </div>
  );
};

const QuarterCard = ({ data }) => {
  return (
    <div className="text-white">
      {/* Top GOAL card (solid, no gradient) */}
      <div className="bg-[#0B0F24] rounded-2xl p-2 mb-2">
        <div className="text-gray-300 text-[10px] text-center mb-1">GOAL</div>
        <div className="text-white text-xl font-bold text-center">{data.goal}</div>
      </div>

      {/* Body card (match others) */}
      <div className="bg-[#0B0F24] rounded-lg p-2 ">
        <div className="text-white text-xs font-semibold text-center mb-1">{data.now}</div>
        <div className=" overflow-hidden bg-[#0B0F24] p-1 ">
          <div className=" overflow-hidden">
            {data.segments.map((s, i) => (
              <div
                key={i}
                className={`w-full flex items-center justify-center ${i === 0 ? 'h-19 rounded-t-lg' : i === data.segments.length - 1 ? 'h-15 rounded-b-lg relative' : 'h-8'}`}
                style={{ backgroundColor: s.color }}
              >
                {i === data.segments.length - 1 ? (
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-[#0B0F24] font-bold text-[10px] tracking-wide text-center">AVERAGE NOW</span>
                    <span className="text-[#0B0F24] font-extrabold text-base">{s.label.split(' ')[0]}</span>
                  </div>
                ) : (
                  <span className="text-white font-medium text-xs">{s.label}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Pilars = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-6 gap-2">
      {phaseData.map((p, i) => (
        <PillarCard key={i} item={p} />
      ))}
      <QuarterCard data={quarterData} />
    </div>
  );
};

export default Pilars;


