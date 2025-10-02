import React from 'react'

const GaugeSemi = ({ valueDays, targetDays, color, label }) => {
  const maxRef = Math.max(valueDays, targetDays, 20)
  const pct = Math.min(1, valueDays / maxRef)
  const angle = 180 * pct

  const toRadians = (deg) => (Math.PI * deg) / 180
  // Correct end point on a circle of radius 45 centered at (50,50), sweeping upper semicircle from 180° -> 0°
  const endX = 50 - 45 * Math.cos(toRadians(angle))
  const endY = 50 - 45 * Math.sin(toRadians(angle))

  const labelLines = String(label).split('\n')

  return (
    <div className="flex flex-col items-center justify-center px-1">
      <div className="relative w-28 h-20">
        <svg viewBox="0 -10 100 65" className="w-full h-full overflow-visible">
          {/* background arc */}
          <path d="M5,50 A45,45 0 0,1 95,50" fill="none" stroke="#9CA3AF33" strokeWidth="12" strokeLinecap="" />
          {/* value arc */}
          <path d={`M5,50 A45,45 0 0,1 ${endX},${endY}`} fill="none" stroke={color} strokeWidth="12" strokeLinecap="" />
        </svg>
      </div>

      <div className="mt-1 text-center leading-tight">
        <div className="text-[18px] font-bold" style={{ color }}>
          {valueDays} <span className="text-xs font-semibold text-[#D1D5DB]">Days</span>
        </div>
        <div className="text-[11px] text-[#D1D5DB]">{targetDays} Days</div>
      </div>

      <div className="text-white text-[10px] font-semibold mt-2 tracking-wide text-center uppercase">
        {labelLines.map((line, i) => (
          <span key={i}>
            {i > 0 && <br />}
            {line}
          </span>
        ))}
      </div>
    </div>
  )
}

const AveragePillar = ({ topDays = 3, baseDays = 7 }) => {
  return (
    <div className="rounded-xl p-2  flex">
      <div className="w-[110px] mx-auto flex flex-col h-[380px]">
        <div className="text-gray-300 text-xs mb-1">Avarage</div>
        <div className="flex-1 relative rounded-lg overflow-hidden bg-[#2A2F4A]" aria-label={`average-top-days-${topDays}`}>
          {/* Top red chip */}
          <div className="absolute top-2 left-2 right-2 h-4 rounded-full bg-[#EF4444] flex items-center justify-center text-[9px] text-white shadow-[0_4px_10px_rgba(239,68,68,0.35)]">
            <span className="font-semibold leading-none">{topDays} Days</span>
          </div>

          {/* Left-side scale ticks */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="absolute left-2 z-20" style={{ top: 28 + i * 24 }}>
              <div className={`h-[2px] ${i === 3 ? 'w-6' : 'w-4'} rounded bg-white/80`} />
            </div>
          ))}

          {/* Orange fill from bottom with subtle vertical dividers and top shadow edge */}
          <div className="absolute inset-x-0 bottom-0 h-[50%] z-10">
            <div className="absolute inset-0 bg-[#F97316]" />
            {/* subtle vertical dividers */}
            <div className="absolute inset-y-0 left-1/3 w-px " />
            <div className="absolute inset-y-0 left-2/3 w-px " />
            {/* soft shadow at top of the fill to match screenshot */}
            <div className="absolute top-0 left-0 right-0 h-5 bg-gradient-to-b from-black/30 to-transparent" />
            {/* soft shadow at bottom of the fill to blend into the bottom label */}
            <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-black/35 to-transparent" />
          </div>

          {/* Bottom gray label inside the pillar (full width) */}
          <div className="absolute left-0 z-99 right-0 bottom-0 bg-[#D9DBDF] text-[#0E1330] text-[15px] font-bold py-2 text-center rounded-b-lg shadow-[inset_0_1px_0_rgba(0,0,0,0.12)]">
            {baseDays} Days
          </div>

          {/* High z-index overlay shadow just above the label to ensure visibility */}
          <div className="absolute left-2 right-2 z-30 pointer-events-none" style={{ bottom: 38 }}>
            <div className="h-2 bg-gradient-to-b from-transparent to-black/45 rounded-sm" />
          </div>
        </div>
      </div>
    </div>
  )
}

const DurationDeadline = () => {
  return (
    <div className=" px-2 rounded-2xl  w-full">
      <div className="px-2">
        <h2 className="text-white text-[22px] lg:text-[22px] font-bold tracking-wide">
          Duration Deadlines <span className="font-semibold">– Internal Research</span>
        </h2>
      </div>

      <div className="mt-2 grid grid-cols-12 gap-2">
        {/* Left Average Pillar */}
        <div className="col-span-12 sm:col-span-3 md:col-span-2">
          <AveragePillar />
        </div>

        {/* Right side content */}
        <div className="col-span-12 sm:col-span-9 md:col-span-10 space-y-2 mt-7">
          {/* Row 1: Active deals + two gauges card */}
          <div className="grid grid-cols-12 gap-2">
            {/* Active deals card */}
            <div className="col-span-12 sm:col-span-4">
              <div className="bg-[#181C3A] rounded-xl p-2 h-full flex flex-col items-center justify-center">
                <div className="w-[90px] h-[90px] rounded-lg bg-gradient-to-br from-[#7C3AED] to-[#22D3EE] shadow-inner flex items-center justify-center mb-2">
                  <div className="text-white text-2xl font-bold">12</div>
                </div>
                <div className="text-gray-200 text-xs">Current Active Deals</div>
              </div>
            </div>

            {/* Two gauges in one card */}
            <div className="col-span-12 sm:col-span-8">
              <div className="bg-[#181C3A] rounded-xl p-2 h-full grid grid-cols-1 md:grid-cols-2 gap-2">
                <GaugeSemi valueDays={5} targetDays={3} color="#EF4444" label={"MARKET RESEARCH"} />
                <GaugeSemi valueDays={16} targetDays={14} color="#EF4444" label={"DUE DILIGENCE\nLEGAL"} />
              </div>
            </div>
          </div>

          {/* Row 2: three gauges in one wide card */}
          <div className="bg-[#181C3A] rounded-xl p-2 grid grid-cols-1 md:grid-cols-3 gap-2">
            <GaugeSemi valueDays={8} targetDays={7} color="#18D359" label={"DUE DILIGENCE\nTECHNICA"} />
            <GaugeSemi valueDays={9} targetDays={7} color="#F59E0B" label={"FLOORPLAN\nARCHITECT"} />
            <GaugeSemi valueDays={10} targetDays={7} color={"#EF4444"} label={"TAX OPTIMIZATION"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DurationDeadline
