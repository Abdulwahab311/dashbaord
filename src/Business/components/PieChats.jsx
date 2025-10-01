import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const COLORS = ['#265BFF', '#22D3EE', '#E4489A', '#9333EA'];

const Legend = ({ items }) => (
  <div className="w-full text-[10px] text-gray-300 space-y-1">
    {items.map((item, i) => (
      <div
        key={`${item.name}-${i}`}
        className="flex items-center justify-between py-1"
      >
        <div className="flex items-center gap-2 min-w-0">
          <span
            className="inline-block w-2 h-2 rounded-full shrink-0"
            style={{ backgroundColor: COLORS[i % COLORS.length] }}
          />
          {/* ✅ Name responsive + truncate */}
          <span className="uppercase tracking-wider truncate max-w-[70px] sm:max-w-[100px] text-[9px] sm:text-[10px]">
            {item.name}
          </span>
        </div>
        {typeof item.value === "number" ? (
          <div className="text-white font-semibold text-[9px] sm:text-[10px] truncate max-w-[80px]">
            $
            {item.value.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </div>
        ) : (
          <div className="text-white font-semibold text-[9px] sm:text-[10px] truncate max-w-[80px]">
            {item.value}
          </div>
        )}
      </div>
    ))}
  </div>
);


const Card = ({ title, children }) => (
  <div className="bg-[#090D28] rounded-xl p-2 border border-[#222948] h-full flex flex-col">
    <div className="text-gray-200 text-xs font-semibold mb-1">{title}</div>
    {children}
  </div>
);

const PiePanel = ({ title, data, subtitle, innerBg = false, showLegend = true }) => (
  <Card title={title}>
    <div className={`${innerBg ? 'bg-[#181C3A]' : ''} rounded-lg p-2 h-full flex flex-col`}>
      {subtitle ? (
        <div className="text-center text-[10px] text-gray-200 mb-1 font-semibold">{subtitle}</div>
      ) : null}
      {/* ✅ Aspect ratio for responsive sizing */}
      <div className="aspect-square w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={0}
              outerRadius="80%"
              stroke="none"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      {showLegend && <Legend items={data} />}
    </div>
  </Card>
);

const LeadsPanel = () => {
  const leads = [
    { name: 'Short', value: 75 },
    { name: 'Long', value: 25 },
  ];
  return <PiePanel title="Short/long" data={leads} innerBg showLegend={false} subtitle="insight per category" />;
};

const PieChats = () => {
  const revenue = [
    { name: 'Category 1', value: 50000 },
    { name: 'Category 2', value: 25000 },
    { name: 'Category 3', value: 15000 },
  ];

  const costs = [
    { name: 'Category 1', value: 50000 },
    { name: 'Category 2', value: 25000 },
    { name: 'Category 3', value: 10000 },
  ];

  const profits = [
    { name: 'Category 1', value: 50000 },
    { name: 'Category 2', value: 25000 },
    { name: 'Category 3', value: 10000 },
  ];

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 overflow-hidden items-stretch">
      <LeadsPanel />
      <PiePanel title="Revenue" data={revenue} subtitle="insight per category" innerBg />
      <PiePanel title="Costs" data={costs} subtitle="insight per category" innerBg />
      <PiePanel title="Profits" data={profits} subtitle="insight per category" innerBg />
    </div>
  );
};

export default PieChats;
