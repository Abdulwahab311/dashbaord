import React from "react";

export default function Exit({
  title = "ACTIEVE DEALS 2e CONTRACTFASE EXIT",
  label = "EXIT",
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
      <div className="px-4">
        <h2 className="text-white text-xl md:text-2xl font-semibold tracking-wide">
          {title}
        </h2>
      </div>

      <div className="mt-3 ">
        <div className="w-full rounded-xl bg-[#141936] px-3 sm:px-4 py-3 flex items-center justify-between relative">
          {/* Left label */}
          <div className="flex items-center gap-3">
            <span className="text-white/90 text-lg md:text-xl font-semibold px-3 py-2 bg-[#181C3A]">
              {label}
            </span>
          </div>

          {/* Centered pills */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-5">
            {pills.map((p, i) => (
              <div
                key={i}
                className="relative inline-flex items-center justify-center w-12 h-12 rounded-full text-sm md:text-base text-white font-extrabold"
                style={{ backgroundColor: p.bg }}
              >
                {p.value}
                {p.badge && (
                  <span
                    className="absolute -right-3 top-3 w-5 h-5 rounded-full bg-white text-[#0E1330] text-[13px] font-extrabold flex items-center justify-center"
                    style={{ boxShadow: "4px 6px 18px rgba(0,0,0,0.45)" }}
                  >
                    !
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Right button */}
          <button
            type="button"
            onClick={onToggle}
            className={`inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#B0A3EF54] text-white text-xs font-semibold transform transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            ▼
          </button>
        </div>

        {/* Pills row for small screens */}
        <div className="md:hidden mt-3 px-3 flex items-center justify-center gap-3">
          {pills.map((p, i) => (
            <div
              key={i}
              className="relative inline-flex items-center justify-center w-10 h-10 rounded-full text-xs text-white font-extrabold"
              style={{ backgroundColor: p.bg }}
            >
              {p.value}
              {p.badge && (
                <span
                  className="absolute -right-2 top-2 w-4 h-4 rounded-full bg-white text-[#0E1330] text-[11px] font-extrabold flex items-center justify-center"
                  style={{ boxShadow: "4px 6px 18px rgba(0,0,0,0.45)" }}
                >
                  !
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
