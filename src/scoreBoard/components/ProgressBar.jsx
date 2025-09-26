import React from 'react';

const ProgressBar = () => {
  return (
    <div className="w-full bg-[#0B0F24] rounded-2xl p-4 mt-2">
      <div className="h-10 w-full  overflow-hidden flex">
        <div className="h-full" style={{ width: '50%', backgroundColor: '#7086FD' }} />
        <div className="h-full" style={{ width: '25%', backgroundColor: '#F04245' }} />
        <div className="h-full" style={{ width: '15%', backgroundColor: '#FFAE4C' }} />
        <div className="h-full" style={{ width: '10%', backgroundColor: '#07DBFA' }} />
      </div>
      <div className="mt-3 flex justify-between text-gray-300 text-sm px-1">
        <span>0%</span>
        <span>50%</span>
        <span>75%</span>
        <span>100%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
