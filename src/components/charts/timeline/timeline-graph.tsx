"use client";

import { CartesianGrid, Line, LineChart } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "~/components/ui/chart";

const chartData = [
  {
    date: "2024-04-01",
    cash: 3057,
    debt: 1980,
    netWorth: 35588,
    investment: 34511,
  },
  {
    date: "2024-04-02",
    cash: 3103,
    debt: 1965,
    netWorth: 36073,
    investment: 34935,
  },
  {
    date: "2024-04-03",
    cash: 3118,
    debt: 1922,
    netWorth: 36424,
    investment: 35228,
  },
  {
    date: "2024-04-04",
    cash: 3204,
    debt: 1882,
    netWorth: 37117,
    investment: 35795,
  },
  {
    date: "2024-04-05",
    cash: 3323,
    debt: 1862,
    netWorth: 37739,
    investment: 36278,
  },
  {
    date: "2024-04-06",
    cash: 3417,
    debt: 1833,
    netWorth: 38040,
    investment: 36456,
  },
  {
    date: "2024-04-07",
    cash: 3439,
    debt: 1818,
    netWorth: 38495,
    investment: 36874,
  },
  {
    date: "2024-04-08",
    cash: 3480,
    debt: 1786,
    netWorth: 38583,
    investment: 36889,
  },
  {
    date: "2024-04-09",
    cash: 3503,
    debt: 1758,
    netWorth: 38918,
    investment: 37173,
  },
  {
    date: "2024-04-10",
    cash: 3581,
    debt: 1729,
    netWorth: 39515,
    investment: 37663,
  },
  {
    date: "2024-04-11",
    cash: 3615,
    debt: 1702,
    netWorth: 40128,
    investment: 38215,
  },
  {
    date: "2024-04-12",
    cash: 3658,
    debt: 1695,
    netWorth: 40658,
    investment: 38695,
  },
  {
    date: "2024-04-13",
    cash: 3672,
    debt: 1664,
    netWorth: 40891,
    investment: 38883,
  },
  {
    date: "2024-04-14",
    cash: 3686,
    debt: 1656,
    netWorth: 41422,
    investment: 39392,
  },
  {
    date: "2024-04-15",
    cash: 3736,
    debt: 1640,
    netWorth: 41856,
    investment: 39760,
  },
  {
    date: "2024-04-16",
    cash: 3816,
    debt: 1605,
    netWorth: 42203,
    investment: 39992,
  },
  {
    date: "2024-04-17",
    cash: 3824,
    debt: 1575,
    netWorth: 42589,
    investment: 40340,
  },
  {
    date: "2024-04-18",
    cash: 3869,
    debt: 1547,
    netWorth: 42877,
    investment: 40555,
  },
  {
    date: "2024-04-19",
    cash: 3913,
    debt: 1531,
    netWorth: 43176,
    investment: 40794,
  },
  {
    date: "2024-04-20",
    cash: 3945,
    debt: 1526,
    netWorth: 43372,
    investment: 40953,
  },
  {
    date: "2024-04-21",
    cash: 3978,
    debt: 1483,
    netWorth: 43740,
    investment: 41245,
  },
  {
    date: "2024-04-22",
    cash: 4047,
    debt: 1470,
    netWorth: 44103,
    investment: 41526,
  },
  {
    date: "2024-04-23",
    cash: 4134,
    debt: 1448,
    netWorth: 44627,
    investment: 41941,
  },
  {
    date: "2024-04-24",
    cash: 4155,
    debt: 1425,
    netWorth: 44921,
    investment: 42191,
  },
  {
    date: "2024-04-25",
    cash: 4207,
    debt: 1393,
    netWorth: 45316,
    investment: 42502,
  },
  {
    date: "2024-04-26",
    cash: 4252,
    debt: 1386,
    netWorth: 45696,
    investment: 42830,
  },
  {
    date: "2024-04-27",
    cash: 4312,
    debt: 1370,
    netWorth: 46139,
    investment: 43197,
  },
  {
    date: "2024-04-28",
    cash: 4307,
    debt: 1344,
    netWorth: 46407,
    investment: 43444,
  },
  {
    date: "2024-04-29",
    cash: 4372,
    debt: 1325,
    netWorth: 46940,
    investment: 43893,
  },
  {
    date: "2024-04-30",
    cash: 4435,
    debt: 1303,
    netWorth: 47430,
    investment: 44298,
  },
  {
    date: "2024-05-01",
    cash: 4432,
    debt: 1285,
    netWorth: 47893,
    investment: 44746,
  },
  {
    date: "2024-05-02",
    cash: 4443,
    debt: 1274,
    netWorth: 48153,
    investment: 44984,
  },
  {
    date: "2024-05-03",
    cash: 4485,
    debt: 1230,
    netWorth: 48670,
    investment: 45415,
  },
  {
    date: "2024-05-04",
    cash: 4490,
    debt: 1214,
    netWorth: 49140,
    investment: 45864,
  },
  {
    date: "2024-05-05",
    cash: 4550,
    debt: 1192,
    netWorth: 49513,
    investment: 46155,
  },
  {
    date: "2024-05-06",
    cash: 4609,
    debt: 1157,
    netWorth: 49894,
    investment: 46442,
  },
  {
    date: "2024-05-07",
    cash: 4705,
    debt: 1119,
    netWorth: 50190,
    investment: 46604,
  },
  {
    date: "2024-05-08",
    cash: 4781,
    debt: 1098,
    netWorth: 50527,
    investment: 46844,
  },
  {
    date: "2024-05-09",
    cash: 4853,
    debt: 1068,
    netWorth: 50537,
    investment: 46752,
  },
  {
    date: "2024-05-10",
    cash: 4900,
    debt: 1036,
    netWorth: 50612,
    investment: 46748,
  },
  {
    date: "2024-05-11",
    cash: 4983,
    debt: 1007,
    netWorth: 51174,
    investment: 47198,
  },
  {
    date: "2024-05-12",
    cash: 4997,
    debt: 977,
    netWorth: 51630,
    investment: 47610,
  },
  {
    date: "2024-05-13",
    cash: 5033,
    debt: 966,
    netWorth: 52065,
    investment: 47998,
  },
  {
    date: "2024-05-14",
    cash: 5121,
    debt: 943,
    netWorth: 52528,
    investment: 48350,
  },
  {
    date: "2024-05-15",
    cash: 5108,
    debt: 913,
    netWorth: 52845,
    investment: 48650,
  },
  {
    date: "2024-05-16",
    cash: 5151,
    debt: 899,
    netWorth: 53515,
    investment: 49263,
  },
  {
    date: "2024-05-17",
    cash: 5178,
    debt: 877,
    netWorth: 53989,
    investment: 49688,
  },
  {
    date: "2024-05-18",
    cash: 5225,
    debt: 857,
    netWorth: 54481,
    investment: 50113,
  },
  {
    date: "2024-05-19",
    cash: 5231,
    debt: 828,
    netWorth: 55210,
    investment: 50807,
  },
  {
    date: "2024-05-20",
    cash: 5292,
    debt: 812,
    netWorth: 55550,
    investment: 51070,
  },
  {
    date: "2024-05-21",
    cash: 5290,
    debt: 787,
    netWorth: 56231,
    investment: 51728,
  },
  {
    date: "2024-05-22",
    cash: 5305,
    debt: 761,
    netWorth: 56575,
    investment: 52031,
  },
  {
    date: "2024-05-23",
    cash: 5453,
    debt: 719,
    netWorth: 57089,
    investment: 52355,
  },
  {
    date: "2024-05-24",
    cash: 5541,
    debt: 695,
    netWorth: 57309,
    investment: 52463,
  },
  {
    date: "2024-05-25",
    cash: 5620,
    debt: 667,
    netWorth: 57557,
    investment: 52604,
  },
  {
    date: "2024-05-26",
    cash: 5652,
    debt: 641,
    netWorth: 57731,
    investment: 52720,
  },
  {
    date: "2024-05-27",
    cash: 5714,
    debt: 619,
    netWorth: 58104,
    investment: 53009,
  },
  {
    date: "2024-05-28",
    cash: 5720,
    debt: 590,
    netWorth: 58349,
    investment: 53219,
  },
  {
    date: "2024-05-29",
    cash: 5754,
    debt: 563,
    netWorth: 58657,
    investment: 53466,
  },
  {
    date: "2024-05-30",
    cash: 5801,
    debt: 546,
    netWorth: 59027,
    investment: 53772,
  },
  {
    date: "2024-05-31",
    cash: 5849,
    debt: 519,
    netWorth: 59365,
    investment: 54035,
  },
  {
    date: "2024-06-01",
    cash: 5864,
    debt: 507,
    netWorth: 59655,
    investment: 54298,
  },
  {
    date: "2024-06-02",
    cash: 5935,
    debt: 456,
    netWorth: 59985,
    investment: 54506,
  },
  {
    date: "2024-06-03",
    cash: 6021,
    debt: 420,
    netWorth: 60094,
    investment: 54493,
  },
  {
    date: "2024-06-04",
    cash: 6075,
    debt: 381,
    netWorth: 60277,
    investment: 54583,
  },
  {
    date: "2024-06-05",
    cash: 6139,
    debt: 366,
    netWorth: 60872,
    investment: 55099,
  },
  {
    date: "2024-06-06",
    cash: 6201,
    debt: 332,
    netWorth: 61498,
    investment: 55629,
  },
  {
    date: "2024-06-07",
    cash: 6274,
    debt: 309,
    netWorth: 61900,
    investment: 55935,
  },
  {
    date: "2024-06-08",
    cash: 6364,
    debt: 277,
    netWorth: 61991,
    investment: 55904,
  },
  {
    date: "2024-06-09",
    cash: 6418,
    debt: 257,
    netWorth: 61989,
    investment: 55828,
  },
  {
    date: "2024-06-10",
    cash: 6494,
    debt: 233,
    netWorth: 62357,
    investment: 56096,
  },
  {
    date: "2024-06-11",
    cash: 6566,
    debt: 233,
    netWorth: 62414,
    investment: 56081,
  },
  {
    date: "2024-06-12",
    cash: 6631,
    debt: 208,
    netWorth: 62953,
    investment: 56530,
  },
  {
    date: "2024-06-13",
    cash: 6678,
    debt: 192,
    netWorth: 63424,
    investment: 56938,
  },
  {
    date: "2024-06-14",
    cash: 6736,
    debt: 166,
    netWorth: 63918,
    investment: 57348,
  },
  {
    date: "2024-06-15",
    cash: 6801,
    debt: 146,
    netWorth: 64229,
    investment: 57574,
  },
  {
    date: "2024-06-16",
    cash: 6858,
    debt: 128,
    netWorth: 64614,
    investment: 57884,
  },
  {
    date: "2024-06-17",
    cash: 6960,
    debt: 107,
    netWorth: 64912,
    investment: 58059,
  },
  {
    date: "2024-06-18",
    cash: 7012,
    debt: 78,
    netWorth: 65498,
    investment: 58564,
  },
  {
    date: "2024-06-19",
    cash: 7107,
    debt: 54,
    netWorth: 66115,
    investment: 59062,
  },
  {
    date: "2024-06-20",
    cash: 7185,
    debt: 49,
    netWorth: 66539,
    investment: 59403,
  },
  {
    date: "2024-06-21",
    cash: 7270,
    debt: 18,
    netWorth: 66949,
    investment: 59697,
  },
  {
    date: "2024-06-22",
    cash: 7299,
    debt: 0,
    netWorth: 67254,
    investment: 59955,
  },
  {
    date: "2024-06-23",
    cash: 7358,
    debt: 0,
    netWorth: 67688,
    investment: 60330,
  },
  {
    date: "2024-06-24",
    cash: 7361,
    debt: 0,
    netWorth: 68184,
    investment: 60823,
  },
  {
    date: "2024-06-25",
    cash: 7451,
    debt: 0,
    netWorth: 68541,
    investment: 61090,
  },
  {
    date: "2024-06-26",
    cash: 7584,
    debt: 0,
    netWorth: 68817,
    investment: 61233,
  },
  {
    date: "2024-06-27",
    cash: 7663,
    debt: 0,
    netWorth: 69155,
    investment: 61492,
  },
  {
    date: "2024-06-28",
    cash: 7746,
    debt: 0,
    netWorth: 69783,
    investment: 62037,
  },
  {
    date: "2024-06-29",
    cash: 7795,
    debt: 0,
    netWorth: 69975,
    investment: 62180,
  },
  {
    date: "2024-06-30",
    cash: 7833,
    debt: 0,
    netWorth: 70578,
    investment: 62745,
  },
  {
    date: "2024-07-01",
    cash: 7895,
    debt: 0,
    netWorth: 70956,
    investment: 63061,
  },
  {
    date: "2024-07-02",
    cash: 7971,
    debt: 0,
    netWorth: 71416,
    investment: 63445,
  },
  {
    date: "2024-07-03",
    cash: 8021,
    debt: 0,
    netWorth: 71758,
    investment: 63737,
  },
  {
    date: "2024-07-04",
    cash: 8133,
    debt: 0,
    netWorth: 72015,
    investment: 63882,
  },
  {
    date: "2024-07-05",
    cash: 8218,
    debt: 0,
    netWorth: 72398,
    investment: 64180,
  },
  {
    date: "2024-07-06",
    cash: 8258,
    debt: 0,
    netWorth: 72817,
    investment: 64559,
  },
  {
    date: "2024-07-07",
    cash: 8283,
    debt: 0,
    netWorth: 73393,
    investment: 65110,
  },
  {
    date: "2024-07-08",
    cash: 8350,
    debt: 0,
    netWorth: 73968,
    investment: 65618,
  },
  {
    date: "2024-07-09",
    cash: 8389,
    debt: 0,
    netWorth: 74405,
    investment: 66016,
  },
];

const chartConfig = {
  debt: {
    label: "Debt",
    color: "var(--chart-1)",
  },
  cash: {
    label: "Cash",
    color: "var(--chart-2)",
  },
  netWorth: {
    label: "Net Worth",
    color: "var(--chart-3)",
  },
  investment: {
    label: "Investment",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

interface TimelineGraphProps {
  height?: number;
}

export default function TimelineGraph({ height = 200 }: TimelineGraphProps) {
  return (
    <ChartContainer
      config={chartConfig}
      className={`aspect-auto h-[${height}px] w-full`}
    >
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        {/* <CartesianGrid vertical={false} /> */}
        {/* <XAxis
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
        /> */}
        <ChartTooltip
          cursor={false}
          content={
            <ChartTooltipContent
              className="w-[150px]"
              labelFormatter={(value) => {
                return new Date(value).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                });
              }}
            />
          }
        />
        <Line
          dataKey="debt"
          type="bump"
          stroke="var(--color-debt)"
          dot={false}
          strokeWidth={2}
          filter="url(#rainbow-line-glow)"
        />
        <Line
          dataKey="cash"
          type="bump"
          stroke="var(--color-cash)"
          dot={false}
          strokeWidth={2}
          filter="url(#rainbow-line-glow)"
        />
        <Line
          dataKey="netWorth"
          type="bump"
          stroke="var(--color-netWorth)"
          dot={false}
          strokeWidth={2}
          filter="url(#rainbow-line-glow)"
        />
        <Line
          dataKey="investment"
          type="bump"
          stroke="var(--color-investment)"
          dot={false}
          strokeWidth={2}
          filter="url(#rainbow-line-glow)"
        />
        <defs>
          <filter
            id="rainbow-line-glow"
            x="-20%"
            y="-20%"
            width="140%"
            height="140%"
          >
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
      </LineChart>
    </ChartContainer>
  );
}
