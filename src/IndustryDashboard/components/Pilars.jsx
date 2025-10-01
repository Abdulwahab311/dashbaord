import React from "react";

const Pillar = ({ title, goalDays = 14, nowDays = 7, barColor = "#18D359", barHeight = 80 }) => {
  return (
    <div className="grid grid-cols-1 bg-[#090D28] px-1 pt-2">
      <div className="text-[8px] text-gray-200 text-center font-semibold leading-tight whitespace-pre-line">
        {title}
      </div>

      <div className="mt-2 space-y-5">
        <div
          className="rounded-md bg-[#0E1330] border px-1 py-2 text-center shadow-[0_0_0_1px_rgba(24,211,89,0.3)]"
          style={{ borderColor: "#18D359" }}
        >
          <div className="text-[9px] text-gray-300">Goals</div>
          <div className="text-[8px] text-white font-semibold">{goalDays} Days</div>
        </div>
        <div className="rounded-md px-1 py-1 text-center" style={{ background: barColor }}>
          <div className="text-[11px] text-[#0E1330] font-semibold">Now</div>
          <div className="text-[11px] text-[#0E1330] font-semibold">{nowDays} Days</div>
        </div>
      </div>

      <div className=" flex-1 flex items-end justify-center mt-5">
        <div className="w-full h-[250px] rounded-lg bg-[#2A3354] relative overflow-hidden">
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="absolute left-3 z-20" style={{ bottom: 9 + i * 22 }}>
              <div className={`h-[2px] ${i === 4 ? "w-6" : "w-3"} rounded bg-white/80`} />
            </div>
          ))}
          <div className="absolute left-0 right-0 bottom-0 z-10">
            <div className="w-full rounded-md" style={{ height: `${barHeight}px`, background: barColor }} />
          </div>
        </div>
      </div>
    </div>
  );
};

const Pilars = () => {
  const pillars = [
    {
      title: "ConstructION Design\nFire Safety Advisor\nHook Up",
      goalDays: 21,
      nowDays: 7,
      barColor: "#F59E0B",
      barHeight: 75,
    },
    {
      title: "Ate A Specification\nDrawing (Send To\nThe Municipality)",
      goalDays: 14,
      nowDays: 7,
      barColor: "#18D359",
      barHeight: 120,
    },
    {
      title: "Project Management\nSelect (Construction\nSupervisor)",
      goalDays: 1,
      nowDays: 7,
      barColor: "#F59E0B",
      barHeight: 160,
    },
    {
      title: "Engage A Project\nNotary",
      goalDays: 14,
      nowDays: 7,
      barColor: "#18D359",
      barHeight: 55,
    },
    {
      title: "Division Drawings\nAnd Draft Division\nDeed Made",
      goalDays: 14,
      nowDays: 7,
      barColor: "#F04245",
      barHeight: 200,
    },
    {
      title: "Drawing Up A\nTechnical Description\n(Architect)",
      goalDays: 14,
      nowDays: 7,
      barColor: "#18D359",
      barHeight: 150,
    },
    {
      title: "Construction\nAgreement",
      goalDays: 14,
      nowDays: 7,
      barColor: "#18D359",
      barHeight: 130,
    },
  ];

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-1  h-48 mt-4">
      {pillars.map((p, idx) => (
        <Pillar key={idx} {...p} />
      ))}
    </div>
  );
};

export default Pilars;
