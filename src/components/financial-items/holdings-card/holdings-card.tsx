import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { EllipsisVertical } from "lucide-react";
import { HoldingsCardGraph } from "./holdings-card-graph";

interface HoldingsCardProps {
  title?: string;
  institution?: string;
  amount?: string;
  changePercentage?: string;
  icon?: React.ReactNode;
}

export default function HoldingsCard({
  title,
  institution,
  amount,
  changePercentage,
  icon,
}: HoldingsCardProps) {
  return (
    <Card className="gap-0 pt-1 pb-3">
      <div className="flex items-center justify-between pr-2 pl-4">
        <div className="flex items-center gap-4 pt-1">
          {icon}
          <div className="flex flex-col">
            <h4 className="text-sm font-bold">{title}</h4>
            {institution && (
              <p className="text-muted-foreground text-sm">{institution}</p>
            )}
          </div>
        </div>
        <Button variant="ghost" size="icon">
          <EllipsisVertical />
        </Button>
      </div>
      <CardContent>
        <div className="mt-3 grid grid-cols-2">
          <div className="flex flex-col gap-1">
            <h3 className="text-2xl font-semibold">{amount}</h3>
            <p className="text-muted-foreground text-sm">
              <span className="font-bold text-green-400">
                {changePercentage}
              </span>
              last month
            </p>
          </div>
          <HoldingsCardGraph />
        </div>
      </CardContent>
    </Card>
  );
}
