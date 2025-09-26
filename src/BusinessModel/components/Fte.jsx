import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Header = ({ title }) => (
  <div className="text-center">
    <div className="font-semibold tracking-[0.2em] text-lg md:text-sm text-white">{title}</div>
  </div>
);

const COLORS = ['#265BFF', '#22D3EE', '#E4489A', '#9333EA'];

const LegendItem = ({ label, value, color }) => (
  <div className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
    <div className="flex items-center gap-2">
      <span className="inline-block w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
      <span className="uppercase tracking-widest text-gray-300 text-[12px]">{label}</span>
    </div>
    <div className="text-right text-white font-medium text-[12px]">{value}</div>
  </div>
);

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
        <CardContent sx={{ p: 2 }}>
          <div className="mb-4 px-2">
            <Header title="FTE AND EMPLOYEMENT" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {/* Left: Pie */}
            <div className="h-64">
              <ResponsiveContainer width="110%" height="100%">
                <PieChart>
                  <Pie
                    data={data}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={0}
                    outerRadius={80}
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
            <div className="px-2">
              <div className="text-[11px] text-gray-300 tracking-widest mb-3">HOW MANY PEOPLE ARE IN WHAT POSITIONS?</div>
              <div className="w-full max-w-sm">
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
