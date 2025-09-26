import React from "react";

const columns = [
  "DEAL",
  "CYCLE TIME",
  "TIME TO SIGNATURE",
  "TERMINATION DATE",
  "TERMINATION DATE",
  "PASSING DATE",
  "SALES PASSINGDATE",
  "SALES PASSINGDATE",
  "BUY PASSINGDATE",
  "PURCHASE VALUE COMPARED TO MARKET VALUE",
  "PURCHASE VALUE",
  "MARKET VALUE",
  "SALES VALUE",
  "SALES VALUE COMPARED TO MARKET VALUE",
];

const groups = [
  { name: "ZORG" },
  { name: "INDUSTRIE" },
  { name: "OVERIG" },
  { name: "PORTFOLIO" },
];

export default function TotalOverView() {
  return (
    <section className="w-full p-2">
      <div className="text-xl text-white mb-2 px-2">operational dashboard</div>
      <div className="bg-[#0E1330] overflow-hidden">
        <div className="overflow-x-auto scrollbar-thin scrollbar-track-[#111736] scrollbar-thumb-[#60A5FA]">
          <table className="text-left" style={{ minWidth: '1200px' }}>
            <thead>
              <tr className="bg-[#111736] text-[#D4DAE7] text-[9px] uppercase tracking-wide">
                {columns.map((c, idx) => (
                  <th
                    key={idx}
                    className="px-3 py-2 whitespace-nowrap"
                    style={{ 
                      minWidth: idx === 0 ? '80px' : '120px',
                      width: idx === 0 ? '80px' : '120px'
                    }}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {groups.map((g) => (
                <React.Fragment key={g.name}>
                  {/* Forecasted */}
                  <tr className="text-[10px]">
                    <td className="px-3 py-2 text-white font-semibold bg-transparent whitespace-nowrap">
                      {g.name}
                    </td>
                    <td
                      className="px-0 py-0 bg-transparent"
                      colSpan={columns.length - 1}
                    >
                      <div className="flex w-full items-stretch">
                        <span className="w-1 bg-transparent" />
                        <div className="flex-1 bg-[#141A3B] text-white py-2 pr-3 whitespace-nowrap">
                          FORECASTED
                        </div>
                      </div>
                    </td>
                  </tr>
                  {/* Reality */}
                  <tr className="text-[10px]">
                    <td className="px-3 py-2 text-transparent bg-transparent whitespace-nowrap">
                      {g.name}
                    </td>
                    <td
                      className="px-0 py-0 bg-transparent"
                      colSpan={columns.length - 1}
                    >
                      <div className="flex w-full items-stretch">
                        <span className="w-1 bg-transparent" />
                        <div className="flex-1 bg-[#090D28] text-white py-2 pr-3 whitespace-nowrap">
                          REALITY
                        </div>
                      </div>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination section */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-xs text-[#D4DAE7] px-4 py-2 border-t border-[#1E244A] gap-2">
          {/* Left side: buttons */}
          <div className="flex items-center space-x-1 justify-center sm:justify-start">
            <button className="px-2 py-1 rounded bg-[#090D28] hover:bg-[#1E244A] transition-colors">
              Prev
            </button>
            <button className="px-2 py-1 rounded bg-[#60A5FA] text-white">1</button>
            <button className="px-2 py-1 rounded bg-[#111736] hover:bg-[#1E244A] transition-colors">
              2
            </button>
            <button className="px-2 py-1 rounded bg-[#111736] hover:bg-[#1E244A] transition-colors">
              3
            </button>
            <button className="px-2 py-1 rounded bg-[#090D28] hover:bg-[#1E244A] transition-colors">
              Next
            </button>
          </div>

          {/* Page info */}
          <div className="flex justify-center items-center space-x-2">
            <span>Page</span>
            <select className="bg-[#111736] text-[#D4DAE7] rounded px-2 py-1 border border-[#1E244A] focus:outline-none focus:border-[#60A5FA]">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
            <span>of 10</span>
          </div>
        </div>
      </div>
    </section>
  );
}