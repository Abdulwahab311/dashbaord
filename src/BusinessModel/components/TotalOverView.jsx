import React from 'react'

const columns = [
  'DEAL',
  'CYCLE TIME',
  'TIME TO SIGNATURE',
  'TERMINATION DATE',
  'TERMINATION DATE',
  'PASSING DATE',
  'SALES PASSINGDATE',
  'SALES PASSINGDATE',
  'BUY PASSINGDATE',
  'PURCHASE VALUE COMPARED TO MARKET VALUE',
  'PURCHASE VALUE',
  'MARKET VALUE',
  'SALES VALUE',
  'SALES VALUE COMPARED TO MARKET VALUE'
]

const groups = [
  { name: 'ZORG' },
  { name: 'INDUSTRIE' },
  { name: 'OVERIG' },
  { name: 'PORTFOLIO' },
]

export default function TotalOverView() {
  return (
    <section className="w-full">
      {/* Table wrapper with horizontal scroll */}
      <div className="bg-[#0E1330] overflow-hidden">
        <div className="overflow-x-auto no-scrollbar">
          <table className="min-w-[1600px] xl:min-w-0 w-full text-left">
            <thead>
              <tr className="bg-[#111736] text-[#D4DAE7] text-[9px] uppercase tracking-wide">
                {columns.map((c, idx) => (
                  <th key={idx} className={`px-3 py-2 whitespace-nowrap ${idx === 0 ? 'w-40' : 'w-56'}`}>
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
                    <td className="px-3 py-2 text-white font-semibold bg-transparent">{g.name}</td>
                    <td className="px-0 py-0 bg-transparent" colSpan={columns.length - 1}>
                      <div className="flex w-full items-stretch">
                        <span className="w-3 bg-transparent" />
                        <div className="flex-1 bg-[#141A3B] text-white py-2 pr-3">FORECASTED</div>
                      </div>
                    </td>
                  </tr>
                  {/* Reality */}
                  <tr className="text-[10px]">
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
      </div>
    </section>
  )
}
