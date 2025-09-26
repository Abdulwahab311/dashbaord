import React from 'react'
import PerformanceChart from '../components/PerformanceChart'
import TotalDeals from '../components/TotalDeals'
import Portfolio from '../components/Portfolio'
import PieCharts from '../components/PieChats'
import Tabs from '../../BusinessModel/components/Tabs'
import EffectivelyChart from '../components/EffectivelyChart'

const BusinessModelDashboard = () => {
  return (
    <>
      <h3 className="text-sm text-white mb-2">Weekly</h3>

      {/* Top 3 cards: 1 column on small, 3 on large */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
        <PerformanceChart />
        <TotalDeals />
        <Portfolio />
      </div>

      {/* Bottom 2 cards: 1 column on small, 2 on large */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-1 mt-1">
        <PieCharts />
        <EffectivelyChart />
      </div>

      <Tabs />
    </>
  )
}

export default BusinessModelDashboard
