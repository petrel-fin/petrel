"use client";

import { Area, AreaChart, CartesianGrid } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "~/components/ui/chart";

export const description = "An area chart with gradient fill";

const chartData = [
  { month: "January", desktop: 0, mobile: 180 },
  { month: "February", desktop: 10, mobile: 170 },
  { month: "March", desktop: 20, mobile: 150 },
  { month: "April", desktop: 35, mobile: 110 },
  { month: "May", desktop: 80, mobile: 50 },
  { month: "June", desktop: 200, mobile: 0 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export default function LargePossessionCardGraph() {
  return (
    <ChartContainer config={chartConfig} className="-m-1 h-[50px]" height={50}>
      <AreaChart
        accessibilityLayer
        data={chartData}
        // margin={{
        //   left: 12,
        //   right: 12,
        // }}
      >
        <CartesianGrid vertical={false} />
        {/* <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        /> */}
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <defs>
          <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-desktop)"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="var(--color-desktop)"
              stopOpacity={0.1}
            />
          </linearGradient>
          <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-mobile)"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="var(--color-mobile)"
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>
        <Area
          dataKey="mobile"
          type="natural"
          fill="url(#fillMobile)"
          fillOpacity={0.4}
          stroke="var(--color-mobile)"
          // stackId="a"
        />
        <Area
          dataKey="desktop"
          type="natural"
          fill="url(#fillDesktop)"
          fillOpacity={0.4}
          stroke="var(--color-desktop)"
          // stackId="a"
        />
      </AreaChart>
    </ChartContainer>
  );
}
