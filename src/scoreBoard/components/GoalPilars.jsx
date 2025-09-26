import React from 'react';

const GoalPilars = () => {
  const goals = [
    {
      title: "Week Goal",
      target: 1000,
      current: 284,
      period: "Week"
    },
    {
      title: "MAAND Goal", 
      target: 4000,
      current: 1236,
      period: "Month"
    },
    {
      title: "QUARTER Goal",
      target: 3712,
      current: 1236,
      period: "Quarter"
    }
  ];

  const getProgressPercentage = (current, target) => {
    return Math.min((current / target) * 100, 100);
  };

  const getProgressColor = (percentage) => {
    if (percentage <= 25) return 'from-orange-400 to-orange-500';
    if (percentage <= 50) return 'from-purple-400 to-purple-500';
    if (percentage <= 75) return 'from-cyan-400 to-cyan-500';
    if (percentage <= 90) return 'from-blue-500 to-blue-600';
    return 'from-gray-500 to-gray-600';
  };

  return (
    <div className=" bg-[#090D28] p-2 rounded-2xl">
      <div className="w-full mx-auto">
        <h1 className="text-xl font-bold text-white mb-2 text-center">
          Goal Tracking Dashboard
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {goals.map((goal, index) => {
            const progressPercentage = getProgressPercentage(goal.current, goal.target);
            
            return (
              <div key={index} className=" rounded-2xl p-1 ">
                {/* Header */}
                <div className="bg-[#181C3A] rounded-xl p-2 mb-2 ">
                  <h2 className="text-white text-[8px] font-medium text-center mb-1">
                    {goal.title}
                  </h2>
                  <div className="text-white text-lg font-bold text-center">
                    {goal.target.toLocaleString()}
                  </div>
                </div>

                <div className="bg-[#181C3A] rounded-xl p-2 ">
                {/* Current Progress */}
                <div className="mb-1">
                  <div className="text-white text-xs font-semibold">Now</div>
                  <div className="text-white text-lg font-bold">{goal.current.toLocaleString()}</div>
                </div>

                {/* Progress Bar Chart (stacked segments like pic) */}
                <div className="relative h-40 bg-[#181C3A] rounded-xl overflow-hidden">
                  {/* Y-axis labels */}
                  <div className="absolute right-1 top-0 h-full flex flex-col justify-between text-white text-xs py-2">
                    <span>1000</span>
                    <span>800</span>
                    <span>600</span>
                    <span>400</span>
                    <span>200</span>
                    <span>100</span>
                  </div>

                  {/* Stacked colored segments */}
                  <div className="h-full flex flex-col p-1 pr-12 ">
                    <div className="rounded-t-lg" style={{ backgroundColor: '#475569', height: '20%' }}></div>
                    <div style={{ backgroundColor: '#3B82F6', height: '20%' }}></div>
                    <div style={{ backgroundColor: '#22D3EE', height: '20%' }}></div>
                    <div style={{ backgroundColor: '#8B5CF6', height: '20%' }}></div>
                    <div className="rounded-b-lg relative flex items-center justify-center" style={{ backgroundColor: '#F59E0B', height: '20%' }}>
                      <span className="text-[#0B0F24] font-bold">{goal.current.toLocaleString()}</span>
                    </div>
                  </div>

                  {/* Grid lines */}
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none    ">
                    {[1000, 800, 600, 400, 200, 100].map((value, idx) => (
                      <div key={idx} className="border-t border-white/10"></div>
                    ))}
                  </div>
                </div>

                {/* Progress indicator */}
                <div className="hidden mt-3 bg-[#0B0F24] rounded-lg  border border-white/10">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-300 text-xs">Progress</span>
                    <span className="text-white font-medium text-sm">
                      {goal.current} / {goal.target}
                    </span>
                  </div>
                  <div className="w-full bg-[#1E293B] rounded-full h-2">
                    <div 
                      className={`bg-gradient-to-r ${getProgressColor(progressPercentage)} h-2 rounded-full transition-all duration-700 ease-out`}
                      style={{ width: `${progressPercentage}%` }}
                    ></div>
                  </div>
                </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Chart Information */}
        
      </div>
    </div>
  );
};

export default GoalPilars;


