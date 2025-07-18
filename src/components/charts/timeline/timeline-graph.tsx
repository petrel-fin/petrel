"use client";

import * as React from "react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

export const description = "An interactive area chart";

const chartData = [
  { date: "2024-04-01", desktop: 120, mobile: 100 },
  { date: "2024-04-02", desktop: 125, mobile: 105 },
  { date: "2024-04-03", desktop: 130, mobile: 110 },
  { date: "2024-04-04", desktop: 130, mobile: 110 }, // Flat period (1/5)
  { date: "2024-04-05", desktop: 130, mobile: 110 }, // Flat period (2/5)
  { date: "2024-04-06", desktop: 130, mobile: 110 }, // Flat period (3/5)
  { date: "2024-04-07", desktop: 130, mobile: 110 }, // Flat period (4/5)
  { date: "2024-04-08", desktop: 130, mobile: 110 }, // Flat period (5/5)
  { date: "2024-04-09", desktop: 110, mobile: 90 }, // Dip (1/3, ~15%)
  { date: "2024-04-10", desktop: 105, mobile: 85 }, // Dip (2/3)
  { date: "2024-04-11", desktop: 110, mobile: 90 }, // Dip (3/3)
  { date: "2024-04-12", desktop: 120, mobile: 100 },
  { date: "2024-04-13", desktop: 130, mobile: 110 },
  { date: "2024-04-14", desktop: 140, mobile: 120 },
  { date: "2024-04-15", desktop: 150, mobile: 130 },
  { date: "2024-04-16", desktop: 150, mobile: 130 }, // Flat period (1/4)
  { date: "2024-04-17", desktop: 150, mobile: 130 }, // Flat period (2/4)
  { date: "2024-04-18", desktop: 150, mobile: 130 }, // Flat period (3/4)
  { date: "2024-04-19", desktop: 150, mobile: 130 }, // Flat period (4/4)
  { date: "2024-04-20", desktop: 160, mobile: 140 },
  { date: "2024-04-21", desktop: 170, mobile: 150 },
  { date: "2024-04-22", desktop: 180, mobile: 160 },
  { date: "2024-04-23", desktop: 180, mobile: 160 }, // Flat period (1/5)
  { date: "2024-04-24", desktop: 180, mobile: 160 }, // Flat period (2/5)
  { date: "2024-04-25", desktop: 180, mobile: 160 }, // Flat period (3/5)
  { date: "2024-04-26", desktop: 180, mobile: 160 }, // Flat period (4/5)
  { date: "2024-04-27", desktop: 180, mobile: 160 }, // Flat period (5/5)
  { date: "2024-04-28", desktop: 150, mobile: 130 }, // Dip (1/3, ~17%)
  { date: "2024-04-29", desktop: 145, mobile: 125 }, // Dip (2/3)
  { date: "2024-04-30", desktop: 150, mobile: 130 }, // Dip (3/3)
  { date: "2024-05-01", desktop: 160, mobile: 140 },
  { date: "2024-05-02", desktop: 170, mobile: 150 },
  { date: "2024-05-03", desktop: 180, mobile: 160 },
  { date: "2024-05-04", desktop: 190, mobile: 170 },
  { date: "2024-05-05", desktop: 200, mobile: 180 },
  { date: "2024-05-06", desktop: 200, mobile: 180 }, // Flat period (1/4)
  { date: "2024-05-07", desktop: 200, mobile: 180 }, // Flat period (2/4)
  { date: "2024-05-08", desktop: 200, mobile: 180 }, // Flat period (3/4)
  { date: "2024-05-09", desktop: 200, mobile: 180 }, // Flat period (4/4)
  { date: "2024-05-10", desktop: 210, mobile: 190 },
  { date: "2024-05-11", desktop: 220, mobile: 200 },
  { date: "2024-05-12", desktop: 230, mobile: 210 },
  { date: "2024-05-13", desktop: 230, mobile: 210 }, // Flat period (1/5)
  { date: "2024-05-14", desktop: 230, mobile: 210 }, // Flat period (2/5)
  { date: "2024-05-15", desktop: 230, mobile: 210 }, // Flat period (3/5)
  { date: "2024-05-16", desktop: 230, mobile: 210 }, // Flat period (4/5)
  { date: "2024-05-17", desktop: 230, mobile: 210 }, // Flat period (5/5)
  { date: "2024-05-18", desktop: 190, mobile: 170 }, // Dip (1/3, ~17%)
  { date: "2024-05-19", desktop: 185, mobile: 165 }, // Dip (2/3)
  { date: "2024-05-20", desktop: 190, mobile: 170 }, // Dip (3/3)
  { date: "2024-05-21", desktop: 200, mobile: 180 },
  { date: "2024-05-22", desktop: 210, mobile: 190 },
  { date: "2024-05-23", desktop: 220, mobile: 200 },
  { date: "2024-05-24", desktop: 230, mobile: 210 },
  { date: "2024-05-25", desktop: 240, mobile: 220 },
  { date: "2024-05-26", desktop: 240, mobile: 220 }, // Flat period (1/4)
  { date: "2024-05-27", desktop: 240, mobile: 220 }, // Flat period (2/4)
  { date: "2024-05-28", desktop: 240, mobile: 220 }, // Flat period (3/4)
  { date: "2024-05-29", desktop: 240, mobile: 220 }, // Flat period (4/4)
  { date: "2024-05-30", desktop: 250, mobile: 230 },
  { date: "2024-05-31", desktop: 260, mobile: 240 },
  { date: "2024-06-01", desktop: 270, mobile: 250 },
  { date: "2024-06-02", desktop: 280, mobile: 260 },
  { date: "2024-06-03", desktop: 280, mobile: 260 }, // Flat period (1/6)
  { date: "2024-06-04", desktop: 280, mobile: 260 }, // Flat period (2/6)
  { date: "2024-06-05", desktop: 280, mobile: 260 }, // Flat period (3/6)
  { date: "2024-06-06", desktop: 280, mobile: 260 }, // Flat period (4/6)
  { date: "2024-06-07", desktop: 280, mobile: 260 }, // Flat period (5/6)
  { date: "2024-06-08", desktop: 280, mobile: 260 }, // Flat period (6/6)
  { date: "2024-06-09", desktop: 230, mobile: 210 }, // Dip (1/3, ~18%)
  { date: "2024-06-10", desktop: 225, mobile: 205 }, // Dip (2/3)
  { date: "2024-06-11", desktop: 230, mobile: 210 }, // Dip (3/3)
  { date: "2024-06-12", desktop: 240, mobile: 220 },
  { date: "2024-06-13", desktop: 250, mobile: 230 },
  { date: "2024-06-14", desktop: 260, mobile: 240 },
  { date: "2024-06-15", desktop: 270, mobile: 250 },
  { date: "2024-06-16", desktop: 280, mobile: 260 },
  { date: "2024-06-17", desktop: 290, mobile: 270 },
  { date: "2024-06-18", desktop: 300, mobile: 280 },
  { date: "2024-06-19", desktop: 300, mobile: 280 }, // Flat period (1/5)
  { date: "2024-06-20", desktop: 300, mobile: 280 }, // Flat period (2/5)
  { date: "2024-06-21", desktop: 300, mobile: 280 }, // Flat period (3/5)
  { date: "2024-06-22", desktop: 300, mobile: 280 }, // Flat period (4/5)
  { date: "2024-06-23", desktop: 300, mobile: 280 }, // Flat period (5/5)
  { date: "2024-06-24", desktop: 250, mobile: 230 }, // Dip (1/2, ~17%)
  { date: "2024-06-25", desktop: 245, mobile: 225 }, // Dip (2/2)
  { date: "2024-06-26", desktop: 260, mobile: 240 },
  { date: "2024-06-27", desktop: 270, mobile: 250 },
  { date: "2024-06-28", desktop: 280, mobile: 260 },
  { date: "2024-06-29", desktop: 290, mobile: 270 },
  { date: "2024-06-30", desktop: 300, mobile: 280 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export default function TimelineGraph() {
  const [timeRange, setTimeRange] = React.useState("90d");

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return (
    <Card className="pt-0">
      <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
        <div className="grid flex-1 gap-1">
          <CardTitle>Timeline</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </div>
        <Select value={timeRange} onValueChange={setTimeRange}>
          <SelectTrigger
            className="hidden w-[160px] rounded-lg sm:ml-auto sm:flex"
            aria-label="Select a value"
          >
            <SelectValue placeholder="Last 3 months" />
          </SelectTrigger>
          <SelectContent className="rounded-xl">
            <SelectItem value="90d" className="rounded-lg">
              Last 3 months
            </SelectItem>
            <SelectItem value="30d" className="rounded-lg">
              Last 30 days
            </SelectItem>
            <SelectItem value="7d" className="rounded-lg">
              Last 7 days
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <AreaChart data={filteredData}>
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
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    });
                  }}
                  indicator="dot"
                />
              }
            />
            <Area
              dataKey="mobile"
              type="natural"
              fill="url(#fillMobile)"
              stroke="var(--color-mobile)"
              stackId="a"
            />
            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#fillDesktop)"
              stroke="var(--color-desktop)"
              stackId="a"
            />
            <ChartLegend content={<ChartLegendContent />} />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
