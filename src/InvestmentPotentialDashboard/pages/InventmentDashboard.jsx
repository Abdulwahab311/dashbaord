import React from "react";
import Cards from "../../InvestmentPotentialDashboard/components/Dashboard/Cards";
import Social from "../../InvestmentPotentialDashboard/components/Dashboard/SocialCards"; 
import BuinessCards from "../../InvestmentPotentialDashboard/components/Dashboard/BuinessCards"
import Organization from "../../InvestmentPotentialDashboard/components/Dashboard/Organizational"
const FinanencialDashboard = () => {
  return (
    <>
      {/* Header */}
      <div className="flex bg-gradient-to-r from-black to-[#7355C8]  text-white text-xl p-2">
        <h3>INVESTMENT MODEL</h3>
      </div>

      {/* Main Section */}
      <div className="bg-[#181C3A] w-full">
        <div className="mt-1">
          <div className="grid grid-cols-12 gap-4">
            {/* Cards full width */}
            <div className="col-span-12 px-2">
              <Cards />
            </div>
          </div>
        </div>
      </div>

      {/* Growth Model */}
      <div className="flex bg-gradient-to-r from-black to-[#F3A849] mt-2 ml-2 mr-2 rounded-xl text-white text-xl p-2">
        <h3>GROWTH MODEL</h3>
      </div>

      {/* Social Section under Growth Model */}
      <div className="bg-[#181C3A] w-full rounded-xl">
        <Social />
      </div>
      <div className="flex bg-gradient-to-r from-black to-cyan-400  ml-2 mr-2 rounded-xl text-white text-xl p-2">
        <h3>BUISNESS MODEL</h3>
      </div>
       {/* Social Section under Growth Model */}
      <div className="bg-[#181C3A] w-full  rounded-xl">
        <BuinessCards />
      </div>
       <div >
      {/* Header */}
      <div className="flex bg-gradient-to-r from-black to-cyan-400 mt-2  ml-2 mr-2 rounded-xl text-white text-xl p-2">
        <h3>ORGANIZATIONAL MODEL</h3>
      </div>

      {/* Polar Area Chart below header */}
      <div className="w-full">
        <Organization />
      </div>
    </div>
    </>
  );
};

export default FinanencialDashboard;
