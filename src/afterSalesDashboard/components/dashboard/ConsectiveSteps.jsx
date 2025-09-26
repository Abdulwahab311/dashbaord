import React from "react";
// import TotalPilar from "./TotalPilar";
// import AfterSalesPilar from "./AfterSalesPilar";

const steps = [
  {
    title: 'SALES AGREEMENT SIGNED',
    goalValue: '14 DAYS',
    nowValue: '5 DAYS',
    barColor: '#18D359',
    nowColor: '#18D359'
  },
  {
    title: 'COMPLETE FILE TO BUYER',
    goalValue: '7 DAYS',
    nowValue: '5 DAYS',
    barColor: '#18D359',
    nowColor: '#18D359'
  },
  {
    title: 'SEND  SIGNED PURCHASE ',
    goalValue: '7 DAYS',
    nowValue: '3.5 DAYS',
    barColor: '#F5A345',
    nowColor: '#F5A345'
  },
  {
    title: 'TRANSFER OF PROPERTY',
    goalValue: 'VARIABLE',
    nowValue: '7 DAYS',
    barColor: '#F5A345',
    nowColor: '#F5A345'
  }
];

// SummaryTall extracted to dedicated components TotalPilar and AfterSalesPilar

  const ConsectiveSteps = () => {
  return (
    <div className="grid items-start sm:gap-3 ">
      {/* Small screens: show both pillars in one row */}
      {/* <div className="w-full flex items-start gap-2 sm:gap-3 xl:hidden">
        <div className="flex-shrink-0"><TotalPilar/></div>
        <div className="flex-shrink-0"><AfterSalesPilar/></div>
      </div> */}
      {/* Large screens: keep original left pillar */}
      {/* <div className="flex-shrink-0 hidden xl:block"><TotalPilar/></div> */}
      <section className="w-full min-w-0">
      <div className="  ">
        <div className=" sm:p-2.5  bg-[#090D28] ">
          <div className="px-1 sm:px-2 pb-2 sm:pb-3 lg:pb-4 p-3">
            <h2 className="text-white text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold tracking-wide">EXIT CONSECUTIVE STEPS</h2>
          </div>
          <div className="grid grid-flow-col auto-cols-full max-w-full gap-2 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 overflow-x-auto no-scrollbar">
            {/* Steps */}
              {steps.map((card) => (
                        <div key={card.title} className="flex-none shrink-0 flex flex-col w-full pt-2 pb-3 bg-[#181C3A] rounded-xl">
             <div className="text-[10px] text-gray-300 text-center leading-snug min-h-[28px]">{card.title}</div>
                  <div className="mt-2">
                    <div className="w-full rounded-md bg-[#181C3A] border px-2 py-1 text-center" style={{ borderColor: card.nowColor }}>
                      <div className="text-[9px] text-gray-300">Goals</div>
                      <div className="text-[9px] text-white font-bold">{card.goalValue}</div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="w-full rounded-md px-2 py-1 text-center" style={{ background: card.nowColor }}>
                      <div className="text-[9px] text-[#0E1330] font-semibold">Now</div>
                      <div className="text-[9px] text-black font-blod">{card.nowValue}</div>
                    </div>
                  </div>
                  <div className="mt-4 flex-1 flex items-end justify-center">
                    <div className="w-full h-[224px] rounded-lg bg-[#D9D9D93D] relative overflow-hidden">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div key={i} className="absolute left-3 z-20" style={{ bottom: 10 + i * 22 }}>
                          <div className={`${i === 4 ? 'w-6' : 'w-3'} h-[2px] rounded bg-white/80`} />
                        </div>
                      ))}
                      <div className="absolute left-0 right-0 bottom-0  z-10">
                        <div className="w-full h-[60px] rounded-md" style={{ background: card.barColor }} />
                      </div>
                    </div>
                  </div>
                </div>
              ))}


          </div>
        </div>
      </div>
           
      </section>
      {/* Large screens: keep original right pillar */}
     {/* <div className="flex-shrink-0 mt-2 sm:mt-3 lg:mt-4 xl:mt-0 hidden xl:block"><AfterSalesPilar/></div> */}
    </div>
  );
};

export default ConsectiveSteps;
