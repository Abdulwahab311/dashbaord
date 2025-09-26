import React from "react";
import { PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

// Register Chart.js components
ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const DATA_COUNT = 12;

// Utility functions
const Utils = {
  numbers: ({ count, min, max }) => {
    return Array.from({ length: count }, () =>
      Math.floor(Math.random() * (max - min + 1)) + min
    );
  },
  months: ({ count }) => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return months.slice(0, count);
  },
  transparentize: (color, opacity) => {
    const alpha = 1 - opacity;
    return color + Math.floor(alpha * 255).toString(16).padStart(2, '0');
  }
};

function generateData() {
  return Utils.numbers({ count: DATA_COUNT, min: 0, max: 100 });
}

function colorize(opaque, hover, ctx) {
  const v = ctx.raw;
  const c = v < 35 ? '#D60000'
    : v < 55 ? '#F46300'
    : v < 75 ? '#0358B6'
    : '#44DE28';

  const opacity = hover ? 1 - Math.abs(v / 150) - 0.2 : 1 - Math.abs(v / 150);
  return opaque ? c : Utils.transparentize(c, opacity);
}

function hoverColorize(ctx) {
  return colorize(false, true, ctx);
}

const PolarAreaChart = () => {
  const data = {
    labels: Utils.months({ count: DATA_COUNT }),
    datasets: [
      {
        data: generateData(),
        backgroundColor: colorize.bind(null, false, false),
        hoverBackgroundColor: hoverColorize
      }
    ]
  };

  const options = {
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
    elements: {
      arc: {
        backgroundColor: colorize.bind(null, false, false),
        hoverBackgroundColor: hoverColorize
      }
    }
  };

  return <PolarArea data={data} options={options} />;
};

export default PolarAreaChart;
