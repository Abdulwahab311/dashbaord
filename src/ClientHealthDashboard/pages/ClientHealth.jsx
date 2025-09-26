import React from "react";
import Cards from "../components/HealthCard";
import Health from "../components/HealthGraphs";
import Table from "../components/Table";
const IndustryDashboard = () => {
  return (
    <>
      {/* Main Section */}
      <div className="bg-[#181C3A] w-full">
        <div className="mt-1.5">
          <div className="grid grid-cols-12 gap-2">
            {/* Cards full width */}
            <div className="col-span-12 px-1.5">
              <Cards />
            </div>
          </div>
           <div>
            <Health />
          </div> 
            <div>
            <Table />
          </div> 
        </div>
      </div>
    </>
  );
};

export default IndustryDashboard;