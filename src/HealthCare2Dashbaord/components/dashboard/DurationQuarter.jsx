import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const DurationQuarter = () => {
  // Chart data based on the exact image description
  const chartData = [
    {
      month: "AU",
      signedPurchaseAgreement: 2000,
      conceptToBuyer: 1500,
      potBuyerOutreach: 2000,
      internalSearch: 6500,
    }, // Total: 12000
    {
      month: "Sep",
      signedPurchaseAgreement: 1000,
      conceptToBuyer: 1000,
      potBuyerOutreach: 1500,
      internalSearch: 4000,
    }, // Total: 7500
    {
      month: "Oct",
      signedPurchaseAgreement: 2000,
      conceptToBuyer: 1500,
      potBuyerOutreach: 2000,
      internalSearch: 5000,
    }, // Total: 10500
    {
      month: "Nov",
      signedPurchaseAgreement: 1000,
      conceptToBuyer: 500,
      potBuyerOutreach: 1000,
      internalSearch: 2500,
    }, // Total: 5000
  ];

  // Deal phase data based on the image
  const dealPhases = [
    {
      title: "Total Duration",
      subtitle: "Deals 1E Contr.Phase",
      goalValue: "7 Days",
      nowValue: "27 Days",
      barColor: "#F5A345", // Orange
      goalColor: "#F5A345",
      nowColor: "#F5A345",
      barHeight: "130px", // 65% of 200px
    },
    {
      title: "Internal Research",
      goalValue: "7 Days",
      nowValue: "7 Days",
      barColor: "#18D359", // Green
      goalColor: "#18D359",
      nowColor: "#18D359",
      barHeight: "70px", // 35% of 200px
    },
    {
      title: "Pot. Buyer Outreach",
      goalValue: "7 Days",
      nowValue: "7 Days",
      barColor: "#F5A345", // Orange
      goalColor: "#F5A345",
      nowColor: "#F5A345",
      barHeight: "90px", // 45% of 200px
    },
    {
      title: "Concept to Buyer",
      goalValue: "7 Days",
      nowValue: "7 Days",
      barColor: "#FF4444", // Red
      goalColor: "#FF4444",
      nowColor: "#FF4444",
      barHeight: "110px", // 55% of 200px
    },
    {
      title: "Signed Purchase Agreement",
      goalValue: "7 Days",
      nowValue: "7 Days",
      barColor: "#18D359", // Green
      goalColor: "#18D359",
      nowColor: "#18D359",
      barHeight: "170px", // 85% of 200px
    },
  ];

  return (
    <div className=" ">
      {/* Main Title */}
      <div className="mb-6">
        <h1 className="text-white text-2xl lg:text-3xl font-bold tracking-wide">
          2e CONTRACTPHASE DURATION CONSECUTIVE STEPS
        </h1>
      </div>

      <div className="flex flex-col xl:flex-row ">
        {/* Left Section - Area Chart */}
        <div className="flex-1 min-w-0">
          <div className="rounded-2xl  h-[400px] w-full xl:w-[500px]">
            {/* Stacked Area Chart */}
            <div className="h-65 bg-[#181C3A] rounded-lg p-4">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart
                  data={chartData}
                  margin={{ top: 5, right: 0, left: 0, bottom: 0 }}
                >
                  <defs>
                    <linearGradient
                      id="internalSearch"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#18D359" stopOpacity={0.8} />
                      <stop
                        offset="95%"
                        stopColor="#18D359"
                        stopOpacity={0.1}
                      />
                    </linearGradient>
                    <linearGradient
                      id="potBuyerOutreach"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8} />
                      <stop
                        offset="95%"
                        stopColor="#3B82F6"
                        stopOpacity={0.1}
                      />
                    </linearGradient>
                    <linearGradient
                      id="conceptToBuyer"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.8} />
                      <stop
                        offset="95%"
                        stopColor="#06B6D4"
                        stopOpacity={0.1}
                      />
                    </linearGradient>
                    <linearGradient
                      id="signedPurchaseAgreement"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="5%" stopColor="#EC4899" stopOpacity={0.8} />
                      <stop
                        offset="95%"
                        stopColor="#EC4899"
                        stopOpacity={0.1}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis
                    dataKey="month"
                    stroke="#9CA3AF"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                  />
                  <YAxis
                    stroke="#9CA3AF"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    domain={[0, 12500]}
                    ticks={[0, 2500, 5000, 7500, 10000, 12500]}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1F2937",
                      border: "1px solid #374151",
                      borderRadius: "8px",
                      color: "#F9FAFB",
                    }}
                  />
                  <Legend
                    wrapperStyle={{ color: "#F9FAFB", fontSize: "12px" }}
                    iconType="rect"
                    verticalAlign="top"
                    align="right"
                    height={36}
                  />
                  <Area
                    type="monotone"
                    dataKey="signedPurchaseAgreement"
                    stackId="1"
                    stroke="#EC4899"
                    fill="url(#signedPurchaseAgreement)"
                    name="Signed Purchase Agreement"
                  />
                  <Area
                    type="monotone"
                    dataKey="conceptToBuyer"
                    stackId="1"
                    stroke="#06B6D4"
                    fill="url(#conceptToBuyer)"
                    name="Concept To Buyer"
                  />
                  <Area
                    type="monotone"
                    dataKey="potBuyerOutreach"
                    stackId="1"
                    stroke="#3B82F6"
                    fill="url(#potBuyerOutreach)"
                    name="POT. Buyer Outreach"
                  />
                  <Area
                    type="monotone"
                    dataKey="internalSearch"
                    stackId="1"
                    stroke="#18D359"
                    fill="url(#internalSearch)"
                    name="Internal Search"
                  />
                </AreaChart>
              </ResponsiveContainer>
              {/* Bottom Section - Total Duration Summary */}
              <div className=" flex justify-start mt-5">
                <div className=" rounded-2xl  w-fit">
                  <h2 className="text-white text-xl font-bold mb-4">
                    Total Duration Deal 1E Contr. Phase
                  </h2>

                  <div className="flex gap-4">
                    <div
                      className="rounded-full px-10 -py-2 text-center"
                      style={{ backgroundColor: "#3B82F6" }} // Blue
                    >
                      <div className="text-white text-lg font-bold">
                        Goal: 45 Days
                      </div>
                    </div>

                    <div
                      className="rounded-full px-10 -py-2 text-center"
                      style={{ backgroundColor: "#FF4444" }} // Red
                    >
                      <div className="text-white text-lg font-bold">
                        Now: 65.6 Days
                      </div>
                      <div className="text-white text-sm flex items-center justify-center gap-1">
                        <span>+2%</span>
                        <span>↗</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Deal Phase Pillars */}
        <div className=" ml-5 mt-20 lg:mt-0">
          <div className="flex gap-4">
            {dealPhases.map((phase, index) => (
              <div
                key={index}
                className="flex flex-col w-[50px] pt-2 pt-3 bg-[#181C3A] "
              >
                <div className="text-[10px] text-gray-300 text-center leading-snug min-h-[28px]">
                  {phase.title}
                  {phase.subtitle && (
                    <div className="text-[8px] text-gray-400 mt-1">
                      {phase.subtitle}
                    </div>
                  )}
                </div>
                <div className="mt-2">
                  <div
                    className="w-full rounded-md bg-white border px-2 py-1 text-center"
                    style={{ borderColor: phase.nowColor }}
                  >
                    <div className="text-[9px] text-black">Goals</div>
                    <div className="text-[9px] text-black font-bold">
                      {phase.goalValue}
                    </div>
                  </div>
                </div>
                <div className="mt-2">
                  <div
                    className="w-full rounded-md px-2 py-1 text-center"
                    style={{ background: phase.nowColor }}
                  >
                    <div className="text-[9px] text-white font-semibold">
                      Now
                    </div>
                    <div className="text-[9px] text-white font-bold">
                      {phase.nowValue}
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex-1 flex items-end justify-center">
                  <div className="w-[80px] h-[200px] rounded-lg bg-[#D9D9D93D] relative overflow-hidden">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute left-3 z-20"
                        style={{ bottom: 10 + i * 22 }}
                      >
                        <div
                          className={`h-[2px] ${
                            i === 4 ? "w-6" : "w-3"
                          } rounded bg-white/80`}
                        />
                      </div>
                    ))}
                    <div className="absolute left-0 right-0 bottom-0 z-10">
                      <div
                        className="w-full rounded-md"
                        style={{
                          height: phase.barHeight,
                          background: phase.barColor,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DurationQuarter;
