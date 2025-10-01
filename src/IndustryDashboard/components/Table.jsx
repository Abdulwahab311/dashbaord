import React, { useState } from "react";
import Exit from "./Exit"; // import your Exit component

// --- STAGES config ---
const SHORT_STAGES = [
  { key: "marketResearch", label: "Market Research" },
  { key: "legalDue", label: "Legal Due Diligence" },
];

const LONG_STAGES = [
  { key: "marketResearch", label: "Market Research" },
  { key: "legalDue", label: "Legal Due Diligence" },
  { key: "technicalDue", label: "Technical Due Diligence" },
  { key: "floorplan", label: "Floorplan" },
  { key: "taxOptimization", label: "Tax Optimization" },
  { key: "financing", label: "Financing" },
  { key: "exitStrategy", label: "Exit Strategy" },
];

// --- Small table rows ---
const shortRows = [
  {
    street: "Project A",
    progress: { value: 9, total: 30, barColor: "#EF4444" },
    stageData: {
      marketResearch: {
        color: "#F04245",
        textColor: "#FFFFFF",
        rightTag: "3 Days",
      },
      legalDue: { color: "#F04245", textColor: "#FFFFFF", rightTag: "1 WK" },
    },
  },
  {
    street: "Project B",
    progress: { value: 12, total: 30, barColor: "#EF4444" },
    stageData: {
      marketResearch: { done: true },
      legalDue: { done: true },
    },
  },
  {
    street: "Project C",
    progress: { value: 12, total: 30, barColor: "#efa844ff" },
    stageData: {
      marketResearch: { done: true },
      legalDue: { done: true },
    },
  },
  {
    street: "Project D",
    progress: { value: 12, total: 30, barColor: "#7aef44ff" },
    stageData: {
      marketResearch: { done: true },
      legalDue: { done: true },
    },
  },
];

// --- Long table rows ---
const longRows = [
  {
    street: "Project A",
    progress: { value: 21, total: 30, barColor: "#f52a0bff" },
    stageData: {
      marketResearch: { done: true },
      legalDue: { done: true },
      technicalDue: { done: true },
      floorplan: { Color: "#ff3c00ff", rightTag: "15 WK" },
      taxOptimization: { color: "#ff3c00ff", done: true },
      financing: { color: "#ff3c00ff", textColor: "#FFFFFF", rightTag: "2 WK" },
      exitStrategy: { color: "#ff3c00ff", done: true },
    },
  },
  {
    street: "Project B",
    progress: { value: 25, total: 30, barColor: "#ff3d0cff" },
    stageData: {
      marketResearch: { done: true },
      legalDue: { done: true },
      technicalDue: { done: true },
      floorplan: { done: true },
      taxOptimization: { done: true },
      financing: { done: true },
      exitStrategy: { color: "#ff3c00ff", done: true },
    },
  },
  {
    street: "Project C",
    progress: { value: 25, total: 30, barColor: "#ff810cff" },
    stageData: {
      marketResearch: { done: true },
      legalDue: { done: true },
      technicalDue: { done: true },
      floorplan: { done: true },
      taxOptimization: { done: true },
      financing: { done: true },
      exitStrategy: { color: "#ff810cff", done: true },
    },
  },
  {
    street: "Project D",
    progress: { value: 25, total: 30, barColor: "#45ff0cff" },
    stageData: {
      marketResearch: { done: true },
      legalDue: { done: true },
      technicalDue: { done: true },
      floorplan: { done: true },
      taxOptimization: { done: true },
      financing: { done: true },
      exitStrategy: { done: true },
    },
  },
];

function ActiveDealsTable({ data = [], stages = [], compact = false }) {
  return (
    <section className="w-full bg-[#181C3A] rounded-lg overflow-hidden">
      <div className="">
        {data.map((r, i) => {
          const pct = Math.min(
            100,
            Math.max(0, (r.progress.value / r.progress.total) * 100)
          );
          return (
            <div key={i} className="py-1">
              <div
                className="w-full grid items-center gap-1"
                style={{
                  gridTemplateColumns: `90px 120px repeat(${stages.length}, minmax(70px, 1fr))`,
                }}
              >
                {/* Street */}
                <div>
                  <span
                    className={`inline-block rounded-full bg-black text-white/90 ${
                      compact
                        ? "text-[8px] px-2 py-0.5"
                        : "text-[10px] px-2 py-1"
                    }`}
                  >
                    {r.street}
                  </span>
                </div>

                {/* Progress Bar */}
                <div
                  className={`relative rounded-full bg-[#2A334D] ${
                    compact ? "h-5 text-[7px]" : "h-6 text-[9px]"
                  }`}
                >
                  <div
                    className="absolute left-0 top-0 h-full rounded-full"
                    style={{
                      width: `${pct}%`,
                      background: r.progress.barColor,
                    }}
                  />
                  <div
                    className={`absolute left-2 top-1/2 -translate-y-1/2 rounded-full ${
                      compact
                        ? "px-1.5 py-[1px] text-[7px]"
                        : "px-2 py-[1px] text-[8px]"
                    } text-white font-semibold`}
                    style={{ background: r.progress.barColor }}
                  >
                    Over
                  </div>
                  <span
                    className={`absolute right-2 top-1/2 -translate-y-1/2 text-white font-semibold ${
                      compact ? "text-[7px]" : "text-[9px]"
                    }`}
                  >
                    {r.progress.value}/{r.progress.total} DAGEN
                  </span>
                </div>

                {/* Stages */}
                {stages.map((s) => {
                  const cfg = (r.stageData && r.stageData[s.key]) || {};
                  const pillColor =
                    cfg.color || (cfg.done ? "#2A3354" : "#2A3354");
                  const textColor = cfg.textColor || "#FFFFFF";
                  return (
                    <div key={s.key} className="flex items-center min-w-0">
                      <div
                        className={`flex items-center justify-between rounded-full w-full truncate ${
                          compact ? "h-5 px-1.5" : "h-6 px-2"
                        }`}
                        style={{ backgroundColor: pillColor }}
                      >
                        <span
                          className={`font-semibold truncate ${
                            compact ? "text-[7px]" : "text-[8px]"
                          }`}
                          style={{ color: textColor }}
                        >
                          {s.label}
                        </span>
                        {cfg.rightTag ? (
                          <span
                            className={`ml-1 font-semibold text-white ${
                              compact ? "text-[7px]" : "text-[8px]"
                            }`}
                          >
                            {cfg.rightTag}
                          </span>
                        ) : cfg.done ? (
                          <span
                            className={`ml-1 inline-flex items-center justify-center rounded-full bg-white ${
                              compact ? "w-3 h-3" : "w-4 h-4"
                            }`}
                          >
                            <span
                              className={`text-[#16A34A] font-bold ${
                                compact ? "text-[7px]" : "text-[9px]"
                              }`}
                            >
                              ✓
                            </span>
                          </span>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default function DealsPage() {
  const [showShort, setShowShort] = useState(true);
  const [showLong, setShowLong] = useState(true);

  return (
    <div
      className="
        grid gap-5 mt-10 
        grid-cols-1        
        md:grid-cols-[30%_70%]  
      "
    >
      {/* Left side */}
      <div>
        <Exit
          title="ACTIVE DEALS DEVELOPMENT (PROPERTY PRESERVATION)"
          label="Internal Research"
          counts={{ red: 2, orange: 1, blue: 1 }}
          onToggle={() => setShowShort(!showShort)}
          isOpen={showShort}
        />

        {/* Collapse wrapper */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            showShort ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-4">
            <ActiveDealsTable data={shortRows} stages={SHORT_STAGES} />

            <div className="mt-3 flex flex-wrap items-center gap-2 bg-[#181C3A] p-2 rounded-lg overflow-x-hidden">
              {/* ...your tags... */}
            </div>
          </div>
        </div>
      </div>

      {/* Right side */}
      <div>
        <Exit
          title="ACTIVE DEALS DEVELOPMENT (PROPERTY RESALE)"
          label="Legal Research"
          counts={{ red: 1, orange: 2, blue: 3 }}
          onToggle={() => setShowLong(!showLong)}
          isOpen={showLong}
        />

        {/* Collapse wrapper */}
        <div
          className={`transition-all duration-500 ease-in-out overflow-hidden ${
            showLong ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="mt-4">
            <ActiveDealsTable data={longRows} stages={LONG_STAGES} />
          </div>
        </div>
      </div>
    </div>
  );
}
