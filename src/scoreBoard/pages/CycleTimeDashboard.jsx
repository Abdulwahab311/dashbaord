import React from 'react'
import CycleTimeKpiCards from '../components/CycleTimeKpiCards'
import CycleTimeChart from '../components/CycleTimeChart'

const CycleTimeDashboard = () => {
  return (
    <div className="p-6 space-y-6">
      {/* Top section: KPI Cards */}
      <CycleTimeKpiCards />
      
      {/* Bottom section: Area Chart */}
      <CycleTimeChart />
    </div>
  )
}

export default CycleTimeDashboard
