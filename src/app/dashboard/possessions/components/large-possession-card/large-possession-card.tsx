import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import LargePossessionCardGraph from "./large-possession-card-graph";
import { Separator } from "~/components/ui/separator";
import { Button } from "~/components/ui/button";
import { EllipsisVertical } from "lucide-react";

interface LargePossessionCardProps {
  title?: string;
  value?: string;
  changePercentage?: string;
  monthlyExpenses?: string;
  interestRate?: string;
  equity?: string;
}

export default function LargePossessionCard({
  title,
  value,
  changePercentage,
  monthlyExpenses,
  interestRate,
  equity,
}: LargePossessionCardProps) {
  return (
    <Card className="gap-0 py-1">
      <CardHeader className="px-2 py-0">
        <CardTitle className="text-muted-foreground px-3 pt-3">
          {title}
        </CardTitle>
        <CardAction>
          <Button variant="ghost" size="icon">
            <EllipsisVertical />
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent className="p-0">
        <div className="flex flex-col gap-2">
          <div className="flex items-end gap-4 px-4">
            <h4 className="text-2xl font-semibold">{value}</h4>
            <p className="text-muted-foreground text-md">
              <span className="font-bold text-blue-500">
                {changePercentage}
              </span>
              last year
            </p>
          </div>
          <LargePossessionCardGraph />
          {/* <div className="flex w-full justify-between px-4 pb-2"> */}
          {/* <div className="flex flex-col px-4">
            <div className="flex justify-between">
              <p className="text-muted-foreground text-sm">Purchase Price</p>
              <p className="text-md font-semibold">$350,000</p>
            </div>
            <div className="flex justify-between">
              <p className="text-muted-foreground text-sm">Interest Rate</p>
              <p className="text-md font-semibold">4.5%</p>
            </div>
          </div> */}
          <div className="flex justify-around px-4 pb-2">
            <div className="flex flex-col">
              <p className="text-muted-foreground text-sm">Monthly Expenses</p>
              <p className="text-md font-semibold">{monthlyExpenses}</p>
            </div>
            <Separator orientation="vertical" className="mx-2 h-6" />
            <div className="flex flex-col">
              <p className="text-muted-foreground text-sm">Interest Rate</p>
              <p className="text-md font-semibold">{interestRate}</p>
            </div>
            <Separator orientation="vertical" className="mx-2 h-6" />
            <div className="flex flex-col">
              <p className="text-muted-foreground text-sm">Equity</p>
              <p className="text-md font-semibold">{equity}</p>
            </div>
          </div>
          {/* </div> */}
        </div>
      </CardContent>
      {/* <div className="flex">
        <div className="flex w-full flex-col gap-2 border-r border-dashed p-4">
          <div className="text-lg font-semibold">1234 Blue Bird Lane</div>
          <div className="flex w-full justify-around gap-4">
            <div className="flex flex-col">
              <p className="text-muted-foreground text-xs">Purchase Price</p>
              <h4 className="text-md font-semibold">$255,000</h4>
            </div>
            <div className="flex flex-col">
              <p className="text-muted-foreground text-xs">Purchase Date</p>
              <h4 className="text-md font-semibold">11/22/25</h4>
            </div>
          </div>
          <div className="flex w-full justify-around gap-4">
            <div className="flex flex-col">
              <p className="text-muted-foreground text-xs">Interest Rate</p>
              <h4 className="text-md font-semibold">4.5%</h4>
            </div>
            <div className="flex flex-col">
              <p className="text-muted-foreground text-xs">Current Price</p>
              <h4 className="text-md font-semibold">$350,000</h4>
            </div>
          </div>
        </div>
        <LargePossessionCardGraph />
      </div> */}
    </Card>
  );
}
