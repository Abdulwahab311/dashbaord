import React, { useState } from 'react';

// Small colored count badge
function CountBadge({ value, color }) {
  const bg = {
    red: '#F04245',
    orange: '#F59E0B',
    blue: '#2A76C8',
    green: '#18D359',
    gray: '#2A3354',
  }[color] || '#2A3354';

  return (
    <span
      className="inline-flex items-center justify-center rounded-full text-white text-[11px] font-bold w-6 h-6"
      style={{ backgroundColor: bg }}
    >
      {value}
    </span>
  );
}

// Section header with title and arrow toggle
function SectionHeader({ title, counts, countsClass = '', onToggle, open }) {
  return (
    <div className="w-full flex items-center justify-between bg-[#181C3A] rounded-sm px-3 py-2">
      <div className="flex items-center gap-3">
        <span className="text-white text-sm font-semibold">{title}</span>
        {counts && (
          <div className={`flex items-center gap-2 ml-30 ${countsClass}`}>
            {typeof counts.red === 'number' && (
              <div className="flex items-center">
                <CountBadge value={counts.red} color="red" />
                {(counts.alert || counts.red === 2 || counts.red === 1) && (
                  <div className="relative -ml-2">
                    <div className="w-3 h-3 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-black text-[7px] font-semibold">!</span>
                    </div>
                  </div>
                )}
              </div>
            )}
            {typeof counts.green === 'number' && (
              <span className="relative inline-flex items-center justify-center">
                <CountBadge value={counts.green} color="gray" />
                <span
                  className="absolute -right-0.5 -top-0.5 w-2 h-2 rounded-full"
                  style={{ backgroundColor: '#18D359' }}
                ></span>
              </span>
            )}
            {typeof counts.orange === 'number' && (
              <CountBadge value={counts.orange} color="orange" />
            )}
            {typeof counts.blue === 'number' && (
              <CountBadge value={counts.blue} color="blue" />
            )}
          </div>
        )}
      </div>
      <button
        onClick={onToggle}
        className="px-2 py-1 rounded-full bg-[#2A3354] text-white text-xs font-semibold transition-transform duration-300"
      >
        <span className={`block transform transition-transform ${open ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
    </div>
  );
}

// ---------- Table ----------
const STAGES = [
  { key: 'marketResearch', label: 'MARKET RESEARCH' },
  { key: 'legalDue', label: 'LEGAL DUE DILIGENCE' },
  { key: 'floorplan', label: 'FLOORPLAN ARCHITECT' },
  { key: 'taxOptimization', label: 'TAX OPTIMIZATION' },
];

const TABLE_ROWS = [
  {
    street: 'HOOIMARKTSTRAAT',
    progress: { value: 7, total: 30, barColor: '#EF4444', label: 'Over' },
    stageData: {
      marketResearch: { color: '#F04245', textColor: '#FFFFFF', rightTag: '3 DGN' },
      legalDue: { color: '#F04245', textColor: '#FFFFFF', rightTag: '1 WK' },
      floorplan: { color: '#F04245', textColor: '#FFFFFF', rightTag: '4 WK' },
      taxOptimization: { color: '#F04245', textColor: '#FFFFFF', rightTag: '4 WK' },
      transfer: { color: '#F04245', textColor: '#FFFFFF' },
    },
  },
  {
    street: 'PIETJANDORIE LAAN',
    progress: { value: 12, total: 30, barColor: '#EF4444', label: 'Over' },
    stageData: {
      marketResearch: { done: true },
      legalDue: { done: true },
      floorplan: { color: '#F04245', textColor: '#FFFFFF', rightTag: '10 DN' },
      taxOptimization: { color: '#F04245', textColor: '#FFFFFF', rightTag: '10 DN' },
      transfer: { done: true },
    },
  },
  {
    street: 'Drs vHENRUBG',
    progress: { value: 21, total: 30, barColor: '#F59E0B', label: 'Over' },
    stageData: {
      marketResearch: { done: true },
      legalDue: { done: true },
      floorplan: { color: '#F59E0B', textColor: '#0E1330', rightTag: '1 WK' },
      taxOptimization: {color: '#F59E0B', textColor: '#0E1330'},
      transfer: { done: true },
    },
  },
  {
    street: 'Project D',
    progress: { value: 27, total: 30, barColor: '#22C55E', label: 'Over' },
    stageData: {
      marketResearch: { done: true },
      legalDue: { done: true },
      floorplan: { done: true },
      taxOptimization: { done: true },
      transfer: { done: true },
    },
  },
];

function InlineTable({ rows = TABLE_ROWS }) {
  return (
    <section className="w-full rounded-lg bg-[#181C3A]">
      <div className="p-2 overflow-x-auto no-scrollbar">
        {rows.map((r, i) => {
          const pct = Math.min(
            100,
            Math.max(0, (r.progress.value / r.progress.total) * 100)
          );
          return (
            <div key={r.street} className="py-2">
              <div className="w-full grid grid-cols-[150px_200px_180px_180px_180px_180px] items-center gap-2">
                {/* Street */}
                <div>
                  <span className="inline-block rounded-full bg-black text-white/90 text-[11px] px-4 py-1.5">
                    {r.street}
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="relative h-8 rounded-full bg-[#2A334D] ">
                  <div
                    className="absolute left-0 top-0 h-full rounded-full"
                    style={{ width: `${pct}%`, background: r.progress.barColor }}
                  />
                  <div
                    className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full px-1 py-[3px] text-white text-[10px] font-semibold"
                    style={{ background: r.progress.barColor }}
                  >
                    {r.progress.label}
                  </div>
                  <span className="absolute right-2 top-1/2 -translate-y-1/2 text-white text-[10px] font-semibold">
                    {r.progress.value}/{r.progress.total} DAGEN
                  </span>
                </div>

                {/* Stage pills */}
                {STAGES.map((s) => {
                  const cfg = (r.stageData && r.stageData[s.key]) || {};
                  const pillColor =
                    cfg.color || (cfg.done ? '#2A3354' : '#F04245');
                  const textColor = cfg.textColor || '#FFFFFF';
                  return (
                    <div key={s.key} className="flex items-center">
                      <div
                        className="flex items-center justify-between rounded-full h-8 px-2 min-w-[180px]"
                        style={{ backgroundColor: pillColor }}
                      >
                        <span
                          className="text-[10px] font-semibold"
                          style={{ color: textColor }}
                        >
                          {s.label}
                        </span>
                        {cfg.rightTag ? (
                          <span className="text-[10px] font-semibold text-white">
                            {cfg.rightTag}
                          </span>
                        ) : cfg.done ? (
                          <span className="ml-1 inline-flex items-center justify-center w-5 h-5 rounded-full bg-white">
                            <span className="text-[#16A34A] text-[12px] font-bold">
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

// ---------- Parent ----------
export default function UregencyTable() {
  const [openContract1, setOpenContract1] = useState(true);
  const [openMarketing, setOpenMarketing] = useState(false);
  const [openSales, setOpenSales] = useState(false);
  const [openSections, setOpenSections] = useState({
    contract1: true,
    contract2: false,
    exit: false,
    aftercare: false,
  });

  const toggleSection = (key) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="w-full bg-[#090D28] p-4 rounded-lg">
      <div className="mb-3">
        <span className="text-white text-sm font-bold">ACTIVE DEALS – URGENCY</span>
      </div>

      {/* Marketing */}
      <div className="mb-3">
        <SectionHeader
          title="MARKETING"
          counts={{}}
          onToggle={() => setOpenMarketing(!openMarketing)}
          open={openMarketing}
        />
        <div
          className={`transition-all duration-500 overflow-hidden ${
            openMarketing ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="p-4 text-white text-sm">Marketing content...</div>
        </div>
      </div>

      {/* Sales */}
      <div className="mb-3">
        <SectionHeader
          title="SALES"
          counts={{}}
          onToggle={() => setOpenSales(!openSales)}
          open={openSales}
        />
        <div
          className={`transition-all duration-500 overflow-hidden ${
            openSales ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="p-4 text-white text-sm">Sales content...</div>
        </div>
      </div>

      {/* 1st Contractphase */}
      <div className="mb-3">
        <SectionHeader
          title="1st CONTRACTPHASE"
          counts={{ red: 2, orange: 1, blue: 1 }}
          onToggle={() => setOpenContract1(!openContract1)}
          open={openContract1}
        />
        <div
          className={`transition-all duration-500 overflow-hidden ${
            openContract1 ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="mt-2">
            <InlineTable />
          </div>
        </div>
      </div>
<div className="w-full bg-[#090D28]  rounded-lg">

      {/* 2e Contractfase */}
      <div className="mb-3">
        <SectionHeader
          title="2e CONTRACTFASE"
          counts={{ red: 2, orange: 3, alert: true }}
          isOpen={openSections.contract2}
          onToggle={() => toggleSection("contract2")}
        />
        {openSections.contract2 && (
          <div className="p-2 text-white text-xs">🔽 Another Content</div>
        )}
      </div>

      {/* Exit */}
      <div className="mb-3">
        <SectionHeader
          title="EXIT"
          counts={{ orange: 1, blue: 1 }}
          isOpen={openSections.exit}
          onToggle={() => toggleSection("exit")}
        />
        {openSections.exit && (
          <div className="p-2 text-white text-xs">🔽 Exit Content</div>
        )}
      </div>

      {/* Aftercare */}
      <div className="mb-3">
        <SectionHeader
          title="AFTERCARE"
          counts={{}}
          isOpen={openSections.aftercare}
          onToggle={() => toggleSection("aftercare")}
        />
        {openSections.aftercare && (
          <div className="p-2 text-white text-xs">🔽 Aftercare Content</div>
        )}
      </div>
    </div>
    </div>
  );
}
