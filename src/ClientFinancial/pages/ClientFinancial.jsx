import React from 'react'
import Cards from '../components/dashboard/Cards'
import Analytics from "../components/dashboard/Analytic"

const FinanencialDashboard = () => {
  return (
   <>
    {/* Main Section */}
    <div className='bg-[#181C3A] w-full'>
      <div className='mt-1.5'>
        <div className='grid grid-cols-12 gap-2'>
          {/* Cards full width */}
          <div className='col-span-12 px-1.5'>
            <Cards />
          </div>

          {/* Analytics full width but inside 3 cards */}
          <div className='col-span-12 pb-5 px-5'>
            <Analytics />
          </div>
        </div>
      </div>
    </div>
   </>
  )
}

export default FinanencialDashboard
