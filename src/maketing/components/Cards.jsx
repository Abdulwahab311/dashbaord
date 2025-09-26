import React from 'react';

const sources = [
  {
    title: 'TOTAAL',
    spend: '€ 7.6K',
    spendNote: 'SPEND THIS MONTH',
    leads: 481,
    won: 108,
    qualityPct: 69,
    highlight: true,
    spendColor: '#10B981',
  },
  {
    title: 'BESTAANDE ',
    spend: '€ 0.4K',
    spendNote: 'SPEND THIS MONTH',
    leads: 59,
    won: 12,
    qualityPct: 69,
    spendColor: '#10B981',
    qualityColor: '#C53B43',
    wonBadgeBg: '#3b0b0b',
    wonBadgeBorder: '#991B1B',
  },
  {
    title: ' MEDIA',
    spend: '€ 1.7K',
    spendNote: 'SPEND THIS MONTH',
    leads: 121,
    won: 32,
    qualityPct: 69,
    spendColor: '#F97316',
  },
  {
    title: 'VASTGOED.NL',
    spend: '€ 4.1K',
    spendNote: 'SPEND THIS MONTH',
    leads: 86,
    won: 24,
    qualityPct: 69,
    spendColor: '#EF4444',
  },
  {
    title: 'MAKELAARS',
    spend: '€ 2.4K',
    spendNote: 'SPEND THIS MONTH',
    leads: 174,
    won: 43,
    qualityPct: 69,
    spendColor: '#F97316',
  },
];

function SpendBar({ color = '#10B981' }) {
  return (
    <div className="w-full">
      <div className="h-1.5 bg-[#2a3358] rounded-full overflow-hidden">
        <div className="h-full" style={{ width: '70%', backgroundColor: color }} />
      </div>
      <div className="flex justify-between text-[9px] text-gray-400 mt-1">
        <span>0%</span>
        <span>64%</span>
        <span>100%</span>
      </div>
    </div>
  );
}

function QualityBar({ pct = 0, color = '#10B981' }) {
  return (
    <div className="w-full">
      <div className="h-6 bg-white/10 rounded-md overflow-hidden flex items-center">
        <div
          className="h-full text-[10px] text-white flex items-center justify-center"
          style={{ width: `${pct}%`, backgroundColor: color }}
        >
          {pct}%
        </div>
        <div className="flex-1" />
      </div>
      <div className="text-[10px] text-gray-300 mt-1">QUALITY LEADS</div>
    </div>
  );
}

const Card = ({ item }) => {
  return (
    <div
      className={`bg-[#0B0F24] rounded-xl p-4 text-white flex flex-col gap-4 border text-center ${
        item.highlight ? 'border-emerald-600' : 'border-transparent'
      }`}
    >
      <div className="text-[10px] tracking-widest text-gray-300">{item.title}</div>

      <div>
        <div className="text-sm text-white font-semibold">{item.spend}</div>
        <div className="text-[9px] text-gray-400">{item.spendNote}</div>
      </div>

      <SpendBar color={item.spendColor} />

      <div>
        <div className="text-4xl font-extrabold">{item.leads}</div>
        <div className="text-[10px] text-gray-400 mt-1">LEADS</div>
      </div>

      <div>
        <div
          className={`inline-flex items-center justify-center w-14 h-14 rounded-md text-2xl font-bold border mx-auto`}
          style={{
            backgroundColor: item.wonBadgeBg || 'rgba(255,255,255,0.05)',
            borderColor: item.wonBadgeBorder || 'rgba(255,255,255,0.1)',
          }}
        >
          {item.won}
        </div>
        <div className="text-[10px] text-gray-400 mt-1">WON</div>
      </div>

      <QualityBar pct={item.qualityPct} color={item.qualityColor || '#10B981'} />
    </div>
  );
};


export default function Cards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
      {sources.map((s, i) => (
        <Card key={i} item={s} />
      ))}
    </div>
  );
}
