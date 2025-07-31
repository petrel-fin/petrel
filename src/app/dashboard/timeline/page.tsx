import TimelineGraph from "~/components/charts/timeline/timeline-graph";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";

export default function DashboardTimelinePage() {
  return (
    <div className="flex h-full w-full flex-col gap-4 px-4">
      <TimelineGraph />

      {/* <Card className="h-[500px]">
        <CardHeader>
          <CardTitle>Filters</CardTitle>
          <CardDescription>
            Showing total visitors for the last 3 months
          </CardDescription>
        </CardHeader>
      </Card> */}
    </div>
  );
}
