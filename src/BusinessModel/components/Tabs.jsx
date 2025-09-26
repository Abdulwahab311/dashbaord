import React, { useState } from 'react'
import TotalOverView from './TotalOverView'

export default function Tabs({ heading = 'TOTAL OVERVIEW', tabs = [], defaultActive = 0, renderContent }) {
  const defaultTabs = ['TOTAL OVERVIEW', 'TOTAL OVERVIEW', 'DEALS ZORG', 'PORTFOLIO', 'DEALS INDUSTRIE']
  const tabList = tabs.length ? tabs : defaultTabs
  const [active, setActive] = useState(defaultActive)

  const render = renderContent || (() => <TotalOverView />)

  return (
    <section className="w-full">
      <div className="px-2">
        <h2 className="text-white text-sm md:text-base font-extrabold tracking-wide">{heading}</h2>
      </div>
      <div className="mt-2 px-2">
        <div className="flex gap-4 text-[11px]">
          {tabList.map((t, i) => (
            <button
              key={t}
              onClick={() => setActive(i)}
              className={`uppercase tracking-wide pb-1 ${active === i ? 'text-white border-b border-blue-500' : 'text-[#AAB1C7]'} hover:text-white`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-2">
        {render(active)}
      </div>
    </section>
  )
}
