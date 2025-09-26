import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip } from 'recharts';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Header = ({ title }) => (
  <div className="text-center">
    <div className="font-semibold tracking-[0.2em] text-[clamp(12px,3vw,14px)] text-white">{title}</div>
  </div>
);

const COLORS = ['#265BFF', '#22D3EE', '#E4489A', '#9333EA'];

const LegendItem = ({ label, value, color }) => (
  <div className="flex items-center justify-between py-1 border-b border-white/5 last:border-0">
    <div className="flex items-center gap-1.5">
      <span className="inline-block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: color }} />
      <span className="uppercase tracking-widest text-gray-300 text-[clamp(10px,2.5vw,11px)]">{label}</span>
    </div>
    <div className="text-right text-white font-medium text-[clamp(10px,2.5vw,11px)]">{value}</div>
  </div>
);

// Custom Tooltip Renderer
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-[#252A51] border border-[#D9DFE6]/20 rounded-lg p-2 text-white text-[clamp(10px,2.5vw,11px)]">
        <div className="font-semibold">{data.name}</div>
        <div>FTE: {data.value}</div>
      </div>
    );
  }
  return null;
};

const Fte = () => {
  const data = [
    { name: 'MARKETING', value: 2 },
    { name: 'MANAGEMENT', value: 1 },
    { name: 'SALES', value: 3 },
    { name: 'DEVELOPMENT', value: 5 },
  ];

  return (
    <div className="text-white">
      <Card elevation={0} sx={{ backgroundColor: '#252A51', borderRadius: '12px' }}>
        <CardContent sx={{ p: '1rem !important' }}>
          <div className="mb-7 px-1">
            <Header title="FTE AND EMPLOYEMENT" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-center">
            {/* Left: Pie */}
            <div className="h-[10rem] sm:h-[12rem]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Tooltip content={<CustomTooltip />} />
                  <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={0}
                    outerRadius="80%"
                    stroke="none"
                    startAngle={90}
                    endAngle={450}
                  >
                    {data.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Right: Legend */}
            <div className="px-1">
              <div className="text-[clamp(9px,2.2vw,10px)] text-gray-300 tracking-widest mb-2">HOW MANY PEOPLE ARE IN WHAT POSITIONS?</div>
              <div className="w-full max-w-xs">
                {data.map((item, i) => (
                  <LegendItem key={item.name} label={item.name} value={item.value} color={COLORS[i % COLORS.length]} />
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Fte;