import React from "react";
import Cards from "../components/IndustryCards";
import Preperation from "../components/Preperations";
import Table from "../components/Table";
import DesignOntwrep from "../components/DesignOntwrep";
import Pillar from "../components/Pilars";
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
          <div className="grid grid-cols-3 gap-2 mt-2">
            
            <Preperation />
            <DesignOntwrep />
            <Pillar />
             
          </div>
           <div className="">
            <Table />
          </div>
        </div>
      </div>
     
    </>
  );
};

export default IndustryDashboard;