import React from "react";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

// Demo data roughly matching the screenshot trend
const series = [
  {
    id: "sales",
    label: "SALES AGREEMENT SIGNED",
    stroke: "#3DD6AA",
    fill: "rgba(61,214,170,0.12)",
    values: [9, 10, 11, 12, 13, 14, 12.5, 11.5, 11, 11.5, 12, 12],
  },
  {
    id: "complete",
    label: "COMPLETE FILE TO BUYER",
    stroke: "#8B9EFF",
    fill: "rgba(139,158,255,0.12)",
    values: [12, 12.5, 13, 13.5, 14, 14.5, 13.5, 12.8, 12.2, 12.4, 12.6, 12.7],
  },
  {
    id: "notary",
    label: "SEND NOTARY SIGNED PURCHASE AGREEMENT",
    stroke: "#2E6EB0",
    fill: "rgba(46,110,176,0.12)",
    values: [7, 7.5, 8, 8.5, 9, 9.5, 8.8, 8.1, 7.8, 7.9, 8.1, 8.2],
  },
  {
    id: "transfer",
    label: "TRANSFER OF PROPERTY",
    stroke: "#FF4BA8",
    fill: "rgba(255,75,168,0.12)",
    values: [14, 14.5, 15, 15.5, 16, 17, 15.5, 14.2, 13.5, 13.8, 14, 14.1],
  },
];

function buildPath(values, xScale, yScale) {
  if (!values || values.length === 0) return "";
  const upper = values
    .map((v, i) => `${i === 0 ? "M" : "L"}${xScale(i)},${yScale(v)}`)
    .join(" ");
  const lower = values
    .slice()
    .reverse()
    .map((v, i) => `L${xScale(values.length - 1 - i)},${yScale(0)}`)
    .join(" ");
  return `${upper} ${lower} Z`;
}

const Y_MAX = 20; // top of the chart scale

const Chart = () => {
  // Chart box
  const padding = { top: 1, right: 24, bottom: 32, left: 48 };
  const width = 900; // viewBox width
  const height = 180; // viewBox height

  const innerWidth = width - padding.left - padding.right;
  const innerHeight = height - padding.top - padding.bottom;

  const xScale = (i) => padding.left + (i * innerWidth) / (months.length - 1);
  const yScale = (v) => padding.top + innerHeight - (v / Y_MAX) * innerHeight;

  return (
    <section className="">
      <div className="text-2xl text-gray-300 uppercase tracking-wide">EXIT DURATION CONSECUTIVE STEPS</div>
      <div className="mt-3 rounded-xl bg-[#10152B] border border-[#1F2740]">
        <div className="px-2  pt-1">
          <h3 className="text-white text-base md:text-lg font-semibold">QUARTER DEVELOPMENT EXIT DURATION</h3>
        </div>
        <div className="px-2 ">
          {/* Legend moved to the end of the card */}
           {/* Legend at end */}
        <div className="px-2 pb-3">
          <div className="flex flex-wrap gap-6 mt-3 text-[5px] md:text-[9px] text-gray-300 justify-end">
            {series.map((s) => (
              <div key={s.id} className="inline-flex items-center gap-2">
                <span className="inline-block size-2 rounded-full" style={{ backgroundColor: s.stroke }} />
                <span className="whitespace-nowrap">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        </div>

        {/* Chart */}
        <div className=" ">
          <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-[265px]  ">
            {/* Grid background */}
            <rect x="0" y="0" width={width} height={height} fill="#0E1330" rx="12" />

            {/* Y grid lines and labels */}
            {[0, 5, 10, 15, 20].map((t) => (
              <g key={t}>
                <line
                  x1={padding.left}
                  x2={width - padding.right}
                  y1={yScale(t)}
                  y2={yScale(t)}
                  stroke="#1F2740"
                  strokeDasharray="3 3"
                />
                <text
                  x={padding.left - 10}
                  y={yScale(t) + 4}
                  textAnchor="end"
                  fontSize="10"
                  fill="#8B93B6"
                >
                  {t}
                </text>
              </g>
            ))}

            {/* X labels */}
            {months.map((m, i) => (
              <text
                key={m}
                x={xScale(i)}
                y={height - 8}
                textAnchor="middle"
                fontSize="10"
                fill="#8B93B6"
              >
                {m}
              </text>
            ))}

            {/* Series areas */}
            {series.map((s) => (
              <g key={s.id}>
                <path
                  d={buildPath(s.values, xScale, yScale)}
                  fill={s.fill}
                  stroke="none"
                />
                <path
                  d={s.values
                    .map((v, i) => `${i === 0 ? "M" : "L"}${xScale(i)},${yScale(v)}`)
                    .join(" ")}
                  fill="none"
                  stroke={s.stroke}
                  strokeWidth={2}
                />
              </g>
            ))}
          </svg>
        </div>

       
      </div>

      <div className="mt-1">
        <div className="text-lg text-gray-300 uppercase tracking-wide">TOTAL DURATION EXIT PHASE</div>
        <div className="mt-1 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-lg border border-[#1F2740] px-3 py-1" style={{ background: 'linear-gradient(to bottom, rgba(9,13,40,1) 0%, rgba(9,13,40,0) 100%)' }}>
            <div className="text-xs text-gray-400 text-center">GOAL</div>
            <div className="mt-1 text-lg text-white font-semibold text-center">28 DAYS</div>
          </div>
          <div className="rounded-xl border border-[#1F2740] px-3 py-1" style={{ background: 'linear-gradient(to bottom, rgba(9,13,40,1) 0%, rgba(9,13,40,0) 100%)' }}>
            <div className="text-xs text-gray-400 text-center">NOW</div>
            <div className="mt-1 text-lg text-white font-semibold text-center">15.5 DAYS</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Chart;
