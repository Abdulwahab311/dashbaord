import React from "react";

const TotalPilar = () => {
  return (
    <div className=" bg-[#090D28]   px-2 pt-3 pb-4">
      <div className="text-[8px] text-gray-100 text-center font-extralight uppercase tracking-wide leading-tight ">
        <div>TOTAL DURATION</div>
        <div>EXIT</div>
      </div>

      <div className="mt-4 space-y-3">
        <div className="rounded-md bg-[#0E1330] border  py-2 text-center shadow-[0_0_0_1px_rgba(24,211,89,0.3)]" style={{ borderColor: '#18D359' }}>
          <div className="text-[11px] text-gray-300">Goals</div>
          <div className="text-[11px] text-white font-semibold">28 DAYS</div>
        </div>
        <div className="rounded-md bg-[#18D359]  py-2 text-center">
          <div className="text-[11px] text-[#0E1330] font-semibold">Now</div>
          <div className="text-[11px] text-[#0E1330] font-semibold">15.5 DAYS</div>
        </div>
      </div>

      <div className="mt-4 flex-1 flex items-end justify-center">
        <div className="w-full h-[250px] rounded-lg bg-[#2A3354] relative overflow-hidden border border-[#3A456B]/40">
          
          {/* Added left-side scale lines to match requested pillar ticks */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={`left-tick-${i}`} className="absolute left-2 z-20" style={{ top: 18 + i * 28 }}>
              <div className={`h-[2px] ${i === 3 ? 'w-6' : 'w-4'} rounded bg-white/80`} />
            </div>
          ))}
          <div className="absolute left-0 right-0 bottom-0  z-10">
            <div className="w-full h-[78px] rounded-[12px] bg-[#18D359]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalPilar;
