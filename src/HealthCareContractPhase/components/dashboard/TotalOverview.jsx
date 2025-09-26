import React from 'react'

const columns = [
  'DEAL',
  'Cycle Time',
  'Time To Signature',
  'Termination Date',
  'Termination Date',
  'Passing Date',
  'Sales Passingdate',
  'Sales Passingdate',
  'Buy Passingdate',
  'Purchase Value Compared To Market Value',
  'Purchase Value',
  'Market Value',
  'SALES VALUE',
  'Sales Market'
]

const groups = [
  { name: 'ZORG' },
  { name: 'INDUSTRIE' },
  { name: 'OVERIG' },
  { name: 'PORTFOLIO' },
]

export default function TotalOverview() {
  return (
    <section className="w-full">
      {/* Title */}
      <div className="px-2">
        <h2 className="text-white text-sm md:text-base font-extrabold tracking-wide">TOTAL OVERVIEW</h2>
      </div>

      {/* Table wrapper with horizontal scroll */}
      <div className="mt-2 bg-[#0E1330]  overflow-hidden">
        <div className="overflow-x-auto no-scrollbar">
          <table className="min-w-[1200px] xl:min-w-0 w-full text-left">
            <thead>
              <tr className="bg-[#111736] text-[#AAB1C7] text-[11px]">
                {columns.map((c, idx) => (
                  <th key={idx} className={`px-3 py-2 whitespace-nowrap ${idx === 0 ? 'w-40' : 'w-48'}`}>
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {groups.map((g) => (
                <React.Fragment key={g.name}>
                  {/* Forecasted */}
                  <tr className="text-[11px]">
                    <td className="px-3 py-2 text-white font-semibold bg-transparent">{g.name}</td>
                    <td className="px-0 py-0 bg-transparent" colSpan={columns.length - 1}>
                      <div className="flex w-full items-stretch">
                        <span className="w-3 bg-transparent" />
                        <div className="flex-1 bg-[#141A3B] text-white py-2 pr-3">FORECASTED</div>
                      </div>
                    </td>
                  </tr>
                  {/* Reality */}
                  <tr className="text-[11px]">
                    <td className="px-3 py-2 text-transparent bg-transparent">{g.name}</td>
                    <td className="px-0 py-0 bg-transparent" colSpan={columns.length - 1}>
                      <div className="flex w-full items-stretch">
                        <span className="w-3 bg-transparent" />
                        <div className="flex-1 bg-[#090D28] text-white py-2 pr-3">REALITY</div>
                      </div>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-3 py-3 text-[11px]">
          <div className="flex items-center gap-2 text-[#9AA1B5]">
            <span>Prev</span>
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-[#78B7FF] text-[#0E1330] font-semibold">1</span>
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl border border-[#2A3354] text-[#AAB1C7]">2</span>
            <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl border border-[#2A3354] text-[#AAB1C7]">3</span>
            <span className="mx-1 text-[#AAB1C7]">…</span>
            <span className="inline-flex items-center justify-center w-10 h-8 rounded-xl border border-[#2A3354] text-[#AAB1C7]">10</span>
            <span className="ml-1">Next</span>
          </div>
          <div className="text-[#9AA1B5]">Page <span className="ml-1 text-white">1</span> <span className="mx-1">▾</span> Of 10</div>
        </div>

        {/* Total footer */}
        <div className="border-t border-[#1C2247]" />
        <div className="px-3 pt-2 text-white font-semibold text-[12px]">TOTAAL</div>
        <div className=" pb-4 mt-3">
          <div className="flex items-stretch w-full">
            <span className="w-3 bg-transparent" />
            <div className="flex-1 h-7  bg-[#2A3354]" />
          </div>
        </div>
      </div>
    </section>
  )
}


