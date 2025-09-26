import React from 'react';

const TotalDeals = () => {
  return (
    <div className="w-full space-y-2 bg-[#090D28] p-2 rounded-2xl">
      {/* Main Header */}
      <h1 className="text-white text-xl font-bold uppercase">TOTAL DEALS</h1>

      {/* Top Section */}
      <div className="grid grid-cols-2 gap-2">
        {/* Main TOTAL DEALS Card */}
        <div className="col-span-1 text-center bg-[#181C3A] rounded-xl p-2">
          <h2 className="text-white text-base font-bold uppercase mb-1">TOTAL DEALS</h2>
          <div className="text-gray-300 text-xs mb-3">GOAL: 12 DEALS</div>
          <div className="flex items-baseline text-center justify-center space-x-2">
            <div className="text-white text-3xl font-bold">18</div>
            <div className="text-green-400 text-sm font-semibold">+12.5%</div>
          </div>
        </div>

        {/* Right Side Stacked Cards */}
        <div className="col-span-1 space-y-2.5">
          <div className="bg-[#181C3A] rounded-xl p-3">
            <div className="flex justify-between items-center">
              <span className="text-white text-xs">Long Term Deals</span>
              <span className="text-white text-base font-bold">9</span>
            </div>
          </div>
          <div className="bg-[#181C3A] rounded-xl p-3">
            <div className="flex justify-between items-center">
              <span className="text-white text-xs">External Financing</span>
              <span className="text-white text-base font-bold">9</span>
            </div>
          </div>
          <div className="bg-[#181C3A] rounded-xl p-3">
            <div className="flex justify-between items-center">
              <span className="text-white text-xs">Short Term Deals</span>
              <span className="text-white text-base font-bold">9</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Two Rows */}
      <div className="space-y-2">
        {/* First Row */}
        <div className="grid grid-cols-4 gap-3">
          <div className="bg-[#181C3A] rounded-xl p-3">
            <div className="text-center">
              <div className="text-white text-xs font-medium mb-1">ZORG DEALS</div>
              <div className="text-white text-xl font-bold">9</div>
            </div>
          </div>
          <div className="bg-[#181C3A] rounded-xl p-3">
            <div className="text-center">
              <div className="text-white text-xs font-medium mb-1">INDUSTRIE DEALS</div>
              <div className="text-white text-xl font-bold">2</div>
            </div>
          </div>
          <div className="bg-[#181C3A] rounded-xl p-3">
            <div className="text-center">
              <div className="text-white text-xs font-medium mb-1">OTHER DEALS</div>
              <div className="text-white text-xl font-bold">1</div>
            </div>
          </div>
          <div className="bg-[#181C3A] rounded-xl p-3">
            <div className="text-center">
              <div className="text-white text-xs font-medium mb-1">External Financing</div>
              <div className="text-white text-xl font-bold">€ 3.5 M</div>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-[#181C3A] rounded-xl p-3">
            <div className="text-center">
              <div className="text-white text-xs font-medium mb-1">X % Self Ffinanced</div>
              <div className="text-white text-xl font-bold">9</div>
            </div>
          </div>
          <div className="bg-[#181C3A] rounded-xl p-3">
            <div className="text-center">
              <div className="text-white text-xs font-medium mb-1">% Within Deadline</div>
              <div className="text-white text-xl font-bold">9</div>
            </div>
          </div>
          <div className="bg-[#181C3A] rounded-xl p-3">
            <div className="text-center">
              <div className="text-white text-xs font-medium mb-1">Rent</div>
              <div className="text-white text-xl font-bold">€ 3.5 M</div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Indicator */}
      <div className="rounded-xl px-2">
        <h3 className="text-white text-base font-bold ">Progress Indicator</h3>
        <div className="relative">
          {/* Progress Bar */}
          <div className="w-full h-2 bg-gray-600 rounded-full overflow-hidden">
            <div 
              className="h-full bg-green-400 rounded-full transition-all duration-1000"
              style={{ width: '87.5%' }}
            ></div>
          </div>
          
          {/* Scale Numbers */}
          <div className="flex justify-between mt-1.5 text-gray-400 text-xs">
            <span>0</span>
            <span>2</span>
            <span>4</span>
            <span>6</span>
            <span>8</span>
            <span>10</span>
            <span>12</span>
            <span>14</span>
            <span>16</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalDeals;
