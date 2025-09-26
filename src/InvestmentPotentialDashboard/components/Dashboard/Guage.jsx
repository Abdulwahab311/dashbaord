import React from "react";

export default function Gauge({ value = 2.8, min = 0, max = 20 }) {
  const normalized = Math.max(min, Math.min(value, max));
  const percent = (normalized - min) / (max - min);

  const cx = 100;
  const cy = 100;
  const radius = 70;

  const polarToCartesian = (centerX, centerY, r, angleInDegrees) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + r * Math.cos(angleInRadians),
      y: centerY + r * Math.sin(angleInRadians),
    };
  };

  const describeArc = (x, y, r, startAngle, endAngle) => {
    const start = polarToCartesian(x, y, r, endAngle);
    const end = polarToCartesian(x, y, r, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

    return [
      "M",
      start.x,
      start.y,
      "A",
      r,
      r,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
    ].join(" ");
  };

  const startAngle = 240;  // thoda aur upar se shuru karo
const endAngle = 480;    // thoda aur neeche tak lao
  const angleSpan = endAngle - startAngle;
  const currentAngle = startAngle + angleSpan * percent;

  return (
    <div className="relative flex items-center justify-center w-[120px] h-[90px]">
      <svg viewBox="0 0 200 140" className="w-[120px] h-[90px]">
        {/* Background arc */}
        <path
          d={describeArc(cx, cy, radius, startAngle, endAngle)}
          stroke="#1F2937"
          strokeWidth="14"
          fill="none"
          strokeLinecap="round"
        />
        {/* Active arc */}
        <path
          d={describeArc(cx, cy, radius, startAngle, currentAngle)}
          stroke="#F2B46D"
          strokeWidth="14"
          fill="none"
          strokeLinecap="round"
        />
        {/* Remaining arc */}
        <path
          d={describeArc(cx, cy, radius, currentAngle, endAngle)}
          stroke="#9CA3AF33"
          strokeWidth="14"
          fill="none"
          strokeLinecap="round"
        />
      </svg>

      {/* Center Text */}
      <div className="absolute text-center mt-3">
        <div className="text-white text-lg font-bold leading-none">{value}</div>
        <div className="text-[5px] tracking-widest text-gray-400 mt-1">
          MONTHS RUNWAY
        </div>
      </div>
    </div>
  );
}
