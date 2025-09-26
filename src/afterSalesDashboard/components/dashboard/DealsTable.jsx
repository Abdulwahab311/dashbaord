import React from "react";

const STAGES = [
  { key: "signed", label: "SIGNED SALES AGREEMENT" },
  { key: "complete", label: "COMPLETE FILE TO BUYER" },
  { key: "notary", label: "SEND  SIGNED PURCHASE " },
  { key: "transfer", label: "TRANSFER OF PROPERTY" },
];

const rows = [
  {
    street: "HOOIMAKERSSTRAAT",
    progress: { value: 7, total: 30, barColor: "#EF4444" },
    stageData: {
      signed: { color: "#EF4444", textColor: "#FFFFFF", rightTag: "2 WK" },
      complete: {},
      notary: {},
      transfer: {},
    },
  },
  {
    street: "PIETJANDORIE LAAN",
    progress: { value: 12, total: 30, barColor: "#EF4444" },
    stageData: {
      signed: { done: true },
      complete: { done: true },
      notary: { color: "#EF4444", textColor: "#FFFFFF", rightTag: "37 DGN" },
      transfer: {},
    },
  },
  {
    street: "Drs PIETHEINBRUG",
    progress: { value: 21, total: 30, barColor: "#F59E0B" },
    stageData: {
      signed: { done: true },
      complete: { done: true },
      notary: { done: true },
      transfer: { color: "#F59E0B", textColor: "#0E1330", rightTag: "8 WK" },
    },
  },
  {
    street: "St. JUTTEMUS STR",
    progress: { value: 25, total: 30, barColor: "#22C55E" },
    stageData: {
      signed: { done: true },
      complete: { done: true },
      notary: { done: true },
      transfer: { done: true },
    },
  },
];

export default function DealsTable({ data = rows }) {
  return (
    <section className="w-full mt-10 bg-[#181C3A] rounded-lg">
      <div className="p-2 overflow-x-auto no-scrollbar">
        {data.map((r, i) => {
          const pct = Math.min(100, Math.max(0, (r.progress.value / r.progress.total) * 100));
          return (
            <div key={r.street} className={i !== data.length - 1 ? " py-2" : "py-2"}>
              <div className="w-full min-w-[1200px] lg:min-w-0 grid grid-cols-[160px_220px_1fr_1fr_1fr_1fr] items-center gap-4">
                {/* Street */}
                <div>
                  <span className="inline-block rounded-full bg-black text-white/90 text-[10px] px-6 py-2">{r.street}</span>
                </div>

                {/* Progress Bar (inline) */}
                <div className="relative h-9 w-[220px] rounded-full bg-[#2A334D]">
                  <div className="absolute left-0 top-0 h-full rounded-full" style={{ width: `${pct}%`, background: r.progress.barColor }} />
                  <div className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full px-3 py-[3px] text-white text-[10px] font-semibold" style={{ background: r.progress.barColor }}>Over</div>
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-[11px] font-semibold">{r.progress.value}/{r.progress.total} DAGEN</span>
                </div>

                {/* Stage pills (inline) */}
                {STAGES.map((s) => {
                  const cfg = (r.stageData && r.stageData[s.key]) || {};
                  const isRedDefault = s.key === "complete" || s.key === "notary" || s.key === "transfer";
                  const pillColor = cfg.color || (cfg.done ? "#2A3354" : isRedDefault ? "#F04245" : "#2A3354");
                  const textColor = cfg.textColor || "#FFFFFF";
                  return (
                    <div key={s.key} className="flex items-center gap-1">
                      <div className="flex items-center justify-between rounded-full h-9 px-2 min-w-[220px]" style={{ backgroundColor: pillColor }}>
                        <span className="text-[11px] font-semibold" style={{ color: textColor }}>{s.label}</span>
                        {cfg.rightTag ? (
                          <span className="text-[11px] font-semibold text-white">{cfg.rightTag}</span>
                        ) : cfg.done ? (
                          <span className="ml-2 inline-flex items-center justify-center w-6 h-6 rounded-full bg-white">
                            <span className="text-[#16A34A] text-[13px] font-bold">✓</span>
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
