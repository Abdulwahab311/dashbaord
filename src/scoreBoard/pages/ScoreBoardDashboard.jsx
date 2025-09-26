import React from 'react'
import DealsChart from '../components/DealsChart'
import TotalDeals from '../components/TotalDeals'
// KpiCards removed - consolidated into DealsChart and TotalDeals
import ProgressBar from '../components/ProgressBar'
import CycleTimeDashboard from './CycleTimeDashboard'
import CallsChart from '../components/CallsChart'
import GoalPilars from '../components/GoalPilars'

const ScoreBoardDashboard = () => {
  return (
    <>
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-2   rounded-2xl ">
      {/* Left column */}
      <div className=" text-sm bg-[#090D28] rounded-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 p-4 ">
          <div className="lg:col-span-2  ">
            <DealsChart />
          </div>
          <div className="lg:col-span-1">
            <TotalDeals />
          </div>
        </div>

        {/* KPI cards moved into respective components */}

        <ProgressBar />
      </div>

      {/* Right column */}
      <div className='bg-[#090D28] rounded-2xl'>
        <CycleTimeDashboard />
      </div>
    </div>

    <div className='mt-5 grid lg:grid-cols-3 gap-3 col-1'>
      <div className='col-span-2'>
        <CallsChart/>
      </div>
      <div className='lg:col-span-1 col-span-2 '>
        <GoalPilars/>
      </div>
    </div>
    </>
  )
}

export default ScoreBoardDashboard
