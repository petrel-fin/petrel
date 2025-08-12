"use client"; // required if using Next’s app directory

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });
import { useState, useEffect } from "react";

export default function Treemap() {
  const [data, setData] = useState<{ x: string; y: number }[]>([]);
  const [options, setOptions] = useState<any>(null);
  const [series, setSeries] = useState<any[]>([]);

  useEffect(() => {
    // 2. Generate fake data
    const categories = [
      "Apples",
      "Bananas",
      "Cherries",
      "Dates",
      "Elderberries",
      "Figs",
      "Grapes",
      "Honeydew",
    ];
    const fakeData = categories.map((c) => ({
      x: c,
      y: Math.floor(Math.random() * 100) + 1,
    }));
    setData(fakeData);

    // 3. Set up options & series
    setOptions({
      chart: {
        type: "treemap",
        height: 350,
        toolbar: { tools: { download: false } },
      },
      colors: [
        "#222222", // light gray
        "#222222",
        "#222222",
        "#222222",
        "#222222",
        "#222222",
        "#222222",
        "#222222", // dark gray
      ],
      plotOptions: {
        treemap: {
          enableShades: true,
          shadeIntensity: 0.7,
          distributed: true,
        },
      },
      stroke: {
        width: 0.5,
      },
      tooltip: { y: { formatter: (val: number) => `${val} units` } },
    });
    setSeries([{ data: fakeData }]);
  }, []);

  if (!options) return null;

  return <Chart options={options} series={series} type="treemap" />;
}
