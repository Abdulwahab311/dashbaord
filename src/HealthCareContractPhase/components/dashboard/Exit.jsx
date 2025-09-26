import React from "react";

export default function Exit({
  title = "ACTIEVE DEALS 2e CONTRACTFASE EXIT",
  label = "Internal Research",
  counts = { red: 2, orange: 1, blue: 1 },
  open = true,
  onToggle = () => {},
}) {
  const pills = [
    { value: counts.red, bg: "#E81C1C", badge: true },
    { value: counts.orange, bg: "#FF7800" },
    { value: counts.blue, bg: "#1BABE65C" },
  ];

  return (
    <section className="w-full">
      <div className="px-4">
        <h2 className="text-white text-xl md:text-2xl font-semibold tracking-wide">
          {title}
        </h2>
      </div>

      <div className="mt-3">
        <div className="w-full rounded-xl bg-[#141936] px-3 sm:px-4 py-3 flex items-center justify-between relative">
          {/* Left label + pills */}
          <div className="flex items-center gap-10">
            <span className="text-white/90 text-lg md:text-2xl font-semibold px-3 py-2 bg-[#181C3A]">
              {label}
            </span>
            <div className="flex items-center gap-5">
              {pills.map((p, i) => (
                <div
                  key={i}
                  className="relative inline-flex items-center justify-center w-8 h-8 md:w-8 md:h-8 rounded-full text-xs md:text-base text-white font-extrabold"
                  style={{ backgroundColor: p.bg }}
                >
                  {p.value}
                  {p.badge && (
                    <span
                      className="absolute -right-2 md:-right-3 top-2 md:top-3 w-4 h-4 md:w-5 md:h-5 rounded-full bg-white text-[#0E1330] text-[11px] md:text-[13px] font-extrabold flex items-center justify-center"
                      style={{ boxShadow: "4px 6px 18px rgba(0,0,0,0.45)" }}
                    >
                      !
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right toggle button */}
          <button
            type="button"
            onClick={onToggle}
            className={`inline-flex items-center justify-center w-12 h-10 rounded-full bg-[#B0A3EF54] text-white text-xs font-semibold transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          >
            ▼
          </button>
        </div>
      </div>
    </section>
  );
}
