import React from "react";

// Gauge Component - Made Smaller
const Gauge = ({
  value = 10.8,
  min = 0,
  max = 20,
  color = "#F2B46D",
  label = "MONTHS RUNWAY",
}) => {
  const normalized = Math.max(min, Math.min(value, max));
  const percent = (normalized - min) / (max - min);

  const cx = 100;
  const cy = 100;
  const radius = 85;

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

  const startAngle = 240;
  const endAngle = 480;
  const angleSpan = endAngle - startAngle;
  const currentAngle = startAngle + angleSpan * percent;

  return (
    <div className="relative flex items-center justify-center w-[60px] h-[50px]">
      <svg viewBox="0 0 200 140" className="w-[80px] h-[70px]">
        <path
          d={describeArc(cx, cy, radius, startAngle, endAngle)}
          stroke="#1F2937"
          strokeWidth="18"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d={describeArc(cx, cy, radius, startAngle, currentAngle)}
          stroke={color}
          strokeWidth="20"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d={describeArc(cx, cy, radius, currentAngle, endAngle)}
          stroke="#9CA3AF33"
          strokeWidth="18"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute text-center mt-3">
        <div className="text-white text-xs font-bold leading-none">{value}</div>
        <div className="text-[6px] tracking-wider text-gray-400 mt-0.5">
          {label}
        </div>
      </div>
    </div>
  );
};

const DealDuration = ({ dealPhases }) => (
  <div className="flex-shrink-0 w-[90px]">
    <div className="rounded-lg p-3">
      <div className="flex justify-center gap-1">
        {dealPhases.map((phase, index) => (
          <div key={index} className="flex flex-col w-[40px] items-center">
            <div className="text-[9px] text-gray-300 text-center leading-tight min-h-[12px] mb-1">
              {phase.title}
            </div>
            <div
              className="w-full bg-[#090D28] rounded border px-0.5 py-0.5 text-center mb-1"
              style={{ borderColor: phase.nowColor }}
            >
              <div className="text-[6px] text-white">Goals</div>
              <div className="text-[7px] text-white font-bold">
                {phase.goalValue}
              </div>
            </div>
            <div
              className="w-full rounded px-0.5 py-0.5 text-center mb-1"
              style={{ background: phase.nowColor }}
            >
              <div className="text-[6px] text-white font-semibold">Now</div>
              <div className="text-[7px] text-white font-bold">
                {phase.nowValue}
              </div>
            </div>
            <div className="flex-1 flex items-end justify-center">
              <div className="w-[30px] h-[60px] rounded bg-[#D9D9D93D] relative overflow-hidden">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute left-0.5 z-20"
                    style={{ bottom: 5 + i * 15 }}
                  >
                    <div
                      className={`h-[1px] ${
                        i === 1 ? "w-2" : "w-1"
                      } rounded bg-white/60`}
                    />
                  </div>
                ))}
                <div className="absolute left-0 right-0 bottom-0 z-10">
                  <div
                    className="w-full rounded"
                    style={{
                      height: phase.barHeight || "35px", // 👈 duration ke hisaab se
                      background: phase.barColor,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Main Dashboard Component
const DashboardLayout = () => {
  const dealPhases = [
    {
      title: "average",
      goalValue: "7 Days",
      nowValue: "7 Days",
      barColor: "#18D359",
      goalColor: "#18D359",
      nowColor: "#18D359",
      barHeight: "30px",
      
    },
  ];

  const gauges = [
    { value: 10.8, color: "#F04245", label: "DAYS" },
    { value: 15.2, color: "#8ef26dff", label: "GROWTH" },
  ];

  return (
    <div className="w-full max-w-full p-4">
      {/* Header */}
      <div className="mb-4">
        <div className="flex items-center gap-4 text-xs text-gray-400 flex-wrap">
          <span>PREPARATION & RESEARCH</span>
        </div>
      </div>
      {/* Content Row */}
      <div className="flex flex-wrap lg:flex-nowrap gap-4 w-full">
        {/* Deal Duration */}
        <div className="bg-[#090D28] rounded-md">
          <DealDuration dealPhases={dealPhases} />
        </div>

        <div className="flex flex-col gap-2 rounded-md bg-[#090D28] flex-1 min-w-[10px]">
          {gauges.map((gauge, index) => (
            <div key={index} className="rounded p-2 flex justify-center">
              <Gauge
                value={gauge.value}
                color={gauge.color}
                label={gauge.label}
              />
            </div>
          ))}
        </div>

        {/* Repeat sections */}
        <div className="flex rounded-md bg-[#090D28]">
          <DealDuration dealPhases={dealPhases} />
        </div>
        <div className="flex rounded-md bg-[#090D28]">
          <DealDuration dealPhases={dealPhases} />
        </div>
        {/* Gauges */}
        <div className="flex rounded-md flex-col gap-2 bg-[#090D28] flex-1 min-w-[10px]">
          {gauges.map((gauge, index) => (
            <div key={index} className="rounded p-2 flex justify-center">
              <Gauge
                value={gauge.value}
                color={gauge.color}
                label={gauge.label}
              />
            </div>
          ))}
        </div>

        {/* Additional Deal Duration Sections */}
        {Array.from({ length: 1 }).map((_, index) => {
          // Default phases
          let phases = [...dealPhases];

          // Sirf 2nd (index === 1) aur 5th (index === 4) ke liye color change
          if (index === 1 || index === 4) {
            phases = phases.map((phase) => ({
              ...phase,
              barColor: "#F97316", // Orange
              goalColor: "#f6e24dff",
              nowColor: "#F97316",
            }));
          }

          return (
            <div key={index} className="rounded-md bg-[#090D28]">
              <DealDuration dealPhases={phases} />
            </div>
          );
        })}
        <div className="grid gap-2  flex-1 min-w-[10px]">
          {/* Gauges */}
          <div className="flex flex-col rounded-md bg-[#090D28] gap-2 flex-1 min-w-[10px]">
            {gauges.map((gauge, index) => (
              <div key={index} className="rounded p-2 flex justify-center">
                <Gauge
                  value={gauge.value}
                  color={gauge.color}
                  label={gauge.label}
                />
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#090D28] rounded-md">
          <DealDuration dealPhases={dealPhases} />
        </div>
        <div className="flex rounded-md flex-col bg-[#090D28] gap-2 flex-1 min-w-[10px]">
          {gauges.map((gauge, index) => (
            <div key={index} className="rounded p-2 flex justify-center">
              <Gauge
                value={gauge.value}
                color={gauge.color}
                label={gauge.label}
              />
            </div>
          ))}
        </div>
        <div className="flex rounded-md flex-col bg-[#090D28] gap-2 flex-1 min-w-[10px]">
          {gauges.map((gauge, index) => (
            <div key={index} className="rounded p-2 flex justify-center">
              <Gauge
                value={gauge.value}
                color={gauge.color}
                label={gauge.label}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
