import React, { useEffect } from "react";
import { Radar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from "chart.js";

// Register ChartJS components
ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip);

const skillData = [
  { category: "Frontend", overall: 78 },
  { category: "Backend", overall: 40 },
  { category: "Programming Fundamentals", overall: 68 },
  { category: "UI/UX & Designing", overall: 80 },
  { category: "DevOps & Tools", overall: 55 },
];

// Load Lato font
const loadLatoFont = () => {
  const link = document.createElement("link");
  link.href =
    "https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap";
  link.rel = "stylesheet";
  document.head.appendChild(link);
};

const RadarChartComponent = ({ data = skillData, showGrid = true }) => {
  useEffect(() => {
    loadLatoFont();
  }, []);

  const chartData = {
    labels: data.map((item) => item.category),
    datasets: [
      {
        data: data.map((item) => item.overall),
        backgroundColor: "rgba(45, 212, 191, 0.2)",
        borderColor: "rgba(45, 212, 191, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(45, 212, 191, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(45, 212, 191, 1)",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // allow container to control size
    scales: {
      r: {
        angleLines: {
          display: showGrid,
          color: "rgba(200, 200, 200, 0.3)",
        },
        grid: {
          circular: true,
          color: "rgba(200, 200, 200, 0.3)",
        },
        suggestedMin: 0,
        suggestedMax: 100,
        ticks: {
          stepSize: 20,
          backdropColor: "transparent",
          color: "#666",
          font: {
            family: "'Lato', sans-serif",
            size: 10, // smaller font for mobile
            weight: 400,
          },
          callback: (value) => value + "%",
        },
        pointLabels: {
          color: "#333",
          font: {
            family: "'Lato', sans-serif",
            size: 10, // smaller font for mobile
            weight: 700,
          },
          padding: 10,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    elements: {
      line: {
        tension: 0.1,
      },
    },
  };

  return (
    <div className="w-full max-w-full h-80 sm:h-96 md:h-[350px] lg:h-[400px] relative">
      <Radar data={chartData} options={options} />
    </div>
  );
};

export default RadarChartComponent;
