// "use client";

// import { Area, AreaChart, CartesianGrid } from "recharts";

// import {
//   ChartContainer,
//   ChartTooltip,
//   ChartTooltipContent,
//   type ChartConfig,
// } from "~/components/ui/chart";

// export const description = "An area chart with gradient fill";

// const chartData = [
//   { month: "January", desktop: 0, mobile: 180 },
//   { month: "February", desktop: 10, mobile: 170 },
//   { month: "March", desktop: 20, mobile: 150 },
//   { month: "April", desktop: 35, mobile: 110 },
//   { month: "May", desktop: 80, mobile: 50 },
//   { month: "June", desktop: 200, mobile: 0 },
// ];

// const chartConfig = {
//   desktop: {
//     label: "Desktop",
//     color: "var(--chart-1)",
//   },
//   mobile: {
//     label: "Mobile",
//     color: "var(--chart-2)",
//   },
// } satisfies ChartConfig;

// export default function LargePossessionCardGraph() {
//   return (
//     <ChartContainer config={chartConfig} className="-m-1 h-[50px]" height={50}>
//       <AreaChart accessibilityLayer data={chartData}>
//         {/* <CartesianGrid vertical={false} /> */}
//         <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
//         <defs>
//           <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
//             <stop
//               offset="5%"
//               stopColor="var(--color-desktop)"
//               stopOpacity={0.8}
//             />
//             <stop
//               offset="95%"
//               stopColor="var(--color-desktop)"
//               stopOpacity={0.1}
//             />
//           </linearGradient>
//           <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
//             <stop
//               offset="5%"
//               stopColor="var(--color-mobile)"
//               stopOpacity={0.8}
//             />
//             <stop
//               offset="95%"
//               stopColor="var(--color-mobile)"
//               stopOpacity={0.1}
//             />
//           </linearGradient>
//         </defs>
//         <Area
//           dataKey="mobile"
//           type="natural"
//           fill="url(#fillMobile)"
//           fillOpacity={0.4}
//           stroke="var(--color-mobile)"
//         />
//         <Area
//           dataKey="desktop"
//           type="natural"
//           fill="url(#fillDesktop)"
//           fillOpacity={0.4}
//           stroke="var(--color-desktop)"
//         />
//       </AreaChart>
//     </ChartContainer>
//   );
// }

"use client";

import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "~/components/ui/chart";

export const description = "A multiple line chart";

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
    color: "var(--foreground)",
  },
  mobile: {
    label: "Mobile",
    color: "gray",
  },
} satisfies ChartConfig;

export default function LargePossessionCardGraph() {
  return (
    <ChartContainer config={chartConfig} className="-m-1 h-[50px]" height={50}>
      <LineChart accessibilityLayer data={chartData}>
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
          strokeWidth={1}
          dot={false}
          strokeDasharray="3 3"
        />
      </LineChart>
    </ChartContainer>
  );
}
