import React from 'react'
import { CiPlay1 } from 'react-icons/ci'
import LeadAountChart from '../components/LeadAountChart'
import LeadCards from '../components/LeadCards'
import LessionCycleChart from '../components/LessionCycleChart'
import Cards from '../components/Cards'

const MarketingDashboard = () => {
  return (
    <>
      {/* Top section: LeadAountChart + LeadCards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <LeadAountChart />
        <LeadCards />
      </div>

      {/* Bottom section: LessionCycleChart + Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mt-3">
        <LessionCycleChart />
        <Cards />
      </div>
    </>
  )
}

export default MarketingDashboard
