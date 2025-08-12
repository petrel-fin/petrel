"use client";

import { useTheme } from "next-themes";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function BudgetBreakdown() {
  const { theme } = useTheme();
  const [options, setOptions] = useState<any>(null);
  const [series, setSeries] = useState<any[]>([]);

  useEffect(() => {
    // 2. Generate fake data
    const categories = [
      "Housing",
      "Transportation",
      "Food",
      "Utilities",
      "Insurance",
      "Savings",
      "Entertainment",
      "Healthcare",
    ];
    const fakeData = categories.map((c) => ({
      x: c,
      y: Math.floor(Math.random() * 100) + 1,
    }));

    setOptions({
      chart: { type: "treemap", height: 350, toolbar: { show: false } },
      colors: [
        "#222222",
        "#222222",
        "#222222",
        "#222222",
        "#222222",
        "#222222",
        "#222222",
        "#222222",
      ],
      stroke: {
        width: 0.5,
      },
      plotOptions: {
        treemap: {
          enableShades: true,
          shadeIntensity: 0.1,
          distributed: true,
        },
      },
      tooltip: {
        theme,
        y: { formatter: (val: number) => `${val} units` },
      },
    });
    setSeries([{ data: fakeData }]);
  }, [theme]);

  if (!options) return null;

  return (
    <Card className="gap-0 pb-1">
      <CardHeader className="pb-0">
        <CardTitle>Budget Breakdown</CardTitle>
        <CardDescription>Size of each category</CardDescription>
      </CardHeader>
      <CardContent className="py-0">
        <Chart
          options={options}
          series={series}
          type="treemap"
          // height={900}
          // width={1150}
        />
      </CardContent>
    </Card>
  );
}
