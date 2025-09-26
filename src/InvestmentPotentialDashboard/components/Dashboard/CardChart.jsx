import React, { useEffect, useRef } from "react";
import { Chart, LineController, LineElement, PointElement, LinearScale, CategoryScale, Filler } from "chart.js";

// Register Chart.js components
Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Filler);

const SalesChart = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  // Function to randomly adjust Y-values to create uneven zigzag
  const createJaggedData = (data) => {
    return data.map((value) => value + (Math.random() * 40 - 20)); // +/- 20 variance
  };

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    if (chartInstance.current) chartInstance.current.destroy();

    const borderGradient = ctx.createLinearGradient(0, 0, ctx.canvas.width, 0);
    borderGradient.addColorStop(0, "#00D394");
    borderGradient.addColorStop(1, "#9e9e9eff");

    const fillGradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
    fillGradient.addColorStop(0, "#949494ff");
    fillGradient.addColorStop(1, "rgba(254, 253, 255, 0)");

    chartInstance.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [
          {
            label: "Sales",
            data: createJaggedData(data),
            borderColor: borderGradient,
            backgroundColor: fillGradient,
            tension: 0, // sharp zigzag
            fill: true,
            pointRadius: 0,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          y: { display: false },
          x: {
            grid: { display: false },
            ticks: { display: false }, // ✅ hide month labels
          },
        },
      },
    });

    return () => {
      chartInstance.current?.destroy();
      chartInstance.current = null;
    };
  }, [data]);

  return (
    <div className="relative w-full h-12">
      <canvas ref={chartRef}></canvas>
      <div className="absolute  right-1 w-2 h-2 bg-green-500 rounded-full shadow-md"></div>
    </div>
  );
};

export default SalesChart;
