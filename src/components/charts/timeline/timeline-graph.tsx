"use client";

import type { ApexOptions } from "apexcharts";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const Chart = dynamic(() => import("react-apexcharts"));

const series = [
  {
    name: "Net Worth",
    data: [
      [new Date("2023-01-01").getTime(), 10000],
      [new Date("2023-02-01").getTime(), 12000],
      [new Date("2023-03-01").getTime(), 15000],
      [new Date("2023-04-01").getTime(), 14000],
      [new Date("2023-05-01").getTime(), 16000],
      [new Date("2023-06-01").getTime(), 18000],
      [new Date("2023-07-01").getTime(), 20000],
      [new Date("2023-08-01").getTime(), 22000],
      [new Date("2023-09-01").getTime(), 21000],
      [new Date("2023-10-01").getTime(), 23000],
      [new Date("2023-11-01").getTime(), 25000],
      [new Date("2023-12-01").getTime(), 28000],
    ],
  },
  {
    name: "Cash",
    data: [
      [new Date("2023-01-01").getTime(), 15000],
      [new Date("2023-02-01").getTime(), 16000],
      [new Date("2023-03-01").getTime(), 17000],
      [new Date("2023-04-01").getTime(), 18000],
      [new Date("2023-05-01").getTime(), 19000],
      [new Date("2023-06-01").getTime(), 20000],
      [new Date("2023-07-01").getTime(), 21000],
      [new Date("2023-08-01").getTime(), 22000],
      [new Date("2023-09-01").getTime(), 23000],
      [new Date("2023-10-01").getTime(), 24000],
      [new Date("2023-11-01").getTime(), 25000],
      [new Date("2023-12-01").getTime(), 26000],
    ],
  },
  {
    name: "Debt",
    data: [
      [new Date("2023-01-01").getTime(), 5000],
      [new Date("2023-02-01").getTime(), 4000],
      [new Date("2023-03-01").getTime(), 2000],
      [new Date("2023-04-01").getTime(), 4000],
      [new Date("2023-05-01").getTime(), 3000],
      [new Date("2023-06-01").getTime(), 2000],
      [new Date("2023-07-01").getTime(), 1000],
      [new Date("2023-08-01").getTime(), 0],
      [new Date("2023-09-01").getTime(), 2000],
      [new Date("2023-10-01").getTime(), 1000],
      [new Date("2023-11-01").getTime(), 0],
      [new Date("2023-12-01").getTime(), -2000], // Negative for illustration
    ],
  },
];

export default function ChartsPage() {
  const { theme } = useTheme(); // Get current theme ('light', 'dark', or 'system'—resolves to one)
  const [mounted, setMounted] = useState(false); // Handle initial mount for theme

  useEffect(() => {
    setMounted(true);
  }, []);

  const options: ApexOptions = {
    chart: {
      id: "area-datetime",
      type: "area",
      height: 400,
      background: "transparent",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    xaxis: {
      type: "datetime",
      labels: {
        datetimeFormatter: {
          year: "yyyy",
          month: "MMM 'yy",
          day: "dd MMM",
          hour: "HH:mm",
        },
      },
    },
    theme: {
      mode: mounted && theme === "dark" ? "dark" : "light",
    },
    yaxis: {
      title: {
        text: "Amount ($)",
      },
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy",
      },
    },
    legend: {
      position: "top",
    },
    grid: {
      show: true,
      borderColor:
        theme === "dark" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
      strokeDashArray: 3,
      row: {
        opacity: 0,
      },
      column: {
        opacity: 0,
      },
    },
  };

  if (!mounted) {
    return null; // Or a loading state; prevents mismatch on initial render
  }

  return (
    <div className="container mx-auto p-4">
      <Chart options={options} series={series} type="line" height={400} />
    </div>
  );
}
