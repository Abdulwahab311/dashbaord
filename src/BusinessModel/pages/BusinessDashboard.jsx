import React from 'react'
import Cards from '../components/Cards'
import ActiveUserChart from '../components/ActiveUserChart'
import CustomerFeedBackChart from '../components/CustomerFeedBackChart'
import Ratio from '../components/Ratio'
import Tabs from '../components/Tabs'
import Departments from '../components/Departments'
import IndependencyQuadrant from '../components/IndependencyQuadrant'
import Fte from '../components/Fte'




const BusinessDashboard = () => {
  return (
    <>
     <div className='flex bg-gradient-to-r from-[#000000] to-[#22D3EE] text-white text-xl p-5 -mt-4 -ml-5 lg:px-5 lg:py-3 '>
  <h3>BUSINESS MODEL</h3>
</div>
<div className='mt-5'>
    <Cards/>
</div>
  
{/* Top row: responsive grid */}
<div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
  <div className='col-span-1'>
    <ActiveUserChart/>
  </div>
  <div className='col-span-1'>
    <CustomerFeedBackChart/>
  </div>
  {/* Keep Ratio wide on large screens; full width on small */}
  <div className='col-span-1 md:col-span-2 lg:col-span-2'>
    <Ratio/>
  </div>
</div>

<div className='flex bg-gradient-to-r from-[#000000] to-[#22D3EE] text-white text-xl p-2 mt-7'>
  <h3>ORGANIZATIONAL MODEL</h3>
</div>
{/* Organizational: 1 col on small, 2 on md, 3 on lg */}
<div className='mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
  <div className='col-span-1'>
    <IndependencyQuadrant/>
  </div>
  <div className='col-span-1'>
    <Departments/>
  </div>
  <div className='col-span-1 md:col-span-2 lg:col-span-1'>
    <Fte/>
  </div>
</div>

<div className='mt-8'>
  <Tabs />
</div>
 
    
    </>
  )
}

export default BusinessDashboard
