import React, { useEffect, useRef, useState } from "react";
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';
import { areaElementClasses, lineElementClasses } from '@mui/x-charts/LineChart';

// Static dummy data for spark lines
const sparkLineData = [120, 135, 110, 145, 130, 160, 140, 125, 155, 170, 150, 165];

export default function MarketingCards() {
  const bigCards = [
    { id: "marketing", title: "MARKETING EFFECTIVITY", value: "99", suffix: "%" },
    { id: "sales", title: "SALES EFFECTIVITY", value: "$3" },
    { id: "cac", title: "CLIENT ACQUISITION COSTS", value: "$2.10" },
  ];

  const rightTop = [
    {
      id: "scale-costs",
      type: "scale",
      title: "COSTS OF SCALE",
      value: "$5.200",
      change: "-12%",
      label: "VS LAST 3 MONTHS",
    },
    {
      id: "payback",
      type: "widget",
      title: "CAC PAY BACK TIME",
      value: "1.5",
      sub: "MONTHS",
    },
  ];

  const rightBottom = [
    {
      id: "client-cac",
      type: "small",
      title: "CLIENT ACQUISITION COSTS",
      value: "$400",
      change: "-12%",
      label: "VS LAST 3 MONTHS",
    },
    {
      id: "onboarding",
      type: "small",
      title: "CUSTOMER ONBOARDING COSTS",
      value: "$4.000",
      change: "-12%",
      label: "VS LAST 3 MONTHS",
    },
  ];

  const Badge = ({ text }) => (
    <span className="inline-flex items-center rounded-md bg-[#FF3B61]/20 text-[#FF3B61] px-1 py-0.5 text-[8px] font-semibold">
      {text}
    </span>
  );

  const scaleCard = rightTop.find((x) => x.type === "scale");
  const payback = rightTop.find((x) => x.type === "widget");

  function useElementWidth() {
    const ref = useRef(null);
    const [width, setWidth] = useState(0);
    useEffect(() => {
      if (!ref.current) return;
      const el = ref.current;
      const update = () => setWidth(el.clientWidth || 0);
      update();
      const ro = new ResizeObserver(update);
      ro.observe(el);
      return () => ro.disconnect();
    }, []);
    return { ref, width };
  }

  const SparkMini = ({ height = 'h-4' }) => {
    const { ref, width } = useElementWidth();
    const chartWidth = Math.max(140, width);
    const chartHeight = height === 'h-3' ? 16 : height === 'h-2' ? 20 : 23;
    
    return (
      <div className={`w-full ${height} -mb-3 overflow-hidden rounded-b-lg`}>
        <div ref={ref} className="w-full h-full">
          <SparkLineChart
            data={sparkLineData}
            height={chartHeight}
            width={chartWidth}
            area
            color="#00D394"
            margin={{ top: 0, bottom: -6, left: -6, right: -3 }}
            sx={{
              [`& .${areaElementClasses.root}`]: { 
                opacity: 0.2,
                filter: 'drop-shadow(0 2px 4px rgba(0, 211, 148, 0.3))'
              },
              [`& .${lineElementClasses.root}`]: { 
                strokeWidth: 2,
                filter: 'drop-shadow(0 1px 2px rgba(0, 211, 148, 0.4))'
              },
            }}
          />
        </div>
      </div>
    );
  };

  const SmoothLineChartMini = () => {
    const { ref, width } = useElementWidth();
    const viewW = Math.max(200, width);
    const viewH = 80;
    const paddingLeft = 0;
    const paddingBottom = 0;

    // Generate some smooth pseudo-random data similar to Cards.jsx look
    const points = Array.from({ length: 40 }, (_, i) => {
      const x = i / 39;
      const y = 0.5 + Math.sin(i * 0.4) * 0.18 + Math.sin(i * 0.9) * 0.07 - x * 0.05;
      return { x, y };
    }).map(({ x, y }, i, arr) => {
      const px = paddingLeft + x * (viewW - paddingLeft);
      const py = viewH - paddingBottom - y * (viewH - 2 * paddingBottom);
      return { x: px, y: py };
    });

    const pathD = points.reduce((acc, p, idx) => {
      if (idx === 0) return `M ${p.x} ${p.y}`;
      const prev = points[idx - 1];
      const cx = (prev.x + p.x) / 2;
      const cy = (prev.y + p.y) / 2;
      return acc + ` Q ${cx} ${cy} ${p.x} ${p.y}`;
    }, "");

    const current = points[Math.floor(points.length * 0.7)] || { x: 0, y: 0 };

    return (
      <div ref={ref} className="w-full h-full">
        <svg viewBox={`0 0 ${viewW} ${viewH}`} className="w-full h-full" style={{ overflow: 'visible' }}>
          <defs>
            <linearGradient id="miniLine" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10b981" />
              <stop offset="70%" stopColor="#10b981" />
              <stop offset="85%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#ffffff" />
            </linearGradient>
            <filter id="miniGlow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>
          <path d={pathD} fill="none" stroke="url(#miniLine)" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx={current.x} cy={current.y} r="10" fill="#a855f7" filter="url(#miniGlow)" opacity="0.25" />
          <circle cx={current.x} cy={current.y} r="6" fill="#0B1020" />
        </svg>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-12 gap-4 ">
      {bigCards.map((card) => (
        <div key={card.id} className="col-span-12 md:col-span-3 ">
          <div className="pb-14 relative overflow-hidden rounded-[18px] border border-[#252B42] bg-gradient-to-b from-[#000000] to-[#090D2800] py-2 min-h-[240px]">
            <div className="text-center text-[10px] tracking-widest text-gray-300 mb-4  ">
              {card.title}
            </div>
            <div className="text-center text-white text-5xl md:text-6xl font-extrabold mb-4 mt-15">
              {card.value}
              {card.suffix ? (
                <span className="text-3xl align-top ml-1">{card.suffix}</span>
              ) : null}
            </div>
            <div className="absolute left-0 right-0 bottom-0 h-16  w-full ">
              <SmoothLineChartMini />
            </div>
          </div>
        </div>
      ))}

      {/* Right column: top single full-width scale card with overlaid CAC pill (shorter) */}
      <div className="col-span-12 md:col-span-3 flex flex-col gap-1.5 ">
        <div className="relative rounded-[9px] border border-[#252B42] bg-[#0A0F1F] overflow-hidden flex flex-col ">
          <div className="text-[7px] tracking-widest text-gray-300 mb-1 p-1.5">{scaleCard.title}</div>
          <div className="text-white text-2xl font-extrabold mb-1 p-1.5">{scaleCard.value}</div>
          <div className="flex items-center gap-1 mb-1">
            <Badge text={scaleCard.change} />
            <span className="text-[7px] text-gray-300">{scaleCard.label}</span>
          </div>
          {/* CAC pill overlay - fixed top-right, ultra compact */}
          <div className="absolute top-7 right-0.5 w-16 h-[42px]">
            <div className="rounded border border-white/10 bg-gradient-to-b from-[#4E78C7] to-[#1E2E56] text-white px-1.5 shadow-md ">
              <div className="text-center text-[7px] tracking-widest">{payback.title}</div>
              <div className="text-center text-base font-extrabold leading-none">{payback.value}</div>
              <div className="text-center text-[7px] tracking-wider opacity-90">{payback.sub}</div>
            </div>
          </div>
          <div className="mt-auto">
            <SparkMini height="h-8" />
          </div>
        </div>

        {/* Bottom two half-width cards (shortest) */}
        <div className="grid grid-cols-2 gap-1.5 ">
          {rightBottom.map((item) => (
            <div key={item.id} className="rounded-[9px] border border-[#252B42] bg-[#0A0F1F] overflow-hidden flex flex-col ">
              <div className="text-[7px] tracking-widest text-gray-300  p-1.5">{item.title}</div>
              <div className="text-white text-lg font-extrabold  p-1.5">{item.value}</div>
              <div className="flex items-center gap-1 mb-1">
                <Badge text={item.change} />
                <span className="text-[7px] text-gray-300">{item.label}</span>
              </div>
              <div className="mt-auto">
                <SparkMini height="h-8" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
