import TimelineGraph from "~/components/charts/timeline/timeline-graph";
import { Card } from "~/components/ui/card";
import TimelineDateFilter from "./components/timeline-date-filter";
import TimelineNetGain from "./components/timeline-net-gain";
import TimelineFilterCheck from "./components/timeline-filter-check";

export default function DashboardTimelinePage() {
  return (
    <div className="flex h-full w-full gap-4 px-4">
      <div className="flex w-full flex-col gap-4">
        <TimelineDateFilter />
        <TimelineGraph height={690} />
        <TimelineNetGain />
      </div>
      <Card className="flex h-[900px] w-[500px] flex-col gap-4 p-3 dark:bg-gray-400/5">
        <div className="flex flex-col gap-2">
          <p className="text-muted-foreground p-2 text-sm leading-none">
            Primary
          </p>
          <TimelineFilterCheck
            name="Net Worth"
            amount="$42,434"
            change="+ 3.5%"
            defaultChecked
          />
          <TimelineFilterCheck
            name="Investments"
            amount="$42,434"
            change="+ 3.5%"
            defaultChecked
          />
          <TimelineFilterCheck
            name="Debt"
            amount="$42,434"
            change="+ 3.5%"
            defaultChecked
          />
          <TimelineFilterCheck
            name="Cash"
            amount="$42,434"
            change="+ 3.5%"
            defaultChecked
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-muted-foreground p-2 text-sm leading-none">
            Cash Flow
          </p>
          <TimelineFilterCheck name="Income" amount="$42,434" change="+ 3.5%" />
          <TimelineFilterCheck
            name="Expenses"
            amount="$42,434"
            change="+ 3.5%"
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-muted-foreground p-2 text-sm leading-none">
            Possessions
          </p>
          <TimelineFilterCheck
            name="Real Estate"
            amount="$42,434"
            change="+ 3.5%"
          />
          <TimelineFilterCheck
            name="Vehicles"
            amount="$42,434"
            change="+ 3.5%"
          />
          <TimelineFilterCheck name="Other" amount="$42,434" change="+ 3.5%" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-muted-foreground p-2 text-sm leading-none">
            Holdings
          </p>
          <TimelineFilterCheck name="Stocks" amount="$42,434" change="+ 3.5%" />
          <TimelineFilterCheck name="Bonds" amount="$42,434" change="+ 3.5%" />
          <TimelineFilterCheck name="Crypto" amount="$42,434" change="+ 3.5%" />
          <TimelineFilterCheck name="Other" amount="$42,434" change="+ 3.5%" />
          <TimelineFilterCheck
            name="Retirement"
            amount="$42,434"
            change="+ 3.5%"
          />
          <TimelineFilterCheck
            name="Other Holdings"
            amount="$42,434"
            change="+ 3.5%"
          />
        </div>
      </Card>
    </div>
  );
}
