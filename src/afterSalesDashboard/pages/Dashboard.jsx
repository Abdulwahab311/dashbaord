import React, { useState } from "react";
import Chart from "../components/dashboard/Chart";
import ConsectiveSteps from "../components/dashboard/ConsectiveSteps";
import Exit from "../components/dashboard/Exit";
import DealsTable from "../components/dashboard/DealsTable";
import AfterSalesPilar from "../components/dashboard/AfterSalesPilar";
import TotalPilar from "../components/dashboard/TotalPilar";

const Dashboard = () => {
  const [showDeals, setShowDeals] = useState(true);

  return (
    <>
      <div className="w-full grid grid-cols-17 gap-1 ">
        {/* Single row: Chart + three pillars */}
        <div className="col-span-9 xl:col-span-8">
          <Chart />
        </div>
        <div className="col-span-15 xl:col-span-1 order-1">
          <TotalPilar />
        </div>
        <div className="col-span-15 xl:col-span-7 order-2 min-w-0 overflow-hidden">
          <ConsectiveSteps />
        </div>
        <div className="col-span-15 xl:col-span-1 order-3">
          <AfterSalesPilar />
        </div>
      </div>

      <div className="bg-[#090D28] py-5 px-2 mt-4 rounded-lg">
        {/* Pass toggle props */}
        <Exit onToggle={() => setShowDeals(!showDeals)} isOpen={showDeals} />

        {/* Conditionally render */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            showDeals ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <DealsTable />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
