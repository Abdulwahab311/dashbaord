import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const pieData = [
  { name: "Module 1", value: 400, color: "#DB2777" },
  { name: "Module 2", value: 300, color: "#22D3EE" },
  { name: "Transactional Fees", value: 1400, color: "#1D4ED8" },
];

const PieChartComponent = () => {
  return (
    <div className="w-full">
      {/* Pie Chart */}
      <div className="w-full h-20">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={40}
              fill="#8884d8"
              dataKey="value"
              labelLine={false}
              stroke="none"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip wrapperStyle={{ fontSize: "10px" }} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Compact Legend */}
      <div className="mt-1 flex flex-wrap justify-center gap-2 text-[6px] text-white">
        {pieData.map((entry, index) => (
          <div key={index} className="flex items-center gap-1">
            <span
              className="w-2 h-2 rounded-full"
              style={{ backgroundColor: entry.color }}
            ></span>
            <span>{entry.name}</span>
            <span className="font-semibold">${entry.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartComponent;
