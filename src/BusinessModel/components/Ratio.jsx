import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Header = ({ title }) => (
  <Typography sx={{ color: '#FFFFFF', fontWeight: 800, letterSpacing: '0.08em', fontSize: { xs: '1rem', md: '1.2rem' } }}>
    {title}
  </Typography>
);

const COLORS = ['#265BFF', '#22D3EE', '#E4489A', '#9333EA'];

const Panel = ({ title, data }) => {
  return (
    <Card elevation={0} sx={{ backgroundColor: '#252A51', border: '1px solid #252B42', borderRadius: '10px', overflow: 'hidden' }}>
      <CardContent sx={{ p: 1.25 }}>
        <Typography sx={{ color: '#e5e7eb', fontWeight: 600, fontSize: '0.85rem', mb: 1 }}>{title}</Typography>
        <div className="pl-1 pr-2 py-2 flex flex-col items-center gap-6">
          <div className="h-[220px] w-full max-w-[180px] self-start">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  cx="48%"
                  cy="50%"
                  innerRadius={0}
                  outerRadius={54}
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="w-full max-w-sm text-[9px] text-gray-300">
            {data.map((item, i) => (
              <div key={item.name} className="flex items-center justify-between py-1.5 border-b border-white/5 last:border-0">
                <div className="flex items-center gap-2">
                  <span className="inline-block w-1.5 h-1.5 rounded-full" style={{ backgroundColor: COLORS[i % COLORS.length] }} />
                  <span className="uppercase tracking-widest">{item.name}</span>
                </div>
                <div className="text-right text-white">${item.value.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Ratio = () => {
  const revenue = [
    { name: 'MODULE 1', value: 25000 },
    { name: 'MODULE 2', value: 25000 },
    { name: 'TRANSACTION FEES', value: 25000 },
  ];

  const costs = [
    { name: 'MODULE 1', value: 25000 },
    { name: 'MODULE 2', value: 25000 },
    { name: 'TRANSACTION FEES', value: 25000 },
    { name: 'MODULE 3', value: 25000 },
  ];

  const profits = [
    { name: 'MODULE 1', value: 25000 },
    { name: 'MODULE 2', value: 25000 },
    { name: 'TRANSACTION FEES', value: 25000 },
    { name: 'MODULE 3', value: 25000 },
  ];

  return (
    <div className="text-white">
      <Card elevation={0} sx={{ backgroundColor: '#0A0F1F', borderRadius: '12px' }}>
        <CardContent sx={{ p: 2 }}>
          <div className="mb-5 px-2">
            <Header title="RATIO" />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
            <Panel title="Revenue" data={revenue} />
            <Panel title="Costs" data={costs} />
            <Panel title="Profits" data={profits} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Ratio;


