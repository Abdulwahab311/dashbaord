import React from 'react';

const OverviewFunnel = () => {
  const stages = [
    { name: 'SALES' },
    { name: '1e contr. fase' },
    { name: 'DEVELOPMENT' },
    { name: '2nd CONTRACT' },
    { name: 'EXIT' }
  ];

  const rows = [
    {
      label: 'GROSS REVENUE',
      total: '€14.5M',
      values: ['€2.3M', '€4.3M', '€4.3M', '€4.3M', '€4.3M'],
      bgColor: 'bg-cyan-400',
      textColor: 'text-white'
    },
    {
      label: 'TOTAL ACTIVE DEALS',
      total: '14',
      values: ['4', '3', '2', '5', '5'],
      bgColor: 'bg-cyan-400',
      textColor: 'text-white'
    },
    {
      label: 'TOTAL URGENT DEALS',
      total: '7',
      values: ['4', '3', '2', '', ''],
      bgColor: 'bg-red-500',
      textColor: 'text-white',
      endAt: 3
    },
    {
      label: 'TOTAL MID URG DEALS',
      total: '8',
      values: ['4', '3', '2', '5', ''],
      bgColor: 'bg-orange-500',
      textColor: 'text-white',
      endAt: 4
    },
    {
      label: 'TOTAL LOW URG DEALS',
      total: '4',
      values: ['4', '3', '2', '', '5'],
      bgColor: 'bg-green-500',
      textColor: 'text-white',
      skipColumns: [3]
    }
  ];

  return (
    <div className="bg-[#090D28] p-5 rounded-lg">
      <div className="w-full mx-auto">
        <h1 className="text-white text-xl font-bold mb-1">OVERVIEW FUNNEL</h1>

        <div className="bg-[#090D28]  overflow-hidden border-2 border-dashed border-slate-600">
          {/* Header Row */}
          <div className="grid grid-cols-6 border-b-2 border-dashed border-slate-600">
            <div className="bg-[#090D28] p-2"></div>
            {stages.map((stage, index) => (
              <div
                key={index}
                className="bg-[#090D28] p-2 border-l-2 border-dashed border-slate-600 text-center"
              >
                <div className="text-white font-semibold text-xs uppercase tracking-wide">
                  {stage.name}
                </div>
              </div>
            ))}
          </div>

          {/* Data Rows */}
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-6 border-b-2 border-dashed border-slate-500 last:border-b-0"
            >
              {/* Label Column - fixed color #25B2E5 */}
              <div className="p-2 flex flex-col justify-center" style={{ backgroundColor: '#25B2E5' }}>
                <div className={`${row.textColor} font-bold text-xs leading-tight text-center`}>
                  {row.label.split(' ').map((word, i) => (
                    <div key={i}>{word}</div>
                  ))}
                </div>
                <div className={`${row.textColor} text-xl font-bold mt-1 text-center`}>
                  {row.total}
                </div>
              </div>

              {/* Value Columns */}
              {row.values.map((value, colIndex) => {
                const shouldShow = row.endAt
                  ? colIndex < row.endAt
                  : row.skipColumns
                  ? !row.skipColumns.includes(colIndex)
                  : true;

                const useCustomBlue = rowIndex <= 1 && shouldShow && value; // first two rows
                const cellBg = shouldShow && value ? row.bgColor : 'bg-[#0B0F24]';

                return (
                  <div
                    key={colIndex}
                    className={`p-2 border-l-2 border-dashed border-slate-500 flex items-center justify-center ${useCustomBlue ? '' : cellBg}`}
                    style={useCustomBlue ? { backgroundColor: '#2957B4' } : undefined}
                  >
                    {shouldShow && value && (
                      <span className={`${row.textColor} text-xl font-bold`}>
                        {value}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OverviewFunnel;