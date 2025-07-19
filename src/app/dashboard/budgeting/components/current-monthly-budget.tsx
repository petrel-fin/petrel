"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "~/components/ui/chart";

export const description = "A multiple line chart";

const chartData = [
  { month: "January", desktop: 0, mobile: 0 },
  { month: "February", desktop: 7, mobile: 10 },
  { month: "March", desktop: 29, mobile: 20 },
  { month: "April", desktop: 30, mobile: 30 },
  { month: "May", desktop: 33, mobile: 40 },
  { month: "June", desktop: 60, mobile: 50 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "gray",
  },
} satisfies ChartConfig;

export default function CurrentMonthlyBudget() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Monthly Budget</CardTitle>
        <CardDescription>Amount spent vs spending goal</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="desktop"
              type="monotone"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="mobile"
              type="monotone"
              stroke="var(--color-mobile)"
              strokeWidth={2}
              dot={false}
              strokeDasharray="3 3"
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
