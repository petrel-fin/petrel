"use client";

import { Line, LineChart } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "~/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "~/components/ui/chart";
import { Button } from "~/components/ui/button";
import { EllipsisVertical } from "lucide-react";

export const description = "A line chart";

const chartData = [
  { month: "January", desktop: 186 },
  { month: "February", desktop: 305 },
  { month: "March", desktop: 237 },
  { month: "April", desktop: 73 },
  { month: "May", desktop: 209 },
  { month: "June", desktop: 214 },
];
const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

interface HoldingCardProps {
  title: string;
  description?: string;
}

export default function HoldingCard({ title, description }: HoldingCardProps) {
  return (
    <Card className="min-w-[300px]">
      <CardHeader className="p-2">
        <div className="flex justify-between">
          <div className="mx-2 my-1 flex flex-col">
            <h4 className="text-xl font-semibold tracking-tight">{title}</h4>
            <CardDescription className="text-muted-foreground text-sm">
              {description}
            </CardDescription>
          </div>
          <Button variant="ghost" size="icon">
            <EllipsisVertical />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex w-full px-6 pb-2">
          <div className="mx-2 my-1 flex w-full flex-col">
            <p className="text-muted-foreground text-sm">Growth</p>
            <h4 className="text-xl font-semibold tracking-tight">10.4%</h4>
          </div>
          <div className="mx-2 my-1 flex w-full flex-col">
            <p className="text-muted-foreground text-sm">Balance</p>
            <h4 className="text-xl font-semibold tracking-tight">$4,242.13</h4>
          </div>
        </div>

        <ChartContainer config={chartConfig} className="h-[50px]">
          <LineChart accessibilityLayer data={chartData}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="desktop"
              type="natural"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
