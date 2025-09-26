import React from "react";

export default function Exit({
  title = "ACTIVE DEALS DEVELOPMENT (PROPERTY PRESERVATION)",
  label = "ACTIVE DEALS DEVELOPMENT (PROPERTY RESALE)",
  counts = { red: 2, orange: 1, blue: 1 },
  onToggle,
  isOpen,
}) {
  const pills = [
    { value: counts.red, bg: "#E81C1C", badge: true },
    { value: counts.orange, bg: "#FF7800" },
    { value: counts.blue, bg: "#1BABE65C" },
  ];

  return (
    <section className="w-full">
      <div className="px-3">
        <h2 className="text-white text-sm md:text-[10px] font-semibold tracking-wide">
          {title}
        </h2>
      </div>

      <div className="mt-2">
        <div className="w-full rounded-lg bg-[#141936] px-2 py-2 flex items-center justify-between relative">
          {/* Left label + pills */}
          <div className="flex items-center gap-6">
            <span className="text-white/90 text-[11px] md:text-sm font-semibold px-2 py-1 bg-[#181C3A]">
              {label}
            </span>
            <div className="flex items-center gap-2">
              {pills.map((p, i) => (
                <div
                  key={i}
                  className="relative inline-flex items-center justify-center w-6 h-6 rounded-full text-[10px] text-white font-bold"
                  style={{ backgroundColor: p.bg }}
                >
                  {p.value}
                  {p.badge && (
                    <span
                      className="absolute -right-1 top-0 w-3 h-3 rounded-full bg-white text-[#0E1330] text-[8px] font-bold flex items-center justify-center"
                      style={{
                        boxShadow: "2px 3px 8px rgba(0,0,0,0.45)",
                      }}
                    >
                      !
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right button */}
          <button
            type="button"
            onClick={onToggle}
            className={`inline-flex items-center justify-center w-8 h-6 rounded-full bg-[#B0A3EF54] text-white text-[10px] font-semibold transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            ▼
          </button>
        </div>
      </div>
    </section>
  );
}
