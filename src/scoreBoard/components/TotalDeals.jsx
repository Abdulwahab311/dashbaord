import React from 'react';

const TotalDeals = () => {
  return (
    <div className=" bg-[#181C3A] rounded-2xl py-5 px-2  text-center">
      {/* Inner black card */}
      <div className="bg-[#0B0F24] rounded-2xl p-2 mb-1">
        <div className="text-white text-xl font-semibold ">TOTAL DEALS</div>
        <div className="text-gray-300 text-xs mt-3 uppercase">GOAL: 12 DEALS</div>

        <div className="mt-5 text-white text-[96px] leading-none font-bold">18</div>

        <div className="mt-6 flex items-center space-x-3 text-xs justify-center">
          <span className="text-emerald-400 font-semibold">+12.5%</span>
          <span className="text-gray-300">VS LAST MONTH</span>
        </div>
      </div>

      {/* Mini KPI cards below big card */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { title: 'HEALTHCARE DEALS', value: 9 },
          { title: 'OTHER DEALS', value: 9 },
          { title: 'INDUSTRY DEALS', value: 9 },
        ].map((k, i) => (
          <div key={i} className="bg-[#090D28] rounded-lg pt-2 p-1  shadow-[0_0_0_1px_rgba(42,51,88,0.6)]">
            <div className="text-gray-300 text-[8px] mb-1 text-start">{k.title}</div>
            <div className="text-white text-xl font-bold text-center">{k.value}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TotalDeals;
