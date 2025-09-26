import React from 'react'

const StatCard = ({ title, value, footer, gradient, danger }) => (
  <div
    className={`relative rounded-xl p-4  flex flex-col items-center justify-center text-center h-[200px] ${
      danger
        ? "[background:linear-gradient(180.27deg,#F04245_0.24%,rgba(138,38,40,0)_99.77%)]"
        : "bg-[#181C3A]"
    }`}
  >
    {/* Header */}
    <div
      className={`px-4 py-1 rounded-full text-white text-sm font-medium mb-3 shadow-md ${
        gradient
          ? gradient
          : "[background:linear-gradient(180.57deg,#4F2277_10.44%,#202E8E_171.16%)]"
      }`}
    >
      {title}
    </div>

    {/* Value */}
    <div className="text-white text-4xl font-bold">{value}</div>

    {/* Footer (Days in bottom-right corner) */}
    {footer && (
      <div className="absolute bottom-2 right-3 text-gray-300 text-xs">
        {footer}
      </div>
    )}
  </div>
)

export default function DurationDeadline() {
  return (
    <div className="w-full max-w-3xl mx-auto p-6 rounded-2xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Active Project */}
        <StatCard
          title="Active Project"
          value="41"
          gradient="bg-gradient-to-r from-[#7C3AED] to-[#4F46E5]"
        />

        {/* Missed Deadlines */}
        <StatCard
          title="Missed Deadlines"
          value="5"
          danger
        />

        {/* Planned Duration */}
        <StatCard
          title="Planned Duration"
          value="112"
          footer="Days"
          gradient="bg-gradient-to-r from-[#7C3AED] to-[#9333EA]"
        />

        {/* Total Duration Now */}
        <StatCard
          title="Total Duration Now"
          value="69"
          footer="Days"
          gradient="bg-gradient-to-r from-[#7C3AED] to-[#9333EA]"
        />
      </div>
    </div>
  )
}
