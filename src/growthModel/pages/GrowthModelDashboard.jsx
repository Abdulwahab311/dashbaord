import React from 'react'
import MarketingCards from '../components/dashboard/MarketingCards'
import ScalingChart from '../components/dashboard/ScalingChart'
import Marketing from '../components/dashboard/Marketing'
import Sales from '../components/dashboard/Sales'
import PotentialPerChannel from '../components/dashboard/PotentialPerChannel'


const GrowthModelDashboard = () => {
  return (
   <>
  
   <div className='grid grid-flow-col items-center bg-gradient-to-r from-[#000000] to-[#F3A849] text-white text-xl p-2 -mt-3 -ml-5 px-5 py-2'>
  <h3>GROWTH MODEL</h3>
</div>

    <div className='bg-[#181C3A] w-full'>
      <div className='mt-4'>
        <div className='grid grid-cols-12 gap-4 items-start'>
          <div className='col-span-12 xl:col-span-7 w-full'>
            <MarketingCards />
          </div>
          <div className='col-span-12 xl:col-span-5 w-full'>
            <ScalingChart />
          </div>
        </div>
      </div>
    </div>
    
    {/* Main two-column content */}
    <div className='grid grid-cols-12 gap-4'>
      {/* Left column: Marketing + Sales (wider) */}
      <div className='col-span-12 xl:col-span-8'>
        <h1 className='text-white text-2xl font-bold bg-gradient-to-r from-[#000000] to-[#ED5E23] p-2 mb-3 w-40'>MARKETING</h1>
        <Marketing />

        <h1 className='text-white text-2xl font-bold bg-gradient-to-r from-[#000000] to-[#ED5E23] p-2 mt-1 mb-2 w-40'>SALES</h1>
        <Sales/>
      </div>

      {/* Right column: Potential Per Channel (narrower) */}
      <div className='col-span-12 xl:col-span-4 mt-4'>
        <PotentialPerChannel/>
      </div>
    </div>
  
   </>
  )
}

export default GrowthModelDashboard
