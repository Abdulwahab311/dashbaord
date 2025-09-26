import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// Define 8 slices and how deep each color should fill (in ring counts)
const RINGS = 10; // number of concentric rings
const RING_THICKNESS = 8; // smaller rings for compact chart
const SLICE_VALUE = 12.5; // 8 equal slices

const sectors = [
  { name: 'MANAGEMENT', color: '#E45757', depth: 8 },
  { name: 'MARKETING', color: '#F4C04B', depth: 6 },
  { name: 'SALES', color: '#7E9850', depth: 5 },
  { name: 'DEVELOPMENT', color: '#B7CAE8', depth: 9 },
  { name: 'RECRUITMENT', color: '#F6D777', depth: 6 },
  { name: 'DELIVERY', color: '#D07A3C', depth: 7 },
  { name: 'CUSTOMER SERVICE', color: '#B7CAE8', depth: 8 },
  { name: 'AFTER SALES', color: '#E3CDBE', depth: 4 },
];

const departments = sectors.map(s => ({ name: s.name, value: SLICE_VALUE }));

const RING_BG = '#F7F0E7'; // beige ring background
const SEPARATOR = '#1B2142'; // dark separator

const DepartmentCard = ({ name, value, delta = '+2%' }) => (
  <div className="rounded-lg p-1.5 bg-gradient-to-b from-[#000000] to-[#090D28] shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_6px_12px_rgba(0,0,0,0.25)]">
    <div className="text-white text-[9px] font-semibold tracking-widest uppercase text-center mb-1">{name}</div>
    <div className="flex items-center justify-center gap-1.5">
      <div className="text-white text-sm font-semibold leading-none">{value}%</div>
      <span className="text-[8px] px-1 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-400/20">{delta}</span>
    </div>
  </div>
);

const Departments = () => {
  return (
    <div className="text-white bg-[#252A51] p-2 rounded-lg">
      <div className="text-center mb-2">
        <h2 className="text-white text-[10px] font-semibold tracking-widest uppercase">
          DEPARTMENTS AND PROCESSES OPTIMISATION
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-center">
        {/* Multi-ring Pie Chart */}
        <div className="rounded-lg ">
          <div className="h-[295px]">
            <ResponsiveContainer width="120%" height="100%">
              <PieChart>
                {[...Array(RINGS)].map((_, ringIndex) => {
                  const inner = ringIndex * RING_THICKNESS; // start at 0 to fill center
                  const outer = inner + RING_THICKNESS;
                  return (
                    <Pie
                      key={`ring-${ringIndex}`}
                      data={departments}
                      dataKey="value"
                      nameKey="name"
                      cx="50%"
                      cy="50%"
                      innerRadius={inner}
                      outerRadius={outer}
                      startAngle={90}
                      endAngle={450}
                      paddingAngle={0}
                      stroke={SEPARATOR}
                      strokeWidth={0.5}
                    >
                      {sectors.map((sector, idx) => (
                        <Cell
                          key={`cell-${ringIndex}-${idx}`}
                          fill={ringIndex < sector.depth ? sector.color : RING_BG}
                        />
                      ))}
                    </Pie>
                  );
                })}
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Department Cards Grid */}
        <div className="grid grid-cols-2 gap-1.5">
          {sectors.map((dept) => (
            <DepartmentCard 
              key={dept.name} 
              name={dept.name} 
              value={36} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Departments;
