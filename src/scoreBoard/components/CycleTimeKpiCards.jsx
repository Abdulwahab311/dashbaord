import React from 'react';

const phaseData = [
  {
    title: 'MARKETING',
    titleColor: '#F59E0B',
    goal: '3 DAYS',
    current: 'Now 4.6',
    segments: [
      { label: '5 DAYS', color: '#3B82F6', height: '33%' },
      { label: '4 DAYS', color: '#F97316', height: '33%' },
      { label: '3 DAYS', color: '#EF4444', height: '34%' }
    ]
  },
  {
    title: 'SALES',
    titleColor: '#F97316',
    goal: '12 DAYS',
    current: 'Now 7',
    segments: [
      { label: '16 DAYS', color: '#3B82F6', height: '33%' },
      { label: '12 DAYS', color: '#F97316', height: '33%' },
      { label: '3 DAYS', color: '#EF4444', height: '34%' }
    ]
  },
  {
    title: '1E CONTRACTPHASE',
    titleColor: '#06B6D4',
    goal: '3 DAYS',
    current: 'Now 2',
    segments: [
      { label: '6 DAYS', color: '#3B82F6', height: '33%' },
      { label: '3 DAYS', color: '#F97316', height: '33%' },
      { label: '2 DAYS', color: '#EF4444', height: '34%' }
    ]
  },
  {
    title: 'DEVELOPMENT',
    titleColor: '#10B981',
    goal: '8 DAYS',
    current: 'Now 4',
    segments: [
      { label: '12 DAYS', color: '#3B82F6', height: '33%' },
      { label: '8 DAYS', color: '#F97316', height: '33%' },
      { label: '4 DAYS', color: '#EF4444', height: '34%' }
    ]
  },
  {
    title: '2E CONTRACTPHASE',
    titleColor: '#8B5CF6',
    goal: 'DAYS',
    current: 'Now 4',
    segments: [
      { label: '2 DAYS', color: '#3B82F6', height: '33%' },
      { label: '1 DAYS', color: '#F97316', height: '33%' },
      { label: '4 DAYS', color: '#EF4444', height: '34%' }
    ]
  }
];

const quarterData = {
  title: 'QUARTER',
  goal: '15 DAGEN',
  current: 'Now 21.6',
  segments: [
    { label: '4.6 DAYS', color: '#06B6D4', height: '20%' },
    { label: '7 DAYS', color: '#8B5CF6', height: '35%' },
    { label: '2 DAYS', color: '#F97316', height: '10%' },
    { label: '4 DAYS', color: '#F59E0B', height: '20%' },
    { label: '3 DAYS', color: '#10B981', height: '15%' }
  ]
};

const PhaseCard = ({ data }) => {
  const top = data.segments[0];
  const bottom = data.segments.slice(1);
  const avg = data.current.split(' ')[1];

  return (
    <div className="bg-[#0B0F24]  rounded-2xl text-white font-medium ">
      {/* Header pill */}
      <div
        className="p-2  rounded-full  font-semibold mb-4 text-[8px]"
        style={{ backgroundColor: data.titleColor, color: data.titleColor === '#F59E0B' ? '#000' : '#fff' }}
      >
        {data.title}
      </div>

      {/* Goal */}
      <div className="mb-4 border border-white rounded-lg p-1">
        <div className="text-gray-300 text-[7px] text-center mb-1">Goal</div>
        <div className="text-[9px] font-bold text-center">{data.goal}</div>
      </div>

      {/* Current */}
      <div className="mb-4">
        <div className="text-gray-300 text-[7px] mb-1 text-center">Now {avg}</div>
       
      </div>

      {/* Chart container clone */}
      <div className="relative">
        {/* Top section */}
        <div className="px-3 py-2 rounded-t-lg" style={{ backgroundColor: top.color }}>
          <div className="text-white font-semibold text-center text-xs">{top.label}</div>
        </div>

        {/* Bottom stacked section */}
        <div className="px-3 py-5 rounded-b-lg" style={{ backgroundColor: bottom[0]?.color || '#ef4444' }}>
          <div className="space-y-1 text-center">
            {bottom.map((b, i) => (
              <div key={i} className="text-white font-semibold text-xs">{b.label}</div>
            ))}
          </div>
          {/* Average */}
          <div className="mt-4 pt-3 border-t border-white/20">
            <div className="text-white font-semibold text-[10px] tracking-wide">AVERAGE NOW</div>
            <div className="text-white text-sm font-bold text-center">{avg}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const QuarterCard = ({ data }) => {
  const avg = data.current.split(' ')[1];

  return (
    <div className="bg-[#0B0F24]  rounded-2xl text-white font-medium  ">
      {/* Goal box styled like other cards, but shows QUARTER label */}
      <div className="mb-4 border border-white rounded-lg p-2">
        <div className="text-gray-300 text-[11px] text-center mb-1">{data.title} </div>
        <div className="text-[11px] font-bold text-center">{data.goal}</div>
      </div>

      {/* Current */}
      <div className="mb-4">
        <div className="text-gray-300 text-[9px] font-semibold text-center">Now {avg}</div>
      </div>

      {/* Full stacked colored segments (rounded like the screenshot) */}
      <div className="w-full overflow-hidden rounded-lg">
        {data.segments.map((segment, index) => (
          <div
            key={index}
            className="w-full flex items-center justify-center text-white font-semibold py-3 "
            style={{
              height: segment.height,
              backgroundColor: segment.color
            }}
          >
            <span className="text-xs">{segment.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const CycleTimeKpiCards = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-6 gap-3">
      {phaseData.map((phase, index) => (
        <PhaseCard key={index} data={phase} />
      ))}
      <QuarterCard data={quarterData} />
    </div>
  );
};

export default CycleTimeKpiCards;
