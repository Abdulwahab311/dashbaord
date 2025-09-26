import React, {useState} from "react";
import DurationQuarter from "../components/dashboard/DurationQuarter";
import DurationDeadline from "../components/dashboard/DurationDeadline";
import AveragePurchase from "../components/dashboard/AveragePurchase";
import Exit from "../components/dashboard/Exit";
import ActiveDealsTable from "../components/dashboard/ActiveDealsTable";
import BuyerReach from "../components/dashboard/BuyerReach";
import TotalOverview from "../components/dashboard/TotalOverview";

const DashboardHealthCare = () => {
    const [open, setOpen] = useState(true);
  
  return (
    <>
      <div className="w-full">
        <p className="text-white text-xl lg:text-2xl font-semibold pb-5">
         HEALTHCARE - 2e CONTRACTPHASE DASHBOARD
        </p>
        <div className="mt-6 flex flex-col lg:flex-row gap-4">
          <div className="bg-[#090D28] rounded-2xl p-2 flex-1">
            <DurationQuarter />
          </div>
          <div className="bg-[#090D28] rounded-2xl p-2 flex-1 ">
            <DurationDeadline />
          </div>
        </div>
      </div>
      <div className="mt-6 flex flex-col lg:flex-row gap-4">
        <div className="flex-1">
          <Exit
                      title="ACTIEVE DEALS 2e CONTRACTFASE EXIT"
                      label="Internal Research"
                      counts={{ red: 2, orange: 1, blue: 1 }}
                      open={open}
                      onToggle={() => setOpen(!open)}
                    />
                    {open && <ActiveDealsTable />}
          <BuyerReach />
        </div>
        <div className="lg:w-[280px]">
          <AveragePurchase />
        </div>
      </div>
      <TotalOverview />
    </>
  );
};

export default DashboardHealthCare;
