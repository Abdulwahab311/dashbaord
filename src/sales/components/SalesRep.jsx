import React from 'react';

const reps = [
  {
    name: 'Samuel',
    value: '470 k',
    rank: 1,
    img: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=512&auto=format&fit=crop'
  },
  {
    name: 'Tom',
    value: '470 k',
    rank: 2,
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=512&auto=format&fit=crop'
  },
  {
    name: 'Abdul',
    value: '470 k',
    rank: 3,
    img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=512&auto=format&fit=crop'
  }
];

const RankBadge = ({ rank, color = '#f59e0b' }) => (
  <div
    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 rounded-full text-[12px] font-bold flex items-center justify-center"
    style={{ backgroundColor: color, color: '#0b0f24', boxShadow: '0 2px 6px rgba(0,0,0,0.35)' }}
  >
    {rank}
  </div>
);

const Avatar = ({ src, ringColor = '#f59e0b' }) => (
  <div className="relative">
    <img
      src={src}
      alt="rep"
      className="w-40 h-40 rounded-full object-cover border-2"
      style={{ borderColor: ringColor }}
    />
  </div>
);

const SalesRep = () => {
  return (
    <div className="bg-[#090D28] rounded-xl border  p-4">
      <div className="text-white text-sm font-semibold">Revenue Trough The Sales Rep</div>
      <div className="text-gray-400 text-xs mb-6">This Month</div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start justify-items-center">
        {reps.map((rep, idx) => {
          const ringColor = idx === 0 ? '#f59e0b' : idx === 1 ? '#94a3b8' : '#fbbf24';
          const badgeColor = idx === 0 ? '#f59e0b' : idx === 1 ? '#cbd5e1' : '#f59e0b';
          return (
            <div key={rep.name} className="flex flex-col items-center">
              <div className="relative">
                <Avatar src={rep.img} ringColor={ringColor} />
                <RankBadge rank={rep.rank} color={badgeColor} />
              </div>
              <div className="mt-6 text-white text-4xl font-bold tracking-wide">{rep.value}</div>
              <div className="mt-1 text-gray-300 text-lg">{rep.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SalesRep;
