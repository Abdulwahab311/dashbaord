import React from 'react'
import Cards from '../components/Cards'
import Table from '../components/Table'
import Charts from '../components/Charts'
import SalesRep from '../components/SalesRep'
import Duration from '../components/Duration'
import DurationRecharts from '../components/DurationRecharts'

const SalesDashboard = () => {
  return (
    <>
    <div className=''>
    <Cards />
    </div>
    <div className='grid grid-cols-2 gap-4 mt-5'>
    <Table />
    <Charts />
    </div>
    <div className='grid grid-cols-2 gap-4 mt-5'>
    <SalesRep />
    <DurationRecharts /> 
    </div>
   

    
    </>
  )
}

export default SalesDashboard
